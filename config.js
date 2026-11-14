// Configuración pública de By Me Mariel.
// La URL y la clave "anon" de Supabase son públicas por diseño: la seguridad real la dan las políticas RLS.
// NUNCA pegues aquí la clave secreta (service_role), la contraseña de la base ni credenciales de Mercado Pago.
window.BMM = {
  url: 'https://lowkvabqrnypzkrofjqq.supabase.co',
  key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxvd2t2YWJxcm55cHprcm9manFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI5NTgwNzIsImV4cCI6MjEwODUzNDA3Mn0.NR2u1Znb2Kn-Je2dS7UUBx5eX5SY_ChVf8Yu-79vBWw',
  // Etapas: cada módulo viene APAGADO (false). Activalo recién cuando su parte en Supabase esté creada y probada (ver 4_DOCUMENTACION/INSTALACION.md).
  contactEnabled: false,   // formulario de contacto (agrega «Contacto» al menú)
  ordersEnabled: false,    // pedidos desde el carrito. Para funcionar necesita también turnstileSiteKey
  turnstileSiteKey: ''     // clave PÚBLICA de Cloudflare Turnstile (captcha). Es obligatoria para los pedidos y opcional para el contacto
};
