import type { Scheme } from "@/lib/types";

export const punjabBocwBoardStipendScholarshipScheme: Scheme = {
  id: "punjab-bocw-board-stipend-scholarship-scheme",
  slug: "punjab-bocw-board-stipend-scholarship-scheme-mrf9tnjp",
  name: "Punjab BOCW Board Stipend Scholarship Scheme",
  shortName: "Punjab BOCW Stipend",
  summary:
    "Annual financial assistance of \u20B93,000 to \u20B970,000 for children of registered construction workers in Punjab, from primary to degree courses, offered by the Punjab Building and Other Construction Workers Welfare Board.",
  description:
    "The Punjab Building and Other Construction Workers Welfare Board (PBOCWWB) offers a Stipend Scheme that provides annual financial assistance ranging from \u20B93,000 to \u20B970,000 for the education of registered construction workers\u2019 children, covering classes from 1st standard through degree courses. The mandatory two-year service condition to qualify for this benefit has been abolished, making it accessible to more workers\u2019 families. Registered workers themselves are also eligible if pursuing studies in evening classes at approved institutes.",
  category: "scholarship",
  level: "state",
  states: ["punjab"],
  eligibility: [
    {
      label: "Worker registration",
      value:
        "The construction worker must be a registered beneficiary with the Punjab BOCW Welfare Board",
      type: "other",
    },
    {
      label: "Work experience",
      value:
        "The worker must have worked in Punjab for at least 90 days in the preceding 12 months",
      type: "other",
    },
    {
      label: "Age limit",
      value: "The applicant must be between 18 and 60 years old",
      type: "age",
    },
    {
      label: "Education (children)",
      value:
        "Benefit applies to dependent children of registered workers enrolled in approved institutions/universities (Primary to Degree courses)",
      type: "education",
    },
    {
      label: "Academic performance",
      value: "Stipends are not granted if the student has failed in the last class",
      type: "education",
    },
  ],
  benefits: [
    "Annual stipend ranging from \u20B93,000 to \u20B970,000",
    "Covers primary through degree-level education",
    "Available for both children of registered workers and the workers themselves (evening classes)",
    "Disbursed via Direct Benefit Transfer to the worker\u2019s bank account",
  ],
  requiredDocuments: [
    { name: "Passport-size photograph of the registered worker", mandatory: true },
    {
      name: "BOCW (Labour) card with valid renewal page",
      mandatory: true,
    },
    { name: "Worker\u2019s Aadhaar card", mandatory: true },
    { name: "Student\u2019s (child\u2019s) Aadhaar card", mandatory: true },
    {
      name: "Bonafide Certificate from school or college",
      mandatory: true,
    },
    {
      name: "Previous class pass certificate or mark sheets",
      mandatory: true,
    },
    {
      name: "Worker\u2019s bank account passbook",
      mandatory: true,
    },
    {
      name: "Hostel living proof/certificate",
      mandatory: false,
      note: "If applicable",
    },
  ],
  officialPortalUrl: "https://bocw.punjab.gov.in/bocwstatic/",
  ministry:
    "Department of Labour, Government of Punjab",
  applicationMode: ["online", "offline"],
  tags: [
    "scholarship",
    "stipend",
    "Punjab",
    "BOCW",
    "construction workers",
    "labour",
    "education",
    "children",
    "DBT",
    "state scholarship",
  ],
  faqs: [
    {
      q: "Who is eligible for the Punjab BOCW Stipend Scheme?",
      a: "Children of registered construction workers with the Punjab BOCW Welfare Board who have worked at least 90 days in Punjab in the preceding 12 months. The worker must be between 18 and 60 years old.",
    },
    {
      q: "How much stipend can I receive?",
      a: "Annual financial assistance ranges from \u20B93,000 to \u20B970,000 depending on the education level, from primary school through degree courses.",
    },
    {
      q: "Can the registered worker themselves apply for this scholarship?",
      a: "Yes. Registered workers pursuing studies in evening classes at approved institutes are also eligible.",
    },
    {
      q: "How do I apply?",
      a: "Apply online through the Punjab BOCW Portal by logging in, selecting the Stipend Scheme, and uploading required documents. Alternatively, visit your local Sewa Kendra or District Labour Welfare Office for offline application.",
    },
    {
      q: "Is there a minimum attendance requirement?",
      a: "Stipends are not granted if the student has failed in the last class. Regular attendance and satisfactory academic performance are expected.",
    },
  ],
  source: "sample",
};
