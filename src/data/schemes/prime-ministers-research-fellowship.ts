import type { Scheme } from "@/lib/types";

export const primeMinistersResearchFellowship: Scheme = {
  id: "prime-ministers-research-fellowship",
  slug: "prime-ministers-research-fellowship",
  name: "Prime Minister's Research Fellowship",
  shortName: "PMRF",
  summary: "A prestigious central government research fellowship program identifying and supporting exceptional researchers and PhD scholars to pursue cutting-edge research in science, technology, and engineering domains, aiming to develop world-class research talent and strengthen India's research ecosystem.",
  description: "The Prime Minister's Research Fellowship (PMRF) is a flagship research fellowship scheme launched to identify and support exceptional researchers and PhD scholars pursuing advanced research in science, technology, engineering, and mathematics. The scheme aims to address the challenge of brain-drain by retaining top research talent within India and providing them with world-class research environment and support. PMRF provides substantial monthly fellowships ranging from ₹25,000 to ₹80,000 depending on qualification level and research area, along with comprehensive research support including access to national research infrastructure, international collaboration opportunities, and publication funding. The scheme targets both ongoing PhD scholars and fresh researchers entering doctoral programs, offering competitive selection through rigorous evaluation of research proposals and academic credentials. Fellowship recipients are groomed to become future research leaders and faculty members at premier Indian institutions. The scheme emphasizes research in priority areas including AI/ML, quantum computing, biotechnology, advanced materials, renewable energy, space technology, and other frontier areas. Recipients gain access to high-performance computing facilities, advanced laboratory infrastructure, and mentorship from leading researchers. PMRF has successfully attracted talented researchers from across India and diaspora, with fellows publishing in top international journals and securing significant research grants.",
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
      value: "PhD program must be in government-recognized research institutions, IITs, Central Universities, CSIR laboratories, or nationally important institutions with established research credentials",
      type: "occupation",
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
    {
      label: "Monthly Research Fellowship",
      value: "₹25,000-45,000 for BTech/BSc entry; ₹35,000-60,000 for MTech/MSc entry; ₹50,000-80,000 for exceptional researchers; disbursed monthly to fellow's account",
    },
    {
      label: "Annual Research Grant",
      value: "₹3,00,000-5,00,000 per annum for research expenses, equipment, travel, and conference participation; utilized flexibly for research advancement",
    },
    {
      label: "International Travel Support",
      value: "₹2,00,000-4,00,000 per annum for international conference presentations, collaborative research visits, and international internships at premier research institutions",
    },
    {
      label: "Access to Research Infrastructure",
      value: "Unrestricted access to national research facilities, high-performance computing centers, advanced laboratories, and specialized equipment; network of premier institutions available",
    },
    {
      label: "Mentorship and Collaboration",
      value: "Mentorship from leading researchers and faculty members; facilitation of collaboration with national and international research groups; research guidance and career counseling",
    },
    {
      label: "Publication Support",
      value: "Funding for publishing research in top-tier international journals; open-access fees (typically ₹50,000-1,50,000 per paper) covered; presentation at international conferences funded",
    },
    {
      label: "Health Insurance and Benefits",
      value: "Comprehensive health insurance coverage (₹5,00,000-10,00,000 per annum); medical and accident coverage; disability benefits; optional dependent coverage",
    },
    {
      label: "Research Discretionary Fund",
      value: "Additional discretionary fund of ₹1,00,000-2,00,000 annually for unforeseen research expenses, emergency travel, or specialized research requirements",
    },
    {
      label: "Academic Leave and Flexibility",
      value: "Flexibility to pursue specialized training, short-term internships, or research sabbaticals (up to 3-6 months) without fellowship interruption",
    },
    {
      label: "Doctoral Program Sponsorship",
      value: "If accepted, fellowship can support candidate through entire doctoral program (3-5 years); tuition and hostel support available at affiliated institutions",
    },
    {
      label: "Relocation Support",
      value: "One-time relocation grant of ₹50,000-1,00,000 for shifting to research institution; institutional hostel accommodation assistance or rent assistance",
    },
    {
      label: "Career Development and Placement",
      value: "Facilitation for faculty positions at IITs, Central Universities, CSIR labs; assistance in securing research grants (SERB, DST, DBT); alumni mentoring network",
    },
    {
      label: "Post-Fellowship Opportunities",
      value: "Preference for faculty positions at premier institutions; eligibility for independent research grants; pathways to leadership roles in Indian research ecosystem",
    },
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
  officialPortalUrl: "https://pmrf.niti.gov.in/",
  ministry: "NITI Aayog, Government of India (in collaboration with Ministry of Education and Department of Science and Technology)",
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
      question: "What is the Prime Minister's Research Fellowship (PMRF)?",
      answer: "PMRF is a prestigious central government fellowship scheme supporting exceptional researchers and PhD scholars in STEM disciplines. It provides monthly fellowships, research grants, access to national infrastructure, international collaboration opportunities, and mentorship to develop world-class research talent and strengthen India's research ecosystem.",
    },
    {
      question: "Who is eligible to apply for PMRF?",
      answer: "Candidates with Bachelor's degree (80%+ marks) or Master's degree (75%+ marks) in STEM disciplines pursuing or seeking to pursue PhD at recognized Indian research institutions (IITs, IMSC, IISER, TIFR, CSIR labs, central universities) are eligible.",
    },
    {
      question: "What is the monthly fellowship amount?",
      answer: "Monthly fellowship ranges from ₹25,000-45,000 for BTech/BSc entry-level scholars, ₹35,000-60,000 for MTech/MSc graduates, and ₹50,000-80,000 for exceptional researchers with proven publications and research track record.",
    },
    {
      question: "What is the annual research grant amount?",
      answer: "Annual research grant ranges from ₹3,00,000 to ₹5,00,000 per annum, utilized flexibly for research expenses including equipment, chemicals, travel, conference participation, and research materials.",
    },
    {
      question: "Can I get international travel support?",
      answer: "Yes, PMRF provides ₹2,00,000-4,00,000 annually for international travel including conference presentations, collaborative research visits to premier institutions, and research internships abroad.",
    },
    {
      question: "What are the eligible research areas?",
      answer: "Priority research areas include Artificial Intelligence/Machine Learning, Quantum Computing, Biotechnology, Advanced Materials, Renewable Energy, Space Technology, Climate Science, Nanotechnology, Semiconductors, and other frontier STEM domains.",
    },
    {
      question: "Which institutions' PhD programs are eligible?",
      answer: "PhD programs at IITs, Central Universities, IMSC, IISER, NCCS, TIFR, CSIR laboratories, and other nationally important research institutions recognized by MHRD/Ministry of Education are eligible.",
    },
    {
      question: "Can I apply if I'm not yet pursuing a PhD?",
      answer: "Yes, fresh graduates with strong academic credentials (80%+ marks) can apply with admission letters from eligible institutions. PMRF fellowship can support the entire doctoral program once admitted.",
    },
    {
      question: "What is the duration of the fellowship?",
      answer: "Fellowship duration typically covers the entire PhD program period (3-5 years) or 5 years whichever is shorter. Extension may be possible based on performance review and research progress.",
    },
    {
      question: "Is NRI/diaspora participation allowed?",
      answer: "Yes, NRI and diaspora researchers with exceptional credentials are considered. However, preference is given to Indian citizens. NRI candidates must demonstrate commitment to pursue research in India for minimum 5 years post-fellowship.",
    },
    {
      question: "What is the selection process?",
      answer: "Selection is through rigorous evaluation of academic credentials (marks, qualifications), research proposal quality, publications, reference letters from advisors, and interview by expert committee assessing research potential and commitment.",
    },
    {
      question: "How is the annual research grant utilized?",
      answer: "The ₹3,00,000-5,00,000 annual research grant can be used for research expenses, equipment procurement, conference travel, publication fees, research materials, and other research-related costs. Flexibility in utilization per research requirements.",
    },
    {
      question: "What publication support is provided?",
      answer: "PMRF covers publication costs in top-tier international journals including open-access fees (₹50,000-1,50,000 per paper), conference presentation travel and registration, and assistance in identifying suitable journals.",
    },
    {
      question: "Is there health insurance coverage?",
      answer: "Yes, comprehensive health insurance coverage of ₹5,00,000-10,00,000 per annum is provided, including medical care, accident coverage, disability benefits, and optional dependent coverage.",
    },
    {
      question: "What happens after the fellowship period ends?",
      answer: "PMRF fellows are facilitated for faculty positions at premier institutions (IITs, central universities, CSIR labs), eligible for independent research grants (SERB, DST, DBT), and integrated into alumni network for continued mentorship and collaboration.",
    },
    {
      question: "Is there a commitment to work in India?",
      answer: "Yes, PMRF fellows commit to pursue research and work in India for minimum 5 years post-fellowship completion. This commitment ensures research talent benefits Indian institutions and research ecosystem.",
    },
    {
      question: "What documents are mandatory for application?",
      answer: "Mandatory documents include: (1) Application form, (2) Academic transcripts (80%+ marks), (3) PhD enrollment/admission letter, (4) Research proposal (5-10 pages), (5) Proof of citizenship, (6) 3-4 reference letters, (7) Comprehensive CV, (8) Publication list.",
    },
    {
      question: "How can I apply for PMRF?",
      answer: "Visit the PMRF portal (https://pmrf.niti.gov.in/), register with email and mobile number, complete the application form, upload all required documents, submit research proposal, and track application status online.",
    },
  ],
  source: "sample",
};
