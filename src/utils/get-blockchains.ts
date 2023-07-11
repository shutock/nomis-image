import { IBlockchain } from "@/types";

const apiPath = "https://api.nomis.cc/api/v1";

export const getBlockchains = async () => {
  try {
    const res = await fetch(`${apiPath}/dex/aggregator/blockchains`);
    const { data } = (await res.json()) as { data: IBlockchain[] };

    return data;
  } catch (error) {
    return null;
  }
};
