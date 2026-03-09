import { c as createComponent, m as maybeRenderHead, r as renderComponent, d as addAttribute, b as renderTemplate, a as createAstro, e as renderSlot, f as renderHead, u as unescapeHTML } from './astro/server_BQOdzJnl.mjs';
import 'piccolore';
import { $ as $$Image } from './_astro_assets_BFPKhHQ1.mjs';
/* empty css                              */
import 'clsx';

const BASE_URL$1 = "https://mmreyesdelnorte.com/";
function slugify(text) {
  return text.toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-") + "/";
}

const BASE_URL = "https://mmreyesdelnorte.com";
const categorias = [
  {
    "id": "cat_1",
    "nombre": "Mini Dumper Diésel",
    "description": "Equipos robustos y confiables para transporte de material en minas, con motores diésel eficientes.",
    "slug": slugify("Mini Dumper Diésel"),
    "imagen": BASE_URL + "/images/categorias/mini-dumper-diesel.webp"
  },
  {
    "id": "cat_2",
    "nombre": "Mini Dumper Eléctrico",
    "description": "Soluciones limpias y silenciosas para obra subterránea, 100% eléctricas.",
    "slug": slugify("Mini Dumper Eléctrico"),
    "imagen": BASE_URL + "/images/categorias/mini-dumper-electrico.webp"
  },
  {
    "id": "cat_3",
    "nombre": "Scoop / Mini Cargador",
    "description": "Carga y maniobra de material en espacios reducidos con alto rendimiento.",
    "slug": slugify("scoop-mini-cargador"),
    "imagen": BASE_URL + "/images/categorias/scoop.webp"
  },
  {
    "id": "cat_4",
    "nombre": "Mucking Loader",
    "description": "Máxima productividad en extracción de escombros con velocidad y potencia.",
    "slug": slugify("Mucking Loader"),
    "imagen": BASE_URL + "/images/categorias/mucking-loader.webp"
  },
  {
    "id": "cat_5",
    "nombre": "Grupos Electrógenos",
    "description": "Generadores diésel versátiles para energía confiable en campo.",
    "slug": slugify("grupos Electrogenos"),
    "imagen": BASE_URL + "/images/categorias/electrogenos.webp"
  },
  {
    "id": "cat_6",
    "nombre": "Perforación y Arrastre",
    "description": "Herramientas neumáticas y winches robustos para perforar y arrastrar carga.",
    "slug": slugify("perforacion y Arrastre"),
    "imagen": BASE_URL + "/images/categorias/arrastre.png"
  },
  {
    "id": "cat_7",
    "nombre": "Ventilación Industrial",
    "description": "Sistemas de flujo de aire potentes para mantener condiciones seguras.",
    "slug": slugify("Ventilación Industrial"),
    "imagen": BASE_URL + "/images/categorias/ventiladores.webp"
  },
  {
    "id": "cat_8",
    "nombre": "Carretillas Eléctricas",
    "description": "Movilidad eléctrica ligera para transporte interno eficiente.",
    "slug": slugify("Carretillas Eléctricas"),
    "imagen": BASE_URL + "/images/categorias/carretilla.webp"
  }
];
const productos = [
  {
    "id": "prod_1",
    "nombre": "Mini Dumper Diésel 1.5 TN",
    "description": "Mini Dumper Diésel 1.5 TN ideal para transporte de carga liviana con motor de 22 HP.",
    "categoria_id": "cat_1",
    "modelo_o_capacidad": "1.5 TN",
    "slug": slugify("Mini Dumper Diésel 1.5 TN"),
    "imagen_portada": BASE_URL + "/images/productos/mini-dumper-diesel-1.5tnn.png",
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
    "imagen_portada": BASE_URL + "/images/productos/mini-dumper-diesel-2.5tn.png",
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
    "imagen_portada": BASE_URL + "/images/productos/mini-dumper-diesel-3.5tn.png",
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
    "imagen_portada": BASE_URL + "/images/productos/mini-dumper-diesel-6tn.png",
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
    "imagen_portada": BASE_URL + "/images/productos/mini-dumper-diesel-8tn.png",
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
    "categoria_id": "cat_2",
    "modelo_o_capacidad": "1 TN",
    "slug": slugify("Mini Dumper Eléctrico 1 TN"),
    "imagen_portada": BASE_URL + "/images/productos/mini-dumper-electrico-1tn.png",
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
    "categoria_id": "cat_2",
    "modelo_o_capacidad": "1.5 TN",
    "slug": slugify("Mini Dumper Eléctrico 1.5 TN"),
    "imagen_portada": BASE_URL + "/images/productos/mini-dumper-electrico-1.5tn.webp",
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
    "categoria_id": "cat_2",
    "modelo_o_capacidad": "1.5 TN Sistema datai",
    "slug": slugify("Mini Dumper Eléctrico 1.5 TN Sistema datai"),
    "imagen_portada": BASE_URL + "/images/productos/mini-dumper-electrico-1.5tn.webp",
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
    "nombre": "Mini Cargador Eléctrico GDDC 300 KG",
    "description": "Mini Cargador Eléctrico GDDC 300 KG con doble motor para máxima potencia en espacios reducidos.",
    "categoria_id": "cat_3",
    "modelo_o_capacidad": "GDDC - 300 KG.",
    "slug": slugify("Mini Cargador Eléctrico GDDC 300 KG"),
    "imagen_portada": BASE_URL + "/images/productos/mini-cargador-gddc.png",
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
    "nombre": "Scoop CHWJ-0.6",
    "description": "Scoop CHWJ-0.6 con motor DEUTZ 60kw y volúmen 0.6m³ para carga ligera.",
    "categoria_id": "cat_3",
    "modelo_o_capacidad": "CHWJ-0.6",
    "slug": slugify("Scoop CHWJ-0.6"),
    "imagen_portada": BASE_URL + "/images/productos/scoops-chwj-06.png",
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
    "imagen_portada": BASE_URL + "/images/productos/scoops-chwj-06.png",
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
    "imagen_portada": BASE_URL + "/images/productos/mucking-loader-60tn.png",
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
    "imagen_portada": BASE_URL + "/images/productos/Generador-Diesel-10KW.png",
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
    "imagen_portada": BASE_URL + "/images/productos/Generador-Diesel-30KW.png",
    "motor": {
      "marca": "Perkinks",
      "modelo": "1004G"
    },
    "fases": "Monofase y Trifase",
    "voltaje": "220V-380V"
  },
  {
    "id": "prod_15",
    "nombre": "Neumática YT 29 EPIROX",
    "description": "Neumática YT 29 EPIROX, ligera y poderosa (29‑32Kg) para perforaciones hasta 6m.",
    "categoria_id": "cat_6",
    "modelo_o_capacidad": "YT 29 EPIROX",
    "slug": slugify("Neumática YT 29 EPIROX"),
    "imagen_portada": BASE_URL + "/images/productos/mini-dumper-diesel-1.5tn.png",
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
    "imagen_portada": BASE_URL + "/images/productos/mini-dumper-diesel-1.5tn.png",
    "tipo": "Winche de Arrastre",
    "motor_potencia": "4.0 KW",
    "voltaje": "220V",
    "longitud_cable": "100 m."
  },
  {
    "id": "prod_17",
    "nombre": 'Ventilador Axial YWF2E-350 (14") 1HP',
    "description": 'Ventilador Axial YWF2E-350 14" 1HP con flujo 4900‑5400 m³/h para ventilación industrial.',
    "categoria_id": "cat_7",
    "modelo_o_capacidad": 'YWF2E-350 (14") 1HP',
    "slug": slugify("Ventilador Axial YWF2E-350 14 pulgadas 1HP"),
    "imagen_portada": BASE_URL + "/images/productos/mini-dumper-diesel-1.5tn.png",
    "tipo": "Axial",
    "flujo_aire": "4900/5400 m³/h",
    "tension": "220-240 V"
  },
  {
    "id": "prod_18",
    "nombre": 'Ventilador Axial YWF2E-400 (16") 2HP',
    "description": 'Ventilador Axial YWF2E-400 16" 2HP con flujo 6500‑7100 m³/h para grandes espacios.',
    "categoria_id": "cat_7",
    "modelo_o_capacidad": 'YWF2E-400 (16") 2HP',
    "slug": slugify("Ventilador Axial YWF2E-400 16 pulgadas 2HP"),
    "imagen_portada": BASE_URL + "/images/productos/mini-dumper-diesel-1.5tn.png",
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
    "imagen_portada": BASE_URL + "/images/productos/mini-dumper-diesel-1.5tn.png",
    "tipo": "Carretilla Eléctrica",
    "motor_potencia": "1000 W",
    "baterias": "1 batería 60 V/32A",
    "autonomia": "10-12 horas",
    "dimensiones_globales": "Largo: 1.26 m., Ancho: 0.65 m., Alto: 1.00 m."
  }
];

