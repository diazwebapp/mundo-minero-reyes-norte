import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

const BUCKET_NAME = 'media_assets';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_KEY;



const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

export const POST: APIRoute = async ({ params, request, redirect }) => {
    const { id } = params;
    const formData = await request.formData();
    const method = formData.get('_method')?.toString().toUpperCase();

    if (method === 'DELETE') {
        if (!id) return new Response("ID not provided", { status: 400 });

        // 1. Get the file path from the database
        const { data: fileRecord, error: fetchError } = await supabaseAdmin
            .from('media_files')
            .select('file_path')
            .eq('id', id)
            .single();

        if (fetchError || !fileRecord) {
            return new Response(JSON.stringify({ error: "File record not found." }), { status: 404 });
        }

        // 2. Delete the file from Storage
        const { error: storageError } = await supabaseAdmin.storage
            .from(BUCKET_NAME)
            .remove([fileRecord.file_path]);
        
        if (storageError) {
            // Log the error but proceed to delete the DB record anyway
            console.error(`Error deleting file from storage: ${fileRecord.file_path}`, storageError.message);
        }

        // 3. Delete the record from the database
        const { error: dbError } = await supabaseAdmin
            .from('media_files')
            .delete()
            .eq('id', id);

        if (dbError) {
            return new Response(JSON.stringify({ error: dbError.message }), { status: 500 });
        }

        return redirect("/admin/media", 303);
    }

    return new Response("Method not allowed", { status: 405 });
};
