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

/** Build a grievance context block for the given state (or general if none). */
export function buildGrievanceContext(mentionedState?: string): string {
  const general = GRIEVANCE_PORTALS.filter((p) => p.state === "all-india");
  const statePortals = mentionedState
    ? GRIEVANCE_PORTALS.filter((p) =>
        p.state.toLowerCase().includes(mentionedState.toLowerCase()),
      )
    : [];

  const portals = [...statePortals, ...general];
  if (!portals.length) return "";

  const lines = [
    "GRIEVANCE / REJECTION GUIDANCE:",
    "If a scheme application was rejected or not processed correctly, the student can:",
    "1. First appeal directly to the scheme authority via the official portal (use the scheme URL).",
    "2. File a grievance at one of these portals:",
  ];
  for (const p of portals) {
    let line = `   - ${p.portalName}: ${p.url}`;
    if (p.helpline) line += ` (Helpline: ${p.helpline})`;
    lines.push(line);
  }
  lines.push("Advise the student to keep their application ID and reference numbers handy when filing a grievance.");
  return lines.join("\n");
}
