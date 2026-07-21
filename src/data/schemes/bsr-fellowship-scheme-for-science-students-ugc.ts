import type { Scheme } from "@/lib/types";

export const bsrFellowshipSchemeForScienceStudentsUgc: Scheme = {
  id: "bsr-fellowship-scheme-for-science-students-ugc",
  slug: "bsr-fellowship-scheme-for-science-students-ugc-mrdum68w",
  name: "BSR Fellowship Scheme for Science Students (UGC)",
  shortName: "UGC BSR Fellowship",
  summary:
    "JRF at \u20B924,800/month + SRF at \u20B927,900/month for meritorious candidates pursuing Ph.D. in Sciences at eligible universities, implemented by UGC under the Ministry of Education.",
  description:
    "The BSR (Basic Scientific Research) Fellowship Scheme for Science Students is implemented by the University Grants Commission (UGC), Ministry of Education, Government of India. It provides opportunities to meritorious candidates to undertake advanced studies and research leading to Ph.D. degrees in Sciences. The scheme covers all Departments of Sciences, Bio-Sciences, Agricultural Sciences, and Engineering Sciences at eligible universities. Fellows receive a Junior Research Fellowship (JRF) for the first two years and a Senior Research Fellowship (SRF) for the remaining period, along with contingency grants.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Programme",
      value:
        "Must be selected for registering to a Ph.D. programme at a recognised university through regular admission procedure",
      type: "education",
    },
    {
      label: "Institution type",
      value:
        "Must be enrolled at Universities with Potential for Excellence / Centres of Advance Studies / Departments of Special Assistance identified by UGC",
      type: "education",
    },
    {
      label: "Research field",
      value:
        "Sciences, Bio-Sciences, Agricultural Sciences, or Engineering Sciences",
      type: "education",
    },
    {
      label: "Other conditions",
      value:
        "Must not be availing any other scholarship/fellowship simultaneously; must not be employed during the research period",
      type: "other",
    },
  ],
  benefits: [
    "JRF: \u20B924,800 per month for 2 years (or \u20B921,700/month for others)",
    "SRF: \u20B927,900 per month for the remaining period (or \u20B924,800/month for others)",
    "Contingency Grant: \u20B912,000 per annum (JRF) / \u20B925,000 per annum (SRF)",
    "Opportunity for full-time research under an approved guide",
  ],
  requiredDocuments: [
    { name: "Aadhaar card", mandatory: true },
    { name: "Photograph", mandatory: true },
    { name: "Proof of address", mandatory: true },
    { name: "Contact number", mandatory: true },
    { name: "Bank account details", mandatory: true },
    { name: "Educational qualification certificates", mandatory: true },
    {
      name: "Other supporting documents as required by the university",
      mandatory: false,
    },
  ],
  officialPortalUrl: "https://bsr.ugc.ac.in/",
  ministry:
    "University Grants Commission (UGC) / Ministry of Education",
  applicationMode: ["offline"],
  tags: [
    "fellowship",
    "PhD",
    "research",
    "sciences",
    "UGC",
    "BSR",
    "JRF",
    "SRF",
    "all-india",
    "central",
    "academic",
    "Bio-Sciences",
    "Agricultural Sciences",
    "Engineering Sciences",
  ],
  faqs: [
    {
      q: "Who is eligible for the BSR Fellowship?",
      a: "Candidates selected for Ph.D. registration at eligible universities (Universities with Potential for Excellence, Centres of Advance Studies, or UGC-identified departments) in Sciences, Bio-Sciences, Agricultural Sciences, or Engineering Sciences.",
    },
    {
      q: "How much is the fellowship amount?",
      a: "JRF: \u20B924,800/month for 2 years. SRF: \u20B927,900/month for the remaining period. Contingency grants of \u20B912,000/year (JRF) and \u20B925,000/year (SRF) are also provided.",
    },
    {
      q: "Can I hold another fellowship simultaneously?",
      a: "No. If a fellow is availing any other fellowship/project at the time of selection, they must surrender one award.",
    },
    {
      q: "How do I apply?",
      a: "Apply to the identified university/institution. Selections are made by the university\u2019s Selection Committee through an interview process.",
    },
    {
      q: "What happens if my research progress is unsatisfactory?",
      a: "The fellowship may be cancelled if the progress is found unsatisfactory. The Commission\u2019s decision in this regard is final.",
    },
    {
      q: "Are there publication requirements?",
      a: "Yes. At least 4 research papers (2 National + 2 International) must be submitted, with 2 at the Departmental Review stage and 2 by the end of tenure, in the UGC-INFLIBNET repository.",
    },
  ],
  source: "sample",
};
