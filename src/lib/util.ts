import { UrlType } from "./enums";

export function capitalizeFirstLetter(val: string): string {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function getPrimaryLink(
  primaryLink: UrlType,
  projectUrl: string | undefined,
  sourceUrl: string | undefined,
  packageUrl: string | undefined
): string {
  switch (primaryLink) {
    case UrlType.Project:
      return projectUrl === undefined ? "#" : projectUrl;
    case UrlType.Source:
      return sourceUrl === undefined ? "#" : sourceUrl;
    case UrlType.Package:
      return packageUrl === undefined ? "#" : packageUrl;
    default:
      return "#";
  }
}

export type Dictionary<TKey extends string | number | symbol, TValue> = {
  [Key in TKey]: TValue;
};
