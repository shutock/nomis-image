import { NextApiHandler } from "next";
import { ImageResponse } from "next/server";

export const config = {
  runtime: "edge",
};

const handler: NextApiHandler = async (req) => {
  return new ImageResponse(<div style={{ display: "flex" }}>test</div>);
};

export default handler;
