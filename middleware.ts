// middleware.ts
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    // Custom logic can be added here if needed
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*"],
};