import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Nếu người dùng vào trang chủ "/" thì đá họ sang "/vi"
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/vi', request.url));
  }

  return NextResponse.next();
}

// Chỉ chạy middleware cho các trang, bỏ qua folder api, ảnh, v.v.
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|sanity).*)'],
};