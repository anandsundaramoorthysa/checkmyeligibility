import type { Scheme } from "@/lib/types";

export const nationalFellowshipForHigherEducationOfStStudents: Scheme = {
  id: "national-fellowship-for-higher-education-of-st-students",
  slug: "national-fellowship-for-higher-education-of-st-students-mrchr5y6",
  name: "National Fellowship for Higher Education of ST Students",
  shortName: "NFHEST",
  summary:
    "₹37,000–₹42,000 per month central fellowship for Scheduled Tribe students pursuing M.Phil and Ph.D. with annual contingency grants and HRA.",
  description:
    "The objective of the scheme is to encourage the Scheduled Tribe (ST) students, a section of society with the lowest literacy levels in the country, to acquire higher education by providing financial assistance in the form of fellowships to pursue M.Phil and Ph.D. Courses (full time) in Sciences, Humanities & Social Sciences & Technology in recognised Indian Universities/Colleges/Institutes. There are 750 slots for ST candidates every year for all the subjects.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Category",
      value: "Must belong to the Scheduled Tribe (ST) category as per the Indian Constitution",
      type: "caste-category",
    },
    {
      label: "Qualification",
      value: "Must have completed a Master's degree with at least 55% marks",
      type: "education",
    },
    {
      label: "Course",
      value: "Must be registered for a regular, full-time M.Phil. or Ph.D. program in a recognized university or institute",
      type: "education",
    },
    {
      label: "Age Limit",
      value: "Maximum 36 years as of July 1st of the award year",
      type: "age",
    },
  ],
  benefits: [
    "Junior Research Fellowship (JRF): ₹37,000 per month for the first 2 years",
    "Senior Research Fellowship (SRF): ₹42,000 per month for the remaining 3 years",
    "Annual contingency grant of ₹10,000–₹25,000 depending on subject",
    "House Rent Allowance (HRA) as per government norms",
    "750 slots allocated every year for all subjects",
  ],
  requiredDocuments: [
    {
      name: "ST / PVTG Certificate",
      mandatory: true,
      note: "Official caste certificate signed and stamped by a competent authority",
    },
    {
      name: "Income Certificate",
      mandatory: true,
      note: "Issued by the designated state/UT authority for the financial year preceding your application",
    },
    {
      name: "Bonafide Certificate",
      mandatory: true,
      note: "Current proof of enrollment issued directly by your university or institute",
    },
    {
      name: "Fee Receipt",
      mandatory: true,
      note: "Current academic year admission or tuition fee receipt",
    },
    {
      name: "Educational Marksheets",
      mandatory: true,
      note: "Consolidated PDF of qualifying exam certificates (Post-Graduation for Fellowship)",
    },
    {
      name: "Bank Passbook Copy",
      mandatory: true,
      note: "Scanned copy showing your name, account number, and IFSC code clearly",
    },
    {
      name: "Identity & Age Proof",
      mandatory: true,
      note: "Aadhaar Card and 10th Standard Passing Certificate/Marksheet",
    },
    {
      name: "Photograph",
      mandatory: true,
      note: "Recent passport-size profile photo in JPEG format (50 KB to 100 KB)",
    },
  ],
  officialPortalUrl: "https://fellowship.tribal.gov.in/",
  ministry: "Ministry of Tribal Affairs, Government of India",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "ST",
    "scheduled tribe",
    "PhD",
    "research",
    "M.Phil",
    "JRF",
    "SRF",
    "central",
    "tribal affairs",
    "stipend",
    "contingency",
    "higher education",
  ],
  faqs: [
    {
      q: "Who is eligible for this fellowship?",
      a: "Scheduled Tribe (ST) students who have completed a Master's degree with at least 55% marks and are registered for a regular full-time M.Phil or Ph.D. program at a recognized Indian university or institute. Maximum age is 36 years as of July 1st of the award year.",
    },
    {
      q: "What is the fellowship amount?",
      a: "Junior Research Fellowship (JRF): ₹37,000 per month for the first 2 years. Senior Research Fellowship (SRF): ₹42,000 per month for the remaining 3 years. Annual contingency grant of ₹10,000–₹25,000 and HRA as per norms are also provided.",
    },
    {
      q: "How many slots are available?",
      a: "There are 750 slots for ST candidates every year for all subjects including Sciences, Humanities, Social Sciences, and Technology.",
    },
    {
      q: "What is the application process?",
      a: "Visit the National Tribal Fellowship Portal (fellowship.tribal.gov.in), register with a valid mobile number and email ID, fill the application form, upload required documents (ST/PVTG Certificate, PG Marksheet, Ph.D. Registration proof), and submit before the deadline (typically October 31).",
    },
    {
      q: "What documents are required?",
      a: "ST/PVTG Certificate, Income Certificate, Bonafide Certificate, Fee Receipt, Educational Marksheets, Bank Passbook Copy, Identity & Age Proof (Aadhaar + 10th Marksheet), and a recent passport-size photograph.",
    },
  ],
  source: "sample",
};
