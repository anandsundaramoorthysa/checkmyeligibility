import type { Scheme } from "@/lib/types";

/**
 * Phase-1 sample catalogue of well-known Indian government schemes.
 * Every record is clearly labelled `source: "sample"`. Facts are broadly
 * accurate public information; a Phase-2 pipeline will replace these with
 * verified, dated records conforming to the same Scheme interface.
 */
export const SCHEMES: Scheme[] = [
  /* ---------------------------- agriculture ------------------------------- */
  {
    id: "pm-kisan",
    slug: "pm-kisan",
    name: "Pradhan Mantri Kisan Samman Nidhi",
    shortName: "PM-KISAN",
    summary:
      "Direct income support of ₹6,000 a year to eligible landholding farmer families.",
    description:
      "PM-KISAN provides income support of ₹6,000 per year, paid in three equal instalments of ₹2,000 directly into the bank accounts of eligible farmer families across India through Direct Benefit Transfer.",
    category: "agriculture",
    level: "central",
    states: ["all-india"],
    eligibility: [
      {
        label: "Occupation",
        value: "Landholding farmer family (cultivable land)",
        type: "occupation",
      },
      {
        label: "Land holding",
        value: "Owns cultivable agricultural land",
        type: "land-holding",
      },
      {
        label: "Exclusions",
        value: "Income-tax payers and institutional landholders excluded",
        type: "other",
      },
    ],
    benefits: [
      "₹6,000 per year in three instalments of ₹2,000",
      "Money credited directly via Direct Benefit Transfer",
      "No middlemen — paid straight to the bank account",
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", mandatory: true },
      { name: "Land ownership records", mandatory: true },
      { name: "Bank account passbook", mandatory: true },
      { name: "Mobile number for OTP", mandatory: false },
    ],
    officialPortalUrl: "https://pmkisan.gov.in",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    applicationMode: ["online", "csc"],
    tags: ["farmer", "income support", "dbt", "agriculture", "kisan"],
    faqs: [
      {
        q: "How many instalments are paid each year?",
        a: "Three instalments of ₹2,000 each, totalling ₹6,000 per year.",
      },
      {
        q: "Is eKYC required?",
        a: "Yes, Aadhaar-based eKYC is mandatory to keep receiving instalments.",
      },
    ],
    source: "sample",
  },
  {
    id: "pmfby",
    slug: "pradhan-mantri-fasal-bima-yojana",
    name: "Pradhan Mantri Fasal Bima Yojana",
    shortName: "PMFBY",
    summary:
      "Crop insurance that protects farmers against losses from natural calamities, pests, and disease.",
    description:
      "PMFBY offers comprehensive crop insurance at low farmer-paid premiums, covering yield losses from non-preventable natural risks across pre-sowing to post-harvest stages, with claims settled directly into farmers' accounts.",
    category: "agriculture",
    level: "central-state",
    states: ["all-india"],
    eligibility: [
      {
        label: "Occupation",
        value: "Farmers growing notified crops in notified areas",
        type: "occupation",
      },
      {
        label: "Land holding",
        value: "Both landowner and tenant cultivators eligible",
        type: "land-holding",
      },
    ],
    benefits: [
      "Low premium: 2% for kharif, 1.5% for rabi, 5% for commercial crops",
      "Cover against drought, flood, pests, and disease",
      "Claims paid directly to the farmer's bank account",
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", mandatory: true },
      { name: "Land records / sowing certificate", mandatory: true },
      { name: "Bank account passbook", mandatory: true },
      { name: "Loan sanction details (for loanee farmers)", mandatory: false },
    ],
    officialPortalUrl: "https://pmfby.gov.in",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    applicationMode: ["online", "offline", "csc"],
    tags: ["crop insurance", "farmer", "agriculture", "risk cover"],
    faqs: [
      {
        q: "What premium does the farmer pay?",
        a: "2% for kharif food/oilseed crops, 1.5% for rabi, and 5% for commercial and horticultural crops.",
      },
    ],
    source: "sample",
  },

  /* ----------------------------- education -------------------------------- */
  {
    id: "nsp-post-matric",
    slug: "national-scholarship-post-matric",
    name: "National Scholarship (Post-Matric Scholarship)",
    shortName: "NSP Post-Matric",
    summary:
      "Financial assistance for students from SC/ST/OBC/minority and EWS backgrounds studying after Class 10.",
    description:
      "The Post-Matric Scholarship, applied through the National Scholarship Portal, covers tuition and maintenance allowances for eligible students continuing education beyond Class 10, reducing dropout due to financial hardship.",
    category: "education",
    level: "central-state",
    states: ["all-india"],
    eligibility: [
      {
        label: "Education level",
        value: "Studying in a post-matric (above Class 10) course",
        type: "education",
      },
      {
        label: "Annual family income",
        value: "Within the limit notified for the scheme",
        type: "income",
      },
      {
        label: "Category",
        value: "SC / ST / OBC / minority / EWS as applicable",
        type: "caste-category",
      },
    ],
    benefits: [
      "Tuition fee reimbursement",
      "Monthly maintenance allowance",
      "Single online application via the National Scholarship Portal",
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", mandatory: true },
      { name: "Income Certificate", mandatory: true },
      { name: "Caste / category certificate", mandatory: true },
      { name: "Previous marksheet", mandatory: true },
      { name: "Bank account passbook", mandatory: true },
    ],
    officialPortalUrl: "https://scholarships.gov.in",
    ministry: "Ministry of Social Justice & Empowerment",
    applicationMode: ["online"],
    tags: ["scholarship", "student", "education", "sc", "st", "obc"],
    faqs: [
      {
        q: "Where do I apply?",
        a: "On the National Scholarship Portal at scholarships.gov.in during the open window.",
      },
    ],
    source: "sample",
  },
  {
    id: "sukanya-samriddhi",
    slug: "sukanya-samriddhi-yojana",
    name: "Sukanya Samriddhi Yojana",
    shortName: "SSY",
    summary:
      "A small-savings scheme for the girl child offering attractive, tax-free interest.",
    description:
      "Sukanya Samriddhi Yojana lets parents or guardians open a savings account for a girl child below 10 years, earning a government-set interest rate with tax benefits, to build a corpus for her education and marriage.",
    category: "education",
    level: "central",
    states: ["all-india"],
    eligibility: [
      {
        label: "Age of girl child",
        value: "Account opened before the girl turns 10",
        type: "age",
      },
      {
        label: "Account limit",
        value: "Up to two accounts per family (girl children)",
        type: "other",
      },
    ],
    benefits: [
      "Attractive government-declared interest rate",
      "Deposits qualify for tax deduction under Section 80C",
      "Maturity and interest are tax-free",
    ],
    requiredDocuments: [
      { name: "Birth certificate of the girl child", mandatory: true },
      { name: "Aadhaar / ID of guardian", mandatory: true },
      { name: "Address proof", mandatory: true },
      { name: "Passport-size photographs", mandatory: false },
    ],
    officialPortalUrl: "https://www.nsiindia.gov.in",
    ministry: "Ministry of Finance",
    applicationMode: ["offline"],
    tags: ["girl child", "savings", "education", "beti", "small savings"],
    faqs: [
      {
        q: "Until what age can the account be opened?",
        a: "Any time before the girl child attains the age of 10 years.",
      },
    ],
    source: "sample",
  },

  /* ------------------------------ health ---------------------------------- */
  {
    id: "ayushman-bharat-pmjay",
    slug: "ayushman-bharat-pm-jay",
    name: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana",
    shortName: "AB PM-JAY",
    summary:
      "Cashless health cover of up to ₹5 lakh per family per year at empanelled hospitals.",
    description:
      "PM-JAY provides health cover of ₹5 lakh per eligible family per year for secondary and tertiary hospitalisation, delivered cashless at public and empanelled private hospitals across the country.",
    category: "health",
    level: "central-state",
    states: ["all-india"],
    eligibility: [
      {
        label: "Beneficiary basis",
        value: "Families identified by SECC deprivation criteria / extended lists",
        type: "other",
      },
      {
        label: "Income",
        value: "Targeted at economically vulnerable households",
        type: "income",
      },
    ],
    benefits: [
      "₹5 lakh cover per family per year",
      "Cashless and paperless treatment at empanelled hospitals",
      "Covers pre- and post-hospitalisation expenses",
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", mandatory: true },
      { name: "Ration card / family ID", mandatory: false },
      { name: "Ayushman / mobile-linked verification", mandatory: false },
    ],
    officialPortalUrl: "https://pmjay.gov.in",
    ministry: "Ministry of Health & Family Welfare",
    applicationMode: ["online", "csc", "offline"],
    tags: ["health", "insurance", "hospital", "ayushman", "cashless"],
    faqs: [
      {
        q: "How do I check if my family is eligible?",
        a: "Check eligibility on pmjay.gov.in or at any empanelled hospital or Common Service Centre.",
      },
    ],
    source: "sample",
  },
  {
    id: "pmuy-ujjwala",
    slug: "pradhan-mantri-ujjwala-yojana",
    name: "Pradhan Mantri Ujjwala Yojana",
    shortName: "PMUY",
    summary:
      "Free LPG connections to women from poor households for clean cooking fuel.",
    description:
      "PMUY provides deposit-free LPG connections to women of eligible low-income households, reducing reliance on polluting cooking fuels and improving household health, with support towards the first refill and stove.",
    category: "health",
    level: "central",
    states: ["all-india"],
    eligibility: [
      {
        label: "Gender",
        value: "Adult woman of the household is the applicant",
        type: "gender",
      },
      {
        label: "Household",
        value: "Poor / eligible household without an existing LPG connection",
        type: "income",
      },
    ],
    benefits: [
      "Deposit-free LPG connection",
      "Support towards first refill and stove",
      "Cleaner cooking fuel for better household health",
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", mandatory: true },
      { name: "Ration card", mandatory: true },
      { name: "Bank account passbook", mandatory: true },
      { name: "Address proof", mandatory: false },
    ],
    officialPortalUrl: "https://www.pmuy.gov.in",
    ministry: "Ministry of Petroleum & Natural Gas",
    applicationMode: ["online", "offline"],
    tags: ["lpg", "women", "clean fuel", "ujjwala", "health"],
    faqs: [
      {
        q: "Who can apply?",
        a: "An adult woman from an eligible low-income household without an existing LPG connection in her name.",
      },
    ],
    source: "sample",
  },

  /* ---------------------- employment / skilling --------------------------- */
  {
    id: "pmkvy",
    slug: "pradhan-mantri-kaushal-vikas-yojana",
    name: "Pradhan Mantri Kaushal Vikas Yojana",
    shortName: "PMKVY",
    summary:
      "Free short-term skill training and certification to improve employability for youth.",
    description:
      "PMKVY, the flagship scheme of the Skill India Mission, offers industry-relevant short-term skill training, recognition of prior learning, and certification to help youth secure better livelihoods and jobs.",
    category: "skill-development",
    level: "central",
    states: ["all-india"],
    eligibility: [
      {
        label: "Age",
        value: "Indian youth, typically 15-45 years",
        type: "age",
      },
      {
        label: "Status",
        value: "Unemployed, school/college dropouts, or job seekers",
        type: "occupation",
      },
    ],
    benefits: [
      "Free industry-aligned short-term training",
      "Nationally recognised skill certification",
      "Placement assistance and recognition of prior learning",
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", mandatory: true },
      { name: "Bank account passbook", mandatory: true },
      { name: "Education proof", mandatory: false },
    ],
    officialPortalUrl: "https://www.pmkvyofficial.org",
    ministry: "Ministry of Skill Development & Entrepreneurship",
    applicationMode: ["online", "offline"],
    tags: ["skill", "training", "employment", "youth", "skill india"],
    faqs: [
      {
        q: "Is the training free?",
        a: "Yes, training and certification under PMKVY are provided free of cost to eligible candidates.",
      },
    ],
    source: "sample",
  },
  {
    id: "pm-vishwakarma",
    slug: "pm-vishwakarma",
    name: "PM Vishwakarma",
    shortName: "PM Vishwakarma",
    summary:
      "End-to-end support for traditional artisans and craftspeople — training, toolkit, and collateral-free credit.",
    description:
      "PM Vishwakarma supports artisans and craftspeople working with their hands and tools across 18 trades, offering recognition, skill upgradation, a toolkit incentive, collateral-free credit, and market linkage.",
    category: "employment",
    level: "central",
    states: ["all-india"],
    eligibility: [
      {
        label: "Occupation",
        value: "Artisan / craftsperson in one of the 18 notified trades",
        type: "occupation",
      },
      {
        label: "Age",
        value: "Minimum 18 years on the date of registration",
        type: "age",
      },
    ],
    benefits: [
      "Skill training with a daily stipend",
      "Toolkit incentive of ₹15,000",
      "Collateral-free credit at a concessional interest rate",
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", mandatory: true },
      { name: "Bank account passbook", mandatory: true },
      { name: "Mobile number", mandatory: true },
      { name: "Ration card", mandatory: false },
    ],
    officialPortalUrl: "https://pmvishwakarma.gov.in",
    ministry: "Ministry of Micro, Small & Medium Enterprises",
    applicationMode: ["online", "csc"],
    tags: ["artisan", "craftsperson", "skill", "credit", "vishwakarma"],
    faqs: [
      {
        q: "Which trades are covered?",
        a: "18 traditional trades including carpenter, blacksmith, goldsmith, potter, cobbler, tailor, and more.",
      },
    ],
    source: "sample",
  },

  /* ------------------------------ housing --------------------------------- */
  {
    id: "pmay",
    slug: "pradhan-mantri-awas-yojana",
    name: "Pradhan Mantri Awas Yojana",
    shortName: "PMAY",
    summary:
      "Assistance towards building or buying a pucca house for eligible households.",
    description:
      "PMAY aims at housing for all by providing financial assistance and interest subsidy for the construction or purchase of pucca houses for eligible urban and rural households, with priority to women ownership.",
    category: "housing",
    level: "central-state",
    states: ["all-india"],
    eligibility: [
      {
        label: "Housing status",
        value: "Household without a pucca house in its name",
        type: "residence",
      },
      {
        label: "Income group",
        value: "EWS / LIG / MIG as defined for the scheme",
        type: "income",
      },
    ],
    benefits: [
      "Financial assistance for house construction",
      "Credit-linked interest subsidy on home loans",
      "Preference for house ownership in the woman's name",
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", mandatory: true },
      { name: "Income Certificate", mandatory: true },
      { name: "Bank account passbook", mandatory: true },
      { name: "Proof of no pucca house", mandatory: false },
    ],
    officialPortalUrl: "https://pmaymis.gov.in",
    ministry: "Ministry of Housing & Urban Affairs",
    applicationMode: ["online", "csc"],
    tags: ["housing", "home", "awas", "subsidy", "pucca house"],
    faqs: [
      {
        q: "Can the house be in the woman's name?",
        a: "Yes, the scheme encourages and often requires ownership or co-ownership by a woman of the household.",
      },
    ],
    source: "sample",
  },

  /* ---------------------------- women & child ----------------------------- */
  {
    id: "pmmvy",
    slug: "pradhan-mantri-matru-vandana-yojana",
    name: "Pradhan Mantri Matru Vandana Yojana",
    shortName: "PMMVY",
    summary:
      "Maternity cash benefit to pregnant and lactating mothers for the first living child.",
    description:
      "PMMVY provides conditional cash transfer to pregnant women and lactating mothers to partly compensate for wage loss and to encourage health-seeking behaviour, paid in instalments on meeting health milestones.",
    category: "women-child",
    level: "central",
    states: ["all-india"],
    eligibility: [
      {
        label: "Beneficiary",
        value: "Pregnant and lactating mothers",
        type: "gender",
      },
      {
        label: "Coverage",
        value: "First living child (with provisions for second girl child)",
        type: "other",
      },
    ],
    benefits: [
      "Conditional cash benefit paid in instalments",
      "Support for health check-ups and institutional delivery",
      "Compensation towards wage loss during pregnancy",
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", mandatory: true },
      { name: "Bank account passbook", mandatory: true },
      { name: "Mother and Child Protection (MCP) card", mandatory: true },
      { name: "Husband's Aadhaar", mandatory: false },
    ],
    officialPortalUrl: "https://wcd.nic.in",
    ministry: "Ministry of Women & Child Development",
    applicationMode: ["online", "offline"],
    tags: ["maternity", "women", "pregnancy", "cash benefit", "mother"],
    faqs: [
      {
        q: "When is the benefit paid?",
        a: "In instalments linked to registration of pregnancy, antenatal check-up, and child birth/immunisation milestones.",
      },
    ],
    source: "sample",
  },
  {
    id: "bbbp",
    slug: "beti-bachao-beti-padhao",
    name: "Beti Bachao Beti Padhao",
    shortName: "BBBP",
    summary:
      "A national initiative to prevent gender-biased sex selection and promote education of the girl child.",
    description:
      "Beti Bachao Beti Padhao is a coordinated outreach and welfare initiative to improve the child sex ratio, ensure survival and protection of the girl child, and promote her education and participation.",
    category: "women-child",
    level: "central",
    states: ["all-india"],
    eligibility: [
      {
        label: "Beneficiary",
        value: "Girl children and their families (community-level programme)",
        type: "gender",
      },
    ],
    benefits: [
      "Awareness and advocacy against sex-selective practices",
      "Promotion of girl-child education and enrolment",
      "Convergence with girl-child savings schemes",
    ],
    requiredDocuments: [
      { name: "Aadhaar Card (for linked schemes)", mandatory: false },
      { name: "Birth certificate of the girl child", mandatory: false },
    ],
    officialPortalUrl: "https://wcd.nic.in/bbbp-schemes",
    ministry: "Ministry of Women & Child Development",
    applicationMode: ["offline"],
    tags: ["girl child", "education", "women", "beti", "awareness"],
    faqs: [
      {
        q: "Is BBBP a cash scheme?",
        a: "It is primarily an awareness and convergence initiative; cash benefits flow through linked schemes such as Sukanya Samriddhi Yojana.",
      },
    ],
    source: "sample",
  },

  /* ------------------ senior citizen / social welfare --------------------- */
  {
    id: "ignoaps",
    slug: "indira-gandhi-national-old-age-pension",
    name: "Indira Gandhi National Old Age Pension Scheme",
    shortName: "IGNOAPS",
    summary:
      "Monthly pension for elderly persons living below the poverty line.",
    description:
      "Under the National Social Assistance Programme, IGNOAPS provides a monthly pension to citizens aged 60 and above who belong to below-poverty-line households, offering basic income security in old age.",
    category: "senior-citizen",
    level: "central-state",
    states: ["all-india"],
    eligibility: [
      {
        label: "Age",
        value: "60 years and above",
        type: "age",
      },
      {
        label: "Income",
        value: "Belongs to a below-poverty-line (BPL) household",
        type: "income",
      },
    ],
    benefits: [
      "Monthly old-age pension",
      "Higher pension amount for those aged 80 and above",
      "Pension credited directly to the bank account",
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", mandatory: true },
      { name: "Age proof", mandatory: true },
      { name: "BPL certificate", mandatory: true },
      { name: "Bank account passbook", mandatory: true },
    ],
    officialPortalUrl: "https://nsap.nic.in",
    ministry: "Ministry of Rural Development",
    applicationMode: ["offline", "csc"],
    tags: ["pension", "senior citizen", "old age", "bpl", "social welfare"],
    faqs: [
      {
        q: "What is the minimum age?",
        a: "60 years, with a higher central contribution applicable from 80 years of age.",
      },
    ],
    source: "sample",
  },
  {
    id: "atal-pension-yojana",
    slug: "atal-pension-yojana",
    name: "Atal Pension Yojana",
    shortName: "APY",
    summary:
      "A guaranteed minimum pension after age 60 for workers in the unorganised sector.",
    description:
      "Atal Pension Yojana is a contributory pension scheme aimed at unorganised-sector workers, providing a guaranteed monthly pension of ₹1,000 to ₹5,000 after the age of 60 based on contributions made.",
    category: "social-welfare",
    level: "central",
    states: ["all-india"],
    eligibility: [
      {
        label: "Age",
        value: "18 to 40 years at the time of joining",
        type: "age",
      },
      {
        label: "Requirement",
        value: "Holds a savings bank account",
        type: "other",
      },
    ],
    benefits: [
      "Guaranteed monthly pension of ₹1,000 to ₹5,000 after 60",
      "Auto-debit of contributions from the bank account",
      "Pension continues to the spouse after the subscriber",
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", mandatory: true },
      { name: "Savings bank account", mandatory: true },
      { name: "Mobile number", mandatory: false },
    ],
    officialPortalUrl: "https://www.npscra.nsdl.co.in",
    ministry: "Ministry of Finance",
    applicationMode: ["online", "offline"],
    tags: ["pension", "unorganised sector", "retirement", "savings", "apy"],
    faqs: [
      {
        q: "What pension amounts are available?",
        a: "A guaranteed monthly pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000 depending on contributions.",
      },
    ],
    source: "sample",
  },
  {
    id: "adip-disability",
    slug: "adip-assistance-to-disabled-persons",
    name: "ADIP — Assistance to Disabled Persons",
    shortName: "ADIP",
    summary:
      "Aids and assistive devices for persons with disabilities, free or at subsidised cost.",
    description:
      "The ADIP scheme assists persons with disabilities in procuring durable, modern, and standard aids and appliances — such as wheelchairs, hearing aids, and prosthetics — free or at subsidised cost to promote independence.",
    category: "disability",
    level: "central",
    states: ["all-india"],
    eligibility: [
      {
        label: "Disability",
        value: "Person with disability of 40% or more (certified)",
        type: "other",
      },
      {
        label: "Income",
        value: "Within the income limit notified for full/partial subsidy",
        type: "income",
      },
    ],
    benefits: [
      "Free or subsidised assistive aids and appliances",
      "Fitment camps and after-care support",
      "Covers wheelchairs, hearing aids, prosthetics, and more",
    ],
    requiredDocuments: [
      { name: "Disability (UDID) certificate", mandatory: true },
      { name: "Aadhaar Card", mandatory: true },
      { name: "Income Certificate", mandatory: true },
      { name: "Passport-size photographs", mandatory: false },
    ],
    officialPortalUrl: "https://disabilityaffairs.gov.in",
    ministry: "Ministry of Social Justice & Empowerment",
    applicationMode: ["offline", "csc"],
    tags: ["disability", "assistive devices", "divyangjan", "adip", "aids"],
    faqs: [
      {
        q: "What level of disability is required?",
        a: "A certified disability of 40% or more, along with meeting the income criteria for subsidy.",
      },
    ],
    source: "sample",
  },

  /* -------------------------- finance & credit ---------------------------- */
  {
    id: "pm-mudra",
    slug: "pradhan-mantri-mudra-yojana",
    name: "Pradhan Mantri Mudra Yojana",
    shortName: "PMMY",
    summary:
      "Collateral-free loans up to ₹10 lakh for small and micro enterprises.",
    description:
      "Pradhan Mantri Mudra Yojana provides collateral-free institutional credit up to ₹10 lakh to non-corporate, non-farm micro and small enterprises through Shishu, Kishore, and Tarun loan categories.",
    category: "finance-credit",
    level: "central",
    states: ["all-india"],
    eligibility: [
      {
        label: "Applicant",
        value: "Non-corporate, non-farm micro or small business owner",
        type: "occupation",
      },
      {
        label: "Loan purpose",
        value: "Income-generating manufacturing, trading, or service activity",
        type: "other",
      },
    ],
    benefits: [
      "Collateral-free loans up to ₹10 lakh",
      "Three categories: Shishu, Kishore, and Tarun",
      "Available through banks, NBFCs, and microfinance institutions",
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", mandatory: true },
      { name: "PAN Card", mandatory: false },
      { name: "Business plan / proof of activity", mandatory: true },
      { name: "Bank account passbook", mandatory: true },
    ],
    officialPortalUrl: "https://www.mudra.org.in",
    ministry: "Ministry of Finance",
    applicationMode: ["online", "offline"],
    tags: ["loan", "business", "micro enterprise", "mudra", "credit"],
    faqs: [
      {
        q: "What are the loan categories?",
        a: "Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 lakh), and Tarun (₹5 lakh to ₹10 lakh).",
      },
    ],
    source: "sample",
  },
  {
    id: "stand-up-india",
    slug: "stand-up-india",
    name: "Stand-Up India",
    shortName: "Stand-Up India",
    summary:
      "Bank loans from ₹10 lakh to ₹1 crore for SC/ST and women entrepreneurs setting up greenfield enterprises.",
    description:
      "Stand-Up India facilitates bank loans between ₹10 lakh and ₹1 crore to at least one Scheduled Caste or Scheduled Tribe borrower and one woman borrower per bank branch for setting up a greenfield enterprise.",
    category: "finance-credit",
    level: "central",
    states: ["all-india"],
    eligibility: [
      {
        label: "Category",
        value: "SC / ST or woman entrepreneur",
        type: "caste-category",
      },
      {
        label: "Age",
        value: "Above 18 years",
        type: "age",
      },
      {
        label: "Enterprise",
        value: "Greenfield (first-time) manufacturing, services, or trading unit",
        type: "other",
      },
    ],
    benefits: [
      "Loans from ₹10 lakh up to ₹1 crore",
      "Composite loan covering term loan and working capital",
      "Handholding support for first-time entrepreneurs",
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", mandatory: true },
      { name: "Caste certificate (for SC/ST applicants)", mandatory: false },
      { name: "Project report / business plan", mandatory: true },
      { name: "Bank account details", mandatory: true },
    ],
    officialPortalUrl: "https://www.standupmitra.in",
    ministry: "Ministry of Finance",
    applicationMode: ["online"],
    tags: ["loan", "entrepreneur", "sc", "st", "women", "business"],
    faqs: [
      {
        q: "Who is eligible?",
        a: "SC/ST and women entrepreneurs above 18 setting up a first-time (greenfield) enterprise.",
      },
    ],
    source: "sample",
  },
  {
    id: "pmjdy",
    slug: "pradhan-mantri-jan-dhan-yojana",
    name: "Pradhan Mantri Jan Dhan Yojana",
    shortName: "PMJDY",
    summary:
      "Zero-balance bank accounts with insurance and overdraft for financial inclusion.",
    description:
      "PMJDY is the national mission for financial inclusion, offering basic zero-balance savings accounts with a RuPay debit card, accident insurance cover, and overdraft facility to bring every household into the banking system.",
    category: "finance-credit",
    level: "central",
    states: ["all-india"],
    eligibility: [
      {
        label: "Eligibility",
        value: "Any Indian resident without a bank account",
        type: "residence",
      },
      {
        label: "Age",
        value: "10 years and above (minor accounts with guardian)",
        type: "age",
      },
    ],
    benefits: [
      "Zero-balance savings account with RuPay debit card",
      "Accident insurance cover on the RuPay card",
      "Overdraft facility after satisfactory operation",
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", mandatory: true },
      { name: "One valid photo ID (if Aadhaar unavailable)", mandatory: false },
      { name: "Passport-size photograph", mandatory: false },
    ],
    officialPortalUrl: "https://pmjdy.gov.in",
    ministry: "Ministry of Finance",
    applicationMode: ["offline", "csc"],
    tags: ["bank account", "financial inclusion", "jan dhan", "rupay", "savings"],
    faqs: [
      {
        q: "Is a minimum balance required?",
        a: "No, PMJDY accounts are zero-balance accounts with no minimum balance requirement.",
      },
    ],
    source: "sample",
  },
];
