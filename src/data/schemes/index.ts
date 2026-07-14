import type { Scheme } from "@/lib/types";

// Each contributor adds their scheme in its own file and imports it here.
// One file per scheme = no merge conflicts when multiple people work in parallel.
import { aicteSakshamDegree } from "./aicte-saksham-degree";

export const SCHEMES: Scheme[] = [
  aicteSakshamDegree,
];
