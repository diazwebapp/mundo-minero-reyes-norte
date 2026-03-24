

let dev, devUrl, prodUrl;

if (typeof import.meta !== 'undefined' && import.meta.env) {
    // Astro environment
    dev = import.meta.env.DEV;
    devUrl = import.meta.env.DEVURL;
    prodUrl = import.meta.env.PRODURL;
} else if (typeof process !== 'undefined' && process.env) {
    // Node.js environment (for seeding)
    dev = process.env.NODE_ENV === 'development';
    devUrl = process.env.DEVURL;
    prodUrl = process.env.PRODURL;
}


/**
 * URL base del sitio. Se usa para generar URLs absolutas.
 * example: "https://mmreyesdelnorte.com/".
 */
export const BASE_URL = dev
  ? devUrl
  : prodUrl;

export function slugify(text: string): string {
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

export const getPermalink = (slugs:string[],simple:boolean=false)=>{
  let permalink = ""
  for(let slug of slugs){
    permalink += slug+'/'
  }
  return !simple ? BASE_URL+'/'+permalink : '/' + permalink
}


export const getMediaPermalink = (slug:string)=>{
  // 1. Si el slug ya empieza con http, no le añadas la BASE_URL
  if (slug.startsWith('http')) return slug;

  // 2. Asegurarnos de que no haya doble barra entre la URL y el path
  const cleanBase = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;
  const cleanSlug = slug.startsWith('/') ? slug : '/' + slug;

  return `${cleanBase}${cleanSlug}`;
}