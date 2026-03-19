import type { Producto, Categoria } from "../local-data/database.types";


/**
 * @param {Array} array - El array original
 * @param {number} page - El número de página (empezando en 1)
 * @param {number} pageSize - Elementos por página
 * @param {number} cat_id - id_categoria
 */

export function get_products(array: Producto[], page: number, pageSize: number, cat_id: number) {
  const filteredItems: Producto[] = [];
  
  // Optimizamos el filtrado con un bucle manual
  for (const item of array) {
    if (item.categoria_id === cat_id) {
      filteredItems.push(item);
    }
  }

  const startIndex = (page - 1) * pageSize;
  return filteredItems.slice(startIndex, startIndex + pageSize);
}

export function get_categories(array: Categoria[], page: number, pageSize: number, parent_id: number | null) {
  const filteredItems: Categoria[] = [];
  
  // Optimizamos el filtrado con un bucle manual
  for (const item of array) {
    if (item.parent_id === parent_id) {
      filteredItems.push(item);
    }
  }

  const startIndex = (page - 1) * pageSize;
  return filteredItems.slice(startIndex, startIndex + pageSize);
}