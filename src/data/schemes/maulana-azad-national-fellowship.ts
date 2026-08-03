import type { Scheme } from "@/lib/types";

export const maulanaAzadNationalFellowship: Scheme = {
  id: "maulana-azad-national-fellowship",
  slug: "maulana-azad-national-fellowship",
  name: "Maulana Azad National Fellowship (MANF)",
  shortName: "MANF",
  summary:
    "UGC doctoral fellowship for students from six notified minority communities pursuing M.Phil./Ph.D. research at recognized Indian universities, with a monthly stipend and contingency grant.",
  description:
    "The Maulana Azad National Fellowship (MANF) is a Government of India initiative administered by the University Grants Commission (UGC) on behalf of the Ministry of Minority Affairs. It provides five-year integrated fellowships to students belonging to the six notified minority communities — Muslim, Christian, Sikh, Buddhist, Jain, and Zoroastrian (Parsi) — to pursue full-time M.Phil. and Ph.D. programmes at universities and research institutions recognized by UGC. The scheme aims to promote higher education and research among educationally and socially backward minority communities and supports scholars across all disciplines: sciences, social sciences, humanities, engineering, and technology. Fellows receive a monthly Junior Research Fellowship (JRF) for the first two years and Senior Research Fellowship (SRF) from the third year onwards, along with an annual contingency grant to cover books, lab materials, field trips, and academic conferences. The fellowship is administered through the National Fellowship Portal at ugc.ac.in and the National Scholarship Portal.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Community",
      value:
        "Must belong to one of the six notified minority communities: Muslim, Christian, Sikh, Buddhist, Jain, or Zoroastrian (Parsi). Minority community certificate from the competent authority is required.",
      type: "caste-category",
    },
    {
      label: "Income",
      value: "Annual family income must not exceed ₹6 lakh from all sources",
      type: "income",
    },
    {
      label: "Course Level",
      value:
        "Enrolled in or seeking admission to a full-time M.Phil. or Ph.D. programme at a UGC-recognized university/research institution in India",
      type: "education",
    },
    {
      label: "Entrance Qualification",
      value:
        "Must have qualified in NET/JRF conducted by UGC/CSIR, or secured admission through a valid university entrance test for M.Phil./Ph.D.",
      type: "education",
    },
    {
      label: "Age Limit",
      value: "Maximum 30 years as on the last date of application (relaxable by 5 years for SC/ST/OBC/PwD candidates)",
      type: "age",
    },
    {
      label: "Citizenship",
      value: "Indian citizen",
      type: "other",
    },
    {
      label: "Non-duplication",
      value: "Must not be receiving any other fellowship or stipend from UGC or any other government source",
      type: "other",
    },
  ],
  benefits: [
    "JRF Stipend: ₹37,000 per month for the first two years",
    "SRF Stipend: ₹42,000 per month from the third year onwards",
    "Contingency Grant: ₹10,000 per annum for humanities and social sciences; ₹20,500 per annum for sciences",
    "Departmental Assistance: ₹3,000 per annum for universities/institutions",
    "Escort/Reader Assistance: ₹2,000 per month for blind and orthopedically handicapped scholars",
    "HRA: Applicable as per university/city rules",
    "Duration: Maximum 5 years (2 years as JRF + 3 years as SRF)",
  ],
  requiredDocuments: [
    { name: "Completed MANF application form", mandatory: true },
    { name: "Minority Community Certificate from competent authority", mandatory: true },
    { name: "Income Certificate (annual family income ≤ ₹6 lakh)", mandatory: true, note: "Issued by Revenue/Tahsildar" },
    { name: "NET/JRF scorecard or university entrance test result", mandatory: true },
    { name: "Admission letter / enrollment certificate from university", mandatory: true },
    { name: "Master's degree certificate and marksheets", mandatory: true },
    { name: "Date of birth proof (10th certificate or Aadhaar)", mandatory: true },
    { name: "Aadhaar Card (copy)", mandatory: true },
    { name: "Bank account passbook with IFSC code", mandatory: true },
    { name: "Passport-sized photographs", mandatory: true },
    { name: "Caste/community certificate in prescribed format", mandatory: true },
    { name: "Self-declaration of non-receipt of any other fellowship", mandatory: true },
    { name: "Research proposal / study plan", mandatory: false, note: "Usually required by the supervising institution" },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry: "Ministry of Minority Affairs, Government of India (Administered by UGC)",
  applicationMode: ["online"],
  tags: [
    "minority",
    "fellowship",
    "PhD",
    "MPhil",
    "research",
    "UGC",
    "Muslim",
    "Christian",
    "Sikh",
    "Buddhist",
    "Jain",
    "Zoroastrian",
    "doctoral",
    "Maulana Azad",
    "postgraduate",
    "income-based",
  ],
  faqs: [
    {
      q: "Which minority communities are eligible for MANF?",
      a: "Students from six notified minority communities are eligible: Muslim, Christian, Sikh, Buddhist, Jain, and Zoroastrian (Parsi).",
    },
    {
      q: "What is the income limit for MANF?",
      a: "The annual family income from all sources must not exceed ₹6 lakh.",
    },
    {
      q: "Can I apply if I am pursuing a part-time Ph.D.?",
      a: "No. MANF is only for full-time M.Phil./Ph.D. scholars at UGC-recognized institutions.",
    },
    {
      q: "What is the stipend amount under MANF?",
      a: "During the first two years (JRF phase) the stipend is ₹37,000 per month, rising to ₹42,000 per month from the third year (SRF phase) onwards.",
    },
    {
      q: "Is there an age limit for applying to MANF?",
      a: "Yes, the maximum age is 30 years on the last date of application. A relaxation of 5 years is given to SC/ST/OBC/PwD candidates.",
    },
    {
      q: "Can I hold MANF along with another scholarship?",
      a: "No. MANF cannot be held simultaneously with any other UGC fellowship, CSIR fellowship, or central government scholarship.",
    },
    {
      q: "How long is the MANF valid?",
      a: "The fellowship is for a maximum of 5 years: 2 years as JRF and up to 3 additional years as SRF, subject to satisfactory annual progress reports.",
    },
    {
      q: "Where do I apply for MANF?",
      a: "Applications are submitted online through the National Scholarship Portal (scholarships.gov.in) during the notified window, typically between July and September each year.",
    },
    {
      q: "What subjects or disciplines are covered?",
      a: "MANF is available across all disciplines — sciences, engineering, humanities, social sciences, commerce, law, and arts — at any UGC-recognized university.",
    },
    {
      q: "Is the fellowship renewable every year?",
      a: "Yes, annual renewal is required based on a satisfactory progress report submitted by the research supervisor and forwarded by the Head of the Department.",
    },
  ],
  source: "sample",
};
