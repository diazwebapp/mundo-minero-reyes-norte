import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_KEY;

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

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
        const { error } = await supabaseAdmin.from('productos').delete().eq('id', id);

        if (error) {
            return new Response(JSON.stringify({ error: error.message }), { status: 500 });
        }
        return redirect("/admin/productos", 303);
    }
    
    if (method === 'PUT') {
        const nombre = formData.get("nombre") as string;
        const description = formData.get("description") as string;
        let slug = formData.get("slug") as string;
        const categoria_id = formData.get("categoria_id");
        const imagen_portada = formData.get("imagen_portada") as string;
        const imagenes_str = formData.get("imagenes") as string;
        // const caracteristicas_str = formData.get("caracteristicas") as string; // No longer a single string

        if (!slug) {
            slug = slugify(nombre);
        }

        let imagenes;
        try {
            if (imagenes_str) {
                imagenes = JSON.parse(imagenes_str);
            } else {
                imagenes = [];
            }
        } catch (e) {
            return new Response(JSON.stringify({ error: "Invalid JSON for imagenes" }), { status: 400 });
        }

        const caracteristicas: Record<string, string> = {};
        for (let i = 0; ; i++) {
            const key = formData.get(`caracteristicas_key_${i}`) as string;
            const value = formData.get(`caracteristicas_value_${i}`) as string;
            if (key === null && value === null) break; // No more characteristics
            if (key && value) {
                caracteristicas[key] = value;
            }
        }

        const updatedProducto = {
            nombre,
            description,
            slug,
            categoria_id: categoria_id ? parseInt(categoria_id as string) : null,
            imagen_portada,
            imagenes,
            caracteristicas,
        };

        const { error } = await supabaseAdmin
            .from('productos')
            .update(updatedProducto)
            .eq('id', id);

        if (error) {
            return new Response(JSON.stringify({ error: error.message }), { status: 500 });
        }
        return redirect("/admin/productos", 303);
    }

    return new Response("Method not allowed", { status: 405 });
};
