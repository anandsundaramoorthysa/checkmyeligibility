import type { Scheme } from "@/lib/types";

export const mukhyamantriKanyaUtthanYojanaIntermediate: Scheme = {
  id: "mukhyamantri-kanya-utthan-yojana-intermediate",
  slug: "mukhyamantri-kanya-utthan-yojana-intermediate",
  name: "Mukhyamantri Kanya Utthan Yojana – Intermediate (Bihar)",
  shortName: "MKUY Intermediate Bihar",
  summary:
    "Bihar government scheme providing ₹25,000 to unmarried girls who pass the Class 12 (Intermediate) examination from a Bihar board in the first division, to promote girls' education.",
  description:
    "The Mukhyamantri Kanya Utthan Yojana – Intermediate is a state government scheme launched by the Government of Bihar to encourage girls to pursue and complete secondary education. Under this scheme, a one-time incentive of ₹25,000 is awarded to unmarried girl students who pass the Bihar Board of Secondary Education (BSEB) Intermediate (Class 12) examination with First Division (60% and above). Girls who pass in Second Division receive ₹10,000 (in some notification cycles). The scheme is implemented through the Education Department, Bihar, and payments are made directly to the beneficiary's bank account through the Direct Benefit Transfer (DBT) mechanism using the Medhasoft portal. The scheme is separate from the graduation-level incentive (Mukhyamantri Kanya Utthan Yojana – Graduation) which provides ₹50,000 upon completion of graduation. The intermediate incentive is exclusively for unmarried girls, promoting delayed marriage and continued education.",
  category: "scholarship",
  level: "state",
  states: ["bihar"],
  eligibility: [
    {
      label: "Gender",
      value: "Must be female",
      type: "gender",
    },
    {
      label: "Marital Status",
      value: "Must be unmarried at the time of passing the Intermediate examination",
      type: "other",
    },
    {
      label: "Academic Qualification",
      value:
        "Must have passed the Bihar Board (BSEB) Intermediate (Class 12) examination with First Division (60% or above). Second Division passers (45%-59%) may receive a reduced incentive in applicable notification cycles.",
      type: "education",
    },
    {
      label: "Domicile",
      value: "Must be a permanent resident of Bihar",
      type: "other",
    },
    {
      label: "Board",
      value: "Must have appeared through Bihar School Examination Board (BSEB) for the Intermediate examination",
      type: "other",
    },
    {
      label: "Bank Account",
      value: "Must have a personal bank account (preferably with a nationalised bank, Aadhaar-linked)",
      type: "other",
    },
  ],
  benefits: [
    "One-time cash incentive of ₹25,000 for First Division passers (60% and above)",
    "One-time cash incentive of ₹10,000 for Second Division passers (45%-59%) as per applicable notifications",
    "Direct bank transfer via DBT through the Medhasoft portal",
    "No intermediary — funds sent directly to the student's bank account",
  ],
  requiredDocuments: [
    { name: "BSEB Intermediate mark sheet (First Division / Second Division as applicable)", mandatory: true },
    { name: "Intermediate admit card / registration card", mandatory: true },
    { name: "Aadhaar Card", mandatory: true },
    { name: "Bank passbook (front page with name, account number, IFSC code)", mandatory: true, note: "Account should be in the student's own name, Aadhaar-linked" },
    { name: "Permanent residence certificate / domicile certificate (Bihar)", mandatory: true },
    { name: "Passport-sized photograph", mandatory: true },
    { name: "Mobile number linked to Aadhaar (for OTP verification)", mandatory: true },
    { name: "Self-declaration of unmarried status", mandatory: true },
  ],
  officialPortalUrl: "https://medhasoft.bih.nic.in/",
  ministry: "Education Department, Government of Bihar",
  applicationMode: ["online"],
  tags: [
    "Bihar",
    "girls education",
    "Intermediate",
    "Class 12",
    "state scholarship",
    "unmarried girls",
    "BSEB",
    "Mukhyamantri Kanya Utthan",
    "Medhasoft",
    "first division",
    "incentive",
    "DBT",
    "merit-based",
  ],
  faqs: [
    {
      q: "Who can apply for the Mukhyamantri Kanya Utthan Yojana – Intermediate?",
      a: "Unmarried girl students who are permanent residents of Bihar and have passed the BSEB Intermediate examination with First Division (60% and above) are eligible.",
    },
    {
      q: "What is the amount given under this scheme?",
      a: "First Division passers receive ₹25,000 as a one-time incentive. In some notified cycles, Second Division passers (45%-59%) receive ₹10,000.",
    },
    {
      q: "What does 'First Division' mean for this scheme?",
      a: "First Division means securing 60% or more marks in aggregate in the Bihar Board Intermediate examination.",
    },
    {
      q: "How is this scheme different from the graduation-level incentive?",
      a: "The Mukhyamantri Kanya Utthan Yojana – Intermediate provides ₹25,000 for passing Class 12, while the Graduation-level scheme provides ₹50,000 for completing a bachelor's degree. Both are separate and can be availed independently.",
    },
    {
      q: "Is the scheme available to students from private schools or CBSE/ICSE boards?",
      a: "No. Only students who appeared through the Bihar School Examination Board (BSEB) for the Intermediate examination are eligible.",
    },
    {
      q: "How do I apply?",
      a: "Applications are submitted through the Medhasoft portal (medhasoft.bih.nic.in). After the BSEB result is declared, the portal opens for eligible candidates. You need to register with your roll number, enter bank and Aadhaar details, and submit.",
    },
    {
      q: "Is there any income criterion?",
      a: "No. This scheme has no income limit — it is exclusively merit- and gender-based (First Division pass, female, unmarried, Bihar domicile).",
    },
    {
      q: "What if my name, date of birth, or other details in BSEB records don't match my Aadhaar?",
      a: "Discrepancies between BSEB records and Aadhaar must be corrected before applying. Visit the BSEB district office or the Medhasoft helpdesk for correction guidance.",
    },
    {
      q: "Can I apply if I am married?",
      a: "No. The scheme is strictly for unmarried girls. If you get married after passing the Intermediate examination, you must still self-declare your marital status at the time of application, which must be the time of the exam.",
    },
    {
      q: "When will I receive the money?",
      a: "After successful application and verification, the amount is transferred to your bank account via DBT within 60-90 days. Processing times may vary based on departmental workload.",
    },
  ],
  source: "sample",
};
