import type { Scheme } from "@/lib/types";

export const nayaSaveraFreeCoachingScheme: Scheme = {
  id: "naya-savera-free-coaching-scheme",
  slug: "naya-savera-free-coaching-minorities",
  name: "Naya Savera – Free Coaching Scheme for Minorities",
  shortName: "Naya Savera",
  summary:
    "Free coaching for students from 6 notified minority communities for competitive examinations including UPSC, SSC, Banking, NEET, JEE, CLAT, and State PSC, with stipend and study material support.",
  description:
    "Naya Savera (New Dawn) is a Ministry of Minority Affairs scheme providing free coaching to students from 6 notified minority communities for competitive examinations. The scheme covers coaching for UPSC Civil Services, SSC, Banking (IBPS/SBI PO), Railway (RRB), State PSC, entrance exams for professional courses (NEET, JEE, CLAT), and language proficiency tests. Coaching is provided through empanelled coaching institutes with course fees paid directly to institutes by the Ministry. Students receive a monthly stipend of ₹3,000 (day scholar) or ₹6,000 (residential) plus free study material. Target beneficiaries: 1,00,000 students per year.",
  category: "education",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Minority Community",
      value:
        "Must belong to one of 6 notified minority communities: Muslim, Christian, Sikh, Buddhist, Zoroastrian (Parsi), or Jain",
      type: "other",
    },
    {
      label: "Annual family income",
      value:
        "Family income from all sources must not exceed ₹8,00,000 per annum — valid income certificate required",
      type: "income",
    },
    {
      label: "Educational qualification",
      value:
        "Minimum qualification: Graduation (for UPSC/Bank/SSC) or Class 12 (for JEE/NEET/CLAT/State PSC)",
      type: "education",
    },
    {
      label: "Age limit",
      value:
        "As per the examination being prepared for (e.g., UPSC maximum 32 years for General, 37 for SC/ST/Minority candidates)",
      type: "other",
    },
    {
      label: "Other coaching schemes",
      value:
        "Must not be availing any other coaching scheme from central or state government",
      type: "other",
    },
  ],
  benefits: [
    "Free coaching at empanelled institutes with course fee paid directly by the Ministry",
    "Monthly stipend of ₹3,000 for day scholars",
    "Monthly stipend of ₹6,000 for residential students",
    "Free study material provided by the coaching institute",
    "Covers UPSC Civil Services, SSC, Banking, Railway, State PSC exams",
    "Covers entrance exams for professional courses: NEET, JEE, CLAT, CAT",
    "Target: 1,00,000 beneficiaries per year",
  ],
  requiredDocuments: [
    { name: "Minority community certificate", mandatory: true },
    { name: "Annual family income certificate (≤ ₹8 lakh)", mandatory: true },
    { name: "Educational qualification certificates", mandatory: true },
    { name: "Aadhaar Card", mandatory: true },
    { name: "Bank account details (Aadhaar-linked)", mandatory: true },
  ],
  officialPortalUrl: "https://www.minorityaffairs.gov.in/naya-savera",
  ministry: "Ministry of Minority Affairs",
  applicationMode: ["online"],
  tags: [
    "coaching",
    "minority",
    "Muslim",
    "Christian",
    "Sikh",
    "Buddhist",
    "Jain",
    "Parsi",
    "UPSC",
    "SSC",
    "Banking",
    "NEET",
    "JEE",
    "CLAT",
    "State PSC",
    "competitive exams",
    "stipend",
    "education",
  ],
  faqs: [
    {
      q: "What exams are covered under Naya Savera coaching?",
      a: "Naya Savera covers coaching for: (1) Civil Services: UPSC (IAS/IPS/IFS) Prelims + Mains + Interview; (2) Central Govt exams: SSC CGL/CHSL, Banking (IBPS PO/Clerk, SBI PO), RRB NTPC/JE, CAPF; (3) Professional courses: NEET (medical), JEE Mains+Advanced (engineering), CLAT (law), CAT (MBA); (4) State PSC (PCS, state police, teacher recruitment); (5) Language proficiency tests for employment in embassies/MNCs.",
    },
    {
      q: "Which minority communities are eligible?",
      a: "Students from 6 notified minority communities are eligible: Muslim, Christian, Sikh, Buddhist, Zoroastrian (Parsi), and Jain.",
    },
    {
      q: "How much stipend do students receive?",
      a: "Day scholars receive ₹3,000 per month, while residential students receive ₹6,000 per month as stipend. The coaching course fee is paid directly to the empanelled institute.",
    },
    {
      q: "How to apply for Naya Savera coaching?",
      a: "Check the list of empanelled coaching centres on minorityaffairs.gov.in, contact the institute directly to apply, submit minority certificate + income certificate + educational certificates. Selection is through a written test and interview at the coaching institute.",
    },
    {
      q: "Can students already availing other government coaching apply?",
      a: "No. Students who are already availing any other coaching scheme from central or state government are not eligible for Naya Savera.",
    },
  ],
  source: "sample",
};