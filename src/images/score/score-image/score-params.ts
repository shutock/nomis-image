import type { NextApiRequest } from "next";

import { scoreTypes as types } from "./score-types";

export const scoreParams = (req: NextApiRequest) => {
  const { searchParams: p } = new URL(req.url!);

  const sizeAttr = Number(p.get("size")) || 350;
  const size = sizeAttr > 0 ? sizeAttr : 350;

  const address = p.get("address") || "0xUndefine";
  const scoreAttr = Number(p.get("score")) || 0;
  const score = scoreAttr > 0 ? scoreAttr : 0;
  const model = p.get("model");
  const chainId = p.get("chainId");

  const time = Number(p.get("time")) || new Date().getTime();

  const hue = Math.floor((score / 100) * 90);
  const chart = score < 100 ? Math.floor(score / 5) * 5 : 100;

  let type = "";

  for (let key in types) {
    if (p.get("type") === key) {
      type = key;
    }
  }

  if (type === "") type = "default";

  const { background, label, logo } = types[type];

  return {
    size,
    address,
    score,
    background,
    label,
    logo,
    hue,
    chart,
    time,
    model,
    chainId,
  };
};
