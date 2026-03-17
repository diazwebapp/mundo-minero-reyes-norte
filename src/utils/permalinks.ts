// src/services/dataService.ts
import { productos,categorias } from '../local-data/database';

export const getProductsWithCategory = (page: number = 1, pageSize: number = 10, categorySlug?: string) => {
  // 1. Filtrar por categoría si existe
  let filtered = productos;
  if (categorySlug) {
    const category = categorias.find(c => c.slug === categorySlug);
    filtered = productos.filter(p => p.categoria_id === category?.id);
  }

  // 2. Paginación
  const start = (page - 1) * pageSize;
  const paginatedItems = filtered.slice(start, start + pageSize);

  // 3. MAPEO (Aquí evitas las 100 consultas)
  // Enriquecemos el producto con el slug de su categoría UNA SOLA VEZ
  return paginatedItems.map(producto => {
    const categoria = categorias.find(c => c.id === producto.categoria_id);
    return {
      ...producto,
      categoria_slug: categoria?.slug || 'general'
    };
  });
};

