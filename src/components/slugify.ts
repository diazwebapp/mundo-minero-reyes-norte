const BASE_URL = import.meta.env.DEV 
  ? 'https://fuzzy-space-orbit-67p4jqjrxr7257vq.github.dev/' 
  : 'https://mmreyesdelnorte.com/';

export function slugify(text: string): string {
  return BASE_URL + text
    .toString()
    .normalize('NFD') // Separa las letras de los acentos (e.g., "é" -> "e" + "´")
    .replace(/[\u0300-\u036f]/g, '') // Elimina los acentos (diacríticos)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Reemplaza espacios con -
    .replace(/[^\w\-]+/g, '')       // Elimina caracteres no válidos
    .replace(/\-\-+/g, '-')       // Reemplaza múltiples guiones con uno solo
    + '/'; // Agrega una barra al final para formar la URL completa
}