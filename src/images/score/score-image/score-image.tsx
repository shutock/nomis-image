/* eslint-disable @next/next/no-img-element */
import type { NextApiRequest } from "next";

import { getStyles } from "./score-image.style";
import { scoreParams as params } from "./score-params";
import { numToDigits, shortAddress } from "@/utils";
import { months } from "@/lib";
import { IBlockchain } from "@/types";

export const ScoreImage = ({
  req,
  ens,
  chain,
}: {
  req: NextApiRequest;
  ens?: string;
  chain?: IBlockchain;
}) => {
  const {
    address,
    background,
    label,
    logo,
    score,
    hue,
    chart,
    time,
    size,
    chainId,
    model,
  } = params(req)!;
  const addr = shortAddress(address);
  const is0x = address.slice(0, 2) === "0x";
  const digits = numToDigits(score);
  const date = new Date(time);
  const updated = `${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;

  const { href } = new URL(req.url!);
  const path = href.match(/^https?:\/\/[^/]+/i)![0];

  const style = getStyles(size);

  return (
    <div style={{ ...style.container, background }}>
      <div style={style.header}>
        {label && <div style={style.partner}>{label}</div>}
        <img style={style.nomis} src={`${path}/logos/nomis.svg`} alt="" />
        <div style={style.score}>Score</div>
      </div>
      <div
        style={{
          ...style.gradient,
          background: `hsl(${hue}, 60%, 50%)`,
        }}
      />
      <div style={style.chart}>
        <div style={style.number}>
          {digits.map((digit) => {
            return (
              <img
                key={digit}
                style={style.digit}
                src={`${path}/digits/${digit}.svg`}
                alt=""
              />
            );
          })}
        </div>
        <img
          style={style.chartImg}
          src={`${path}/charts/${chart}.svg`}
          alt=""
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
        {chain && chain.icon && (
          <img style={style.logo} src={`${chain.icon}`} alt="" />
        )}
        <div style={style.time}>
          <div style={style.updated}>Updated</div>
          <div style={style.date}>{updated}</div>
        </div>
      </div>
      <img style={style.border} src={`${path}/border.svg`} alt="" />
    </div>
  );
};
