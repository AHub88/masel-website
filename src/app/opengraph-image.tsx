import { ImageResponse } from "next/og";
import { getPraxis } from "@/lib/data";

export const runtime = "nodejs";
export const alt = "Naturheilpraxis Masel — Osteopathie";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const praxis = await getPraxis();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "linear-gradient(135deg, #e8eedf 0%, #faf8f4 55%, #f3ead8 100%)",
          color: "#2a2825",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#5c7a56",
              color: "#faf8f4",
              fontSize: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
            }}
          >
            M
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#44603f", letterSpacing: 4 }}>
            NATURHEILPRAXIS · {praxis.address.city.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", fontSize: 84, lineHeight: 1.05, color: "#2a2825" }}>
            {praxis.name}
          </div>
          <div style={{ display: "flex", fontSize: 44, color: "#5c7a56" }}>
            Osteopathie für die ganze Familie.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#6b6862",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div style={{ display: "flex" }}>
            {praxis.address.street}, {praxis.address.zip} {praxis.address.city}
          </div>
          <div style={{ display: "flex" }}>{praxis.phoneDisplay}</div>
        </div>
      </div>
    ),
    size,
  );
}
