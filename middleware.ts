import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  '/',
  '/events/:id',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/oauth-callback',
  '/api/webhook/clerk',
  '/api/webhook/stripe',
  'api/uploadthing'
]);

const isIgnoredRoute = createRouteMatcher([
  '/api/webhook/clerk',
  '/api/webhook/stripe',
  'api/uploadthing'
]);

export default clerkMiddleware((auth, req) => {
  if (isPublicRoute(req)) return; // Allow access to public routes
  if (isIgnoredRoute(req)) return; // Ignore specific routes
  auth().protect(); // Protect other routes
});


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};