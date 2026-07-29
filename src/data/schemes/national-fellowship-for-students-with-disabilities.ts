import type { Scheme } from "@/lib/types";

export const nationalFellowshipForStudentsWithDisabilities: Scheme = {
  id: "national-fellowship-for-students-with-disabilities",
  slug: "national-fellowship-for-students-with-disabilities-mr7kn4wb",
  name: "National Fellowship for Students with Disabilities",
  shortName: "NFPwD",
  summary:
    "200 fellowships per year providing ₹37,000/month (JRF) and ₹42,000/month (SRF) to students with benchmark disabilities (40%+) pursuing M.Phil or Ph.D. at UGC-recognised institutions across India, with no income ceiling.",
  description:
    "The National Fellowship for Persons with Benchmark Disabilities (NFPwD) is a Central Sector scheme implemented by the Department of Empowerment of Persons with Disabilities (DEPwD), Ministry of Social Justice & Empowerment, Government of India. It provides financial assistance to students with benchmark disabilities (40% or more) to pursue regular and full-time M.Phil or Ph.D. programmes in Science, Humanities, or Social Science at Indian universities recognised by the University Grants Commission (UGC).\n\nThe scheme awards 200 fellowships every year. Of these, 75% (150 slots) are filled through the UGC-NET-JRF and 25% (50 slots) through the UGC-CSIR NET-JRF, with slots transferable between the two if sufficient eligible candidates are not available in one category. The fellowship rates are at par with UGC fellowships — ₹37,000 per month for JRF (first 2 years) and ₹42,000 per month for SRF (subsequent 3 years), along with contingency grants and House Rent Allowance (HRA) as per Government of India norms.\n\nThe fellowship is tenable for a maximum of 5 years or until the submission of the Ph.D. thesis, whichever is earlier. M.Phil is permitted only in Clinical Psychology and Psychiatric Social Work as per UGC guidelines under NEP 2020, and the maximum gap between M.Phil and Ph.D. admission is 2 years. Selection is based on merit from UGC-NET / CSIR-NET results, and a valid Unique Disability ID (UDID) is mandatory.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Disability",
      value:
        "Must have benchmark disability of 40% or more as defined under the Rights of Persons with Disabilities Act, 2016, with a valid disability certificate issued by the competent authority",
      type: "other",
    },
    {
      label: "UDID",
      value:
        "Unique Disability ID (UDID) or UDID enrolment is mandatory",
      type: "other",
    },
    {
      label: "National exam",
      value:
        "Must have qualified UGC-NET-JRF or UGC-CSIR NET-JRF conducted by the National Testing Agency (NTA)",
      type: "education",
    },
    {
      label: "Programme",
      value:
        "Must be pursuing regular and full-time M.Phil or Ph.D. in Science, Humanities, or Social Science at a UGC-recognised university or research institution",
      type: "education",
    },
    {
      label: "Admission",
      value:
        "Candidates not admitted at the time of fellowship application must secure admission within 3 years from the date of award of fellowship",
      type: "education",
    },
    {
      label: "Income ceiling",
      value: "No income ceiling applicable",
      type: "income",
    },
    {
      label: "Concurrent fellowship",
      value:
        "Must not be receiving any other scholarship, stipend, or fellowship. Must not hold any paid appointment or receive any emoluments from other sources during the tenure",
      type: "other",
    },
    {
      label: "Age limit",
      value:
        "As per UGC-NET / CSIR-NET age norms applicable for JRF candidates",
      type: "age",
    },
  ],
  benefits: [
    "JRF stipend of ₹37,000 per month for the first 2 years",
    "SRF stipend of ₹42,000 per month for the subsequent period of up to 3 years (upon satisfactory research progress)",
    "Contingency Grant — Humanities/Social Sciences/Commerce: ₹10,000/year (JRF) and ₹20,500/year (SRF)",
    "Contingency Grant — Science/Engineering/Technology: ₹12,000/year (JRF) and ₹25,000/year (SRF)",
    "Escort/Reader assistance allowance of ₹2,000 per month",
    "House Rent Allowance (HRA) at 9%, 18%, or 27% as per GoI norms for scholars not provided hostel accommodation",
    "Maximum fellowship tenure of 5 years or until Ph.D. thesis submission, whichever is earlier",
    "200 fellowships awarded annually across India",
  ],
  requiredDocuments: [
    {
      name: "Valid disability certificate",
      mandatory: true,
      note: "Issued by the competent authority under the Rights of Persons with Disabilities Act, 2016",
    },
    {
      name: "Unique Disability ID (UDID) or UDID enrolment proof",
      mandatory: true,
    },
    {
      name: "UGC-NET / CSIR-NET scorecard",
      mandatory: true,
      note: "Must have qualified JRF or NET as applicable",
    },
    {
      name: "M.Phil / Ph.D. admission letter",
      mandatory: true,
      note: "Required at the time of joining; provisional candidates must admit within 3 years of award",
    },
    {
      name: "Post-graduate degree certificate and marksheets",
      mandatory: true,
    },
    {
      name: "Aadhaar card",
      mandatory: true,
    },
    {
      name: "Bank passbook (Aadhaar-seeded)",
      mandatory: true,
    },
    {
      name: "Photograph",
      mandatory: true,
    },
    {
      name: "No Objection Certificate (NOC)",
      mandatory: false,
      note: "Required if currently employed",
    },
  ],
  officialPortalUrl: "https://ndfdc.nic.in/Scholarship",
  ministry:
    "Department of Empowerment of Persons with Disabilities (DEPwD) / Ministry of Social Justice & Empowerment",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "disability",
    "PwD",
    "divyangjan",
    "NFPwD",
    "PhD",
    "M.Phil",
    "research",
    "UGC-NET",
    "CSIR-NET",
    "JRF",
    "SRF",
    "DEPwD",
    "all-india",
    "central",
    "UDID",
  ],
  faqs: [
    {
      q: "What is the National Fellowship for Students with Disabilities?",
      a: "It is a Central Sector scheme by DEPwD that provides fellowships to students with benchmark disabilities (40%+) to pursue M.Phil or Ph.D. in Science, Humanities, or Social Science at UGC-recognised Indian universities. It awards 200 fellowships annually at par with UGC fellowship rates.",
    },
    {
      q: "Who is eligible to apply?",
      a: "Indian students with benchmark disability (40% or more) who have qualified UGC-NET-JRF or CSIR-NET-JRF and are pursuing or plan to pursue regular, full-time M.Phil or Ph.D. at a UGC-recognised institution. There is no income ceiling.",
    },
    {
      q: "How much is the fellowship amount?",
      a: "JRF: ₹37,000 per month for 2 years. SRF: ₹42,000 per month for up to 3 subsequent years. Additionally, contingency grants (₹10,000–₹25,000/year depending on subject), escort/reader allowance (₹2,000/month), and HRA (9%–27%) are provided.",
    },
    {
      q: "How many fellowships are awarded each year?",
      a: "200 fellowships per year — 150 through UGC-NET and 50 through CSIR-NET. Slots are transferable between the two if sufficient eligible candidates are unavailable in one category.",
    },
    {
      q: "Is UDID mandatory?",
      a: "Yes. A valid Unique Disability ID (UDID) or proof of UDID enrolment is mandatory for availing the fellowship under the NFPwD scheme.",
    },
    {
      q: "Can I hold another fellowship alongside NFPwD?",
      a: "No. Scholars cannot accept any other scholarship, stipend, fellowship, or paid appointment during the tenure of NFPwD. If already receiving one, you must relinquish it before accepting NFPwD.",
    },
    {
      q: "What is the maximum duration of the fellowship?",
      a: "The fellowship is tenable for a maximum of 5 years or until the Ph.D. thesis is submitted, whichever is earlier. The gap between M.Phil and Ph.D. admission must not exceed 2 years.",
    },
    {
      q: "How do I apply?",
      a: "Applications are invited through the DEPwD / NDFDC portal (ndfdc.nic.in/Scholarship). Candidates must have a valid UGC-NET or CSIR-NET score. Selection is based on merit from NTA's all-India results among candidates with benchmark disability.",
    },
  ],
  source: "sample",
};
