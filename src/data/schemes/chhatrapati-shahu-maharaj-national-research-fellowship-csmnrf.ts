import type { Scheme } from "@/lib/types";

export const chhatrapatiShahuMaharajNationalResearchFellowshipCsmnrf: Scheme = {
  id: "chhatrapati-shahu-maharaj-national-research-fellowship-csmnrf-mrdr2k7g",
  slug: "chhatrapati-shahu-maharaj-national-research-fellowship-csmnrf-mrdr2k7g",
  name: "Chhatrapati Shahu Maharaj National Research Fellowship (CSMNRF)",
  shortName: "CSMNRF",
  summary:
    "Monthly fellowship with HRA and contingency support by SARTHI, Maharashtra for full-time PhD scholars from eligible communities pursuing research in recognized universities and institutions.",
  description:
    "The Chhatrapati Shahu Maharaj National Research Fellowship (CSMNRF) is implemented by SARTHI (Social Justice and Special Assistance Research and Training Institute), Government of Maharashtra, to provide financial support to full-time PhD scholars from OBC, VJNT (Vimukta Jati and Nomadic Tribes), SBC (Special Backward Category), and other SARTHI-eligible communities.\n\nThe fellowship amount is at par with the UGC NET-JRF/SRF fellowship rates prescribed by the University Grants Commission — ₹37,000/month for the initial two years (JRF period) and ₹42,000/month thereafter (SRF period) — along with House Rent Allowance (HRA) as per government norms and an annual contingency grant for research expenses. Fellows must be registered at a recognized university or institution in Maharashtra and must be pursuing research through regular (not distance) mode.\n\nApplications are invited annually through the SARTHI portal. Selection is based on academic merit, research proposal, and verification of eligibility criteria including domicile, community, and income.",
  category: "fellowship",
  level: "state",
  states: ["maharashtra"],
  eligibility: [
    {
      label: "Residence",
      value: "Must be a resident of Maharashtra",
      type: "residence",
    },
    {
      label: "Category",
      value: "Must belong to eligible SARTHI target groups (OBC and other eligible communities)",
      type: "caste-category",
    },
    {
      label: "Enrollment",
      value: "Must be registered for a full-time PhD programme at a recognized university or institution",
      type: "education",
    },
    {
      label: "Qualification",
      value: "Must possess a postgraduate degree from a recognized institution",
      type: "education",
    },
    {
      label: "Income criteria",
      value: "Must satisfy the fellowship guidelines and income criteria prescribed by SARTHI",
      type: "income",
    },
    {
      label: "Age limit",
      value: "Must not be above 45 years of age as of 1st January of the respective year",
      type: "age",
    },
    {
      label: "Mode of study",
      value: "PhD pursued through distance education shall not be considered for the fellowship",
      type: "other",
    },
  ],
  benefits: [
    "Monthly fellowship at par with UGC NET-JRF rates: ₹37,000/month for the first 2 years (JRF), ₹42,000/month thereafter (SRF)",
    "House Rent Allowance (HRA) as per applicable government norms",
    "Annual contingency grant for research-related expenses",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    { name: "Domicile Certificate", mandatory: true },
    { name: "PG Mark Sheets", mandatory: true },
    { name: "PhD Registration Certificate", mandatory: true },
    { name: "Research Proposal", mandatory: true },
    { name: "Income Certificate", mandatory: true },
    { name: "Bank Account Details", mandatory: true },
    { name: "Passport-size Photograph", mandatory: true },
    { name: "Caste Certificate", mandatory: true },
    { name: "10th & 12th / Graduation Certificates", mandatory: true },
  ],
  officialPortalUrl: "https://sarthi.maharashtra.gov.in/en",
  ministry: "Department of Social Justice and Special Assistance, Government of Maharashtra (via SARTHI)",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "CSMNRF",
    "SARTHI",
    "Maharashtra",
    "OBC",
    "PhD",
    "research",
    "stipend",
    "HRA",
    "contingency",
    "state fellowship",
    "social justice",
  ],
  faqs: [
    {
      q: "Who is eligible for the CSMNRF fellowship?",
      a: "Residents of Maharashtra belonging to eligible SARTHI target groups (including OBC), registered for a full-time PhD programme, holding a postgraduate degree from a recognized institution, not above 45 years of age as of 1st January of the respective year, and satisfying the fellowship guidelines and income criteria prescribed by SARTHI.",
    },
    {
      q: "What is the fellowship amount?",
      a: "The fellowship is at par with UGC NET-JRF/SRF rates: ₹37,000/month for the first 2 years (JRF period) and ₹42,000/month for the subsequent years (SRF period), plus HRA as per government norms and an annual contingency grant.",
    },
    {
      q: "Can distance education PhD scholars apply?",
      a: "No. PhD pursued through distance education shall not be considered for the fellowship.",
    },
    {
      q: "What is the application process?",
      a: "Visit the SARTHI portal, read the fellowship notification and eligibility conditions, register on the fellowship portal, fill in personal, academic and research details, upload the required documents, and submit the application. Applications then go through document and eligibility verification, evaluation by the competent committee, and publication of selected candidates before fellowship benefits are released.",
    },
    {
      q: "What documents are required?",
      a: "Aadhaar card, domicile certificate, PG mark sheets, PhD registration certificate, research proposal, income certificate, bank account details, passport-size photograph, caste certificate, and 10th & 12th / graduation certificates.",
    },
  ],
  source: "sample",
};
