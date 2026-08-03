import type { Scheme } from "@/lib/types";

export const scholarshipIToViiiStandardByWelfareOfDifferentlyAbledPersons: Scheme =
  {
    id: "scholarship-i-to-viii-standard-by-welfare-of-differently-abled-persons-mrf4cya6",
    slug: "scholarship-i-to-viii-standard-by-welfare-of-differently-abled-persons-mrf4cya6",
    name: "Scholarship (I to VIII Standard) by Welfare of Differently Abled Persons",
    shortName: "Scholarship (I–VIII)",
    summary:
      "Annual financial assistance of ₹1,000 (Class 1–5) or ₹3,000 (Class 6–8) for differently abled students of Tamil Nadu in government-recognized schools to purchase books and notebooks.",
    description:
      "The Scholarship (I to VIII Standard) by the Department for the Welfare of Differently Abled Persons, Government of Tamil Nadu provides financial assistance to differently abled students studying in government-recognized schools to purchase books and notebooks and support their education.",
    category: "disability",
    level: "state",
    states: ["tamil-nadu"],
    eligibility: [
      {
        label: "Disability",
        value: "Applicant must be a differently abled student",
        type: "other",
      },
      {
        label: "Class",
        value: "Must be studying in Class 1 to Class 8",
        type: "education",
      },
      {
        label: "School",
        value: "Must be enrolled in a government-recognized school",
        type: "education",
      },
      {
        label: "Other assistance",
        value: "Must not be receiving similar financial assistance from any other source",
        type: "other",
      },
    ],
    benefits: [
      "Class 1–5: ₹1,000 per year for the purchase of books and notebooks",
      "Class 6–8: ₹3,000 per year for the purchase of books and notebooks",
    ],
    requiredDocuments: [
      {
        name: "Certificate from the Headmaster",
        mandatory: true,
        note: "Stating that the student is not receiving similar assistance from any other source",
      },
      { name: "Disability Certificate from competent authority (minimum 40% disability)", mandatory: true },
      { name: "School enrollment / admission letter for current academic year", mandatory: true },
      { name: "Income certificate of parents/guardian from revenue authority", mandatory: true },
      { name: "Aadhaar Card of student and parent/guardian", mandatory: true },
      { name: "Passport-size photographs", mandatory: true },
      { name: "Bank passbook copy (in student's or guardian's name)", mandatory: true },
    ],
    officialPortalUrl: "https://www.myscheme.gov.in/schemes/sitviiisbwodap",
    ministry:
      "Department for the Welfare of Differently Abled Persons, Government of Tamil Nadu",
    applicationMode: ["offline"],
    tags: [
      "Tamil Nadu",
      "scholarship",
      "differently abled",
      "divyang",
      "disability",
      "primary",
      "upper primary",
      "Class 1 to 8",
      "books and notebooks",
      "state scholarship",
      "welfare of differently abled",
      "education",
    ],
    faqs: [
      {
        q: "Who is eligible for the Scholarship (I to VIII Standard)?",
        a: "Differently abled students studying in Class 1 to Class 8 in a government-recognized school in Tamil Nadu, who are not receiving similar financial assistance from any other source.",
      },
      {
        q: "What is the scholarship amount?",
        a: "Students in Class 1 to 5 receive ₹1,000 per year and students in Class 6 to 8 receive ₹3,000 per year, for the purchase of books and notebooks.",
      },
      {
        q: "How do I apply for this scholarship?",
        a: "Visit the District Differently Abled Welfare Officer and obtain the prescribed application form, fill in the application form and attach the required document(s), submit the completed application to the District Differently Abled Welfare Officer, and collect the acknowledgement/receipt after submission.",
      },
      {
        q: "What documents are required?",
        a: "A certificate from the Headmaster stating that the student is not receiving similar assistance from any other source.",
      },
    ],
    source: "sample",
  };
