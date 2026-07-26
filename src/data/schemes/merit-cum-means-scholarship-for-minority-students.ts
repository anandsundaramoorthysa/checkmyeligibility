import type { Scheme } from "@/lib/types";

export const meritCumMeansScholarshipForMinorityStudents: Scheme = {
  id: "merit-cum-means-scholarship-for-minority-students",
  slug: "merit-cum-means-scholarship-for-minority-students-mr9r8wxy",
  name: "Merit-cum-Means Scholarship for Minority Students",
  shortName: "MCM Scholarship (Minority)",
  summary:
    "Financial assistance of up to \u20B920,000 per year for meritorious students from minority communities pursuing professional and technical courses at the graduate and postgraduate level in India.",
  description:
    "The Merit-cum-Means Scholarship for Minority Students is a flagship Central Sector Scheme of the Ministry of Minority Affairs, Government of India. It provides financial assistance to poor and meritorious students belonging to notified minority communities (Muslims, Sikhs, Christians, Buddhists, Parsis, and Jains) to enable them to pursue professional and technical courses at the graduate and postgraduate level. The scholarship covers course fees of up to \u20B920,000 per annum (subject to actuals, whichever is less) and a maintenance allowance of \u20B91,000 per month for hostellers and \u20B9500 per month for day scholars (for 10 months in an academic year). For students enrolled in 85 listed premier institutes, full course fee reimbursement is provided. A total of 60,000 fresh scholarships are awarded each year. The scholarship is awarded for studies in India in government or private institutions selected by the concerned State Government/UT Administration. Applications are accepted online through the National Scholarship Portal (NSP).",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Community",
      value:
        "Must belong to a notified minority community — Muslim, Christian, Sikh, Buddhist, Jain, or Parsi",
      type: "caste-category",
    },
    {
      label: "Academic performance",
      value:
        "Must have secured more than 50% marks or equivalent grade in the previous final examination",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "Must not exceed \u20B92,50,000 per annum from all sources",
      type: "income",
    },
    {
      label: "Course",
      value:
        "Must be pursuing a professional or technical course at the graduate or postgraduate level at a recognised institution in India",
      type: "education",
    },
    {
      label: "Course duration",
      value: "Minimum one-year duration",
      type: "education",
    },
  ],
  benefits: [
    "Course fee of up to \u20B920,000 per annum (subject to actuals, whichever is less)",
    "Full course fee reimbursement for students in 85 listed premier institutes",
    "Maintenance allowance of \u20B91,000 per month for hostellers (10 months = \u20B910,000/year)",
    "Maintenance allowance of \u20B9500 per month for day scholars (10 months = \u20B95,000/year)",
    "60,000 fresh scholarships awarded each year",
    "Scholarship renewable for the entire duration of the course",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    { name: "Income Certificate issued by competent authority", mandatory: true },
    {
      name: "Self-certified Community Certificate",
      mandatory: true,
      note: "Self-declared if above 18 years; certified by parent/guardian if below 18",
    },
    { name: "Mark sheet of last qualifying examination", mandatory: true },
    { name: "Fee Receipt of current course year", mandatory: true },
    { name: "Bank Account with IFSC Code", mandatory: true },
    { name: "Verification form from institution", mandatory: true },
    { name: "Photograph", mandatory: true },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry: "Ministry of Minority Affairs, Government of India",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "minority",
    "merit",
    "means",
    "professional",
    "technical",
    "graduate",
    "postgraduate",
    "Muslim",
    "Christian",
    "Sikh",
    "Buddhist",
    "Jain",
    "Parsi",
    "central",
    "NSP",
    "MCM",
    "women",
  ],
  faqs: [
    {
      q: "What is the Merit-cum-Means Scholarship for Minority Students?",
      a: "A flagship Central Sector Scheme by the Ministry of Minority Affairs that provides financial assistance to poor and meritorious students from minority communities to pursue professional and technical courses at the graduate and postgraduate level.",
    },
    {
      q: "Which minority communities are eligible?",
      a: "Muslims, Sikhs, Christians, Buddhists, Zoroastrians (Parsis), and Jains as notified by the Government of India.",
    },
    {
      q: "How much financial assistance is provided?",
      a: "Course fee of up to \u20B920,000/year (subject to actuals) plus maintenance allowance of \u20B91,000/month for hostellers and \u20B9500/month for day scholars. Students in 85 listed premier institutes get full course fee reimbursement.",
    },
    {
      q: "What is the income limit?",
      a: "Annual family income must not exceed \u20B92,50,000 per annum from all sources.",
    },
    {
      q: "How do I apply for this scholarship?",
      a: "Register on the National Scholarship Portal (scholarships.gov.in), select 'Ministry of Minority Affairs', fill the Merit-cum-Means Scholarship application form, upload required documents, and submit before the deadline.",
    },
    {
      q: "Can I renew the scholarship?",
      a: "Yes. The scholarship can be renewed each year subject to securing a minimum of 50% marks in the previous examination.",
    },
    {
      q: "How many scholarships are awarded each year?",
      a: "60,000 fresh scholarships are awarded each year, distributed among States/UTs based on the minority population as per Census data.",
    },
  ],
  source: "sample",
};
