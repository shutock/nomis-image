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
    </div>
  );
};
