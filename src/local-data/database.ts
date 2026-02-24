import { slugify } from "../components/slugify";
import type { Categoria, Producto } from "./database.types";

export const categorias: Categoria[] = [
    {
      "id": "cat_1",
      "nombre": "Mini Dumper Diésel",
      "slug": slugify("Mini Dumper Diésel"),
      "imagen": "/images/categorias/mini-dumper-diesel.jpg"
    },
    {
      "id": "cat_2",
      "nombre": "Mini Dumper Eléctrico",
      "slug": slugify("Mini Dumper Eléctrico"),
      "imagen": "/images/categorias/mini-dumper-electrico.jpg"
    },
    {
      "id": "cat_3",
      "nombre": "Maquinaria de Carga Frontal (Scoop / Mini Cargador)",
      "slug": slugify("Maquinaria de Carga Frontal"),
      "imagen": "/images/categorias/maquinaria-de-carga-frontal.jpg"
    },
    {
      "id": "cat_4",
      "nombre": "Mucking Loader",
      "slug": slugify("Mucking Loader"),
      "imagen": "/images/categorias/mucking-loader.jpg"
    },
    {
      "id": "cat_5",
      "nombre": "Generador Diésel",
      "slug": slugify("Generador Diésel"),
      "imagen": "/images/categorias/generador-diesel.jpg"
    },
    {
      "id": "cat_6",
      "nombre": "Equipos Neumáticos y de Arrastre",
      "slug": slugify("Equipos Neumáticos y de Arrastre"),
      "imagen": "/images/categorias/equipos-neumaticos-y-de-arrastre.jpg"
    },
    {
      "id": "cat_7",
      "nombre": "Ventilación Industrial",
      "slug": slugify("Ventilación Industrial"),
      "imagen": "/images/categorias/ventilacion-industrial.jpg"
    },
    {
      "id": "cat_8",
      "nombre": "Carretillas Eléctricas",
      "slug": slugify("Carretillas Eléctricas"),
      "imagen": "/images/categorias/carretillas-electricas.jpg"
    }
  ]
  
