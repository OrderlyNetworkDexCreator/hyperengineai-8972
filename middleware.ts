import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!_next|favicon\\.ico|blocked).*)"],
};

export function middleware(req: NextRequest) {
  const headerCountry =
    req.geo?.country ||
    req.headers.get("x-vercel-ip-country") ||
    req.headers.get("cf-ipcountry") ||
    "";

  const country = headerCountry.toUpperCase();

  if (country === "US" || country === "CA") {
    const url = new URL("/blocked", req.url);
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
