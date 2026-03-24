import type { APIRoute } from 'astro';
import { getPermalink } from '../../utils/config';
import { supabase } from '../../lib/supabase';


export const GET: APIRoute = async ({ url }) => {
  const searchTerm = url.searchParams.get('text')?.toLowerCase() || '';

  let query = supabase.from('productos').select('*, categoria:categorias(slug)');

  if (searchTerm) {
    query = query.or(`nombre.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%`);
  } else {
    query = query.limit(4);
  }

  const { data: productosFiltrados, error } = await query;

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  const productosConSlugCompleto = productosFiltrados.map((producto) => {
    const { categoria, ...rest } = producto;
    return {
      ...rest,
      slug: getPermalink([categoria.slug, producto.slug], true)
    };
  });

  return new Response(JSON.stringify(productosConSlugCompleto), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};