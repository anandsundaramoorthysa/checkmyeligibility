import type { Scheme } from "@/lib/types";

export const chiefMinisterMeritAward: Scheme = {
  id: "chief-minister-merit-award",
  slug: "chief-minister-merit-award-mrf3s9t1",
  name: "Chief Minister Merit Award",
  shortName: "CM Merit Award",
  summary:
    "₹3,000 per year for 5 years for 1,000 boys and 1,000 girls from Adi Dravidar, Tribal, and Adi Dravidar Christian communities in Tamil Nadu.",
  description:
    "The Chief Minister Merit Award, implemented by the Adi Dravidar and Tribal Welfare Department, Government of Tamil Nadu, provides financial assistance to meritorious students belonging to Adi Dravidar, Tribal, and Adi Dravidar Converted to Christianity communities. Every year, 1,000 boys and 1,000 girls selected based on their Higher Secondary (+2) public examination marks receive ₹3,000 annually for five years while pursuing higher education.",
  category: "scholarship",
  level: "state",
  states: ["tamil-nadu"],
  eligibility: [
    {
      label: "Residency",
      value: "Must be a resident of Tamil Nadu",
      type: "residence",
    },
    {
      label: "Community",
      value: "Must belong to the Adi Dravidar, Scheduled Tribe (Tribal), or Adi Dravidar Converted to Christianity community",
      type: "caste-category",
    },
    {
      label: "Qualification",
      value: "Must have passed the Higher Secondary (+2) Public Examination",
      type: "education",
    },
    {
      label: "Continuation",
      value: "Must be continuing higher education after Plus Two",
      type: "education",
    },
  ],
  benefits: [
    "₹3,000 per year for 5 consecutive years",
    "Award continues subject to continuation of higher education",
    "1,000 boys and 1,000 girls selected annually on merit",
    "Selection based on Higher Secondary (+2) public examination marks",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card or other identity proof", mandatory: true },
    { name: "Community (Caste) Certificate", mandatory: true },
    { name: "Plus Two (Class XII) mark sheet", mandatory: true },
    { name: "Proof of admission/continuation of higher education", mandatory: true },
    { name: "Bank account details", mandatory: true },
    { name: "Any other documents required by the authority", mandatory: false },
  ],
  officialPortalUrl: "https://adtw.tn.gov.in/",
  ministry: "Adi Dravidar and Tribal Welfare Department, Government of Tamil Nadu",
  applicationMode: ["offline"],
  tags: [
    "Tamil Nadu",
    "chief minister",
    "merit award",
    "Adi Dravidar",
    "tribal",
    "SC/ST",
    "scholarship",
    "higher secondary",
    "state scheme",
    "merit based",
  ],
  faqs: [
    {
      q: "What is the Chief Minister Merit Award?",
      a: "A Tamil Nadu government award providing ₹3,000 per year for 5 years to meritorious students from Adi Dravidar, Tribal, and Adi Dravidar Christian communities pursuing higher education after Plus Two.",
    },
    {
      q: "Who is eligible?",
      a: "Tamil Nadu residents belonging to Adi Dravidar, Scheduled Tribe, or Adi Dravidar Converted to Christianity communities who have passed the Higher Secondary (+2) public examination and continue higher education.",
    },
    {
      q: "What is the award amount?",
      a: "₹3,000 per year for 5 consecutive years, subject to continuation of higher education.",
    },
    {
      q: "How many students are selected?",
      a: "Every year, 1,000 boys and 1,000 girls are selected based on their Higher Secondary (+2) public examination marks.",
    },
    {
      q: "How do I apply?",
      a: "Obtain the application form from the concerned educational institution, complete it, attach the required documents, and submit it to the institution. Collect the acknowledgement after submission.",
    },
  ],
  source: "sample",
};
