import type { Scheme } from "@/lib/types";

export const dDKosambiResearchFellowshipScheme: Scheme = {
  id: "d-d-kosambi-research-fellowship-scheme",
  slug: "d-d-kosambi-research-fellowship-scheme",
  name: "D. D. Kosambi Research Fellowship Scheme",
  shortName: "Kosambi Fellowship",
  summary:
    "Fellowship up to ₹15,000–₹30,000 per month for Goan scholars pursuing interdisciplinary research in Goan history, culture, arts, and social studies.",
  description:
    "The D. D. Kosambi Research Fellowship Scheme, designed by the Directorate of Art and Culture, Government of Goa, encourages Goan scholars to undertake interdisciplinary research in the fields of Goan history, culture, arts, social studies, polity, and economy. Up to three fellowships are awarded every year—one at the junior level, one at the senior level, and one at the post-doctoral level—for research in these specified areas.",
  category: "fellowship",
  level: "state",
  states: ["goa"],
  eligibility: [
    {
      label: "Junior category",
      value: "Post-graduation completed and up to 35 years of age",
      type: "education",
    },
    {
      label: "Senior category",
      value: "Post-graduation completed and above 35 years of age",
      type: "education",
    },
    {
      label: "Post-doctoral category",
      value: "PhD completed (no age bar)",
      type: "education",
    },
    {
      label: "Residency",
      value: "Must be a Goan resident with 15-year Goan residence certificate",
      type: "residence",
    },
    {
      label: "Lifetime limit",
      value: "The fellowship shall be awarded to any scholar only once in their lifetime under each category",
      type: "other",
    },
  ],
  benefits: [
    "Junior category: fellowship up to ₹15,000 per month for a maximum of 2 years",
    "Senior & post-doctoral categories: fellowship of ₹20,000 per month for a maximum of 2 years",
    "Full-time research option: fellowship up to ₹30,000 per month (period decided by selection committee)",
    "Opportunity to conduct interdisciplinary research on Goan history, culture, arts, polity, and economy",
  ],
  requiredDocuments: [
    { name: "Passport-size photograph", mandatory: true },
    { name: "Birth certificate", mandatory: true },
    { name: "Aadhaar Card", mandatory: true },
    { name: "PAN Card", mandatory: true },
    { name: "15-year Goan Residence Certificate", mandatory: true },
    { name: "Highest degree transcripts / PhD certificates", mandatory: true },
    { name: "Detailed Research Synopsis (Proposal)", mandatory: true },
    { name: "Project budget layout", mandatory: true },
    { name: "Bank passbook showing IFSC/MICR codes (Aadhaar-seeded account)", mandatory: true },
  ],
  officialPortalUrl: "https://artandculture.goa.gov.in/pages/schemes-programmesgrants/d-d-kosambi-research-fellowship",
  ministry: "Directorate of Art and Culture, Government of Goa",
  applicationMode: ["offline"],
  tags: [
    "Goa",
    "research fellowship",
    "Kosambi",
    "history",
    "culture",
    "arts",
    "social sciences",
    "interdisciplinary",
    "state scheme",
    "PhD",
    "post-doctoral",
  ],
  faqs: [
    {
      q: "What is the D. D. Kosambi Research Fellowship?",
      a: "A Goa government fellowship awarding up to ₹15,000–₹30,000 per month for Goan scholars conducting interdisciplinary research in Goan history, culture, arts, social studies, polity, and economy.",
    },
    {
      q: "Who is eligible?",
      a: "Goan residents with a 15-year residence certificate. Junior category: post-graduates up to 35 years. Senior: post-graduates above 35. Post-doctoral: PhD holders (no age bar).",
    },
    {
      q: "What is the fellowship amount?",
      a: "Junior: up to ₹15,000/month (max 2 years). Senior & post-doctoral: ₹20,000/month (max 2 years). Full-time research option: up to ₹30,000/month.",
    },
    {
      q: "How do I apply?",
      a: "Download the form from the Goa Art & Culture Portal or collect in person. Complete it with a research synopsis, attach self-attested documents, and submit physically to the Directorate of Art & Culture, Sanskruti Bhavan, Patto, Panaji, Goa.",
    },
    {
      q: "How many fellowships are awarded each year?",
      a: "Up to three fellowships are awarded every year—one junior, one senior, and one post-doctoral.",
    },
  ],
  source: "sample",
};
