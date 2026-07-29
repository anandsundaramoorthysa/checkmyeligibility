import type { Scheme } from "@/lib/types";

export const csirPhdFellowship: Scheme =   {
    id: "csir-phd-fellowship",
    slug: "csir-phd-fellowship-mrf40f70",
    name: "CSIR (PhD) Fellowship",
    shortName: "CSIR Fellowship",
    summary:
      "Monthly fellowship for PhD research in Science & Technology — JRF ₹37,000 for 2 years, then SRF ₹42,000, plus HRA and contingency.",
    description:
      "The CSIR (PhD) Fellowship is a research fellowship that supports students pursuing doctoral research in Science and Technology disciplines. The fellowship provides financial assistance to eligible research scholars enrolled in Ph.D. programmes at recognized universities, institutions, and research laboratories in India. The scheme aims to promote advanced research, scientific innovation, and the development of skilled researchers in various fields of science and technology.",
    category: "education",
    level: "central",
    states: ["all-india"],
    eligibility: [
      {
        label: "Programme",
        value:
          "Must be pursuing or seeking admission to a Ph.D. programme in relevant disciplines",
        type: "education",
      },
      {
        label: "Qualification",
        value:
          "Must have qualified the CSIR-UGC NET examination under the JRF category",
        type: "other",
      },
      {
        label: "Institution",
        value:
          "Must be enrolled in a recognized university, institution, or research laboratory in India",
        type: "other",
      },
      {
        label: "Requirements",
        value:
          "Should meet all academic and research requirements specified under the fellowship guidelines",
        type: "other",
      },
    ],
    benefits: [
      "Junior Research Fellowship (JRF): ₹37,000 per month for the first 2 years",
      "Senior Research Fellowship (SRF): ₹42,000 per month for the remaining tenure",
      "House Rent Allowance (HRA) as per applicable norms",
      "Contingency grants for research expenses",
    ],
    requiredDocuments: [
      { name: "CSIR-UGC NET/JRF qualification certificate", mandatory: true },
      {
        name: "Postgraduate degree certificates and mark sheets",
        mandatory: true,
      },
      { name: "Ph.D. admission/registration proof", mandatory: true },
      { name: "Aadhaar Card", mandatory: true },
      { name: "Passport-size photograph", mandatory: true },
      { name: "Bank account details", mandatory: true },
      { name: "Identity proof", mandatory: false },
    ],
    officialPortalUrl: "https://www.ugc.gov.in",
    ministry: "Council of Scientific & Industrial Research (CSIR)",
    applicationMode: ["online"],
    tags: [
      "fellowship",
      "phd",
      "research",
      "csir",
      "ugc",
      "net",
      "jrf",
      "science",
      "technology",
    ],
    faqs: [
      {
        q: "What is the fellowship amount?",
        a: "JRF: ₹37,000/month for the first 2 years; SRF: ₹42,000/month for the remaining tenure, plus HRA and contingency grants.",
      },
      {
        q: "How do I qualify?",
        a: "You must qualify the CSIR-UGC NET examination under the JRF category and secure admission in a recognized Ph.D. programme.",
      },
      {
        q: "Where do I apply?",
        a: "Through the prescribed process after qualifying CSIR-UGC NET JRF and securing Ph.D. admission. Check ugc.gov.in for details.",
      },
    ],
    source: "sample",
  };
