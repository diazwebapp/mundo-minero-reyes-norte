// src/middleware.ts
import { defineMiddleware } from "astro:middleware";
import { supabaseClient } from "./lib/supabase";

export const onRequest = defineMiddleware(async ({ locals, url, cookies, redirect }, next) => {
  
  if (url.pathname.startsWith("/admin")) {
    const accessToken = cookies.get("sb-access-token");
    const refreshToken = cookies.get("sb-refresh-token");

    if (!accessToken || !refreshToken) {
      return redirect("/login");
    }

    // 3. Validar la sesión con Supabase
    const { data: { user }, error } = await supabaseClient.auth.getUser(accessToken.value);

    if (error || !user) {
      return redirect("/login");
    }

    // 4. Verificación de Rol (Admin)
    const { data: profile } = await supabaseClient
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (!profile || profile.role !== "admin") {
      // Si está logueado pero no es admin, mandarlo a una página de "Sin Acceso"
      return redirect("/unauthorized");
    }

    // Guardar el usuario en 'locals' para usarlo en las páginas .astro
    locals.user = user;
  }

  return next();
});