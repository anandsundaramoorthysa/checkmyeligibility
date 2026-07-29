import type { Scheme } from "@/lib/types";

export const nationalOverseasScholarshipSchemeForScEtcCandidates: Scheme =   {
    id: "national-overseas-scholarship-sc",
    slug: "national-overseas-scholarship-scheme-for-sc-etc-candidates-mraucsb0",
    name: "National Overseas Scholarship Scheme for SC etc. Candidates",
    shortName: "NOS",
    summary:
      "Financial assistance for SC, DNT, Nomadic & Semi-Nomadic Tribes, Landless Agricultural Labourers, and Traditional Artisans to pursue Master's and Ph.D. degrees abroad.",
    description:
      "Central Sector Scheme of the Ministry of Social Justice & Empowerment providing financial assistance to eligible Scheduled Castes (SC), Denotified, Nomadic & Semi-Nomadic Tribes, Landless Agricultural Labourers, and Traditional Artisans to pursue Master's and Ph.D. degrees abroad in accredited foreign universities.",
    category: "education",
    level: "central",
    states: ["all-india"],
    eligibility: [
      {
        label: "Category",
        value: "Must belong to SC, DNT, Nomadic & Semi-Nomadic Tribes, Landless Agricultural Labourers, or Traditional Artisans",
        type: "caste-category",
      },
      {
        label: "Age",
        value: "Maximum age: 35 years",
        type: "age",
      },
      {
        label: "Academic performance",
        value: "At least 60% marks or equivalent in qualifying degree",
        type: "education",
      },
      {
        label: "Family income",
        value: "Annual family income not exceeding ₹8 lakh",
        type: "income",
      },
      {
        label: "University admission",
        value: "Admission offer from eligible foreign university (Top 500 QS preferred)",
        type: "education",
      },
      {
        label: "Exclusions",
        value: "Not already studying abroad using another government scholarship; Bachelor's courses are not covered",
        type: "other",
      },
    ],
    benefits: [
      "Up to USD 15,400/year maintenance allowance",
      "Actual tuition fees covered",
      "Visa fees, medical insurance, and airfare provided",
      "Other allowances as per scheme guidelines",
    ],
    requiredDocuments: [
      { name: "10th Certificate", mandatory: true },
      { name: "Caste Certificate", mandatory: true },
      { name: "Photograph", mandatory: true },
      { name: "Signature", mandatory: true },
      { name: "Address Proof", mandatory: true },
      { name: "Degree/Provisional Certificate", mandatory: true },
      { name: "All Semester Mark Sheets", mandatory: true },
      { name: "Admission/Application/Registration Proof from Foreign University", mandatory: true },
      { name: "Income Certificate & Income Documents", mandatory: true },
      { name: "ITR Acknowledgement (where applicable)", mandatory: false },
      { name: "Aadhaar Card", mandatory: true },
      { name: "NOC from Employer (if employed)", mandatory: false },
      { name: "Gap Certificate (if required)", mandatory: false },
    ],
    officialPortalUrl: "https://www.nosmsje.gov.in/",
    ministry: "Ministry of Social Justice & Empowerment",
    applicationMode: ["online"],
    tags: ["overseas", "scholarship", "sc", "dnt", "phd", "masters", "abroad", "social justice"],
    faqs: [
      {
        q: "Who is eligible for the National Overseas Scholarship?",
        a: "SC, DNT, Nomadic & Semi-Nomadic Tribes, Landless Agricultural Labourers, and Traditional Artisans with at least 60% marks in qualifying degree, below 35 years of age, and family income not exceeding ₹8 lakh.",
      },
      {
        q: "What expenses are covered?",
        a: "Up to USD 15,400/year maintenance allowance, actual tuition fees, visa fees, medical insurance, airfare, and other allowances.",
      },
      {
        q: "Are Bachelor's courses covered?",
        a: "No, only Master's and Ph.D. degree courses at accredited foreign universities are covered.",
      },
    ],
    source: "sample",
  };
