# By Me Mariel · Tienda online

Tienda estática (HTML + JavaScript) conectada a Supabase. Sin servidor propio.

## Archivos
- `index.html`: la tienda y el panel de administración.
- `config.js`: URL y clave pública de Supabase.
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

## Contenido editable (panel → Contenido)
Inicio, Sobre Mariel, Galería y Contacto se editan desde el panel y se guardan en la tabla `store_settings` de Supabase. Las fotos van al bucket `site-content`. El número de WhatsApp, el Instagram y el correo salen de ahí, no de `config.js`. Todo lo que se guarda en Contenido es público.

## Galería (publicaciones)
La galería es un portfolio independiente de la tienda: cada publicación tiene título, descripción y varias fotos. Se administra desde Admin → Contenido → Galería. La estructura en Supabase está en la carpeta `supabase/` (ver `GALERIA_PASOS.md`).

## Pedidos y contacto
El carrito registra pedidos en Supabase (sin cobro online) y Admin → Pedidos los gestiona. El formulario de contacto envía por correo. Los dos usan funciones del servidor (Edge Functions), con protección contra envíos automáticos, y se activan por separado en `config.js` (`contactEnabled`, `ordersEnabled` y `turnstileSiteKey`) cuando su parte en Supabase está lista. Los scripts SQL, las funciones y las instrucciones van en el ZIP de entrega (carpetas 2, 3 y 4); en este repositorio solo se sube lo de la carpeta 1.

## Pendiente
- Encargos guardados en la base y Mercado Pago (próximas etapas).

## Recuperación de contraseña (código de un solo uso)
Flujo: "¿Olvidaste tu contraseña?" → correo → código por correo → contraseña nueva (2 campos) → inicio de sesión normal.
- Usa Supabase Auth: `resetPasswordForEmail`, `verifyOtp` (tipo `recovery`) y `updateUser`. El código vence y se consume al verificarlo.
- La verificación y el cambio usan un cliente aparte, sin guardar sesión en el navegador: el panel no se habilita hasta iniciar sesión de forma normal.
- Los límites de frecuencia e intentos los aplica Supabase en el servidor.

Configuración necesaria en Supabase (proyecto `by-me-mariel`):
1. **SMTP propio** (Authentication → Emails → SMTP Settings). El servicio de correo incluido solo envía a miembros del equipo de la organización y con un tope muy bajo por hora.
2. **Plantilla "Reset password"** (Authentication → Emails → Templates): mostrar el código con `{{ .Token }}` y no incluir el enlace `{{ .ConfirmationURL }}`.
3. **Vencimiento del código** más corto (por ejemplo 600 segundos) y **largo mínimo de contraseña** de 10 (Authentication → Sign In / Providers → Email).
4. Dejar desactivado el registro público ("Allow new users to sign up").
