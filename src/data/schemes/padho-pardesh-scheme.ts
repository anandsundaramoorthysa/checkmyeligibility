import type { Scheme } from "@/lib/types";

export const padhoPardeshScheme: Scheme = {
  id: "padho-pardesh-scheme",
  slug: "padho-pardesh-scheme-interest-subsidy-minority-overseas-studies-mr9q6tuv",
  name: "Padho Pardesh Scheme",
  shortName: "Padho Pardesh",
  summary:
    "100% interest subsidy on education loans for overseas studies during the moratorium period for students from minority communities pursuing Masters, M.Phil., or Ph.D. abroad.",
  description:
    "The Padho Pardesh Scheme was launched by the Ministry of Minority Affairs in 2006 under the Prime Minister's New 15-Point Programme for the Welfare of Minorities. The scheme provides 100% interest subsidy on education loans taken from IBA-member banks for overseas studies at the postgraduate, M.Phil., or Ph.D. level. The interest subsidy covers the moratorium period, which is the course duration plus one year after completion (or six months after getting a job, whichever is earlier). After the moratorium period, the student repays the loan with interest as per standard loan terms. The scheme is available to students belonging to minority communities — Muslims, Christians, Sikhs, Buddhists, Jains, and Parsis — with an annual family income not exceeding \u20B96,00,000. Students must apply during the first year of the course through their lending bank. 35% of seats are reserved for girl students. The scheme was discontinued from 2022-23 but remains available for students who availed it before discontinuation.",
  category: "education-loan",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Community",
      value:
        "Must belong to a recognized minority community — Muslim, Christian, Sikh, Buddhist, Jain, or Parsi",
      type: "caste-category",
    },
    {
      label: "Annual family income",
      value: "Must not exceed \u20B96,00,000 per annum",
      type: "income",
    },
    {
      label: "Course level",
      value:
        "Must have secured admission in Masters, M.Phil., or Ph.D. level course at a recognized foreign university",
      type: "education",
    },
    {
      label: "Education loan",
      value:
        "Must have taken an education loan from a scheduled bank belonging to the Indian Banks' Association (IBA)",
      type: "other",
    },
    {
      label: "Application timing",
      value:
        "Must apply during the first year of the course; fresh applications in second or subsequent years are not accepted",
      type: "other",
    },
  ],
  benefits: [
    "100% interest subsidy on education loan during the moratorium period",
    "Moratorium period covers course duration plus one year after completion (or six months after getting a job, whichever is earlier)",
    "Reduces the financial burden of studying abroad for minority community students",
    "35% of seats reserved for girl students",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    { name: "Admission Letter from Foreign University", mandatory: true },
    { name: "Education Loan Agreement from IBA-member bank", mandatory: true },
    { name: "Income Certificate issued by competent authority", mandatory: true },
    { name: "Bank Passbook", mandatory: true },
    { name: "Minority Community Certificate (self-declared)", mandatory: true },
    { name: "Passport", mandatory: true },
    { name: "Academic Records / Mark Sheets", mandatory: true },
  ],
  officialPortalUrl: "https://minorityaffairs.gov.in/",
  ministry: "Ministry of Minority Affairs, Government of India",
  applicationMode: ["offline"],
  tags: [
    "education loan",
    "interest subsidy",
    "minority",
    "overseas",
    "study abroad",
    "postgraduate",
    "M.Phil",
    "PhD",
    "central",
    "Muslim",
    "Christian",
    "Sikh",
    "Buddhist",
    "Jain",
    "Parsi",
    "IBA",
    "women",
  ],
  faqs: [
    {
      q: "What is the Padho Pardesh Scheme?",
      a: "A scheme by the Ministry of Minority Affairs that provides 100% interest subsidy on education loans for overseas studies during the moratorium period for students from minority communities pursuing Masters, M.Phil., or Ph.D. abroad.",
    },
    {
      q: "Which minority communities are eligible?",
      a: "Muslims, Christians, Sikhs, Buddhists, Jains, and Parsis as recognized under the National Commission for Minorities Act, 1992.",
    },
    {
      q: "How much interest subsidy is provided?",
      a: "100% of the interest payable during the moratorium period (course duration + 1 year, or 6 months after employment, whichever is earlier).",
    },
    {
      q: "What is the income limit?",
      a: "Annual family income must not exceed \u20B96,00,000 per annum.",
    },
    {
      q: "How do I apply for the scheme?",
      a: "Apply through your lending bank (IBA-member bank) at the time of taking the education loan, ideally in the first year of the course abroad. The bank uploads your details on the Padho Pardesh portal.",
    },
    {
      q: "Is the scheme still active?",
      a: "The scheme was discontinued from 2022-23 by the Ministry of Minority Affairs. However, students who availed it before discontinuation continue to receive benefits. The NMDFC also provides educational loans at low interest rates for minority students.",
    },
  ],
  source: "sample",
};
