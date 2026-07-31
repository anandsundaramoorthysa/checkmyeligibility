import type { Scheme } from "@/lib/types";

export const indiaaiFellowshipMeityDigitalIndiaCorporation: Scheme = {
  id: "indiaai-fellowship-meity-digital-india-corporation",
  slug: "indiaai-fellowship-meity-digital-india-corporation",
  name: "IndiaAI Fellowship (MeitY \u2013 Digital India Corporation)",
  shortName: "IndiaAI Fellowship",
  summary:
    "A prestigious fellowship by MeitY for students pursuing AI/ML programmes at IndiaAI partner institutions, offering up to \u20B980,000/month for PhD scholars with research and travel grants.",
  description:
    "The IndiaAI Fellowship, launched in 2025 under the IndiaAI Mission by MeitY and the Digital India Corporation, is a prestigious fellowship for students pursuing AI and machine learning programmes at IndiaAI partner institutions. It provides one of the highest fellowship amounts for technical education in India and is designed to retain AI talent within India.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Citizenship",
      value: "All tracks require Indian citizenship",
      type: "residence",
    },
    {
      label: "PhD track \u2014 enrolment",
      value:
        "Full-time PhD student in an AI-related programme at an IndiaAI Mission partner institution",
      type: "education",
    },
    {
      label: "PhD track \u2014 academic merit",
      value:
        "CGPA \u2265 8.0 (from graduation entry) or \u2265 7.5 (from master's entry)",
      type: "education",
    },
    {
      label: "PhD track \u2014 exclusion",
      value:
        "Cannot hold another central government scholarship simultaneously",
      type: "other",
    },
    {
      label: "PG track",
      value:
        "Pursuing a PG programme in AI/ML at an IndiaAI Mission partner institution",
      type: "education",
    },
    {
      label: "UG track",
      value:
        "Final-year student with 80%+ marks who has completed at least 3 AI-related courses",
      type: "education",
    },
  ],
  benefits: [
    "PhD track: \u20B970,000/month (Year 1\u20132), \u20B975,000/month (Year 3), \u20B980,000/month (Year 4\u20135)",
    "\u20B92,00,000/year research grant for PhD scholars",
    "Up to \u20B91,00,000 international conference travel grant for PhD scholars",
    "PG track: Up to \u20B92,00,000 total in tranches",
    "UG track: Defined stipend for final-year students with 80%+ marks",
  ],
  requiredDocuments: [
    { name: "Aadhaar card", mandatory: true },
    {
      name: "Admission / enrolment certificate from IndiaAI partner institution",
      mandatory: true,
    },
    { name: "Academic transcripts (CGPA / percentage)", mandatory: true },
    {
      name: "Course completion certificates for AI-related courses (UG track)",
      mandatory: false,
    },
    { name: "Research proposal (PhD track)", mandatory: false },
    { name: "Bank account details", mandatory: true },
    { name: "Passport-size photograph", mandatory: true },
  ],
  officialPortalUrl: "https://indiaai.gov.in",
  ministry:
    "Ministry of Electronics and Information Technology (MeitY) / Digital India Corporation",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "IndiaAI",
    "AI",
    "ML",
    "machine learning",
    "artificial intelligence",
    "MeitY",
    "Digital India",
    "PhD",
    "PG",
    "UG",
    "research",
    "stipend",
    "grant",
    "technical education",
    "all-india",
    "central",
  ],
  source: "sample",
};
