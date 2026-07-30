import type { Scheme } from "@/lib/types";

export const employabilityExcellenceWithCollegeEducationLearningExcel: Scheme =   {
    id: "excel-employability-excellence",
    slug: "employability-excellence-with-college-education-learning-excel",
    name: "Employability Excellence with College Education & Learning (EXCEL)",
    shortName: "EXCEL",
    summary:
      "Skill development initiative integrating employability-focused training with regular college education to make students industry-ready.",
    description:
      "The Employability Excellence with College Education & Learning (EXCEL) programme is a skill development initiative that integrates employability-focused training with regular college education. The scheme aims to enhance the employability of students by providing training in life skills, communication skills, and domain-specific competencies within college campuses. It helps students become industry-ready and improves their opportunities for employment after graduation.",
    category: "skill-development",
    level: "central",
    states: ["all-india"],
    eligibility: [
      {
        label: "Education",
        value: "Must be a 10+2 pass student, university student, alumnus, or eligible youth",
        type: "education",
      },
      {
        label: "Programme requirements",
        value: "Must meet the eligibility requirements prescribed under the programme",
        type: "other",
      },
      {
        label: "Registration",
        value: "Aadhaar-based registration may be required",
        type: "other",
      },
    ],
    benefits: [
      "Free employability and skill development training",
      "Training in life skills and communication skills",
      "Domain-specific skill development through participating colleges",
      "Industry-ready preparation before graduation",
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", mandatory: true },
      { name: "Educational qualification certificates/mark sheets", mandatory: true },
      { name: "Recent passport-size photograph", mandatory: true },
      { name: "Identity proof", mandatory: true },
      { name: "Any other documents required during registration", mandatory: false },
    ],
    officialPortalUrl: "https://jsdm.jharkhand.gov.in/jsdm/cms/en/#",
    ministry: "Ministry of Labour & Employment",
    applicationMode: ["online"],
    tags: ["employability", "skill development", "college", "training", "life skills", "communication"],
    faqs: [
      {
        q: "Who is eligible for the EXCEL programme?",
        a: "10+2 pass students, university students, alumni, and eligible youth meeting the programme's prescribed requirements.",
      },
      {
        q: "What kind of training is provided?",
        a: "Free training in life skills, communication skills, and domain-specific competencies through participating colleges.",
      },
      {
        q: "Is there any cost for the training?",
        a: "No, the EXCEL programme provides free employability and skill development training.",
      },
    ],
    source: "sample",
  };
