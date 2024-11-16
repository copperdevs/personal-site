import { z } from "astro:content";
import { SoftwarePlatform, StackType, UrlType } from "./enums";

export const softwarePlatform: z.ZodType<SoftwarePlatform> = z.enum([
  SoftwarePlatform.Windows,
  SoftwarePlatform.Mac,
  SoftwarePlatform.Both,
]);

export const stackType: z.ZodType<StackType> = z.enum([
  StackType.Software,
  StackType.Hardware,
  StackType.Langauge,
]);

export const urlType: z.ZodType<UrlType> = z.enum([
  UrlType.Project,
  UrlType.Source,
  UrlType.Package,
]);
