// scripts/seed-categories.ts
import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

// Manually copy the data to make the script self-contained
const localCategorias = [
    { id: 1, nombre: "Mini Dumpers", description: "Los mini dumpers se utilizan en la industria minera como vehículos para transportar grandes volúmenes de material como rocas y minerales.", slug: "mini-dumpers", show: true, parent_id: null, imagen_portada: "/images/productos/mini-dumper-diesel-1.5tn.png" },
    { id: 2, nombre: "Repuestos", description: "Repuestos especializados para minería: llantas, rines, sistemas de frenos y brocas alta gama. Asegure la operatividad con tecnología de punta.", slug: "repuestos", show: false, parent_id: null, imagen_portada: "/images/cat-repuestos.png" },
    { id: 3, nombre: "Scoops / Mini Cargadores", description: "Este tipo de maquinaria tienen capacidad para manipular grandes cantidades de material a la vez y se utilizan para cargar de minerales los camiones.", slug: "scoops-mini-cargadores", show: true, parent_id: null, imagen_portada: "/images/productos/scoop-chwj.png" },
    { id: 4, nombre: "Mucking Loaders", description: "Máxima productividad en extracción de escombros con velocidad y potencia.", slug: "mucking-loaders", show: true, parent_id: null, imagen_portada: "/images/productos/mucking-loader-60tn.png" },
    { id: 5, nombre: "Grupos Electrógenos", description: "Generadores diésel versátiles para energía confiable en campo.", slug: "grupos-electrogenos", show: true, parent_id: null, imagen_portada: "/images/productos/electrogenos.png" },
    { id: 6, nombre: "Perforación y Arrastre", description: "Herramientas neumáticas y winches robustos para perforar y arrastrar carga.", slug: "perforacion-y-arrastre", show: true, parent_id: null, imagen_portada: "/images/productos/arrastre-perforacion.png" },
    { id: 7, nombre: "Ventilación Industrial", description: "Sistemas de flujo de aire potentes para mantener condiciones seguras.", slug: "ventilacion-industrial", show: true, parent_id: null, imagen_portada: "/images/productos/ventiladores.png" },
    { id: 8, nombre: "Carretillas Eléctricas", description: "Movilidad eléctrica ligera para transporte interno eficiente.", slug: "carretillas-electricas", show: true, parent_id: null, imagen_portada: "/images/productos/carretillas-electricas.png" },
    { id: 9, nombre: "Llantas", description: "", parent_id: 2, slug: "llantas", show: true, imagen_portada: "/images/productos/repuestos/llantas.png" },
    { id: 10, nombre: "Motores", description: "", parent_id: 2, slug: "motores", show: true, imagen_portada: "/images/productos/repuestos/motores.png" },
    { id: 11, nombre: "Aceleradores y frenos", description: "", parent_id: 2, slug: "aceleradores-frenos", show: true, imagen_portada: "/images/productos/repuestos/aceleradores.png" },
    { id: 12, nombre: "Cargadores", description: "", parent_id: 2, slug: "cargadores", show: true, imagen_portada: "/images/productos/repuestos/cargadores.png" },
    { id: 13, nombre: "Brocas", description: "", parent_id: 2, slug: "brocas", show: true, imagen_portada: "/images/productos/repuestos/brocas.png" },
    { id: 14, nombre: "Cilindros de frenos", description: "", parent_id: 2, slug: "cilindros-frenos", show: true, imagen_portada: "/images/productos/repuestos/cilindros-frenos.png" },
    { id: 15, nombre: "switchs", description: "", parent_id: 2, slug: "switchs", show: true, imagen_portada: "/images/productos/repuestos/switch.png" },
    { id: 16, nombre: "palancas", description: "", parent_id: 2, slug: "palancas", show: true, imagen_portada: "/images/productos/repuestos/palancas.png" },
];


const supabaseUrl = process.env.PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error("Supabase URL and Service Key are required.");
}

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

async function seedDatabase() {
  console.log("Seeding categories with new strategy...");

  // 1. Clear table
  console.log("Deleting existing categories...");
  const { error: deleteError } = await supabaseAdmin.from('categorias').delete().neq('id', -1);
  if (deleteError) {
    console.error("Error deleting data:", deleteError.message);
    return;
  }

  // 2. Insert parent categories (without providing an ID)
  const parentCategorias = localCategorias.filter(c => c.parent_id === null);
  console.log(`Inserting ${parentCategorias.length} parent categories...`);
  const { data: insertedParents, error: parentError } = await supabaseAdmin
    .from('categorias')
    .insert(parentCategorias.map(p => ({
        nombre: p.nombre,
        description: p.description,
        slug: p.slug,
        show: p.show,
        imagen_portada: p.imagen_portada
    })))
    .select('id, nombre'); // Select the new ID and name

  if (parentError) {
    console.error('Error inserting parent categories:', parentError.message);
    return;
  }
   console.log('✅ Inserted parent categories.');


  // 3. Create a map from old ID to new DB-generated ID
  const idMap = new Map<number, number>();
  insertedParents.forEach(newParent => {
    const oldParent = parentCategorias.find(p => p.nombre === newParent.nombre);
    if (oldParent) {
      idMap.set(oldParent.id, newParent.id);
    }
  });
  console.log('Created ID map for parent categories.');

  // 4. Prepare and insert child categories
  const childCategorias = localCategorias.filter(c => c.parent_id !== null);
  const childrenToInsert = childCategorias.map(child => {
    const newParentId = idMap.get(child.parent_id!);
    if (!newParentId) {
        console.warn(`Could not find new parent ID for child "${child.nombre}" (old parent ID: ${child.parent_id})`);
        return null;
    }
    return {
        nombre: child.nombre,
        description: child.description,
        slug: child.slug,
        show: child.show,
        imagen_portada: child.imagen_portada,
        parent_id: newParentId
    }
  }).filter(Boolean); // Filter out any nulls if parent wasn't found

  if (childrenToInsert.length > 0) {
    console.log(`Inserting ${childrenToInsert.length} child categories...`);
    const { error: childError } = await supabaseAdmin
        .from('categorias')
        .insert(childrenToInsert as any);

    if (childError) {
        console.error('Error inserting child categories:', childError.message);
        return;
    }
    console.log('✅ Inserted child categories.');
  }

  console.log("✅✅ Successfully seeded the 'categorias' table.");
}

seedDatabase();
