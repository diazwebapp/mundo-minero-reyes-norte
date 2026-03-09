import { c as createComponent, m as maybeRenderHead, b as renderTemplate, a as createAstro, r as renderComponent, d as addAttribute } from '../chunks/astro/server_BQOdzJnl.mjs';
import 'piccolore';
import { f as fichaTecnica, B as BASE_URL, c as categorias, $ as $$Layout } from '../chunks/Layout_CDZSqJ2v.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$Image } from '../chunks/_astro_assets_BFPKhHQ1.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const { informacion_general } = fichaTecnica;
  return renderTemplate`${maybeRenderHead()}<section id="hero" data-astro-cid-bbe6dxrz> <div class="hero-content" data-astro-cid-bbe6dxrz> <h1 data-astro-cid-bbe6dxrz>Maquinaria y equipos para minería</h1> <p class="hero-subtitle" data-astro-cid-bbe6dxrz> ${informacion_general.nombre_corto}, Lideres en equipos de extracción minera.
</p> <a href="#productos" class="btn" data-astro-cid-bbe6dxrz>Ver Productos</a> </div> </section> `;
}, "/workspaces/mundo-minero-reyes-norte/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
const $$Categories = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Categories;
  const { categories } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="productos" data-astro-cid-qacliicl> <div class="section-header" data-astro-cid-qacliicl> <h2 class="section-label" data-astro-cid-qacliicl>Productos</h2> <p class="subtitle" data-astro-cid-qacliicl>
Categorías de maquinaria y equipos de mineria.
</p> </div> <div class="categories-grid" data-astro-cid-qacliicl> ${categories.map((categoria) => renderTemplate`<div class="category-section" data-astro-cid-qacliicl> <div class="image-container" data-astro-cid-qacliicl> ${renderComponent($$result, "Image", $$Image, { "src": categoria.imagen, "title": categoria.nombre, "alt": categoria.nombre, "loading": "lazy", "width": 200, "height": 200, "data-astro-cid-qacliicl": true })} </div> <h3 data-astro-cid-qacliicl>${categoria.nombre}</h3> <a${addAttribute(BASE_URL + categoria.slug, "href")} class="btn" data-astro-cid-qacliicl>Ver todos →</a> </div>`)} </div> </section> `;
}, "/workspaces/mundo-minero-reyes-norte/src/components/Categories.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const categoriasSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Categor\xEDas de maquinaria y equipos de mineria",
    "url": BASE_URL,
    "numberOfItems": categorias.length,
    "itemListElement": categorias.map((categoria, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": categoria.nombre,
      "url": BASE_URL + categoria.slug,
      "image": categoria.imagen
    }))
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home", "description": "Maquinaria y equipos para miner\xEDa. MUNDO MINERO LOS REYES DEL NORTE, Lideres en equipos de extracci\xF3n minera.", "canonical": "/", "schemas": [categoriasSchema] }, { "default": ($$result2) => renderTemplate` >
${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Categories", $$Categories, { "categories": categorias })} ` })}`;
}, "/workspaces/mundo-minero-reyes-norte/src/pages/index.astro", void 0);

const $$file = "/workspaces/mundo-minero-reyes-norte/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