export const productos: Producto[] = [
    {
      "id": "prod_1",
      "categoria_id": "cat_1",
      "modelo_o_capacidad": "1.5 TN",
      "slug": slugify("Mini Dumper Diésel 1.5 TN"),
      "imagen_portada": "",
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
      "categoria_id": "cat_1",
      "modelo_o_capacidad": "2.5 TN CV900",
      "slug": slugify("Mini Dumper Diésel 2.5 TN CV900"),
      "imagen_portada": "",
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
      "categoria_id": "cat_1",
      "modelo_o_capacidad": "3.5 TN",
      "slug": slugify("Mini Dumper Diésel 3.5 TN"),
      "imagen_portada": "",
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
      "categoria_id": "cat_1",
      "modelo_o_capacidad": "5-6 TN",
      "slug": slugify("Mini Dumper Diésel 5-6 TN"),
      "imagen_portada": "",
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
      "categoria_id": "cat_1",
      "modelo_o_capacidad": "7-8 TN",
      "slug": slugify("Mini Dumper Diésel 7-8 TN"),
      "imagen_portada": "",
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
      "categoria_id": "cat_2",
      "modelo_o_capacidad": "1 TN",
      "slug": slugify("Mini Dumper Eléctrico 1 TN"),
      "imagen_portada": "",
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
      "categoria_id": "cat_2",
      "modelo_o_capacidad": "1.5 TN",
      "slug": slugify("Mini Dumper Eléctrico 1.5 TN"),
      "imagen_portada": "",
      "motor": {
        "tipo": "Eléctrico",
        "potencia": "3000W"
      },
      "baterias": "6 baterías secas",
      "dimensiones_globales": "Largo: 3.00 m., Ancho: 1.10 m., Alto: 1.40 m."
    },
    {
      "id": "prod_8",
      "categoria_id": "cat_2",
      "modelo_o_capacidad": "1.5 TN Sistema datai",
      "slug": slugify("Mini Dumper Eléctrico 1.5 TN Sistema datai"),
      "imagen_portada": "",
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
      "categoria_id": "cat_3",
      "modelo_o_capacidad": "GDDC - 300 KG.",
      "slug": slugify("Mini Cargador Eléctrico GDDC 300 KG"),
      "imagen_portada": "",
      "tipo": "Mini Cargador Eléctrico",
      "motor": {
        "tipo": "Eléctrico",
        "potencia": "Doble motor 2200W y Posterior"
      },
      "baterias": "5 baterías líquidas 12V 100Amp",
      "altura_max_pala": "1.87 m."
    },
    {
      "id": "prod_10",
      "categoria_id": "cat_3",
      "modelo_o_capacidad": "CHWJ-0.6",
      "slug": slugify("Scoop CHWJ-0.6"),
      "imagen_portada": "",
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
      "categoria_id": "cat_3",
      "modelo_o_capacidad": "CHWJ-1",
      "slug": slugify("Scoop CHWJ-1"),
      "imagen_portada": "",
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
      "categoria_id": "cat_4",
      "modelo_o_capacidad": "50/60T",
      "slug": slugify("Mucking Loader 50-60T"),
      "imagen_portada": "",
      "eficiencia": "60m³/hora",
      "motor": {
        "diesel": "Changchal ZS1115 (24HP)",
        "electrico_potencia": "15KW+4.5KW"
      },
      "dimensiones_globales": "Largo: 5.40 m., Ancho: 1.35 m., Alto: 1.60 m."
    },
    {
      "id": "prod_13",
      "categoria_id": "cat_5",
      "modelo_o_capacidad": "10KW",
      "slug": slugify("Generador Diésel 10KW"),
      "imagen_portada": "",
      "motor": {
        "marca": "Isuzu",
        "rpm": "1800 RPM"
      },
      "fases": "Monofase y Trifase",
      "voltaje": "220V-4400V"
    },
    {
      "id": "prod_14",
      "categoria_id": "cat_5",
      "modelo_o_capacidad": "30KW",
      "slug": slugify("Generador Diésel 30KW"),
      "imagen_portada": "",
      "motor": {
        "marca": "Perkinks",
        "modelo": "1004G"
      },
      "fases": "Monofase y Trifase",
      "voltaje": "220V-380V"
    },
    {
      "id": "prod_15",
      "categoria_id": "cat_6",
      "modelo_o_capacidad": "YT 29 EPIROX",
      "slug": slugify("Neumática YT 29 EPIROX"),
      "imagen_portada": "",
      "tipo": "Neumática",
      "peso": "29-32 Kg",
      "consumo_aire": "565 L/s",
      "profundidad_max_taladro": "6 m."
    },
    {
      "id": "prod_16",
      "categoria_id": "cat_6",
      "modelo_o_capacidad": "500 KG.",
      "slug": slugify("Winche de Arrastre 500 KG"),
      "imagen_portada": "",
      "tipo": "Winche de Arrastre",
      "motor_potencia": "4.0 KW",
      "voltaje": "220V",
      "longitud_cable": "100 m."
    },
    {
      "id": "prod_17",
      "categoria_id": "cat_7",
      "modelo_o_capacidad": "YWF2E-350 (14\") 1HP",
      "slug": slugify("Ventilador Axial YWF2E-350 14 pulgadas 1HP"),
      "imagen_portada": "",
      "tipo": "Axial",
      "flujo_aire": "4900/5400 m³/h",
      "tension": "220-240 V"
    },
    {
      "id": "prod_18",
      "categoria_id": "cat_7",
      "modelo_o_capacidad": "YWF2E-400 (16\") 2HP",
      "slug": slugify("Ventilador Axial YWF2E-400 16 pulgadas 2HP"),
      "imagen_portada": "",
      "tipo": "Axial",
      "flujo_aire": "6500/7100 m³/h",
      "tension": "220-240 V"
    },
    {
      "id": "prod_19",
      "categoria_id": "cat_8",
      "modelo_o_capacidad": "500 KG.",
      "slug": slugify("Carretilla Eléctrica 500 KG"),
      "imagen_portada": "",
      "tipo": "Carretilla Eléctrica",
      "motor_potencia": "1000 W",
      "baterias": "1 batería 60 V/32A",
      "autonomia": "10-12 horas",
      "dimensiones_globales": "Largo: 1.26 m., Ancho: 0.65 m., Alto: 1.00 m."
    }
  ]
