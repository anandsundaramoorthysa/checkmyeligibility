import type { Scheme } from "@/lib/types";

export const inlaksShivdasaniFoundationScholarship: Scheme =   {
    id: "inlaks-shivdasani-foundation-scholarship",
    slug: "inlaks-shivdasani-foundation-scholarship-mri6u45m",
    name: "Inlaks Shivdasani Foundation Scholarship",
    shortName: "Inlaks Scholarship",
    summary:
      "Prestigious merit-based scholarship funding Indian students to pursue Master's, M.Phil., or Doctoral programs abroad at top universities.",
    description:
      "The Inlaks Shivdasani Foundation Scholarship is a prestigious merit-based scholarship for Indian students pursuing Master's, M.Phil., or Doctoral programs abroad at top universities in the USA, UK, and Europe. It covers major educational expenses and is one of India's most competitive overseas scholarships.",
    category: "education",
    level: "central",
    states: ["all-india"],
    eligibility: [
      {
        label: "Citizenship",
        value: "Must be an Indian citizen holding a valid Indian passport",
        type: "other",
      },
      {
        label: "Residence",
        value: "Must be residing in India at the time of application",
        type: "residence",
      },
      {
        label: "Age",
        value: "Must be below 30 years of age (birth-date cut-off specified each year)",
        type: "age",
      },
      {
        label: "Education",
        value: "Must hold a degree from a recognized Indian university; final-year students awaiting results may also apply",
        type: "education",
      },
      {
        label: "Admission",
        value: "Must have secured admission or an offer for an eligible postgraduate program abroad",
        type: "other",
      },
    ],
    benefits: [
      "Funding of up to USD 100,000 (approximately ₹85–95 lakhs depending on exchange rates)",
      "In exceptional cases, support may go beyond this amount for specific programs",
      "Covers tuition fees, living expenses, and other educational costs abroad",
    ],
    requiredDocuments: [
      { name: "Passport-size photograph", mandatory: true },
      { name: "Valid Indian passport", mandatory: true },
      { name: "Academic transcripts and mark sheets", mandatory: true },
      { name: "Updated Resume/CV", mandatory: true },
      { name: "University admission/offer letter", mandatory: true },
      { name: "Course fee structure", mandatory: true },
      { name: "Letters of Recommendation (LORs)", mandatory: true },
      { name: "Statement of Purpose (SOP)", mandatory: true },
      { name: "IELTS/TOEFL/GRE/GMAT scores (if applicable)", mandatory: false },
      { name: "Portfolio or work samples (if required for the course)", mandatory: false },
      { name: "Proof of additional funding (if course cost exceeds scholarship amount)", mandatory: false },
    ],
    officialPortalUrl: "https://inlaksfoundation.org/opportunities/scholarship/",
    ministry: "Inlaks Shivdasani Foundation",
    applicationMode: ["online"],
    tags: ["scholarship", "overseas", "postgraduate", "masters", "phd", "merit", "foundation"],
    faqs: [
      {
        q: "Who is eligible for the Inlaks Shivdasani Foundation Scholarship?",
        a: "Indian citizens below 30 years of age with a degree from a recognized Indian university who have secured admission for a postgraduate program abroad.",
      },
      {
        q: "How much funding does the scholarship provide?",
        a: "Up to USD 100,000 (approximately ₹85–95 lakhs), with possible additional support in exceptional cases.",
      },
      {
        q: "Which countries and universities are covered?",
        a: "Top universities in the USA, UK, and Europe offering Master's, M.Phil., or Doctoral programs.",
      },
    ],
    source: "sample",
  };
