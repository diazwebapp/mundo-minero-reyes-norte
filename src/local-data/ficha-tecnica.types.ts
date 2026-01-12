export interface FechasClave {
  inscripcion: string;
  inicio_actividades: string;
  emisor_electronico_desde: string;
}

export interface InformacionGeneral {
  ruc: string;
  nombre_o_razon_social: string;
  nombre_corto: string;
  nombre_comercial: string;
  tipo_contribuyente: string;
  estado_contribuyente: string;
  condicion_domicilio: string;
  dependencia_sunat: string;
  fechas_clave: FechasClave;
}

export interface DomicilioFiscal {
  direccion: string;
  zona: string;
  distrito: string;
  provincia: string;
  departamento: string;
  condicion_inmueble: string;
}

export interface ActividadesEconomicas {
  principal: string;
  secundaria_1: string;
  secundaria_2: string;
  comercio_exterior: string;
}

export interface DatosContacto {
  telefono_fijo: string;
  telefono_movil: string;
  telefono_ventas: string;
  correo_electronico: string;
}

export interface TributoAfecto {
  tributo: string;
  desde: string;
}

export interface RepresentanteLegal {
  nombre: string;
  cargo: string;
  documento: string;
  desde: string;
}

export interface AspectosLegalesTributarios {
  partida_registral: string;
  fecha_inscripcion_rrpp: string;
  sistema_contabilidad: string;
  sistema_emision_comprobantes: string;
  tributos_afectos: TributoAfecto[];
  representante_legal: RepresentanteLegal;
}

export interface MetadatosReporte {
  fecha_generacion: string;
  hora_generacion: string;
}

export interface FichaTecnica {
  informacion_general: InformacionGeneral;
  domicilio_fiscal: DomicilioFiscal;
  actividades_economicas: ActividadesEconomicas;
  datos_contacto: DatosContacto;
  aspectos_legales_tributarios: AspectosLegalesTributarios;
  metadatos_reporte: MetadatosReporte;
}