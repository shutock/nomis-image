import {
  auth,
  resolver,
  protocol,
  loaders,
  circuits,
} from "@iden3/js-iden3-auth";

import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const hostUrl = "https://0876-2a09-bac5-47ec-18fa-00-27d-15.ngrok-free.app";

const handler: NextApiHandler = (req, res) => {
  if (req.method === "GET") {
    GetAuthRequest(req, res);
    return;
  }

  if (req.method === "POST") {
    console.log(req);

    return;
  }
};

export default handler;

async function GetAuthRequest(req: NextApiRequest, res: NextApiResponse) {
  // Audience is verifier id

  const sessionId = 1;
  const callbackURL = "/api/auth";
  const audience =
    "did:polygonid:polygon:main:2q5UHwAuxZex4B1AUckvTPyqsLfsMdjxdYv2sraEEF";

  const uri = `${hostUrl}${callbackURL}?sessionId=${sessionId}`;

  // Generate request for basic authentication
  const request = auth.createAuthorizationRequest("test flow", audience, uri);

  console.log(request);

  return res.status(200).send(request);
}
