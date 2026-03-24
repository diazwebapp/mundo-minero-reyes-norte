// scripts/upload-media.ts
import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';
import { globSync } from 'glob';
import fs from 'fs';
import path from 'path';
import mime from 'mime-types';

const BUCKET_NAME = 'media_assets';

// --- Supabase Admin Client Initialization ---
const supabaseUrl = process.env.PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error("Supabase URL and Service Key are required.");
}
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);


async function uploadMedia() {
  console.log("Starting media upload process...");

  // 1. Find all files in public/images, excluding directories
  const localFilePaths = globSync('public/images/**/*', { nodir: true });
  console.log(`Found ${localFilePaths.length} files to process.`);

  for (const localPath of localFilePaths) {
    const fileContent = fs.readFileSync(localPath);
    const cleanPath = path.relative('public', localPath); // -> images/productos/foo.png
    const contentType = mime.lookup(localPath) || 'application/octet-stream';

    console.log(`
Uploading: ${cleanPath}`);

    // 2. Upload the file to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
      .from(BUCKET_NAME)
      .upload(cleanPath, fileContent, {
        contentType,
        upsert: true, // Overwrite file if it exists
      });

    if (uploadError) {
      console.error(`❌ Error uploading ${cleanPath}:`, uploadError.message);
      continue; // Skip to the next file
    }

    console.log(`  -> Upload successful.`);

    // 3. Get the public URL for the uploaded file
    const { data: urlData } = supabaseAdmin.storage
      .from(BUCKET_NAME)
      .getPublicUrl(cleanPath);

    if (!urlData.publicUrl) {
        console.error(`❌ Could not get public URL for ${cleanPath}`);
        continue;
    }

    // 4. Insert or update the metadata in the 'media_files' table
    const fileMetadata = {
        file_path: cleanPath,
        public_url: urlData.publicUrl,
        file_type: contentType,
        file_size: fileContent.length,
    };

    const { error: dbError } = await supabaseAdmin
        .from('media_files')
        .upsert(fileMetadata, { onConflict: 'file_path' }); // Upsert based on the file_path

    if (dbError) {
        console.error(`❌ Error saving metadata for ${cleanPath} to DB:`, dbError.message);
    } else {
        console.log(`  -> ✅ Metadata saved to database.`);
    }
  }

  console.log("\nMedia upload process finished.");
}

uploadMedia();
