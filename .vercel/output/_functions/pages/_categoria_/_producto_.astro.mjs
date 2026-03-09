import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BQOdzJnl.mjs';
import 'piccolore';
import { B as BASE_URL, $ as $$Layout, p as productos, c as categorias } from '../../chunks/Layout_CDZSqJ2v.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  return productos.map((producto) => {
    const categoria = categorias.find((c) => c.id === producto.categoria_id);
    return {
      params: {
        categoria: categoria?.slug,
        producto: producto.slug
      },
      props: { producto, categoria }
    };
  });
}
const $$producto = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$producto;
  const { producto, categoria } = Astro2.props;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${categoria.nombre} ${producto.modelo_o_capacidad}`,
    "description": producto.description,
    "url": `${BASE_URL}${categoria.slug}${producto.slug}`,
    "image": [producto.imagen_portada],
    "brand": {
      "@type": "Brand",
      "name": "Mundo Minero Los Reyes Norte"
    },
    offers: {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "Consultar",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": producto.nombre, "description": producto.description, "canonical": BASE_URL + categoria.slug + producto.slug, "schemas": [productSchema] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h1>${producto.nombre}</h1> </section> ` })}`;
}, "/workspaces/mundo-minero-reyes-norte/src/pages/[categoria]/[producto].astro", void 0);

const $$file = "/workspaces/mundo-minero-reyes-norte/src/pages/[categoria]/[producto].astro";
const $$url = "/[categoria]/[producto]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$producto,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
