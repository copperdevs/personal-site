import { atom } from "nanostores";

export type Section = "none" | "socials" | "projects";

export const currentSection = atom<Section>("none");
