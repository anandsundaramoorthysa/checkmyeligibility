import { ImageResponse } from "next/og";
import { getSchemeBySlug } from "@/lib/data";
import { SITE } from "@/lib/site";

// Edge runtime: @vercel/og's wasm renderer avoids the Node fileURLToPath bug
// that breaks static OG prerendering on Windows.
export const runtime = "edge";
export const alt = "Scheme details on CheckMyEligibility";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SAFFRON = "#FF9933";
const GREEN = "#138808";
const NAVY = "#0A3D91";
const INK_MUTED = "#374151";
const FAINT = "#6B7280";
const SURFACE = "#FCFCFA";
const SYSTEM_FONT =
  'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

const LEVEL_LABELS: Record<string, string> = {
  central: "Central",
  state: "State",
  "central-state": "Central + State",
};

function clip(text: string, max: number) {
  return text.length <= max ? text : text.slice(0, max - 1) + "…";
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scheme = await getSchemeBySlug(slug);

  const name = scheme ? clip(scheme.name, 65) : "Government Scheme";
  const summary = scheme ? clip(scheme.summary, 130) : SITE.description;
  const level = scheme ? (LEVEL_LABELS[scheme.level] ?? scheme.level) : "";
  const ministry = scheme?.ministry ? clip(scheme.ministry, 70) : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: SURFACE,
          fontFamily: SYSTEM_FONT,
        }}
      >
        {/* Tricolor bar */}
        <div style={{ display: "flex", width: "100%", height: 10 }}>
          <div style={{ flex: 1, backgroundColor: SAFFRON }} />
          <div style={{ flex: 1, backgroundColor: "#FFFFFF" }} />
          <div style={{ flex: 1, backgroundColor: GREEN }} />
        </div>

        {/* Body */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 80px 60px",
          }}
        >
          {/* Site label */}
          <div style={{ display: "flex", fontSize: 22, color: FAINT, fontWeight: 500 }}>
            {SITE.name} · checkmyeligibility.in
          </div>

          {/* Scheme name + summary */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                fontSize: 52,
                fontWeight: 800,
                color: NAVY,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              {name}
            </div>
            <div
              style={{
                fontSize: 28,
                color: INK_MUTED,
                lineHeight: 1.45,
              }}
            >
              {summary}
            </div>
          </div>

          {/* Level badge + ministry */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {level && (
              <div
                style={{
                  padding: "8px 22px",
                  backgroundColor: NAVY,
                  color: "#FFFFFF",
                  borderRadius: 8,
                  fontSize: 22,
                  fontWeight: 600,
                }}
              >
                {level}
              </div>
            )}
            {ministry && (
              <div style={{ fontSize: 20, color: FAINT }}>{ministry}</div>
            )}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
