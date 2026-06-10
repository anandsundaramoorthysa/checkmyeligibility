import type { Certificate } from "@/lib/types";

/**
 * Phase-1 sample catalogue of common Indian government certificates.
 * Issuance is largely a state-subject handled through state e-District /
 * e-Sevai portals; representative portal links are used here. Every record
 * is labelled `source: "sample"`.
 */
export const CERTIFICATES: Certificate[] = [
  {
    id: "income-certificate",
    slug: "income-certificate",
    name: "Income Certificate",
    summary:
      "An official document certifying a family's annual income, issued by the Revenue Department.",
    description:
      "An Income Certificate states the total annual income of a person or family from all sources. It is commonly required to claim income-based concessions, scholarships, and reserved-category benefits.",
    category: "social-welfare",
    issuingAuthority: "Revenue Department / Tahsildar",
    level: "state",
    states: ["all-india"],
    eligibility: [
      {
        label: "Applicant",
        value: "Resident of the state applying for the certificate",
        type: "residence",
      },
    ],
    purpose: [
      "Scholarship applications",
      "Fee concessions and reservations",
      "EWS and income-linked scheme eligibility",
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", mandatory: true },
      { name: "Ration card / address proof", mandatory: true },
      { name: "Salary slip or income declaration", mandatory: true },
      { name: "Self-declaration / affidavit", mandatory: false },
    ],
    applicationSteps: [
      "Register on your state e-District / e-Sevai portal",
      "Fill the income certificate application form",
      "Upload identity, address, and income proofs",
      "Pay the nominal fee, if applicable, and submit",
      "Download the digitally signed certificate after verification",
    ],
    officialPortalUrl: "https://www.india.gov.in",
    processingTime: "7-15 working days",
    fees: "₹0-₹60 (varies by state)",
    validityPeriod: "Usually 6 months to 1 year",
    faqs: [
      {
        q: "How long is an income certificate valid?",
        a: "Typically 6 months to 1 year; many schemes ask for a certificate issued within the last financial year.",
      },
    ],
    source: "sample",
  },
  {
    id: "caste-certificate",
    slug: "caste-certificate",
    name: "Caste Certificate (SC / ST / OBC)",
    summary:
      "Official proof of a person's caste category for reservation and welfare benefits.",
    description:
      "A Caste Certificate certifies that the holder belongs to a Scheduled Caste, Scheduled Tribe, or Other Backward Class, enabling access to reservations in education, employment, and government schemes.",
    category: "social-welfare",
    issuingAuthority: "Revenue Department / Tahsildar / SDM",
    level: "state",
    states: ["all-india"],
    eligibility: [
      {
        label: "Category",
        value: "Belongs to a notified SC / ST / OBC community",
        type: "caste-category",
      },
      {
        label: "Residence",
        value: "Resident of the issuing state",
        type: "residence",
      },
    ],
    purpose: [
      "Reservation in education and jobs",
      "Category-based scholarships",
      "Welfare scheme eligibility",
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", mandatory: true },
      { name: "Proof of caste (parent's caste certificate / records)", mandatory: true },
      { name: "Residence proof", mandatory: true },
      { name: "Ration card", mandatory: false },
    ],
    applicationSteps: [
      "Log in to your state e-District / e-Sevai portal",
      "Select the caste certificate service and fill the form",
      "Attach supporting caste and residence documents",
      "Submit for verification by the revenue authority",
      "Download the signed certificate once approved",
    ],
    officialPortalUrl: "https://www.india.gov.in",
    processingTime: "15-30 working days",
    fees: "₹0-₹50 (varies by state)",
    validityPeriod: "Generally lifetime (subject to state rules)",
    faqs: [
      {
        q: "Is the OBC certificate the same as a non-creamy-layer certificate?",
        a: "For central benefits, OBC applicants usually need a non-creamy-layer certificate; some states issue this separately.",
      },
    ],
    source: "sample",
  },
  {
    id: "domicile-certificate",
    slug: "domicile-residence-certificate",
    name: "Domicile / Residence Certificate",
    summary:
      "Certifies that a person is a permanent resident of a particular state or union territory.",
    description:
      "A Domicile (Residence) Certificate confirms long-term residence in a state. It is used to claim residence-based quotas in education and jobs and to access state-specific welfare schemes.",
    category: "social-welfare",
    issuingAuthority: "Revenue Department / Tahsildar / SDM",
    level: "state",
    states: ["all-india"],
    eligibility: [
      {
        label: "Residence",
        value: "Continuous residence in the state for the required period",
        type: "residence",
      },
    ],
    purpose: [
      "State quota in education and employment",
      "Local/resident scheme eligibility",
      "Proof of permanent residence",
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", mandatory: true },
      { name: "Proof of residence (utility bill / ration card)", mandatory: true },
      { name: "Birth certificate or school records", mandatory: false },
      { name: "Self-declaration", mandatory: false },
    ],
    applicationSteps: [
      "Access your state e-District / e-Sevai portal",
      "Choose the domicile/residence certificate service",
      "Enter details and upload residence proofs",
      "Submit and track the application status online",
      "Download the certificate after approval",
    ],
    officialPortalUrl: "https://www.india.gov.in",
    processingTime: "7-21 working days",
    fees: "₹0-₹50 (varies by state)",
    validityPeriod: "Generally long-term / as per state rules",
    faqs: [
      {
        q: "Can I hold a domicile certificate from more than one state?",
        a: "No, a person can ordinarily claim domicile of only one state at a time.",
      },
    ],
    source: "sample",
  },
  {
    id: "birth-certificate",
    slug: "birth-certificate",
    name: "Birth Certificate",
    summary:
      "Official record of a person's birth, issued by the local municipal or panchayat authority.",
    description:
      "A Birth Certificate is the legal record of a child's birth, registered with the local registrar. It is the primary proof of age and identity and is required for school admission, passports, and many schemes.",
    category: "social-welfare",
    issuingAuthority: "Municipal Corporation / Gram Panchayat / Registrar of Births",
    level: "state",
    states: ["all-india"],
    eligibility: [
      {
        label: "Applicant",
        value: "Parent / guardian of the child or the individual",
        type: "other",
      },
    ],
    purpose: [
      "Proof of age and date of birth",
      "School admission",
      "Passport and identity applications",
    ],
    requiredDocuments: [
      { name: "Hospital birth record / discharge summary", mandatory: true },
      { name: "Parents' Aadhaar / ID proof", mandatory: true },
      { name: "Address proof", mandatory: true },
      { name: "Marriage certificate of parents", mandatory: false },
    ],
    applicationSteps: [
      "Report the birth to the local registrar within 21 days, ideally",
      "Submit the birth reporting form with hospital records",
      "Provide parents' identity and address proofs",
      "Pay the applicable fee (late fee may apply after the deadline)",
      "Collect the registered birth certificate",
    ],
    officialPortalUrl: "https://crsorgi.gov.in",
    processingTime: "Same day to 15 working days",
    fees: "Free if registered on time; late fee thereafter",
    validityPeriod: "Permanent",
    faqs: [
      {
        q: "What if the birth was not registered within 21 days?",
        a: "Late registration is allowed with a small penalty and, in some cases, an order from the competent authority.",
      },
    ],
    source: "sample",
  },
  {
    id: "death-certificate",
    slug: "death-certificate",
    name: "Death Certificate",
    summary:
      "Official record of a person's death, required for legal and financial formalities.",
    description:
      "A Death Certificate is the legal record of a person's death issued by the local registrar. It is essential for settling estates, insurance and pension claims, and updating official records.",
    category: "social-welfare",
    issuingAuthority: "Municipal Corporation / Gram Panchayat / Registrar of Deaths",
    level: "state",
    states: ["all-india"],
    eligibility: [
      {
        label: "Applicant",
        value: "Family member or next of kin of the deceased",
        type: "other",
      },
    ],
    purpose: [
      "Settlement of property and inheritance",
      "Insurance and pension claims",
      "Closure of accounts and records",
    ],
    requiredDocuments: [
      { name: "Medical certificate of cause of death", mandatory: true },
      { name: "Aadhaar / ID of the deceased", mandatory: true },
      { name: "Applicant's ID proof", mandatory: true },
      { name: "Proof of relationship", mandatory: false },
    ],
    applicationSteps: [
      "Report the death to the local registrar within 21 days, ideally",
      "Submit the death reporting form with the medical certificate",
      "Provide identity proof of the deceased and applicant",
      "Pay the applicable fee (late fee may apply after the deadline)",
      "Collect the registered death certificate",
    ],
    officialPortalUrl: "https://crsorgi.gov.in",
    processingTime: "Same day to 15 working days",
    fees: "Free if registered on time; late fee thereafter",
    validityPeriod: "Permanent",
    faqs: [
      {
        q: "Who can apply for a death certificate?",
        a: "Usually a family member or next of kin; the head of household or institution may apply in certain cases.",
      },
    ],
    source: "sample",
  },
  {
    id: "ews-certificate",
    slug: "ews-certificate",
    name: "EWS Certificate",
    summary:
      "Income and Asset Certificate proving Economically Weaker Section status for the 10% EWS reservation.",
    description:
      "The EWS (Economically Weaker Section) certificate, also called the Income and Asset Certificate, certifies that a general-category applicant's family income and assets fall within prescribed limits, enabling the 10% EWS reservation.",
    category: "social-welfare",
    issuingAuthority: "Revenue Department / Tahsildar / SDM",
    level: "state",
    states: ["all-india"],
    eligibility: [
      {
        label: "Annual family income",
        value: "Below ₹8,00,000 from all sources",
        type: "income",
      },
      {
        label: "Category",
        value: "General category, not covered under SC/ST/OBC reservation",
        type: "caste-category",
      },
      {
        label: "Assets",
        value: "Within the prescribed land and property limits",
        type: "other",
      },
    ],
    purpose: [
      "10% EWS reservation in education",
      "10% EWS reservation in government jobs",
      "Income-and-asset linked benefits",
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", mandatory: true },
      { name: "Income proof / declaration", mandatory: true },
      { name: "Land and property details", mandatory: true },
      { name: "PAN Card", mandatory: false },
    ],
    applicationSteps: [
      "Log in to your state e-District / e-Sevai portal",
      "Select the EWS / Income and Asset certificate service",
      "Declare family income and asset details",
      "Upload supporting documents and submit",
      "Download the certificate after verification",
    ],
    officialPortalUrl: "https://www.india.gov.in",
    processingTime: "7-21 working days",
    fees: "₹0-₹50 (varies by state)",
    validityPeriod: "Usually 1 financial year",
    faqs: [
      {
        q: "What is the income limit for EWS?",
        a: "The family's gross annual income must be below ₹8 lakh, subject to asset limits, for the current year.",
      },
    ],
    source: "sample",
  },
  {
    id: "udid-disability-certificate",
    slug: "disability-udid-certificate",
    name: "Disability (UDID) Certificate",
    summary:
      "A Unique Disability ID and certificate that records the type and extent of a person's disability.",
    description:
      "The UDID (Unique Disability ID) certificate provides a single, nationally valid document and card recording a person's certified disability, used to access disability pensions, concessions, and assistive-device schemes.",
    category: "disability",
    issuingAuthority: "Chief Medical Officer / Medical Board (designated hospital)",
    level: "central-state",
    states: ["all-india"],
    eligibility: [
      {
        label: "Disability",
        value: "Certified disability under the RPwD Act categories",
        type: "other",
      },
    ],
    purpose: [
      "Disability pension and welfare schemes",
      "Travel and education concessions",
      "Assistive-device schemes such as ADIP",
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", mandatory: true },
      { name: "Passport-size photograph", mandatory: true },
      { name: "Medical/diagnostic reports of the disability", mandatory: true },
      { name: "Address proof", mandatory: false },
    ],
    applicationSteps: [
      "Register on the national UDID portal (swavlambancard.gov.in)",
      "Fill the application and upload reports and photograph",
      "Get assessed by the designated medical authority/board",
      "Receive the certified disability percentage",
      "Download the UDID certificate and receive the card",
    ],
    officialPortalUrl: "https://www.swavlambancard.gov.in",
    processingTime: "Varies; after medical assessment",
    fees: "Free",
    validityPeriod: "Permanent or as assessed (re-assessment for some conditions)",
    faqs: [
      {
        q: "Is the UDID card valid across India?",
        a: "Yes, the UDID card is a nationally recognised document accepted across states for disability benefits.",
      },
    ],
    source: "sample",
  },
  {
    id: "ration-card",
    slug: "ration-card",
    name: "Ration Card",
    summary:
      "A household document for subsidised food grains under the Public Distribution System.",
    description:
      "A Ration Card identifies a household for the Public Distribution System, enabling purchase of subsidised food grains and serving as a widely accepted proof of identity and address for many schemes.",
    category: "social-welfare",
    issuingAuthority: "Department of Food, Civil Supplies & Consumer Affairs",
    level: "state",
    states: ["all-india"],
    eligibility: [
      {
        label: "Household",
        value: "Resident household, categorised as per PDS norms (AAY / PHH)",
        type: "residence",
      },
    ],
    purpose: [
      "Subsidised food grains under PDS",
      "Proof of identity and address",
      "Eligibility for linked welfare schemes",
    ],
    requiredDocuments: [
      { name: "Aadhaar Card of all family members", mandatory: true },
      { name: "Address proof", mandatory: true },
      { name: "Family photograph", mandatory: false },
      { name: "Income details", mandatory: false },
    ],
    applicationSteps: [
      "Apply on your state food and civil supplies portal",
      "Fill the ration card form with family member details",
      "Upload Aadhaar and address proofs",
      "Complete field verification if required",
      "Receive the ration card with assigned category",
    ],
    officialPortalUrl: "https://nfsa.gov.in",
    processingTime: "15-30 working days",
    fees: "₹0-₹50 (varies by state)",
    validityPeriod: "Long-term; subject to periodic updates",
    faqs: [
      {
        q: "What are AAY and PHH cards?",
        a: "AAY (Antyodaya Anna Yojana) is for the poorest households and PHH (Priority Household) for other eligible families under the National Food Security Act.",
      },
    ],
    source: "sample",
  },
];
