export interface NavItem {
  id: number;
  nombre: string;
  slug: string;
  parent_id: number | null;
  show: boolean;
  imagen_portada: string;
  description: string;
}

export interface Categoria {
  id: number;
  nombre: string;
  description: string;
  slug: string;
  parent_id: number | null;
  show: boolean;
  imagen_portada: string;
}

export interface Producto {
  id: number;
  categoria_id: number;
  nombre: string;
  description: string;
  slug: string;
  imagen_portada: string;
  imagenes: any;
  caracteristicas: {
    [key: string]: any;
  };
}
