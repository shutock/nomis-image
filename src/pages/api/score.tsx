import { ImageResponse } from "next/server";

import type { NextApiHandler } from "next";

import { ScoreImage } from "@/images";
import { getEns } from "@/utils";

export const config = {
  runtime: "edge",
};

const handler: NextApiHandler = async (req) => {
  const { searchParams } = new URL(req.url!);
  const size = Number(searchParams.get("size")) || 2048;
  const address = searchParams.get("address");
  let ens: string | undefined;

  if (address) {
    ens = await getEns(address);
  }

  return new ImageResponse(<ScoreImage req={req} ens={ens} />, {
    width: size,
    height: size,
  });
};

export default handler;
