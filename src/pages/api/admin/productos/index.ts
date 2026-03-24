import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error("Supabase URL and Service Key are required.");
}

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

const slugify = (text: string) => {
    return text.toString().toLowerCase().trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-');
};

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
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

  const newProducto = {
    nombre,
    description,
    slug,
    categoria_id: categoria_id ? parseInt(categoria_id as string) : null,
    imagen_portada,
    imagenes,
    caracteristicas,
  };

  const { error } = await supabaseAdmin.from("productos").insert(newProducto);

  if (error) {
    console.error("Error inserting product:", error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return redirect("/admin/productos", 303);
};
