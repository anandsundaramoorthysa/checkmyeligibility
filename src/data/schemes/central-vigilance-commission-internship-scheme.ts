import type { Scheme } from "@/lib/types";

export const centralVigilanceCommissionInternshipScheme: Scheme = {
  id: "central-vigilance-commission-internship-scheme",
  slug: "central-vigilance-commission-cvc-internship-scheme",
  name: "Central Vigilance Commission (CVC) Internship Scheme",
  shortName: "CVC Internship",
  summary:
    "Short-term unpaid internship opportunity at CVC Headquarters, New Delhi for graduates, postgraduates, and research students to gain exposure to India's anti-corruption and vigilance framework.",
  description:
    "The Central Vigilance Commission (CVC) Internship Scheme is a short-term academic engagement programme offered by the Central Vigilance Commission, the apex integrity institution of the Government of India. The programme is designed to introduce students to the preventive vigilance mechanism and anti-corruption framework of the country. Interns work under the supervision of senior officers at CVC Headquarters in New Delhi, contributing to research, policy evaluation, and case study analysis. The internship is open to Indian nationals who are final-year undergraduate students, postgraduates, or research scholars (PhD) from recognised universities in India or abroad, preferably in fields such as Law, Public Administration, Political Science, Public Policy, or related disciplines. The programme runs for 6 to 8 weeks and is unpaid, but interns receive a Certificate of Completion and gain valuable exposure to top-level governance and vigilance systems. Applications are accepted on a rolling basis, and candidates must apply at least 30 days before their intended start date.",
  category: "skill-development",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Nationality",
      value: "Must be an Indian national",
      type: "other",
    },
    {
      label: "Academic qualification",
      value:
        "Must be a final-year UG student, postgraduate, or PhD research scholar from a recognised university in India or abroad",
      type: "education",
    },
    {
      label: "Preferred fields of study",
      value:
        "Law (LLB/LLM), Public Administration, Political Science, Public Policy, Governance, or related disciplines",
      type: "education",
    },
    {
      label: "Minimum academic performance",
      value: "Minimum 70% or 7 CGPA in qualifying examinations",
      type: "education",
    },
    {
      label: "Income tax status",
      value: "Individuals who are income tax payers are excluded from applying",
      type: "income",
    },
  ],
  benefits: [
    "Hands-on experience at CVC Headquarters, New Delhi",
    "Exposure to India's anti-corruption and preventive vigilance framework",
    "Work under supervision of senior vigilance officers",
    "Certificate of Completion from the Central Vigilance Commission",
    "Opportunity to contribute to research, policy evaluation, and case studies",
    "Networking with senior government officials and domain experts",
  ],
  requiredDocuments: [
    { name: "Duly filled Application Form", mandatory: true },
    { name: "Updated Resume / CV", mandatory: true },
    { name: "Statement of Purpose (max 500 words)", mandatory: true },
    { name: "NOC / Bonafide Certificate from educational institution", mandatory: true },
    { name: "Academic Transcripts (latest)", mandatory: true },
    { name: "Government-issued ID (Aadhaar / PAN)", mandatory: true },
    { name: "Passport-size Photograph", mandatory: true },
  ],
  officialPortalUrl: "https://cvc.gov.in/",
  ministry: "Central Vigilance Commission / Department of Personnel and Training, Ministry of Personnel, Public Grievances and Pensions",
  applicationMode: ["offline"],
  tags: [
    "internship",
    "CVC",
    "central",
    "anti-corruption",
    "vigilance",
    "governance",
    "policy",
    "law",
    "public administration",
    "New Delhi",
    "graduate",
    "postgraduate",
    "research",
    "skill development",
  ],
  faqs: [
    {
      q: "Is the CVC Internship paid?",
      a: "No, the internship is unpaid. However, interns receive a Certificate of Completion and gain valuable exposure to governance and vigilance systems at the highest level.",
    },
    {
      q: "Who can apply for the CVC Internship?",
      a: "Indian nationals who are final-year undergraduate students, postgraduates, or PhD research scholars from recognised universities, preferably in Law, Public Administration, Political Science, Public Policy, or related fields. Candidates must have scored at least 70% or 7 CGPA.",
    },
    {
      q: "What is the duration of the internship?",
      a: "The internship duration is 6 to 8 weeks, conducted at CVC Headquarters in New Delhi.",
    },
    {
      q: "Is accommodation provided?",
      a: "No, interns must make their own arrangements for stay and travel in Delhi.",
    },
    {
      q: "Can the internship be done remotely?",
      a: "No, the programme is strictly offline and requires daily presence at CVC Headquarters, New Delhi.",
    },
    {
      q: "How do I apply for the CVC Internship?",
      a: "Visit the official CVC website (cvc.gov.in), check the Careers/Internship section, download the application form, and email your application with all required documents to the designated email address at least 30 days before your intended start date.",
    },
  ],
  source: "sample",
};
