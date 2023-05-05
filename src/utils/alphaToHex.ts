export const alphaToHex = (opacity: number) => {
  const decimal = Math.round((opacity / 100) * 255);
  const hex = decimal.toString(16).padStart(2, "0");
  return hex;
};
