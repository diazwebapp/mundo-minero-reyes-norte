import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_KEY;



const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

export const GET: APIRoute = async () => {
    const { data: mediaFiles, error } = await supabaseAdmin
        .from('media_files')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify(mediaFiles), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
};
