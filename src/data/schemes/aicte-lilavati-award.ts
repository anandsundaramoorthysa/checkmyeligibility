import type { Scheme } from "@/lib/types";

export const aicteLilavatiAward: Scheme = {
  id: "aicte-lilavati-award",
  slug: "aicte-lilavati-award",
  name: "AICTE Lilavati Award",
  shortName: "Lilavati Award",
  summary:
    "Annual AICTE grant of up to ₹1,00,000 per theme for student teams from AICTE-approved institutions implementing documented, impactful interventions in women's empowerment.",
  description:
    "The AICTE Lilavati Award recognises student teams from AICTE-approved institutions for implementing documented, impactful interventions in areas of women's empowerment — including sanitation, legal awareness, literacy, entrepreneurship, and self-defence. Teams submit an intervention implemented within the last two years, demonstrating measurable social impact on women, and are recognised with a cash award per theme.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Institution",
      value: "Team must be from an AICTE-approved institution",
      type: "education",
    },
    {
      label: "Intervention timeframe",
      value: "The intervention must have been implemented within the last 2 years",
      type: "other",
    },
    {
      label: "Impact",
      value: "Must demonstrate measurable social impact on women in one of the notified themes",
      type: "other",
    },
  ],
  benefits: [
    "Winner: ₹1,00,000 per theme",
    "First runner-up: ₹75,000 per theme",
    "Second runner-up: ₹50,000 per theme",
  ],
  requiredDocuments: [
    { name: "Intervention report", mandatory: true },
    { name: "Geotagged photographs", mandatory: true },
    { name: "Recognition letters", mandatory: false, note: "If available" },
    { name: "4–5 minute impact video", mandatory: true },
  ],
  officialPortalUrl: "https://lilavati.aicte-india.org",
  ministry: "All India Council for Technical Education (AICTE)",
  applicationMode: ["online"],
  tags: [
    "grant",
    "award",
    "AICTE",
    "women empowerment",
    "girls",
    "sanitation",
    "legal awareness",
    "literacy",
    "entrepreneurship",
    "self-defense",
    "undergraduate",
    "postgraduate",
    "phd",
  ],
  faqs: [
    {
      q: "Who can apply for the AICTE Lilavati Award?",
      a: "Teams of students from AICTE-approved institutions who have implemented a documented, impactful intervention for women's empowerment within the last 2 years.",
    },
    {
      q: "What themes are covered?",
      a: "Sanitation, legal awareness, literacy, entrepreneurship, and self-defence, among other women's-empowerment themes.",
    },
    {
      q: "How much is the award?",
      a: "₹1,00,000 for the winner, ₹75,000 for the first runner-up, and ₹50,000 for the second runner-up, per theme.",
    },
    {
      q: "How do I apply?",
      a: "Register on the Lilavati Award portal using your Institute PID, complete Forms I and II, and upload the intervention report, geotagged photographs, and a 4–5 minute impact video before the annual deadline.",
    },
  ],
  source: "sample",
};
