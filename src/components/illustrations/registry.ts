import {
  Sprout,
  GraduationCap,
  Stethoscope,
  Briefcase,
  Home,
  HeartHandshake,
  Users,
  IndianRupee,
  type LucideIcon,
} from "lucide-react";
import type { Tone } from "./SpotIllustration";

export interface CategoryArt {
  Icon: LucideIcon;
  tone: Tone;
}

/** Icon + flag-color tone per display category — tones rotate for a tricolor spread. */
export const CATEGORY_ART: Record<string, CategoryArt> = {
  agriculture: { Icon: Sprout, tone: "green" },
  education: { Icon: GraduationCap, tone: "navy" },
  health: { Icon: Stethoscope, tone: "saffron" },
  employment: { Icon: Briefcase, tone: "navy" },
  housing: { Icon: Home, tone: "saffron" },
  "women-child": { Icon: HeartHandshake, tone: "green" },
  "senior-citizen": { Icon: Users, tone: "navy" },
  "finance-credit": { Icon: IndianRupee, tone: "saffron" },
};

export function getCategoryArt(key: string): CategoryArt {
  return CATEGORY_ART[key] ?? { Icon: Sprout, tone: "navy" };
}
