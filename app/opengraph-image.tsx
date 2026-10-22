import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "5As. One Partner. Every System.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public", "logo-mark.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0b0d",
          color: "#ffffff",
          padding: 72,
          borderBottom: "12px solid #e3a11a",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 6, color: "#e3a11a" }}>
          BUILD · POWER · CONNECT · AUTOMATE
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 220, fontWeight: 700, lineHeight: 1, letterSpacing: -8 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} alt="" width={160} height={217} style={{ marginRight: 8 }} />
            As
          </div>
          <div style={{ display: "flex", fontSize: 64, marginTop: 8, letterSpacing: -2 }}>
            One partner. Every system.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#8b8f98" }}>
          Construction · Electrical power · IT networks · Healthcare technology
        </div>
      </div>
    ),
    size,
  );
}
