/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";

// Self-only by default; the site loads no third-party scripts/styles/fonts.
// 'unsafe-inline' is required by Next's inline bootstrap; 'unsafe-eval' only in
// dev (React Fast Refresh). connect-src 'self' covers the /api/chat call.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(self), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig = {
  // Lets the e2e run use its own build directory so starting the test server
  // does not overwrite the .next of an already-running production build.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // Don't advertise the framework in every response.
  poweredByHeader: false,
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      // API responses are per-user and must never be cached by a CDN or proxy.
      {
        source: "/api/:path*",
        headers: [{ key: "Cache-Control", value: "no-store, max-age=0" }],
      },
    ];
  },
};

export default nextConfig;
