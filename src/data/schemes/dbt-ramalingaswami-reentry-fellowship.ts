import type { Scheme } from "@/lib/types";

export const dbtRamalingaswamiReentryFellowship: Scheme = {
  id: "dbt-ramalingaswami-reentry-fellowship",
  slug: "dbt-ramalingaswami-reentry-fellowship-47",
  name: "DBT Ramalingaswami Re-entry Fellowship",
  shortName: "DBT RRF",
  summary:
    "Prestigious fellowship of ₹1,35,000 per month plus ₹13 lakh annual research grant for Indian scientists working overseas to return and pursue cutting-edge biotechnology and life sciences research at Indian institutions.",
  description:
    "The Ramalingaswami Re-entry Fellowship (DBT-RRF) is a flagship scheme of the Department of Biotechnology (DBT), Ministry of Science and Technology, Government of India, initiated in 2006-2007. The programme aims to reverse brain drain by attracting highly skilled Indian researchers working overseas in cutting-edge disciplines of life sciences, biotechnology, bio-engineering, healthcare, agriculture, veterinary biotechnology, and bio-energy back to India. Up to 75 fellowships are awarded every year. Fellows receive a consolidated monthly fellowship of ₹1,35,000, House Rent Allowance of ₹18,500 per month, and an annual research support grant of ₹13,00,000 for consumables, minor equipment, domestic travel, and project staff. The fellowship is for a period of three years, extendable by up to two additional years after performance appraisal. The programme is managed by the DBT-HRD Project Management Unit at the Regional Centre for Biotechnology (RCB), Faridabad.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Nationality",
      value: "Must be an Indian citizen — OCI/PIO card holders are not eligible",
      type: "other",
    },
    {
      label: "Age limit",
      value: "Upper age limit of 45 years as on the closing date of application",
      type: "age",
    },
    {
      label: "Qualification",
      value:
        "Ph.D./M.D. or equivalent in life sciences, agriculture, bioinformatics, and allied areas, or M.Tech in Biotechnology, allied areas, or medicine",
      type: "education",
    },
    {
      label: "Post-doctoral experience",
      value:
        "Minimum three years of post-doctoral research experience in overseas research laboratories",
      type: "education",
    },
    {
      label: "Research track record",
      value:
        "Proven and outstanding track record as evident from research publications and recognitions",
      type: "other",
    },
    {
      label: "Return status",
      value:
        "Those who have already returned to India must have returned within one year of the closing date (two years for women) and must not hold a permanent position in India",
      type: "other",
    },
  ],
  benefits: [
    "Consolidated monthly fellowship of ₹1,35,000",
    "House Rent Allowance (HRA) of ₹18,500 per month",
    "Annual research support grant of ₹13,00,000 for consumables, minor equipment, domestic travel, and project staff",
    "Institutional overhead of ₹50,000 per annum paid to the host institute",
    "Eligible for regular research grants through extramural and other schemes of Government of India S&T agencies (with a Co-PI as regular faculty)",
    "Fellowship duration of three years, extendable by up to two additional years",
    "Up to 75 fellowships awarded annually",
    "If a fellow joins a permanent position, the fellowship component stops but the research grant component continues for project completion",
  ],
  requiredDocuments: [
    {
      name: "Date of birth proof",
      mandatory: true,
    },
    {
      name: "Copy of passport",
      mandatory: false,
      note: "If applicable",
    },
    {
      name: "Doctoral degree certificate (Ph.D./M.D.)",
      mandatory: true,
    },
    {
      name: "Details of research contribution",
      mandatory: true,
    },
    {
      name: "Reprints of 5 best research publications",
      mandatory: true,
      note: "First page only",
    },
    {
      name: "Research proposal detailing proposed research work",
      mandatory: true,
    },
    {
      name: "Certificate by host institute",
      mandatory: true,
      note: "Mandatory — application will not be accepted without it",
    },
    {
      name: "Letters of recommendation",
      mandatory: true,
    },
    {
      name:
        "Undertaking from applicant / statement from current employer",
      mandatory: false,
      note:
        "Certifying that applicant is not on a permanent position in India (if applicable)",
    },
  ],
  officialPortalUrl: "https://fellowships.gov.in/",
  ministry:
    "Department of Biotechnology, Ministry of Science and Technology, Government of India",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "biotechnology",
    "life sciences",
    "research",
    "re-entry",
    "scientist",
    "post-doctoral",
    "PhD",
    "MD",
    "overseas",
    "brain drain",
    "central",
    "DBT",
    "agriculture",
    "healthcare",
    "bio-energy",
  ],
  faqs: [
    {
      q: "What is the DBT Ramalingaswami Re-entry Fellowship?",
      a: "It is a prestigious fellowship by the Department of Biotechnology (DBT), Government of India, designed to attract Indian scientists working overseas back to India to pursue cutting-edge research in biotechnology and life sciences at Indian institutions.",
    },
    {
      q: "Who is eligible to apply?",
      a: "Indian citizens with a Ph.D./M.D. or equivalent in life sciences, agriculture, or bioinformatics (or M.Tech in Biotechnology/allied areas) with at least 3 years of post-doctoral research experience in overseas laboratories. The upper age limit is 45 years.",
    },
    {
      q: "What is the fellowship amount?",
      a: "Fellows receive a consolidated monthly fellowship of ₹1,35,000, HRA of ₹18,500 per month, and an annual research support grant of ₹13,00,000 for consumables, equipment, travel, and project staff.",
    },
    {
      q: "How long does the fellowship last?",
      a: "The fellowship is for a period of three years. In exceptional cases, it may be extended by an additional two years after a fresh performance appraisal, making it a maximum of five years.",
    },
    {
      q: "How many fellowships are awarded each year?",
      a: "Up to 75 fellowships are awarded every year under this programme.",
    },
    {
      q: "Can I apply if I have already returned to India?",
      a: "Yes, if you returned to India within one year of the application closing date (two years for women) and have not secured a permanent position in India.",
    },
    {
      q: "What if I get a permanent position during the fellowship?",
      a: "The monthly fellowship component will be discontinued from the date of joining the permanent position, but you can continue to avail the research grant component to complete your project.",
    },
    {
      q: "How do I apply?",
      a: "Applications are submitted online through the common fellowship portal at fellowships.gov.in. You need to register, fill in the application form with personal, academic, and research details, upload the required documents including a research proposal and host institute certificate, and submit before the deadline.",
    },
  ],
  source: "sample",
};
