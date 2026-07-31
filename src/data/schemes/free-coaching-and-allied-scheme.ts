import type { Scheme } from "@/lib/types";

export const freeCoachingAndAlliedScheme: Scheme = {
  id: "free-coaching-and-allied-scheme",
  slug: "free-coaching-and-allied-scheme",
  name: "Free Coaching and Allied Scheme (for SCs, OBCs, and PM CARES beneficiaries)",
  shortName: "Free Coaching Scheme",
  summary:
    "Quality coaching for SC, OBC, and PM CARES beneficiaries to prepare for competitive exams and professional courses, with coaching fee coverage up to \u20B975,000 and a monthly stipend of up to \u20B96,000.",
  description:
    "Provides quality coaching for economically disadvantaged Scheduled Castes (SCs), Other Backward Classes (OBCs), and beneficiaries of the PM CARES for Children Scheme. The objective is to enable students to appear in competitive examinations for jobs in the Public/Private sector and secure admission to reputed professional institutions. The scheme is currently implemented through Dr. Ambedkar Centres of Excellence (DACE) in empanelled Central Universities and via online partnerships.",
  category: "social-welfare",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Caste / category",
      value:
        "Must belong to SC or OBC category (or be a beneficiary of the PM CARES for Children Scheme)",
      type: "caste-category",
    },
    {
      label: "Annual family income",
      value: "Must not exceed \u20B98,00,000 from all sources",
      type: "income",
    },
    {
      label: "Academic performance",
      value:
        "Minimum 50% marks in the qualifying examination (Class X or XII, depending on the course)",
      type: "education",
    },
    {
      label: "Benefit limit",
      value: "Benefits can be availed not more than twice",
      type: "other",
    },
    {
      label: "Minority candidates",
      value:
        "Candidates belonging to minority communities are directed to similar schemes under the Ministry of Minority Affairs",
      type: "other",
    },
  ],
  benefits: [
    "Coaching fee coverage up to \u20B975,000 for Civil Services / JEE / NEET / CA / GATE",
    "Coaching fee coverage up to \u20B940,000 for SSC / RRB examinations",
    "Coaching fee coverage up to \u20B950,000 for Banking / CAT / CMAT",
    "Monthly stipend of \u20B93,000 for local students",
    "Monthly stipend of \u20B96,000 for outstation students",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card (linked to a Bank Account)", mandatory: true },
    {
      name: "Income Certificate (issued by a Tehsildar or equivalent Revenue Officer)",
      mandatory: true,
    },
    { name: "Caste / Community Certificate", mandatory: true },
    {
      name: "Academic Mark Sheets (Class X / XII / Graduation)",
      mandatory: true,
    },
    {
      name: "Proof of Admission / Enrolment in the competitive coaching course",
      mandatory: true,
    },
  ],
  officialPortalUrl: "https://coaching.dosje.gov.in/",
  ministry: "Ministry of Social Justice & Empowerment",
  applicationMode: ["online"],
  tags: [
    "coaching",
    "free coaching",
    "SC",
    "OBC",
    "PM CARES",
    "competitive exams",
    "Civil Services",
    "JEE",
    "NEET",
    "GATE",
    "SSC",
    "RRB",
    "Banking",
    "CAT",
    "stipend",
    "DACE",
    "social-welfare",
    "central",
    "all-india",
  ],
  source: "sample",
};
