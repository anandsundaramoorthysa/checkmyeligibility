import type { Scheme } from "@/lib/types";

export const mukhyamantriKanyaUtthanYojanaGraduationIncentive: Scheme = {
  id: "mukhyamantri-kanya-utthan-yojana-graduation-incentive",
  slug: "mukhyamantri-kanya-utthan-yojana-graduation-incentive",
  name: "Mukhyamantri Kanya Utthan Yojana \u2013 Graduation Incentive",
  shortName: "MKUY Graduation Incentive",
  summary:
    "A one-time incentive of \u20B950,000 for unmarried female graduates of Bihar to promote higher education retention, prevent early marriage, and foster financial independence.",
  description:
    "The Mukhyamantri Kanya Utthan Yojana (Graduation Milestone) is a women empowerment initiative launched by the Bihar state government to support female student retention in higher education. It addresses socioeconomic challenges like early marriage and female feticide by providing financial security directly to young female scholars. Successful applicants receive a substantial financial incentive meant to promote self-reliance, giving them the choice to seek advanced career placements or invest in post-graduate programs.",
  category: "women-child",
  level: "state",
  states: ["bihar"],
  eligibility: [
    {
      label: "Gender",
      value: "Must be a female student",
      type: "gender",
    },
    {
      label: "Marital status",
      value: "Must be unmarried at the time of application",
      type: "other",
    },
    {
      label: "Domicile",
      value: "Must be a permanent resident of Bihar",
      type: "residence",
    },
    {
      label: "Academic qualification",
      value:
        "Must have successfully completed graduation or equivalent from a state-recognised institution located within Bihar",
      type: "education",
    },
  ],
  benefits: [
    "One-time financial incentive of \u20B950,000 upon successful graduation",
    "No parental income or employment restrictions",
    "Multiple daughters from the same family are eligible",
    "Amount credited directly to the student\u2019s bank account via Direct Benefit Transfer (DBT)",
  ],
  requiredDocuments: [
    {
      name: "Final Graduation Marksheet (Part-3 / Final Year Consolidated)",
      mandatory: true,
    },
    { name: "University Registration Certificate", mandatory: true },
    {
      name: "Bihar Residential / Domicile Certificate",
      mandatory: true,
    },
    {
      name: "Aadhaar Card (linked to bank account for DBT)",
      mandatory: true,
    },
    {
      name: "Bank Account Passbook (single name, Bihar branch)",
      mandatory: true,
    },
    { name: "Unmarried Declaration", mandatory: true },
    { name: "Passport-size Photograph", mandatory: true },
    { name: "Scanned copy of signature", mandatory: true },
    { name: "Active Mobile Number & Email ID", mandatory: true },
  ],
  officialPortalUrl:
    "https://medhasoft.bihar.gov.in/MKUYSNATAK_2025/pms/Default.aspx",
  ministry: "Department of Education, Government of Bihar",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "girl",
    "women",
    "Bihar",
    "graduation",
    "UG",
    "incentive",
    "Mukhyamantri Kanya Utthan Yojana",
    "DBT",
    "women empowerment",
    "state",
    "bihar",
    "female",
  ],
  faqs: [
    {
      q: "Who is eligible for the Mukhyamantri Kanya Utthan Yojana?",
      a: "Unmarried female students who are permanent residents of Bihar and have completed their graduation degree from a state-recognised institution located within Bihar are eligible.",
    },
    {
      q: "What is the benefit amount?",
      a: "Eligible students receive a one-time incentive of \u20B950,000 credited directly to their bank account.",
    },
    {
      q: "Is there an income limit for this scheme?",
      a: "No, there is no parental income or employment restriction. Multiple daughters from the same family are eligible if they all complete their degree.",
    },
    {
      q: "How do I apply?",
      a: "Visit the Medhasoft portal (medhasoft.bihar.gov.in), select the student registration link, provide your University Registration Number, verify via mobile OTP, fill in the application with bank and residence details, upload required documents, and submit for verification.",
    },
    {
      q: "What documents do I need to apply?",
      a: "Final Graduation Marksheet, University Registration Certificate, Bihar Domicile Certificate, Aadhaar Card linked to your bank account, Bank Passbook (single name, Bihar branch), Unmarried Declaration, passport-size photograph, and scanned signature.",
    },
  ],
  source: "sample",
};
