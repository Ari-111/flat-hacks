import { ImageResponse } from "next/og";

export const alt = "Flat Hack 605 — 32 hours, 6 teams, one flat";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, color: "#2b2b29", background: "#fbfaf6" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, letterSpacing: 2 }}><strong>FLAT HACK 605</strong><span>OCTOBER 25–26 · 2026</span></div>
      <div style={{ display: "flex", flexDirection: "column" }}><div style={{ display: "flex", flexDirection: "column", fontFamily: "serif", fontSize: 96, lineHeight: 0.88, letterSpacing: -5 }}><span>32 hours. 6 teams.</span><span>One flat.</span></div><div style={{ marginTop: 34, fontSize: 30 }}>First to $100 in verified product revenue wins.</div></div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ padding: "16px 28px", color: "#fbfaf6", borderRadius: 50, background: "#2b2b29", fontSize: 22 }}>Build. Launch. Earn.</span><span style={{ fontSize: 22 }}>One GPU · stated value ₹80,000</span></div>
    </div>,
    size,
  );
}
