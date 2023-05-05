import { NextApiHandler } from "next";
import { ImageResponse } from "next/server";

const handler: NextApiHandler = async (req) => {
  return new ImageResponse(<div style={{ display: "flex" }}>test</div>);
};

export default handler;
