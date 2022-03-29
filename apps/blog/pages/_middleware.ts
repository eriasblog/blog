import { NextResponse } from 'next/server';
import type { NextFetchEvent, NextRequest } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const url: any = req.nextUrl.clone(); // Object
  const { pathname } = req.nextUrl; // /
  const hostname = req.headers.get('host'); //localhost:4200

  const currentHost =
    process.env.NODE_ENV === 'production' && process.env.VERCEL === '1'
      ? hostname
          .replace(`.production.domain.com`, '') // you have to replace ".production.domain.com" with your own domain if you deploy this example under your domain.
          .replace(`.production.domain.com`, '') // unnecessary but two domains can be linked together
      : // in this case, we are in development mode (project.json)
        hostname.replace(`.localhost:4200`, '');

  if (pathname.startsWith(`/_sites`)) {
    return new Response(null, { status: 404 });
  }

  if (!pathname.includes('.') && !pathname.startsWith('/api')) {
    if (currentHost == 'dev') {
      url.pathname = `/dev${pathname}`;
      return NextResponse.rewrite(url);
    } else {
      url.pathname = `${pathname}`;
      return NextResponse.rewrite(url);
    }
  }
}
