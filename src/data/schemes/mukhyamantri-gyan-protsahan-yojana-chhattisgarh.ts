import type { Scheme } from "@/lib/types";

export const mukhyamantriGyanProtsahanYojanaChhattisgarh: Scheme = {
  id: "mukhyamantri-gyan-protsahan-yojana-chhattisgarh",
  slug: "mukhyamantri-gyan-protsahan-yojana-chhattisgarh-d99g2fuc",
  name: "Mukhyamantri Gyan Protsahan Yojana \u2013 Chhattisgarh",
  shortName: "CG Gyan Protsahan",
  summary:
    "A one-time financial incentive of \u20B915,000 for SC/ST students who perform meritoriously in the CGBSE Class 10 and Class 12 board examinations in Chhattisgarh.",
  description:
    "The Mukhyamantri Gyan Protsahan Yojana is a Chhattisgarh government scheme awarding a one-time financial incentive of \u20B915,000 to SC/ST students who perform meritoriously in the Chhattisgarh Board of Secondary Education (CGBSE) Class 10 and Class 12 examinations. The scheme aims to encourage academic excellence among students from Scheduled Caste and Scheduled Tribe communities by recognising and rewarding their performance in board examinations.",
  category: "social-welfare",
  level: "state",
  states: ["chhattisgarh"],
  eligibility: [
    {
      label: "Domicile",
      value: "Must be a resident of Chhattisgarh",
      type: "residence",
    },
    {
      label: "Category",
      value: "Must belong to the Scheduled Caste (SC) or Scheduled Tribe (ST) category",
      type: "caste-category",
    },
    {
      label: "Academic qualification",
      value:
        "Must have appeared in and scored meritoriously in the CGBSE Class 10 or Class 12 board examination",
      type: "education",
    },
  ],
  benefits: [
    "One-time incentive award of \u20B915,000",
    "Available for both Class 10 and Class 12 meritorious students",
    "Award is credited directly to the student\u2019s bank account after verification",
  ],
  requiredDocuments: [
    { name: "Chhattisgarh domicile certificate", mandatory: true },
    { name: "SC/ST caste certificate", mandatory: true },
    {
      name: "CGBSE Class 10 or Class 12 mark sheet",
      mandatory: true,
    },
    { name: "Aadhaar card", mandatory: true },
    { name: "Bank passbook", mandatory: true },
  ],
  officialPortalUrl: "https://schoolscholarship.cg.nic.in/",
  ministry: "Department of Scheduled Castes, Scheduled Tribes and Other Backward Classes Welfare, Government of Chhattisgarh",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "SC",
    "ST",
    "Chhattisgarh",
    "CGBSE",
    "board exam",
    "merit",
    "secondary",
    "higher secondary",
    "class 10",
    "class 12",
    "one-time award",
    "social welfare",
  ],
  faqs: [
    {
      q: "Who is eligible for the Mukhyamantri Gyan Protsahan Yojana?",
      a: "SC/ST students who are domicile of Chhattisgarh and have appeared in the CGBSE Class 10 or Class 12 board examinations with meritorious scores.",
    },
    {
      q: "How much is the award amount?",
      a: "Eligible students receive a one-time financial incentive of \u20B915,000.",
    },
    {
      q: "How do I apply for this scheme?",
      a: "Visit the Chhattisgarh Scholarship Portal at schoolscholarship.cg.nic.in, check the annual notification for eligible cut-off marks, register and apply online using your CGBSE board examination roll number, upload the required documents, and submit the application.",
    },
    {
      q: "How is the award disbursed?",
      a: "The award is credited directly to the student\u2019s bank account after verification.",
    },
    {
      q: "Is this scheme available for Class 10 and Class 12 students?",
      a: "Yes, the scheme is open to meritorious SC/ST students who have appeared in either the CGBSE Class 10 or Class 12 board examination.",
    },
  ],
  source: "sample",
};
