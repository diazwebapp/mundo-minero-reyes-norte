// src/pages/api/auth/signin.ts
import type { APIRoute } from "astro";
import { supabaseClient } from "../../../lib/supabase"; // Tu cliente de Supabase con Service Role o Anon Key

export const POST: APIRoute = async ({ request, cookies }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return new Response(JSON.stringify({ message: "Datos incompletos" }), { status: 400 });
  }

  // 1. Intentar Login en Supabase desde el Servidor
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.session) {
    return new Response(JSON.stringify({ message: error?.message || "Credenciales inválidas" }), { status: 401 });
  }

  // 2. Verificar si es ADMIN antes de dejarlo entrar
  const { data: profile } = await supabaseClient
    .from("profiles")
    .select("role")
    .eq("id", data.user.id)
    .single();

  if (!profile || profile.role !== "admin") {
    // Si no es admin, cerramos la sesión que acabamos de abrir para que no quede huérfana
    await supabaseClient.auth.signOut();
    return new Response(JSON.stringify({ message: "No tienes permisos de administrador" }), { status: 403 });
  }

  // 3. Todo OK: Seteamos cookies seguras
  cookies.set("sb-access-token", data.session.access_token, {
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7, // 1 semana
  });

  cookies.set("sb-refresh-token", data.session.refresh_token, {
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
  });

  return new Response(JSON.stringify({ message: "Login exitoso" }), { status: 200 });
};