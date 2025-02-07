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

export function getLinkData(
  primaryLink: UrlType,
  projectUrl: string | undefined,
  sourceUrl: string | undefined,
  packageUrl: string | undefined
): [string, [UrlType, string | undefined][]] {
  let primaryUrl = "#";

  let urls: [UrlType, string | undefined][] = [
    [UrlType.Project, projectUrl],
    [UrlType.Source, sourceUrl],
    [UrlType.Package, packageUrl],
  ];

  switch (primaryLink) {
    case UrlType.Project:
      primaryUrl = projectUrl === undefined ? "#" : projectUrl;
      break;
    case UrlType.Source:
      primaryUrl = sourceUrl === undefined ? "#" : sourceUrl;
      break;
    case UrlType.Package:
      primaryUrl = packageUrl === undefined ? "#" : packageUrl;
      break;
    default:
      primaryUrl = "#";
      break;
  }

  return [primaryUrl, urls];
}

export type Dictionary<TKey extends string | number | symbol, TValue> = {
  [Key in TKey]: TValue;
};

export function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}
