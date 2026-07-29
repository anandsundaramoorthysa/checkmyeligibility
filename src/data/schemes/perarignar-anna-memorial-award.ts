import type { Scheme } from "@/lib/types";

export const perarignarAnnaMemorialAward: Scheme = {
  id: "perarignar-anna-memorial-award",
  slug: "perarignar-anna-memorial-award-353",
  name: "Perarignar Anna Memorial Award",
  shortName: "PAMA",
  summary:
    "\u20B93,000\u2013\u20B95,000 per year for top 2 boys and 2 girls per district in Tamil Nadu from BC/MBC/DNC communities who secure the highest marks in Class 12 and pursue professional courses.",
  description:
    "The Perarignar Anna Memorial Award is a state government honour instituted by the Department of Backward Classes, Most Backward Classes and Minority Welfare, Government of Tamil Nadu. The award recognises academic excellence among students from Backward Classes (BC), Most Backward Classes (MBC), and Denotified Communities (DNC). Each year, the top two boys and top two girls from every district who score the highest marks in the Class 12 public examination are selected for the award. Recipients must pursue a professional degree course (such as Engineering, Medicine, Veterinary, Law, Agriculture, etc.) at an institution located within Tamil Nadu. The award provides financial assistance of \u20B93,000\u2013\u20B95,000 per year for up to four years or until the normal completion of the course. No application is necessary \u2014 selections are made automatically based on the merit list received from the Directorate of Government Examinations, and the amount is disbursed through the Heads of Educational Institutions. There is no income ceiling.",
  category: "scholarship",
  level: "state",
  states: ["tamil-nadu"],
  eligibility: [
    {
      label: "Residence",
      value: "Must be a permanent resident of Tamil Nadu",
      type: "residence",
    },
    {
      label: "Community",
      value:
        "Must belong to Backward Classes (BC), Most Backward Classes (MBC), or Denotified Communities (DNC)",
      type: "caste-category",
    },
    {
      label: "Academic merit",
      value:
        "Must be among the top 2 boys or top 2 girls in the district based on Class 12 public examination marks",
      type: "education",
    },
    {
      label: "Course of study",
      value:
        "Must be pursuing a professional degree course (Medical, Engineering, Veterinary, Law, Agriculture, etc.)",
      type: "education",
    },
    {
      label: "Institution location",
      value:
        "Must be studying in a professional college located within Tamil Nadu",
      type: "residence",
    },
  ],
  benefits: [
    "Financial assistance of \u20B93,000\u2013\u20B95,000 per year for up to four years or until normal course completion",
    "Automatic selection \u2014 no application required, based on Class 12 merit list from the Directorate of Government Examinations",
    "No income ceiling \u2014 purely merit-based award",
    "Amount disbursed directly through the Head of the Educational Institution",
  ],
  requiredDocuments: [
    {
      name: "Caste certificate (BC / MBC / DNC)",
      mandatory: true,
    },
    {
      name: "Class 12 mark sheet",
      mandatory: true,
    },
    {
      name: "Admission proof / bonafide certificate from the professional college",
      mandatory: true,
    },
    {
      name: "Proof of identity (Aadhaar card / Voter ID)",
      mandatory: true,
    },
    {
      name: "Bank account details",
      mandatory: true,
    },
  ],
  officialPortalUrl: "https://tndce.tn.gov.in/",
  ministry:
    "Department of Backward Classes, Most Backward Classes and Minority Welfare, Government of Tamil Nadu",
  applicationMode: ["offline"],
  tags: [
    "Perarignar Anna",
    "Tamil Nadu",
    "BC",
    "MBC",
    "DNC",
    "Class 12",
    "merit",
    "professional course",
    "engineering",
    "medical",
    "law",
    "agriculture",
    "veterinary",
    "state scheme",
    "no application needed",
    "automatic selection",
    "top rankers",
  ],
  faqs: [
    {
      q: "What is the Perarignar Anna Memorial Award?",
      a: "It is a Tamil Nadu government award for the top 2 boys and top 2 girls from BC/MBC/DNC communities in each district who score the highest marks in the Class 12 public examination and pursue professional courses within the state.",
    },
    {
      q: "How much financial assistance is provided?",
      a: "Recipients receive \u20B93,000 to \u20B95,000 per year for up to four years or until the normal completion of their professional course.",
    },
    {
      q: "Do I need to apply for this award?",
      a: "No. Selections are made automatically by the District Backward Classes Officer (DBCO) based on the merit list received from the Directorate of Government Examinations. The award is disbursed through the Head of the educational institution.",
    },
    {
      q: "What courses are covered?",
      a: "Professional degree courses including Medical, Engineering, Veterinary, Law, Agriculture, and other professional programmes offered by institutions in Tamil Nadu.",
    },
    {
      q: "Is there an income ceiling?",
      a: "No. The award is purely merit-based with no income criteria.",
    },
    {
      q: "Who is eligible?",
      a: "Students belonging to BC, MBC, or DNC communities who are residents of Tamil Nadu and secure the top 2 positions (boys and girls separately) in their district in the Class 12 public examination, and join a professional college in Tamil Nadu.",
    },
  ],
  source: "sample",
};
