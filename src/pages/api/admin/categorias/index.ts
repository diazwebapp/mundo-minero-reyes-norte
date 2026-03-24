import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error("Supabase URL and Service Key are required.");
}

// Use the service key here for admin-level operations
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
  const parent_id = formData.get("parent_id");
  const imagen_portada = formData.get("imagen_portada") as string;
  const show = formData.get("show") === 'on'; // Checkbox value is 'on' or null

  // Auto-generate slug if it's empty
  if (!slug) {
    slug = slugify(nombre);
  }

  const newCategory = {
    nombre,
    description,
    slug,
    // Supabase expects null for empty foreign keys, not an empty string
    parent_id: parent_id ? parseInt(parent_id as string) : null,
    imagen_portada,
    show,
  };

  const { error } = await supabaseAdmin.from("categorias").insert(newCategory);

  if (error) {
    console.error("Error inserting category:", error.message);
    // You could redirect to an error page or back to the form with an error message
    // For now, we'll just log it and redirect
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  // Redirect to the list of categories on success
  return redirect("/admin/categorias", 303);
};
