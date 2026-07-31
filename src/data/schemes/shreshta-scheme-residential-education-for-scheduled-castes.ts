import type { Scheme } from "@/lib/types";

export const shreshtaSchemeResidentialEducationForScheduledCastes: Scheme = {
  id: "shreshta-scheme-residential-education-for-scheduled-castes",
  slug: "shreshta-scheme-residential-education-for-scheduled-castes",
  name: "SHRESHTA Scheme (Residential Education for Scheduled Castes)",
  shortName: "SHRESHTA",
  summary:
    "Fully funded residential education at empanelled private CBSE schools for SC students in Classes 9\u201312, covering tuition, boarding, lodging, and all academic expenses with no cost to the family.",
  description:
    "SHRESHTA provides quality residential education to Scheduled Caste students in Classes IX and XI through selected private residential schools affiliated with CBSE. Students are selected through the National Testing Agency (NTA) entrance examination. The Government bears the educational and residential expenses of the selected students.",
  category: "social-welfare",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Citizenship",
      value: "Applicant must be an Indian citizen",
      type: "residence",
    },
    {
      label: "Caste category",
      value: "Must belong to the Scheduled Caste (SC) category",
      type: "caste-category",
    },
    {
      label: "Current class",
      value:
        "Must be studying in Class VIII (for admission to Class IX) or Class X (for admission to Class XI)",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "Must not exceed \u20B92,50,000",
      type: "income",
    },
    {
      label: "Entrance exam",
      value:
        "Must qualify the SHRESHTA Entrance Examination conducted by NTA",
      type: "other",
    },
  ],
  benefits: [
    "Fully funded tuition fees at empanelled private CBSE residential schools",
    "Free boarding and lodging for the duration of the programme",
    "Free uniform and other academic expenses covered",
    "No financial contribution required from the student or family",
  ],
  requiredDocuments: [
    { name: "Aadhaar card", mandatory: true },
    {
      name: "SC (Scheduled Caste) caste certificate from competent authority",
      mandatory: true,
    },
    {
      name: "Income certificate (annual family income \u2264 \u20B92,50,000)",
      mandatory: true,
    },
    {
      name: "Class 8 mark sheet and school records or transfer certificate",
      mandatory: true,
    },
    { name: "Birth certificate or Class 10 certificate (age proof)", mandatory: true },
    { name: "Passport-size photographs", mandatory: true },
    { name: "Bank account passbook of student or parent", mandatory: true },
    { name: "Parent/guardian identity proof", mandatory: true },
  ],
  officialPortalUrl: "https://socialjustice.gov.in",
  ministry: "Ministry of Social Justice & Empowerment",
  applicationMode: ["online"],
  tags: [
    "SHRESHTA",
    "residential education",
    "SC",
    "Scheduled Caste",
    "Class 9",
    "Class 10",
    "Class 11",
    "Class 12",
    "CBSE",
    "NTA",
    "social-welfare",
    "boarding",
    "hostel",
    "central",
    "all-india",
  ],
  source: "sample",
};
