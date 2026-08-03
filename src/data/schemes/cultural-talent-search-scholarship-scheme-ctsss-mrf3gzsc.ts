import type { Scheme } from "@/lib/types";

export const culturalTalentSearchScholarshipSchemeCtsss: Scheme =   {
    id: "cultural-talent-search-scholarship-scheme-ctsss",
    slug: "cultural-talent-search-scholarship-scheme-ctsss",
    name: "Cultural Talent Search Scholarship Scheme (CTSSS)",
    shortName: "CTSSS",
    summary:
      "₹3,600/year plus up to ₹9,000/year tuition reimbursement for talented children aged 10–14 in Music, Dance, Painting, and other arts.",
    description:
      "The Cultural Talent Search Scholarship Scheme (CTSSS), implemented by the Centre for Cultural Resources and Training (CCRT), Ministry of Culture, Government of India, provides scholarships to exceptionally talented children aged 10–14 years in Music, Dance, Drama, Painting, Sculpture, Crafts, and Literary Arts. The scheme supports specialized training under recognized teachers or traditional art practitioners.",
    category: "education",
    level: "central",
    states: ["all-india"],
    eligibility: [
      {
        label: "Age",
        value: "Must be 10–14 years of age",
        type: "age",
      },
      {
        label: "Talent",
        value:
          "Outstanding talent in Music, Dance, Drama, Painting, Sculpture, Crafts, or Literary Arts",
        type: "other",
      },
      {
        label: "Education / background",
        value:
          "Must be studying in a recognized school or belong to a family traditionally practicing performing arts",
        type: "education",
      },
      {
        label: "Selection",
        value:
          "Based on performance in the CCRT selection process conducted by the Central Selection Committee",
        type: "other",
      },
    ],
    benefits: [
      "Scholarship of ₹3,600 per year",
      "Reimbursement of actual tuition fee paid to the Guru/Teacher up to ₹9,000 per year",
      "Specialized training under recognized teachers and traditional art practitioners",
      "Supports Music, Dance, Drama, Painting, Sculpture, Crafts, and Literary Arts",
    ],
    requiredDocuments: [
      { name: "Prescribed Application Form", mandatory: true },
      {
        name: "Supporting documents as specified in the application notification",
        mandatory: true,
      },
      { name: "Required Annexures (where applicable)", mandatory: false },
      {
        name: "Progress Report and Payment Receipt (for renewal holders)",
        mandatory: false,
      },
    ],
    officialPortalUrl: "https://ccrtindia.gov.in",
    ministry: "Ministry of Culture (CCRT)",
    applicationMode: ["offline"],
    tags: [
      "scholarship",
      "cultural",
      "arts",
      "music",
      "dance",
      "painting",
      "ccrt",
      "talent",
      "children",
      "education",
    ],
    faqs: [
      {
        q: "Who is eligible for the CTSSS?",
        a: "Children aged 10–14 years with outstanding talent in Music, Dance, Drama, Painting, Sculpture, Crafts, or Literary Arts, studying in a recognized school.",
      },
      {
        q: "What are the scholarship benefits?",
        a: "₹3,600 per year plus reimbursement of actual tuition fee up to ₹9,000 per year.",
      },
      {
        q: "Where do I apply?",
        a: "Applications are invited annually through advertisements in Employment News, newspapers, and the CCRT website at ccrtindia.gov.in.",
      },
    ],
    source: "sample",
  };
