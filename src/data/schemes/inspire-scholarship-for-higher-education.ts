import type { Scheme } from "@/lib/types";

export const inspireScholarshipForHigherEducation: Scheme = {
  id: "inspire-scholarship-for-higher-education",
  slug: "inspire-scholarship-for-higher-education-mr9gnqsi",
  name: "INSPIRE Scholarship for Higher Education",
  shortName: "INSPIRE SHE",
  summary:
    "A scholarship of \u20B980,000 per year for top 1% Class 12 students pursuing B.Sc., B.S., or Integrated M.Sc. in Natural and Basic Sciences at recognized institutions across India.",
  description:
    "The INSPIRE (Innovation in Science Pursuit for Inspired Research) Scholarship for Higher Education (SHE) is a flagship programme of the Department of Science and Technology (DST), Government of India. It encourages talented students to pursue Natural and Basic Sciences by providing a scholarship of \u20B980,000 per year during the undergraduate and postgraduate levels. The programme targets students who rank in the top 1% of their Class 12 board examinations and are enrolled in B.Sc., B.S., or Integrated M.Sc. programmes at recognised institutions. The scholarship aims to strengthen the pipeline of scientific talent in India by removing financial barriers for meritorious students.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Academic merit",
      value: "Must be in the top 1% of Class 12 Board Examination results",
      type: "education",
    },
    {
      label: "Course & Institution",
      value:
        "Must be enrolled in B.Sc., B.S., or Integrated M.Sc. programme at a recognised college or university",
      type: "education",
    },
    {
      label: "Subject stream",
      value: "Must be pursuing Natural and Basic Sciences",
      type: "education",
    },
  ],
  benefits: [
    "Scholarship of \u20B980,000 per year",
    "Covers the duration of the undergraduate or integrated postgraduate programme (up to 5 years)",
    "Mentorship and research exposure opportunities through the INSPIRE programme",
  ],
  requiredDocuments: [
    { name: "Aadhaar card", mandatory: true },
    { name: "Class 12 mark sheet", mandatory: true },
    { name: "Admission proof / bonafide certificate", mandatory: true },
    { name: "Bank passbook", mandatory: true },
    { name: "Photograph", mandatory: true },
  ],
  officialPortalUrl: "https://online-inspire.gov.in/",
  ministry:
    "Department of Science and Technology (DST) / Ministry of Science and Technology",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "INSPIRE",
    "SHE",
    "science",
    "natural sciences",
    "basic sciences",
    "B.Sc",
    "B.S",
    "Integrated M.Sc",
    "merit",
    "top 1%",
    "DST",
    "undergraduate",
    "postgraduate",
    "all-india",
    "central",
  ],
  faqs: [
    {
      q: "Who is eligible for the INSPIRE Scholarship?",
      a: "Students who are in the top 1% of their Class 12 board examination results and are enrolled in B.Sc., B.S., or Integrated M.Sc. programmes in Natural and Basic Sciences at a recognised institution.",
    },
    {
      q: "How much is the scholarship amount?",
      a: "Eligible students receive \u20B980,000 per year for the duration of their undergraduate or integrated postgraduate programme.",
    },
    {
      q: "What subjects are covered under Natural and Basic Sciences?",
      a: "The scheme covers B.Sc./B.S. programmes in subjects such as Physics, Chemistry, Mathematics, Biology, Statistics, Geology, and other Natural and Basic Science disciplines.",
    },
    {
      q: "How do I apply for the INSPIRE Scholarship?",
      a: "Register on the INSPIRE portal at online-inspire.gov.in, complete the online application, upload the required documents, and submit before the deadline.",
    },
    {
      q: "Is renewal required each year?",
      a: "Yes. Students must renew their scholarship each academic year by maintaining satisfactory academic performance and submitting updated documents.",
    },
  ],
  source: "sample",
};
