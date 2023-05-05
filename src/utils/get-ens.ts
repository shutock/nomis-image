const apiKey =
  "jn0UtKmDKnHQ8m3NYZiZ2e8Zb7x32ZAEtNtS8M3hfkI2vSskGPPsSIXxLA8XlCxo";

export const getEns = async (address: string) => {
  try {
    const response = await fetch(
      `https://deep-index.moralis.io/api/v2/resolve/${address}/reverse`,
      { headers: { "X-API-Key": apiKey } }
    );
    const { name } = (await response.json()) as { name: string };

    return name;
  } catch (error) {
    const { message } = error as { message: string };
    console.error(message);
  }
};
