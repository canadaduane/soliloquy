import Color from "colorjs.io";

export function highContrastColor(hexColor: string) {
  const color = new Color(hexColor);
  if (color.lch.l >= 60) return "#333";
  else return "#efefef";
}
