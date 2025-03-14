import { NextRequest, NextResponse } from "next/server";
import authenticated from "./app/auth/actions/authenticated";
import { unauthenticatedRoutes } from "./app/common/constants/routes";

export async function middleware(request: NextRequest) {
  const isAuthenticated = await authenticated();
  const isUnauthenticatedRoute = unauthenticatedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route.path)
  );

  if (isUnauthenticatedRoute) {
    return NextResponse.next();
  }

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
