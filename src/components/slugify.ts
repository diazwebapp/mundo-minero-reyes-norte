export function slugify(text: string): string {
  return text
    .toString()
    .normalize('NFD') // Separa las letras de los acentos (e.g., "é" -> "e" + "´")
    .replace(/[\u0300-\u036f]/g, '') // Elimina los acentos (diacríticos)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Reemplaza espacios con -
    .replace(/[^\w\-]+/g, '')       // Elimina caracteres no válidos
    .replace(/\-\-+/g, '-');        // Reemplaza múltiples guiones con uno solo
}