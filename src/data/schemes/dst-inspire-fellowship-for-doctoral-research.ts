import type { Scheme } from "@/lib/types";

export const dstInspireFellowshipForDoctoralResearch: Scheme = {
  id: "dst-inspire-fellowship-for-doctoral-research",
  slug: "dst-inspire-fellowship-for-doctoral-research-mr5kp2xw",
  name: "DST INSPIRE Fellowship (for Doctoral Research)",
  shortName: "INSPIRE Fellowship",
  summary:
    "Up to 1,000 fellowships per year providing ₹37,000/month (JRF) and ₹42,000/month (SRF) to meritorious students aged 22–27 pursuing Ph.D. in Basic and Applied Sciences at recognised institutions across India.",
  description:
    "The INSPIRE Fellowship (for Doctoral Research) is a flagship component of the Innovation in Science Pursuit for Inspired Research (INSPIRE) scheme, implemented by the Department of Science and Technology (DST), Government of India. It offers up to 1,000 fellowships every year to attract talented students to pursue regular doctoral degrees in Basic and Applied Sciences — including Engineering, Medicine, Agriculture, Veterinary Sciences, and Pharmacy — after a Master's or Bachelor's degree in the relevant field.\n\nThe fellowship provides financial support at par with National Eligibility Test (NET) qualified candidates, with Junior Research Fellowship (JRF) stipend for the first two years and Senior Research Fellowship (SRF) stipend thereafter, along with a contingency grant and House Rent Allowance (HRA) as per Government of India norms. Each fellowship is tenable for a maximum of five years or until the completion of the Ph.D. programme, whichever is earlier.\n\nSelection is done through a two-stage competitive process — Level-I screening for eligibility and Level-II evaluation by Subject Expert Committees (SEC) assessing academic merit, host institution profile, and the research proposal.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Age",
      value: "Preferably in the age group of 22–27 years",
      type: "age",
    },
    {
      label: "Academic qualification (Option A)",
      value:
        "INSPIRE Scholar with minimum 70% marks (or CGPA equivalent) in aggregate at M.Sc. or Integrated M.S./M.Sc.",
      type: "education",
    },
    {
      label: "Academic qualification (Option B)",
      value:
        "1st Rank Holder with minimum 70% marks (or CGPA equivalent) at University-level Post-Graduate examination in Basic/Applied Sciences including Engineering, Pharmacy, Agricultural Sciences, and Veterinary Sciences from any recognised University or academic Institution (excluding autonomous colleges) in India",
      type: "education",
    },
    {
      label: "Academic qualification (Option C)",
      value:
        "1st Rank Holder at University-level Graduate or Post-graduate degree in Medicine from any recognised Indian University, Institute, or Statutory Body",
      type: "education",
    },
    {
      label: "Citizenship",
      value: "Must be an Indian Citizen",
      type: "other",
    },
    {
      label: "Exclusions",
      value:
        "College-level (including autonomous college) rank holders, candidates who obtained degrees through Distance Education Mode, and 1st Rank Holders in M.Sc. 2nd year / last year specialisations are NOT eligible",
      type: "other",
    },
    {
      label: "Concurrent fellowship",
      value:
        "Must not be already receiving Senior Research Fellowship (SRF) or a higher position in any project or otherwise",
      type: "other",
    },
  ],
  benefits: [
    "JRF stipend of ₹37,000 per month for Years 1 and 2",
    "SRF stipend of ₹42,000 per month from Year 3 onward (normally after 2 years of JRF; after 1 year if at least one first-author paper is accepted in an international peer-reviewed journal)",
    "Contingency Grant of ₹20,000 per annum",
    "House Rent Allowance (HRA) as per Government of India norms depending on the location of the host institute",
    "Fellowship tenable for up to 5 years or until Ph.D. completion, whichever is earlier",
    "Up to 1,000 fellowships awarded annually",
    "Opportunity to pursue doctoral research at any recognised University or Institute in India",
  ],
  requiredDocuments: [
    {
      name: "First Rank Certificate",
      mandatory: true,
      note: "In the prescribed INSPIRE Fellowship format available on the INSPIRE web portal",
    },
    {
      name: "INSPIRE Scholar Certificate",
      mandatory: false,
      note: "Required if applying under the INSPIRE Scholar category",
    },
    {
      name: "M.Sc. / Integrated M.S./M.Sc. marksheets and degree certificate",
      mandatory: true,
    },
    {
      name: "Undergraduate degree certificate",
      mandatory: true,
    },
    {
      name: "Ph.D. Admission Letter",
      mandatory: false,
      note: "Required for Final Offer; applicants not yet admitted receive a Provisional Offer valid for one year",
    },
    {
      name: "Detailed Research Proposal",
      mandatory: true,
      note: "Critical for Level-II evaluation; must be prepared and attested by the proposed Research Supervisor",
    },
    {
      name: "Aadhaar card",
      mandatory: true,
    },
    {
      name: "Bank passbook (SBI)",
      mandatory: true,
      note: "Personal savings account",
    },
    {
      name: "Category Certificate (SC/ST/OBC)",
      mandatory: false,
    },
    {
      name: "Photograph",
      mandatory: true,
    },
  ],
  officialPortalUrl: "https://online-inspire.gov.in/",
  ministry:
    "Department of Science and Technology (DST) / Ministry of Science and Technology",
  applicationMode: ["online"],
  tags: [
    "INSPIRE",
    "fellowship",
    "PhD",
    "doctoral",
    "research",
    "DST",
    "JRF",
    "SRF",
    "science",
    "basic sciences",
    "applied sciences",
    "engineering",
    "medicine",
    "agriculture",
    "veterinary",
    "pharmacy",
    "all-india",
    "central",
  ],
  faqs: [
    {
      q: "What is the DST INSPIRE Fellowship?",
      a: "It is a flagship fellowship under the INSPIRE scheme of the Department of Science and Technology (DST) that supports meritorious students to pursue doctoral research in Basic and Applied Sciences. It offers up to 1,000 fellowships per year at JRF/SRF levels with a contingency grant and HRA.",
    },
    {
      q: "Who is eligible to apply?",
      a: "INSPIRE Scholars with minimum 70% marks in M.Sc./Integrated M.S./M.Sc., or 1st Rank Holders at the University level in PG examinations in Basic/Applied Sciences (with minimum 70% marks), or 1st Rank Holders in Medicine at the University level. Candidates should preferably be aged 22–27 years and must be Indian citizens.",
    },
    {
      q: "What is the fellowship amount?",
      a: "JRF: ₹37,000 per month for Years 1 and 2. SRF: ₹42,000 per month from Year 3 onward (up to 5 years total). Additionally, a Contingency Grant of ₹20,000 per annum and HRA as per GoI norms are provided.",
    },
    {
      q: "How many fellowships are awarded each year?",
      a: "Up to 1,000 INSPIRE Fellowships are offered annually through a competitive selection process.",
    },
    {
      q: "How do I apply?",
      a: "Register and apply online on the INSPIRE web portal at online-inspire.gov.in when the annual call for applications is announced (typically in the 3rd or 4th quarter of the financial year). Applications are accepted only in online mode against specific call announcements.",
    },
    {
      q: "What is the selection process?",
      a: "Selection is done in two stages: Level-I screening for verifying eligibility and document completeness, and Level-II evaluation by Subject Expert Committees (SEC) based on academic merit, host institution profile, and the research proposal. A Provisional Offer is given to eligible candidates not yet admitted to Ph.D., with one year to secure admission for a Final Offer.",
    },
    {
      q: "Can I hold another fellowship alongside INSPIRE?",
      a: "No. Candidates already enjoying Senior Research Fellowship (SRF) or a higher position in any project are not eligible to apply. If selected, the fellow must not avail any other fellowship simultaneously.",
    },
    {
      q: "When is the JRF to SRF upgrade?",
      a: "Normally after completion of 2 years of INSPIRE Fellowship. However, it can be considered after 1 year if the fellow has at least one accepted research paper (as 1st author) in an international peer-reviewed journal.",
    },
  ],
  source: "sample",
};
