import type { Scheme } from "@/lib/types";

export const juniorResearchFellowshipInSciencesHumanitiesAndSocialSciences: Scheme = {
  id: "junior-research-fellowship-in-sciences-humanities-and-social-sciences",
  slug: "junior-research-fellowship-in-sciences-humanities-and-social-sciences",
  name: "Junior Research Fellowship in Sciences, Humanities and Social Sciences",
  shortName: "UGC JRF",
  summary:
    "JRF of ₹37,000/month (2 yrs) and SRF of ₹42,000/month (3 yrs) plus contingency grants for NET-qualified candidates pursuing full-time PhD.",
  description:
    "The JRF scheme provides financial assistance to NET/JRF-qualified candidates to undertake advanced studies and research leading to a Ph.D. degree. Qualifying the UGC-NET or UGC-CSIR joint test is a prerequisite; however, these tests qualify a candidate for the award but do not automatically bestow the fellowship. The fellowship is activated only upon successful registration for a regular, full-time Ph.D. program in a recognized university or institution within two years from the date of the award letter or result declaration.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Qualifying exam",
      value: "Must have qualified the National Eligibility Test (NET-JRF) or the UGC-CSIR Joint Test",
      type: "education",
    },
    {
      label: "Age limit",
      value: "Maximum 30 years at the time of JRF award (up to 5 years relaxation for SC/ST/OBC-NCL/PwD/Transgender/Women candidates)",
      type: "age",
    },
    {
      label: "PhD registration",
      value: "Must register for a regular, full-time Ph.D. program in a recognized university/institution within two years from the date of award letter or result declaration",
      type: "education",
    },
  ],
  benefits: [
    "Junior Research Fellowship: ₹37,000 per month for the first 2 years",
    "Senior Research Fellowship: ₹42,000 per month for the remaining 3 years",
    "Annual Contingency Grant (Humanities & Social Sciences): ₹10,000 (JRF) / ₹20,500 (SRF)",
    "Annual Contingency Grant (Science): ₹12,000 (JRF) / ₹25,000 (SRF)",
    "House Rent Allowance (HRA) as per Government of India norms",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    { name: "NET-JRF / UGC-CSIR Score Card", mandatory: true },
    { name: "UGC Award Letter", mandatory: true },
    { name: "Ph.D. Joining Report (signed by Supervisor/Head)", mandatory: true },
    { name: "HRA Form", mandatory: false },
    { name: "Last qualifying degree certificate (Master's)", mandatory: true },
    { name: "Bank details (Aadhaar-linked)", mandatory: true },
    { name: "Half-yearly progress reports", mandatory: true },
    { name: "Three-member assessment committee report (for SRF upgradation after 2 years)", mandatory: false },
  ],
  officialPortalUrl: "https://www.ugc.gov.in/Fellowship/stu_Fellowship1",
  ministry: "University Grants Commission (UGC), Ministry of Education",
  applicationMode: ["offline"],
  tags: [
    "JRF",
    "research fellowship",
    "PhD",
    "UGC",
    "NET",
    "CSIR",
    "sciences",
    "humanities",
    "social sciences",
    "central",
    "all-india",
    "doctoral research",
  ],
  faqs: [
    {
      q: "What is the Junior Research Fellowship?",
      a: "It is a UGC fellowship providing ₹37,000/month for 2 years (JRF) and ₹42,000/month for 3 years (SRF) plus contingency grants for NET-qualified candidates pursuing a regular, full-time PhD.",
    },
    {
      q: "What is the eligibility criteria?",
      a: "Candidates must have qualified the NET-JRF or UGC-CSIR joint test. The upper age limit is 30 years (relaxation up to 5 years for reserved categories). Must register for a full-time PhD within two years of the award.",
    },
    {
      q: "What is the fellowship amount?",
      a: "JRF provides ₹37,000/month for the first 2 years. SRF provides ₹42,000/month for the remaining 3 years, along with annual contingency grants and HRA as per government norms.",
    },
    {
      q: "How do I apply?",
      a: "Visit a recognized university/institution to obtain the prescribed application form. Fill in all mandatory fields, attach self-attested copies of required documents, and submit within the prescribed period. Obtain a receipt with a unique identification number.",
    },
    {
      q: "Is qualifying the NET enough to get the fellowship?",
      a: "No. Qualifying the NET-JRF makes a candidate eligible for the award, but the fellowship is activated only upon successful registration for a regular, full-time PhD program.",
    },
    {
      q: "Can I upgrade from JRF to SRF?",
      a: "Yes, after 2 years of JRF, a three-member assessment committee evaluates progress. Upon satisfactory assessment, the fellowship is upgraded to SRF at ₹42,000/month.",
    },
  ],
  source: "sample",
};
