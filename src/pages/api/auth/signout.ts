// src/pages/api/auth/signout.ts
import type { APIRoute } from "astro";
import { supabaseClient } from "../../../lib/supabase";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  // 1. Cerrar sesión en Supabase (opcional pero recomendado)
  await supabaseClient.auth.signOut();

  // 2. Borrar las cookies de sesión
  cookies.delete("sb-access-token", { path: "/" });
  cookies.delete("sb-refresh-token", { path: "/" });

  // 3. Redirigir al login
  return redirect("/login");
};