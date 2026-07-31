import type { Scheme } from "@/lib/types";

export const aicteInaeTravelGrantSchemeForEngineeringStudentsFromAicteApprovedEngineeringCollegeInstitution: Scheme =
  {
    id: "aicte-inae-travel-grant-scheme-for-engineering-students-from-aicte-approved-engineering-college-institution",
    slug: "aicte-inae-travel-grant-scheme-for-engineering-students-from-aicte-approved-engineering-college-institution",
    name: "AICTE-INAE Travel Grant Scheme for Engineering Students from AICTE Approved Engineering College/Institution",
    shortName: "AICTE-INAE Travel Grant",
    summary:
      "Financial assistance of up to \u20B91,00,000 for engineering students from AICTE-approved institutions to present research papers at international scientific events abroad.",
    description:
      "The AICTE-INAE Travel Grant Scheme provides financial support to engineering students from AICTE-approved institutions to present research papers at international scientific events abroad. The objective is to enhance the quality of engineering education, foster a research culture, and provide students with international academic exposure. The grant supports both physical and online participation (as per current specific guidelines).",
    category: "fellowship",
    level: "central",
    states: ["all-india"],
    eligibility: [
      {
        label: "Institution",
        value:
          "Must be a student of an AICTE-approved Engineering Institution",
        type: "education",
      },
      {
        label: "Year of study",
        value:
          "Pre-final or final year B.E./B.Tech/Integrated M.Tech, or first or second year M.E./M.Tech students",
        type: "education",
      },
      {
        label: "Academic performance",
        value: "Minimum CGPA of 7.0 or 65% marks",
        type: "education",
      },
      {
        label: "Paper acceptance",
        value:
          "Must possess a formal letter of acceptance for a research paper in an international scientific event abroad",
        type: "other",
      },
      {
        label: "One-time grant",
        value:
          "A student can avail of the grant only once during their course of study",
        type: "other",
      },
      {
        label: "Co-authored paper",
        value:
          "If the paper is co-authored, a No Objection Certificate (NOC) from co-authors is mandatory",
        type: "other",
      },
    ],
    benefits: [
      "Maximum financial assistance of \u20B91,00,000 per student",
      "100% of the registration fee covered",
      "100% of the visa fee covered",
      "50% of actual airfare (discounted / concessional) covered",
      "Actual travel fare from institution to nearest airport (not exceeding AC II Class train fare) admissible",
    ],
    requiredDocuments: [
      { name: "Completed application form", mandatory: true },
      {
        name: "Acceptance letter for paper presentation",
        mandatory: true,
      },
      {
        name: "Academic transcripts / mark sheets",
        mandatory: true,
      },
      { name: "Proof of CGPA / percentage", mandatory: true },
      { name: "Abstract / full research paper", mandatory: true },
      {
        name: "Recommendation from Head of Institution / Department",
        mandatory: true,
      },
      {
        name: "Cost estimate for travel and registration",
        mandatory: true,
      },
      {
        name: "Passport and visa details (if applicable)",
        mandatory: false,
      },
      {
        name: "Any additional documents prescribed by AICTE / INAE",
        mandatory: false,
      },
    ],
    officialPortalUrl:
      "https://www.inae.in/aicte-inae-travel-grant-scheme/",
    ministry: "AICTE, Ministry of Education / INAE",
    applicationMode: ["online"],
    tags: [
      "AICTE",
      "INAE",
      "travel grant",
      "engineering",
      "research paper",
      "international conference",
      "B.E.",
      "B.Tech",
      "M.E.",
      "M.Tech",
      "fellowship",
      "central",
      "all-india",
    ],
    faqs: [
      {
        q: "Who can apply for the AICTE-INAE Travel Grant?",
        a: "Pre-final or final year B.E./B.Tech/Integrated M.Tech and first or second year M.E./M.Tech students from AICTE-approved institutions with a minimum CGPA of 7.0 or 65% marks, who have a paper accepted at an international scientific event abroad.",
      },
      {
        q: "What expenses does the grant cover?",
        a: "Up to \u20B91,00,000 per student covering 100% registration fee, 100% visa fee, 50% actual airfare, and travel from institution to the nearest airport.",
      },
      {
        q: "Can a student apply more than once?",
        a: "No, a student can avail of the grant only once during their course of study.",
      },
      {
        q: "What if the paper is co-authored?",
        a: "A No Objection Certificate (NOC) from all co-authors is mandatory.",
      },
      {
        q: "How do I apply?",
        a: "Obtain the prescribed application form, secure paper acceptance, complete the application with required documents, get institutional endorsement, and submit to INAE for evaluation by subject experts.",
      },
    ],
    source: "sample",
  };
