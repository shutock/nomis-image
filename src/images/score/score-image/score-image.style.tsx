import { color } from "@/utils";
import type { CSSProperties } from "react";

const flex = { display: "flex" };

const px = 1;

const colors = {
  bg: "#1a1a1a",
  accent: color("white", 100),
  primary: color("white", 80),
  secondary: color("white", 60),
  hidden: color("white", 40),
};

export const container: CSSProperties = {
  ...flex,
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  width: "100%",
  background: colors.bg,
  color: colors.accent,
  padding: 256 * px,
};

export const header: CSSProperties = { ...flex, flexDirection: "column" };

export const partner: CSSProperties = {
  ...flex,
  fontSize: 64 * px,
  lineHeight: "1em",
  color: colors.secondary,
  marginBottom: 16 * px,
};

export const nomis: CSSProperties = {
  ...flex,
  fontSize: 128 * px,
  lineHeight: "1em",
  color: colors.primary,
  marginBottom: 32 * px,
};

export const score: CSSProperties = {
  ...flex,
  fontSize: 64 * px,
  lineHeight: "1em",
  color: colors.hidden,
};

export const body: CSSProperties = {
  ...flex,
  flexDirection: "column",
  gap: 256 * px,
};

export const meta: CSSProperties = {
  ...flex,
  flexDirection: "column",
  gap: 32 * px,
};

export const name: CSSProperties = {
  ...flex,
  fontSize: 192 * px,
  lineHeight: "1em",
};

export const handler: CSSProperties = {
  ...flex,
  color: colors.accent,
};

export const eth: CSSProperties = {
  ...flex,
  color: colors.hidden,
};

export const address: CSSProperties = {
  ...flex,
  fontSize: 96 * px,
  lineHeight: "1em",
};

export const zeroX: CSSProperties = {
  ...flex,
  color: colors.hidden,
  marginRight: 16 * px,
};

export const symbols: CSSProperties = { ...flex };

export const time: CSSProperties = {
  ...flex,
  fontSize: 64 * px,
  gap: 32 * px,
  lineHeight: "1em",
};

export const updated: CSSProperties = {
  ...flex,
  color: colors.hidden,
  lineHeight: "1em",
};

export const date: CSSProperties = { ...flex, lineHeight: "1em" };
