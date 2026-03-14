export const BASE_URL = import.meta.env.DEV 
  ? 'https://fuzzy-space-orbit-67p4jqjrxr7257vq-4321.app.github.dev/' 
  : 'https://mmreyesdelnorte.com/';

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