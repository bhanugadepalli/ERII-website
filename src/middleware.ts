import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/self-learning(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (!isProtectedRoute(req)) return NextResponse.next();

  const { userId } = await auth();
  if (!userId) {
    return (await auth()).redirectToSignIn({ returnBackUrl: req.url });
  }

  // Let the request through for now.
  // We'll enforce "paid" access in the page itself (server check).
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};