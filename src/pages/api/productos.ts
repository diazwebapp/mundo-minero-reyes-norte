import type { APIRoute } from 'astro';
import { productos } from '../../local-data/database';
import type { Producto } from '../../local-data/database.types';


export const GET: APIRoute = ({ url }) => {
  // 1. Obtener el parámetro 'text' de la URL (ej: /api/productos?text=dumper)
  const searchTerm = url.searchParams.get('text')?.toLowerCase() || '';

// 2. Filtrar los productos de la base de datos
const productosFiltrados = (productos as Producto[]).filter((p) => {
  // Si no hay término de búsqueda, los mantenemos todos para luego limitar
  if (!searchTerm) return true;

  // Buscamos coincidencias en nombre, descripción y modelo
  const matchNombre = p.nombre.toLowerCase().includes(searchTerm);
  const matchDesc = p.description.toLowerCase().includes(searchTerm);
  const matchModelo = p.modelo_o_capacidad.toLowerCase().includes(searchTerm);
  const matchMotor = p.motor?.potencia?.toLowerCase().includes(searchTerm);

  return matchNombre || matchDesc || matchModelo || matchMotor;
});

// --- Lógica de Retorno Condicional ---
// Si el parámetro está vacío, tomamos solo los primeros 4. 
// Si hay búsqueda, devolvemos todos los filtrados.
const resultadosFinales = searchTerm 
  ? productosFiltrados 
  : productosFiltrados.slice(0, 4);

// 3. Retornar la respuesta en formato JSON
return new Response(JSON.stringify(resultadosFinales), {
  status: 200,
  headers: {
    'Content-Type': 'application/json',
  },
});
};