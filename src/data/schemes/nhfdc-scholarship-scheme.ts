import type { Scheme } from "@/lib/types";

export const nhfdcScholarshipScheme: Scheme = {
  id: "nhfdc-scholarship-scheme",
  slug: "nhfdc-scholarship-scheme-for-students-with-disabilities",
  name: "NHFDC Scholarship Scheme for Students with Disabilities",
  shortName: "NHFDC Scholarship",
  summary:
    "Up to 2,500 scholarships per year providing maintenance allowance of ₹2,500–₹3,000/month, fee reimbursement, and assistive device grants for students with 40%+ disability pursuing professional or technical graduation and post-graduation courses, with a family income ceiling of ₹3 lakh per annum.",
  description:
    "The National Handicapped Finance and Development Corporation (NHFDC) Scholarship Scheme is implemented by the National Handicapped Finance and Development Corporation under the Ministry of Social Justice & Empowerment, Government of India. NHFDC operates two sub-schemes: the Trust Fund Scholarship (2,500 new scholarships per year) and the Scholarship Fund / National Fund (500 scholarships per year), together providing comprehensive financial support to students with disabilities pursuing higher education.\n\nThe scheme covers professional and technical graduation and post-graduation courses — including Engineering, Medical, Management, Law, Agriculture, Pharmacy, Nursing, and other recognised professional programmes — as well as M.Phil and Ph.D. programmes at recognised institutions across India. Beneficiaries receive reimbursement of non-refundable institutional fees as per AICTE/UGC norms or actuals, whichever is less, along with a monthly maintenance allowance.\n\nIn addition to the core scholarship, NHFDC provides specialised grants for aids and appliances tailored to different disability types: visually handicapped students can receive Braille equipment and laptops with screen reading software; hearing handicapped students can receive digital hearing aids and laptops with WiFi/Bluetooth; and orthopaedically handicapped students can receive laptops for academic use. These assistive device grants ensure students have the tools necessary for academic success.\n\nSelection is primarily based on academic merit and the level of disability, with a significant number of slots reserved for female candidates to ensure gender-inclusive educational growth. The scholarship is renewable annually subject to satisfactory academic performance. Applications are processed through the NHFDC portal (nhfdc.nic.in) and disbursement is made directly into the student's Aadhaar-linked bank account.",
  category: "disability",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Disability",
      value:
        "Must have a physical disability of 40% or more, as certified by a competent medical authority under the Persons with Disabilities Act, 1995",
      type: "other",
    },
    {
      label: "Nationality",
      value: "Must be an Indian national",
      type: "other",
    },
    {
      label: "Course level",
      value:
        "Must be pursuing professional or technical graduation, post-graduation, M.Phil, or Ph.D. courses at a recognised institution in India",
      type: "education",
    },
    {
      label: "Annual family income",
      value:
        "Total annual family income from all sources must not exceed ₹3,00,000 per annum",
      type: "income",
    },
    {
      label: "Academic performance",
      value:
        "Minimum 50% marks at higher secondary/graduation level for non-competitive admissions; competitive exam admits are eligible regardless of marks. Female students require minimum 45% marks",
      type: "education",
    },
    {
      label: "Exclusivity",
      value:
        "Must not be receiving any other scholarship or stipend for pursuing the same course. Scholarship awarded for one course only; a new scholarship may be awarded after completion of the current course",
      type: "other",
    },
  ],
  benefits: [
    "Maintenance allowance of ₹2,500/month (professional graduation) and ₹3,000/month (professional post-graduation)",
    "Book and stationery allowance of ₹6,000 per annum (graduation) and ₹10,000 per annum (post-graduation)",
    "Reimbursement of non-refundable institutional fees as per AICTE/UGC norms or actuals",
    "Braille equipment and typewriter of up to ₹10,000 for blind students",
    "Laptop or desktop with screen reading software of up to ₹40,000 for blind students",
    "Laptop or desktop with screen magnification software of up to ₹60,000 for low vision students",
    "Binaural digital programmable hearing aid of up to ₹50,000 plus ₹3,600 per annum for hearing impaired students",
    "Laptop or desktop with WiFi/Bluetooth of up to ₹70,000 for hearing impaired students",
    "Laptop or desktop of up to ₹40,000 for orthopaedically handicapped students",
    "Up to 2,500 new scholarships awarded annually (Trust Fund) plus 500 through the National Fund",
  ],
  requiredDocuments: [
    {
      name: "Disability Certificate",
      mandatory: true,
      note: "Attested copy issued by competent medical authority confirming 40% or more disability",
    },
    {
      name: "Income Certificate",
      mandatory: true,
      note: "Showing annual family income from all sources not exceeding ₹3,00,000",
    },
    { name: "Aadhaar Card", mandatory: true },
    { name: "Previous year's marksheet", mandatory: true },
    {
      name: "Course fee receipt",
      mandatory: true,
      note: "Duly paid during the current academic session",
    },
    { name: "Aadhaar-linked bank account details", mandatory: true },
    { name: "Passport-size photograph", mandatory: true },
    {
      name: "Bonafide / institution verification",
      mandatory: true,
    },
    {
      name: "Receipt/invoice of eligible assistive devices",
      mandatory: false,
      note: "Duly countersigned by authorised signatory of the institution, required for assistive device grants",
    },
  ],
  officialPortalUrl: "https://nhfdc.nic.in/",
  ministry:
    "National Handicapped Finance and Development Corporation (NHFDC) / Ministry of Social Justice & Empowerment",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "disability",
    "PwD",
    "divyangjan",
    "NHFDC",
    "trust fund",
    "national fund",
    "maintenance allowance",
    "fee reimbursement",
    "assistive devices",
    "laptop",
    "hearing aid",
    "braille",
    "professional courses",
    "technical courses",
    "all-india",
    "central",
  ],
  faqs: [
    {
      q: "What is the NHFDC Scholarship Scheme?",
      a: "It is a national initiative by the National Handicapped Finance and Development Corporation under the Ministry of Social Justice & Empowerment. It provides maintenance allowance, fee reimbursement, and assistive device grants to students with 40%+ disability pursuing professional or technical graduation and post-graduation courses. NHFDC operates two sub-schemes: the Trust Fund (2,500 scholarships/year) and the National Fund (500 scholarships/year).",
    },
    {
      q: "Who is eligible for the NHFDC Scholarship?",
      a: "Indian nationals with 40% or more disability (certified by competent medical authority), pursuing professional or technical graduation, post-graduation, M.Phil, or Ph.D. at a recognised institution in India, with annual family income not exceeding ₹3 lakh. Minimum 50% marks at higher secondary/graduation level is required for non-competitive admissions; competitive exam admits are eligible regardless of marks.",
    },
    {
      q: "How much is the scholarship amount?",
      a: "Professional graduation: ₹2,500/month maintenance + ₹6,000/year book allowance. Professional post-graduation: ₹3,000/month maintenance + ₹10,000/year book allowance. Additionally, non-refundable institutional fees are reimbursed as per AICTE/UGC norms.",
    },
    {
      q: "What assistive device grants are available?",
      a: "Blind students: Braille equipment (₹10,000) and laptop with screen reading software (₹40,000). Low vision: laptop with screen magnification software (₹60,000). Hearing impaired: digital hearing aid (₹50,000 + ₹3,600/year) and laptop with WiFi/Bluetooth (₹70,000). Orthopaedically handicapped: laptop (₹40,000).",
    },
    {
      q: "How do I apply?",
      a: "Register and apply online at the NHFDC portal (nhfdc.nic.in). Fill in the application form, upload required documents (disability certificate, income certificate, academic records, bank details), and submit. Disbursement is made directly to the student's Aadhaar-linked bank account.",
    },
    {
      q: "Is the scholarship renewable?",
      a: "Yes. The scholarship is renewable annually subject to satisfactory academic performance and consistent progress in the course.",
    },
    {
      q: "Can I receive this scholarship along with another one?",
      a: "No. A scholarship holder under this scheme cannot avail any other scholarship or stipend for pursuing the same course. However, a student awarded a scholarship for one course may be eligible for a new scholarship after completing it.",
    },
  ],
  source: "sample",
};
