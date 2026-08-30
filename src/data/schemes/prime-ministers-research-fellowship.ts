import type { Scheme } from "@/lib/types";

export const primeMinistersResearchFellowship: Scheme = {
  id: "prime-ministers-research-fellowship",
  slug: "prime-ministers-research-fellowship",
  name: "Prime Minister's Research Fellowship",
  shortName: "PMRF",
  summary: "Monthly fellowship of ₹70,000–₹80,000 for PhD scholars at IITs, IISc, IISERs, and NITs, with ₹2 lakh/year research grant, for up to 5 years of doctoral research in STEM disciplines.",
  description: "The Prime Minister's Research Fellowship (PMRF) is a Ministry of Education scheme to attract talented undergraduate and postgraduate graduates into doctoral research at premier Indian institutions. Fellows receive ₹70,000/month for years 1–2, ₹75,000/month for years 3–4, and ₹80,000/month for year 5 of their PhD, plus a research grant of ₹2,00,000 per year for equipment, consumables, and travel. The fellowship is tenable at IITs, IISc, IISERs, NITs, and other centrally funded technical institutions.\n\nSelection has two channels: (1) Direct Entry, open to final-year or recent UG/PG students with a strong academic record (typically CGPA 8.0+ or 80%+), who are simultaneously admitted to a PhD program at an eligible institution; (2) Lateral Entry, open to existing PhD students at eligible institutions who have completed one year and demonstrated research progress. Applications are invited twice a year through the PMRF portal (https://pmrf.in/). Selection involves shortlisting followed by an interview by a subject-expert committee.\n\nThe scheme does not require fellows to serve a bond or repay the fellowship. It is funded by the Ministry of Education and administered through the participating institutions.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Educational Background",
      value: "Bachelor's degree (BTech, BSc) with minimum 80% marks or equivalent CGPA 8.0+; or Master's degree (MTech, MSc) with minimum 75% marks or equivalent CGPA 7.5+",
      type: "education",
    },
    {
      label: "PhD Status and Institution",
      value: "Currently enrolled PhD student in STEM discipline at recognized Indian research institution (IIT, IMSC, IISER, NCCS, TIFR, or equivalent national laboratory); or fresh graduate seeking PhD admission at eligible institute",
      type: "education",
    },
    {
      label: "Research Excellence",
      value: "Demonstrated exceptional research aptitude through publications (peer-reviewed journals/conferences), strong research proposal, proven track record in academic competitions, or prior research experience",
      type: "education",
    },
    {
      label: "Research Area Alignment",
      value: "Research focus should be in priority STEM areas: AI/ML, quantum computing, biotechnology, advanced materials, renewable energy, space technology, climate science, or other frontier research domains",
      type: "other",
    },
    {
      label: "Institution Recognition",
      value: "PhD program must be at an IIT, IISc, IISER, NIT, or other centrally funded technical institution eligible under the PMRF scheme",
      type: "education",
    },
    {
      label: "Nationality and Commitment",
      value: "Indian citizen; NRI/diaspora with exceptional credentials considered; commitment to pursue research career in India for minimum 5 years post-fellowship",
      type: "residence",
    },
    {
      label: "Age and Previous Funding",
      value: "Age typically 22-35 years; not receiving higher research fellowships from other government schemes simultaneously; fresh applicants and current PhD scholars both eligible",
      type: "age",
    },
  ],
  benefits: [
    "Monthly fellowship: ₹70,000/month (years 1–2), ₹75,000/month (years 3–4), ₹80,000/month (year 5)",
    "Annual research grant: ₹2,00,000 per year for equipment, consumables, travel, and conference registration",
    "Fellowship duration: up to 5 years or PhD completion, whichever is earlier",
    "No bond, no repayment obligation",
  ],
  requiredDocuments: [
    {
      name: "Completed PMRF Application Form",
      mandatory: true,
      note: "Official application form from PMRF portal (https://pmrf.niti.gov.in/); all sections completed with accuracy; prescribed format mandatory",
    },
    {
      name: "Academic Transcripts and Certificates",
      mandatory: true,
      note: "Bachelor's/Master's degree certificates and mark sheets; minimum 80% (BTech/BSc) or 75% (MTech/MSc) marks; certified copies from university",
    },
    {
      name: "PhD Admission Letter or Enrollment Certificate",
      mandatory: true,
      note: "Current PhD enrollment from eligible institution; or admission letter if applying as fresh scholar; on institution letterhead with PhD registration/admission number",
    },
    {
      name: "Research Proposal",
      mandatory: true,
      note: "Detailed research proposal (5-10 pages) describing research objectives, methodology, expected outcomes, timeline, and potential impact; demonstrate research novelty and significance",
    },
    {
      name: "Proof of Identity and Citizenship",
      mandatory: true,
      note: "Indian passport, PAN card, Aadhaar ID; proof of Indian citizenship; NRI/diaspora candidates provide citizenship/OCI documents and residency status",
    },
    {
      name: "Academic Reference Letters",
      mandatory: true,
      note: "3-4 letters from PhD advisor, faculty members, or research supervisors; should highlight research potential, academic excellence, and suitability for fellowship",
    },
    {
      name: "Curriculum Vitae (CV)",
      mandatory: true,
      note: "Comprehensive CV listing educational qualifications, research experience, publications, conference presentations, awards, skills, and research contributions",
    },
    {
      name: "Publication List and Evidence",
      mandatory: true,
      note: "List of peer-reviewed publications with links or copies; conference papers, preprints; evidence of research contributions if any; acceptance letters for under-review papers",
    },
    {
      name: "Statement of Purpose",
      mandatory: false,
      note: "500-1,000 word essay explaining research interests, career goals, commitment to Indian research ecosystem, and how PMRF will advance research capabilities",
    },
    {
      name: "PhD Advisor Recommendation",
      mandatory: false,
      note: "Specific recommendation from PhD advisor attesting to candidate's research capabilities, potential for independent research, and suitability for fellowship",
    },
    {
      name: "Research Achievement Documentation",
      mandatory: false,
      note: "Evidence of research achievements: innovation disclosures, patents, awards, prestigious competition recognitions, research grants received, or industry collaborations",
    },
    {
      name: "Bank Account Details",
      mandatory: false,
      note: "Candidate's bank account with IFSC code for fellowship disbursement; preferably linked to Aadhaar for smooth DBT transfer",
    },
    {
      name: "Disability Certificate (if applicable)",
      mandatory: false,
      note: "If candidate has disability, medical authority certificate describing nature and extent; for priority consideration and accessibility support",
    },
  ],
  officialPortalUrl: "https://pmrf.in/",
  ministry: "Ministry of Education, Government of India",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "research",
    "PhD",
    "STEM",
    "science",
    "technology",
    "engineering",
    "doctoral",
    "central government",
    "PMRF",
    "research grant",
    "India",
    "faculty development",
    "innovation",
    "premier institutions",
  ],
  faqs: [
    {
      q: "What is PMRF?",
      a: "The Prime Minister's Research Fellowship is a Ministry of Education scheme that funds PhD research at IITs, IISc, IISERs, and NITs. Fellows receive ₹70,000–₹80,000/month and ₹2 lakh/year for research expenses for up to 5 years.",
    },
    {
      q: "What is the exact fellowship amount each year?",
      a: "₹70,000/month in years 1–2, ₹75,000/month in years 3–4, and ₹80,000/month in year 5, plus ₹2,00,000 per year as a research grant.",
    },
    {
      q: "What are the two entry channels?",
      a: "Direct Entry is for final-year or recent UG/PG graduates (typically CGPA 8.0+ or 80%+) who apply simultaneously for PhD admission at an eligible institute. Lateral Entry is for existing PhD students at eligible institutes who have completed at least one year and demonstrated research progress.",
    },
    {
      q: "Which institutions are eligible?",
      a: "IITs, IISc, IISERs, NITs, and other centrally funded technical institutions listed on the PMRF portal (https://pmrf.in/). Check the portal for the current approved institution list as it is updated periodically.",
    },
    {
      q: "How and when do I apply?",
      a: "Applications open twice a year through the PMRF portal at https://pmrf.in/. Shortlisted candidates are called for an interview by a subject-expert committee.",
    },
    {
      q: "Is there any bond or repayment obligation?",
      a: "No. PMRF is a fellowship, not a loan. There is no bond, no service obligation, and no repayment requirement.",
    },
    {
      q: "What research areas are covered?",
      a: "All STEM disciplines — science, technology, engineering, and mathematics — are covered. There is no restriction to specific priority topics, though research must be conducted at an eligible institution.",
    },
  ],
  lastVerified: "2026-08-30",
  source: "sample",
};

