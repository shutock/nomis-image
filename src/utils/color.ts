import { alphaToHex } from "./alphaToHex";

export const color = (color: string, alpha: number) => {
  let hexColor = color;

  if (color === "white") hexColor = "ffffff";
  if (color === "black") hexColor = "000000";

  const hexAlpha = alphaToHex(alpha);

  return "#" + hexColor + hexAlpha;
};
