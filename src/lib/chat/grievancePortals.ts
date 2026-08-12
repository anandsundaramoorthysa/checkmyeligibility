/** State-specific grievance / appeal portal data for rejected scheme applications. */

export interface GrievancePortal {
  state: string;
  portalName: string;
  url: string;
  helpline?: string;
}

export const GRIEVANCE_PORTALS: GrievancePortal[] = [
  {
    state: "all-india",
    portalName: "CPGRAMS (Central Public Grievance Redress and Monitoring System)",
    url: "https://pgportal.gov.in",
    helpline: "1800-11-7923",
  },
  {
    state: "all-india",
    portalName: "National Scholarship Portal Grievance",
    url: "https://scholarships.gov.in",
    helpline: "0120-6619540",
  },
  {
    state: "Tamil Nadu",
    portalName: "Tamil Nadu e-Grievances Portal",
    url: "https://cms.tn.gov.in",
    helpline: "044-28592422",
  },
  {
    state: "Maharashtra",
    portalName: "Aaple Sarkar Grievance",
    url: "https://aaplesarkar.mahaonline.gov.in",
    helpline: "1800-120-8040",
  },
  {
    state: "Karnataka",
    portalName: "Karnataka Sampark",
    url: "https://sampark.karnataka.gov.in",
    helpline: "080-4455-4455",
  },
  {
    state: "Andhra Pradesh",
    portalName: "AP Spandana Grievance",
    url: "https://spandana.ap.gov.in",
    helpline: "1902",
  },
  {
    state: "Telangana",
    portalName: "Mana Sewa Jagruthi",
    url: "https://www.telangana.gov.in",
    helpline: "040-23450658",
  },
  {
    state: "Kerala",
    portalName: "Kerala Government Grievance Portal",
    url: "https://grievance.kerala.gov.in",
    helpline: "0471-2333890",
  },
  {
    state: "Uttar Pradesh",
    portalName: "UP Jansunwai Portal",
    url: "https://jansunwai.up.nic.in",
    helpline: "1076",
  },
  {
    state: "West Bengal",
    portalName: "West Bengal Grievance Portal",
    url: "https://wb.gov.in/government-services-grievance.aspx",
  },
  {
    state: "Bihar",
    portalName: "Bihar Lok Shikayat Portal",
    url: "https://lokshikayat.bihar.gov.in",
    helpline: "0612-2215541",
  },
  {
    state: "Rajasthan",
    portalName: "Rajasthan Sampark",
    url: "https://sampark.rajasthan.gov.in",
    helpline: "181",
  },
  {
    state: "Gujarat",
    portalName: "Gujarat Grievance Portal",
    url: "https://cm.gujarat.gov.in/cmcell.htm",
    helpline: "1800-233-5500",
  },
  {
    state: "Madhya Pradesh",
    portalName: "MP CM Helpline",
    url: "https://cmhelpline.mp.gov.in",
    helpline: "181",
  },
  {
    state: "Punjab",
    portalName: "Punjab Grievance Portal",
    url: "https://pgrs.punjab.gov.in",
    helpline: "1100",
  },
  {
    state: "Odisha",
    portalName: "Odisha MO Sarkar",
    url: "https://grievance.odisha.gov.in",
    helpline: "14545",
  },
  {
    state: "Delhi",
    portalName: "Delhi CM Grievance Portal",
    url: "https://cmoffice.delhi.gov.in",
    helpline: "011-23390340",
  },
  {
    state: "Assam",
    portalName: "Assam Grievance Portal",
    url: "https://egov.assam.gov.in",
  },
  {
    state: "Chhattisgarh",
    portalName: "CG e-Samadhan",
    url: "https://esamadhan.cgstate.gov.in",
    helpline: "181",
  },
  {
    state: "Meghalaya",
    portalName: "Meghalaya Grievance Portal",
    url: "https://grievance.meghalaya.gov.in",
  },
];

/** Build a grievance context block.
 *  - No state known → instruct LLM to ask for state first (one question, no portals yet).
 *  - State known → give state-specific + national portals with exact steps.
 */
export function buildGrievanceContext(mentionedState?: string): string {
  if (!mentionedState) {
    return [
      "GRIEVANCE / REJECTION GUIDANCE — FIRST TURN:",
      "The student's application was rejected or not processed. Do NOT list portals yet.",
      "Reply with: \"I'm sorry to hear that. To give you the exact appeal steps and grievance portal for your state, which state did you apply in?\"",
      "Keep the reply to 1–2 sentences. The student will select their state from chip buttons.",
    ].join("\n");
  }

  const general = GRIEVANCE_PORTALS.filter((p) => p.state === "all-india");
  const statePortals = GRIEVANCE_PORTALS.filter((p) =>
    p.state.toLowerCase().includes(mentionedState.toLowerCase()),
  );

  const portals = [...statePortals, ...general];
  if (!portals.length) return "";

  const lines = [
    `GRIEVANCE / REJECTION GUIDANCE — STATE: ${mentionedState}`,
    "Guide the student through the appeal process step by step:",
    "1. First, appeal directly on the scheme's own official portal (use the URL from the CONTEXT block).",
    "2. If unresolved, file a grievance at one of these portals:",
  ];
  for (const p of portals) {
    let line = `   - ${p.portalName}: ${p.url}`;
    if (p.helpline) line += ` (Helpline: ${p.helpline})`;
    lines.push(line);
  }
  lines.push("3. Advise the student to keep their Application ID, rejection letter, and supporting documents handy.");
  lines.push("Also ask: what reason was given for the rejection? This helps narrow the next step.");
  return lines.join("\n");
}
