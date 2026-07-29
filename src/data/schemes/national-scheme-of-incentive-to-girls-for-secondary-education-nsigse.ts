import type { Scheme } from "@/lib/types";

export const nationalSchemeOfIncentiveToGirlsForSecondaryEducation: Scheme = {
  id: "national-scheme-of-incentive-to-girls-for-secondary-education-nsigse",
  slug: "national-scheme-of-incentive-to-girls-for-secondary-education-356",
  name: "National Scheme of Incentive to Girls for Secondary Education (NSIGSE)",
  shortName: "NSIGSE",
  summary:
    "\u20B93,000 fixed deposit for SC/ST girls and KGBV graduates who enrol in Class IX in government schools, withdrawable at age 18 after passing Class X.",
  description:
    "The National Scheme of Incentive to Girls for Secondary Education (NSIGSE) is a centrally sponsored scheme launched in May 2008 by the Ministry of Education, Government of India. The scheme aims to promote enrolment of girl children in the 14\u201318 age group at the secondary stage and reduce dropout rates, particularly among Scheduled Castes (SC) and Scheduled Tribes (ST). Under the scheme, a one-time incentive of \u20B93,000 is deposited as a fixed deposit in the name of every eligible girl when she joins Class IX. The amount, along with accrued interest, can be withdrawn only after the girl attains 18 years of age and passes the Class X examination. The scheme covers SC/ST girls who pass Class VIII and enrol in Class IX in State/UT Government, Government-aided, or local body schools, as well as all girls (irrespective of caste) who pass Class VIII from Kasturba Gandhi Balika Vidyalayas (KGBVs). Applications are processed through the National Scholarship Portal (NSP).",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Gender",
      value: "Must be a girl child",
      type: "gender",
    },
    {
      label: "Social category (general track)",
      value:
        "Must belong to Scheduled Caste (SC) or Scheduled Tribe (ST) community who passed Class VIII",
      type: "caste-category",
    },
    {
      label: "KGBV track",
      value:
        "Girl who passed Class VIII from a Kasturba Gandhi Balika Vidyalaya (KGBV) \u2014 irrespective of caste",
      type: "education",
    },
    {
      label: "Enrolment",
      value:
        "Must enrol in Class IX in a State/UT Government, Government-aided, or local body school",
      type: "education",
    },
    {
      label: "Age limit",
      value:
        "Must be below 16 years of age as on 31st March of the year of joining Class IX",
      type: "age",
    },
    {
      label: "Marital status",
      value: "Must be unmarried at the time of application",
      type: "other",
    },
    {
      label: "School type (exclusion)",
      value:
        "Must not be studying in a private unaided school or a Central Government school (KVS, NVS, CBSE-affiliated)",
      type: "education",
    },
  ],
  benefits: [
    "One-time incentive of \u20B93,000 deposited as a fixed deposit in the name of the eligible girl child",
    "Interest accrued on the fixed deposit until maturity",
    "Withdrawal of the full amount + interest upon attaining 18 years of age and passing Class X examination",
    "No income ceiling \u2014 the scheme is targeted at disadvantaged SC/ST and KGBV students regardless of family income",
    "Direct Benefit Transfer (DBT) through the National Scholarship Portal",
  ],
  requiredDocuments: [
    {
      name: "Class VIII pass certificate",
      mandatory: true,
    },
    {
      name: "Class IX enrolment proof / bonafide certificate",
      mandatory: true,
    },
    {
      name: "Age proof / birth certificate",
      mandatory: true,
    },
    {
      name: "Caste certificate (SC / ST)",
      mandatory: true,
      note: "Not required for KGBV graduates",
    },
    {
      name: "KGBV pass certificate",
      mandatory: false,
      note: "Required only for KGBV track applicants",
    },
    {
      name: "Unmarried declaration / self-certificate",
      mandatory: true,
    },
    {
      name: "Aadhaar card",
      mandatory: true,
    },
    {
      name: "Bank account details (in the girl's or guardian's name)",
      mandatory: true,
    },
    {
      name: "Passport-size photograph",
      mandatory: true,
    },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry:
    "Ministry of Education, Government of India (Department of School Education and Literacy)",
  applicationMode: ["online"],
  tags: [
    "NSIGSE",
    "incentive",
    "girl child",
    "secondary education",
    "SC",
    "ST",
    "KGBV",
    "Kasturba Gandhi",
    "Class IX",
    "fixed deposit",
    "\u20B93,000",
    "central scheme",
    "all-india",
    "DBT",
    "NSP",
    "women",
    "girls education",
    "dropout prevention",
  ],
  faqs: [
    {
      q: "What is the NSIGSE scheme?",
      a: "The National Scheme of Incentive to Girls for Secondary Education (NSIGSE) is a centrally sponsored scheme that provides a one-time incentive of \u20B93,000 as a fixed deposit to eligible SC/ST girls and KGBV graduates who enrol in Class IX in government schools.",
    },
    {
      q: "Who is eligible for NSIGSE?",
      a: "SC/ST girls who pass Class VIII and enrol in Class IX in State/UT Government, Government-aided, or local body schools, and all girls (irrespective of caste) who pass Class VIII from a Kasturba Gandhi Balika Vidyalaya (KGBV) and meet the same enrolment criteria.",
    },
    {
      q: "What is the age limit?",
      a: "The girl must be below 16 years of age as on 31st March of the year she joins Class IX.",
    },
    {
      q: "When can the amount be withdrawn?",
      a: "The \u20B93,000 along with accrued interest can be withdrawn after the girl attains 18 years of age and passes the Class X board examination.",
    },
    {
      q: "Can married girls apply?",
      a: "No. Married girls are excluded from the scheme.",
    },
    {
      q: "Are girls from private unaided or central government schools eligible?",
      a: "No. Students enrolled in private unaided schools, Kendriya Vidyalayas, Navodaya Vidyalayas, or any Central Government-run school are not eligible.",
    },
    {
      q: "How do I apply?",
      a: "Applications are submitted online through the National Scholarship Portal (scholarships.gov.in). The school head verifies the application at the school level, followed by district and state-level verification.",
    },
  ],
  source: "sample",
};
