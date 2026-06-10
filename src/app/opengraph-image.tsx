import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

// Edge runtime: @vercel/og's wasm renderer avoids the Node fileURLToPath bug
// that breaks static OG prerendering on Windows.
export const runtime = "edge";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand palette
const SAFFRON = "#FF9933";
const GREEN = "#138808";
const NAVY = "#000080";
const INK = "#0A3D91";

const SYSTEM_FONT =
  'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

/** Default social card: flag-palette wordmark on a near-white field. */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          backgroundColor: "#FCFCFA",
          fontFamily: SYSTEM_FONT,
        }}
      >
        {/* Tricolor bar across the top */}
        <div style={{ display: "flex", width: "100%", height: 16 }}>
          <div style={{ flex: 1, backgroundColor: SAFFRON }} />
          <div style={{ flex: 1, backgroundColor: "#FFFFFF" }} />
          <div style={{ flex: 1, backgroundColor: GREEN }} />
        </div>

        {/* Centered content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "0 96px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 132,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            <span style={{ color: NAVY }}>Gov</span>
            <span style={{ color: GREEN }}>Eligify</span>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontSize: 52,
              fontWeight: 500,
              color: INK,
            }}
          >
            {SITE.tagline}
          </div>
        </div>

        {/* Footer note */}
        <div
          style={{
            display: "flex",
            padding: "0 96px 56px",
            fontSize: 28,
            color: "#5B6B7B",
          }}
        >
          goveligify.in · an independent guide to government schemes
        </div>
      </div>
    ),
    { ...size },
  );
}
