import type { Scheme } from "@/lib/types";

export const readersAllowanceToVisuallyImpairedPersons: Scheme =   {
    id: "readers-allowance-visually-impaired",
    slug: "readers-allowance-to-visually-impaired-persons",
    name: "Readers Allowance to Visually Impaired Persons",
    shortName: "RATVIP",
    summary:
      "Annual financial assistance to visually impaired students to hire readers for their education from Class 9 onwards.",
    description:
      "The Readers Allowance to Visually Impaired Persons scheme, implemented by the Department for the Welfare of Differently Abled Persons, Government of Tamil Nadu, provides annual financial assistance to visually impaired students studying in recognized institutions. The allowance helps students hire readers to support their education from Class 9 onwards.",
    category: "disability",
    level: "state",
    states: ["tamil-nadu"],
    eligibility: [
      {
        label: "Disability",
        value: "Applicant must be a visually impaired student",
        type: "other",
      },
      {
        label: "Education",
        value: "Must be studying in Class 9 or above",
        type: "education",
      },
      {
        label: "Institution",
        value: "Must be enrolled in a recognized/bonafide educational institution",
        type: "other",
      },
    ],
    benefits: [
      "Class 9–10: ₹3,000/year",
      "Degree (UG): ₹5,000/year",
      "Postgraduate & Professional Courses: ₹6,000/year",
    ],
    requiredDocuments: [
      { name: "Reader Certificate issued by the Head of the Institution", mandatory: true },
      { name: "National Identity Card / Disability ID of the Differently Abled", mandatory: true },
      { name: "Previous qualifying examination mark statement", mandatory: true },
    ],
    officialPortalUrl: "https://www.myscheme.gov.in/schemes/ratvip",
    ministry: "Department for the Welfare of Differently Abled Persons, Government of Tamil Nadu",
    applicationMode: ["offline"],
    tags: ["visually impaired", "reader allowance", "disability", "education", "tamil nadu"],
    faqs: [
      {
        q: "Who is eligible for this allowance?",
        a: "Visually impaired students studying in Class 9 or above in a recognized educational institution in Tamil Nadu.",
      },
      {
        q: "How much allowance is provided?",
        a: "₹3,000/year for Class 9–10, ₹5,000/year for UG degree, and ₹6,000/year for postgraduate and professional courses.",
      },
    ],
    source: "sample",
  };
