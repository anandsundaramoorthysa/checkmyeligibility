import type { Scheme } from "@/lib/types";

export const nationalFellowshipForScheduledCasteStudentsNfsc: Scheme =   {
    id: "nfsc",
    slug: "national-fellowship-for-scheduled-caste-students-nfsc-mrf3t0cg",
    name: "National Fellowship for Scheduled Caste Students (NFSC)",
    shortName: "NFSC",
    summary:
      "Monthly fellowship for SC students pursuing full-time M.Phil. or Ph.D. — JRF ₹37,000 for 2 years, then SRF ₹42,000, plus HRA and contingency.",
    description:
      "The National Fellowship for Scheduled Caste Students (NFSC) is a Central Sector Scheme implemented by the Ministry of Social Justice and Empowerment. It provides financial assistance to Scheduled Caste students pursuing full-time M.Phil. and Ph.D. research programmes in recognized universities, institutions, and colleges in India. The fellowship aims to increase opportunities for higher education and advanced research among Scheduled Caste students and support them in pursuing research careers.",
    category: "fellowship",
    level: "central",
    states: ["all-india"],
    eligibility: [
      {
        label: "Category",
        value: "Must belong to the Scheduled Caste (SC) category",
        type: "caste-category",
      },
      {
        label: "Education",
        value: "Must have passed a postgraduate examination",
        type: "education",
      },
      {
        label: "Enrollment",
        value:
          "Registered for full-time M.Phil. or Ph.D. research in a recognized institution/university",
        type: "education",
      },
      {
        label: "Selection",
        value:
          "Fellowship awarded based on the prescribed selection process by the Ministry",
        type: "other",
      },
    ],
    benefits: [
      "Junior Research Fellowship (JRF): ₹37,000 per month for the first 2 years",
      "Senior Research Fellowship (SRF): ₹42,000 per month for the remaining tenure",
      "House Rent Allowance (HRA) as per Government of India norms",
      "Contingency grant for research expenses",
      "Fellowship credited directly via DBT to the bank account",
    ],
    requiredDocuments: [
      { name: "Scheduled Caste Certificate", mandatory: true },
      { name: "Aadhaar Card", mandatory: true },
      {
        name: "Postgraduate degree certificates and mark sheets",
        mandatory: true,
      },
      {
        name: "Research admission/registration certificate for M.Phil./Ph.D.",
        mandatory: true,
      },
      { name: "Passport-size photograph", mandatory: true },
      { name: "Bank account details", mandatory: true },
      { name: "Identity proof", mandatory: false },
    ],
    officialPortalUrl:
      "https://www.indiascienceandtechnology.gov.in/nurturing-minds/scholarships/phd/national-fellowship-scheduled-caste-students-nfsc",
    ministry: "Ministry of Social Justice & Empowerment",
    applicationMode: ["online"],
    tags: [
      "fellowship",
      "sc",
      "scheduled caste",
      "phd",
      "mphil",
      "research",
      "education",
      "nsp",
      "ugc",
    ],
    faqs: [
      {
        q: "What is the fellowship amount?",
        a: "JRF: ₹37,000/month for the first 2 years; SRF: ₹42,000/month for the remaining tenure, plus HRA and contingency as per GoI norms.",
      },
      {
        q: "Who is eligible?",
        a: "Scheduled Caste students who have passed a postgraduate examination and are enrolled in full-time M.Phil. or Ph.D. at a recognized institution.",
      },
      {
        q: "Where do I apply?",
        a: "Through the National Scholarship Portal (NSP) at scholarships.gov.in during the open application window.",
      },
    ],
    source: "sample",
  };
