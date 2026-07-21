import type { Scheme } from "@/lib/types";

export const inspireFacultyFellowship: Scheme = {
  id: "inspire-faculty-fellowship",
  slug: "inspire-faculty-fellowship-for-science-researchers",
  name: "INSPIRE Faculty Fellowship",
  shortName: "INSPIRE Faculty Fellowship",
  summary:
    "Prestigious central fellowship scheme by DST for meritorious science researchers and faculty members pursuing cutting-edge research in science, technology, engineering, and mathematics (STEM) fields.",
  description:
    "The INSPIRE Faculty Fellowship is a premier research funding scheme administered by the Department of Science and Technology (DST), Government of India, under the Scheme for Early Attraction of Talent for Science (INSPIRE) program. The fellowship is designed to attract India's top scientific talent and support early-career researchers in pursuing high-impact research across all STEM (Science, Technology, Engineering, Mathematics) disciplines. The scheme aims to nurture scientific excellence, foster innovation, and contribute to India's knowledge economy by providing young researchers with financial independence and institutional support. INSPIRE Faculty Fellowship provides comprehensive research funding including annual research grants, laboratory equipment support, travel grants for conference participation, and access to national research infrastructure. The fellowship recognizes the importance of early-career support in establishing independent research careers and contributing to global scientific advancement. Fellows receive institutional support, mentorship from senior scientists, and opportunities for national and international collaborations.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Age Limit",
      value: "Maximum 35 years of age as on the date of application (born on or after a specified date; relaxation of 5 years for SC/ST/OBC/PWD candidates)",
      type: "age",
    },
    {
      label: "Academic Qualification",
      value:
        "PhD in Science, Technology, Engineering, Mathematics, or related discipline from a recognized university/institute; must have completed PhD within last 3-4 years of application",
      type: "education",
    },
    {
      label: "Research Potential",
      value:
        "Demonstrated research capability through publications in peer-reviewed journals, patents, or significant research contributions during doctoral/postdoctoral research",
      type: "education",
    },
    {
      label: "Institutional Affiliation",
      value:
        "Must have formal research affiliation with recognized Indian institutions — colleges, universities, research institutes, or deemed universities; opportunity to establish independent research career",
      type: "other",
    },
    {
      label: "Research Focus",
      value:
        "Research should be in frontier areas of STEM and aligned with national priorities in science and technology; preference for interdisciplinary and translational research",
      type: "other",
    },
    {
      label: "Full-Time Commitment",
      value:
        "Must commit full-time to research; cannot hold other full-time positions during fellowship tenure",
      type: "other",
    },
    {
      label: "Citizenship",
      value: "Indian citizen or Person of Indian Origin (PIO/OCI); preference given to Indian citizens",
      type: "other",
    },
  ],
  benefits: [
    "Annual Research Grant: ₹30,00,000 per annum for research expenses (5-year fellowship)",
    "Equipment and Infrastructure Support: Up to ₹50,00,000 for laboratory setup, equipment purchase, and infrastructure development (one-time or phased)",
    "Contingency Grant: ₹5,00,000 per annum for miscellaneous research-related expenses",
    "International Conference Travel: ₹3,00,000 per annum for attending/presenting at international conferences and collaborative research",
    "Salary Support: Direct institutional support for fellow's salary/position at host institution (varies by institution type)",
    "Access to National Research Infrastructure: Free/subsidized access to national laboratories, computing facilities, and research centers (CSIR, IIT, IMSC, etc.)",
    "International Collaboration Support: ₹5,00,000 for international research collaborations and visiting positions at overseas institutions",
    "Mentorship from Senior Scientists: Access to experienced researchers for guidance and research advancement",
    "Publication Support: Preference in high-impact journals and support for open-access publication fees",
    "Personnel Support: Funds for employing research associates, technicians, and postdoctoral researchers",
    "No service bond or employment commitment after fellowship",
    "Flexibility in research design and interdisciplinary approaches",
    "Networking with national and international scientific community",
  ],
  requiredDocuments: [
    { name: "Completed application form (prescribed DST format)", mandatory: true },
    { name: "PhD degree certificate and transcript", mandatory: true },
    { name: "Research proposal (10-15 pages)", mandatory: true, note: "Detailed research plan for 5-year fellowship period with objectives, methodology, expected outcomes, and budget justification" },
    { name: "Detailed Curriculum Vitae (3-5 pages maximum)", mandatory: true, note: "Including research experience, publications, patents, awards, research contributions, and citations" },
    { name: "List of Publications", mandatory: true, note: "Copies of peer-reviewed research papers published in high-impact journals (minimum 3-5 papers)" },
    { name: "Letter of Support from Host Institution", mandatory: true, note: "Confirming research space, infrastructure support, and institutional commitment for 5-year tenure ⭐" },
    { name: "Letters of Recommendation (2-3 letters)", mandatory: true, note: "From thesis advisor, postdoctoral mentor, or senior researchers in the field" },
    { name: "Statement of Purpose (500-750 words)", mandatory: true, note: "Research vision, career goals, and how fellowship will advance scientific career" },
    { name: "Budget Justification (detailed breakdown)", mandatory: true, note: "Itemized budget for equipment, personnel, travel, consumables, and contingency" },
    { name: "Patents and Intellectual Property (if any)", mandatory: false, note: "Copies of patent applications or publications documenting IP contributions" },
    { name: "Aadhaar Card or National ID", mandatory: true },
    { name: "Bank Account Details and IFSC Code", mandatory: true, note: "For fellowship disbursement via Direct Benefit Transfer (DBT)" },
    { name: "Passport-sized photographs (2-3 copies)", mandatory: true },
    {
      name: "SC/ST/OBC/PWD Certificate (if applicable)",
      mandatory: false,
      note: "For availing age relaxation and category-based preference",
    },
  ],
  officialPortalUrl: "https://www.inspire.gov.in/",
  ministry: "Department of Science and Technology (DST), Government of India",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "INSPIRE",
    "science",
    "research",
    "STEM",
    "early-career",
    "faculty",
    "physics",
    "chemistry",
    "biology",
    "mathematics",
    "engineering",
    "technology",
    "DST",
    "innovation",
  ],
  faqs: [
    {
      q: "Who is eligible to apply for the INSPIRE Faculty Fellowship?",
      a: "Scientists with PhD in STEM fields, aged below 35 years (40 for SC/ST/OBC/PWD), having completed PhD within last 3-4 years, with demonstrated research publications, and formal affiliation with recognized Indian research institutions are eligible.",
    },
    {
      q: "What is the total funding provided under INSPIRE Faculty Fellowship?",
      a: "The fellowship provides ₹30 lakh per annum research grant for 5 years (₹1.5 crore total), plus one-time equipment support up to ₹50 lakh, making total support potentially ₹2 crore. Additionally, international travel, contingency grants, and personnel support are provided.",
    },
    {
      q: "What can I use the annual research grant (₹30 lakh per annum) for?",
      a: "The annual grant covers consumables, reagents, travel for field research, publication charges, conference registration, software licenses, research-related travel within India, and other direct research costs. Equipment purchases are covered separately through equipment grants.",
    },
    {
      q: "How much can I spend on equipment and infrastructure?",
      a: "Up to ₹50 lakh one-time support (or phased disbursement) is provided for laboratory setup, equipment purchase, and infrastructure development. Detailed equipment justification and procurement plan must be submitted.",
    },
    {
      q: "Can I use the international collaboration support (₹5 lakh) for overseas conference participation?",
      a: "Yes, the international collaboration grant can cover conference attendance, visiting researcher positions at foreign universities, collaborative research projects, and short-term research visits abroad. Prior DST approval required for planned spending.",
    },
    {
      q: "What is the fellowship tenure and can it be extended?",
      a: "The standard fellowship tenure is 5 years. Extension for an additional 2-3 years is possible in exceptional cases where research shows significant potential for breakthrough discoveries and institutional support continues. Extension is not automatic and requires merit-based review.",
    },
    {
      q: "What is the application deadline?",
      a: "INSPIRE Faculty Fellowship typically accepts applications once per year, usually with a deadline in May-June. Check the DST INSPIRE website (inspire.gov.in) for exact 2026 application dates, announcement details, and submission deadlines.",
    },
    {
      q: "How do I apply?",
      a: "Visit inspire.gov.in, navigate to Faculty Fellowship, register, fill the online application form with research proposal, upload CV, publications, host institution letter, recommendation letters, and budget justification, then submit for DST review.",
    },
    {
      q: "What research areas and fields are eligible?",
      a: "All STEM fields are eligible including: Physics, Chemistry, Biology, Mathematics, Computer Science, Engineering, Materials Science, Nanotechnology, Earth Sciences, Environmental Science, Information Technology, Biotechnology, Astronomy, and related interdisciplinary fields.",
    },
    {
      q: "Can I apply if my PhD is from a foreign university?",
      a: "Yes, PhDs from recognized foreign universities are eligible if the degree is equivalent to Indian PhD standards and recognized by Association of Indian Universities (AIU). You must have Indian institutional affiliation at the time of application.",
    },
    {
      q: "What should my research proposal include?",
      a: "The 10-15 page research proposal should include: (1) Research objectives and significance, (2) Current status and preliminary results, (3) Detailed 5-year research plan, (4) Methodology and approach, (5) Expected outcomes and deliverables, (6) Timeline, (7) Budget breakdown, and (8) How research aligns with national priorities.",
    },
    {
      q: "Is the host institution letter mandatory?",
      a: "Yes, a support letter from the host institution (college/university/research institute) is critical. It must confirm research space, infrastructure, institutional commitment, and commitment to continue support for the 5-year tenure. ⭐",
    },
    {
      q: "Can I change my host institution during the fellowship?",
      a: "Institutional change is not easily permitted during the fellowship tenure. However, in exceptional cases with strong justification and DST approval, change is possible provided the new institution provides equal or better research support.",
    },
    {
      q: "Do I need to teach or perform administrative duties during the fellowship?",
      a: "The fellowship is for full-time research. Teaching 4-8 hours per week or minimal administrative duties (not exceeding 20% effort) are permissible, but the primary focus must remain on research.",
    },
    {
      q: "What are the merit review and selection criteria?",
      a: "Selection based on: Research proposal quality and innovation (35%), Publications and research track record (30%), Institutional support and infrastructure (20%), Alignment with national priorities (10%), and Career potential (5%).",
    },
    {
      q: "Is there any requirement to publish or file patents?",
      a: "While not mandatory, fellows are strongly encouraged to publish in high-impact journals and file patents when applicable. Publications and IP generation are tracked as research outcomes and impact indicators.",
    },
    {
      q: "Do I need to submit annual progress reports?",
      a: "Yes, fellows must submit annual research progress reports documenting research milestones, publications, conference presentations, patents filed, funds utilized, and research outcomes. Mid-term and final evaluations are also conducted.",
    },
    {
      q: "What happens after the 5-year fellowship ends?",
      a: "After fellowship completion, there is no employment obligation or service requirement. You are free to pursue independent academic positions, continue research at other institutions, take up industry positions, or any other career path. INSPIRE alumni remain part of the INSPIRE scientific network.",
    },
  ],
  source: "sample",
};
