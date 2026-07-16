import type { Scheme } from "@/lib/types";

// Each contributor adds their scheme in its own file and imports it here.
// One file per scheme = no merge conflicts when multiple people work in parallel.
import { aicteSakshamDegree } from "./aicte-saksham-degree";
import { aicteDoctoralFellowship } from "./aicte-doctoral-fellowship";

export const SCHEMES: Scheme[] = [
  aicteSakshamDegree,
  aicteDoctoralFellowship,
];
