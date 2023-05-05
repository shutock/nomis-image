/* eslint-disable @next/next/no-img-element */
import type { NextApiRequest } from "next";

import * as style from "./score-image.style";
import { scoreParams as params } from "./score-params";
import { color, shortAddress } from "@/utils";

export const ScoreImage: React.FC<{
  req: NextApiRequest;
  ens: string | undefined;
}> = ({ req, ens }) => {
  const { address, background, label, logo, score, hue, chart } = params(req)!;
  const addr = shortAddress(address);
  const is0x = address.slice(0, 2) === "0x";

  const { href } = new URL(req.url!);
  const path = href.match(/^https?:\/\/[^/]+/i)![0];

  return (
    <div style={{ ...style.container, background }}>
      <div style={style.header}>
        {label && <div style={style.partner}>{label}</div>}
        <div style={style.nomis}>NOMIS</div>
        <div style={style.score}>Score</div>
      </div>
      <div
        style={{
          ...style.gradient,
          background: `hsl(${hue}, 60%, 50%)`,
        }}
      />
      <div style={style.chart}>
        <div style={style.number}>{Math.floor(score)}</div>
        <img
          style={style.chartImg}
          src={`${path}/charts/${chart}.svg`}
          alt=""
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div style={style.body}>
        {ens ? (
          <div style={style.meta}>
            <div style={style.name}>
              <div style={style.handler}>{ens?.replace(".eth", "")}</div>
              <div style={style.eth}>.eth</div>
            </div>
            <div style={style.address}>
              {is0x && <div style={style.zeroX}>0x</div>}
              {["", "", ""].map((e, id) => {
                return (
                  <div key={id} style={style.symbols}>
                    {addr[id]}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div style={style.meta}>
            <div style={style.name}>
              {is0x && <div style={style.zeroX}>0x</div>}
              {["", "", ""].map((e, id) => {
                return (
                  <div key={id} style={style.symbols}>
                    {addr[id]}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {logo && (
          <img style={style.logo} src={`${path}/logos/${logo}`} alt="" />
        )}
        <div style={style.time}>
          <div style={style.updated}>Updated</div>
          <div style={style.date}>5 May 2023</div>
        </div>
      </div>
      <img style={style.border} src={`${path}/border.svg`} alt="" />
    </div>
  );
};
