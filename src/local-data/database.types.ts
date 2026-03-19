export interface NavItem {
  id: number;
  nombre: string;
  slug: string;
  parent_id: number | null; // Cambiado a number y null para compatibilidad SQL
  show: boolean;
  imagen_portada: string;
  description: string;
}

export interface Categoria {
  id: number;
  nombre: string;
  description: string;
  slug: string;
  parent_id: number | null; // Cambiado a number y null para compatibilidad SQL
  show: boolean;
  imagen_portada: string;
}

export interface Producto {
  id: number;
  categoria_id: number; // Relación numérica
  nombre: string;
  description: string;
  modelo_o_capacidad: string;
  slug: string;
  imagen_portada: string;
  imagenes: any; // En Supabase será tipo JSONB
  tipo?: string;
  motor?: any; // En Supabase será tipo JSONB
  motor_potencia?: string;
  dimensiones_globales?: string;
  sistema_transmision?: string;
  caja_cambios?: string;
  peso?: string;
  baterias?: string;
  autonomia?: string;
  fases?: string;
  voltaje?: string;
  tension?: string;
  altura_max_pala?: string;
  capacidad_carga?: string;
  volumen_cucharon?: string;
  eficiencia?: string;
  consumo_aire?: string;
  profundidad_max_taladro?: string;
  longitud_cable?: string;
  flujo_aire?: string;
}