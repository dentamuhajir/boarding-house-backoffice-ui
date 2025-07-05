import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('MIDDLEWARE RUNNING on:', request.nextUrl.pathname);

  const token = request.cookies.get('token')?.value;

  // Protect dashboard routes
  if (request.nextUrl.pathname.startsWith('/dashboard') && !token) {
    console.log('No token. Redirecting to login...');
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
