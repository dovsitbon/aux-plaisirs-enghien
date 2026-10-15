import { ImageResponse } from "next/og";

export const alt = "Aux Plaisirs d'Enghien — Cuisine chinoise & vietnamienne à Enghien-les-Bains";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#1a1a1a",
          color: "#fdfbf7",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 6, color: "#d97706", textTransform: "uppercase" }}>
          Cuisine chinoise & vietnamienne
        </div>
        <div style={{ fontSize: 96, marginTop: 24, fontFamily: "serif" }}>Aux Plaisirs d&apos;Enghien</div>
        <div style={{ fontSize: 34, marginTop: 28, color: "rgba(253,251,247,0.7)" }}>
          5 Rue Gaston Israël, Enghien-les-Bains · 01 39 64 15 01 · 4.5/5 sur Google
        </div>
      </div>
    ),
    size,
  );
}
