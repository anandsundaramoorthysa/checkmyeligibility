import type { Scheme } from "@/lib/types";

export const summerInternshipSchemeOfDgft: Scheme = {
  id: "summer-internship-scheme-of-dgft",
  slug: "summer-internship-scheme-of-dgft",
  name: "Summer Internship Scheme of DGFT",
  shortName: "DGFT Internship",
  summary:
    "₹10,000 per month internship for students with a graduation degree in Public Policy, Economics, Finance, Management, or Law from reputed institutions.",
  description:
    "The Summer Internship Scheme by the Directorate General of Foreign Trade is for the interaction of the officers of the Directorate with young scholars and researchers with brilliant academic backgrounds from reputed academic institutions pursuing studies/research in Public Policy, Economics, Law, Finance, and Management. The internship provides an excellent opportunity for interns in their career advancement and professional expertise. The objective is to familiarize interns with the overall process of formulation of foreign trade policy of the Government at the macro level and its implementation by DGFT at the micro level.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Nationality",
      value: "Must be an Indian national",
      type: "other",
    },
    {
      label: "Qualification",
      value: "Must possess a graduation degree in Public Policy, Economics, Finance, Management, or Law with at least 60% marks",
      type: "education",
    },
    {
      label: "Institution",
      value: "Graduation must be from National Schools of Law, Central Universities, AICTE recognized Financial/Economics Institutions, recognized National Management Institutes, Foreign Universities, or Institutions of excellence",
      type: "education",
    },
    {
      label: "Academic record",
      value: "Must have an excellent academic record",
      type: "education",
    },
  ],
  benefits: [
    "Stipend of ₹10,000 per month during the internship period",
    "Exposure to formulation of foreign trade policy at the macro level",
    "Understanding of policy implementation at the micro level",
    "Opportunity to work directly with DGFT officers",
    "Career advancement and professional expertise development",
  ],
  requiredDocuments: [
    { name: "Permission Letter from Supervisor/Head of Department (if joining during coursework)", mandatory: false },
    { name: "Report/Paper to be submitted to Head of the concerned Division (at completion)", mandatory: true },
    { name: "CV/Resume", mandatory: true },
    { name: "Scanned application in the prescribed proforma", mandatory: true },
  ],
  officialPortalUrl: "https://www.dgft.gov.in/CP/?opt=intership-scheme",
  ministry: "Directorate General of Foreign Trade (DGFT), Ministry of Commerce and Industry",
  applicationMode: ["online"],
  tags: [
    "DGFT",
    "internship",
    "summer internship",
    "foreign trade",
    "public policy",
    "economics",
    "finance",
    "management",
    "law",
    "central",
    "all-india",
    "government internship",
  ],
  faqs: [
    {
      q: "What is the DGFT Summer Internship Scheme?",
      a: "A summer internship offering ₹10,000 per month stipend for students with a degree in Public Policy, Economics, Finance, Management, or Law from reputed institutions to work with DGFT on foreign trade policy.",
    },
    {
      q: "Who is eligible?",
      a: "Indian nationals with a graduation degree in relevant disciplines with at least 60% marks from recognized institutions including National Schools of Law, Central Universities, AICTE institutes, management institutes, or foreign universities.",
    },
    {
      q: "What is the stipend amount?",
      a: "Selected interns receive ₹10,000 per month during the internship period.",
    },
    {
      q: "How do I apply?",
      a: "Interested students can email their scanned applications in the prescribed proforma along with their CVs to internship-dgft@gov.in.",
    },
    {
      q: "What documents are required?",
      a: "A scanned application in the prescribed proforma, CV, permission letter from supervisor (if applicable), and a report/paper at the completion of the internship.",
    },
  ],
  source: "sample",
};
