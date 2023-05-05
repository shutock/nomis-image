type IScoreTypes = {
  [key: string]: {
    label: string | null;
    logo: string | null;
    background: string;
  };
};

export const scoreTypes: IScoreTypes = {
  default: {
    label: null,
    logo: null,
    background: "#1a1a1a",
  },
  xdefi: {
    label: "XDEFI",
    logo: "xdefi.svg",
    background: "#1c202f",
  },
  symbiosis: {
    label: "Symbiosis",
    logo: "symbiosis.svg",
    background: "#162316",
  },
};
