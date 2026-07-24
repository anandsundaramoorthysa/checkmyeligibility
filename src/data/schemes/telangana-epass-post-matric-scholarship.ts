import type { Scheme } from "@/lib/types";

export const telanganaEpassPostMatricScholarship: Scheme = {
  id: "telangana-epass-post-matric-scholarship",
  slug: "telangana-epass-post-matric-scholarship-mr8ht3vp",
  name: "Telangana ePASS Post-Matric Scholarship",
  shortName: "TS ePASS PMS",
  summary:
    "Full tuition fee reimbursement and maintenance allowance for SC, ST, BC, EBC, Minority and Disabled students pursuing post-matric courses in Telangana, with income limits ranging from ₹1,00,000 to ₹2,50,000 per annum depending on category.",
  description:
    "The Telangana ePASS Post-Matric Scholarship (PMS) is a flagship welfare scheme of the Government of Telangana, implemented through the Electronic Payment Application System of Scholarships (ePASS) portal. It provides full tuition fee reimbursement and maintenance allowance to students from Scheduled Castes (SC), Scheduled Tribes (ST), Backward Classes (BC), Economically Backward Classes (EBC), Minorities, and Disabled Welfare categories pursuing post-matric courses in the state.\n\nThe scheme covers professional courses (Engineering, Medicine, MBA, MCA, Pharmacy, Agriculture, Veterinary), technical and research-level courses (M.Phil, Ph.D., post-doctoral), general degree courses, Intermediate, ITI, and vocational programmes. Tuition fee reimbursement is provided in full for most government-approved courses, while self-financed courses are eligible for a maximum of ₹20,000 or the actual fee, whichever is less.\n\nApplications are accepted online through the ePASS portal (telanganaepass.cgg.gov.in) during the annual registration window, typically from September to December. The scheme benefits approximately 13–14 lakh students per year across Telangana, with disbursement done through Direct Benefit Transfer (DBT) with Aadhaar linkage.",
  category: "scholarship",
  level: "state",
  states: ["telangana"],
  eligibility: [
    {
      label: "Community",
      value:
        "Must belong to SC, ST, BC, EBC, Minority, or Disabled Welfare category",
      type: "caste-category",
    },
    {
      label: "Income limit — SC",
      value: "Annual family income of ₹2,50,000 or below",
      type: "income",
    },
    {
      label: "Income limit — ST",
      value: "Annual family income of ₹2,00,000 or below",
      type: "income",
    },
    {
      label: "Income limit — BC / EBC / Minority (Rural)",
      value: "Annual family income of ₹1,50,000 or below",
      type: "income",
    },
    {
      label: "Income limit — BC / EBC / Minority (Urban)",
      value: "Annual family income of ₹2,00,000 or below",
      type: "income",
    },
    {
      label: "Income limit — Disabled",
      value: "Annual parental income of ₹1,00,000 or below",
      type: "income",
    },
    {
      label: "Course level",
      value:
        "Must be pursuing a post-matric course approved by a recognised University or Board with a duration of 1 year or above",
      type: "education",
    },
    {
      label: "Attendance",
      value:
        "Minimum 75% attendance at the end of each quarter; must be promoted to the next academic year (for renewal applicants)",
      type: "other",
    },
    {
      label: "Age — SC / ST / BC",
      value:
        "Intermediate: up to 24 years; Graduation: up to 29 years; PG & above: up to 34 years (as on 1st July of the academic year)",
      type: "age",
    },
    {
      label: "Age — EBC / Minority / Disabled",
      value:
        "Intermediate: up to 20 years; Graduation: up to 25 years; PG & above: up to 30 years (as on 1st July of the academic year)",
      type: "age",
    },
    {
      label: "Exclusions",
      value:
        "Students admitted under Management Quota, Sponsored seats, or Spot Admissions; those pursuing part-time, online, correspondence, or distance courses; students receiving any other scholarship or stipend; BC/EBC/DW students in open universities, distance mode, or Category B MBBS/BDS seats; EBC students in Intermediate; and students pursuing the same level of course again are NOT eligible",
      type: "other",
    },
  ],
  benefits: [
    "Full tuition fee reimbursement for government-approved courses (as fixed by the Telangana Government)",
    "Self-financed courses eligible for up to ₹20,000 or actual fee, whichever is less",
    "Maintenance allowance as per Government norms",
    "Covers Intermediate, ITI, Diploma, Degree, PG, and Professional courses",
    "Direct Benefit Transfer (DBT) with Aadhaar linkage for transparent disbursement",
    "Available for approximately 13–14 lakh students per year across Telangana",
  ],
  requiredDocuments: [
    {
      name: "Aadhaar card",
      mandatory: true,
      note: "Biometric authentication required at MeeSeva",
    },
    {
      name: "Caste certificate",
      mandatory: true,
      note: "Issued through MeeSeva; must be uploaded on the ePASS portal",
    },
    {
      name: "Income certificate",
      mandatory: true,
      note: "Issued through MeeSeva; annual family income must be within the prescribed limit",
    },
    {
      name: "Marks memo / Academic certificates",
      mandatory: true,
    },
    {
      name: "Bonafide certificate from the college",
      mandatory: true,
    },
    {
      name: "Ration card",
      mandatory: true,
    },
    {
      name: "Bank passbook copy",
      mandatory: true,
      note: "Aadhaar-seeded personal savings account",
    },
    {
      name: "College admission / CET allotment order",
      mandatory: true,
      note: "Required for professional course students",
    },
    {
      name: "Photograph",
      mandatory: true,
    },
  ],
  officialPortalUrl: "https://telanganaepass.cgg.gov.in/",
  ministry:
    "Social Welfare Department / SC, ST, BC, Minority Welfare Departments, Government of Telangana",
  applicationMode: ["online"],
  tags: [
    "Telangana",
    "ePASS",
    "post-matric",
    "scholarship",
    "SC",
    "ST",
    "BC",
    "EBC",
    "minority",
    "disabled",
    "fee reimbursement",
    "tuition fee",
    "state",
    "DBT",
    "higher education",
    "Intermediate",
    "degree",
    "PG",
    "engineering",
    "medicine",
  ],
  faqs: [
    {
      q: "What is the Telangana ePASS Post-Matric Scholarship?",
      a: "It is a state scholarship scheme of the Government of Telangana that provides full tuition fee reimbursement and maintenance allowance to SC, ST, BC, EBC, Minority, and Disabled students pursuing post-matric courses (Intermediate and above) in Telangana.",
    },
    {
      q: "Who is eligible to apply?",
      a: "Students belonging to SC, ST, BC, EBC, Minority, or Disabled Welfare categories in Telangana, with family income within the prescribed limits (₹2.5 lakh for SC, ₹2 lakh for ST, ₹1.5–2 lakh for BC/EBC/Minority based on rural/urban, ₹1 lakh for Disabled), pursuing approved post-matric courses with minimum 75% attendance.",
    },
    {
      q: "What are the income limits for different categories?",
      a: "SC: ₹2,50,000/annum; ST: ₹2,00,000/annum; BC/EBC/Minority (Rural): ₹1,50,000/annum; BC/EBC/Minority (Urban): ₹2,00,000/annum; Disabled: ₹1,00,000/annum.",
    },
    {
      q: "How much tuition fee is reimbursed?",
      a: "Full tuition fee reimbursement is provided for government-approved courses as fixed by the Telangana Government. For self-financed courses, a maximum of ₹20,000 or the actual fee charged, whichever is less, is reimbursed.",
    },
    {
      q: "How do I apply?",
      a: "Visit https://telanganaepass.cgg.gov.in, click on 'Post Matric Scholarship Services', select Fresh Registration, fill the application form, upload required documents (including Aadhaar, caste certificate, income certificate, marks memo, bonafide, bank passbook), and submit. Save the acknowledgement number for tracking.",
    },
    {
      q: "What courses are covered under the scheme?",
      a: "Group I: Professional courses (Engineering, Medicine, MBA, MCA, Pharmacy, Agriculture, Veterinary). Group II: Technical and research-level courses (M.Phil, Ph.D., post-doctoral). Group III: General degree courses. Group IV: Intermediate, ITI/ITCs, and vocational courses. Courses must have a duration of 1 year or above.",
    },
    {
      q: "Can I apply if I am admitted under Management Quota?",
      a: "No. Students admitted under Management Quota, Sponsored seats, or Spot Admissions are NOT eligible for the ePASS Post-Matric Scholarship.",
    },
    {
      q: "Is the scholarship renewable each year?",
      a: "Yes, renewal applications are accepted annually. Renewal students must maintain minimum 75% attendance at the end of each quarter and be promoted to the next academic year.",
    },
  ],
  source: "sample",
};
