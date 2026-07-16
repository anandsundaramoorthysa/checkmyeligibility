import type { Scheme } from "@/lib/types";

export const aicteIdeaLab: Scheme = {
  id: "aicte-idea-lab",
  slug: "aicte-idea-lab-scheme-mrdyebl0",
  name: "AICTE IDEA Lab Scheme",
  shortName: "AICTE IDEA Lab",
  summary:
    "Grant of up to 50% (approx. \u20B955 lakh) per institution to establish state-of-the-art innovation labs in AICTE-approved technical institutions, fostering hands-on prototyping, creativity, and interdisciplinary problem-solving aligned with NEP 2020.",
  description:
    "The AICTE IDEA (Idea Development, Evaluation & Application) Lab scheme aims to establish state-of-the-art innovation labs in AICTE-approved technical institutions. It provides students with hands-on, 24\u00D77 access to advanced prototyping equipment and training, fostering a culture of innovation, creativity, and interdisciplinary problem-solving in alignment with NEP 2020.\n\nThe total project outlay is up to \u20B91.1 crore per institution. AICTE provides a grant of up to 50% (approx. \u20B955 lakh), covering \u20B980 lakh for non-recurring equipment and part of the \u20B930 lakh recurring expenses for two years. The remaining 50%+ must be contributed by the institution or its industry partner.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Institution type",
      value: "AICTE-approved engineering college or university department",
      type: "education",
    },
    {
      label: "Institution age",
      value: "Must have at least 10 years of existence",
      type: "other",
    },
    {
      label: "Accreditation",
      value: "Must have NBA-accredited courses",
      type: "education",
    },
    {
      label: "Lab space",
      value: "Must provide a dedicated, accessible lab space of at least 3,000\u20135,000 sq. ft.",
      type: "other",
    },
  ],
  benefits: [
    "Grant of up to 50% (approx. \u20B955 lakh) of the total project outlay",
    "Covers up to \u20B980 lakh for non-recurring equipment",
    "Covers part of the \u20B930 lakh recurring expenses for two years",
    "24\u00D77 access to advanced prototyping equipment for students",
    "Training in innovation, creativity, and interdisciplinary problem-solving",
    "Alignment with NEP 2020 goals for hands-on technical education",
  ],
  requiredDocuments: [
    { name: "Detailed Project Proposal", mandatory: true },
    { name: "Institutional and Head-of-Institution (HoI) profile", mandatory: true },
    { name: "Proof of dedicated built-up lab area", mandatory: true },
    {
      name: "Budget contribution commitment letter (from the institution/industry partner)",
      mandatory: true,
    },
  ],
  officialPortalUrl: "https://idealnet.aicte.gov.in",
  ministry: "All India Council for Technical Education (AICTE) / Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "AICTE",
    "IDEA Lab",
    "innovation",
    "prototyping",
    "grant",
    "institution",
    "NEP 2020",
    "technical education",
    "engineering",
    "lab",
    "equipment",
  ],
  faqs: [
    {
      q: "What is the AICTE IDEA Lab scheme?",
      a: "It is a scheme by AICTE to establish state-of-the-art innovation labs in approved technical institutions. AICTE provides up to 50% of the total project outlay (approx. \u20B955 lakh) to set up labs with advanced prototyping equipment for student use.",
    },
    {
      q: "Who can apply for this scheme?",
      a: "AICTE-approved engineering colleges and university departments with at least 10 years of existence, NBA-accredited courses, and the ability to provide a dedicated lab space of 3,000\u20135,000 sq. ft.",
    },
    {
      q: "How much funding does AICTE provide?",
      a: "AICTE provides a grant of up to 50% of the total project outlay, which is approximately \u20B955 lakh. The remaining 50%+ must be contributed by the institution or its industry partner.",
    },
    {
      q: "What documents are needed to apply?",
      a: "A detailed project proposal, institutional and HoI profile, proof of dedicated built-up lab area, and a budget contribution commitment letter from the institution or industry partner.",
    },
    {
      q: "How do I apply?",
      a: "Applications must be submitted online via the official AICTE IDEA Lab portal (idealnet.aicte.gov.in). The process includes expert panel screening, an online interaction round for shortlisted institutions, and final provisional selection followed by grant release.",
    },
  ],
  source: "sample",
};
