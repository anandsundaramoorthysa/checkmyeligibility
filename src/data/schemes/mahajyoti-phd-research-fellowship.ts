import type { Scheme } from "@/lib/types";

export const mahajyotiPhdResearchFellowship: Scheme = {
  id: "mahajyoti-phd-research-fellowship",
  slug: "mahajyoti-phd-research-fellowship",
  name: "MahaJyoti PhD Research Fellowship",
  shortName: "MahaJyoti PhD Fellowship",
  summary:
    "A monthly fellowship of \u20B937,000 (JRF) / \u20B942,000 (SRF) for OBC, VJNT, and SBC category scholars pursuing full-time PhD research in Maharashtra, implemented by MAHAJYOTI.",
  description:
    "The MahaJyoti PhD Research Fellowship is a prestigious program implemented by the Mahatma Jyotiba Phule Research & Training Institute (MAHAJYOTI), Government of Maharashtra, to support full-time PhD research for scholars belonging to OBC (Other Backward Classes), VJNT (Vimukta Jati and Nomadic Tribes), and SBC (Special Backward Category) in Maharashtra. The scheme promotes higher education and research among these communities by providing comprehensive financial assistance including a monthly fellowship and annual contingency grant. Fellows receive Junior Research Fellowship (JRF) for the first two years and Senior Research Fellowship (SRF) for the remaining duration of the PhD programme. The scheme covers all disciplines of study at recognised universities and research institutions in Maharashtra.",
  category: "fellowship",
  level: "state",
  states: ["maharashtra"],
  eligibility: [
    {
      label: "Domicile",
      value: "Must be a permanent resident (domicile) of Maharashtra",
      type: "residence",
    },
    {
      label: "Caste category",
      value: "Must belong to OBC, VJNT, or SBC category with valid caste and caste validity certificates",
      type: "caste-category",
    },
    {
      label: "Non-Creamy Layer",
      value: "Must fall under the Non-Creamy Layer (NCL) group",
      type: "caste-category",
    },
    {
      label: "Academic qualification",
      value: "Must hold a postgraduate degree with minimum 55% marks (50% for reserved categories) from a recognised university",
      type: "education",
    },
    {
      label: "PhD registration",
      value: "Must be registered for a full-time PhD programme at a recognised Indian university or research institution",
      type: "education",
    },
    {
      label: "Age limit",
      value: "Maximum age limit is 45 years at the time of application (relaxation applicable as per government norms)",
      type: "age",
    },
    {
      label: "No other fellowship",
      value: "Must not be receiving any other fellowship or scholarship (e.g., UGC-NET JRF, CSIR, etc.) for the same PhD programme",
      type: "other",
    },
    {
      label: "Mode of study",
      value: "Only full-time PhD programmes are eligible. Distance education or part-time PhD is not eligible",
      type: "other",
    },
  ],
  benefits: [
    "\u20B937,000 per month (JRF — 1st & 2nd year) as fellowship amount",
    "\u20B942,000 per month (SRF — 3rd, 4th & 5th year) as fellowship amount",
    "\u20B910,000 per annum (JRF) contingency grant for Humanities & Social Sciences",
    "\u20B912,000 per annum (JRF) contingency grant for Sciences",
    "\u20B920,500 per annum (SRF) contingency grant for Humanities & Social Sciences",
    "\u20B925,000 per annum (SRF) contingency grant for Sciences",
    "Tenure of up to 5 years (JRF for 2 years + SRF for 3 years, subject to annual progress review)",
    "Fellowship released through Direct Benefit Transfer (DBT) to Aadhaar-linked bank account",
  ],
  requiredDocuments: [
    { name: "Caste certificate (OBC / VJNT / SBC)", mandatory: true },
    { name: "Caste validity certificate", mandatory: true },
    { name: "Domicile certificate of Maharashtra", mandatory: true },
    { name: "Non-Creamy Layer (NCL) certificate", mandatory: true },
    { name: "Postgraduate mark sheets and degree certificate", mandatory: true },
    { name: "PhD registration / admission certificate", mandatory: true },
    { name: "Aadhaar card", mandatory: true },
    { name: "Detailed research proposal", mandatory: true },
    { name: "Aadhaar-linked bank passbook / cancelled cheque", mandatory: true },
    { name: "Passport-size photograph", mandatory: true },
    { name: "Age proof certificate", mandatory: true },
  ],
  officialPortalUrl: "https://mahajyoti.org.in",
  ministry: "Mahatma Jyotiba Phule Research & Training Institute (MAHAJYOTI), Government of Maharashtra",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "PhD",
    "research",
    "MahaJyoti",
    "MAHAJYOTI",
    "OBC",
    "VJNT",
    "SBC",
    "Maharashtra",
    "state",
    "JRF",
    "SRF",
    "contingency grant",
    "doctoral",
    "backward classes",
    "higher education",
    "research fellowship",
  ],
  faqs: [
    {
      q: "Who is eligible for the MahaJyoti PhD Research Fellowship?",
      a: "Scholars who are permanent residents of Maharashtra, belong to OBC, VJNT, or SBC categories under Non-Creamy Layer (NCL), and are registered for a full-time PhD programme at a recognised Indian university. The maximum age is 45 years.",
    },
    {
      q: "What is the fellowship amount under MahaJyoti PhD Research Fellowship?",
      a: "Fellows receive \u20B937,000 per month as JRF (1st & 2nd year) and \u20B942,000 per month as SRF (3rd, 4th & 5th year). Additionally, annual contingency grants of \u20B910,000/\u20B912,000 (JRF) and \u20B920,500/\u20B925,000 (SRF) are provided depending on the discipline.",
    },
    {
      q: "Which categories are covered under this fellowship?",
      a: "The fellowship covers OBC (Other Backward Classes), VJNT (Vimukta Jati and Nomadic Tribes), and SBC (Special Backward Category) candidates who hold valid caste and caste validity certificates.",
    },
    {
      q: "Can I apply if I already have a UGC-NET JRF or other fellowship?",
      a: "No, candidates already receiving any other fellowship or scholarship (UGC-NET JRF, CSIR, etc.) for the same PhD programme are not eligible. This fellowship is intended for those without other financial support.",
    },
    {
      q: "What is the duration of the fellowship?",
      a: "The fellowship is awarded for a maximum of 5 years: JRF for the first 2 years and SRF for the remaining 3 years. Continuation beyond the first 2 years requires satisfactory progress review.",
    },
    {
      q: "How do I apply for this fellowship?",
      a: "Applications are submitted online through the official MahaJyoti portal at mahajyoti.org.in. The process involves registration, filling personal and academic details, uploading required documents, and submitting the application before the deadline.",
    },
    {
      q: "Is distance education PhD eligible for this fellowship?",
      a: "No, only full-time PhD programmes at recognised universities or research institutions are eligible. Distance education, part-time, or correspondence PhD programmes are not covered.",
    },
  ],
  source: "sample",
};
