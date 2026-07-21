import type { Scheme } from "@/lib/types";

export const nationalOverseasScholarship: Scheme = {
  id: "national-overseas-scholarship",
  slug: "national-overseas-scholarship-mr9hjqql",
  name: "National Overseas Scholarship",
  shortName: "NOS",
  summary:
    "Financial support for students from SC, DNT, Landless Agricultural Labourer, and Traditional Artisan communities to pursue Master's or PhD studies abroad, covering maintenance, tuition, travel, and medical insurance.",
  description:
    "The National Overseas Scholarship (NOS) is a scheme by the Ministry of Social Justice and Empowerment providing financial support to eligible students from disadvantaged communities to pursue Master's or PhD studies at recognised foreign universities. Benefits include an annual maintenance allowance of USD 15,400 (USA) or GBP 9,900 (UK), full tuition fee reimbursement, economy-class air travel, visa fees, and medical insurance.",
  category: "social-welfare",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Citizenship",
      value: "Must be an Indian citizen",
      type: "residence",
    },
    {
      label: "Category",
      value: "Must belong to SC, DNT, Landless Agricultural Labourer, or Traditional Artisan category",
      type: "caste-category",
    },
    {
      label: "Admission",
      value: "Must have secured admission to a recognised foreign university for a Master's or PhD programme",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "\u2264 \u20B98,00,000 per annum",
      type: "income",
    },
    {
      label: "Age limit",
      value: "Below 35 years as on 1 April of the selection year",
      type: "age",
    },
  ],
  benefits: [
    "Annual maintenance allowance: USD 15,400 (USA) / GBP 9,900 (UK)",
    "Annual contingency allowance: USD 1,500 (USA) / GBP 1,100 (UK)",
    "Full tuition fee reimbursement (actual amount)",
    "Economy-class return air travel (India \u2194 host country) \u2014 actual fare",
    "Visa fees \u2014 actual",
    "Medical insurance premium \u2014 actual",
    "Equipment allowance as applicable",
  ],
  requiredDocuments: [
    {
      name: "Downloaded and filled application form (from socialjustice.gov.in)",
      mandatory: true,
    },
    { name: "Aadhaar card", mandatory: true },
    { name: "Valid Indian passport (with visa copy if available)", mandatory: true },
    {
      name: "Unconditional admission letter from a foreign university",
      mandatory: true,
    },
    {
      name: "SC/DNT/Landless Agricultural Labourer/Traditional Artisan community certificate",
      mandatory: true,
    },
    {
      name: "Income certificate (annual family income \u2264 \u20B98 lakh)",
      mandatory: true,
    },
    {
      name: "Academic certificates and mark sheets (Class 10 through latest qualifying degree)",
      mandatory: true,
    },
    { name: "Bank account details (passbook with account number and IFSC)", mandatory: true },
    { name: "Passport-size photographs", mandatory: true },
    { name: "Study plan or research proposal (300\u2013500 words)", mandatory: true },
  ],
  officialPortalUrl: "https://nosmsje.gov.in/",
  ministry: "Ministry of Social Justice and Empowerment",
  applicationMode: ["online"],
  tags: [
    "overseas",
    "scholarship",
    "SC",
    "DNT",
    "PhD",
    "Masters",
    "foreign university",
    "NOS",
    "all-india",
    "central",
    "social welfare",
    "NSP",
  ],
  faqs: [
    {
      q: "Who is eligible for the National Overseas Scholarship?",
      a: "Indian citizens from SC, DNT, Landless Agricultural Labourer, or Traditional Artisan categories with annual family income \u2264 \u20B98 lakh, below 35 years of age, who have secured admission to a recognised foreign university for Master's or PhD.",
    },
    {
      q: "What expenses does the scholarship cover?",
      a: "Maintenance allowance, contingency allowance, full tuition fees, economy-class air travel, visa fees, medical insurance, and equipment allowance.",
    },
    {
      q: "How do I apply?",
      a: "Visit the National Scholarship Portal at scholarships.gov.in, register, select 'National Overseas Scholarship' under Ministry of Social Justice and Empowerment, fill in the form, upload documents, and submit before the annual deadline (typically January\u2013March).",
    },
    {
      q: "When is the deadline?",
      a: "Applications are typically open from January to March each year. Check the official portal for exact dates.",
    },
  ],
  source: "sample",
};
