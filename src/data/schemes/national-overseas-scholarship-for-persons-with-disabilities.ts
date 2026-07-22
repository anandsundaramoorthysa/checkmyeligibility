import type { Scheme } from "@/lib/types";

export const nationalOverseasScholarshipForPersonsWithDisabilities: Scheme = {
  id: "national-overseas-scholarship-for-persons-with-disabilities",
  slug: "national-overseas-scholarship-for-persons-with-disabilities-mret7azy",
  name: "National Overseas Scholarship for Persons with Disabilities",
  shortName: "NOS-SWD",
  summary:
    "Comprehensive financial support for Indian students with disabilities (40%+) to pursue Masters or PhD at recognised foreign universities, covering maintenance allowance, tuition fees, travel, medical insurance, and assistive equipment.",
  description:
    "The National Overseas Scholarship for Students with Disabilities (NOS-SWD) is a scheme by the Department of Empowerment of Persons with Disabilities (DEPwD), Ministry of Social Justice and Empowerment. It provides comprehensive financial support to Indian students with disabilities for pursuing Masters or PhD studies at recognised foreign universities. Benefits include an annual maintenance allowance of USD 15,400 (USA) or \u00A39,900 (UK), full tuition fee reimbursement, economy-class air travel, visa fees, medical insurance, and an assistive equipment allowance.",
  category: "disability",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Citizenship",
      value: "Must be an Indian citizen",
      type: "residence",
    },
    {
      label: "Disability",
      value:
        "Certified disability of 40% or above under the RPwD Act, 2016 (visual, hearing, speech, locomotor, intellectual, or multiple disabilities)",
      type: "other",
    },
    {
      label: "Age limit",
      value: "Up to 35 years as of the first day of the application month",
      type: "age",
    },
    {
      label: "Annual family income",
      value: "\u2264 \u20B96,00,000 per annum",
      type: "income",
    },
    {
      label: "Admission",
      value:
        "Must hold an unconditional offer/admission letter from a recognised foreign university for a full-time Masters or PhD programme",
      type: "education",
    },
    {
      label: "Exclusion",
      value:
        "Cannot hold any other scholarship simultaneously or have previously studied abroad on another government scholarship",
      type: "other",
    },
  ],
  benefits: [
    "Annual maintenance allowance: USD 15,400 (USA) / \u00A39,900 (UK)",
    "Annual contingency allowance: USD 1,500 (USA) / \u00A31,100 (UK)",
    "Full tuition fee reimbursement (actual amount)",
    "Economy-class air travel (India \u2194 foreign university) \u2014 actual fare",
    "Visa fees \u2014 actual",
    "Medical insurance premium \u2014 actual",
    "Assistive equipment allowance \u2014 as applicable",
  ],
  requiredDocuments: [
    {
      name: "Application form (downloaded from disabilityaffairs.gov.in, in duplicate)",
      mandatory: true,
    },
    { name: "Birth certificate or Class 10 certificate (age proof)", mandatory: true },
    { name: "Disability certificate from competent authority", mandatory: true },
    { name: "Aadhaar card", mandatory: true },
    { name: "Voter ID", mandatory: false },
    { name: "PAN card", mandatory: false },
    { name: "Bank account linked with Aadhaar", mandatory: true },
    { name: "All educational certificates and mark sheets", mandatory: true },
    { name: "Income certificate and ITR copies", mandatory: true },
    { name: "Unconditional admission letter from foreign university", mandatory: true },
    { name: "Study plan (up to 500 words)", mandatory: true },
    { name: "Self-declaration (not availing any other scholarship)", mandatory: true },
  ],
  officialPortalUrl:
    "https://disabilityaffairs.gov.in/content/page/national-overseas-scholarship.php",
  ministry:
    "Department of Empowerment of Persons with Disabilities (DEPwD) / Ministry of Social Justice and Empowerment",
  applicationMode: ["offline"],
  tags: [
    "overseas",
    "scholarship",
    "disability",
    "PhD",
    "Masters",
    "foreign university",
    "NOS-SWD",
    "DEPwD",
    "all-india",
    "central",
    "RPwD Act",
    "assistive equipment",
  ],
  faqs: [
    {
      q: "Who is eligible for the National Overseas Scholarship for PwD?",
      a: "Indian citizens with a certified disability of 40% or above under the RPwD Act, 2016, up to 35 years of age, with annual family income \u2264 \u20B96 lakh, who hold an unconditional admission letter from a recognised foreign university for a full-time Masters or PhD programme.",
    },
    {
      q: "What expenses does the scholarship cover?",
      a: "It covers maintenance allowance, contingency allowance, full tuition fees, economy-class air travel, visa fees, medical insurance, and assistive equipment allowance.",
    },
    {
      q: "How do I apply?",
      a: "Download the application form from disabilityaffairs.gov.in, fill it in duplicate, attach all self-attested documents, and send by post/courier to the Under Secretary (Scholarships), DEPwD, New Delhi.",
    },
    {
      q: "Is there a deadline for application?",
      a: "No. Applications are accepted throughout the year with no fixed deadline.",
    },
    {
      q: "Can I hold another scholarship simultaneously?",
      a: "No. Applicants cannot hold any other scholarship simultaneously or have previously studied abroad on another government scholarship.",
    },
  ],
  source: "sample",
};
