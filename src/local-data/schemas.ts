type itemReviewedType = "Product" | "LocalBusiness" | "Organization" | "Service" | "Movie" | "Book" | "Place" | "Recipe" 


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
export type AggregateRating={
    "@type":"AggregateRating",
    "itemReviewed": { 
      "@type": itemReviewedType,
      "name": string
      "@id": string
    }
    "ratingValue": string
    "bestRating"?: string,
    "reviewCount": string
}

// Definición del tipo para una oferta de producto
export type ProductOffer = {
  '@type': 'Offer';
  priceCurrency: string; // Ej: 'USD', 'VES'
  price: string; // El precio como string para manejar decimales
  availability: 'https://schema.org/InStock' | 'https://schema.org/OutOfStock' | 'https://schema.org/PreOrder' | 'https://schema.org/Discontinued';
  url?: string; // Opcional: URL de la oferta específica si es diferente a la del producto
  priceValidUntil?: string; // Opcional: Fecha hasta la cual el precio es válido
};

// Definición del tipo para un producto individual dentro de la colección
export type ProductInCollection = {
  '@type': 'Product';
  name: string;
  url: string; // URL de la página de detalle del producto
  image: string; // URL de la imagen principal del producto
  description?: string; // Opcional: descripción del producto
  sku?: string; // Opcional: Stock Keeping Unit
  mpn?: string; // Opcional: Manufacturer Part Number
  brand?: {
    '@type': 'Brand' | 'Organization';
    name: string;
  };
  offers: ProductOffer | ProductOffer[]; // Una o varias ofertas
  aggregateRating?: { // Opcional: Calificación promedio
    '@type': 'AggregateRating';
    ratingValue: string; // Ej: '4.5'
    reviewCount: string; // Ej: '120'
  };
};

// Definición del tipo para la ProductCollection
export type ProductCollectionSchema = {
  '@context': 'https://schema.org';
  '@type': 'ProductCollection';
  name: string;
  description: string;
  url: string; // URL de la página de la categoría
  includesObject: ProductInCollection[]; // Array de productos en la colección
};

// Definición básica para ContactPoint
export type ContactPoint = {
  '@type': 'ContactPoint';
  telephone: string;
  contactType: string;
  areaServed?: string | string[]; // Ej: 'US', ['US', 'CA']
  availableLanguage?: string | string[]; // Ej: 'English', ['en', 'es']
};

// Definición para la entidad Organization
export type OrganizationSchema = {
  '@context': 'https://schema.org';
  '@type': 'Organization';
  '@id'?: string; // ID único para referenciar la organización en otras partes del schema
  name: string;
  url: string; // URL oficial de la organización
  logo?: string; // URL del logotipo de la organización
  sameAs?: string[]; // Array de URLs a perfiles sociales o similares (ej: Twitter, Facebook, LinkedIn)
  description?: string; // Descripción de la organización
  contactPoint?: ContactPoint | ContactPoint[]; // Información de contacto
  email:string
  address?: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  taxID?: string; // Número de identificación fiscal
  vatID?: string; // Número de IVA
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