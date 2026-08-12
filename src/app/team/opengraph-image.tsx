import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const runtime = "edge";
export const alt = `The Team, ${SITE.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SAFFRON = "#FF9933";
const GREEN = "#138808";
const NAVY = "#000080";
const INK = "#0A3D91";
const SYSTEM_FONT = 'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

export default function Image() {
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
            padding: "0 96px",
          }}
        >
          <div style={{ fontSize: 24, color: "#5B6B7B", marginBottom: 20 }}>
            {SITE.name}
          </div>

          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              color: NAVY,
            }}
          >
            The Team
          </div>

          <div
            style={{
              marginTop: 24,
              fontSize: 32,
              fontWeight: 500,
              color: INK,
              lineHeight: 1.4,
            }}
          >
            18 students · Loyola College, Chennai
          </div>
        </div>

        <div
          style={{
            padding: "0 96px 56px",
            fontSize: 24,
            color: "#5B6B7B",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div style={{ width: 32, height: 4, backgroundColor: SAFFRON, borderRadius: 2 }} />
          checkmyeligibility.in/team
        </div>
      </div>
    ),
    { ...size },
  );
}
