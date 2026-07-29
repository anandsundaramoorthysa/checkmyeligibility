import type { Scheme } from "@/lib/types";

export const dbtJuniorResearchFellowshipCategoryIiViaBiotechnologyEligibilityTestBet: Scheme = {
  id: "dbt-jrf-category-ii-bet",
  slug: "dbt-junior-research-fellowship-category-ii-via-biotechnology-eligibility-test-bet-mrdx4i07",
  name: "DBT Junior Research Fellowship — Category-II (via Biotechnology Eligibility Test, BET)",
  shortName: "DBT-JRF (BET)",
  summary:
    "Fellowship for PhD research in biotechnology via the BET exam — Rs. 37,000/month (JRF) rising to Rs. 42,000/month (SRF), plus HRA and contingency grant.",
  description:
    "DBT (via the Regional Centre for Biotechnology) conducts the national Biotechnology Eligibility Test (BET), run by NTA, to select candidates for the DBT-JRF programme. Category-I (top merit-listed candidates) get a guaranteed, portable PhD fellowship; Category-II candidates are merit-listed and eligible to be appointed in DBT-sponsored projects, subject to institutional selection, with fellowship equivalent to NET/GATE qualifications.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Education",
      value:
        "Bachelor's (B.E./B.Tech./MBBS) and Master's (M.Sc./M.Tech./M.V.Sc./M.Pharm.) in Biotechnology, Life Sciences, or allied disciplines (Biochemistry, Microbiology, Genetics, etc.)",
      type: "education",
    },
    {
      label: "Minimum marks",
      value: "60% marks (55% for SC/ST/EWS/Differently Abled per current notification)",
      type: "other",
    },
    {
      label: "Final-year candidates",
      value: "Final-year/result-awaited candidates are also eligible",
      type: "other",
    },
    {
      label: "Age limit",
      value: "~28 years (with relaxations as per government norms)",
      type: "age",
    },
  ],
  benefits: [
    "Rs. 37,000/month for the first two years (JRF)",
    "Enhanced to Rs. 42,000/month for the next three years (SRF)",
    "House Rent Allowance (HRA) as per norms",
    "Contingency grant of Rs. 30,000/year",
    "Fellowship equivalent to NET/GATE qualifications",
  ],
  requiredDocuments: [
    { name: "Degree certificates and mark sheets (BSc, MSc or equivalent)", mandatory: true },
    { name: "Category/caste certificate (SC/ST/OBC/PwD if claiming reservation)", mandatory: false },
    { name: "Valid ID proof (Aadhaar card)", mandatory: true },
    { name: "Passport-size photographs", mandatory: true },
    { name: "NET/GATE score card (if applicable)", mandatory: false },
    { name: "BET scorecard (issued by NTA after the GAT-B/BET examination)", mandatory: true },
    { name: "Proof of enrollment in MSc final year or proof of MSc completion", mandatory: true },
    { name: "Bank account details (for fellowship disbursement)", mandatory: true },
  ],
  officialPortalUrl: "https://rcb.res.in/BET",
  ministry: "Department of Biotechnology, Ministry of Science & Technology",
  applicationMode: ["online"],
  tags: [
    "biotechnology",
    "fellowship",
    "phd",
    "research",
    "bet",
    "jrf",
    "srf",
    "nta",
    "life-sciences",
    "dbt",
  ],
  faqs: [
    {
      q: "What is the difference between Category-I and Category-II?",
      a: "Category-I (top merit-listed candidates) get a guaranteed, portable PhD fellowship. Category-II candidates are merit-listed and eligible to be appointed in DBT-sponsored projects, subject to institutional selection.",
    },
    {
      q: "How do I apply for the BET exam?",
      a: "Apply online for BET through NTA at exams.nta.nic.in/gat-bet. The exam is a computer-based test conducted by the National Testing Agency.",
    },
    {
      q: "What is the fellowship amount?",
      a: "Rs. 37,000/month for the first two years (JRF), enhanced to Rs. 42,000/month for the next three years (SRF), plus HRA and a contingency grant of Rs. 30,000/year.",
    },
    {
      q: "Are final-year students eligible to apply?",
      a: "Yes, final-year/result-awaited candidates are also eligible to appear for the BET examination.",
    },
  ],
  source: "sample",
};
