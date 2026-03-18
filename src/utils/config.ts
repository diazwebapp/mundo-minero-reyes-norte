

/**
 * URL base del sitio. Se usa para generar URLs absolutas.
 * example: "https://mmreyesdelnorte.com/".
 */
export const BASE_URL = import.meta.env.DEV
  ? import.meta.env.DEVURL
  : import.meta.env.PRODURL;

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

export const getPermalink = (slugs:string[])=>{
  let permalink = ""
  for(let slug of slugs){
    permalink += slug+'/'
  }
  return BASE_URL+permalink
}


export const getMediaPermalink = (slugs:string[])=>{
  let permalink = ""
  for(let slug of slugs){
    permalink += slug
  }
  return BASE_URL+permalink
}