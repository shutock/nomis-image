export const numToDigits = (score: number) => {
  if (score <= 0) return [0];
  if (score >= 100) return [1, 0, 0];

  const digits: number[] = [];

  while (score > 0) {
    digits.unshift(score % 10);
    score = Math.floor(score / 10);
  }

  return digits;
};
