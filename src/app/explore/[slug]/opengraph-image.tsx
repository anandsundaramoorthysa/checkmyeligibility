import { ImageResponse } from "next/og";
import { getSchemeBySlug } from "@/lib/data";
import { SITE } from "@/lib/site";
import { SCHEMES } from "@/data/schemes";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return SCHEMES.map((s) => ({ slug: s.slug }));
}

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scheme = await getSchemeBySlug(slug);
  return [
    {
      id: slug,
      alt: scheme ? `${scheme.name} — ${SITE.name}` : SITE.name,
    },
  ];
}

const SAFFRON = "#FF9933";
const GREEN = "#138808";
const NAVY = "#000080";
const INK = "#0A3D91";
const SYSTEM_FONT = 'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

function truncate(text: string, max: number): string {
  return text.length <= max ? text : text.slice(0, max - 1) + "…";
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scheme = await getSchemeBySlug(slug);

  if (!scheme) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FCFCFA",
            fontFamily: SYSTEM_FONT,
            fontSize: 48,
            fontWeight: 700,
            color: NAVY,
          }}
        >
          {SITE.name}
        </div>
      ),
      { ...size },
    );
  }

  const benefitLine = scheme.benefits.length
    ? truncate(scheme.benefits[0], 80)
    : null;

  const categoryLabel = scheme.category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FCFCFA",
          fontFamily: SYSTEM_FONT,
        }}
      >
        {/* Tricolor bar */}
        <div style={{ display: "flex", width: "100%", height: 16 }}>
          <div style={{ flex: 1, backgroundColor: SAFFRON }} />
          <div style={{ flex: 1, backgroundColor: "#FFFFFF" }} />
          <div style={{ flex: 1, backgroundColor: GREEN }} />
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 80px",
          }}
        >
          {/* Category pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                backgroundColor: SAFFRON + "22",
                color: "#c27000",
                borderRadius: 100,
                padding: "4px 16px",
                fontSize: 22,
                fontWeight: 600,
              }}
            >
              {categoryLabel}
            </span>
          </div>

          {/* Scheme name */}
          <div
            style={{
              fontSize: scheme.name.length > 60 ? 44 : scheme.name.length > 40 ? 52 : 60,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: NAVY,
              maxWidth: 1040,
            }}
          >
            {truncate(scheme.name, 100)}
          </div>

          {/* Benefit */}
          {benefitLine && (
            <div
              style={{
                marginTop: 20,
                fontSize: 28,
                fontWeight: 500,
                color: INK,
                opacity: 0.85,
              }}
            >
              {benefitLine}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 80px 48px",
          }}
        >
          <div style={{ fontSize: 22, color: "#5B6B7B" }}>
            checkmyeligibility.in/explore
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: GREEN,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                backgroundColor: GREEN,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 14,
                fontWeight: 800,
              }}
            >
              ✓
            </div>
            Verified scheme
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
