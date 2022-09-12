import { NextResponse } from "next/server"

/** @param {import("next/server").NextRequest} req */
export async function middleware(req) {
  const response = new NextResponse()
  response.cookies.set("foo", req.nextUrl.searchParams.get("foo"))
  return response
}