const fichaTecnica = {
  "informacion_general": {
    "nombre_corto": "MUNDO MINERO LOS REYES DEL NORTE"},
  "domicilio_fiscal": {
    "direccion": "AV. AMERICA SUR Nro. 836",
    "distrito": "TRUJILLO"},
  "datos_contacto": {
    "telefono_ventas": "+51920310887",
    "correo_electronico": "mmreyesdelnorte@gmail.com"}};

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { href: "#nosotros", label: "Nosotros" },
    { href: "#productos", label: "Productos" },
    { href: "#contacto", label: "Contacto" }
  ];
  return renderTemplate`${maybeRenderHead()}<header id="header" data-astro-cid-3ef6ksr2> <nav class="navbar" data-astro-cid-3ef6ksr2> <div class="nav-container" data-astro-cid-3ef6ksr2> <a href="/" class="logo" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Image", $$Image, { "src": "/white-blue-logo.png", "title": "Mundo Minero Reyes Norte", "alt": "Mundo Minero Reyes Norte", "width": "100", "height": "100", "data-astro-cid-3ef6ksr2": true })} </a> <ul class="nav-links" data-astro-cid-3ef6ksr2> ${navLinks.map((link) => renderTemplate`<li data-astro-cid-3ef6ksr2><a${addAttribute(link.href, "href")} data-astro-cid-3ef6ksr2>${link.label}</a></li>`)} </ul> <div class="nav-contact" data-astro-cid-3ef6ksr2> <a${addAttribute(`https://wa.me/` + fichaTecnica.datos_contacto.telefono_ventas, "href")} class="btn" target="_blank" rel="noopener" data-astro-cid-3ef6ksr2> <svg class="whatsapp" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-3ef6ksr2> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-3ef6ksr2></path> </svg> ${fichaTecnica.datos_contacto.telefono_ventas} </a> </div> </div> </nav> </header> `;
}, "/workspaces/mundo-minero-reyes-norte/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const { informacion_general, datos_contacto, domicilio_fiscal } = fichaTecnica;
  return renderTemplate`${maybeRenderHead()}<footer> <div class="footer-container"> <div class="footer-grid"> <div class="footer-section"> <h3>${informacion_general.nombre_corto}</h3> <p>
Especialistas en distribución y comercialización de equipos para la industria minera
					desde 2020.
</p> </div> <div class="footer-section"> <h4>Enlaces Rápidos</h4> <ul> <li><a href="#nosotros">Nosotros</a></li> <li><a href="#productos">Productos</a></li> <li><a href="#contacto">Contacto</a></li> </ul> </div> <div class="footer-section"> <h4>Contacto</h4> <ul> <li> <a${addAttribute(`https://wa.me/${datos_contacto.telefono_ventas}`, "href")}>${datos_contacto.telefono_ventas}</a> </li> <li><a${addAttribute(`mailto:${datos_contacto.correo_electronico}`, "href")}>${datos_contacto.correo_electronico}</a></li> <li>${domicilio_fiscal.direccion}</li> <li>${domicilio_fiscal.distrito}, Perú</li> </ul> </div> <div class="footer-section"> <h4>Horario</h4> <p>Lunes - Sábado</p> <p>08:00 am - 18:00 pm</p> </div> </div> <div class="footer-bottom"> <p>&copy; ${informacion_general.nombre_corto}. Todos los derechos reservados.</p> </div> </div> </footer>`;
}, "/workspaces/mundo-minero-reyes-norte/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, lang = "es", searchConsoleCode, canonical, filtro, schemas } = Astro2.props;
  const company = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mundo Minero Los Reyes del Norte",
    url: "https://mmreyesdelnorte.com",
    logo: "https://mmreyesdelnorte.com/favicon.svg",
    sameAs: [
      "https://www.facebook.com/mmlosreyesdelnorte",
      "https://www.instagram.com/mmreyesdelnorte",
      "https://www.tiktok.com/@mmreyesdlnorte"
    ],
    description: "Maquinaria y equipos para miner\xEDa. MUNDO MINERO LOS REYES DEL NORTE, Lideres en equipos de extracci\xF3n minera.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "AV. AMERICA SUR Nro. 836",
      addressLocality: "trujillo",
      addressRegion: "La Libertad",
      postalCode: "",
      addressCountry: "PE"
    },
    foundingDate: "2004-01-01"
  };
  return renderTemplate(_b || (_b = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"><title>', ' | mundo minero los reyes norte</title><meta name="description"', '><link rel="canonical"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><script type="application/ld+json">', "<\/script>", "", "</head> <body> ", " ", " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(canonical, "href"), addAttribute(canonical, "content"), addAttribute(title, "content"), addAttribute(description, "content"), unescapeHTML(JSON.stringify(company)), schemas.map((schema) => {
    return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema)));
  }), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/workspaces/mundo-minero-reyes-norte/src/layouts/Layout.astro", void 0);

export { $$Layout as $, BASE_URL$1 as B, categorias as c, fichaTecnica as f, productos as p };
