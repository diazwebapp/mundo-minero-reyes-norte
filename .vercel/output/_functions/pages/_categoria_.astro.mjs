import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, d as addAttribute, b as renderTemplate } from '../chunks/astro/server_BQOdzJnl.mjs';
import 'piccolore';
import { B as BASE_URL, $ as $$Layout, c as categorias, p as productos } from '../chunks/Layout_CDZSqJ2v.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BFPKhHQ1.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { producto, categorySlug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="product-card" data-astro-cid-tjdfhdqb> <div class="product-image" data-astro-cid-tjdfhdqb> ${renderComponent($$result, "Image", $$Image, { "src": producto.imagen_portada, "alt": producto.nombre, "title": producto.nombre, "loading": "lazy", "width": 200, "height": 200, "data-astro-cid-tjdfhdqb": true })} </div> <div class="product-info" data-astro-cid-tjdfhdqb> <h4 class="product-model" data-astro-cid-tjdfhdqb>${producto.nombre}</h4> <ul class="product-specs" data-astro-cid-tjdfhdqb> ${producto.motor?.tipo && renderTemplate`<li data-astro-cid-tjdfhdqb><strong data-astro-cid-tjdfhdqb>Motor:</strong> ${producto.motor.tipo}</li>`} ${producto.motor?.potencia && renderTemplate`<li data-astro-cid-tjdfhdqb><strong data-astro-cid-tjdfhdqb>Potencia:</strong> ${producto.motor.potencia}</li>`} ${producto.caja_cambios && renderTemplate`<li data-astro-cid-tjdfhdqb><strong data-astro-cid-tjdfhdqb>Caja:</strong> ${producto.caja_cambios}</li>`} </ul> <a${addAttribute(BASE_URL + categorySlug + producto.slug, "href")} class="btn-details" data-astro-cid-tjdfhdqb>Ver detalles</a> </div> </div> `;
}, "/workspaces/mundo-minero-reyes-norte/src/components/ProductCard.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  return categorias.map((categoria) => {
    const productosDeCategoria = productos.filter(
      (p) => p.categoria_id === categoria.id
    );
    return {
      params: { categoria: categoria.slug },
      props: { categoria, productCat: productosDeCategoria }
    };
  });
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { categoria, productCat: productosDeCategoria } = Astro2.props;
  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: categoria.nombre,
    url: BASE_URL + categoria.slug,
    numberOfItems: productosDeCategoria.length,
    itemListElement: productosDeCategoria.map((producto, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: producto.nombre,
      image: producto.imagen_portada,
      url: BASE_URL + categoria.slug + producto.slug
    }))
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Categor\xEDa: ${categoria.nombre}`, "description": `Explora todos nuestros productos en la categor\xEDa de ${categoria.nombre}.`, "canonical": categoria.slug, "schemas": [categorySchema], "data-astro-cid-65ccqkiq": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="category-page" data-astro-cid-65ccqkiq> <div class="container" data-astro-cid-65ccqkiq> <div class="section-header" data-astro-cid-65ccqkiq> <span class="section-label" data-astro-cid-65ccqkiq>Categoría</span> <h1 data-astro-cid-65ccqkiq>${categoria.nombre}</h1> <p class="subtitle" data-astro-cid-65ccqkiq>
Explora todos nuestros productos en la categoría de ${categoria.nombre}.
</p> </div> ${productosDeCategoria.length > 0 ? renderTemplate`<div class="products-grid" data-astro-cid-65ccqkiq> ${productosDeCategoria.map((producto) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "producto": producto, "categorySlug": categoria.slug, "data-astro-cid-65ccqkiq": true })}`)} </div>` : renderTemplate`<p class="no-products" data-astro-cid-65ccqkiq>No hay productos disponibles en esta categoría por el momento.</p>`} </div> </section> ` })} `;
}, "/workspaces/mundo-minero-reyes-norte/src/pages/[categoria]/index.astro", void 0);

const $$file = "/workspaces/mundo-minero-reyes-norte/src/pages/[categoria]/index.astro";
const $$url = "/[categoria]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
