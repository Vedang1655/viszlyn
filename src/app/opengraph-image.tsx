import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Viszlyn: Data. Visualized.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const inter = await readFile(join(process.cwd(), "assets/Inter-ExtraBold-subset.otf"));

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#080a10",
          color: "#f2f0ea",
          padding: "0 80px",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", fontSize: 120, color: "#ff5a36", letterSpacing: 2 }}>VISZLYN</div>
        <div style={{ display: "flex", fontSize: 56, marginTop: 8 }}>Data. Visualized.</div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 36, opacity: 0.65 }}>
          Rankings, stats and data stories on the world's biggest numbers
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Inter", data: inter, style: "normal", weight: 800 }] },
  );
}
