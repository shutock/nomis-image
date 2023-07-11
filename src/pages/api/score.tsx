import { ImageResponse } from "next/server";

import type { NextApiHandler } from "next";

import { ScoreImage } from "@/images";
import { getBlockchains, getEns } from "@/utils";
import { IBlockchain } from "@/types";

export const config = {
  runtime: "edge",
};

const handler: NextApiHandler = async (req) => {
  const { searchParams } = new URL(req.url!);
  const sizeAttr = Number(searchParams.get("size")) || 350;
  const size = sizeAttr > 0 ? sizeAttr : 350;
  const address = searchParams.get("address");
  const isEns = searchParams.get("ens") || true;

  const chainId = searchParams.get("chainId");

  let ens: string | undefined;

  if (isEns !== "false" && address) {
    ens = await getEns(address);
  }

  let chain: IBlockchain | undefined;

  if (chainId) {
    const chains = await getBlockchains();

    if (chains) {
      chain = chains.find((ch) => ch.chainId === Number(chainId));
    }
  }

  return new ImageResponse(<ScoreImage req={req} ens={ens} chain={chain} />, {
    width: size,
    height: size,
  });
};

export default handler;
