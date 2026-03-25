

/**
 * URL base del sitio. Se usa para generar URLs absolutas.
 * example: "https://mmreyesdelnorte.com/".
 */
export const BASE_URL = process.env.DOMAIN || import.meta.env.DOMAIN || '';

export function slugify(text: string): string {
  if (!text) return '';
  // Produce un slug limpio sin barras finales. Las rutas se construyen
  // añadiendo `/` explícitamente donde sea necesario.
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD') // Separa las letras de los acentos (e.g., "é" -> "e" + "´")
    .replace(/[\u0300-\u036f]/g, '') // Elimina los acentos (diacríticos)
    .trim()
    .replace(/\s+/g, '-')           // Reemplaza espacios con -
    .replace(/[^\w\-#?=&]+/g, '')   // Elimina caracteres no válidos, permitiendo # ? = &
    .replace(/\-\-+/g, '-')       // Reemplaza múltiples guiones con uno solo
    
    ;
}

export const getPermalink = (slugs:(string|undefined)[],simple:boolean=false)=>{
  let permalink = ""
  for(let slug of slugs){
    if (slug) permalink += slug+'/'
  }
  // Si no hay slugs válidos y es simple, devolvemos /
  if (!permalink && simple) return '/';
  
  return !simple ? (BASE_URL ? BASE_URL + '/' + permalink : '/' + permalink) : '/' + permalink
}

/**
 * Genera el permalink para una categoría, manejando subcategorías.
 * Si es una subcategoría (tiene parent_id), genera un link tipo /padre?hijo
 */
export const getCategoryPermalink = (categoria: any, simple: boolean = true) => {
  if (categoria.parent_id && categoria.parent) {
    const parentSlug = categoria.parent.slug;
    if (!parentSlug) return getPermalink([categoria.slug], simple);
    
    const parentLink = getPermalink([parentSlug], simple);
    // Eliminar barra final si existe antes de añadir ?
    const cleanParent = parentLink.endsWith('/') ? parentLink.slice(0, -1) : parentLink;
    return `${cleanParent}?${categoria.slug}`;
  }
  return getPermalink([categoria.slug], simple);
}

export const getMediaPermalink = (slug:string)=>{
  // 1. Si el slug ya empieza con http, no le añadas la BASE_URL
  if (slug.startsWith('http')) return slug;

  // 2. Asegurarnos de que no haya doble barra entre la URL y el path
  const cleanBase = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;
  const cleanSlug = slug.startsWith('/') ? slug : '/' + slug;

  return `${cleanBase}${cleanSlug}`;

}