import type { Scheme } from "@/lib/types";

export const collaborativeResearchScheme: Scheme = {
  id: "collaborative-research-scheme",
  slug: "collaborative-research-scheme",
  name: "Collaborative Research Scheme (CRS)",
  shortName: "CRS",
  summary: "A central research funding initiative promoting collaborative research between academic institutions, government laboratories, and industry partners to address critical national challenges and accelerate innovation in science, technology, and engineering domains.",
  description: "The Collaborative Research Scheme (CRS) is a flagship program designed to foster collaborative research partnerships and strengthen the research ecosystem in India. The scheme encourages researchers from different institutions and sectors to work together on interdisciplinary research projects that have practical applications and address societal challenges. It provides substantial financial support ranging from ₹10 lakhs to ₹3 crores depending on project scope, duration, and complexity. The scheme emphasizes outcome-oriented research with tangible deliverables, capacity building, and technology transfer. It supports research in STEM domains including physical sciences, biological sciences, engineering, and allied disciplines. The scheme facilitates knowledge exchange, infrastructure sharing, and mentor-mentee relationships between experienced and early-career researchers. Projects can span 2-5 years with flexible implementation timelines.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Researcher Status",
      value: "Postdoctoral researcher, early-career scientist, faculty member, or research scientist with PhD in relevant discipline",
      type: "education",
    },
    {
      label: "Institutional Affiliation",
      value: "Associated with recognized academic institution, government laboratory, or CSIR center; co-PI from industry or another institute",
      type: "occupation",
    },
    {
      label: "Research Experience",
      value: "Minimum 3-5 years postdoctoral research experience or 2-3 years faculty experience; demonstrated research productivity",
      type: "occupation",
    },
    {
      label: "Project Specification",
      value: "Collaborative research project with clear objectives, deliverables, and inter-institutional/sector partnership; addressing national priority areas",
      type: "other",
    },
    {
      label: "Financial Clearance",
      value: "Host institution must be a government-recognized university, national laboratory, or research institute with financial audit compliance",
      type: "occupation",
    },
    {
      label: "Previous Funding",
      value: "No restriction on previous grants; new proposals encouraged; no simultaneous funding for identical project from other schemes",
      type: "other",
    },
    {
      label: "Documentation Compliance",
      value: "All applicants must submit complete documentation including institutional clearance, conflict-of-interest statement, and collaborative agreement",
      type: "other",
    },
  ],
  benefits: [
    {
      label: "Research Grant",
      value: "₹10,00,000 - ₹3,00,00,000 based on project scope (typically ₹25,00,000 for 3-year projects)",
    },
    {
      label: "Consumables and Materials",
      value: "₹15,00,000 - ₹60,00,000 for research materials, chemicals, and consumable supplies over project period",
    },
    {
      label: "Equipment Procurement",
      value: "Up to 40% of project cost for major equipment (₹40,00,000 - ₹1,20,00,000) with approval; equipment becomes institutional asset",
    },
    {
      label: "Travel and Conference Support",
      value: "₹1,50,000 - ₹4,00,000 annually for national and international conference participation and collaborative visits",
    },
    {
      label: "Personnel Support",
      value: "₹10,00,000 - ₹25,00,000 annually for 2-3 research fellows, JRF, or SRF salary support as per DST norms",
    },
    {
      label: "Contingency Fund",
      value: "5% of project cost (₹50,00,000 - ₹15,00,000) for unforeseen research expenses and administrative costs",
    },
    {
      label: "Publication and Dissemination",
      value: "₹10,00,000 - ₹30,00,000 for research publication, open-access fees, seminar organization, and knowledge dissemination",
    },
    {
      label: "Mentorship and Training",
      value: "Support for organizing workshops, training programs, and capacity-building activities for junior researchers and students",
    },
    {
      label: "Infrastructure Access",
      value: "Access to national research facilities, high-performance computing centers, and laboratory infrastructure at partner institutions",
    },
    {
      label: "International Collaboration Support",
      value: "₹5,00,000 - ₹15,00,000 for international researcher visits, collaborative field studies, and research exchange programs",
    },
    {
      label: "Patent and IP Protection",
      value: "Institutional support for patent filing, intellectual property protection, and technology commercialization assistance",
    },
    {
      label: "Extension Opportunity",
      value: "Possibility of project extension for 1-2 years based on performance and pending milestones",
    },
    {
      label: "Networking and Collaboration Platform",
      value: "Access to national collaborative research network, research data repository, and inter-institutional knowledge-sharing platform",
    },
  ],
  requiredDocuments: [
    {
      name: "Detailed Project Proposal",
      mandatory: true,
      note: "Minimum 30-40 pages including objectives, methodology, expected outcomes, timelines, and budget details in prescribed format",
    },
    {
      name: "CV of Principal Investigator",
      mandatory: true,
      note: "Latest 3-page CV with publication list, research grants, and collaborative projects",
    },
    {
      name: "CV of Co-Investigator(s)",
      mandatory: true,
      note: "CVs from all co-PIs and collaborating researchers from partner institutions",
    },
    {
      name: "Collaborative Research Agreement",
      mandatory: true,
      note: "Signed MOU between participating institutions outlining roles, responsibilities, funding distribution, and IP sharing",
    },
    {
      name: "Institutional Clearance Certificate",
      mandatory: true,
      note: "Authorization from host institution head/registrar approving the research proposal and researcher details",
    },
    {
      name: "Conflict of Interest Declaration",
      mandatory: true,
      note: "Signed document disclosing any conflicts of interest, dual affiliations, or external funding relationships",
    },
    {
      name: "Detailed Budget Justification",
      mandatory: true,
      note: "Item-wise budget breakdown with cost analysis for equipment, consumables, personnel, travel, and overhead",
    },
    {
      name: "Feasibility Report",
      mandatory: true,
      note: "Technical feasibility assessment of project with risk analysis and mitigation strategies",
    },
    {
      name: "Previous Research Publications",
      mandatory: false,
      note: "3-5 representative published papers or preprints demonstrating research competence in the proposed domain",
    },
    {
      name: "Letters of Support from Partner Institutions",
      mandatory: false,
      note: "Letters confirming collaborative commitment, resource availability, and institutional support from all partner organizations",
    },
    {
      name: "Institutional Financial Compliance Certificate",
      mandatory: false,
      note: "Audit report or financial certificate confirming institutional compliance with government norms",
    },
    {
      name: "Data Management and Sharing Plan",
      mandatory: false,
      note: "Plan describing how research data will be managed, stored, shared, and archived for public access",
    },
    {
      name: "Ethics Clearance (if applicable)",
      mandatory: false,
      note: "IRB approval or ethics committee certificate for research involving human subjects or animals",
    },
  ],
  officialPortalUrl: "https://www.dst.gov.in/",
  ministry: "Department of Science and Technology (DST), Government of India",
  applicationMode: ["online"],
  tags: [
    "research",
    "fellowship",
    "collaborative",
    "STEM",
    "science",
    "technology",
    "engineering",
    "postdoctoral",
    "early-career",
    "faculty",
    "central",
    "India",
    "innovation",
    "research grants",
    "inter-institutional",
  ],
  faqs: [
    {
      question: "Who is eligible to apply for the Collaborative Research Scheme?",
      answer: "PhD holders working as postdoctoral researchers, early-career faculty, research scientists, or senior scientists with minimum 3-5 years research experience. Applicants must be affiliated with recognized academic institutions, national laboratories, or CSIR centers. Applications are encouraged as PI or co-PI with collaborative partners from other institutions or industry sectors.",
    },
    {
      question: "What is the maximum funding available under CRS?",
      answer: "Maximum project cost ranges from ₹10 lakhs to ₹3 crores depending on project scope and duration. Typical 3-year collaborative projects receive ₹15-25 lakhs. Large multi-institutional or multi-disciplinary projects can secure up to ₹1-3 crores. Equipment procurement can go up to 40% of project cost.",
    },
    {
      question: "Is collaboration with industry partners mandatory?",
      answer: "While collaboration between academic institutions is mandatory, industry participation is optional but highly encouraged. Industry collaboration can enhance project outcomes, scalability, and commercialization potential. At minimum, multi-institutional academic partnerships are required.",
    },
    {
      question: "What is the project duration under CRS?",
      answer: "Projects typically run for 2-5 years. Minimum duration is 2 years; maximum standard duration is 5 years. Extensions of 1-2 years are possible based on performance review and pending milestones with justification.",
    },
    {
      question: "Can I apply for CRS if I'm receiving funding from another government scheme?",
      answer: "Simultaneous funding for the identical research project from multiple government schemes is not permitted. However, supplementary funding from different schemes for complementary activities can be considered. Full disclosure of all funding sources is mandatory.",
    },
    {
      question: "What happens to equipment purchased under the scheme?",
      answer: "All equipment and materials purchased become permanent assets of the host institution. However, collaborative use across partner institutions as per MOU is encouraged. Equipment cannot be transferred to personal use or sold without department approval.",
    },
    {
      question: "Are there specific research domains or thrust areas?",
      answer: "Schemes prioritize research addressing national challenges including climate change, renewable energy, healthcare, agriculture, digital infrastructure, and advanced manufacturing. STEM domains including physical sciences, biological sciences, engineering, and allied disciplines are eligible. Interdisciplinary and applied research is encouraged.",
    },
    {
      question: "Can I hire research staff like JRF or SRF under this scheme?",
      answer: "Yes, up to ₹10-25 lakhs annually can be allocated for hiring 2-3 research fellows (JRF/SRF) as per DST prescribed salary scales. Staff hired become employees of the host institution during the project period. Foreign researchers cannot be hired as JRF/SRF but can be visiting collaborators.",
    },
    {
      question: "What is the evaluation process and timeline?",
      answer: "Applications undergo 2-stage evaluation: (1) Scientific merit review by domain experts, (2) Financial and institutional verification. Evaluation typically takes 3-4 months. Selected projects receive approval and first installment within 6 months of selection.",
    },
    {
      question: "Are international collaborations supported?",
      answer: "Yes, international collaborations are supported with ₹5-15 lakhs for international researcher visits, collaborative field studies, and research exchange programs. However, the host institution must be India-based, and a majority of work should be conducted in India.",
    },
    {
      question: "What are the reporting and milestone requirements?",
      answer: "Projects require half-yearly progress reports, annual reports with publications, and end-of-project final report. Milestones include submission of research papers, presentations at conferences, and demonstration of outcomes. Failure to meet milestones may affect funding continuation.",
    },
    {
      question: "Can I publish research outputs from the scheme?",
      answer: "Yes, publication is encouraged. All publications must acknowledge DST funding and the scheme. Open-access publishing is preferred. Publication costs including open-access fees (up to ₹30,000 per paper) can be claimed under the scheme.",
    },
    {
      question: "What if my project requires international equipment?",
      answer: "Equipment procurement up to 40% of project cost can include imports with department approval. Custom duties are typically waived for research equipment. The procurement process takes additional time (4-8 weeks) and requires specific approval for non-Indian suppliers.",
    },
    {
      question: "Can I include a postdoctoral fellowship component for junior researchers?",
      answer: "Yes, postdoctoral fellowships at ₹35,000-50,000 per month for up to 2-3 researchers can be included as part of project staffing. Fellowships include HRA, conveyance, and medical benefits. Fixed-term employment contracts are provided.",
    },
    {
      question: "Is there flexibility in fund utilization across budget heads?",
      answer: "Limited flexibility is allowed (typically up to 10-15% reallocation) across budget categories with written justification and department approval. Major changes in project scope require formal no-cost extension or amendment request.",
    },
    {
      question: "What support is available for patent filing and IP protection?",
      answer: "The scheme supports patent filing costs (typically ₹50,000-100,000 per patent across multiple countries), technology licensing consultancy, and IP management. A portion of commercialization revenue may be shared with researchers per institutional policy.",
    },
    {
      question: "Can PhD students or postdoctoral fellows apply as PI?",
      answer: "PhD students cannot be PI; they can be research team members. Recent PhD holders (within 3-5 years post-PhD) can apply as PI if they hold faculty positions. Postdoctoral researchers can apply as PI only if they have independent research positions.",
    },
    {
      question: "What is the funding release schedule during the project period?",
      answer: "Funding is typically released in installments: 50% at project start, 30% at mid-term review (after 12-18 months), 20% at final stage (after satisfactory progress review). Installment schedule may vary based on project duration and milestones.",
    },
  ],
  source: "sample",
};
