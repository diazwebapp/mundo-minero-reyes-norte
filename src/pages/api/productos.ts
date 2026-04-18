import type { APIRoute } from 'astro';
import { getMediaPermalink, getPermalink } from '../../utils/config';
import { supabaseClient } from '../../lib/supabase';
import { getImage } from 'astro:assets';


export const GET: APIRoute = async ({ url }) => {
  const searchTerm = url.searchParams.get('text')?.toLowerCase() || '';

  let query = supabaseClient.from('productos').select('*, categoria:categorias(slug)');

  if (searchTerm) {
    query = query.or(`nombre.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%`);
  } else {
    query = query.limit(4);
  }

  const { data: productosFiltrados, error } = await query;

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  const productosConSlugCompleto = await Promise.all (productosFiltrados.map(async (producto) => {
    const { categoria, ...rest } = producto;
    const optimizedImage = await getImage({
    src: producto.imagen_portada,
      width: 350,
      height: 197,
    });
    const domain = import.meta.env.DOMAIN
    const ogImageUrl = new URL(optimizedImage.src, domain).toString();
    return {
      ...rest,
      slug: getPermalink([categoria.slug, producto.slug], true),
      imagen_portada: ogImageUrl,
    };
  }))

  return new Response(JSON.stringify(productosConSlugCompleto), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};