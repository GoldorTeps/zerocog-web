import { NextResponse } from 'next/server';

const VALID_KEYS = [
  "ZCOG_2026_INV",
  "ALPHA_BETA_ACCESS",
  "STRATEGIC_PARTNER_99"
];

const SESSION_COOKIE_NAME = "zc_investor_session";

export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;

  if (pathname === '/investor') {
    const key = searchParams.get('key');
    const exp = searchParams.get('exp');
    const session = request.cookies.get(SESSION_COOKIE_NAME);

    let isAuthorized = !!session;

    if (!isAuthorized && key) {
      isAuthorized = VALID_KEYS.includes(key);
      if (isAuthorized && exp) {
         if (Date.now() > parseInt(exp, 10)) {
           isAuthorized = false;
         }
      }
    }

    if (!isAuthorized) {
      // If no valid key and no session, go to login
      const loginUrl = new URL('/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/investor/:path*',
};
