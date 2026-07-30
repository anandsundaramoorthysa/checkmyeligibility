import type { Scheme } from "@/lib/types";

export const creditGuaranteeFundSchemeForEducationLoans: Scheme = {
  id: "credit-guarantee-fund-scheme-for-education-loans",
  slug: "credit-guarantee-fund-scheme-for-education-loans",
  name: "Credit Guarantee Fund Scheme for Education Loans (CGFSEL)",
  shortName: "CGFSEL",
  summary:
    "Government-backed credit guarantee enabling collateral-free education loans up to ₹7.5 lakh — 75% of default amount covered by the Fund, with no third-party guarantee required for loans up to ₹4 lakh.",
  description:
    "The Credit Guarantee Fund Scheme for Education Loans (CGFSEL), notified on 16 September 2015, is a government-backed guarantee mechanism that encourages banks to sanction education loans to meritorious students without requiring collateral security or third-party guarantees. The scheme is administered by the Credit Guarantee Fund for Education Loans, with National Credit Guarantee Trustee Company Ltd. (NCGTC) acting as the Trustee.\n\nUnder CGFSEL, if a student defaults on their education loan, the government (through NCGTC) compensates the bank for 75% of the amount in default. This guarantee cover applies to education loans up to ₹7,50,000 sanctioned under the Indian Banks' Association (IBA) Model Education Loan Scheme.\n\nFor loans up to ₹4 lakh, neither collateral nor third-party guarantee is required from the student. For loans between ₹4 lakh and ₹7.5 lakh, no tangible collateral is needed, though a third-party guarantee (non-property based) may be required by the bank. Loans above ₹7.5 lakh are not covered under this scheme and require tangible collateral.\n\nThe scheme covers professional and technical courses at NAAC/NBA accredited institutions, Institutions of National Importance (IITs, IIMs, NITs, AIIMS, etc.), UGC/AICTE/AIBMS/ICMR-recognized institutions, and recognised foreign universities. Expenses covered include tuition fees, hostel fees, examination and library fees, books and equipment, travel expenses for abroad studies, caution deposit, and insurance premium.\n\nThe moratorium period is the course duration plus one year (or six months after gaining employment, whichever is earlier). Repayment can be spread over 10–15 years after the moratorium. The maximum interest rate is capped at 2% above the Repo Linked Lending Rate (RLLR).\n\nApplications are made through any participating bank — public sector, private sector, regional rural banks, or foreign banks that have executed agreements with NCGTC. The Vidya Lakshmi Portal (vidyalakshmi.co.in) and PM-Vidyalaxmi Portal (pmvidyalaxmi.co.in) allow students to apply to multiple banks simultaneously.",
  category: "education-loan",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Citizenship",
      value: "Indian national",
      type: "other",
    },
    {
      label: "Course & Institution",
      value:
        "Professional or technical course at a NAAC/NBA accredited institution, Institution of National Importance (IIT, IIM, NIT, AIIMS, etc.), UGC/AICTE/AIBMS/ICMR-recognised institution, or a recognised foreign university",
      type: "education",
    },
    {
      label: "Loan type",
      value:
        "Education loan sanctioned under the IBA Model Education Loan Scheme without collateral security and third-party guarantee, for amounts up to ₹7,50,000",
      type: "other",
    },
    {
      label: "Borrower structure",
      value:
        "Student is the borrower; parent or guardian is the co-borrower. Married persons may have spouse or parent(s)-in-law as joint borrower",
      type: "other",
    },
    {
      label: "KYC requirement",
      value:
        "At least one valid identity document — PAN Card, Voter ID, Aadhaar Number, or Driving License — is mandatory",
      type: "other",
    },
  ],
  benefits: [
    "Collateral-free education loans up to ₹7.5 lakh — no asset mortgaging required",
    "No third-party guarantee required for loans up to ₹4 lakh",
    "75% of the amount in default is covered by the Guarantee Fund",
    "Guarantee cover runs through the entire loan tenure from the date of AGF payment",
    "Moratorium period: course duration + 1 year (or 6 months after employment, whichever is earlier)",
    "Repayment tenure of 10–15 years after the moratorium period",
    "Maximum interest rate capped at 2% above Repo Linked Lending Rate (RLLR)",
    "Margin money: Nil for loans up to ₹4 lakh; 5% (India) / 15% (abroad) for ₹4–7.5 lakh",
    "Covers tuition, hostel, exam/library/lab fees, books, equipment, travel, caution deposit, and insurance",
    "Guarantee claims settled by NCGTC within 30 days of eligible claim submission",
  ],
  requiredDocuments: [
    { name: "Admission / Offer Letter", mandatory: true, note: "From a recognised institution" },
    { name: "Identity Proof (Aadhaar / PAN / Voter ID / Driving License)", mandatory: true, note: "At least one valid document required" },
    { name: "Address Proof", mandatory: true },
    { name: "Academic Records (10th, 12th, graduation marksheets)", mandatory: true },
    { name: "Entrance Exam Results", mandatory: false, note: "If admission is entrance-based" },
    { name: "Income Certificate of Parent / Guardian", mandatory: true },
    { name: "EWS Certificate", mandatory: false, note: "Required if applicable for interest subsidy" },
    { name: "Bank Account Details", mandatory: true, note: "Aadhaar-linked account" },
    { name: "Passport-size Photographs", mandatory: true },
    { name: "Birth Certificate", mandatory: false, note: "For identity verification" },
    { name: "Co-borrower KYC and Income Proof", mandatory: true, note: "Parent or guardian documents" },
    { name: "Previous Loan Statements", mandatory: false, note: "If applicant has an existing education loan" },
  ],
  officialPortalUrl: "https://vidyalakshmi.co.in/",
  ministry: "Department of Higher Education / Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "education loan",
    "credit guarantee",
    "CGFSEL",
    "collateral-free",
    "no collateral",
    "NCGTC",
    "IBA model",
    "Vidya Lakshmi",
    "PM-Vidyalaxmi",
    "all-india",
    "central",
    "professional course",
    "technical course",
    "graduate",
    "postgraduate",
    "studies abroad",
  ],
  faqs: [
    {
      q: "What is CGFSEL and how does it help students?",
      a: "CGFSEL is a government-backed credit guarantee scheme that enables banks to provide education loans up to ₹7.5 lakh without requiring collateral or third-party guarantees. If a student defaults, the government compensates the bank for 75% of the loss.",
    },
    {
      q: "Do I need to apply separately for the guarantee?",
      a: "No. The guarantee cover is handled entirely by the bank. The student only needs to apply for an education loan at a participating bank. The bank applies to NCGTC for guarantee cover and pays the Annual Guarantee Fee.",
    },
    {
      q: "What is the maximum loan amount covered?",
      a: "Education loans up to ₹7,50,000 (₹7.5 lakh) are covered under CGFSEL. Loans above this amount require tangible collateral and are not covered by the guarantee.",
    },
    {
      q: "Is there any margin money required?",
      a: "For loans up to ₹4 lakh, there is no margin money. For loans between ₹4 lakh and ₹7.5 lakh, the margin is 5% for studies in India and 15% for studies abroad.",
    },
    {
      q: "What courses are eligible?",
      a: "Professional and technical courses at NAAC/NBA accredited institutions, Institutions of National Importance (IITs, IIMs, NITs, AIIMS, etc.), UGC/AICTE/AIBMS/ICMR-recognised institutions, and recognised foreign universities.",
    },
    {
      q: "What is the repayment schedule?",
      a: "The moratorium period covers the course duration plus one year (or six months after getting a job, whichever is earlier). After the moratorium, the loan is repayable over 10–15 years.",
    },
    {
      q: "How do I apply?",
      a: "Apply for an education loan at any participating bank (public sector, private, RRB, or foreign bank). You can also use the Vidya Lakshmi Portal (vidyalakshmi.co.in) or PM-Vidyalaxmi Portal (pmvidyalaxmi.co.in) to apply to multiple banks at once.",
    },
  ],
  source: "sample",
};
