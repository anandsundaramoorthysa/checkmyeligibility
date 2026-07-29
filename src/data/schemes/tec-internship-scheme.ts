import type { Scheme } from "@/lib/types";

export const tecInternshipScheme: Scheme = {
  id: "tec-internship-scheme",
  slug: "tec-internship-scheme-mrf327n8",
  name: "TEC Internship Scheme",
  shortName: "TEC Internship",
  summary:
    "A stipend-based internship of ₹15,000 per month offered by the Telecommunication Engineering Centre (TEC), providing practical exposure to telecommunications, ICT standards, testing, and policy for UG, PG, and PhD students.",
  description:
    "The TEC Internship Scheme is offered by the Telecommunication Engineering Centre (TEC), Department of Telecommunications, Ministry of Communications. The scheme provides students with an opportunity to gain practical exposure to telecommunications, ICT standards, testing, certification, policy, and related technical areas. Interns work on projects and assignments under the guidance of TEC officers and experts, helping them develop professional and research skills in the telecommunications sector.",
  category: "skill-development",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Enrollment",
      value:
        "Must be a student from a recognized university or institution in India or abroad",
      type: "education",
    },
    {
      label: "Education level",
      value:
        "Students pursuing relevant undergraduate (UG), postgraduate (PG), or research (PhD) programmes may apply as per the notification",
      type: "education",
    },
    {
      label: "Eligibility conditions",
      value:
        "Must satisfy the eligibility conditions specified in the TEC Internship Scheme guidelines issued with the internship notification",
      type: "other",
    },
  ],
  benefits: [
    "₹15,000 per month stipend for the internship period",
    "Internship duration is initially 6 months and may be extended up to 12 months",
    "Practical exposure to telecommunications, ICT standards, testing, certification, and policy",
    "Work on projects and assignments under the guidance of TEC officers and experts",
    "Develop professional and research skills in the telecommunications sector",
  ],
  requiredDocuments: [
    { name: "Duly filled application form", mandatory: true },
    { name: "Resume/CV", mandatory: true },
    { name: "Recent passport-size photograph", mandatory: true },
    { name: "Educational certificates/mark sheets", mandatory: true },
    { name: "Bonafide certificate from institution", mandatory: true },
    { name: "Identity proof", mandatory: true },
    { name: "Any other documents specified in the internship notification", mandatory: false },
  ],
  officialPortalUrl: "https://www.tec.gov.in/",
  ministry:
    "Telecommunication Engineering Centre (TEC) / Department of Telecommunications / Ministry of Communications",
  applicationMode: ["online"],
  tags: [
    "TEC",
    "internship",
    "telecommunications",
    "ICT",
    "standards",
    "testing",
    "certification",
    "policy",
    "stipend",
    "skill development",
    "central",
    "all-india",
  ],
  faqs: [
    {
      q: "What is the TEC Internship Scheme?",
      a: "The TEC Internship Scheme is offered by the Telecommunication Engineering Centre (TEC), Department of Telecommunications, Ministry of Communications. It provides students with practical exposure to telecommunications, ICT standards, testing, certification, policy, and related technical areas through project work under the guidance of TEC experts.",
    },
    {
      q: "What is the stipend amount?",
      a: "Interns receive ₹15,000 per month as a stipend for the duration of the internship.",
    },
    {
      q: "What is the duration of the internship?",
      a: "The internship is initially for 6 months and may be extended up to 12 months.",
    },
    {
      q: "Who can apply for this internship?",
      a: "Students from recognized universities or institutions in India or abroad who are pursuing relevant undergraduate (UG), postgraduate (PG), or research (PhD) programmes may apply as per the notification.",
    },
    {
      q: "How do I apply for the TEC Internship Scheme?",
      a: "Visit the TEC website (tec.gov.in) or the scheme page when applications are announced. Download and read the internship notification, complete the application form, attach the required documents, and submit before the deadline.",
    },
  ],
  source: "sample",
};
