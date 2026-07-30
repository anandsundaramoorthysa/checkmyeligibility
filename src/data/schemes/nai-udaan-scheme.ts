import type { Scheme } from "@/lib/types";

export const naiUdaanScheme: Scheme = {
  id: "nai-udaan-scheme",
  slug: "nai-udaan-scheme",
  name: "Nai Udaan Scheme",
  shortName: "Nai Udaan",
  summary:
    "Financial assistance of up to ₹1,00,000 for minority community candidates who clear the preliminary examinations of UPSC, State PSCs, or SSC CGL.",
  description:
    "The Nai Udaan Scheme is a financial support initiative by the Ministry of Minority Affairs, Government of India, designed to empower candidates from the six notified minority communities — Muslims, Christians, Sikhs, Buddhists, Jains, and Parsis (Zoroastrians). The scheme provides financial assistance to candidates who have cleared the preliminary examinations of UPSC Civil Services, State Public Service Commissions (Gazetted and Non-Gazetted), and SSC CGL / CAPF Group-B examinations. The assistance enables candidates to prepare better for the main examinations without financial constraints. A total of 5,100 candidates are selected every year. The benefit is provided as a one-time payment through Direct Benefit Transfer (DBT) and can be availed only once per candidate.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Community",
      value: "Must belong to one of the six notified minority communities: Muslims, Christians, Sikhs, Buddhists, Jains, or Parsis (Zoroastrians)",
      type: "caste-category",
    },
    {
      label: "Examination cleared",
      value: "Must have passed the Preliminary examination of UPSC Civil Services, State PSC (Gazetted or Non-Gazetted), or SSC CGL / CAPF Group-B",
      type: "education",
    },
    {
      label: "Family income",
      value: "Annual family income must not exceed ₹8,00,000 from all sources",
      type: "income",
    },
  ],
  benefits: [
    "₹1,00,000 for candidates who cleared UPSC Civil Services Preliminary examination",
    "₹50,000 for candidates who cleared State PSC (Gazetted) Preliminary examination",
    "₹25,000 for candidates who cleared SSC CGL & CAPF Group-B Preliminary examination",
    "₹25,000 for candidates who cleared State PSC (Graduate Level Non-Gazetted) Preliminary examination",
    "One-time financial assistance credited via DBT",
  ],
  requiredDocuments: [
    { name: "Aadhaar card", mandatory: true },
    { name: "Minority community certificate", mandatory: true },
    { name: "Preliminary examination result/scorecard", mandatory: true },
    { name: "Income certificate", mandatory: true },
    { name: "Bank account details", mandatory: true },
    { name: "Photograph", mandatory: true },
  ],
  officialPortalUrl: "https://serviceonline.gov.in/dbt/directApply.do?serviceId=1422",
  ministry: "Ministry of Minority Affairs",
  applicationMode: ["online"],
  tags: [
    "Nai Udaan",
    "minority",
    "UPSC",
    "civil services",
    "state PSC",
    "SSC CGL",
    "prelims",
    "financial assistance",
    "central scheme",
    "ministry of minority affairs",
  ],
  faqs: [
    {
      q: "Who is eligible for the Nai Udaan Scheme?",
      a: "Candidates from the six notified minority communities (Muslims, Christians, Sikhs, Buddhists, Jains, Parsis) who have cleared the Preliminary examination of UPSC, State PSC, or SSC CGL/CAPF Group-B, and whose annual family income does not exceed ₹8,00,000.",
    },
    {
      q: "What is the financial assistance provided?",
      a: "₹1,00,000 for UPSC prelims, ₹50,000 for State PSC Gazetted prelims, and ₹25,000 for SSC CGL/CAPF Group-B or State PSC Non-Gazetted prelims.",
    },
    {
      q: "Can I avail the benefit more than once?",
      a: "No. The benefit under the Nai Udaan Scheme can be availed only once per candidate and only for one preliminary examination.",
    },
    {
      q: "How is the payment made?",
      a: "The financial assistance is credited directly to the candidate's bank account through Direct Benefit Transfer (DBT) in a single installment.",
    },
    {
      q: "How many candidates are selected each year?",
      a: "A total of 5,100 candidates are selected every year under the Nai Udaan Scheme.",
    },
  ],
  source: "sample",
};
