import { z } from "astro:content";
import { SoftwarePlatform, StackType } from "./enums";

export const softwarePlatform: z.ZodType<SoftwarePlatform> = z.enum([
  SoftwarePlatform.Windows,
  SoftwarePlatform.Mac,
  SoftwarePlatform.Web,
]);

export const stackType: z.ZodType<StackType> = z.enum([
  StackType.Software,
  StackType.Hardware,
]);
