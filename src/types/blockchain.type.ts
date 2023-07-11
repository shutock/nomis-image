export interface IBlockchain {
  isEnabled: boolean;
  chainId: number;
  hexChainId?: string;
  chainName: string;
  blockchainName: string;
  blockchainSlug: string;
  blockExplorerUrls: string[];
  rpcUrls: string[];
  isEVMCompatible: boolean;
  sbtData: ISbtData;
  nativeCurrency: INativeCurrency;
  order: number;
  icon: string;
  labelIcon: string;
  enabled: boolean;
  type: number;
  platformIds: IPlatformIds;
  oracles?: IOracles;
}

export interface ISbtData {
  Finance?: Finance;
  Token?: Token;
}

export interface Finance {
  contractAddress: string;
  tokenName: string;
  version: string;
}

export interface Token {
  contractAddress: string;
  tokenName: string;
  version: string;
}

export interface INativeCurrency {
  id: string;
  symbol: string;
  name: string;
  decimals: string;
  logoUri: string;
}

export interface IPlatformIds {
  Coingecko?: string;
  Debank?: string;
  DefiLLama?: string;
  Coinmarketcap?: string;
}

export interface IOracles {
  offchainOracleAddress: string;
  multiWrapperAddress: string;
}
