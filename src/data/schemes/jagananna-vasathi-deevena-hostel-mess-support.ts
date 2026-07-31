import type { Scheme } from "@/lib/types";

export const jaganannaVasathiDeevenaHostelMessSupport: Scheme = {
  id: "jagananna-vasathi-deevena-hostel-mess-support",
  slug: "jagananna-vasathi-deevena-hostel-mess-support",
  name: "Jagananna Vasathi Deevena – Hostel & Mess Support",
  shortName: "Vasathi Deevena",
  summary:
    "Andhra Pradesh Direct Benefit Transfer of ₹10,000–₹20,000 a year for hostel and mess expenses of underprivileged ITI, Polytechnic/Diploma, and degree students.",
  description:
    "Jagananna Vasathi Deevena is an Andhra Pradesh state welfare initiative that transfers hostel and mess cost support directly to the Aadhaar-linked bank account of the mother of underprivileged higher-education students. ITI candidates receive ₹10,000 a year, Polytechnic/Diploma students receive ₹15,000, and undergraduates receive ₹20,000. The amount is disbursed in two installments per academic year through Direct Benefit Transfer (DBT).",
  category: "education",
  level: "state",
  states: ["andhra-pradesh"],
  eligibility: [
    {
      label: "Residence",
      value: "Permanent resident of Andhra Pradesh",
      type: "residence",
    },
    {
      label: "Category",
      value: "SC, ST, BC, EBC, Minority, or Kapu category",
      type: "caste-category",
    },
    {
      label: "Annual family income",
      value: "Below ₹2,50,000",
      type: "income",
    },
    {
      label: "Landholding",
      value: "Under 10 acres of wet land or 25 acres of dry land",
      type: "land-holding",
    },
    {
      label: "Household condition",
      value: "No government employees or pensioners in the household; no four-wheeled vehicle owned",
      type: "other",
    },
    {
      label: "Education level",
      value: "ITI, Polytechnic/Diploma, or Postgraduate (undergraduate degree per scheme description)",
      type: "education",
    },
    {
      label: "Attendance",
      value: "Enrolled in a regular programme with a minimum of 75% attendance",
      type: "education",
    },
  ],
  benefits: [
    "₹10,000 per year for ITI students",
    "₹15,000 per year for Polytechnic/Diploma students",
    "₹20,000 per year for undergraduate students",
    "Disbursed in two installments per academic year via Direct Benefit Transfer",
    "Credited to the mother's Aadhaar-linked bank account",
  ],
  requiredDocuments: [
    { name: "Student Aadhaar card", mandatory: true },
    { name: "Mother's Aadhaar card", mandatory: true },
    { name: "Rice Card or income certificate", mandatory: true },
    { name: "Admission receipt", mandatory: true },
    { name: "Allotment letter", mandatory: true },
    { name: "Previous mark sheets", mandatory: true },
    { name: "Hostel bonafide certificate", mandatory: true },
    { name: "Non-taxpayer declaration", mandatory: true },
    { name: "Mother's Aadhaar-seeded bank passbook", mandatory: true },
  ],
  officialPortalUrl: "https://jnanabhumi.ap.gov.in/",
  ministry: "Government of Andhra Pradesh",
  applicationMode: ["online"],
  tags: [
    "hostel",
    "mess",
    "andhra pradesh",
    "state scheme",
    "DBT",
    "SC",
    "ST",
    "BC",
    "EBC",
    "minority",
    "kapu",
    "ITI",
    "polytechnic",
    "diploma",
    "jnanabhumi",
  ],
  faqs: [
    {
      q: "Who is eligible for Jagananna Vasathi Deevena?",
      a: "SC, ST, BC, EBC, Minority, or Kapu students domiciled in Andhra Pradesh, with family income below ₹2,50,000, enrolled in a regular ITI, Polytechnic/Diploma, or degree programme with at least 75% attendance.",
    },
    {
      q: "How much support is provided?",
      a: "₹10,000/year for ITI students, ₹15,000/year for Polytechnic/Diploma students, and ₹20,000/year for undergraduate students, paid in two installments.",
    },
    {
      q: "Whose bank account receives the funds?",
      a: "Funds are credited to the mother's Aadhaar-linked bank account via Direct Benefit Transfer.",
    },
    {
      q: "How do I apply?",
      a: "Enrol digitally via the JnanaBhumi Portal. Your college submits your admission data, you confirm via SMS, complete biometric e-KYC at your college or Village/Ward Secretariat, and NPCI mapping enables DBT release.",
    },
  ],
  source: "sample",
};
