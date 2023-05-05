import { NextApiHandler } from "next";
import { ScoreImage } from "@/score";
import { ImageResponse } from "next/server";

export const config = {
  runtime: "edge",
};

const handler: NextApiHandler = async (req) => {
  const { searchParams } = new URL(req.url!);
  const size = Number(searchParams.get("size")) || 2048;

  return new ImageResponse(<ScoreImage req={req} />, {
    width: size,
    height: size,
  });
};

export default handler;
