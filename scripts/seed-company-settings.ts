// scripts/seed-company-settings.ts
import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';
import type { FichaTecnica } from '../src/local-data/ficha-tecnica.types';

// Manually copy the data to make the script self-contained
export const fichaTecnica: FichaTecnica = {
  "informacion_general": {
    "ruc": "20612464571",
    "nombre_o_razon_social": "MUNDO MINERO LOS REYES DEL NORTE E.I.R.L.",
    "nombre_corto": "MUNDO MINERO LOS REYES DEL NORTE",
    "nombre_comercial": "MUNDO MINERO",
    "tipo_contribuyente": "07 EMPRESA INDIVIDUAL DE RESP. LTDA",
    "estado_contribuyente": "ACTIVO",
    "condicion_domicilio": "HABIDO",
    "dependencia_sunat": "0063ITI.LA LIBERTAD-MEPECO",
    "fechas_clave": {
      "inscripcion": "13/04/2024",
      "inicio_actividades": "19/04/2024",
      "emisor_electronico_desde": "20/04/2024"
    }
  },
  "domicilio_fiscal": {
    "direccion": "AV. AMERICA SUR Nro. 836",
    "zona": "URB. PALERMO",
    "distrito": "TRUJILLO",
    "provincia": "TRUJILLO",
    "departamento": "LA LIBERTAD",
    "condicion_inmueble": "ALQUILADO"
  },
  "actividades_economicas": {
    "principal": "4659-VENTA AL POR MAYOR DE OTROS TIPOS DE MAQUINARIA Y EQUIPO",
    "secundaria_1": "7730-ALQUILER Y ARRENDAMIENTO DE OTROS TIPOS DE MAQUINARIA, EQUIPO Y BIENES TANGIBLES",
    "secundaria_2": "4923-TRANSPORTE DE CARGA POR CARRETERA",
    "comercio_exterior": "IMPORTADOR/EXPORTADOR"
  },
  "datos_contacto": {
    "telefono_fijo": "+51920310887",
    "telefono_movil": "+51920310887",
    "telefono_ventas" : "+51920310887",
    "correo_electronico": "mmreyesdelnorte@gmail.com",
    "facebook":"mmlosreyesdelnorte",
    "instagram":"mmreyesdelnorte",
    "tiktok":"@mmreyesdlnorte",
    "whatsapp":"+51920310887"
  },
  "aspectos_legales_tributarios": {
    "partida_registral": "11551571",
    "fecha_inscripcion_rrpp": "11/04/2024",
    "sistema_contabilidad": "COMPUTARIZADO",
    "sistema_emision_comprobantes": "SIN SISTEMA",
    "tributos_afectos": [
      {
        "tributo": "IGV - OPER. INT. - CTA. PROPIA",
        "desde": "19/04/2024"
      },
      {
        "tributo": "RENTA-REGIMEN MYPE TRIBUTARIO",
        "desde": "19/04/2024"
      }
    ],
    "representante_legal": {
      "nombre": "VENECIA MACARENA FLORES TORRES",
      "cargo": "TITULAR-GERENTE",
      "documento": "CARNÉ DE EXTRANJERÍA 006259634",
      "desde": "11/04/2024"
    }
  },
  "metadatos_reporte": {
    "fecha_generacion": "06/05/2025",
    "hora_generacion": "16:57"
  }
}

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error("Supabase URL and Service Key are required.");
}

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

async function seedCompanySettings() {
    console.log("Checking if 'company_settings' table is accessible...");
    const { data, error } = await supabaseAdmin.from('company_settings').select('id').limit(1);
    if (error) {
        console.error("Error accessing 'company_settings' table:", error.message);
        console.log("Please ensure the 'company_settings' table exists in the 'public' schema and that the service role has access to it.");
        return;
    }
    console.log("'company_settings' table is accessible.");

    console.log("Seeding company settings...");

    // Clear existing settings (assuming only one row for settings)
    console.log("Deleting existing company settings...");
    const { error: deleteError } = await supabaseAdmin.from('company_settings').delete().neq('id', -1);
    if (deleteError) {
        console.error("Error deleting data:", deleteError.message);
        return;
    }

    // Insert the fichaTecnica object
    const { error: insertError } = await supabaseAdmin
        .from('company_settings')
        .insert({ settings_data: fichaTecnica });

    if (insertError) {
        console.error("Error inserting company settings:", insertError.message);
        return;
    }

    console.log("✅ Successfully seeded company settings.");
}

seedCompanySettings();
