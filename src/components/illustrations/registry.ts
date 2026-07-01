import {
  Award,
  FlaskConical,
  Banknote,
  GraduationCap,
  Shield,
  Heart,
  Sprout,
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
  scholarship: { Icon: Award, tone: "saffron" },
  fellowship: { Icon: FlaskConical, tone: "green" },
  "education-loan": { Icon: Banknote, tone: "navy" },
  education: { Icon: GraduationCap, tone: "navy" },
  "social-welfare": { Icon: Shield, tone: "saffron" },
  "women-child": { Icon: Heart, tone: "green" },
  agriculture: { Icon: Sprout, tone: "green" },
  health: { Icon: Stethoscope, tone: "saffron" },
  employment: { Icon: Briefcase, tone: "navy" },
  housing: { Icon: Home, tone: "saffron" },
  "senior-citizen": { Icon: Users, tone: "navy" },
  "finance-credit": { Icon: IndianRupee, tone: "saffron" },
  "women-child-old": { Icon: HeartHandshake, tone: "green" },
};

export function getCategoryArt(key: string): CategoryArt {
  return CATEGORY_ART[key] ?? { Icon: Award, tone: "navy" };
}
