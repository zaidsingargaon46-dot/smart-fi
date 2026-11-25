// FINWISE - Indian Government Schemes Directory
// Curated with verified details, criteria, benefits, and official portals

const SCHEMES_DATA = [
  {
    id: "pmjdy",
    title: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
    shortName: "Jan Dhan Yojana",
    tagline: "National Mission for Financial Inclusion",
    category: "Banking & Savings",
    ministry: "Ministry of Finance",
    badge: "Most Popular",
    color: "#00F5A0",
    rating: 4.9,
    beneficiaries: "51+ Crore Accounts",
    overview: "Provides universal access to banking facilities with at least one basic banking account for every unbanked adult, zero balance requirement, and free RuPay debit card.",
    benefits: [
      "Zero minimum balance requirement (BSBDA account)",
      "Free RuPay Debit Card with inbuilt ₹2,00,000 Accidental Insurance Cover",
      "Overdraft (OD) facility up to ₹10,000 to eligible account holders",
      "Direct Benefit Transfer (DBT) of government subsidies directly into account",
      "Access to micro-insurance schemes (PMSBY, PMJJBY) and pension (APY)"
    ],
    eligibility: {
      age: "10 years and above (Minors can open through guardian)",
      income: "No income threshold (Available to all Indian citizens without bank account)",
      citizenship: "Indian Citizen",
      specialCriteria: "Must not already hold a savings bank account in that branch"
    },
    documentsRequired: [
      "Aadhaar Card (Primary proof of identity and address)",
      "Voter ID / Driving License / PAN Card / NREGA Job Card (if Aadhaar not available)",
      "Passport size photographs (2 copies)"
    ],
    officialUrl: "https://pmjdy.gov.in",
    portalName: "pmjdy.gov.in"
  },
  {
    id: "pmsby",
    title: "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
    shortName: "Suraksha Bima (PMSBY)",
    tagline: "Accidental Death & Disability Cover at ₹20/Year",
    category: "Insurance & Pension",
    ministry: "Ministry of Finance",
    badge: "Lowest Premium",
    color: "#00E5FF",
    rating: 4.8,
    beneficiaries: "35+ Crore Enrolled",
    overview: "An affordable accidental death and disability insurance scheme offering ₹2 Lakh cover for just ₹20 per year through auto-debit from your savings account.",
    benefits: [
      "₹2,00,000 coverage on accidental death",
      "₹2,00,000 for total and irrecoverable loss of both eyes or loss of use of both hands/feet",
      "₹1,00,000 for total and irrecoverable loss of sight of one eye or loss of use of one hand/foot",
      "Nominal premium of only ₹20 per annum auto-debited in single installment",
      "Direct claim settlement into nominee's bank account"
    ],
    eligibility: {
      age: "18 to 70 years",
      income: "No income limit",
      citizenship: "Indian Resident with a bank or post office account",
      specialCriteria: "Aadhaar is primary KYC for the bank account"
    },
    documentsRequired: [
      "Aadhaar Card",
      "Bank Account details with Auto-Debit Consent",
      "Nominee details (Name, relationship, Aadhaar)"
    ],
    officialUrl: "https://jansuraksha.gov.in",
    portalName: "jansuraksha.gov.in"
  },
  {
    id: "pmjjby",
    title: "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)",
    shortName: "Jeevan Jyoti (PMJJBY)",
    tagline: "Life Insurance Cover of ₹2 Lakh at ₹436/Year",
    category: "Insurance & Pension",
    ministry: "Ministry of Finance",
    badge: "Essential Life Cover",
    color: "#10B981",
    rating: 4.8,
    beneficiaries: "18+ Crore Families",
    overview: "Renewable one-year term life insurance cover of ₹2 Lakh for death due to any cause, offered through banks and post offices for only ₹436/year.",
    benefits: [
      "₹2,00,000 death benefit payable to nominee in case of death due to ANY cause",
      "Affordable premium of ₹436 per annum (equivalent to ₹1.2 per day)",
      "Simple auto-debit process from your savings bank account",
      "No medical examination required at the time of joining"
    ],
    eligibility: {
      age: "18 to 50 years (Coverage continues up to 55 years upon regular premium payment)",
      income: "No income bar",
      citizenship: "Indian Citizen with savings bank account",
      specialCriteria: "Single policy per individual across all bank accounts"
    },
    documentsRequired: [
      "Aadhaar Card",
      "Savings Bank Account Passbook",
      "Auto-Debit authorization form",
      "Nominee KYC"
    ],
    officialUrl: "https://jansuraksha.gov.in",
    portalName: "jansuraksha.gov.in"
  },
  {
    id: "apy",
    title: "Atal Pension Yojana (APY)",
    shortName: "Atal Pension Yojana",
    tagline: "Guaranteed Monthly Pension for Unorganized Sector",
    category: "Insurance & Pension",
    ministry: "PFRDA / Ministry of Finance",
    badge: "Guaranteed Pension",
    color: "#6366F1",
    rating: 4.9,
    beneficiaries: "6+ Crore Subscribers",
    overview: "A government-backed pension scheme targeted at the unorganized sector to provide a guaranteed monthly pension of ₹1,000 to ₹5,000 after reaching age 60.",
    benefits: [
      "Fixed monthly pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000 or ₹5,000 after age 60",
      "Same pension amount continues to spouse upon subscriber's death",
      "Full accumulated pension wealth returned to nominee after spouse's demise",
      "Tax benefits under Section 80CCD(1B) up to ₹50,000 additional deduction",
      "Government guarantees return even during market downturns"
    ],
    eligibility: {
      age: "18 to 40 years (Earlier you join, lower your monthly contribution)",
      income: "Non-income taxpayers (since Oct 2022)",
      citizenship: "Citizen of India",
      specialCriteria: "Must have savings bank account and Aadhaar"
    },
    documentsRequired: [
      "Aadhaar Card",
      "Active Savings Bank Account",
      "Registered Mobile Number",
      "Nominee details and spouse details"
    ],
    officialUrl: "https://npscra.nsdl.co.in",
    portalName: "npscra.nsdl.co.in"
  },
  {
    id: "ssy",
    title: "Sukanya Samriddhi Yojana (SSY)",
    shortName: "Sukanya Samriddhi",
    tagline: "High-Yield Sovereign Savings for the Girl Child",
    category: "Women & Children",
    ministry: "Ministry of Finance / Post Office",
    badge: "Highest Post Office Interest: 8.2%",
    color: "#EC4899",
    rating: 4.95,
    beneficiaries: "3.2+ Crore Accounts",
    overview: "A flagship small savings scheme for girl children offering one of the highest interest rates (8.2% p.a.) backed by sovereign guarantee with triple tax-exemption (EEE).",
    benefits: [
      "High annual compounded interest rate of 8.2% (tax-free under 80C)",
      "Exempt-Exempt-Exempt (EEE) status: Deposit, Interest, and Maturity are 100% Tax Free",
      "Flexible deposit: Min ₹250 to Max ₹1,50,000 per financial year",
      "Partial withdrawal up to 50% allowed for girl's higher education after age 18",
      "Matures 21 years from account opening or upon marriage after age 18"
    ],
    eligibility: {
      age: "Girl child under 10 years of age at the time of opening",
      income: "Any income bracket",
      citizenship: "Resident Indian Girl Child",
      specialCriteria: "Max 2 accounts per family (allowance for twins/triplets in second birth)"
    },
    documentsRequired: [
      "Birth Certificate of the girl child",
      "Identity and Address proof of guardian (Aadhaar / PAN)",
      "Passport size photos of child and parent"
    ],
    officialUrl: "https://www.indiapost.gov.in",
    portalName: "indiapost.gov.in"
  },
  {
    id: "pmmy",
    title: "Pradhan Mantri Mudra Yojana (PMMY)",
    shortName: "Mudra Business Loans",
    tagline: "Collateral-Free Micro Loans up to ₹10 Lakhs",
    category: "Business & MSME",
    ministry: "Ministry of Finance",
    badge: "Collateral Free",
    color: "#F59E0B",
    rating: 4.7,
    beneficiaries: "44+ Crore Loans Sanctioned",
    overview: "Financial support to micro and small non-corporate enterprises across Manufacturing, Trading, and Services with 3 tiers: Shishu, Kishore, and Tarun.",
    benefits: [
      "Shishu: Loans up to ₹50,000 for starting small vendor/shop business",
      "Kishore: Loans from ₹50,001 to ₹5,00,000 for purchasing machinery/supplies",
      "Tarun: Loans from ₹5,00,001 to ₹10,00,000 for expansion",
      "Zero collateral or security required",
      "Mudra Card with pre-loaded credit limit for working capital needs"
    ],
    eligibility: {
      age: "18 years and above",
      income: "Viable business proposal or running micro-enterprise",
      citizenship: "Indian Citizen",
      specialCriteria: "Non-defaulter with any commercial bank or NBFC"
    },
    documentsRequired: [
      "Proof of Identity (Aadhaar / Voter ID / PAN)",
      "Proof of Residence",
      "Business registration / Shop & Establishment Certificate",
      "Past 6 months bank statement & projected financial statement"
    ],
    officialUrl: "https://www.mudra.org.in",
    portalName: "mudra.org.in"
  },
  {
    id: "pmjay",
    title: "Ayushman Bharat PM-JAY",
    shortName: "Ayushman Bharat Health Cover",
    tagline: "World's Largest Free Healthcare Cover of ₹5 Lakh/Family",
    category: "Healthcare",
    ministry: "National Health Authority (NHA)",
    badge: "₹5 Lakh Free Treatment",
    color: "#14B8A6",
    rating: 4.9,
    beneficiaries: "12+ Crore Vulnerable Families",
    overview: "Comprehensive cashless secondary and tertiary hospitalization cover of ₹5,00,000 per family per year at empaneled public and private hospitals across India.",
    benefits: [
      "Cashless and paperless access to healthcare services up to ₹5,00,000 per family/year",
      "Covers 1,900+ medical procedures, surgeries, daycare treatments and diagnostic tests",
      "Pre-existing conditions covered from day one of enrollment",
      "Includes 3 days of pre-hospitalization and 15 days of post-hospitalization medicine expenses",
      "Valid across 27,000+ empaneled hospitals pan-India"
    ],
    eligibility: {
      age: "All age groups in eligible households",
      income: "Identified low-income and vulnerable families based on SECC 2011 & NFSA criteria",
      citizenship: "Indian Resident",
      specialCriteria: "Senior citizens aged 70+ now eligible for separate ₹5 Lakh cover irrespective of income"
    },
    documentsRequired: [
      "Aadhaar Card",
      "Ration Card / Family ID document",
      "Registered Mobile Number for OTP verification"
    ],
    officialUrl: "https://pmjay.gov.in",
    portalName: "pmjay.gov.in"
  },
  {
    id: "scss",
    title: "Senior Citizens Savings Scheme (SCSS)",
    shortName: "Senior Citizen Savings",
    tagline: "8.2% Regular Quarterly Income for Elders",
    category: "Banking & Savings",
    ministry: "Ministry of Finance",
    badge: "Quarterly Payouts",
    color: "#8B5CF6",
    rating: 4.9,
    beneficiaries: "50+ Lakh Retirees",
    overview: "A safe, government-backed deposit scheme providing senior citizens with a secure quarterly income stream and high sovereign interest rate.",
    benefits: [
      "Attractive interest rate of 8.2% per annum, paid quarterly into bank account",
      "Investment limit up to ₹30,00,000 per individual (₹60 Lakh for joint couple)",
      "Tenure of 5 years, extendable by another 3 years",
      "Tax deduction under Section 80C up to ₹1.5 Lakh per year",
      "100% sovereign safety backed by Government of India"
    ],
    eligibility: {
      age: "60 years and above (55 years for retired defense / VRS personnel)",
      income: "Any income bracket",
      citizenship: "Resident Indian Senior Citizen",
      specialCriteria: "Non-resident Indians (NRIs) and HUFs cannot open"
    },
    documentsRequired: [
      "Aadhaar Card and PAN Card",
      "Age proof / Retirement proof / PPO order for defense personnel",
      "Cheque or DD for deposit amount",
      "Passport size photos"
    ],
    officialUrl: "https://www.indiapost.gov.in",
    portalName: "indiapost.gov.in"
  },
  {
    id: "kvp",
    title: "Kisan Vikas Patra (KVP)",
    shortName: "Kisan Vikas Patra",
    tagline: "Double Your Investment with Sovereign Guarantee",
    category: "Banking & Savings",
    ministry: "Ministry of Finance / India Post",
    badge: "Doubles in 115 Months",
    color: "#3B82F6",
    rating: 4.7,
    beneficiaries: "Millions of Rural & Urban Savers",
    overview: "A certificate savings scheme that doubles your one-time principal investment over 115 months (9 years 7 months) at 7.5% annual interest.",
    benefits: [
      "Guaranteed doubling of initial capital in 115 months",
      "7.5% interest compounded annually",
      "Can be pledged as collateral/security to take bank loans",
      "Available across all Post Offices and major designated public banks",
      "Premature encashment permitted after 2 years and 6 months"
    ],
    eligibility: {
      age: "18 years and above (or adult on behalf of a minor)",
      income: "Any income level",
      citizenship: "Resident Indian",
      specialCriteria: "PAN required for investments exceeding ₹50,000"
    },
    documentsRequired: [
      "Aadhaar Card / Voter ID",
      "PAN Card",
      "KVP Application Form (Form A)",
      "Passport photographs"
    ],
    officialUrl: "https://www.indiapost.gov.in",
    portalName: "indiapost.gov.in"
  }
];

// Helper to filter schemes by category or keyword
function filterSchemes(schemes, { category = "All", search = "" }) {
  return schemes.filter(scheme => {
    const matchesCategory = category === "All" || scheme.category === category;
    const matchesSearch = !search || 
      scheme.title.toLowerCase().includes(search.toLowerCase()) ||
      scheme.shortName.toLowerCase().includes(search.toLowerCase()) ||
      scheme.tagline.toLowerCase().includes(search.toLowerCase()) ||
      scheme.overview.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}
