import type { Scheme } from "@/lib/types";

export const kanyaSakshartaProtsahanYojana: Scheme = {
  id: "kanya-saksharta-protsahan-yojana",
  slug: "kanya-saksharta-protsahan-yojana-madhya-pradesh-rt5np8wk",
  name: "Kanya Saksharta Protsahan Yojana",
  shortName: "Kanya Saksharta Protsahan",
  summary:
    "One-time financial incentive of ₹3,000 for SC, ST, and Vimukt/Nomadic/Semi-Nomadic Tribe girl students in Madhya Pradesh who pass Class 10 and enroll in Class 11 as regular students.",
  description:
    "Kanya Saksharta Protsahan Yojana is an educational assistance scheme implemented by the Government of Madhya Pradesh through the Tribal Welfare Department, SC Welfare Department, and Denotified, Nomadic & Semi-Nomadic Welfare Department. The scheme aims to motivate girls towards education, reduce dropout rates at the higher secondary level, and improve literacy among tribal and marginalized communities. Eligible girl students who pass Class 10th and take admission in Class 11th as regular students in a recognized school receive a one-time financial incentive of ₹3,000 to cover educational expenses such as books, stationery, uniforms, and other study-related requirements.",
  category: "education",
  level: "state",
  states: ["madhya-pradesh"],
  eligibility: [
    {
      label: "Domicile",
      value: "Must be a permanent resident of Madhya Pradesh",
      type: "residence",
    },
    {
      label: "Gender",
      value: "Exclusively for girl students",
      type: "gender",
    },
    {
      label: "Community",
      value:
        "Must belong to Scheduled Caste (SC), Scheduled Tribe (ST), or Vimukt, Ghumakkad, and Ardh Ghumakkad Janjati (Nomadic & Semi-Nomadic Tribe) categories",
      type: "caste-category",
    },
    {
      label: "Academic qualification",
      value:
        "Must have passed Class 10th examination from a recognized board",
      type: "education",
    },
    {
      label: "Current enrollment",
      value:
        "Must have taken admission in Class 11th as a regular student in a recognized school in Madhya Pradesh",
      type: "education",
    },
    {
      label: "Parent income status",
      value:
        "Parents or guardians should not be Income Tax payers",
      type: "income",
    },
  ],
  benefits: [
    "One-time financial incentive of ₹3,000 for eligible girl students",
    "Encourages girls to continue education after passing Class 10th",
    "Helps reduce dropout rate among girls at the higher secondary level",
    "Financial support for educational expenses including books, stationery, uniforms, and study materials",
    "Promotes enrollment of eligible girls in Class 11th as regular students",
    "Supports educational empowerment of SC, ST, and Vimukt/Nomadic/Semi-Nomadic Tribe girls in Madhya Pradesh",
  ],
  requiredDocuments: [
    { name: "Caste certificate (SC/ST/Vimukt/Nomadic Tribe)", mandatory: true },
    { name: "Income certificate of parents", mandatory: true },
    { name: "Domicile certificate of Madhya Pradesh", mandatory: true },
    { name: "Class 10th marksheet", mandatory: true },
    { name: "Samagra ID", mandatory: true },
    { name: "Bank passbook copy (Aadhaar-linked)", mandatory: true },
    { name: "Passport-size photograph", mandatory: true },
    { name: "School admission proof for Class 11th", mandatory: true },
  ],
  officialPortalUrl:
    "https://www.tribal.mp.gov.in/CMS/?page=VT9462Hv1Y1CrS2sWaeq9w%3D%3D&leftid=I7ifJxcwYjN2DmYWvPddIA%3D%3D",
  ministry:
    "Tribal Welfare Department / SC Welfare Department / Denotified, Nomadic & Semi-Nomadic Welfare Department, Government of Madhya Pradesh",
  applicationMode: ["offline"],
  tags: [
    "girl students",
    "women",
    "education",
    "Class 11",
    "SC",
    "ST",
    "tribal",
    "nomadic",
    "Madhya Pradesh",
    "incentive",
    "dropout prevention",
    "higher secondary",
  ],
  faqs: [
    {
      q: "What is Kanya Saksharta Protsahan Yojana?",
      a: "Kanya Saksharta Protsahan Yojana is a Government of Madhya Pradesh scheme that provides a one-time financial incentive of ₹3,000 to eligible SC, ST, and Vimukt/Nomadic/Semi-Nomadic Tribe girl students who pass Class 10th and take admission in Class 11th as regular students.",
    },
    {
      q: "Who is eligible for the scheme?",
      a: "Permanent resident girls of Madhya Pradesh belonging to SC, ST, or Vimukt/Nomadic/Semi-Nomadic Tribe categories who have passed Class 10th and enrolled in Class 11th as regular students in a recognized school are eligible. Parents should not be income tax payers.",
    },
    {
      q: "How much financial assistance is provided?",
      a: "Eligible beneficiaries receive a one-time financial incentive of ₹3,000 under the scheme.",
    },
    {
      q: "How can students apply for the scheme?",
      a: "Eligible students can submit their application through offline mode with the assistance of their respective schools. The school verifies the application and forwards it to the concerned department for processing.",
    },
    {
      q: "Can private candidates apply for the scheme?",
      a: "No. The scheme is available only for students who have been admitted to Class 11th as regular students in a recognized school. Private candidates are not eligible.",
    },
  ],
  source: "sample",
};