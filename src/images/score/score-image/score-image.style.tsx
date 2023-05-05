import { color } from "@/utils";
import type { CSSProperties } from "react";

const style = { display: "flex", lineHeight: "1em" };

const px = 1;

const colors = {
  accent: color("white", 100),
  primary: color("white", 80),
  secondary: color("white", 60),
  hidden: color("white", 40),
  border: color("white", 20),
};

export const container: CSSProperties = {
  ...style,
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  width: "100%",
  color: colors.accent,
  padding: 256 * px,
};

export const header: CSSProperties = { ...style, flexDirection: "column" };

export const partner: CSSProperties = {
  ...style,
  fontSize: 64 * px,
  color: colors.secondary,
  marginBottom: 16 * px,
};

export const nomis: CSSProperties = {
  ...style,
  fontSize: 128 * px,
  color: colors.primary,
  marginBottom: 32 * px,
};

export const score: CSSProperties = {
  ...style,
  fontSize: 64 * px,
  color: colors.hidden,
};

export const chart: CSSProperties = {
  ...style,
  width: 768 * px,
  height: 768 * px,
  border: `${96 * px}px solid ${colors.border}`,
  borderRadius: "50%",
  position: "absolute",
  top: 256 * px,
  right: 256 * px,
};

export const chartImg: CSSProperties = {
  ...style,
  position: "absolute",
  top: -96 * px,
  right: -96 * px,
  bottom: -96 * px,
  left: -96 * px,
};

export const number: CSSProperties = {
  ...style,
  fontSize: 192 * px,
  color: colors.accent,
  width: "100%",
  height: "100%",
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
};

export const body: CSSProperties = {
  ...style,
  flexDirection: "column",
  gap: 256 * px,
};

export const meta: CSSProperties = {
  ...style,
  flexDirection: "column",
  gap: 32 * px,
};

export const name: CSSProperties = {
  ...style,
  fontSize: 192 * px,
};

export const handler: CSSProperties = {
  ...style,
  color: colors.accent,
};

export const eth: CSSProperties = {
  ...style,
  color: colors.hidden,
};

export const address: CSSProperties = {
  ...style,
  fontSize: 96 * px,
};

export const zeroX: CSSProperties = {
  ...style,
  color: colors.hidden,
  marginRight: 16 * px,
};

export const address0x: CSSProperties = {
  marginRight: 64 * px,
};

export const symbols: CSSProperties = { ...style };

export const time: CSSProperties = {
  ...style,
  fontSize: 64 * px,
  gap: 32 * px,
};

export const logo: CSSProperties = {
  height: 128 * px,
  position: "absolute",
  bottom: 0,
  right: 0,
};

export const updated: CSSProperties = {
  ...style,
  color: colors.hidden,
};

export const date: CSSProperties = { ...style };

export const border: CSSProperties = {
  ...style,
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

export const gradient: CSSProperties = {
  ...style,
  position: "absolute",
  top: 128 * px,
  right: 128 * px,
  width: 1024 * px,
  height: 1024 * px,
  borderRadius: "50%",
  filter: `blur(${256 * px}px)`,
};
