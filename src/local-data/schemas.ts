type itemReviewedType = "Product" | "LocalBusiness" | "Organization" | "Service" | "Movie" | "Book" | "Place" | "Recipe" 

// 1. Tipo separado para cada elemento de la lista
export type ListItem = {
  "@type": "ListItem";
  position: number;
  item: {
    "@type": "Product";
    name: string;
    image: string;
    url: string;
    // Puedes agregar description?: string o offers?: any si los tienes
  };
};

// 2. Tipo principal para la página de categoría
export type ProductItemListSchema = {
  "@context": "https://schema.org";
  "@type": "ItemList";
  name: string;
  description?: string;
  url: string;
  numberOfItems: number;
  itemListElement: ListItem[];
};

export type Article={
    "@context":"https://schema.org"
    "@type": "NewsArticle" | "Article" | "BlogPosting"
    headline: string
    image: string[]
    datePublished: string 
    dateModified: string
    author: Author
    publisher: OrganizationSchema  // Obligatorio para NewsArticle para Google
    description:string
};

type Author={
  "@type": "Person"
  "name": string
  "url"?: string
  "image"?:string
  "sameAs"?: string[]
}

/**
 * Guía para el estado del producto
 */
export type ItemCondition = 
  | 'https://schema.org/NewCondition' 
  | 'https://schema.org/UsedCondition' 
  | 'https://schema.org/RefurbishedCondition';

/**
 * Guía para disponibilidad
 */
export type Availability = 
  | 'https://schema.org/InStock' 
  | 'https://schema.org/OutOfStock' 
  | 'https://schema.org/PreOrder';

/**
 * Detalles de la Oferta: Precio y Disponibilidad
 */
export type ProductOffer = {
  "@type": "Offer";
  /** Sugerencia: El precio debe ser un string o número sin símbolos (ej: 15500.00) */
  price: string | number;
  /** Sugerencia: Usa 'PEN' para soles o 'USD' para dólares */
  priceCurrency: "PEN" | "USD";
  /** Sugerencia: Obligatorio para maquinaria. ¿Es nuevo o usado? */
  itemCondition: ItemCondition;
  availability: Availability;
  /** Sugerencia: URL de la página del producto */
  url?: string;
  /** Sugerencia: 'PE' para indicar que el servicio es para Perú */
  areaServed?: string;
};

/**
 * Marca del fabricante
 */
export type Brand = {
  "@type": "Brand";
  /** Sugerencia: Nombre de la marca (ej: Caterpillar, Komatsu, Volvo) */
  name: string;
};

/**
 * SCHEMA PRINCIPAL: Producto Individual
 */
export type ProductSchema = {
  "@context": "https://schema.org";
  "@type": "Product";
  /** Sugerencia: Nombre claro incluyendo modelo (ej: Excavadora CAT 320) */
  name: string;
  /** Sugerencia: Lista de URLs de imágenes (mínimo 1) */
  image: string[];
  /** Sugerencia: Descripción rica en palabras clave técnicas */
  description: string;
  /** Sugerencia: Identificador único interno (Stock Keeping Unit) */
  sku?: string;
  /** Sugerencia: Número de parte del fabricante (Clave en minería) */
  mpn?: string;
  url?: string;
  brand: Brand;
  offers: ProductOffer;
  /** Sugerencia: Si tienes reseñas, califica de 1 a 5 */
  aggregateRating?: {
    "@type": "AggregateRating";
    ratingValue: string | number;
    reviewCount: string | number;
  };
};


// Definición para la entidad Organization
export type OrganizationSchema = {
  '@context': 'https://schema.org';
  '@type': 'Organization';
  name: string;
  url: string; // URL oficial de la organización
  logo?: string; // URL del logotipo de la organización
  sameAs?: string[]; // Array de URLs a perfiles sociales o similares (ej: Twitter, Facebook, LinkedIn)
  description?: string; // Descripción de la organización
  address?: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  foundingDate?: string; // Fecha de fundación (formato ISO 8601: YYYY-MM-DD)
  // Puedes añadir aggregateRating o review si tienes reseñas sobre la organización en general
};

// Definición para la entidad FAQPage
export type FAQPageSchema = {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: Array<{
    '@type': 'Question';
    name: string; // La pregunta completa
    acceptedAnswer: {
      '@type': 'Answer';
      text: string; // La respuesta completa (puede contener HTML básico como <strong> o <a>)
    };
  }>;
};