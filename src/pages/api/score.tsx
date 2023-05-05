import { ImageResponse } from "next/server";

import type { NextApiHandler } from "next";

import { ScoreImage } from "@/images";
import { getEns } from "@/utils";
import { fetch } from "@/fonts";

export const config = {
  runtime: "edge",
};

const handler: NextApiHandler = async (req) => {
  const spaceMedium = await fetch.spaceMedium;
  const spaceBold = await fetch.spaceBold;
  const helveticaLight = await fetch.helveticaLight;

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
      // {
      //   data: helveticaLight,
      //   name: "font",
      //   style: "normal",
      //   weight: 300,
      // },
    ],
  });
};

export default handler;
