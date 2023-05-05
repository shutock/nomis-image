export const shortAddress = (address: string) => {
  const _a = address.replace("0x", "");

  return [_a.slice(0, 4), "...", _a.slice(-4)];
};
