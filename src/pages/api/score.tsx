import { ImageResponse } from "next/server";

import type { NextApiHandler } from "next";

import { ScoreImage } from "@/images";
import { getEns } from "@/utils";
import { fetch } from "@/fonts";

export const config = {
  runtime: "edge",
};

const handler: NextApiHandler = async (req) => {
  // const spaceMedium = await fetch.spaceMedium;
  // const spaceBold = await fetch.spaceBold;
  // const interMedium = await fetch.interMedium;
  // const interLight = await fetch.interLight;

  const { searchParams } = new URL(req.url!);
  const sizeAttr = Number(searchParams.get("size")) || 350;
  const size = sizeAttr > 0 ? sizeAttr : 350;
  const address = searchParams.get("address");
  const isEns = searchParams.get("ens") || true;

  let ens: string | undefined;

  if (isEns !== "false" && address) {
    ens = await getEns(address);
  }

  return new ImageResponse(<ScoreImage req={req} ens={ens} />, {
    width: size,
    height: size,
    // fonts: [
    //   {
    //     data: spaceBold,
    //     name: "font",
    //     style: "normal",
    //     weight: 700,
    //   },
    //   {
    //     data: spaceMedium,
    //     name: "font",
    //     style: "normal",
    //     weight: 500,
    //   },
    //   {
    //     data: interMedium,
    //     name: "font",
    //     style: "normal",
    //     weight: 400,
    //   },
    //   {
    //     data: interLight,
    //     name: "font",
    //     style: "normal",
    //     weight: 300,
    //   },
    // ],
  });
};

export default handler;
