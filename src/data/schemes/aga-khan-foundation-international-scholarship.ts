import type { Scheme } from "@/lib/types";

export const agaKhanFoundationInternationalScholarship: Scheme = {
  id: "aga-khan-foundation-international-scholarship",
  slug: "aga-khan-foundation-international-scholarship",
  name: "Aga Khan Foundation International Scholarship",
  shortName: "AKF Scholarship",
  summary:
    "50% grant and 50% interest-free loan covering tuition and living expenses for outstanding Indian students pursuing postgraduate studies abroad.",
  description:
    "The Aga Khan Foundation (AKF) International Scholarship provides financial support to outstanding students from developing countries for postgraduate studies abroad. It is highly competitive and awarded purely on the basis of financial need combined with academic excellence. The award comprises a 50% grant and a 50% soft loan component that is interest-free and repayable after completion of studies.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Nationality",
      value: "Must be an Indian citizen with demonstrated financial need and academic excellence",
      type: "other",
    },
    {
      label: "Age",
      value: "Must be a young professional, typically under 30 years of age at the time of application",
      type: "age",
    },
    {
      label: "Admission",
      value: "Must hold an unconditional admission offer from a recognized foreign university for a full-time postgraduate (Master's) programme",
      type: "education",
    },
    {
      label: "Field of study",
      value: "Preference given to candidates in development-related fields such as health, education, rural development, natural resources, civil society, architecture, and economics",
      type: "other",
    },
    {
      label: "Funding status",
      value: "Must not be eligible for full funding from the host country or institution",
      type: "other",
    },
  ],
  benefits: [
    "50% grant and 50% interest-free soft loan",
    "Covers tuition fees and living expenses",
    "Loan is repayable after completion of studies",
    "Amount varies by country and programme based on demonstrated financial need",
  ],
  requiredDocuments: [
    { name: "Completed AKF application form", mandatory: true },
    { name: "Unconditional admission offer letter from foreign university", mandatory: true },
    { name: "Detailed financial need statement", mandatory: true },
    { name: "Academic transcripts and certificates", mandatory: true },
    { name: "Statement of purpose", mandatory: true },
    { name: "Two letters of recommendation", mandatory: true },
    { name: "Passport / identity proof", mandatory: true },
    { name: "CV / Resume", mandatory: true },
  ],
  officialPortalUrl: "https://www.akdn.org/aga-khan-foundation/scholarships",
  ministry: "Aga Khan Foundation (International Development Organization)",
  applicationMode: ["online"],
  tags: [
    "aga khan foundation",
    "international scholarship",
    "postgraduate",
    "abroad",
    "grant",
    "interest-free loan",
    "development studies",
    "financial need",
    "merit",
    "minority",
    "all-india",
  ],
  faqs: [
    {
      q: "What is the Aga Khan Foundation International Scholarship?",
      a: "A competitive scholarship providing 50% grant and 50% interest-free loan to outstanding Indian students for full-time postgraduate studies abroad, covering tuition and living expenses.",
    },
    {
      q: "Who is eligible?",
      a: "Indian citizens under 30, with an unconditional admission offer from a recognized foreign university for a Master's programme, demonstrated financial need, and strong academic record.",
    },
    {
      q: "What is the award structure?",
      a: "The award is 50% grant and 50% interest-free soft loan, repayable after completion of studies. The total amount covers tuition fees and living expenses and varies by country and programme.",
    },
    {
      q: "What fields of study are preferred?",
      a: "Preference is given to development-related fields such as health, education, rural development, natural resources, civil society, architecture, and economics.",
    },
    {
      q: "How do I apply?",
      a: "Register on the AKF website, obtain an unconditional admission offer, complete the application form with a financial need statement, academic records, and two references. Applications are accepted in the annual cycle (January–March).",
    },
    {
      q: "Is the loan component interest-free?",
      a: "Yes, the 50% loan portion is interest-free and repayable after the scholar completes their studies.",
    },
  ],
  source: "sample",
};
