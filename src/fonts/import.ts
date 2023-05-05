export const interLight = fetch(
  new URL("@/fonts/Inter-Light.ttf", import.meta.url).href
).then((res) => res.arrayBuffer());

export const interMedium = fetch(
  new URL("@/fonts/Inter-Medium.ttf", import.meta.url).href
).then((res) => res.arrayBuffer());

export const spaceBold = fetch(
  new URL("@/fonts/SpaceGrotesk-Bold.ttf", import.meta.url).href
).then((res) => res.arrayBuffer());

export const spaceMedium = fetch(
  new URL("@/fonts/SpaceGrotesk-Medium.ttf", import.meta.url).href
).then((res) => res.arrayBuffer());
