import type { Scheme } from "@/lib/types";

export const dbtResearchAssociateshipDbtRa: Scheme = {
  id: "dbt-research-associateship-dbt-ra-mrdwwdom",
  slug: "dbt-research-associateship-dbt-ra-mrdwwdom",
  name: "DBT Research Associateship (DBT-RA)",
  shortName: "DBT-RA",
  summary:
    "Postdoctoral research associateship of ₹55,000 per month plus HRA for PhD, MD, or M.S. degree holders pursuing biotechnology and life sciences research.",
  description:
    "Department of Biotechnology (DBT) postdoctoral programme (started 1999) to train young researchers and build a critical mass of skilled biotechnology manpower, managed by the DBT-HRD Project & Management Unit at the Regional Centre for Biotechnology (RCB), Faridabad. The programme supports promising researchers with an interest in biotechnology and life sciences to pursue postdoctoral research.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Qualification",
      value:
        "PhD in Science/Engineering, or MD/M.S. in Medicine, with a good academic record and interest in biotechnology/life sciences",
      type: "education",
    },
    {
      label: "Age limit",
      value: "Upper age limit of 40 years (45 years for women)",
      type: "age",
    },
    {
      label: "Institution restriction",
      value:
        "The associateship cannot be held at the same institution as the PhD, or under the PhD supervisor",
      type: "other",
    },
  ],
  benefits: [
    "Monthly stipend of ₹55,000 per month",
    "House Rent Allowance (HRA) in addition to the stipend",
  ],
  requiredDocuments: [
    { name: "CV", mandatory: true },
    { name: "PhD Degree / Thesis-submission Proof", mandatory: true },
    { name: "Mentor's Consent Letter", mandatory: true },
    { name: "Referee Details", mandatory: true },
    { name: "Research Proposal", mandatory: true },
  ],
  officialPortalUrl: "https://rcb.res.in/DBTRA/",
  ministry: "Department of Biotechnology (DBT)",
  applicationMode: ["online"],
  tags: [
    "DBT",
    "DBT-RA",
    "research associateship",
    "postdoctoral",
    "fellowship",
    "biotechnology",
    "life sciences",
    "stipend",
    "HRA",
    "Regional Centre for Biotechnology",
    "RCB",
    "Common Fellowship Portal",
    "central fellowship",
    "research",
  ],
  faqs: [
    {
      q: "Who is eligible for the DBT Research Associateship?",
      a: "Candidates with a PhD in Science/Engineering or an MD/M.S. in Medicine, with a good academic record and interest in biotechnology/life sciences. The upper age limit is 40 years (45 years for women). The associateship cannot be held at the same institution as the PhD, or under the PhD supervisor.",
    },
    {
      q: "What is the stipend amount?",
      a: "Research Associates receive ₹55,000 per month plus House Rent Allowance (HRA).",
    },
    {
      q: "How do I apply for the DBT-RA programme?",
      a: "Visit the Common Fellowship Portal at fellowships.gov.in, create your CFP ID, log in with your CFPID or registered e-mail (the default password is your DOB in DDMMYYYY format), complete and save your profile, and click Apply next to the DBT-RA Program in Biotechnology and Life Sciences on your dashboard. Fill in all required details, upload documents and certificates, and click Submit.",
    },
    {
      q: "What documents are required?",
      a: "CV, PhD degree/thesis-submission proof, mentor's consent letter, referee details, and a research proposal. Prescribed formats are available for download on the portal.",
    },
    {
      q: "Who manages the DBT-RA programme?",
      a: "The programme is managed by the DBT-HRD Project & Management Unit at the Regional Centre for Biotechnology (RCB), Faridabad. For queries, you can write to ra.dbt@rcb.res.in.",
    },
  ],
  source: "sample",
};
