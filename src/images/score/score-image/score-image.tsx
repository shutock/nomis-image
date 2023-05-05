import type { NextApiRequest } from "next";

import * as style from "./score-image.style";

export const ScoreImage: React.FC<{ req: NextApiRequest }> = ({ req }) => {
  return (
    <div style={style.container}>
      <div style={style.header}>
        <div style={style.partner}>Symbiosis</div>
        <div style={style.nomis}>NOMIS</div>
        <div style={style.score}>score</div>
      </div>
      <div style={style.body}>
        <div style={style.meta}>
          <div style={style.name}>
            <div style={style.handler}>shutock</div>
            <div style={style.eth}>.eth</div>
          </div>
          <div style={style.address}>
            <div style={style.zeroX}>0x</div>
            <div style={style.symbols}>297b</div>
            <div style={style.symbols}>...</div>
            <div style={style.symbols}>1114</div>
          </div>
        </div>
        <div style={style.time}>
          <div style={style.updated}>Updated</div>
          <div style={style.date}>5 May 2023</div>
        </div>
      </div>
    </div>
  );
};
