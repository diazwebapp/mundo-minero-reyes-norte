import type { APIRoute } from "astro";
import { supabaseClient } from "../../../../lib/supabase";

const slugify = (text: string) => {
    return text.toString().toLowerCase().trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-');
};

export const POST: APIRoute = async ({ params, request, redirect }) => {
    const { id } = params;
    const formData = await request.formData();
    const method = formData.get('_method')?.toString().toUpperCase();

    if (method === 'DELETE') {
        const { error } = await supabaseClient.from('categorias').delete().eq('id', id);

        if (error) {
            return new Response(JSON.stringify({ error: error.message }), { status: 500 });
        }
        return redirect("/admin/categorias", 303);
    }
    
    if (method === 'PUT') {
        const nombre = formData.get("nombre") as string;
        const description = formData.get("description") as string;
        let slug = formData.get("slug") as string;
        const parent_id = formData.get("parent_id");
        const imagen_portada = formData.get("imagen_portada") as string;
        const show = formData.get("show") === 'on';

        if (!slug) {
            slug = slugify(nombre);
        }

        const updatedCategory = {
            nombre,
            description,
            slug,
            parent_id: parent_id ? parseInt(parent_id as string) : null,
            imagen_portada,
            show,
        };

        const { error } = await supabaseClient
            .from('categorias')
            .update(updatedCategory)
            .eq('id', id);

        if (error) {
            return new Response(JSON.stringify({ error: error.message }), { status: 500 });
        }
        return redirect("/admin/categorias", 303);
    }

    return new Response("Method not allowed", { status: 405 });
};
