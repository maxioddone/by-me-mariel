# By Me Mariel · Tienda online

Tienda estática (HTML + JavaScript) conectada a Supabase. Sin servidor propio.

## Archivos
- `index.html`: la tienda y el panel de administración.
- `config.js`: URL y clave pública de Supabase, y número de WhatsApp.
- `.nojekyll`: evita que GitHub Pages procese el sitio.

## Publicar en GitHub Pages
1. En GitHub, creá el repositorio `by-me-mariel` y subí estos archivos a la raíz (Add file → Upload files).
2. En el repositorio: Settings → Pages → Source: "Deploy from a branch", rama `main`, carpeta `/ (root)` → Save.
3. Esperá un par de minutos: la tienda queda en `https://TU-USUARIO.github.io/by-me-mariel/`.
4. En Supabase (proyecto `by-me-mariel`): Authentication → URL Configuration → Site URL con esa dirección.
5. Abrí la tienda, entrá a **Admin** e iniciá sesión con tu correo y contraseña.

## Seguridad
- En el navegador solo hay la URL y la clave pública (anon). Las políticas RLS de Supabase impiden que cualquiera que no sea administradora modifique datos.
- No subas nunca a GitHub la clave `service_role`, la contraseña de la base ni credenciales de Mercado Pago. Eso irá más adelante en Supabase (Edge Functions).

## Pendiente
- Número real de WhatsApp en `config.js`.
- Pedidos, encargos guardados en la base y Mercado Pago (próximas etapas).
- Textos de "Contenido" en el panel (todavía no se guardan).
