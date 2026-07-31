import type { Scheme } from "@/lib/types";

export const topClassEducationSchemeForStStudents: Scheme = {
  id: "top-class-education-scheme-for-st-students",
  slug: "top-class-education-scheme-for-st-students",
  name: "Top Class Education Scheme for ST Students",
  shortName: "TCE ST",
  summary:
    "Full tuition fee coverage plus a living allowance, book grant, and computer grant for meritorious Scheduled Tribe students admitted to premier institutions such as IITs, IIMs, NITs, and AIIMS.",
  description:
    "The Top Class Education Scheme for ST Students supports meritorious Scheduled Tribe (ST) applicants pursuing undergraduate, postgraduate, and professional courses (Medical, Law, CA) at notified 'Top Class' institutions of national importance. It covers full tuition fees and non-refundable charges, and provides a monthly living expense allowance, an annual book grant, and a one-time grant for the purchase of a computer/laptop and accessories, easing the financial burden of studying at premier institutions.",
  category: "social-welfare",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Caste category",
      value: "Must belong to the Scheduled Tribe (ST) category with a valid ST certificate",
      type: "caste-category",
    },
    {
      label: "Institution",
      value:
        "Must have secured admission to a notified 'Top Class' institution (IITs, IIMs, NITs, AIIMS, or other institutions of national importance)",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "Total annual family income from all sources must not exceed ₹6,00,000",
      type: "income",
    },
    {
      label: "Course",
      value: "Full-time enrolment in an undergraduate, postgraduate, or professional degree programme",
      type: "education",
    },
  ],
  benefits: [
    "Full coverage of tuition fees and non-refundable charges",
    "Monthly living expense allowance",
    "Annual book grant",
    "One-time grant for purchase of computer/laptop and accessories",
  ],
  requiredDocuments: [
    { name: "Photograph", mandatory: true },
    { name: "Aadhaar card", mandatory: true },
    { name: "ST certificate", mandatory: true },
    { name: "Income certificate", mandatory: true },
    { name: "Previous academic mark sheets", mandatory: true },
    { name: "Admission / bonafide certificate", mandatory: true },
    { name: "Fee receipt", mandatory: true },
    { name: "Bank account details", mandatory: true },
    {
      name: "Additional verification certificates",
      mandatory: false,
      note: "As required by the institution or Ministry",
    },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry: "Ministry of Tribal Affairs, Government of India",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "ST",
    "scheduled tribe",
    "central",
    "top class",
    "IIT",
    "IIM",
    "NIT",
    "AIIMS",
    "tuition fee",
    "NSP",
    "DBT",
    "premier institutions",
    "undergraduate",
    "postgraduate",
    "professional",
  ],
  faqs: [
    {
      q: "Who is eligible for the Top Class Education Scheme for ST Students?",
      a: "ST students with a total annual family income not exceeding ₹6,00,000 who have secured admission to a notified premier institution (IITs, IIMs, NITs, AIIMS, etc.) for a full-time undergraduate, postgraduate, or professional course.",
    },
    {
      q: "What does the scholarship cover?",
      a: "It covers full tuition fees and non-refundable charges, plus a monthly living expense allowance, an annual book grant, and a one-time computer/laptop purchase grant.",
    },
    {
      q: "How do I apply?",
      a: "Register on the National Scholarship Portal (scholarships.gov.in), complete the application form, upload the required documents, and submit for institutional verification and Ministry approval. The amount is disbursed via Direct Benefit Transfer.",
    },
  ],
  source: "sample",
};
