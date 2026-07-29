import type { Scheme } from "@/lib/types";

export const pmScholarshipSchemeForCentralArmedPoliceForcesAssamRifles: Scheme = {
  id: "pm-scholarship-scheme-for-central-armed-police-forces-assam-rifles",
  slug: "pm-scholarship-scheme-for-central-armed-police-forces-assam-rifles-mr9hehai",
  name: "Prime Minister's Scholarship Scheme for Central Armed Police Forces & Assam Rifles",
  shortName: "PMSS CAPF & AR",
  summary:
    "A monthly scholarship of \u20B92,500 (boys) / \u20B93,000 (girls) for wards and widows of CAPFs & Assam Rifles personnel pursuing professional degree courses, implemented by the Ministry of Home Affairs.",
  description:
    "The Prime Minister's Scholarship Scheme (PMSS) for Central Armed Police Forces (CAPFs) and Assam Rifles is a flagship initiative of the Ministry of Home Affairs (MHA), introduced in 2006-07 to support the higher education of dependent wards and widows of CAPF and Assam Rifles personnel. The scheme covers personnel from BSF, CRPF, CISF, ITBP, SSB, NSG, and Assam Rifles. It provides financial assistance to students pursuing first professional degree courses in fields such as Engineering, Medicine, Dental, Veterinary, Law, Management, Pharmacy, Nursing, and other approved professional programmes at recognised institutions across India. The scholarship is awarded annually through an online merit-based selection process on the National Scholarship Portal (NSP), with preference given to categories based on the parent's service status, including those killed in action, disabled in service, Gallantry Award recipients, and serving or retired personnel below officer rank. The scheme aims to honour the sacrifices of CAPF and Assam Rifles personnel by ensuring their families have access to quality professional education.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Parent service category",
      value:
        "Ward or widow of CAPFs (BSF, CRPF, CISF, ITBP, SSB, NSG) or Assam Rifles personnel who are deceased, disabled, retired, serving (PBOR), or Gallantry Award recipients",
      type: "occupation",
    },
    {
      label: "Academic qualification",
      value: "Minimum 60% marks in Class 12 or equivalent (Minimum Entry Qualification) for fresh applicants",
      type: "education",
    },
    {
      label: "Course of study",
      value:
        "Must be enrolled in the first year of a full-time first professional degree course (Engineering, Medicine, Dental, Law, BBA, BCA, B.Pharma, B.Sc Nursing, MBA, MCA, etc.) at a UGC/AICTE/NMC-recognised institution",
      type: "education",
    },
    {
      label: "Family limit",
      value: "Maximum two children per family are eligible for the scholarship",
      type: "other",
    },
    {
      label: "No income ceiling",
      value: "There is no upper income limit for eligibility under this scheme",
      type: "income",
    },
    {
      label: "Marital status",
      value: "Married daughters are also eligible to apply",
      type: "other",
    },
  ],
  benefits: [
    "\u20B92,500 per month (\u20B930,000 annually) for boys",
    "\u20B93,000 per month (\u20B936,000 annually) for girls",
    "Scholarship amount disbursed annually via Direct Benefit Transfer (DBT) through PFMS",
    "Financial support for up to 5 years, depending on course duration",
    "Selected fresh students receive a personal letter from the Hon'ble Prime Minister",
    "Renewable each year subject to maintaining minimum 50% marks in the previous academic year",
  ],
  requiredDocuments: [
    { name: "Aadhaar card", mandatory: true },
    { name: "Class 12 / Diploma / Graduation mark sheet (MEQ)", mandatory: true },
    { name: "Bonafide student certificate from current institution", mandatory: true },
    { name: "Service certificate from HOO (for serving personnel)", mandatory: true },
    { name: "PPO / Discharge certificate (for retired/deceased personnel)", mandatory: true, note: "Mandatory for categories A to F" },
    { name: "Death / Disability / Gallantry Award certificate", mandatory: false, note: "As applicable based on category" },
    { name: "Aadhaar-linked bank passbook / cancelled cheque", mandatory: true },
    { name: "Passport-size photograph", mandatory: true },
  ],
  officialPortalUrl: "https://scholarships.gov.in",
  ministry:
    "Ministry of Home Affairs (MHA) / Welfare and Rehabilitation Board (WARB)",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "PMSS",
    "CAPF",
    "Assam Rifles",
    "MHA",
    "WARB",
    "BSF",
    "CRPF",
    "CISF",
    "ITBP",
    "SSB",
    "professional degree",
    "engineering",
    "medicine",
    "law",
    "central",
    "all-india",
    "ministry of home affairs",
    "NSP",
    "national scholarship portal",
    "wards",
    "widows",
    "defence",
    "paramilitary",
  ],
  faqs: [
    {
      q: "Who is eligible for the PMSS CAPF & Assam Rifles scholarship?",
      a: "Dependent wards and widows of CAPFs (BSF, CRPF, CISF, ITBP, SSB, NSG) and Assam Rifles personnel who are deceased, disabled, retired, serving (PBOR), or Gallantry Award recipients. Applicants must have a minimum of 60% marks in Class 12/Diploma/Graduation and be enrolled in a recognised first professional degree course.",
    },
    {
      q: "What is the scholarship amount under PMSS?",
      a: "Boys receive \u20B92,500 per month (\u20B930,000 annually) and girls receive \u20B93,000 per month (\u20B936,000 annually). The amount is disbursed annually as a lump sum through Direct Benefit Transfer (DBT).",
    },
    {
      q: "Which courses are eligible under this scheme?",
      a: "Only full-time first professional degree courses such as B.E./B.Tech, MBBS, BDS, LLB, BBA, BCA, B.Pharma, B.Sc Nursing, B.Arch, MBA, MCA, and other UGC/AICTE/NMC-approved professional programmes are eligible. Diploma, certificate, and distance learning courses are not covered.",
    },
    {
      q: "How do I apply for PMSS CAPF & Assam Rifles?",
      a: "Applications are submitted online through the National Scholarship Portal (NSP) at scholarships.gov.in. The application window typically opens from June to October each year. Register on the portal, fill in the details, upload required documents, and submit before the deadline.",
    },
    {
      q: "Can the scholarship be renewed?",
      a: "Yes, the scholarship can be renewed each year for up to 5 years. Students must pass each academic year with a minimum of 50% marks and continue in the same professional degree course. Renewal applications are submitted annually on the NSP portal.",
    },
    {
      q: "Is there an income limit for this scholarship?",
      a: "No, there is no income ceiling. However, applicants receiving any other central scholarship or stipend for the same course are not eligible.",
    },
    {
      q: "How many scholarships are available each year?",
      a: "A total of 2,000 scholarships are allocated annually for CAPF & Assam Rifles categories, with equal reservation for boys (1,000) and girls (1,000). An additional 500 scholarships are available for States/UTs Police martyr families.",
    },
  ],
  source: "sample",
};
