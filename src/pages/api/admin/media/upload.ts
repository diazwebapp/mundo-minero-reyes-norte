import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";
import path from 'path';
import mime from 'mime-types';

const BUCKET_NAME = 'media_assets';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_KEY;


const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const files = formData.getAll('files') as File[];

  if (!files || files.length === 0) {
    return new Response("No files uploaded", { status: 400 });
  }

  for (const file of files) {
    if (file.size === 0) continue; // Skip empty files

    const fileBuffer = await file.arrayBuffer();
    const fileName = file.name;
    // Sanitize filename to be URL-friendly, though Supabase handles most of this
    const cleanFileName = fileName.replace(/[^a-zA-Z0-9-._]/g, '_');
    const storagePath = `uploads/${Date.now()}-${cleanFileName}`;
    const contentType = file.type || mime.lookup(fileName) || 'application/octet-stream';

    // 1. Upload to Storage
    const { error: uploadError } = await supabaseAdmin.storage
      .from(BUCKET_NAME)
      .upload(storagePath, fileBuffer, {
        contentType,
        upsert: false,
      });

    if (uploadError) {
      console.error(`Error uploading ${fileName}:`, uploadError.message);
      // In a real app, you might want to collect errors and show them to the user
      continue;
    }

    // 2. Get Public URL
    const { data: urlData } = supabaseAdmin.storage
      .from(BUCKET_NAME)
      .getPublicUrl(storagePath);
    
    if (!urlData.publicUrl) {
      console.error(`Could not get public URL for ${storagePath}`);
      continue;
    }

    // 3. Save metadata to DB
    const { error: dbError } = await supabaseAdmin
      .from('media_files')
      .insert({
        file_path: storagePath,
        public_url: urlData.publicUrl,
        file_type: contentType,
        file_size: file.size,
        alt_text: fileName, // Use filename as default alt text
      });

    if (dbError) {
      console.error(`Error saving metadata for ${fileName} to DB:`, dbError.message);
    }
  }

  // Redirect back to the media page
  return redirect("/admin/media", 303);
};
