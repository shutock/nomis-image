import type { CSSProperties } from "react";

const flex = { display: "flex" };

const colors = {
  bg: "#1a1a1a",
  accent: "#ffffff",
  primary: "#ffffffcc",
};

export const container: CSSProperties = {
  ...flex,
  height: "100%",
  width: "100%",
  background: colors.bg,
  color: colors.accent,
};

export const header: CSSProperties = { ...flex };

export const partner: CSSProperties = { ...flex };

export const nomis: CSSProperties = { ...flex };

export const score: CSSProperties = { ...flex };
