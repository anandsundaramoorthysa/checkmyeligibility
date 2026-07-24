import type { Scheme } from "@/lib/types";

export const csirSeniorResearchFellowshipSrfDirect: Scheme = {
  id: "csir-senior-research-fellowship-srf-direct",
  slug: "csir-senior-research-fellowship-srf-direct-292",
  name: "CSIR Senior Research Fellowship (SRF-Direct) #292",
  shortName: "CSIR SRF-Direct",
  summary:
    "₹42,000/month fellowship for eligible research scholars in Science & Technology and Medical Sciences, awarded directly by CSIR-HRDG to candidates with prior research experience and publications.",
  description:
    "The Council of Scientific and Industrial Research (CSIR), through its Human Resource Development Group (HRDG), awards a limited number of Senior Research Fellowships (SRF-Direct) each year to bright young men and women for training in methods of research under expert guidance at university departments, Institutes of National Importance, CSIR laboratories, government research establishments, and recognized R&D institutions across India.\n\nUnlike the JRF-to-SRF upgrade route, SRF-Direct is awarded directly by CSIR to candidates who already possess the requisite postgraduate qualifications, research experience, and SCI publications. The fellowship is tenable in all universities, deemed universities, IITs, postgraduate colleges, CSIR laboratories, recognized public sector R&D establishments, and industrial R&D labs across India.\n\nSelected fellows receive a stipend of ₹42,000 per month for the entire tenure, along with an annual contingency grant of ₹20,000. The fellowship is initially tenable for two years and is extendable by one year based on a satisfactory assessment by a three-member expert committee.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Qualification path 1 — MSc/BE/BTech",
      value:
        "MSc/BE/BTech or equivalent degree with at least 55% marks, one publication in an SCI journal, and at least two years of post-MSc/BE/BTech research experience (evidenced from fellowship/associateship or from date of Ph.D. registration)",
      type: "education",
    },
    {
      label: "Qualification path 2 — MTech/ME",
      value:
        "MTech/ME or equivalent degree in Engineering/Technology with at least 60% marks (no additional research experience required)",
      type: "education",
    },
    {
      label: "Qualification path 3 — BE/BTech (experience)",
      value:
        "BE/BTech or equivalent degree with at least 60% marks and two years of research experience as on the last date of application",
      type: "education",
    },
    {
      label: "Qualification path 4 — MBBS/BDS",
      value:
        "MBBS/BDS or equivalent with at least 60% marks and one-year internship",
      type: "education",
    },
    {
      label: "Qualification path 5 — BPharm/BVSc/BSc(Ag)",
      value:
        "BPharm/BVSc/BSc(Ag) or equivalent degree with at least 55% marks, one publication in an SCI journal, and at least three years of research experience as on the last date of application",
      type: "education",
    },
    {
      label: "Qualification path 6 — MPharm/MVSc/MSc(Ag)/MPhil",
      value:
        "MPharm/MVSc/MSc(Ag)/MPhil or equivalent degree with at least 55% marks, one publication in an SCI journal, and at least one year of research experience as on the last date of application",
      type: "education",
    },
    {
      label: "Age limit",
      value: "Maximum 32 years as on the last date of application",
      type: "age",
    },
    {
      label: "Age relaxations",
      value:
        "Up to 37 years for SC/ST/Physically Handicapped and women candidates; up to 35 years for OBC (Non-Creamy Layer) candidates",
      type: "age",
    },
    {
      label: "Disqualifications",
      value:
        "Candidates who have been awarded PhD/MD/MS/MDS degrees or have submitted their thesis are not eligible. Those eligible for Research Associateship (RA) will not be considered for SRF. Those who have already availed JRF for 5 years or SRF for 3 years from any source need not apply.",
      type: "other",
    },
    {
      label: "Employment",
      value:
        "Full-time only. Simultaneous employment is not permitted. Employed candidates must submit an undertaking to resign if selected.",
      type: "other",
    },
  ],
  benefits: [
    "₹42,000 per month stipend during the entire tenure of fellowship or date of Ph.D. viva-voce, whichever is earlier",
    "Annual contingency grant of up to ₹20,000 per fellow (payable to the host institute)",
    "₹3,000 lump sum on submission of Ph.D. thesis in e-form",
    "Hostel accommodation wherever available (HRA not applicable if hostel is provided)",
    "HRA as per host institution rules (capped at Central Government Employee rates) if hostel is unavailable",
    "Medical facility as per Central/State Government norms (limited to the fellow only)",
    "Initial tenure of 2 years, extendable by 1 year based on expert committee assessment",
    "Total tenure (JRF + SRF combined, from all sources) may not exceed 5 years",
  ],
  requiredDocuments: [
    { name: "Recent photograph", mandatory: true, note: "JPEG/JPG format, 130x160 to 260x320 pixels, less than 150KB" },
    { name: "Signature", mandatory: true, note: "JPEG/JPG format, 90x25 to 225x100 pixels, less than 150KB" },
    { name: "Age proof (DOB Certificate)", mandatory: true },
    {
      name: "Qualifying degree certificate + grade-to-percentage conversion certificate (if any) + Ph.D. registration/submission/award proof",
      mandatory: true,
      note: "Combined into a single PDF, less than 400KB",
    },
    {
      name: "Category Certificate (SC/ST/OBC)",
      mandatory: false,
      note: "Mandatory if claiming age relaxation; OBC certificate must specify Non-Creamy Layer status",
    },
    {
      name: "PwD Certificate",
      mandatory: false,
      note: "Mandatory if claiming disability-based relaxation",
    },
    {
      name: "Experience certificates (fellowship/associhip OMs)",
      mandatory: true,
      note: "Employed candidates must also submit a signed undertaking for leaving their job if selected",
    },
    {
      name: "Declaration and undertaking form",
      mandatory: true,
      note: "Duly signed and stamped by the candidate, supervisor, and Head of the Institution (format available on the application portal)",
    },
    {
      name: "Research proposal and testimonials",
      mandatory: true,
      note: "Combined with the declaration form into a single PDF",
    },
    {
      name: "First page of up to 3 best research papers",
      mandatory: false,
      note: "Combined into a single PDF, less than 400KB; if applicable",
    },
  ],
  officialPortalUrl: "https://srfra.csirhrdg.res.in/",
  ministry:
    "Council of Scientific & Industrial Research (CSIR) / Ministry of Science & Technology",
  applicationMode: ["online"],
  tags: [
    "CSIR",
    "SRF",
    "SRF-Direct",
    "fellowship",
    "research",
    "PhD",
    "science",
    "technology",
    "medical",
    "engineering",
    "MSc",
    "MTech",
    "MBBS",
    "BPharm",
    "SCI publication",
    "stipend",
    "all-india",
    "central",
    "HRDG",
  ],
  faqs: [
    {
      q: "What is CSIR SRF-Direct?",
      a: "CSIR SRF-Direct is a Senior Research Fellowship awarded directly by CSIR-HRDG to candidates who already possess the requisite postgraduate qualifications, research experience, and SCI publications. It provides ₹42,000/month for full-time research training at recognized institutions across India.",
    },
    {
      q: "Who is eligible for SRF-Direct?",
      a: "Candidates with MSc/BE/BTech (55% + 2 years experience + SCI paper), MTech/ME (60%), BE/BTech (60% + 2 years experience), MBBS/BDS (60% + internship), BPharm/BVSc/BSc(Ag) (55% + 3 years experience + SCI paper), or MPharm/MVSc/MSc(Ag)/MPhil (55% + 1 year experience + SCI paper). Maximum age is 32 years with relaxations for reserved categories.",
    },
    {
      q: "How much is the fellowship stipend?",
      a: "₹42,000 per month for the entire tenure of the fellowship or the date of Ph.D. viva-voce, whichever is earlier. An annual contingency grant of up to ₹20,000 is also provided to the host institute.",
    },
    {
      q: "What is the tenure of the fellowship?",
      a: "Initially 2 years, extendable by 1 year based on a satisfactory assessment by a three-member expert committee. The total combined tenure of JRF and SRF from all sources cannot exceed 5 years.",
    },
    {
      q: "How do I apply for SRF-Direct?",
      a: "Apply online at https://srfra.csirhrdg.res.in/ during the application window (typically open for about one month each year). You need to register, fill the application form, upload documents in the specified formats, and submit. Selection is based on academic record, experience, publications, and an interview.",
    },
    {
      q: "Can I hold another fellowship alongside SRF-Direct?",
      a: "No. You cannot hold two fellowships simultaneously. If you are already holding an equivalent fellowship from DST, DBT, ICMR, UGC, ICAR, or other agencies, the combined tenure inclusive of CSIR fellowship must not exceed 3 years. You must specify the reason for applying if you already hold an equivalent fellowship.",
    },
    {
      q: "Is there an application fee?",
      a: "No. There is no application fee for CSIR SRF-Direct.",
    },
  ],
  source: "sample",
};
