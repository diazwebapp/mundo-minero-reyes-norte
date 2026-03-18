import { slugify } from "../utils/config";
import type { Categoria, Producto, Pagina } from "./database.types";

export const categorias: Categoria[] = [
    {
      "id": "cat_1",
      "nombre": "Mini Dumpers",
      "description": "Los mini dumpers se utilizan en la industria minera como vehículos para transportar grandes volúmenes de material como rocas y minerales.",
      "slug": slugify("Mini Dumpers"),
      "imagen_portada": "/images/productos/mini-dumper-diesel-1.5tn.png"
    },
    /* {
      "id": "cat_2",
      "nombre": "Mini Dumpers Eléctricos",
      "description": "Soluciones limpias y silenciosas para obra subterránea, 100% eléctricas.",
      "slug": slugify("Mini Dumpers Eléctricos"),
      "imagen_portada": BASE_URL+"/images/productos/mini-dumper-electrico-1.5tn.png"
    }, */
    {
      "id": "cat_3",
      "nombre": "Scoops / Mini Cargadores",
      "description": "Este tipo de maquinaria tienen capacidad para manipular grandes cantidades de material a la vez y se utilizan para cargar de minerales los camiones.",
      "slug": slugify("scoops-mini-cargadores"),
      "imagen_portada": "/images/productos/scoop-chwj.png"
    },
    {
      "id": "cat_4",
      "nombre": "Mucking Loaders",
      "description": "Máxima productividad en extracción de escombros con velocidad y potencia.",
      "slug": slugify("Mucking Loaders"),
      "imagen_portada": "/images/productos/mucking-loader-60tn.png"
    },
    {
      "id": "cat_5",
      "nombre": "Grupos Electrógenos",
      "description": "Generadores diésel versátiles para energía confiable en campo.",
      "slug": slugify("grupos Electrogenos"),
      "imagen_portada": "/images/productos/electrogenos.png"
    },
    {
      "id": "cat_6",
      "nombre": "Perforación y Arrastre",
      "description": "Herramientas neumáticas y winches robustos para perforar y arrastrar carga.",
      "slug": slugify("perforacion y Arrastre"),
      "imagen_portada": "/images/productos/arrastre-perforacion.png"
    },
    {
      "id": "cat_7",
      "nombre": "Ventilación Industrial",
      "description": "Sistemas de flujo de aire potentes para mantener condiciones seguras.",
      "slug": slugify("Ventilación Industrial"),
      "imagen_portada": "/images/productos/ventiladores.png"
    },
    {
      "id": "cat_8",
      "nombre": "Carretillas Eléctricas",
      "description": "Movilidad eléctrica ligera para transporte interno eficiente.",
      "slug": slugify("Carretillas Eléctricas"),
      "imagen_portada": "/images/productos/carretillas-electricas.png"
    }
  ]
  
