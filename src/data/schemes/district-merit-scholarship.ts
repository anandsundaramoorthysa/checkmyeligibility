import type { Scheme } from "@/lib/types";

export const districtMeritScholarship: Scheme = {
  id: "district-merit-scholarship",
  slug: "district-merit-scholarship",
  name: "District Merit Scholarship",
  shortName: "District Merit",
  summary:
    "Annual scholarship of \u20B91,250 for Kerala students who secured A+ in all SSLC subjects and are pursuing Higher Secondary, VHSC, ITI, or Polytechnic courses.",
  description:
    "The District Merit Scholarship, offered by the Directorate of Collegiate Education, Government of Kerala, provides financial assistance to meritorious students who secured A+ in all subjects in the SSLC Examination and are pursuing Higher Secondary, VHSC, ITI, or Polytechnic courses.",
  category: "scholarship",
  level: "state",
  states: ["kerala"],
  eligibility: [
    {
      label: "Academic performance",
      value:
        "Must have secured A+ in all subjects in the SSLC Examination conducted by the Kerala Board of Public Examinations",
      type: "education",
    },
    {
      label: "Current course",
      value:
        "Must be pursuing Higher Secondary (Plus One/Plus Two), VHSC, ITI, or Polytechnic courses",
      type: "education",
    },
  ],
  benefits: [
    "Financial assistance of \u20B91,250 per annum",
    "Credited annually to the student\u2019s bank account via DBT",
  ],
  requiredDocuments: [
    { name: "SSLC Mark Sheet / Certificate", mandatory: true },
    {
      name: "Admission / Bonafide Certificate from the institution",
      mandatory: true,
    },
    { name: "Identity proof (if required)", mandatory: false },
    {
      name: "Bank account details (if required)",
      mandatory: false,
    },
    {
      name: "Any other documents prescribed by the Directorate of Collegiate Education",
      mandatory: false,
    },
  ],
  officialPortalUrl:
    "https://dcescholarship.kerala.gov.in/",
  ministry:
    "Directorate of Collegiate Education, Government of Kerala",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "Kerala",
    "SSLC",
    "merit",
    "A+",
    "Higher Secondary",
    "VHSC",
    "ITI",
    "Polytechnic",
    "Plus One",
    "Plus Two",
    "state",
    "kerala",
    "DCE",
  ],
  faqs: [
    {
      q: "Who is eligible for the District Merit Scholarship?",
      a: "Students who secured A+ in all subjects in the SSLC Examination conducted by the Kerala Board of Public Examinations and are pursuing Higher Secondary, VHSC, ITI, or Polytechnic courses.",
    },
    {
      q: "What is the scholarship amount?",
      a: "Eligible students receive \u20B91,250 per annum, credited directly to their bank account via DBT.",
    },
    {
      q: "How do I apply?",
      a: "Visit the Kerala Higher Education scholarship portal at dcescholarship.kerala.gov.in, register using your SSLC roll number and Aadhaar number, select 'District Merit Scholarship', enter your admission and bank details, upload required documents, and submit before the deadline.",
    },
    {
      q: "Which courses are covered?",
      a: "Higher Secondary (Plus One/Plus Two), VHSC, ITI, and Polytechnic courses are covered under this scholarship.",
    },
  ],
  source: "sample",
};
