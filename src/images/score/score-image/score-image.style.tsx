import { color } from "@/utils";
import type { CSSProperties } from "react";

const style = { display: "flex", lineHeight: "1em" };

const inter = {
  fontFamily: "font",
  fontWeight: 300,
};

const space = {
  fontFamily: "font",
  fontWeight: 500,
};

const colors = {
  accent: color("white", 100),
  primary: color("white", 80),
  secondary: color("white", 60),
  hidden: color("white", 40),
  border: color("white", 20),
};

export const getStyles = (size: number) => {
  const px = size / 2048;

  const container: CSSProperties = {
    ...style,
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    color: colors.accent,
    padding: 256 * px,
  };

  const header: CSSProperties = { ...style, flexDirection: "column" };

  const partner: CSSProperties = {
    ...style,
    ...inter,
    fontSize: 64 * px,
    color: colors.secondary,
    marginBottom: 32 * px,
  };

  const nomis: CSSProperties = {
    ...style,
    height: 128 * px,
    marginBottom: 64 * px,
  };

  const score: CSSProperties = {
    ...style,
    ...inter,
    fontSize: 64 * px,
    color: colors.hidden,
  };

  const chart: CSSProperties = {
    ...style,
    width: 768 * px,
    height: 768 * px,
    border: `${96 * px}px solid ${colors.border}`,
    borderRadius: "50%",
    position: "absolute",
    top: 256 * px,
    right: 256 * px,
  };

  const chartImg: CSSProperties = {
    ...style,
    position: "absolute",
    width: 768 * px,
    height: 768 * px,
    top: -96 * px,
    left: -96 * px,
  };

  const number: CSSProperties = {
    ...style,
    ...space,
    fontSize: 192 * px,
    color: colors.accent,
    width: "100%",
    height: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    gap: 16 * px,
  };

  const digit: CSSProperties = {
    height: 160 * px,
  };

  const body: CSSProperties = {
    ...style,
    flexDirection: "column",
    gap: 256 * px,
  };

  const meta: CSSProperties = {
    ...style,
    ...inter,
    flexDirection: "column",
    gap: 32 * px,
  };

  const name: CSSProperties = {
    ...style,
    ...space,
    fontSize: 192 * px,
  };

  const handler: CSSProperties = {
    ...style,
    ...space,
    color: colors.accent,
  };

  const eth: CSSProperties = {
    ...style,
    ...space,
    color: colors.hidden,
  };

  const address: CSSProperties = {
    ...style,
    ...inter,
    fontSize: 96 * px,
  };

  const zeroX: CSSProperties = {
    ...style,
    ...inter,
    color: colors.hidden,
    marginRight: 16 * px,
  };

  const address0x: CSSProperties = {
    marginRight: 64 * px,
  };

  const symbols: CSSProperties = { ...style, ...inter };

  const time: CSSProperties = {
    ...style,
    ...inter,
    fontSize: 64 * px,
    gap: 32 * px,
  };

  const logo: CSSProperties = {
    height: 128 * px,
    position: "absolute",
    bottom: 0,
    right: 0,
  };

  const updated: CSSProperties = {
    ...style,
    color: colors.hidden,
  };

  const date: CSSProperties = { ...style };

  const border: CSSProperties = {
    ...style,
    position: "absolute",
    width: 2048 * px,
    height: 2048 * px,
  };

  const gradient: CSSProperties = {
    ...style,
    position: "absolute",
    top: 128 * px,
    right: 128 * px,
    width: 1024 * px,
    height: 1024 * px,
    borderRadius: "50%",
    filter: `blur(${256 * px}px)`,
  };

  return {
    container,
    header,
    partner,
    nomis,
    score,
    chart,
    chartImg,
    number,
    digit,
    body,
    meta,
    name,
    handler,
    eth,
    address,
    zeroX,
    address0x,
    symbols,
    time,
    logo,
    updated,
    date,
    border,
    gradient,
  };
};
