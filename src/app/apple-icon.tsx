import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const SVG_MARK = `<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 60 A53 53 0 0 1 113 60" stroke="#FF9933" stroke-width="7"/>
  <path d="M113 60 A53 53 0 0 1 7 60" stroke="#138808" stroke-width="7"/>
  <g fill="#0a3d91">
    <circle cx="60" cy="14.5" r="1.5"/><circle cx="71.8" cy="16.1" r="1.5"/><circle cx="82.6" cy="20.9" r="1.5"/><circle cx="91.8" cy="28.5" r="1.5"/>
    <circle cx="98.9" cy="38.4" r="1.5"/><circle cx="103.4" cy="49.8" r="1.5"/><circle cx="105.5" cy="60" r="1.5"/><circle cx="103.4" cy="70.2" r="1.5"/>
    <circle cx="98.9" cy="81.6" r="1.5"/><circle cx="91.8" cy="91.5" r="1.5"/><circle cx="82.6" cy="99.1" r="1.5"/><circle cx="71.8" cy="103.9" r="1.5"/>
    <circle cx="60" cy="105.5" r="1.5"/><circle cx="48.2" cy="103.9" r="1.5"/><circle cx="37.4" cy="99.1" r="1.5"/><circle cx="28.2" cy="91.5" r="1.5"/>
    <circle cx="21.1" cy="81.6" r="1.5"/><circle cx="16.6" cy="70.2" r="1.5"/><circle cx="14.5" cy="60" r="1.5"/><circle cx="16.6" cy="49.8" r="1.5"/>
    <circle cx="21.1" cy="38.4" r="1.5"/><circle cx="28.2" cy="28.5" r="1.5"/><circle cx="37.4" cy="20.9" r="1.5"/><circle cx="48.2" cy="16.1" r="1.5"/>
  </g>
  <circle cx="60" cy="60" r="36" fill="#0a3d91"/>
  <path d="M44 61 l11 11 l22 -25" stroke="#ffffff" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`;

const SVG_DATA_URI = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(SVG_MARK)}`;

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "180px",
          height: "180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={SVG_DATA_URI} width={148} height={148} alt="" />
      </div>
    ),
    { width: 180, height: 180 },
  );
}