export const productos: Producto[] = [
    {
      "id": "prod_1",
      "nombre": "Mini Dumper Diésel 1.5 TN",
      "description": "Mini Dumper Diésel 1.5 TN ideal para transporte de carga liviana con motor de 22 HP.",
      "categoria_id": "cat_1",
      "modelo_o_capacidad": "1.5 TN",
      "slug": slugify("Mini Dumper Diésel 1.5 TN"),
      "imagen_portada": "/images/productos/mini-dumper-diesel-1.5tn.png",
      "imagenes": [
        { "id": 1, "url": "/images/productos/mini-dumper-diesel-1.5tn.png" },
        { "id": 2, "url": "/images/productos/mini-dumper-diesel-1.5tn-1.png" },
        { "id": 3, "url": "/images/productos/mini-dumper-diesel-1.5tn-2.png" },
        { "id": 4, "url": "/images/productos/mini-dumper-diesel-1.5tn-3.png" },
        { "id": 5, "url": "/images/productos/mini-dumper-diesel-1.5tn-4.png" },
      ],
      "motor": {
        "tipo": "Diésel",
        "potencia": "22 HP",
        "refrigeracion": "Liquida"
      },
      "dimensiones_globales": "Largo: 3.00 m., Ancho: 1.00 m., Alto: 1.45 m.",
      "sistema_transmision": "Fajas",
      "caja_cambios": "3 velocidades + retroceso + toma fuerza de alta y baja potencia."
    },
    {
      "id": "prod_2",
      "nombre": "Mini Dumper Diésel 2.5 TN CV900",
      "description": "Mini Dumper Diésel 2.5 TN CV900 con motor de 28 HP y transmisión por fajas para trabajos exigentes.",
      "categoria_id": "cat_1",
      "modelo_o_capacidad": "2.5 TN CV900",
      "slug": slugify("Mini Dumper Diésel 2.5 TN CV900"),
      "imagen_portada": "/images/productos/mini-dumper-diesel-2.5tn.png",
      "imagenes": [
        { "id": 1, "url": "/images/productos/mini-dumper-diesel-2.5tn.png" },
        { "id": 2, "url": "/images/productos/mini-dumper-diesel-2.5tn-1.png" },
        { "id": 3, "url": "/images/productos/mini-dumper-diesel-2.5tn-2.png" },
        { "id": 4, "url": "/images/productos/mini-dumper-diesel-2.5tn-3.png" },
        { "id": 5, "url": "/images/productos/mini-dumper-diesel-2.5tn-4.png" },
      ],
      "motor": {
        "tipo": "Diésel",
        "potencia": "28 HP",
        "refrigeracion": "Líquida - Radiador"
      },
      "dimensiones_globales": "Largo: 3.40 m., Ancho: 1.10 m., Alto: 1.50 m.",
      "sistema_transmision": "Fajas"
    },
    {
      "id": "prod_3",
      "nombre": "Mini Dumper Diésel 3.5 TN",
      "description": "Mini Dumper Diésel 3.5 TN de diseño compacto y motor 32 HP para maniobras eficientes.",
      "categoria_id": "cat_1",
      "modelo_o_capacidad": "3.5 TN",
      "slug": slugify("Mini Dumper Diésel 3.5 TN"),
      "imagen_portada": "/images/productos/mini-dumper-diesel-3.5tn.png",
      "imagenes": [
        { "id": 1, "url": "/images/productos/mini-dumper-diesel-3.5tn.png" },
      ],
      "motor": {
        "tipo": "Diésel",
        "potencia": "32 HP"
      },
      "dimensiones_globales": "Largo: 3.90 m., Ancho: 1.35 m., Alto: 1.48 m.",
      "sistema_transmision": "Cardán",
      "caja_cambios": "4 velocidades + retroceso + toma fuerza de alta y baja potencia."
    },
    {
      "id": "prod_4",
      "nombre": "Mini Dumper Diésel 5-6 TN",
      "description": "Mini Dumper Diésel 5-6 TN con motor turbo de 75 HP y tracción 4x4 para terrenos difíciles.",
      "categoria_id": "cat_1",
      "modelo_o_capacidad": "5-6 TN",
      "slug": slugify("Mini Dumper Diésel 5-6 TN"),
      "imagen_portada": "/images/productos/mini-dumper-diesel-6tn.png",
      "imagenes": [
        { "id": 1, "url": "/images/productos/mini-dumper-diesel-6tn.png" },
      ],
      "motor": {
        "tipo": "Diésel - Yunnei 490 Turbo",
        "potencia": "75 HP",
        "refrigeracion": "Líquida - Radiador"
      },
      "dimensiones_globales": "Largo: 4.40 m., Ancho: 1.63 m., Alto: 2.00 m.",
      "sistema_transmision": "Cardan con doble corona, tracción 4 x 4"
    },
    {
      "id": "prod_5",
      "nombre": "Mini Dumper Diésel 7-8 TN",
      "description": "Mini Dumper Diésel 7-8 TN con 102 HP y caja de cambios reforzada para cargas pesadas.",
      "categoria_id": "cat_1",
      "modelo_o_capacidad": "7-8 TN",
      "slug": slugify("Mini Dumper Diésel 7-8 TN"),
      "imagen_portada": "/images/productos/mini-dumper-diesel-6tn.png",
      "imagenes": [
        { "id": 1, "url": "/images/productos/mini-dumper-diesel-6tn.png" },
      ],
      "motor": {
        "tipo": "Diésel - Yunnei 4102 Turbo",
        "potencia": "102 HP",
        "refrigeracion": "Líquida - Radiador"
      },
      "dimensiones_globales": "Largo: 4.80 m., Ancho: 1.80 m., Alto: 2.00 m.",
      "sistema_transmision": "Cardan con doble corona, tracción 4 x 4",
      "caja_cambios": "4 velocidades + retroceso + toma fuerza de alta y baja potencia."
    },
    {
      "id": "prod_6",
      "nombre": "Mini Dumper Eléctrico 1 TN",
      "description": "Mini Dumper Eléctrico 1 TN silencioso y ecológico, perfecto para galerías subterráneas.",
      "categoria_id": "cat_1",
      "modelo_o_capacidad": "1 TN",
      "slug": slugify("Mini Dumper Eléctrico 1 TN"),
      "imagen_portada": "/images/productos/mini-dumper-electrico-1.5tn.png",
      "imagenes": [
        { "id": 1, "url": "/images/productos/mini-dumper-electrico-1.5tn.png" },
        { "id": 2, "url": "/images/productos/mini-dumper-electrico-1.5tn-1.jpeg" },
        { "id": 3, "url": "/images/productos/mini-dumper-electrico-1.5tn-2.png" },
        { "id": 4, "url": "/images/productos/mini-dumper-electrico-1.5tn-3.png" }

      ],
      "motor": {
        "tipo": "Eléctrico",
        "potencia": "3000W"
      },
      "baterias": "5 baterías secas",
      "autonomia": "6-7 horas",
      "dimensiones_globales": "Largo: 2.90 m., Ancho: 0.90 m., Alto: 1.30 m."
    },
    {
      "id": "prod_7",
      "nombre": "Mini Dumper Eléctrico 1.5 TN",
      "description": "Mini Dumper Eléctrico 1.5 TN con batería de 6 celdas y autonomía de horas prolongadas.",
      "categoria_id": "cat_1",
      "modelo_o_capacidad": "1.5 TN",
      "slug": slugify("Mini Dumper Eléctrico 1.5 TN"),
      "imagen_portada": "/images/productos/mini-dumper-electrico-1.5tn.png",
      "imagenes": [
        { "id": 1, "url": "/images/productos/mini-dumper-electrico-1.5tn.png" },
        { "id": 2, "url": "/images/productos/mini-dumper-electrico-1.5tn-1.jpeg" },
        { "id": 3, "url": "/images/productos/mini-dumper-electrico-1.5tn-2.png" },
        { "id": 4, "url": "/images/productos/mini-dumper-electrico-1.5tn-3.png" }
      ],
      "motor": {
        "tipo": "Eléctrico",
        "potencia": "3000W"
      },
      "baterias": "6 baterías secas",
      "dimensiones_globales": "Largo: 3.00 m., Ancho: 1.10 m., Alto: 1.40 m."
    },
    {
      "id": "prod_8",
      "nombre": "Mini Dumper Eléctrico 1.5 TN Sistema datai",
      "description": "Mini Dumper Eléctrico 1.5 TN Sistema datai con 4000W y protección hermética para ambientes húmedos.",
      "categoria_id": "cat_1",
      "modelo_o_capacidad": "1.5 TN Sistema datai",
      "slug": slugify("Mini Dumper Eléctrico 1.5 TN Sistema datai"),
      "imagen_portada": "/images/productos/mini-dumper-electrico-1.5tn.png",
      "imagenes": [
        { "id": 1, "url": "/images/productos/mini-dumper-electrico-1.5tn.png" },
        { "id": 2, "url": "/images/productos/mini-dumper-electrico-1.5tn-1.jpeg" },
        { "id": 3, "url": "/images/productos/mini-dumper-electrico-1.5tn-2.png" },
        { "id": 4, "url": "/images/productos/mini-dumper-electrico-1.5tn-3.png" }
      ],
      "motor": {
        "tipo": "Eléctrico",
        "potencia": "4000W Sistema hermético a prueba de agua y Sistema de 6 fases."
      },
      "baterias": "6 baterías secas",
      "autonomia": "6-7 horas",
      "dimensiones_globales": "Largo: 3.00 m., Ancho: 1.10 m., Alto: 1.40 m."
    },
    {
      "id": "prod_9",
      "nombre": "Mini Cargador Eléctrico petrolero 700 KG",
      "description": "Mini Cargador Eléctrico petrolero 700 KG con motor de 29hp,para máxima potencia en espacios reducidos.",
      "categoria_id": "cat_3",
      "modelo_o_capacidad": "petrolero - 700 KG.",
      "slug": slugify("Mini Cargador Eléctrico petrolero 700 KG"),
      "imagen_portada": "/images/productos/mini-cargador-electrico.png",
      "imagenes": [
        { "id": 1, "url": "/images/productos/mini-cargador-electrico.png" },
        { "id": 2, "url": "/images/productos/mini-cargador-electrico-700kg-2.jpeg" },
      ],
      "tipo": "Mini Cargador Eléctrico",
      "motor": {
        "tipo": "Eléctrico",
        "potencia": "motor 29hp"
      },
      "baterias": "5 baterías líquidas 12V 100Amp",
      "altura_max_pala": "1.87 m."
    },
    {
      "id": "prod_10",
      "nombre": "Scoop CHWJ-0.6",
      "description": "Scoop CHWJ-0.6 con motor DEUTZ 60kw y volúmen 0.6m³ para carga ligera.",
      "categoria_id": "cat_3",
      "modelo_o_capacidad": "CHWJ-0.6",
      "slug": slugify("Scoop CHWJ-0.6"),
      "imagen_portada": "/images/productos/scoop-chwj.png",
      "imagenes": [
        { "id": 1, "url": "/images/productos/scoop-chwj.png" },
      ],
      "tipo": "Scoop",
      "motor": {
        "modelo": "DEUTZ BF4L914",
        "potencia": "60kw/2300rpm"
      },
      "capacidad_carga": "1200 kg.",
      "volumen_cucharon": "0.6m³"
    },
    {
      "id": "prod_11",
      "nombre": "Scoop CHWJ-1",
      "description": "Scoop CHWJ-1 con motor DEUTZ 66KW y volumen 1.5 yards para mayor capacidad.",
      "categoria_id": "cat_3",
      "modelo_o_capacidad": "CHWJ-1",
      "slug": slugify("Scoop CHWJ-1"),
      "imagen_portada": "/images/productos/scoop-chwj.png",
      "imagenes": [
        { "id": 1, "url": "/images/productos/scoop-chwj.png" },
      ],
      "tipo": "Scoop",
      "motor": {
        "modelo": "DEUTZ BF4L914",
        "potencia": "66KW @ 2300rpm"
      },
      "dimensiones_globales": "6200 x 1360 x 2000 mm",
      "volumen_cucharon": "1.5 yards"
    },
    {
      "id": "prod_12",
      "nombre": "Mucking Loader 50/60TN",
      "description": "Mucking Loader 50/60TN eficiente a 60m³/hora con motores eléctricos y diésel combinados.",
      "categoria_id": "cat_4",
      "modelo_o_capacidad": "50/60TN",
      "slug": slugify("Mucking Loader 50-60TN"),
      "imagen_portada": "/images/productos/mucking-loader-60tn.png",
      "imagenes": [
        { "id": 1, "url": "/images/productos/mucking-loader-60tn.png" }
      ],
      "eficiencia": "60m³/hora",
      "motor": {
        "diesel": "Changchal ZS1115 (24HP)",
        "electrico_potencia": "15KW+4.5KW"
      },
      "dimensiones_globales": "Largo: 5.40 m., Ancho: 1.35 m., Alto: 1.60 m."
    },
    {
      "id": "prod_13",
      "nombre": "Generador Diésel 10KW",
      "description": "Generador Diésel 10KW Isuzu para energía estable en sitios remotos, monofase y trifase.",
      "categoria_id": "cat_5",
      "modelo_o_capacidad": "10KW",
      "slug": slugify("Generador Diésel 10KW"),
      "imagen_portada": "/images/productos/grupo-electrogeno-10kw.png",
      "imagenes": [
        { "id": 1, "url": "/images/productos/grupo-electrogeno-10kw.png" },
      ],
      "motor": {
        "marca": "Isuzu",
        "rpm": "1800 RPM"
      },
      "fases": "Monofase y Trifase",
      "voltaje": "220V-4400V"
    },
    {
      "id": "prod_14",
      "nombre": "Generador Diésel 30KW",
      "description": "Generador Diésel 30KW Perkins 1004G, robusto y flexible en voltajes 220‑380V.",
      "categoria_id": "cat_5",
      "modelo_o_capacidad": "30KW",
      "slug": slugify("Generador Diésel 30KW"),
      "imagen_portada": "/images/productos/grupo-electrogeno-30kw.png",
      "imagenes": [
        { "id": 1, "url": "/images/productos/grupo-electrogeno-30kw.png" },
      ],
      "motor": {
        "marca": "Perkinks",
        "modelo": "1004G"
      },
      "fases": "Monofase y Trifase",
      "voltaje": "220V-380V"
    },
    {
      "id": "prod_15",
      "nombre": "Neumática YT29 EPIROC",
      "description": "Neumática YT29 EPIROC, ligera y poderosa (29/32Kg) para perforaciones hasta 6m.",
      "categoria_id": "cat_6",
      "modelo_o_capacidad": "YT29 EPIROC",
      "slug": slugify("Neumática YT29 EPIROC"),
      "imagen_portada": "/images/productos/perforadora-yt29-1.png",
      "imagenes": [
        { "id": 1, "url": "/images/productos/perforadora-yt29-1.png" },
        { "id": 2, "url": "/images/productos/perforadora-yt29-2.png" },
      ],
      "tipo": "Neumática",
      "peso": "29-32 Kg",
      "consumo_aire": "565 L/s",
      "profundidad_max_taladro": "6m"
    },
    {
      "id": "prod_16",
      "nombre": "Winche de Arrastre 500 KG",
      "description": "Winche de Arrastre 500 KG con motor 4.0KW y cable de 100m para operaciones de arrastre confiables.",
      "categoria_id": "cat_6",
      "modelo_o_capacidad": "500 KG.",
      "slug": slugify("Winche de Arrastre 500 KG"),
      "imagen_portada": "/images/productos/winche-arrastre-500kg-1.png",
      "imagenes": [
        { "id": 1, "url": "/images/productos/winche-arrastre-500kg-1.png" },
        { "id": 2, "url": "/images/productos/winche-arrastre-500kg-2.png" },
      ],
      "tipo": "Winche de Arrastre",
      "motor_potencia": "4.0 KW",
      "voltaje": "220V",
      "longitud_cable": "100 m."
    },
    {
      "id": "prod_17",
      "nombre": "Ventilador Axial YWF2E-350 (14\") 1HP",
      "description": "Ventilador Axial YWF2E-350 14\" 1HP con flujo 4900/5400 m³/h para ventilación industrial.",
      "categoria_id": "cat_7",
      "modelo_o_capacidad": "YWF2E-350 (14\") 1HP",
      "slug": slugify("Ventilador Axial YWF2E-350 14 pulgadas 1HP"),
      "imagen_portada": "/images/productos/ventilador-1hp.png",
      "imagenes": [
        { "id": 1, "url": "/images/productos/ventilador-1hp.png" },
      ],
      "tipo": "Axial",
      "flujo_aire": "4900/5400 m³/h",
      "tension": "220-240 V"
    },
    {
      "id": "prod_18",
      "nombre": "Ventilador Axial YWF2E-400 (16\") 2HP",
      "description": "Ventilador Axial YWF2E-400 16\" 2HP con flujo 6500/7100 m³/h para grandes espacios.",
      "categoria_id": "cat_7",
      "modelo_o_capacidad": "YWF2E-400 (16\") 2HP",
      "slug": slugify("Ventilador Axial YWF2E-400 16 pulgadas 2HP"),
      "imagen_portada": "/images/productos/ventilador-2hp.png",
      "imagenes": [
        { "id": 1, "url": "/images/productos/ventilador-2hp.png" },
      ],
      "tipo": "Axial",
      "flujo_aire": "6500/7100 m³/h",
      "tension": "220-240 V"
    },
    {
      "id": "prod_19",
      "nombre": "Carretilla Eléctrica 500 KG",
      "description": "Carretilla Eléctrica 500 KG con motor 1000W y batería 60V para logística interna eficiente.",
      "categoria_id": "cat_8",
      "modelo_o_capacidad": "500 KG.",
      "slug": slugify("Carretilla Eléctrica 500 KG"),
      "imagen_portada": "/images/productos/carretilla-electrica-500kg-1.png",
      "imagenes": [
        { "id": 1, "url": "/images/productos/carretilla-electrica-500kg-1.png"},
        { "id": 2, "url": "/images/productos/carretilla-electrica-500kg-2.png" },
        { "id": 3, "url": "/images/productos/carretilla-electrica-500kg-3.png" },
        { "id": 4, "url": "/images/productos/carretilla-electrica-500kg-4.png" },
      ],
      "tipo": "Carretilla Eléctrica",
      "motor_potencia": "1000 W",
      "baterias": "1 batería 60 V/32A",
      "autonomia": "10-12 horas",
      "dimensiones_globales": "Largo: 1.26 m., Ancho: 0.65 m., Alto: 1.00 m."
    },
    {
      "id": "prod_20",
      "nombre": "Generador Diésel 100kw",
      "description": "Generador Diésel 100kw A500, robusto y flexible en voltajes 220/380V.",
      "categoria_id": "cat_5",
      "modelo_o_capacidad": "100kw",
      "slug": slugify("Generador Diésel 100kw"),
      "imagen_portada": "/images/productos/grupo-electrogeno-100kw.png",
      "imagenes": [
        { "id": 1, "url": "/images/productos/grupo-electrogeno-100kw.png" },
        { "id": 2, "url": "/images/productos/grupo-electrogeno-100kw-1.png" },
        { "id": 3, "url": "/images/productos/grupo-electrogeno-100kw-2.png" },
      ],
      "motor": {
        "marca": "Cummins",
        "modelo": "6CTAA8.3-G2"
      },
      "fases": "Monofase y Trifase",
      "voltaje": "230V-400V"
    }
  ]

export const paginas: Pagina[] = [
  {
    "id": "pag_2",
    "nombre": "Nosotros",
    "slug": slugify("nosotros"),
    "imagen_portada": "/images/paginas/nosotros.webp",
    "description": "Conoce más sobre Mundo Minero Los Reyes del Norte, especialistas en equipos mineros."
  },
]
