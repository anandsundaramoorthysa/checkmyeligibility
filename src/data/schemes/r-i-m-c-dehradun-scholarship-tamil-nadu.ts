import type { Scheme } from "@/lib/types";

export const rIMCDehradunScholarshipTamilNadu: Scheme = {
  id: "r-i-m-c-dehradun-scholarship-tamil-nadu",
  slug: "r-i-m-c-dehradun-scholarship-tamil-nadu",
  name: "R. I. M. C. Dehradun Scholarship",
  shortName: "RIMC Scholarship",
  summary:
    "₹4,000 per month from the Government of Tamil Nadu for Tamil Nadu students studying at the Rashtriya Indian Military College (RIMC), Dehradun.",
  description:
    "The R. I. M. C. Dehradun Scholarship is provided by the Directorate of Collegiate Education, Government of Tamil Nadu, to eligible Tamil Nadu students studying at the Rashtriya Indian Military College (RIMC), Dehradun. It offers monthly financial support to ease the cost of studying at this premier institution.",
  category: "scholarship",
  level: "state",
  states: ["tamil-nadu"],
  eligibility: [
    {
      label: "Institution",
      value: "Must be studying at the Rashtriya Indian Military College (RIMC), Dehradun",
      type: "education",
    },
    {
      label: "State guidelines",
      value: "Must be eligible under the Government of Tamil Nadu scholarship guidelines",
      type: "residence",
    },
  ],
  benefits: ["₹4,000 per month"],
  requiredDocuments: [
    { name: "Admission / bonafide certificate from RIMC", mandatory: true },
    { name: "Proof of Tamil Nadu domicile", mandatory: false, note: "If required" },
    { name: "Bank account details", mandatory: true },
    {
      name: "Additional documents prescribed by the Directorate of Collegiate Education",
      mandatory: false,
    },
  ],
  officialPortalUrl: "https://tndce.tn.gov.in/Home/scholarship",
  ministry: "Directorate of Collegiate Education, Government of Tamil Nadu",
  applicationMode: ["offline"],
  tags: [
    "scholarship",
    "tamil nadu",
    "state scheme",
    "RIMC",
    "dehradun",
    "military college",
    "secondary",
    "higher secondary",
  ],
  faqs: [
    {
      q: "Who is eligible for the R.I.M.C. Dehradun Scholarship?",
      a: "Tamil Nadu students studying at the Rashtriya Indian Military College (RIMC), Dehradun, who meet the Government of Tamil Nadu's scholarship guidelines.",
    },
    {
      q: "How much financial support is provided?",
      a: "₹4,000 per month.",
    },
    {
      q: "How do I apply?",
      a: "This is an offline scheme. Obtain the prescribed application form from the Directorate of Collegiate Education, Government of Tamil Nadu, complete it with the required documents, and submit it to the Directorate for verification and processing.",
    },
  ],
  source: "sample",
};
