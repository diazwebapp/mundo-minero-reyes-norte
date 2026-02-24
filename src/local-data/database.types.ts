

// Tipos para las categorías (Tabla de categorías)
export interface Categoria {
  id: string;
  nombre: string;
  slug: string;
  imagen: string;
}

// Tipos para el objeto Motor (Sus propiedades varían según si es diésel o eléctrico)
export interface Motor {
  tipo?: string;
  potencia?: string;
  refrigeracion?: string;
  modelo?: string;
  diesel?: string;
  electrico_potencia?: string;
  marca?: string;
  rpm?: string;
}

// Tipos para los productos (Tabla de productos)
export interface Producto {
  id: string;
  categoria_id: string;
  modelo_o_capacidad: string;
  slug: string;
  imagen_portada: string; // URL o path de la imagen
  
  // Opcional: Para sub-tipos dentro de una misma categoría (ej. Scoop, Axial)
  tipo?: string; 

  // --- Características Técnicas (Opcionales según el producto) ---
  
  // Propiedades de motorización
  motor?: Motor;
  motor_potencia?: string; // Algunos equipos simples lo tienen como string directo
  
  // Propiedades físicas y de movimiento
  dimensiones_globales?: string;
  sistema_transmision?: string;
  caja_cambios?: string;
  peso?: string;
  
  // Propiedades de equipos eléctricos/baterías
  baterias?: string;
  autonomia?: string;
  fases?: string;
  voltaje?: string;
  tension?: string;
  
  // Propiedades de maquinaria pesada / carga
  altura_max_pala?: string;
  capacidad_carga?: string;
  volumen_cucharon?: string;
  
  // Propiedades específicas de Mucking Loader o equipos neumáticos
  eficiencia?: string;
  consumo_aire?: string;
  profundidad_max_taladro?: string;
  longitud_cable?: string;
  
  // Propiedades de ventilación
  flujo_aire?: string;
}

// Tipo raíz (Root) que engloba toda la base de datos JSON
export interface CatalogoData {
  empresa: string;
  categorias: Categoria[];
  productos: Producto[];
}