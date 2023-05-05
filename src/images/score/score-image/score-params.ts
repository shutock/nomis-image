import type { NextApiRequest } from "next";

import { scoreTypes as types } from "./score-types";

export const scoreParams = (req: NextApiRequest) => {
  const { searchParams: p } = new URL(req.url!);

  const size = Number(p.get("size")) || 2048;
  const address = p.get("address") || "0xUndefine";
  const score = Number(p.get("score")) || 0;

  let type = "";

  for (let key in types) {
    if (p.get("type") === key) {
      type = key;
      return;
    }
  }

  if (type === "") type = "default";

  const { background, label, logo } = types[type];

  return { size, address, score, background, label, logo };
};
