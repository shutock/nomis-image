import { ImageResponse } from "next/server";

import type { NextApiHandler } from "next";

import { ScoreImage } from "@/images";
import { getEns } from "@/utils";
import { fetch } from "@/fonts";

export const config = {
  runtime: "edge",
};

const handler: NextApiHandler = async (req) => {
  const interLight = await fetch.interLight;
  const interMedium = await fetch.interMedium;
  const spaceBold = await fetch.spaceBold;
  const spaceMedium = await fetch.spaceMedium;

  const { searchParams } = new URL(req.url!);
  const size = Number(searchParams.get("size")) || 2048;
  const address = searchParams.get("address");
  const isEns = searchParams.get("ens") || true;

  let ens: string | undefined;

  if (isEns !== "false" && address) {
    ens = await getEns(address);
  }

  return new ImageResponse(<ScoreImage req={req} ens={ens} />, {
    width: size,
    height: size,
    fonts: [
      {
        data: spaceMedium,
        name: "font",
        style: "normal",
        weight: 500,
      },
      {
        data: interLight,
        name: "font",
        style: "normal",
        weight: 300,
      },
      {
        data: interLight,
        name: "font",
        style: "italic",
        weight: 200,
      },
      {
        data: interMedium,
        name: "font",
        style: "normal",
        weight: 400,
      },
    ],
  });
};

export default handler;
