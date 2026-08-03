import type { Scheme } from "@/lib/types";

export const employmentLinkedSkillTrainingProgrammeElstp: Scheme =   {
    id: "employment-linked-skill-training-programme-elstp",
    slug: "employment-linked-skill-training-programme-elstp",
    name: "Employment Linked Skill Training Programme (ELSTP)",
    shortName: "ELSTP",
    summary:
      "Free industry-relevant skill training with employment opportunities for eligible youth and job seekers.",
    description:
      "The Employment Linked Skill Training Programme (ELSTP) is a skill development initiative designed to enhance employability by providing industry-relevant training to eligible candidates. The programme focuses on developing job-ready skills, improving vocational competencies, and facilitating employment opportunities through structured training and industry linkage. The scheme aims to bridge the gap between education and employment by equipping beneficiaries with practical skills required by employers.",
    category: "skill-development",
    level: "central",
    states: ["all-india"],
    eligibility: [
      {
        label: "Applicant",
        value: "Must satisfy the eligibility conditions prescribed under the scheme",
        type: "other",
      },
      {
        label: "Target group",
        value: "Open to eligible youth and job seekers seeking skill development and employment",
        type: "occupation",
      },
      {
        label: "Requirements",
        value:
          "Must meet age, educational qualification, and other requirements specified by the implementing authority",
        type: "other",
      },
    ],
    benefits: [
      "Free skill training with industry-aligned courses",
      "Employment opportunities upon successful completion of training",
      "Development of job-ready skills and vocational competencies",
      "Structured training with industry linkage",
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", mandatory: true },
      {
        name: "Educational qualification certificates/mark sheets (5th/8th/10th/12th based on trade)",
        mandatory: true,
      },
      { name: "Identity proof & Passport-size photograph", mandatory: true },
      { name: "Domicile / Address proof", mandatory: true },
      {
        name: "Category or Caste Certificate (if claiming marginalized group benefits)",
        mandatory: false,
      },
    ],
    officialPortalUrl: "https://www.myscheme.gov.in/schemes/rpyelstp",
    ministry: "Ministry of Skill Development & Entrepreneurship",
    applicationMode: ["online"],
    tags: [
      "skill development",
      "employment",
      "training",
      "vocational",
      "job ready",
      "youth",
    ],
    faqs: [
      {
        q: "What is ELSTP?",
        a: "A skill development programme offering free industry-relevant training and employment opportunities to eligible youth and job seekers.",
      },
      {
        q: "Where do I apply?",
        a: "Search for the scheme on the official myScheme portal (myscheme.gov.in) to find your state's direct Skill Development Corporation portal link.",
      },
      {
        q: "Is the training free?",
        a: "Yes, the programme provides free skill training with industry-aligned courses.",
      },
    ],
    source: "sample",
  };
