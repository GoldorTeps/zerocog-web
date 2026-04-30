import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((ctx, next) => {
  const { pathname } = ctx.url;

  // Pass through: already on /en, static assets, or internal Astro paths
  if (pathname.startsWith('/en') || pathname.includes('.')) {
    return next();
  }

  // Respect explicit language cookie (set by the language switcher)
  const lang = ctx.cookies.get('lang')?.value;
  if (lang === 'en') return ctx.redirect('/en/', 302);
  if (lang === 'es') return next();

  // First-visit: inspect Accept-Language header
  const accept = ctx.request.headers.get('accept-language') ?? '';
  const first = accept.split(',')[0]?.trim().toLowerCase() ?? '';
  if (first.startsWith('en') && !first.startsWith('es')) {
    return ctx.redirect('/en/', 302);
  }

  return next();
});
