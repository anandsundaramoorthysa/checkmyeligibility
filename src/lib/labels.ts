import type { LevelOfGovernment, IndianState } from "@/lib/types";

/** Human-readable label for a level of government. */
export function levelLabel(level: LevelOfGovernment): string {
  switch (level) {
    case "central":
      return "Central";
    case "state":
      return "State";
    case "central-state":
      return "Central + State";
  }
}

/** Title-case a kebab IndianState value, e.g. "tamil-nadu" -> "Tamil Nadu". */
export function stateLabel(state: IndianState): string {
  if (state === "all-india") return "All India";
  return state
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/** Short coverage hint for a scheme/certificate's states list. */
export function statesHint(states: IndianState[]): string {
  if (states.includes("all-india")) return "Available across India";
  if (states.length === 1) return stateLabel(states[0]);
  return `${states.length} states`;
}
