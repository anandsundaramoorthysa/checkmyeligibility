import type { Scheme } from "@/lib/types";

export const rajivGandhiNationalFellowshipSc: Scheme = {
  id: "rajiv-gandhi-national-fellowship-sc",
  slug: "rajiv-gandhi-national-fellowship-for-scheduled-caste-candidates",
  name: "Rajiv Gandhi National Fellowship for Scheduled Caste Candidates",
  shortName: "NFSC (RGNF)",
  summary:
    "2,000 fellowships per year providing ₹25,000/month (JRF) and ₹28,000/month (SRF) plus HRA and contingency grants to SC students pursuing regular, full-time M.Phil or Ph.D. at Indian universities, with 3% seats reserved for SC candidates with disabilities.",
  description:
    "The Rajiv Gandhi National Fellowship (RGNF) for Scheduled Caste Candidates, now officially known as the National Fellowship for Scheduled Caste Students (NFSC), is a centrally sponsored fellowship scheme formulated and funded by the Ministry of Social Justice & Empowerment, Government of India. The scheme is administered by the University Grants Commission (UGC) and provides financial assistance to Scheduled Caste students to pursue higher studies leading to M.Phil and Ph.D. degrees.\n\nThe fellowship awards 2,000 slots every year for SC candidates across all subjects — Sciences, Humanities, Social Sciences, and Engineering & Technology — at Indian universities, institutions, and colleges. Of these, 3% of fellowships are reserved for persons with disabilities belonging to the SC category, as per Government of India provisions. Transgender candidates are also eligible.\n\nFellows receive a Junior Research Fellowship (JRF) at ₹25,000 per month for the first two years, enhanced to a Senior Research Fellowship (SRF) at ₹28,000 per month for the remaining tenure (up to 3 additional years for Ph.D.), along with House Rent Allowance (HRA) as per Government of India norms and annual contingency grants for research expenses. The fellowship is tenable for up to 2 years for M.Phil, up to 5 years for Ph.D., or up to 5 years for integrated M.Phil/Ph.D. programmes.\n\nA unique feature of this scheme is that NET/SLET qualification is not mandatory — candidates only need to be registered for M.Phil/Ph.D. at a recognised institution. However, candidates who have already availed the JRF through UGC-NET or UGC-CSIR NET are not eligible. The fellowship is subject to satisfactory research progress reviewed by a three-member committee comprising the Head of Department, Supervisor, and an external subject expert.\n\nApplications are invited online once a year through the UGC portal (ugc.ac.in) or the e-SARTS portal, with advertisements published in leading newspapers and Employment News.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Community",
      value: "Must belong to Scheduled Caste (SC) category as notified by the Central Government",
      type: "caste-category",
    },
    {
      label: "Educational qualification",
      value:
        "Must have passed the Post-Graduation examination in the concerned subject",
      type: "education",
    },
    {
      label: "Research registration",
      value:
        "Must be registered for regular and full-time M.Phil or Ph.D. at a recognised Indian university, institution, or college",
      type: "education",
    },
    {
      label: "Disability reservation",
      value:
        "3% of fellowships are reserved for persons with disabilities belonging to the SC category",
      type: "other",
    },
    {
      label: "Transgender eligibility",
      value: "Transgender candidates are eligible under this scheme",
      type: "other",
    },
    {
      label: "Exclusivity",
      value:
        "Must not have already availed the Junior Research Fellowship (JRF) awarded through UGC-NET or UGC-CSIR NET. Must not be receiving any other fellowship or stipend simultaneously",
      type: "other",
    },
  ],
  benefits: [
    "JRF stipend of ₹25,000 per month for the first 2 years",
    "SRF stipend of ₹28,000 per month for the remaining tenure (up to 3 additional years for Ph.D.)",
    "House Rent Allowance (HRA) as per Government of India norms (categorisation of cities)",
    "Contingency Grant — Humanities/Social Sciences: ₹10,000/year (JRF) and ₹20,500/year (SRF)",
    "Contingency Grant — Sciences/Engineering/Technology: ₹12,000/year (JRF) and ₹25,000/year (SRF)",
    "Escort/Reader assistance allowance of ₹2,000 per month for physically handicapped and blind candidates",
    "Medical facilities available at the host university/institution",
    "Maximum tenure of 2 years (M.Phil) or 5 years (Ph.D.) from the date of award",
    "2,000 fellowships awarded annually across India",
    "No NET/SLET qualification required — only registration for M.Phil/Ph.D. is needed",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    {
      name: "Caste Certificate (SC)",
      mandatory: true,
      note: "Issued by competent authority as per Government of India norms",
    },
    {
      name: "Post-Graduation degree certificate and marksheets",
      mandatory: true,
    },
    {
      name: "M.Phil / Ph.D. admission letter / registration proof",
      mandatory: true,
      note: "From a recognised Indian university, institution, or college",
    },
    { name: "Bonafide Certificate from the institution", mandatory: true },
    { name: "Proof of identity", mandatory: true },
    { name: "Proof of address", mandatory: true },
    { name: "Bank account details (Aadhaar-linked)", mandatory: true },
    { name: "Passport-size photograph", mandatory: true },
    {
      name: "Disability certificate",
      mandatory: false,
      note: "Required for 3% disability reservation under SC category",
    },
  ],
  officialPortalUrl: "https://ugc.ac.in/",
  ministry:
    "University Grants Commission (UGC) / Ministry of Social Justice & Empowerment",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "SC",
    "scheduled caste",
    "M.Phil",
    "PhD",
    "research",
    "UGC",
    "NFSC",
    "RGNF",
    "JRF",
    "SRF",
    "all-india",
    "central",
    "NET not required",
    "social justice",
  ],
  faqs: [
    {
      q: "What is the Rajiv Gandhi National Fellowship (NFSC)?",
      a: "It is a fellowship scheme by the Ministry of Social Justice & Empowerment, administered by UGC, providing financial assistance to SC students for pursuing regular, full-time M.Phil or Ph.D. at Indian universities. It awards 2,000 fellowships annually.",
    },
    {
      q: "Who is eligible for the NFSC fellowship?",
      a: "Scheduled Caste students who have passed their Post-Graduation and are registered for regular, full-time M.Phil or Ph.D. at a recognised Indian institution. NET/SLET qualification is not required. 3% seats are reserved for SC candidates with disabilities.",
    },
    {
      q: "How much is the fellowship amount?",
      a: "JRF: ₹25,000/month for the first 2 years. SRF: ₹28,000/month for the remaining tenure. Additionally, HRA as per GoI norms and annual contingency grants (₹10,000–₹25,000 depending on subject) are provided.",
    },
    {
      q: "Is NET qualification required?",
      a: "No. NET/SLET qualification is not mandatory for the RGNF/NFSC scheme. Candidates only need to be registered for M.Phil/Ph.D. at a recognised institution. However, candidates who have already availed JRF through UGC-NET or CSIR-NET are not eligible.",
    },
    {
      q: "How many fellowships are awarded each year?",
      a: "2,000 fellowships per year for SC candidates across all subjects. Of these, 3% are reserved for persons with disabilities belonging to the SC category.",
    },
    {
      q: "What is the maximum duration of the fellowship?",
      a: "M.Phil: up to 2 years or until the dissertation is submitted. Ph.D: up to 5 years or until the thesis is submitted, whichever is earlier. Integrated M.Phil/Ph.D: up to 5 years.",
    },
    {
      q: "How do I apply?",
      a: "Apply online once a year through the UGC portal (ugc.ac.in) or the e-SARTS portal when applications open. Advertisements are published in leading newspapers and Employment News.",
    },
    {
      q: "Is the fellowship renewable?",
      a: "Yes, subject to satisfactory research progress. A three-member review committee (Head of Department, Supervisor, and external expert) assesses progress before recommending continuation or upgradation from JRF to SRF.",
    },
  ],
  source: "sample",
};
