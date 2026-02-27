import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/self-learning(.*)",
  "/billing(.*)",
  "/admin(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    const session = await auth();
    if (!session || !session.userId) {
      return new Response(null, { status: 401 });
    }
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};