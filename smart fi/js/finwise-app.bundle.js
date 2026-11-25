// --- START js/data/schemesData.js ---
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

// --- END js/data/schemesData.js ---

// --- START js/data/demoData.js ---
// FINWISE - Realistic Indian Household Demo Data & Schema

const DEFAULT_DEMO_DATA = {
  user: {
    name: "Aarav Sharma",
    city: "Bengaluru, India",
    familySize: 4,
    monthlyIncome: 75000,
    incomeSources: [
      { id: "inc-1", name: "Salary (Primary)", amount: 58000, frequency: "Monthly", icon: "briefcase" },
      { id: "inc-2", name: "Freelance & Consulting", amount: 17000, frequency: "Monthly", icon: "laptop" }
    ]
  },
  categories: [
    {
      id: "food",
      name: "Food & Groceries",
      icon: "shopping-bag",
      color: "#10B981", // Emerald
      budget: 16000,
      spent: 13850,
      type: "needs",
      tips: "Switching to weekly mandi shopping saved ₹1,400 this month."
    },
    {
      id: "rent",
      name: "Rent & Housing",
      icon: "home",
      color: "#3B82F6", // Blue
      budget: 18000,
      spent: 18000,
      type: "needs",
      tips: "Fixed 24% of income. Within the healthy <30% housing guideline."
    },
    {
      id: "education",
      name: "Education & Fees",
      icon: "graduation-cap",
      color: "#8B5CF6", // Purple
      budget: 8500,
      spent: 7600,
      type: "needs",
      tips: "School tuition and after-school coding classes."
    },
    {
      id: "transport",
      name: "Transport & Fuel",
      icon: "car",
      color: "#F59E0B", // Amber
      budget: 5500,
      spent: 4720,
      type: "needs",
      tips: "Metro rail usage kept fuel expenses 15% lower than budgeted."
    },
    {
      id: "healthcare",
      name: "Healthcare & Medical",
      icon: "heart-pulse",
      color: "#EF4444", // Rose
      budget: 4500,
      spent: 2850,
      type: "needs",
      tips: "Periodic pharmacy checkups and parent medicines."
    },
    {
      id: "shopping",
      name: "Shopping & Lifestyle",
      icon: "shirt",
      color: "#EC4899", // Pink
      budget: 6500,
      spent: 5400,
      type: "wants",
      tips: "Weekend family dining and festive clothing purchases."
    },
    {
      id: "utilities",
      name: "Utilities & Bills",
      icon: "zap",
      color: "#06B6D4", // Cyan
      budget: 4500,
      spent: 3950,
      type: "needs",
      tips: "Electricity bill, broadband fiber, and piped LPG gas."
    },
    {
      id: "others",
      name: "Others & Entertainment",
      icon: "film",
      color: "#A855F7", // Violet
      budget: 3500,
      spent: 2430,
      type: "wants",
      tips: "OTT subscriptions (Hotstar, Prime) and occasional hobbies."
    }
  ],
  transactions: [
    {
      id: "tx-1",
      title: "Salary Credited - TechCorp",
      category: "Income",
      categoryId: "income",
      amount: 58000,
      type: "income",
      date: "2026-11-01",
      paymentMethod: "NEFT / Direct Bank",
      badge: "Credit"
    },
    {
      id: "tx-2",
      title: "Apartment Rent - November",
      category: "Rent & Housing",
      categoryId: "rent",
      amount: 18000,
      type: "expense",
      date: "2026-11-02",
      paymentMethod: "UPI Transfer",
      badge: "Needs"
    },
    {
      id: "tx-3",
      title: "BigBasket Monthly Grocery",
      category: "Food & Groceries",
      categoryId: "food",
      amount: 6850,
      type: "expense",
      date: "2026-11-04",
      paymentMethod: "RuPay Credit Card",
      badge: "Needs"
    },
    {
      id: "tx-4",
      title: "BESCOM Electricity Bill",
      category: "Utilities & Bills",
      categoryId: "utilities",
      amount: 2350,
      type: "expense",
      date: "2026-11-06",
      paymentMethod: "Bharat BillPay (BBPS)",
      badge: "Needs"
    },
    {
      id: "tx-5",
      title: "Freelance UI Consulting Client",
      category: "Income",
      categoryId: "income",
      amount: 17000,
      type: "income",
      date: "2026-11-09",
      paymentMethod: "UPI (Google Pay)",
      badge: "Credit"
    },
    {
      id: "tx-6",
      title: "School Quarterly Fee",
      category: "Education & Fees",
      categoryId: "education",
      amount: 7600,
      type: "expense",
      date: "2026-11-11",
      paymentMethod: "NetBanking",
      badge: "Needs"
    },
    {
      id: "tx-7",
      title: "Indian Oil Petrol Fill-up",
      category: "Transport & Fuel",
      categoryId: "transport",
      amount: 2500,
      type: "expense",
      date: "2026-11-14",
      paymentMethod: "UPI",
      badge: "Needs"
    },
    {
      id: "tx-8",
      title: "Apollo Pharmacy Medicine",
      category: "Healthcare & Medical",
      categoryId: "healthcare",
      amount: 1850,
      type: "expense",
      date: "2026-11-16",
      paymentMethod: "UPI",
      badge: "Needs"
    },
    {
      id: "tx-9",
      title: "Zomato Weekend Family Dinner",
      category: "Food & Groceries",
      categoryId: "food",
      amount: 1950,
      type: "expense",
      date: "2026-11-19",
      paymentMethod: "UPI",
      badge: "Wants"
    },
    {
      id: "tx-10",
      title: "Myntra Winter Wear & Clothes",
      category: "Shopping & Lifestyle",
      categoryId: "shopping",
      amount: 3200,
      type: "expense",
      date: "2026-11-21",
      paymentMethod: "RuPay Card",
      badge: "Wants"
    }
  ],
  savingsGoals: [
    {
      id: "goal-1",
      title: "6-Month Emergency Fund",
      category: "Safety Buffer",
      targetAmount: 300000,
      currentAmount: 225000,
      monthlyContribution: 12000,
      targetDate: "2027-05-31",
      color: "#00F5A0",
      icon: "shield-check",
      description: "Dedicated liquid safety net kept in sweep-in bank FD for peace of mind."
    },
    {
      id: "goal-2",
      title: "Child's Higher Education Fund",
      category: "Long-term Future",
      targetAmount: 1000000,
      currentAmount: 440000,
      monthlyContribution: 15000,
      targetDate: "2031-06-30",
      color: "#3B82F6",
      icon: "graduation-cap",
      description: "SIP in Nifty 50 Index Fund + Sukanya Samriddhi Yojana (SSY)."
    },
    {
      id: "goal-3",
      title: "Sovereign Gold Bond (SGB) / Gold",
      category: "Precious Assets",
      targetAmount: 200000,
      currentAmount: 160000,
      monthlyContribution: 8000,
      targetDate: "2027-02-28",
      color: "#F59E0B",
      icon: "coins",
      description: "Government backed 2.5% annual interest + capital appreciation."
    },
    {
      id: "goal-4",
      title: "Electric Scooter (Ather / Ola)",
      category: "Mobility",
      targetAmount: 150000,
      currentAmount: 110000,
      monthlyContribution: 10000,
      targetDate: "2027-03-31",
      color: "#06B6D4",
      icon: "zap",
      description: "Zero fuel costs for daily city commutes, saving ₹3,000/month."
    },
    {
      id: "goal-5",
      title: "Dream Home Down Payment",
      category: "Real Estate",
      targetAmount: 1500000,
      currentAmount: 580000,
      monthlyContribution: 20000,
      targetDate: "2029-12-31",
      color: "#8B5CF6",
      icon: "building-2",
      description: "20% down payment buffer to minimize home loan EMI burden."
    }
  ],
  monthlyCashFlowTrends: [
    { month: "Jun", income: 72000, expenses: 54000, savings: 18000 },
    { month: "Jul", income: 72000, expenses: 56000, savings: 16000 },
    { month: "Aug", income: 75000, expenses: 55000, savings: 20000 },
    { month: "Sep", income: 74000, expenses: 58000, savings: 16000 },
    { month: "Oct", income: 78000, expenses: 62000, savings: 16000 }, // Festive month
    { month: "Nov", income: 75000, expenses: 50800, savings: 24200 }  // Current
  ]
};

// --- END js/data/demoData.js ---

// --- START js/data/literacyData.js ---
// FINWISE - Financial Literacy Curriculum & Interactive Awareness Modules

const LITERACY_MODULES = [
  {
    id: "mod-1",
    title: "The 50/30/20 Rule for Indian Households",
    category: "Budgeting & Planning",
    duration: "5 min read",
    level: "Beginner",
    icon: "pie-chart",
    color: "#00F5A0",
    summary: "The golden formula to balance household obligations, lifestyle, and financial freedom.",
    content: `
### What is the 50/30/20 Rule?
Created by Senator Elizabeth Warren and adapted for Indian households, this framework partitions your net monthly in-hand income into three clear buckets:

1. **50% for Needs (Aavashyakta):**
   - House rent / Home loan EMI
   - Groceries, vegetables, milk, LPG cylinder
   - Children school fees, uniforms, textbooks
   - Electricity, water, Wi-Fi, mobile recharges
   - Basic term & health insurance premiums

2. **30% for Wants (Ichha):**
   - Dining out, Zomato/Swiggy orders, weekend cafes
   - OTT subscriptions (Netflix, Hotstar, Prime)
   - Vacation travel and festive gifts
   - Gadgets and discretionary clothes

3. **20% for Savings & Investments (Bachat):**
   - Emergency Fund accumulation
   - Mutual Fund SIP (Systematic Investment Plan)
   - PPF (Public Provident Fund) / Sukanya Samriddhi
   - Pre-payment of high-cost loans

> **Pro-Tip for Tier-1 Indian Cities:** If rent in cities like Mumbai or Bengaluru takes 35-40% of income, adjust to **55/25/20** — never compromise the 20% savings portion!
    `,
    takeaways: [
      "Pay yourself first: Move 20% to savings on salary day before spending.",
      "Distinguish needs from desires before swiping credit cards.",
      "Automate monthly SIPs via bank ECS or UPI mandate."
    ]
  },
  {
    id: "mod-2",
    title: "Power of Compounding & SIP vs Traditional FD",
    category: "Investments & Wealth",
    duration: "6 min read",
    level: "Intermediate",
    icon: "trending-up",
    color: "#3B82F6",
    summary: "Why time in the market beats timing the market, and how ₹5,000/month turns into ₹1 Crore.",
    content: `
### The Eighth Wonder of the World
Compound interest works when the returns generated on your principal begin generating their own returns.

#### Real Indian Scenario: The 15-Year Comparison
Suppose you invest **₹5,000 every month** for 15 years:

| Instrument | Expected Return | Total Invested | Final Maturity Value | Wealth Gain |
| :--- | :--- | :--- | :--- | :--- |
| **Traditional Bank FD** | 6.5% p.a. | ₹9,00,000 | **₹15,85,000** | + ₹6.85 Lakh |
| **PPF (Govt Guaranteed)** | 7.1% p.a. | ₹9,00,000 | **₹16,80,000** | + ₹7.80 Lakh |
| **Nifty 50 Index Mutual Fund** | 12.5% p.a. | ₹9,00,000 | **₹27,80,000** | **+ ₹18.80 Lakh** |

#### The "Rule of 72"
Divide 72 by the annual rate of return to know roughly when your money will double:
- At 6% FD: Money doubles in 72 / 6 = **12 years**
- At 12% Equity SIP: Money doubles in 72 / 12 = **6 years!**
    `,
    takeaways: [
      "Starting at age 25 vs 35 creates a 3x difference in retirement wealth.",
      "Step-up your SIP by 10% each year as your salary increments.",
      "Keep short-term goals (<3 years) in FD, long-term (>7 years) in Index Funds."
    ]
  },
  {
    id: "mod-3",
    title: "Digital Payment Safety & UPI Fraud Defense",
    category: "Cyber Safety",
    duration: "4 min read",
    level: "Crucial for All",
    icon: "shield-alert",
    color: "#EF4444",
    summary: "Golden rules to protect your hard-earned bank balance from QR code tricks and phishing.",
    content: `
### The #1 Rule of UPI: Entering PIN Means Money Goes OUT
Fraudsters exploit confusion between sending and receiving money.

#### Common Scams Targeting Indian Citizens:
1. **The "Refund / Cashback" QR Code:**
   - Scammer says: *"Scan this QR code on GooglePay/PhonePe to receive your ₹2,500 cashback!"*
   - Reality: You **NEVER** enter your 4-digit or 6-digit UPI PIN to receive money. Entering PIN only sends money out of your account!

2. **The "Electricity Disconnection" SMS:**
   - Scammer sends: *"Your power will be disconnected at 9:30 PM due to unpaid bill. Call this mobile number."*
   - Always pay only through official portals like Bharat BillPay (BBPS) or the state utility website.

3. **Screen Sharing Apps Trap:**
   - Never install apps like AnyDesk, TeamViewer, or RustDesk on the instruction of anyone claiming to be bank support or KYC agent.

#### What to do if Fraud Occurs?
- Call **1930** (National Cyber Crime Helpline) immediately within the *Golden Hour*.
- Lodge an official complaint at **cybercrime.gov.in**.
- Block your debit/credit card and freeze UPI via your bank's emergency hotline.
    `,
    takeaways: [
      "Never enter UPI PIN to receive money or lottery winnings.",
      "Never share OTP, CVV, or card expiry with anyone, even bank branch staff.",
      "Memorize 1930: India's official cyber financial fraud helpline."
    ]
  },
  {
    id: "mod-4",
    title: "Understanding Good Debt vs The Bad Debt Trap",
    category: "Borrowing & Loans",
    duration: "5 min read",
    level: "Intermediate",
    icon: "scale",
    color: "#F59E0B",
    summary: "How to tell productive leverage that builds wealth from toxic 40% interest credit loops.",
    content: `
### Not All Loans Are Created Equal
Debt is a double-edged sword. In Indian personal finance, debt can be categorized into:

#### Good Debt (Assets & Capabilities):
- **Education Loans:** Increases your future earning capacity. Interest is deductible under Section 80E with no upper ceiling.
- **Affordable Home Loans:** Builds an appreciating real estate asset. Provides tax benefits under Section 24(b) up to ₹2 Lakh on interest.
- **Mudra Business Loan:** Expands your shop or manufacturing capacity to earn higher revenue.

#### Bad Debt (Lifestyle & Depreciation):
- **Credit Card Minimum Due Rollover:** Banks charge 3.5% per month, which is **42% to 48% annual interest!**
- **Instant Chinese Lending Apps:** Unregistered NBFCs offering instant loans with invasive phone permission access and extortionate processing fees.
- **No-Cost EMI on Gadgets:** Often inflates purchasing above your actual budget affordability.
    `,
    takeaways: [
      "Always pay the TOTAL credit card due, never just the minimum due.",
      "Keep total EMI outflows under 40% of net monthly income.",
      "Check that any lending app is registered with the Reserve Bank of India (RBI)."
    ]
  },
  {
    id: "mod-5",
    title: "Building a Rock-Solid 6-Month Emergency Fund",
    category: "Financial Security",
    duration: "4 min read",
    level: "Beginner",
    icon: "shield",
    color: "#10B981",
    summary: "Why cash safety is the bedrock of every peaceful household and how to park it.",
    content: `
### What is an Emergency Fund?
An emergency fund is money set aside strictly for unexpected, unavoidable emergencies:
- Sudden medical expenses not fully covered by cashless insurance
- Temporary job loss or delay in client payments
- Urgent home appliance / vehicle repair essential for livelihood

#### How Much Do You Need?
**Formula:** Minimum 6 × (Mandatory Monthly Household Expenses)
*Example:* If your family spends ₹35,000 on rent, food, bills, and school fees:
- Ideal Emergency Fund = ₹35,000 × 6 = **₹2,10,000**

#### Where to Park It?
1. **50% in a Sweep-in Bank Account:** Instant ATM liquidity with 6-7% FD interest.
2. **50% in a Low-Risk Liquid Mutual Fund:** T+1 day withdrawal capability with zero lock-in.
    `,
    takeaways: [
      "Do NOT invest your emergency fund in stock markets or locked real estate.",
      "Treat this fund as an emotional oxygen mask, not an investment for profits.",
      "Replenish immediately whenever you withdraw from it."
    ]
  }
];

// Interactive Financial Quiz for Indian Citizens
const LITERACY_QUIZ = [
  {
    id: "q1",
    question: "You receive a phone call claiming to be your bank manager saying your ATM card is blocked and asking for the 6-digit OTP sent to your phone. What should you do?",
    options: [
      "Share the OTP immediately so your card is unblocked",
      "Ask them for their employee ID first and then share it",
      "Never share the OTP, hang up, and call the bank's official number directly",
      "Forward the OTP via WhatsApp to their official number"
    ],
    correctAnswer: 2,
    explanation: "Banks and their representatives NEVER ask for your OTP, PIN, or CVV under any circumstances. Sharing an OTP allows fraudsters to instantly debit your account."
  },
  {
    id: "q2",
    question: "Under the 50/30/20 budgeting rule, what percentage of your net monthly income should ideally be allocated towards savings and investments?",
    options: [
      "5% to 10%",
      "At least 20%",
      "50%",
      "Only whatever is left at the end of the month"
    ],
    correctAnswer: 1,
    explanation: "At least 20% should be earmarked for investments and debt reduction first (Pay Yourself First) before discretionary spending."
  },
  {
    id: "q3",
    question: "Someone on OLX / Quikr wants to buy your sofa and sends a QR code saying 'Scan this QR code on PhonePe/GPay to receive ₹5,000 in your account'. What will happen if you scan and enter your UPI PIN?",
    options: [
      "₹5,000 will be credited directly to your bank account",
      "₹5,000 will be debited (deducted) from YOUR bank account",
      "You will receive a discount coupon",
      "The app will ask you to verify your identity"
    ],
    correctAnswer: 1,
    explanation: "Entering your UPI PIN ALWAYS transfers money OUT of your account. You NEVER need to enter a UPI PIN to receive money into your bank."
  },
  {
    id: "q4",
    question: "Which of the following Indian government schemes offers a ₹2,00,000 accidental insurance cover for an annual premium of just ₹20?",
    options: [
      "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
      "Atal Pension Yojana (APY)",
      "Senior Citizens Savings Scheme (SCSS)",
      "Pradhan Mantri Mudra Yojana (PMMY)"
    ],
    correctAnswer: 0,
    explanation: "PMSBY provides ₹2 Lakh accidental death/full disability coverage for an annual premium of just ₹20, auto-debited from your bank account."
  },
  {
    id: "q5",
    question: "If you carry a balance on your credit card and only pay the 'Minimum Amount Due' each month, what approximate annual interest rate are you typically charged in India?",
    options: [
      "6% to 8% per annum",
      "10% to 12% per annum",
      "40% to 48% per annum",
      "Zero interest if paid within 90 days"
    ],
    correctAnswer: 2,
    explanation: "Rolling over credit card balances costs 3.5% to 4% per month, compounding to a staggering 42% to 48%+ annually! Always pay the Total Amount Due."
  }
];

// --- END js/data/literacyData.js ---

// --- START js/utils/formatters.js ---
// FINWISE - Number, Currency and Financial Health Calculation Helpers

/**
 * Format numbers in Indian numbering system: ₹1,50,000 or ₹15.5 Lakhs
 */
function formatINR(val, compact = false) {
  if (val === null || val === undefined || isNaN(val)) return "₹0";
  const num = Math.round(Number(val));
  
  if (compact) {
    if (Math.abs(num) >= 10000000) {
      return `₹${(num / 10000000).toFixed(2)} Cr`;
    }
    if (Math.abs(num) >= 100000) {
      return `₹${(num / 100000).toFixed(2)} L`;
    }
    if (Math.abs(num) >= 1000) {
      return `₹${(num / 1000).toFixed(1)}k`;
    }
  }

  // Standard Indian comma separator: 12,34,567
  const isNegative = num < 0;
  const absStr = Math.abs(num).toString();
  
  let lastThree = absStr.substring(absStr.length - 3);
  const otherNumbers = absStr.substring(0, absStr.length - 3);
  if (otherNumbers !== '') {
    lastThree = ',' + lastThree;
  }
  const res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return `${isNegative ? '-' : ''}₹${res}`;
}

/**
 * Calculates Financial Health Score (0 - 100) based on Indian financial norms
 */
function calculateHealthScore(monthlyIncome, monthlyExpenses, monthlySavings, emergencyBufferMonths = 4) {
  if (!monthlyIncome || monthlyIncome <= 0) {
    return {
      score: 50,
      grade: "Neutral",
      color: "#F59E0B",
      status: "Initial Assessment",
      breakdown: []
    };
  }

  const savingsRate = (monthlySavings / monthlyIncome) * 100;
  const expenseRatio = (monthlyExpenses / monthlyIncome) * 100;

  // 1. Savings Rate Score (Max 35 points)
  // 20% or more gets full 35 points
  let savingsScore = 0;
  if (savingsRate >= 25) savingsScore = 35;
  else if (savingsRate >= 20) savingsScore = 30;
  else if (savingsRate >= 15) savingsScore = 22;
  else if (savingsRate >= 10) savingsScore = 15;
  else if (savingsRate > 0) savingsScore = 8;

  // 2. Expense Discipline (Max 35 points)
  // Under 70% gets full 35 points
  let expenseScore = 0;
  if (expenseRatio <= 60) expenseScore = 35;
  else if (expenseRatio <= 70) expenseScore = 30;
  else if (expenseRatio <= 80) expenseScore = 22;
  else if (expenseRatio <= 90) expenseScore = 12;
  else expenseScore = 5;

  // 3. Emergency Safety Buffer (Max 20 points)
  let emergencyScore = 0;
  if (emergencyBufferMonths >= 6) emergencyScore = 20;
  else if (emergencyBufferMonths >= 3) emergencyScore = 15;
  else if (emergencyBufferMonths >= 1) emergencyScore = 10;
  else emergencyScore = 4;

  // 4. Financial Literacy Base (10 points)
  const literacyBase = 10;

  const totalScore = Math.min(100, Math.round(savingsScore + expenseScore + emergencyScore + literacyBase));

  let grade = "Needs Attention";
  let color = "#EF4444";
  let badge = "High Risk";
  let advice = "Your expenses are high relative to income. Focus on cutting discretionary wants.";

  if (totalScore >= 80) {
    grade = "Excellent";
    color = "#00F5A0";
    badge = "Wealth Builder";
    advice = "Outstanding financial control! You are on track for accelerated wealth creation.";
  } else if (totalScore >= 70) {
    grade = "Strong";
    color = "#10B981";
    badge = "Financially Resilient";
    advice = "Healthy budget discipline. Try stepping up monthly SIP by 5-10%.";
  } else if (totalScore >= 55) {
    grade = "Moderate";
    color = "#F59E0B";
    badge = "Balanced";
    advice = "Stable, but your emergency buffer could be bolstered to protect against shocks.";
  }

  return {
    score: totalScore,
    grade,
    color,
    badge,
    advice,
    metrics: {
      savingsRate: savingsRate.toFixed(1),
      expenseRatio: expenseRatio.toFixed(1),
      emergencyBuffer: `${emergencyBufferMonths} Months`
    },
    breakdown: [
      { label: "Savings Efficiency", score: savingsScore, max: 35, pct: Math.round((savingsScore / 35) * 100) },
      { label: "Expense Discipline", score: expenseScore, max: 35, pct: Math.round((expenseScore / 35) * 100) },
      { label: "Emergency Cushion", score: emergencyScore, max: 20, pct: Math.round((emergencyScore / 20) * 100) },
      { label: "Planning Habits", score: literacyBase, max: 10, pct: 100 }
    ]
  };
}

/**
 * Compound Interest / SIP Future Value Calculator
 * P = monthly investment, r = annual interest rate (e.g. 12), n = years
 */
function calculateSIP(monthlyInvestment, annualRatePercent, years) {
  const i = (annualRatePercent / 100) / 12; // Monthly rate
  const n = years * 12; // Total months
  const totalInvested = monthlyInvestment * n;
  
  // Future Value of SIP = P * [ ((1 + i)^n - 1) / i ] * (1 + i)
  const futureValue = monthlyInvestment * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  const estimatedReturns = futureValue - totalInvested;

  return {
    totalInvested: Math.round(totalInvested),
    futureValue: Math.round(futureValue),
    estimatedReturns: Math.round(estimatedReturns),
    wealthMultiplier: (futureValue / (totalInvested || 1)).toFixed(2)
  };
}

/**
 * Calculate Monthly Target required to reach a goal
 */
function calculateRequiredMonthly(targetAmount, currentAmount, targetDateStr) {
  const target = new Date(targetDateStr);
  const now = new Date();
  
  let months = (target.getFullYear() - now.getFullYear()) * 12 + (target.getMonth() - now.getMonth());
  if (months <= 0) months = 1;
  
  const remaining = Math.max(0, targetAmount - currentAmount);
  return {
    monthsLeft: months,
    remainingAmount: remaining,
    suggestedMonthly: Math.ceil(remaining / months)
  };
}

// --- END js/utils/formatters.js ---

// --- START js/utils/sound.js ---
// FINWISE - Web Audio API Micro-Interactions (Zero external asset dependencies)

class SoundFX {
  constructor() {
    this.ctx = null;
    this.enabled = localStorage.getItem("finwise_sound_enabled") !== "false";
  }

  init() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem("finwise_sound_enabled", this.enabled);
    if (this.enabled) this.playTone(523.25, "sine", 0.08, 0.05); // C5 blip
    return this.enabled;
  }

  playTone(freq, type = "sine", duration = 0.1, gainVal = 0.05) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio might be blocked by autoplay policies until user gesture
    }
  }

  playClick() {
    this.playTone(800, "triangle", 0.04, 0.03);
  }

  playTab() {
    this.playTone(600, "sine", 0.06, 0.04);
  }

  playSuccess() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        gain.gain.setValueAtTime(0.04, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.07 + 0.18);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.2);
      });
    } catch (e) {}
  }

  playCoin() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(987.77, now); // B5
      osc.frequency.exponentialRampToValueAtTime(1318.51, now + 0.08); // E6
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    } catch (e) {}
  }
}

const soundManager = new SoundFX();

// --- END js/utils/sound.js ---

// --- START js/utils/canvas3d.js ---
// FINWISE - High-Performance Canvas 3D Engine for Floating Coins & Financial Particles

/**
 * Renders realistic floating 3D Gold Rupee Coins with specular highlights,
 * continuous 3D rotation, and dynamic mouse interaction.
 */
class HeroCoinsCanvas {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width = canvas.offsetWidth || window.innerWidth;
    this.height = canvas.height = canvas.offsetHeight || window.innerHeight;
    this.coins = [];
    this.mouse = { x: this.width / 2, y: this.height / 2, targetX: this.width / 2, targetY: this.height / 2 };
    this.animId = null;
    this.initCoins();
    this.bindEvents();
    this.animate = this.animate.bind(this);
    this.animate();
  }

  initCoins() {
    this.coins = [
      { x: this.width * 0.2, y: this.height * 0.35, radius: 38, rotY: 0.2, rotX: 0.3, speedY: 0.022, speedX: 0.008, bobSpeed: 0.002, bobAmp: 18, bobOffset: 0, glow: '#00F5A0' },
      { x: this.width * 0.82, y: this.height * 0.25, radius: 46, rotY: 1.5, rotX: -0.2, speedY: 0.018, speedX: 0.005, bobSpeed: 0.0025, bobAmp: 22, bobOffset: 1.5, glow: '#FFD700' },
      { x: this.width * 0.78, y: this.height * 0.75, radius: 34, rotY: 3.2, rotX: 0.4, speedY: 0.026, speedX: 0.012, bobSpeed: 0.0018, bobAmp: 15, bobOffset: 3.0, glow: '#00E5FF' },
      { x: this.width * 0.15, y: this.height * 0.78, radius: 30, rotY: 4.8, rotX: -0.3, speedY: 0.02, speedX: 0.009, bobSpeed: 0.0022, bobAmp: 14, bobOffset: 4.5, glow: '#FFB800' },
      { x: this.width * 0.5, y: this.height * 0.15, radius: 24, rotY: 2.1, rotX: 0.1, speedY: 0.028, speedX: 0.006, bobSpeed: 0.003, bobAmp: 12, bobOffset: 2.2, glow: '#10B981' }
    ];
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      if (!this.canvas) return;
      this.width = this.canvas.width = this.canvas.offsetWidth || window.innerWidth;
      this.height = this.canvas.height = this.canvas.offsetHeight || window.innerHeight;
      this.initCoins();
    });

    window.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.targetX = e.clientX - rect.left;
      this.mouse.targetY = e.clientY - rect.top;
    });
  }

  drawCoin(coin, time) {
    const ctx = this.ctx;
    const { radius, rotY, rotX, bobSpeed, bobAmp, bobOffset } = coin;

    // Bobbing motion
    const currentY = coin.y + Math.sin(time * bobSpeed + bobOffset) * bobAmp;
    const currentX = coin.x + Math.cos(time * (bobSpeed * 0.7) + bobOffset) * (bobAmp * 0.4);

    // Subtle parallax response to mouse
    const offsetX = (this.mouse.x - this.width / 2) * 0.03;
    const offsetY = (this.mouse.y - this.height / 2) * 0.03;

    const posX = currentX + offsetX;
    const posY = currentY + offsetY;

    ctx.save();
    ctx.translate(posX, posY);

    // Calculate 3D perspective projection via scale
    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);
    const absCosY = Math.max(0.12, Math.abs(cosY));

    // Outer Ambient Glow
    const glowGrad = ctx.createRadialGradient(0, 0, radius * 0.5, 0, 0, radius * 2.2);
    glowGrad.addColorStop(0, 'rgba(0, 245, 160, 0.25)');
    glowGrad.addColorStop(0.5, 'rgba(255, 215, 0, 0.12)');
    glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glowGrad;
    ctx.beginPath();
    ctx.arc(0, 0, radius * 2.2, 0, Math.PI * 2);
    ctx.fill();

    // 3D Coin Edge / Thickness extrusion
    const thickness = 10;
    const edgeStep = 1;
    const sign = cosY >= 0 ? 1 : -1;

    for (let t = -thickness / 2; t <= thickness / 2; t += edgeStep) {
      const edgeGrad = ctx.createLinearGradient(-radius, 0, radius, 0);
      edgeGrad.addColorStop(0, '#B38728');
      edgeGrad.addColorStop(0.3, '#FBF5B7');
      edgeGrad.addColorStop(0.7, '#DAA520');
      edgeGrad.addColorStop(1, '#AA771C');

      ctx.fillStyle = edgeGrad;
      ctx.beginPath();
      ctx.ellipse(t * sinY * 0.4, 0, radius * absCosY, radius, rotX, 0, Math.PI * 2);
      ctx.fill();
    }

    // Coin Face (Front or Back)
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(thickness / 2 * sinY * 0.4 * sign, 0, radius * absCosY, radius, rotX, 0, Math.PI * 2);
    ctx.clip();

    // Metallic Radial Gradient on face
    const faceGrad = ctx.createRadialGradient(-radius * 0.3 * cosY, -radius * 0.3, radius * 0.1, 0, 0, radius);
    if (cosY >= 0) {
      // Front Face: Glowing Gold & Emerald tint
      faceGrad.addColorStop(0, '#FFFBEB');
      faceGrad.addColorStop(0.2, '#FDE047');
      faceGrad.addColorStop(0.5, '#D97706');
      faceGrad.addColorStop(0.85, '#B45309');
      faceGrad.addColorStop(1, '#78350F');
    } else {
      // Back Face: Deep burnished gold
      faceGrad.addColorStop(0, '#FEF08A');
      faceGrad.addColorStop(0.3, '#CA8A04');
      faceGrad.addColorStop(0.7, '#854D0E');
      faceGrad.addColorStop(1, '#451A03');
    }
    ctx.fillStyle = faceGrad;
    ctx.fillRect(-radius * 2, -radius * 2, radius * 4, radius * 4);

    // Inner embossed border ring
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.ellipse(0, 0, radius * absCosY * 0.82, radius * 0.82, rotX, 0, Math.PI * 2);
    ctx.stroke();

    // Embossed Indian Rupee symbol: ₹
    if (absCosY > 0.25) {
      ctx.save();
      ctx.scale(absCosY, 1);
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
      ctx.shadowBlur = 6;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 2;
      ctx.font = `bold ${Math.round(radius * 0.9)}px 'Outfit', 'Inter', sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('₹', 0, 2);
      ctx.restore();
    }

    // Specular Glint Highlight sweeping across
    const glintPos = Math.sin(time * 0.003 + coin.bobOffset) * radius * 2;
    const glintGrad = ctx.createLinearGradient(glintPos - 25, -radius, glintPos + 25, radius);
    glintGrad.addColorStop(0, 'rgba(255,255,255,0)');
    glintGrad.addColorStop(0.5, 'rgba(255,255,255,0.75)');
    glintGrad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = glintGrad;
    ctx.fillRect(-radius * 2, -radius * 2, radius * 4, radius * 4);

    ctx.restore(); // end clip
    ctx.restore(); // end translate
  }

  animate() {
    const time = performance.now();
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Smooth mouse lerp
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    this.coins.forEach(coin => {
      coin.rotY += coin.speedY;
      coin.rotX += coin.speedX;
      this.drawCoin(coin, time);
    });

    this.animId = requestAnimationFrame(this.animate);
  }

  destroy() {
    if (this.animId) cancelAnimationFrame(this.animId);
  }
}

/**
 * Background Ambient Fintech Particle Matrix
 */
class FinancialParticleNetwork {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width = window.innerWidth;
    this.height = canvas.height = window.innerHeight;
    this.particles = [];
    this.mouse = { x: -1000, y: -1000 };
    this.init();
    this.bindEvents();
    this.animate = this.animate.bind(this);
    this.animate();
  }

  init() {
    const count = Math.min(65, Math.floor((this.width * this.height) / 18000));
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.4 ? '#00F5A0' : (Math.random() > 0.5 ? '#00E5FF' : '#FFD700')
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      if (!this.canvas) return;
      this.width = this.canvas.width = window.innerWidth;
      this.height = this.canvas.height = window.innerHeight;
      this.init();
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;
      if (p.y < 0) p.y = this.height;
      if (p.y > this.height) p.y = 0;

      // Mouse repulsion/attraction
      const dx = this.mouse.x - p.x;
      const dy = this.mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        p.x -= (dx / dist) * 1.5;
        p.y -= (dy / dist) * 1.5;
      }

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fill();

      // Connect near particles
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const d = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (d < 95) {
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = '#00F5A0';
          this.ctx.globalAlpha = (1 - d / 95) * 0.14;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }
    }

    this.ctx.globalAlpha = 1;
    this.animId = requestAnimationFrame(this.animate);
  }
}

/**
 * 3D Tilt Hook/Helper for cards
 */
function apply3DTilt(element, maxAngle = 12) {
  if (!element) return;

  function handleMove(e) {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -maxAngle;
    const rotateY = ((x - centerX) / centerX) * maxAngle;
    
    element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }

  function handleLeave() {
    element.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  }

  element.addEventListener('mousemove', handleMove);
  element.addEventListener('mouseleave', handleLeave);

  return () => {
    element.removeEventListener('mousemove', handleMove);
    element.removeEventListener('mouseleave', handleLeave);
  };
}

// --- END js/utils/canvas3d.js ---

// --- START js/components/Navbar.js ---
// FINWISE - Navigation Component with Glassmorphism, Sound Toggle, and Mobile Drawer

function Navbar({ activeSection, onNavigate, onOpenAuth, onOpenNewTransaction, user, soundEnabled, onToggleSound }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'budget', label: 'Budget Planner' },
    { id: 'savings', label: 'Savings' },
    { id: 'schemes', label: 'Govt Schemes' },
    { id: 'literacy', label: 'Learn Finance' },
    { id: 'assistant', label: 'FinBot AI' }
  ];

  const handleLinkClick = (id) => {
    soundManager.playTab();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[#050814]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => handleLinkClick('hero')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-[1px] shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all">
            <div className="w-full h-full bg-[#070D1E] rounded-xl flex items-center justify-center relative overflow-hidden">
              <span className="font-display font-extrabold text-xl text-emerald-400">₹</span>
              <div className="absolute inset-0 bg-emerald-400/10 group-hover:bg-emerald-400/20 transition-all"></div>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full"></div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-2xl tracking-tight text-white">FIN<span className="text-emerald-400">WISE</span></span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">INDIA</span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium -mt-1 hidden sm:block tracking-wide">Smart Money. Better Decisions.</p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 relative ${
                  isActive
                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 shadow-sm shadow-emerald-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-emerald-400 rounded-full shadow-[0_0_8px_#00F5A0]"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions & Utilities */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Sound Toggle Button */}
          <button
            onClick={() => {
              onToggleSound();
            }}
            title={soundEnabled ? "Sound FX Enabled" : "Sound Muted"}
            className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-all"
          >
            {soundEnabled ? (
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            )}
          </button>

          {/* Quick Add Transaction */}
          <button
            onClick={() => {
              soundManager.playClick();
              onOpenNewTransaction();
            }}
            className="px-3 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-1.5 transition-all"
          >
            <span className="text-sm leading-none">+</span> Add Entry
          </button>

          {/* User Profile / Login */}
          <button
            onClick={() => {
              soundManager.playClick();
              onOpenAuth();
            }}
            className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 transition-all group"
          >
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-emerald-400 to-cyan-500 flex items-center justify-center text-[11px] font-black text-slate-900">
              {user?.name ? user.name.charAt(0) : 'A'}
            </div>
            <span className="group-hover:text-emerald-400 transition-colors">{user?.name ? user.name.split(' ')[0] : 'Profile'}</span>
          </button>

          {/* CTA Button */}
          <button
            onClick={() => handleLinkClick('budget')}
            className="btn-emerald text-xs !py-2 !px-4"
          >
            <span>Get Started</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070D1E]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 mt-3 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                activeSection === link.id
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  : 'text-slate-300 hover:bg-white/5'
              }`}
            >
              <span>{link.label}</span>
              <svg className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
          <div className="pt-3 border-t border-white/10 flex items-center gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenNewTransaction();
              }}
              className="flex-1 py-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold text-center"
            >
              + Add Transaction
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="flex-1 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-bold text-center"
            >
              My Account
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

// --- END js/components/Navbar.js ---

// --- START js/components/Hero.js ---
// FINWISE - Animated Futuristic Hero Section with 3D Tilt Dashboard & Floating Coins Canvas

function Hero({ onStartPlanning, onExploreFeatures, healthData, totalSavings, totalIncome }) {
  const [counterSavings, setCounterSavings] = React.useState(0);
  const coinsCanvasRef = React.useRef(null);
  const dashboardCardRef = React.useRef(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  // Smooth Counter animation for savings
  React.useEffect(() => {
    let start = 0;
    const end = totalSavings || 24200;
    const duration = 2000;
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = (end - start) / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCounterSavings(end);
        clearInterval(timer);
      } else {
        setCounterSavings(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [totalSavings]);

  // Initialize Canvas 3D Floating Coins
  React.useEffect(() => {
    let coinsInstance = null;
    if (coinsCanvasRef.current) {
      coinsInstance = new HeroCoinsCanvas(coinsCanvasRef.current);
    }
    return () => {
      if (coinsInstance) coinsInstance.destroy();
    };
  }, []);

  // Parallax 3D tilt tracking for hero container
  const handleMouseMove = (e) => {
    if (!dashboardCardRef.current) return;
    const rect = dashboardCardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setMousePos({ x: -y, y: x });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Circular health score parameters
  const score = healthData?.score || 84;
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <section 
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      {/* Floating 3D Coins Canvas Overlay */}
      <canvas 
        ref={coinsCanvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Super Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md shadow-sm shadow-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-bold text-emerald-300 tracking-wide">
                NEXT-GEN INDIAN FINTECH PLATFORM
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
              Take Control of <br />
              <span className="text-gradient-emerald">Your Money.</span> <br />
              <span className="relative">
                Build a Better Future.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-400/40" viewBox="0 0 300 12" fill="none">
                  <path d="M2 9C70 3 230 3 298 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Your smart companion for household budgeting, automated savings milestones, 
              verified Indian government schemes, and fraud-free financial awareness.
            </p>

            {/* Trust Highlights Grid */}
            <div className="grid grid-cols-3 gap-3 py-2 max-w-xl mx-auto lg:mx-0">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                <div className="font-display font-bold text-lg sm:text-xl text-white">₹0 Zero</div>
                <div className="text-[11px] text-slate-400">100% Free for Citizens</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                <div className="font-display font-bold text-lg sm:text-xl text-emerald-400">50/30/20</div>
                <div className="text-[11px] text-slate-400">Rule Built-in Engine</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                <div className="font-display font-bold text-lg sm:text-xl text-cyan-400">10+ Verified</div>
                <div className="text-[11px] text-slate-400">Govt Schemes Portal</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => {
                  soundManager.playClick();
                  onStartPlanning();
                }}
                className="btn-emerald w-full sm:w-auto text-sm !px-7 !py-3.5 shadow-xl shadow-emerald-500/25"
              >
                <span>Start Planning Free</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <button
                onClick={() => {
                  soundManager.playTab();
                  onExploreFeatures();
                }}
                className="btn-secondary w-full sm:w-auto text-sm !px-6 !py-3.5"
              >
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Explore Features</span>
              </button>
            </div>

            {/* Indian Citizens Security Guarantee */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-medium">100% Client-Side Privacy</span>
              </div>
              <span>•</span>
              <span>No Aadhaar/Bank login needed for planner</span>
              <span>•</span>
              <span className="text-slate-300">₹ INR Localized</span>
            </div>

          </div>

          {/* Right Column: 3D Floating Financial Dashboard */}
          <div className="lg:col-span-5 relative">
            
            {/* Decorative Ambient Background Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-2xl transform scale-95 opacity-80"></div>

            {/* Main Interactive 3D Card with Tilt */}
            <div 
              ref={dashboardCardRef}
              style={{
                transform: `perspective(1000px) rotateX(${mousePos.x}deg) rotateY(${mousePos.y}deg)`,
                transition: 'transform 0.15s ease-out'
              }}
              className="relative glass-panel-elevated p-6 border border-emerald-500/30 backdrop-blur-2xl shadow-2xl shadow-black/80"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                  <span className="font-display font-bold text-sm tracking-wide text-white">LIVE FAMILY LEDGER</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono font-semibold">
                  <span>NOVEMBER 2026</span>
                </div>
              </div>

              {/* Top Row: Savings Counter & Financial Health Ring */}
              <div className="grid grid-cols-2 gap-4 py-5 items-center">
                
                {/* Savings Counter Box */}
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Net Savings This Month</span>
                  <div className="font-display font-extrabold text-3xl sm:text-4xl text-gradient-emerald">
                    {formatINR(counterSavings)}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span>+22.7% of Household Income</span>
                  </div>
                </div>

                {/* Animated Health Ring Indicator */}
                <div className="flex flex-col items-center justify-center relative">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r={radius}
                        stroke="rgba(255, 255, 255, 0.08)"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r={radius}
                        stroke="url(#emeraldGrad)"
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        fill="transparent"
                        className="circular-progress-circle"
                      />
                      <defs>
                        <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00F5A0" />
                          <stop offset="100%" stopColor="#00E5FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="font-display font-black text-2xl text-white leading-none">{score}</span>
                      <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-bold">HEALTH</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-slate-300 mt-1">Excellent Score</span>
                </div>

              </div>

              {/* Animated Mini Cash Flow Line Chart Simulation */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Monthly Cash Flow Flowchart</span>
                  <span className="text-emerald-400 font-mono font-bold">Surplus: +₹24.2k</span>
                </div>
                {/* SVG Mini Wave Chart */}
                <div className="h-16 w-full">
                  <svg className="w-full h-full" viewBox="0 0 300 70" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00F5A0" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#00F5A0" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Area fill */}
                    <path
                      d="M0,50 Q40,42 80,48 T160,25 T240,32 T300,12 L300,70 L0,70 Z"
                      fill="url(#chartGlow)"
                    />
                    {/* Gradient Line */}
                    <path
                      d="M0,50 Q40,42 80,48 T160,25 T240,32 T300,12"
                      fill="none"
                      stroke="#00F5A0"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    {/* Pulsing Dot at End */}
                    <circle cx="300" cy="12" r="5" fill="#00F5A0" />
                    <circle cx="300" cy="12" r="10" fill="#00F5A0" opacity="0.3" className="animate-ping" />
                  </svg>
                </div>
              </div>

              {/* Floating Mini Satellite Glass Cards */}
              
              {/* Satellite 1: Top Right Scheme Alert */}
              <div className="absolute -top-6 -right-6 hidden sm:flex items-center gap-2.5 p-3 rounded-xl bg-[#09112A]/90 border border-emerald-500/40 backdrop-blur-xl shadow-xl shadow-black/60 animate-float-slow">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">
                  🛡️
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">PMSBY Scheme Enrolled</div>
                  <div className="text-[10px] text-emerald-300 font-mono">₹2,00,000 Cover @ ₹20/yr</div>
                </div>
              </div>

              {/* Satellite 2: Bottom Left 50-30-20 Rule Alert */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-2.5 p-3 rounded-xl bg-[#09112A]/90 border border-cyan-500/40 backdrop-blur-xl shadow-xl shadow-black/60 animate-float-reverse">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-xs">
                  ⚖️
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">50/30/20 Balanced</div>
                  <div className="text-[10px] text-cyan-300 font-mono">Needs: 48% | Wants: 29% | Save: 23%</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

// --- END js/components/Hero.js ---

// --- START js/components/Dashboard.js ---
// FINWISE - Interactive Financial Dashboard Component

function Dashboard({ data, healthData, onOpenAddTransaction, onNavigate }) {
  const [activeTab, setActiveTab] = React.useState('overview');
  const [selectedTxFilter, setSelectedTxFilter] = React.useState('all');

  const { user, categories, transactions, monthlyCashFlowTrends } = data;

  // Calculate totals
  const totalIncome = user.monthlyIncome || 75000;
  const totalExpenses = categories.reduce((sum, c) => sum + (c.spent || 0), 0);
  const totalBudget = categories.reduce((sum, c) => sum + (c.budget || 0), 0);
  const netSavings = Math.max(0, totalIncome - totalExpenses);
  const savingsRate = ((netSavings / totalIncome) * 100).toFixed(1);

  // Filtered transactions
  const filteredTransactions = transactions.filter(tx => {
    if (selectedTxFilter === 'all') return true;
    if (selectedTxFilter === 'income') return tx.type === 'income';
    if (selectedTxFilter === 'expense') return tx.type === 'expense';
    return true;
  });

  return (
    <section id="dashboard" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Household Financial Command Center</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Monthly Financial <span className="text-gradient-emerald">Snapshot</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1">
              Real-time monitoring of your household cash flow, category budgets, and liquidity.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                soundManager.playClick();
                onOpenAddTransaction();
              }}
              className="btn-emerald text-xs !py-2.5 !px-4"
            >
              <span className="text-base font-bold leading-none">+</span>
              <span>Record Transaction</span>
            </button>
            <button
              onClick={() => {
                soundManager.playTab();
                onNavigate('budget');
              }}
              className="btn-secondary text-xs !py-2.5 !px-4"
            >
              <span>Edit Budget Limits</span>
            </button>
          </div>
        </div>

        {/* 4 Key Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Total Monthly Income */}
          <div className="glass-panel p-5 space-y-2 border-l-4 border-l-emerald-400">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
              <span>Total Monthly Income</span>
              <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </div>
            <div className="font-display font-black text-2xl sm:text-3xl text-white">
              {formatINR(totalIncome)}
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="text-emerald-400 font-bold">2 Sources</span>
              <span>•</span>
              <span>₹58k Salary + ₹17k Freelance</span>
            </div>
          </div>

          {/* Card 2: Total Spent So Far */}
          <div className="glass-panel p-5 space-y-2 border-l-4 border-l-rose-500">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
              <span>Expenses This Month</span>
              <span className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              </span>
            </div>
            <div className="font-display font-black text-2xl sm:text-3xl text-rose-400">
              {formatINR(totalExpenses)}
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden flex-1">
                <div 
                  className="bg-rose-400 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${Math.min(100, (totalExpenses / totalBudget) * 100)}%` }}
                ></div>
              </div>
              <span className="font-mono text-slate-300 font-bold whitespace-nowrap">
                {((totalExpenses / totalBudget) * 100).toFixed(0)}% of limit
              </span>
            </div>
          </div>

          {/* Card 3: Net Available Savings */}
          <div className="glass-panel p-5 space-y-2 border-l-4 border-l-cyan-400">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
              <span>Net Available Savings</span>
              <span className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
            </div>
            <div className="font-display font-black text-2xl sm:text-3xl text-gradient-emerald">
              {formatINR(netSavings)}
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 font-bold font-mono">{savingsRate}%</span>
              <span>Target: 20% achieved!</span>
            </div>
          </div>

          {/* Card 4: Financial Health Score */}
          <div className="glass-panel p-5 space-y-2 border-l-4 border-l-amber-400">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
              <span>Financial Health Score</span>
              <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display font-black text-2xl sm:text-3xl text-amber-300">
                {healthData.score}/100
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300">
                {healthData.grade}
              </span>
            </div>
            <div className="text-[11px] text-slate-400 truncate">
              {healthData.advice}
            </div>
          </div>

        </div>

        {/* Charts Section: Cash Flow Trend & Category Breakdown Donut */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Cash Flow 6-Month Comparison (8 cols) */}
          <div className="lg:col-span-7 glass-panel p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div>
                <h3 className="font-display font-bold text-lg text-white">Cash Flow Trends (Past 6 Months)</h3>
                <p className="text-xs text-slate-400">Income vs Expenses vs Retained Monthly Savings in ₹</p>
              </div>
              <div className="flex items-center gap-3 text-xs font-medium">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span>Income</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                  <span>Expense</span>
                </div>
              </div>
            </div>

            {/* Custom SVG Bar & Trend Chart */}
            <div className="h-64 flex flex-col justify-end pt-4">
              <div className="grid grid-cols-6 gap-3 items-end h-48 border-b border-white/10 pb-2">
                {monthlyCashFlowTrends.map((trend, i) => {
                  const maxVal = 90000;
                  const incHeight = (trend.income / maxVal) * 100;
                  const expHeight = (trend.expenses / maxVal) * 100;

                  return (
                    <div key={i} className="flex flex-col items-center gap-2 group h-full justify-end">
                      {/* Hover Tooltip Value */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] bg-slate-900 border border-white/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono">
                        {formatINR(trend.income, true)}
                      </div>

                      <div className="flex items-end gap-1.5 w-full justify-center h-40">
                        {/* Income Bar */}
                        <div 
                          style={{ height: `${incHeight}%` }}
                          className="w-3 sm:w-5 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-sm group-hover:brightness-125 transition-all duration-300"
                        ></div>
                        {/* Expense Bar */}
                        <div 
                          style={{ height: `${expHeight}%` }}
                          className="w-3 sm:w-5 bg-gradient-to-t from-rose-700 to-rose-400 rounded-t-sm group-hover:brightness-125 transition-all duration-300"
                        ></div>
                      </div>

                      <span className="text-[11px] font-semibold text-slate-400 group-hover:text-white transition-colors">
                        {trend.month}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Chart Footer Insight */}
              <div className="flex items-center justify-between text-xs text-slate-400 pt-3">
                <span className="flex items-center gap-1 text-emerald-400">
                  <span>💡</span> October had higher festive spend; November savings rebounded by 32%.
                </span>
                <span className="font-mono text-slate-500">Scale: ₹0 to ₹90,000</span>
              </div>
            </div>

          </div>

          {/* Category Breakdown Donut / List (5 cols) */}
          <div className="lg:col-span-5 glass-panel p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div>
                <h3 className="font-display font-bold text-lg text-white">Expense Distribution</h3>
                <p className="text-xs text-slate-400">November Category Breakdown</p>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                8 Categories
              </span>
            </div>

            {/* Category Progress Bars */}
            <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
              {categories.map((cat) => {
                const pct = Math.min(100, Math.round((cat.spent / cat.budget) * 100));
                const isOverBudget = cat.spent > cat.budget;

                return (
                  <div key={cat.id} className="space-y-1 p-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }}></span>
                        <span className="font-medium text-slate-200">{cat.name}</span>
                        <span className="text-[10px] text-slate-400 capitalize">({cat.type})</span>
                      </div>
                      <div className="font-mono font-semibold text-slate-200">
                        {formatINR(cat.spent)} <span className="text-slate-500">/ {formatINR(cat.budget)}</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${pct}%`,
                          backgroundColor: isOverBudget ? '#EF4444' : cat.color
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick 50/30/20 Breakdown Mini Pills */}
            <div className="pt-2 border-t border-white/5 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <div className="text-[10px] text-slate-400">Needs (50%)</div>
                <div className="font-bold text-emerald-400 font-mono">48.2%</div>
              </div>
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <div className="text-[10px] text-slate-400">Wants (30%)</div>
                <div className="font-bold text-cyan-400 font-mono">29.1%</div>
              </div>
              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <div className="text-[10px] text-slate-400">Savings (20%)</div>
                <div className="font-bold text-amber-300 font-mono">22.7%</div>
              </div>
            </div>

          </div>

        </div>

        {/* Recent Transactions List with Filter Tabs */}
        <div className="glass-panel p-6 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
            <div>
              <h3 className="font-display font-bold text-xl text-white">Recent Transactions</h3>
              <p className="text-xs text-slate-400">Audited passbook with instant payment method & categorization.</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-white/10">
              {['all', 'income', 'expense'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    soundManager.playTab();
                    setSelectedTxFilter(filter);
                  }}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg capitalize transition-all ${
                    selectedTxFilter === filter
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Transactions Table / List */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/5 text-slate-400 uppercase tracking-wider text-[10px] pb-2">
                  <th className="py-2.5 font-semibold">Title & Details</th>
                  <th className="py-2.5 font-semibold">Category</th>
                  <th className="py-2.5 font-semibold">Date</th>
                  <th className="py-2.5 font-semibold">Payment Mode</th>
                  <th className="py-2.5 font-semibold text-right">Amount (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredTransactions.map((tx) => {
                  const isIncome = tx.type === 'income';
                  return (
                    <tr key={tx.id} className="hover:bg-white/[0.02] transition-colors group">
                      {/* Title */}
                      <td className="py-3 pr-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                            isIncome ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                          }`}>
                            {isIncome ? '↓' : '↑'}
                          </div>
                          <div>
                            <div className="font-semibold text-slate-100 group-hover:text-emerald-300 transition-colors">
                              {tx.title}
                            </div>
                            <span className="text-[10px] text-slate-400">{tx.badge}</span>
                          </div>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="py-3 px-2 text-slate-300">
                        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px]">
                          {tx.category}
                        </span>
                      </td>

                      {/* Date */}
                      <td className="py-3 px-2 font-mono text-slate-400 text-[11px]">
                        {tx.date}
                      </td>

                      {/* Payment Method */}
                      <td className="py-3 px-2 text-slate-300 font-medium">
                        <span className="text-slate-400 text-[11px]">{tx.paymentMethod}</span>
                      </td>

                      {/* Amount */}
                      <td className={`py-3 pl-3 text-right font-mono font-bold text-sm ${
                        isIncome ? 'text-emerald-400' : 'text-slate-100'
                      }`}>
                        {isIncome ? '+' : '-'}{formatINR(tx.amount)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs text-slate-400">
            <span>Showing {filteredTransactions.length} entries</span>
            <button
              onClick={() => {
                soundManager.playClick();
                onOpenAddTransaction();
              }}
              className="text-emerald-400 hover:underline font-semibold"
            >
              + Record another transaction
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

// --- END js/components/Dashboard.js ---

// --- START js/components/BudgetPlanner.js ---
// FINWISE - Smart Budget Planner Component with 50/30/20 Rule Engine

function BudgetPlanner({ data, onUpdateBudget, onResetDemo, onShowToast }) {
  const [income, setIncome] = React.useState(data.user.monthlyIncome || 75000);
  const [categories, setCategories] = React.useState(data.categories || []);
  const [hasChanges, setHasChanges] = React.useState(false);

  // Sync state if props change externally
  React.useEffect(() => {
    setIncome(data.user.monthlyIncome || 75000);
    setCategories(data.categories || []);
  }, [data]);

  // Handle Category Budget Change
  const handleBudgetChange = (catId, newBudget) => {
    const val = Math.max(0, parseInt(newBudget) || 0);
    const updated = categories.map(c => c.id === catId ? { ...c, budget: val } : c);
    setCategories(updated);
    setHasChanges(true);
  };

  // Handle Category Actual Spent Change
  const handleSpentChange = (catId, newSpent) => {
    const val = Math.max(0, parseInt(newSpent) || 0);
    const updated = categories.map(c => c.id === catId ? { ...c, spent: val } : c);
    setCategories(updated);
    setHasChanges(true);
  };

  // Calculations
  const totalBudgeted = categories.reduce((sum, c) => sum + (c.budget || 0), 0);
  const totalSpent = categories.reduce((sum, c) => sum + (c.spent || 0), 0);
  const remainingFromIncome = Math.max(0, income - totalSpent);
  const remainingBudgetPool = income - totalBudgeted;

  // 50-30-20 partition
  const needsSpent = categories.filter(c => c.type === 'needs').reduce((sum, c) => sum + c.spent, 0);
  const wantsSpent = categories.filter(c => c.type === 'wants').reduce((sum, c) => sum + c.spent, 0);
  const savingsAmount = Math.max(0, income - (needsSpent + wantsSpent));

  const needsPct = income > 0 ? ((needsSpent / income) * 100).toFixed(1) : 0;
  const wantsPct = income > 0 ? ((wantsSpent / income) * 100).toFixed(1) : 0;
  const savingsPct = income > 0 ? ((savingsAmount / income) * 100).toFixed(1) : 0;

  // Save changes
  const handleSave = () => {
    soundManager.playSuccess();
    onUpdateBudget({ income, categories });
    setHasChanges(false);
    onShowToast("Budget updated successfully! Changes saved locally.", "success");
  };

  // Print / Export
  const handleExport = () => {
    soundManager.playClick();
    window.print();
  };

  return (
    <section id="budget" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Smart Indian Household Budgeting</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Interactive <span className="text-gradient-emerald">Budget Planner</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1">
              Adjust monthly allocations, balance the 50/30/20 rule, and unlock automatic savings.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {hasChanges && (
              <button
                onClick={handleSave}
                className="btn-emerald text-xs !py-2.5 !px-5 animate-pulse"
              >
                <span>Save Changes</span>
              </button>
            )}
            <button
              onClick={() => {
                soundManager.playClick();
                onResetDemo();
              }}
              className="btn-secondary text-xs !py-2.5 !px-4"
              title="Reset to default benchmark data"
            >
              <span>Reset Benchmark</span>
            </button>
            <button
              onClick={handleExport}
              className="btn-secondary text-xs !py-2.5 !px-3"
              title="Print or Save as PDF"
            >
              <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Income & Core Allocation Bar */}
        <div className="glass-panel p-6 border border-emerald-500/30 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Monthly Net Household Income Input */}
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                Monthly Household Income (₹)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-400 font-bold text-lg">₹</span>
                <input
                  type="number"
                  value={income}
                  onChange={(e) => {
                    setIncome(Math.max(0, parseInt(e.target.value) || 0));
                    setHasChanges(true);
                  }}
                  className="w-full bg-[#070D1E] border border-white/10 focus:border-emerald-400 rounded-xl pl-9 pr-4 py-3 text-white font-mono font-bold text-lg focus:outline-none transition-colors"
                />
              </div>
              <p className="text-[11px] text-slate-400">Total in-hand earnings after taxes & deductions.</p>
            </div>

            {/* Total Allocated vs Total Spent */}
            <div className="space-y-1 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Total Budget Allocated</span>
                <span className="font-mono text-white font-semibold">{formatINR(totalBudgeted)}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <span>Total Spent This Month</span>
                <span className="font-mono text-rose-400 font-semibold">{formatINR(totalSpent)}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-400 pt-1 border-t border-white/5">
                <span className="text-emerald-400 font-semibold">Unallocated Buffer</span>
                <span className={`font-mono font-bold ${remainingBudgetPool >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {formatINR(remainingBudgetPool)}
                </span>
              </div>
            </div>

            {/* Live Remaining Balance for Savings */}
            <div className="p-4 rounded-xl bg-gradient-to-tr from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 text-center space-y-1">
              <span className="text-xs uppercase tracking-wider font-bold text-emerald-300">
                Remaining Balance for Savings
              </span>
              <div className="font-display font-black text-3xl text-gradient-emerald">
                {formatINR(remainingFromIncome)}
              </div>
              <span className="text-[11px] text-slate-400">
                Can be diverted directly to your SIPs or Emergency fund.
              </span>
            </div>

          </div>

          {/* 50-30-20 Rule Compliance Visualizer */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-sm text-white">50/30/20 Rule Adherence</span>
                <span className="text-[10px] text-slate-400">Indian Household Standard</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="text-emerald-400 font-bold">Needs: {needsPct}% / 50%</span>
                <span className="text-cyan-400 font-bold">Wants: {wantsPct}% / 30%</span>
                <span className="text-amber-300 font-bold">Savings: {savingsPct}% / 20%</span>
              </div>
            </div>

            {/* Stacked Percentage Bar */}
            <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden flex">
              <div 
                style={{ width: `${Math.min(100, needsPct)}%` }} 
                className="bg-emerald-400 h-full transition-all duration-500" 
                title={`Needs: ${needsPct}%`}
              ></div>
              <div 
                style={{ width: `${Math.min(100, wantsPct)}%` }} 
                className="bg-cyan-400 h-full transition-all duration-500" 
                title={`Wants: ${wantsPct}%`}
              ></div>
              <div 
                style={{ width: `${Math.min(100, savingsPct)}%` }} 
                className="bg-amber-400 h-full transition-all duration-500" 
                title={`Savings: ${savingsPct}%`}
              ></div>
            </div>

            {/* Insights pill */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
              {needsPct <= 50 ? (
                <span className="flex items-center gap-1 text-emerald-400">
                  <span>✓</span> Needs ({needsPct}%) are healthy and under 50% target.
                </span>
              ) : (
                <span className="flex items-center gap-1 text-amber-400">
                  <span>⚠️</span> Needs ({needsPct}%) exceed 50%. Review rent or school fee commitments.
                </span>
              )}

              {savingsPct >= 20 ? (
                <span className="flex items-center gap-1 text-emerald-400">
                  <span>✓</span> Savings ({savingsPct}%) exceeds 20% goal!
                </span>
              ) : (
                <span className="flex items-center gap-1 text-rose-400">
                  <span>⚠️</span> Savings ({savingsPct}%) is below 20%. Try cutting discretionary wants.
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Detailed Category Allocations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => {
            const utilization = cat.budget > 0 ? Math.round((cat.spent / cat.budget) * 100) : 0;
            const isOverBudget = cat.spent > cat.budget;

            return (
              <div 
                key={cat.id} 
                className={`glass-panel p-5 space-y-4 border transition-all ${
                  isOverBudget ? 'border-rose-500/50 bg-rose-950/10' : 'border-white/5 hover:border-emerald-500/30'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                      style={{ backgroundColor: `${cat.color}20`, color: cat.color }}
                    >
                      {cat.id === 'food' && '🛒'}
                      {cat.id === 'rent' && '🏠'}
                      {cat.id === 'education' && '📚'}
                      {cat.id === 'transport' && '🚗'}
                      {cat.id === 'healthcare' && '🩺'}
                      {cat.id === 'shopping' && '🛍️'}
                      {cat.id === 'utilities' && '⚡'}
                      {cat.id === 'others' && '🎬'}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-white">{cat.name}</h4>
                      <div className="flex items-center gap-2 text-[11px] text-slate-400">
                        <span className="capitalize px-1.5 py-0.2 rounded bg-white/5 border border-white/10">{cat.type}</span>
                        <span>•</span>
                        <span className={isOverBudget ? 'text-rose-400 font-bold' : 'text-slate-300'}>
                          {utilization}% utilized
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Spent / Budget</span>
                    <div className="font-mono font-bold text-sm text-white">
                      {formatINR(cat.spent)} <span className="text-slate-400 text-xs">/ {formatINR(cat.budget)}</span>
                    </div>
                  </div>
                </div>

                {/* Utilization Progress Bar */}
                <div className="space-y-1">
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${Math.min(100, utilization)}%`,
                        backgroundColor: isOverBudget ? '#EF4444' : (utilization > 85 ? '#F59E0B' : cat.color)
                      }}
                    ></div>
                  </div>
                  {isOverBudget && (
                    <div className="text-[11px] text-rose-400 font-semibold flex items-center gap-1">
                      <span>⚠️</span> Over budget by {formatINR(cat.spent - cat.budget)}
                    </div>
                  )}
                </div>

                {/* Editable Inputs: Budget Limit & Actual Spent */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="text-[10px] uppercase font-semibold text-slate-400 block mb-1">
                      Allocated Limit (₹)
                    </label>
                    <input
                      type="number"
                      value={cat.budget}
                      onChange={(e) => handleBudgetChange(cat.id, e.target.value)}
                      className="w-full bg-[#070D1E] border border-white/10 focus:border-emerald-400 rounded-lg px-3 py-1.5 text-xs text-white font-mono focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-semibold text-slate-400 block mb-1">
                      Actual Spent (₹)
                    </label>
                    <input
                      type="number"
                      value={cat.spent}
                      onChange={(e) => handleSpentChange(cat.id, e.target.value)}
                      className="w-full bg-[#070D1E] border border-white/10 focus:border-rose-400 rounded-lg px-3 py-1.5 text-xs text-white font-mono focus:outline-none"
                    />
                  </div>
                </div>

                {/* Smart Spending Insight Tip */}
                <div className="text-[11px] text-slate-400 bg-white/[0.02] p-2.5 rounded-lg border border-white/5 flex items-start gap-1.5">
                  <span className="text-emerald-400">💡</span>
                  <span>{cat.tips}</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// --- END js/components/BudgetPlanner.js ---

// --- START js/components/SavingsPlanner.js ---
// FINWISE - Savings Goals Planner & Interactive Compound Interest SIP Calculator

function SavingsPlanner({ data, onOpenAddGoal, onUpdateGoalContribution }) {
  const { savingsGoals } = data;

  // SIP Calculator State
  const [monthlySIP, setMonthlySIP] = React.useState(5000);
  const [annualRate, setAnnualRate] = React.useState(12);
  const [tenureYears, setTenureYears] = React.useState(10);

  // Compute SIP results
  const sipResult = calculateSIP(monthlySIP, annualRate, tenureYears);

  return (
    <section id="savings" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Goal-Based Wealth Creation</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Savings Goals & <span className="text-gradient-emerald">SIP Simulator</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1">
              Track multi-year aspirations with milestone progress, and calculate compound growth.
            </p>
          </div>

          <button
            onClick={() => {
              soundManager.playClick();
              onOpenAddGoal();
            }}
            className="btn-emerald text-xs !py-2.5 !px-5"
          >
            <span className="text-base font-bold leading-none">+</span>
            <span>Create New Goal</span>
          </button>
        </div>

        {/* Savings Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savingsGoals.map((goal) => {
            const pct = Math.min(100, Math.round((goal.currentAmount / goal.targetAmount) * 100));
            const remaining = Math.max(0, goal.targetAmount - goal.currentAmount);

            // Circular progress
            const r = 32;
            const circ = 2 * Math.PI * r;
            const offset = circ - (pct / 100) * circ;

            return (
              <div 
                key={goal.id} 
                className="glass-panel p-6 space-y-5 border border-white/10 hover:border-emerald-500/40 relative overflow-hidden group"
              >
                {/* Background Tint */}
                <div 
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-15 pointer-events-none group-hover:opacity-30 transition-opacity"
                  style={{ backgroundColor: goal.color }}
                ></div>

                {/* Header */}
                <div className="flex items-start justify-between gap-3 relative z-10">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {goal.category}
                    </span>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-emerald-300 transition-colors">
                      {goal.title}
                    </h3>
                  </div>

                  {/* Circular Progress Ring */}
                  <div className="relative w-18 h-18 flex items-center justify-center shrink-0">
                    <svg className="w-16 h-16 transform -rotate-90">
                      <circle
                        cx="32"
                        cy="32"
                        r={r}
                        stroke="rgba(255, 255, 255, 0.08)"
                        strokeWidth="6"
                        fill="transparent"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r={r}
                        stroke={goal.color}
                        strokeWidth="6"
                        strokeDasharray={circ}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        fill="transparent"
                        className="circular-progress-circle"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono font-bold text-xs text-white">{pct}%</span>
                    </div>
                  </div>
                </div>

                {/* Amounts & Metrics */}
                <div className="space-y-2 relative z-10">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-slate-400">Current Saved</span>
                    <span className="font-display font-bold text-xl text-white">
                      {formatINR(goal.currentAmount)}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs text-slate-400">
                    <span>Target Target</span>
                    <span className="font-mono font-semibold text-slate-300">{formatINR(goal.targetAmount)}</span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs text-slate-400">
                    <span>Remaining Balance</span>
                    <span className="font-mono font-semibold text-emerald-400">{formatINR(remaining)}</span>
                  </div>
                </div>

                {/* Target Date & Contribution */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs relative z-10">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Monthly SIP Target</span>
                    <div className="font-mono font-bold text-emerald-400">
                      {formatINR(goal.monthlyContribution)} /mo
                    </div>
                  </div>
                  <div className="text-right space-y-0.5">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Target Date</span>
                    <div className="font-mono text-slate-300 font-semibold">{goal.targetDate}</div>
                  </div>
                </div>

                {/* Strategy Note */}
                <p className="text-[11px] text-slate-400 italic relative z-10">
                  "{goal.description}"
                </p>

              </div>
            );
          })}
        </div>

        {/* Working Interactive Savings / SIP Compound Growth Calculator */}
        <div className="glass-panel p-6 sm:p-8 border border-emerald-500/30 space-y-8">
          <div className="border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">📈</span>
              <h3 className="font-display font-bold text-2xl text-white">
                Interactive SIP & Compound Interest Calculator
              </h3>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Visualize how regular monthly savings grow into substantial wealth through compounding power.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders Control Panel (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Slider 1: Monthly Investment */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Monthly Investment Amount
                  </label>
                  <div className="font-mono font-bold text-emerald-400 text-base bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                    {formatINR(monthlySIP)}
                  </div>
                </div>
                <input
                  type="range"
                  min="500"
                  max="100000"
                  step="500"
                  value={monthlySIP}
                  onChange={(e) => setMonthlySIP(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>₹500</span>
                  <span>₹25,000</span>
                  <span>₹50,000</span>
                  <span>₹1,00,000</span>
                </div>
              </div>

              {/* Slider 2: Expected Rate of Return */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Expected Annual Return Rate (p.a.)
                  </label>
                  <div className="font-mono font-bold text-cyan-400 text-base bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/20">
                    {annualRate}%
                  </div>
                </div>
                <input
                  type="range"
                  min="5"
                  max="20"
                  step="0.5"
                  value={annualRate}
                  onChange={(e) => setAnnualRate(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                
                {/* Rate Preset Quick Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    { label: 'Bank FD (6.5%)', val: 6.5 },
                    { label: 'PPF (7.1%)', val: 7.1 },
                    { label: 'Sukanya (8.2%)', val: 8.2 },
                    { label: 'Nifty 50 Index (12%)', val: 12 },
                    { label: 'Flexi Cap (14%)', val: 14 }
                  ].map((preset) => (
                    <button
                      key={preset.label}
                      onClick={() => setAnnualRate(preset.val)}
                      className={`text-[10px] px-2.5 py-1 rounded-full font-semibold transition-all ${
                        annualRate === preset.val
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                          : 'bg-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 3: Time Horizon (Years) */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Investment Period
                  </label>
                  <div className="font-mono font-bold text-amber-400 text-base bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
                    {tenureYears} Years
                  </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>1 Year</span>
                  <span>10 Years</span>
                  <span>20 Years</span>
                  <span>30 Years</span>
                </div>
              </div>

            </div>

            {/* Results & Visual Projection Card (5 cols) */}
            <div className="lg:col-span-5 glass-panel p-6 border border-emerald-500/30 space-y-5 bg-gradient-to-b from-slate-900/80 to-[#070D1E]/90">
              
              <div className="text-center space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                  Projected Maturity Wealth
                </span>
                <div className="font-display font-black text-3xl sm:text-4xl text-gradient-emerald">
                  {formatINR(sipResult.futureValue)}
                </div>
                <span className="text-xs text-emerald-400 font-semibold">
                  Wealth Multiplier: {sipResult.wealthMultiplier}x of invested capital
                </span>
              </div>

              <div className="space-y-3 pt-3 border-t border-white/10">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                    Amount Invested
                  </span>
                  <span className="font-mono font-bold text-white">{formatINR(sipResult.totalInvested)}</span>
                </div>

                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    Estimated Wealth Gain
                  </span>
                  <span className="font-mono font-bold text-emerald-400">+{formatINR(sipResult.estimatedReturns)}</span>
                </div>

                {/* Visual Ratio Bar */}
                <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden flex">
                  <div
                    style={{ width: `${(sipResult.totalInvested / sipResult.futureValue) * 100}%` }}
                    className="bg-slate-500 h-full"
                    title="Invested"
                  ></div>
                  <div
                    style={{ width: `${(sipResult.estimatedReturns / sipResult.futureValue) * 100}%` }}
                    className="bg-emerald-400 h-full"
                    title="Returns"
                  ></div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] text-slate-300 leading-relaxed">
                💡 <strong className="text-emerald-300">Indian Household Takeaway:</strong> By investing just {formatINR(monthlySIP)} monthly at {annualRate}%, you invest {formatINR(sipResult.totalInvested)} and earn {formatINR(sipResult.estimatedReturns)} purely from compounding interest!
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

// --- END js/components/SavingsPlanner.js ---

// --- START js/components/SchemeFinder.js ---
// FINWISE - Indian Government Scheme Finder Component with Verified Portals & Eligibility Engine

function SchemeFinder({ onSelectScheme, onOpenEligibilityChecker }) {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const categories = [
    'All',
    'Banking & Savings',
    'Insurance & Pension',
    'Women & Children',
    'Business & MSME',
    'Healthcare'
  ];

  const filteredSchemes = filterSchemes(SCHEMES_DATA, {
    category: selectedCategory,
    search: searchQuery
  });

  return (
    <section id="schemes" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              <span>National Welfare & Financial Inclusion</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Indian Government <span className="text-gradient-emerald">Scheme Finder</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1">
              Discover official benefits, micro-insurance from ₹20/year, sovereign pensions, and subsidized healthcare.
            </p>
          </div>

          <button
            onClick={() => {
              soundManager.playClick();
              onOpenEligibilityChecker();
            }}
            className="btn-emerald text-xs !py-3 !px-5 shadow-lg shadow-emerald-500/20"
          >
            <span>✨ Check My Eligibility</span>
          </button>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="glass-panel p-4 space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search by scheme name, e.g., 'Jan Dhan', 'Pension', 'Sukanya', 'Mudra'..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#070D1E] border border-white/10 focus:border-emerald-400 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Stats Pill */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 whitespace-nowrap">
              <span className="text-emerald-400 font-bold font-mono">{filteredSchemes.length}</span>
              <span>Schemes Verified</span>
            </div>

          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-1 border-t border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  soundManager.playTab();
                  setSelectedCategory(cat);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-sm shadow-emerald-500/20'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Schemes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchemes.map((scheme) => (
            <div
              key={scheme.id}
              className="glass-panel p-6 space-y-5 border border-white/10 hover:border-emerald-500/40 flex flex-col justify-between group transition-all"
            >
              <div className="space-y-4">
                
                {/* Header Badge & Rating */}
                <div className="flex items-start justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-bold text-emerald-300">
                    {scheme.badge}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-amber-400 font-mono font-bold">
                    <span>★</span>
                    <span>{scheme.rating}</span>
                  </div>
                </div>

                {/* Scheme Title & Ministry */}
                <div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-emerald-300 transition-colors">
                    {scheme.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                    {scheme.ministry} • <span className="text-emerald-400">{scheme.category}</span>
                  </p>
                </div>

                {/* Tagline / Overview */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {scheme.overview}
                </p>

                {/* Key Benefits Preview */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    Key Entitlements
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {scheme.benefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 shrink-0 mt-0.5 text-xs">✓</span>
                        <span className="line-clamp-2">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Eligibility Summary Chip */}
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-slate-400 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Eligible Age:</span>
                    <span className="text-slate-200 font-mono">{scheme.eligibility.age}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Income Rule:</span>
                    <span className="text-slate-200 truncate ml-2">{scheme.eligibility.income}</span>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-2">
                <button
                  onClick={() => {
                    soundManager.playClick();
                    onSelectScheme(scheme);
                  }}
                  className="flex-1 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-all text-center"
                >
                  View Documents
                </button>

                <a
                  href={scheme.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span>Apply Portal</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Official Portal Guarantee Notice */}
        <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🇮🇳</span>
            <div>
              <span className="font-semibold text-white">Official Government Application Gateways</span>
              <p className="text-[11px] text-slate-400">FINWISE redirects only to verified .gov.in and .nic.in portals. Never pay fees on third-party broker websites.</p>
            </div>
          </div>
          <span className="text-emerald-400 font-mono font-bold whitespace-nowrap">
            Zero Brokerage Guaranteed
          </span>
        </div>

      </div>
    </section>
  );
}

// --- END js/components/SchemeFinder.js ---

// --- START js/components/LiteracyHub.js ---
// FINWISE - Financial Literacy Hub & Interactive Certification Quiz Component

function LiteracyHub({ onShowToast }) {
  const [selectedModule, setSelectedModule] = React.useState(null);
  
  // Quiz State
  const [quizActive, setQuizActive] = React.useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = React.useState(false);
  const [userScore, setUserScore] = React.useState(0);
  const [quizCompleted, setQuizCompleted] = React.useState(false);
  const [answersHistory, setAnswersHistory] = React.useState([]);

  // Start Quiz
  const startQuiz = () => {
    soundManager.playClick();
    setQuizActive(true);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setUserScore(0);
    setQuizCompleted(false);
    setAnswersHistory([]);
  };

  // Submit Answer
  const handleAnswerSubmit = () => {
    if (selectedOption === null) return;
    const currentQ = LITERACY_QUIZ[currentQuestionIndex];
    const isCorrect = selectedOption === currentQ.correctAnswer;

    if (isCorrect) {
      soundManager.playSuccess();
      setUserScore(prev => prev + 1);
    } else {
      soundManager.playTone(300, 'sawtooth', 0.15, 0.05);
    }

    setIsAnswerSubmitted(true);
    setAnswersHistory(prev => [...prev, { qIndex: currentQuestionIndex, selected: selectedOption, isCorrect }]);
  };

  // Next Question
  const handleNextQuestion = () => {
    soundManager.playTab();
    if (currentQuestionIndex + 1 < LITERACY_QUIZ.length) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizCompleted(true);
      soundManager.playSuccess();
      onShowToast("Quiz completed! You earned your FinWise Certified Citizen Badge.", "success");
    }
  };

  const currentQ = LITERACY_QUIZ[currentQuestionIndex];

  return (
    <section id="literacy" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Financial Empowerment & Fraud Prevention</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Financial Literacy <span className="text-gradient-emerald">Hub</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1">
              Plain-language modules designed for Indian households. Master UPI defense, compounding, and debt discipline.
            </p>
          </div>

          <button
            onClick={startQuiz}
            className="btn-emerald text-xs !py-3 !px-5 shadow-lg shadow-emerald-500/20"
          >
            <span>🎯 Take Financial IQ Quiz</span>
          </button>
        </div>

        {/* 5 Core Learning Modules Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LITERACY_MODULES.map((mod) => (
            <div
              key={mod.id}
              onClick={() => {
                soundManager.playTab();
                setSelectedModule(mod);
              }}
              className="glass-panel p-6 space-y-4 border border-white/10 hover:border-emerald-500/40 cursor-pointer group transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-emerald-400">
                    {mod.category}
                  </span>
                  <span className="text-slate-400 text-[11px] font-mono">{mod.duration}</span>
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-emerald-300 transition-colors">
                  {mod.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {mod.summary}
                </p>

                {/* Key takeaways bullet preview */}
                <div className="pt-2 border-t border-white/5 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Golden Takeaway</span>
                  <div className="text-xs text-slate-300 flex items-start gap-1.5">
                    <span className="text-emerald-400">✓</span>
                    <span className="line-clamp-2">{mod.takeaways[0]}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Difficulty: <span className="text-slate-200">{mod.level}</span></span>
                <span className="text-emerald-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read Guide <span>→</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Quiz Card / Arena */}
        <div className="glass-panel p-6 sm:p-8 border border-emerald-500/30 relative overflow-hidden">
          
          {!quizActive && !quizCompleted && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                  Test Your Awareness
                </span>
                <h3 className="font-display font-extrabold text-2xl text-white">
                  Take the 5-Minute Indian Financial Awareness Quiz
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                  Evaluate your fraud detection reflexes, budgeting instincts, and government scheme awareness.
                  Earn the verified FinWise Citizen Badge upon scoring 4/5 or higher.
                </p>
              </div>

              <button
                onClick={startQuiz}
                className="btn-emerald text-sm !px-6 !py-3 whitespace-nowrap"
              >
                Start Quiz Now
              </button>
            </div>
          )}

          {/* Active Quiz Question Card */}
          {quizActive && !quizCompleted && (
            <div className="space-y-6 max-w-2xl mx-auto">
              {/* Progress Header */}
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono font-bold text-emerald-400">
                  Question {currentQuestionIndex + 1} of {LITERACY_QUIZ.length}
                </span>
                <span className="font-mono font-semibold">
                  Score: {userScore} Points
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-emerald-400 h-full rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / LITERACY_QUIZ.length) * 100}%` }}
                ></div>
              </div>

              {/* Question Text */}
              <h4 className="font-display font-bold text-lg sm:text-xl text-white leading-relaxed">
                {currentQ.question}
              </h4>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((opt, idx) => {
                  let btnStyle = "bg-white/5 border-white/10 text-slate-200 hover:bg-white/10";
                  if (selectedOption === idx) {
                    btnStyle = "bg-emerald-500/20 border-emerald-400 text-white font-semibold";
                  }
                  if (isAnswerSubmitted) {
                    if (idx === currentQ.correctAnswer) {
                      btnStyle = "bg-emerald-500/30 border-emerald-400 text-emerald-300 font-bold";
                    } else if (selectedOption === idx) {
                      btnStyle = "bg-rose-500/30 border-rose-400 text-rose-300";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswerSubmitted}
                      onClick={() => {
                        soundManager.playClick();
                        setSelectedOption(idx);
                      }}
                      className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 ${btnStyle}`}
                    >
                      <span className="w-6 h-6 rounded-lg bg-black/30 border border-white/10 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Feedback and Explanation */}
              {isAnswerSubmitted && (
                <div className={`p-4 rounded-xl text-xs space-y-1.5 animate-fadeIn ${
                  selectedOption === currentQ.correctAnswer
                    ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-200'
                    : 'bg-rose-500/15 border border-rose-500/30 text-rose-200'
                }`}>
                  <div className="font-bold flex items-center gap-1.5">
                    {selectedOption === currentQ.correctAnswer ? '✓ Correct Answer!' : '✗ Not Quite Right.'}
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {currentQ.explanation}
                  </p>
                </div>
              )}

              {/* Navigation Action */}
              <div className="flex justify-end gap-3 pt-2">
                {!isAnswerSubmitted ? (
                  <button
                    disabled={selectedOption === null}
                    onClick={handleAnswerSubmit}
                    className="btn-emerald text-xs !py-2.5 !px-5 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Confirm Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="btn-emerald text-xs !py-2.5 !px-5"
                  >
                    {currentQuestionIndex + 1 < LITERACY_QUIZ.length ? 'Next Question →' : 'View Final Score 🎉'}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Quiz Completed Result Screen */}
          {quizCompleted && (
            <div className="max-w-xl mx-auto text-center space-y-6 py-4 animate-fadeIn">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 mx-auto flex items-center justify-center text-3xl shadow-xl shadow-emerald-500/30">
                {userScore >= 4 ? '🏆' : '📚'}
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                  Quiz Completed
                </span>
                <h3 className="font-display font-black text-3xl text-white">
                  Your Score: {userScore} / {LITERACY_QUIZ.length}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm">
                  {userScore >= 4
                    ? "Outstanding! You possess sharp financial instincts to safeguard your family's savings and spot modern digital scams."
                    : "Good effort! Review the literacy modules above to reinforce your knowledge on UPI safety and compounding rules."}
                </p>
              </div>

              {/* Digital Certificate Badge */}
              <div className="p-4 rounded-2xl bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 inline-block text-left max-w-sm w-full space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-display font-extrabold text-sm text-white">FINWISE CITIZEN BADGE</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-400 text-black font-black text-[10px]">VERIFIED</span>
                </div>
                <div className="text-[11px] text-slate-300">
                  Awarded for demonstrating proficiency in Indian Household Financial Planning & Cyber Defense.
                </div>
                <div className="text-[10px] font-mono text-emerald-400 flex justify-between pt-1 border-t border-white/10">
                  <span>ID: FW-2026-IN</span>
                  <span>Valid Indefinitely</span>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={startQuiz}
                  className="btn-secondary text-xs !py-2.5 !px-5"
                >
                  Retake Quiz
                </button>
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setQuizActive(false);
                    setQuizCompleted(false);
                  }}
                  className="btn-emerald text-xs !py-2.5 !px-5"
                >
                  Explore Modules
                </button>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Full Module Modal */}
      {selectedModule && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-emerald-500/40 space-y-6 relative animate-fadeIn">
            <button
              onClick={() => setSelectedModule(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center text-sm"
            >
              ✕
            </button>

            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                {selectedModule.category}
              </span>
              <h3 className="font-display font-extrabold text-2xl text-white">
                {selectedModule.title}
              </h3>
              <p className="text-xs text-slate-400 font-mono">{selectedModule.duration} • Level: {selectedModule.level}</p>
            </div>

            {/* Content text */}
            <div className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line border-t border-white/10 pt-4">
              {selectedModule.content}
            </div>

            {/* Key takeaways */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                Action Items for Today
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {selectedModule.takeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedModule(null)}
                className="btn-emerald text-xs !py-2 !px-5"
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

// --- END js/components/LiteracyHub.js ---

// --- START js/components/Assistant.js ---
// FINWISE - Smart Financial Literacy Assistant (FinBot)

function Assistant() {
  const [messages, setMessages] = React.useState([
    {
      id: "bot-welcome",
      sender: "bot",
      text: "Namaste! I'm FinBot, your educational guide for Indian household budgeting, savings strategies, and government welfare schemes. How can I assist your family today?",
      time: "Just now"
    }
  ]);
  const [inputVal, setInputVal] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const messagesEndRef = React.useRef(null);

  const suggestedQuestions = [
    "How to divide ₹50,000 salary using 50/30/20?",
    "What are the benefits of Sukanya Samriddhi (SSY)?",
    "How much emergency fund should an Indian family keep?",
    "Should I choose Bank FD or Mutual Fund SIP?",
    "How do I spot fake UPI & QR code scams?"
  ];

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Knowledge base for structured responses
  const getSimulatedResponse = (query) => {
    const q = query.toLowerCase();

    if (q.includes("50,000") || q.includes("50000") || (q.includes("divide") && q.includes("salary"))) {
      return `
Here is how to optimize a **₹50,000 net monthly salary** for an Indian household using the 50/30/20 benchmark:

1. **Needs (50% = ₹25,000):**
   - House Rent / Home Loan: ₹12,000 to ₹15,000
   - Groceries, Milk & Vegetables: ₹7,000
   - Electricity, Gas & Wi-Fi: ₹2,500
   - Commute / Fuel: ₹2,500

2. **Wants (30% = ₹15,000):**
   - Dining out, Swiggy/Zomato & Cafes: ₹5,000
   - Shopping & OTT Subscriptions: ₹5,000
   - Weekend outings / Family leisure: ₹5,000

3. **Savings & Investments (20% = ₹10,000):**
   - Emergency Fund (until 6 months buffered): ₹5,000 in Sweep-in FD
   - Long-term SIP: ₹5,000 in a Nifty 50 Index Mutual Fund

> **Action Tip:** Always set up automated auto-debits on salary day (1st-5th of each month) so savings happen automatically!
      `;
    }

    if (q.includes("sukanya") || q.includes("ssy") || q.includes("girl child")) {
      return `
**Sukanya Samriddhi Yojana (SSY)** is one of the best government-backed small savings schemes for daughters in India:

- **Interest Rate:** 8.2% per annum (Compounded annually — one of the highest sovereign rates).
- **Tax Status:** Exempt-Exempt-Exempt (EEE). The deposits qualify under 80C, interest earned is 100% tax-free, and maturity amount is tax-free!
- **Eligibility:** Any resident Indian girl child below 10 years of age.
- **Deposit Limit:** Minimum ₹250 to Maximum ₹1,50,000 per financial year.
- **Tenure:** Deposits for 15 years; account matures 21 years from opening date or upon marriage after age 18.
- **Where to open:** Any Post Office branch or designated public banks (SBI, PNB, etc.).
      `;
    }

    if (q.includes("emergency") || q.includes("cushion") || q.includes("buffer")) {
      return `
**Emergency Fund Guidelines for Indian Families:**

- **Ideal Size:** Minimum **6 months of essential household expenses**.
- *Example:* If your family spends ₹35,000 on rent, food, bills, and school fees:
  Your emergency target = 6 × ₹35,000 = **₹2,10,000**.
- **Where to keep it?**
  1. 50% in a **Sweep-in Bank FD** (instant ATM liquidity, 6.5% interest).
  2. 50% in an **Overnight or Liquid Mutual Fund** (low volatility, 1-day withdrawal).
- **Rule:** Never risk emergency savings in direct stocks, crypto, or locked real estate!
      `;
    }

    if (q.includes("fd") || q.includes("sip") || q.includes("mutual fund") || q.includes("fixed deposit")) {
      return `
**Bank Fixed Deposit (FD) vs Mutual Fund SIP:**

| Feature | Bank Fixed Deposit | Equity Index SIP |
| :--- | :--- | :--- |
| **Typical Returns** | 6.5% to 7.2% fixed | 12% to 14% long-term historical |
| **Risk Level** | Very Low (DICGC insured up to ₹5L) | Moderate to High (Market linked) |
| **Ideal Horizon** | < 3 years (Short term) | 5 to 15+ years (Long term) |
| **Tax on Returns** | Added to your tax slab | 12.5% LTCG above ₹1.25 Lakh/yr |

**Golden Advice:**
- Use **FD** for near-term money you cannot risk losing (emergency buffer, next year's school fee).
- Use **SIP** for goals 5+ years away (child higher education, retirement, down payment).
      `;
    }

    if (q.includes("upi") || q.includes("scam") || q.includes("fraud") || q.includes("qr")) {
      return `
**Crucial UPI & Cyber Safety Rules in India:**

1. **Entering UPI PIN = Money goes OUT:**
   You **never** need to enter your UPI PIN, password, or OTP to receive money or get a refund.
2. **Never scan a QR code to 'receive' payment:**
   Scammers on OLX or WhatsApp claim sending a QR code to credit your account. Scanning always debits your account!
3. **Beware of fake electricity SMS:**
   Do not call numbers sent in SMS warning that power will be cut tonight. Pay exclusively through official portals or Bharat BillPay.
4. **Emergency Helpline:**
   If you suspect financial cyber fraud, dial **1930** immediately or report at **cybercrime.gov.in** within the golden hour to freeze stolen funds.
      `;
    }

    // Default intelligent response
    return `
Thank you for your question regarding "${query}".

Here is a recommended financial planning approach:
1. **Prioritize Cash Safety First:** Ensure you have an emergency fund covering at least 3-6 months of family living costs.
2. **Utilize Indian Sovereign Schemes:** Take advantage of high-yield government tools like **PPF (7.1%)**, **PMSBY (₹20/yr for ₹2L accidental cover)**, and **SSY (8.2%)** before speculative assets.
3. **Control Debt Ratios:** Ensure total monthly EMI outflows never exceed 40% of your take-home pay.
4. **Automate Compounding:** Even ₹2,000/month in an equity index SIP compounds significantly over a decade.

Feel free to ask about specific salary amounts, government schemes, or fraud prevention tips!
    `;
  };

  const handleSend = (textToSend) => {
    const query = textToSend || inputVal;
    if (!query.trim()) return;

    soundManager.playClick();
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      time: "Just now"
    };

    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    // Simulate smart thinking delay
    setTimeout(() => {
      const botResponse = getSimulatedResponse(query);
      setIsTyping(false);
      soundManager.playTone(880, 'sine', 0.08, 0.04);
      setMessages(prev => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: botResponse,
          time: "Just now"
        }
      ]);
    }, 700);
  };

  return (
    <section id="assistant" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <span>Conversational Financial Guide</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Ask <span className="text-gradient-emerald">FinBot AI</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Get instant, practical guidance on Indian household budgeting, salary allocation, debt safety, and government schemes.
          </p>
        </div>

        {/* Chat Card Container */}
        <div className="glass-panel border border-emerald-500/30 rounded-2xl flex flex-col h-[580px] overflow-hidden shadow-2xl shadow-black/80">
          
          {/* Chat Header */}
          <div className="p-4 bg-slate-900/60 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center text-slate-900 font-black text-sm">
                  🤖
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-900"></span>
              </div>
              <div>
                <div className="font-display font-bold text-sm text-white flex items-center gap-2">
                  <span>FinBot Financial Advisor</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">ONLINE</span>
                </div>
                <p className="text-[11px] text-slate-400">Educational Guidance & Planning</p>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 font-mono hidden sm:block">
              ₹ INR Optimized
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
            {messages.map((msg) => {
              const isUser = msg.sender === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs shrink-0 ${
                    isUser ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  }`}>
                    {isUser ? '👤' : '🤖'}
                  </div>

                  <div className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                    isUser
                      ? 'bg-gradient-to-tr from-emerald-600 to-emerald-500 text-slate-950 font-medium rounded-tr-none shadow-lg shadow-emerald-500/20'
                      : 'bg-white/[0.04] border border-white/10 text-slate-200 rounded-tl-none whitespace-pre-line'
                  }`}>
                    {msg.text}
                    <div className={`text-[10px] mt-1 text-right ${isUser ? 'text-slate-900/60' : 'text-slate-500'}`}>
                      {msg.time}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center justify-center text-xs shrink-0">
                  🤖
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Chips */}
          <div className="px-4 py-2 bg-slate-950/40 border-t border-white/5 flex items-center gap-2 overflow-x-auto text-xs whitespace-nowrap scrollbar-none">
            <span className="text-[10px] uppercase font-bold text-slate-500">Suggested:</span>
            {suggestedQuestions.map((sq, i) => (
              <button
                key={i}
                onClick={() => handleSend(sq)}
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-emerald-300 text-[11px] transition-colors"
              >
                {sq}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-slate-900/80 border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask anything, e.g., 'How should I allocate my ₹40,000 salary?'"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 bg-[#070D1E] border border-white/10 focus:border-emerald-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={!inputVal.trim()}
              className="btn-emerald text-xs !py-2.5 !px-4 disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            >
              <span>Send</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>

        </div>

        {/* Disclaimer Notice */}
        <div className="text-center text-[11px] text-slate-500 max-w-xl mx-auto space-y-1">
          <p>
            ℹ️ <strong>Educational Notice:</strong> FinBot responses are structured demos based on standard financial planning principles and published Indian government schemes. Not certified SEBI investment advice.
          </p>
        </div>

      </div>
    </section>
  );
}

// --- END js/components/Assistant.js ---

// --- START js/components/Modals.js ---
// FINWISE - Interactive Modals (Add Transaction, Add Goal, Scheme Details, Eligibility Checker, Auth)

// 1. Add Transaction Modal
function AddTransactionModal({ isOpen, onClose, onAdd, categories }) {
  const [title, setTitle] = React.useState('');
  const [type, setType] = React.useState('expense');
  const [categoryId, setCategoryId] = React.useState('food');
  const [amount, setAmount] = React.useState('');
  const [paymentMethod, setPaymentMethod] = React.useState('UPI');
  const [date, setDate] = React.useState(new Date().toISOString().split('T')[0]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !amount) return;

    const selectedCat = categories.find(c => c.id === categoryId) || { name: 'Miscellaneous', type: 'needs' };

    const newTx = {
      id: `tx-${Date.now()}`,
      title: title.trim(),
      category: type === 'income' ? 'Income' : selectedCat.name,
      categoryId: type === 'income' ? 'income' : categoryId,
      amount: Math.abs(Number(amount)),
      type,
      date,
      paymentMethod,
      badge: type === 'income' ? 'Credit' : (selectedCat.type === 'needs' ? 'Needs' : 'Wants')
    };

    onAdd(newTx);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel p-6 sm:p-8 max-w-md w-full border border-emerald-500/40 space-y-5 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center text-sm"
        >
          ✕
        </button>

        <div>
          <h3 className="font-display font-extrabold text-xl text-white">Record Transaction</h3>
          <p className="text-xs text-slate-400">Instantly update monthly spend and recalculate remaining balance.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Income vs Expense Toggle */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-slate-900 rounded-xl border border-white/10">
            <button
              type="button"
              onClick={() => setType('expense')}
              className={`py-2 text-xs font-bold rounded-lg transition-all ${
                type === 'expense' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'text-slate-400'
              }`}
            >
              Expense (-)
            </button>
            <button
              type="button"
              onClick={() => setType('income')}
              className={`py-2 text-xs font-bold rounded-lg transition-all ${
                type === 'income' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-slate-400'
              }`}
            >
              Income (+)
            </button>
          </div>

          {/* Title */}
          <div className="space-y-1">
            <label className="text-[11px] uppercase font-bold text-slate-400">Title / Merchant</label>
            <input
              type="text"
              placeholder="e.g. Milk & Veggies Mandi, Indian Oil, BESCOM"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full bg-[#070D1E] border border-white/10 focus:border-emerald-400 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none"
            />
          </div>

          {/* Amount */}
          <div className="space-y-1">
            <label className="text-[11px] uppercase font-bold text-slate-400">Amount (₹)</label>
            <input
              type="number"
              placeholder="e.g. 1500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="w-full bg-[#070D1E] border border-white/10 focus:border-emerald-400 rounded-xl px-3.5 py-2.5 text-sm font-mono font-bold text-white focus:outline-none"
            />
          </div>

          {/* Category (if expense) */}
          {type === 'expense' && (
            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold text-slate-400">Category</label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full bg-[#070D1E] border border-white/10 focus:border-emerald-400 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.type})
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Payment Method */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold text-slate-400">Payment Mode</label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full bg-[#070D1E] border border-white/10 focus:border-emerald-400 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
              >
                <option value="UPI">UPI (GPay/PhonePe/Paytm)</option>
                <option value="Bharat BillPay (BBPS)">Bharat BillPay (BBPS)</option>
                <option value="RuPay Card">RuPay Debit/Credit</option>
                <option value="NetBanking">NetBanking / NEFT</option>
                <option value="Cash">Cash</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold text-slate-400">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-[#070D1E] border border-white/10 focus:border-emerald-400 rounded-xl px-3 py-1.5 text-xs text-white font-mono focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary text-xs !py-2 !px-4"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-emerald text-xs !py-2 !px-5"
            >
              Add Entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// 2. Add Savings Goal Modal
function AddGoalModal({ isOpen, onClose, onAdd }) {
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState('Family Safety');
  const [targetAmount, setTargetAmount] = React.useState('');
  const [currentAmount, setCurrentAmount] = React.useState('');
  const [monthlyContribution, setMonthlyContribution] = React.useState('');
  const [targetDate, setTargetDate] = React.useState('2028-06-30');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !targetAmount) return;

    const newGoal = {
      id: `goal-${Date.now()}`,
      title: title.trim(),
      category,
      targetAmount: Number(targetAmount),
      currentAmount: Number(currentAmount) || 0,
      monthlyContribution: Number(monthlyContribution) || Math.round(Number(targetAmount) / 24),
      targetDate,
      color: "#00F5A0",
      description: "Custom goal planned via FinWise smart roadmap."
    };

    onAdd(newGoal);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel p-6 sm:p-8 max-w-md w-full border border-emerald-500/40 space-y-5 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center text-sm"
        >
          ✕
        </button>

        <div>
          <h3 className="font-display font-extrabold text-xl text-white">Create Savings Goal</h3>
          <p className="text-xs text-slate-400">Lock in your financial aspirations with automated milestone targets.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[11px] uppercase font-bold text-slate-400">Goal Name</label>
            <input
              type="text"
              placeholder="e.g., Gold Jewellery for Marriage, Child Higher Studies"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full bg-[#070D1E] border border-white/10 focus:border-emerald-400 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold text-slate-400">Target Corpus (₹)</label>
              <input
                type="number"
                placeholder="e.g. 500000"
                value={targetAmount}
                onChange={(e) => setTargetAmount(e.target.value)}
                required
                className="w-full bg-[#070D1E] border border-white/10 focus:border-emerald-400 rounded-xl px-3 py-2 text-xs font-mono font-bold text-white focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold text-slate-400">Already Saved (₹)</label>
              <input
                type="number"
                placeholder="e.g. 50000"
                value={currentAmount}
                onChange={(e) => setCurrentAmount(e.target.value)}
                className="w-full bg-[#070D1E] border border-white/10 focus:border-emerald-400 rounded-xl px-3 py-2 text-xs font-mono text-white focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold text-slate-400">Monthly SIP (₹)</label>
              <input
                type="number"
                placeholder="e.g. 10000"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(e.target.value)}
                className="w-full bg-[#070D1E] border border-white/10 focus:border-emerald-400 rounded-xl px-3 py-2 text-xs font-mono text-emerald-400 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold text-slate-400">Target Date</label>
              <input
                type="date"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                className="w-full bg-[#070D1E] border border-white/10 focus:border-emerald-400 rounded-xl px-3 py-1.5 text-xs font-mono text-white focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary text-xs !py-2 !px-4"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-emerald text-xs !py-2 !px-5"
            >
              Save Goal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// 3. Scheme Details Modal
function SchemeDetailsModal({ scheme, onClose }) {
  if (!scheme) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-emerald-500/40 space-y-6 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center text-sm"
        >
          ✕
        </button>

        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
              {scheme.badge}
            </span>
            <span className="text-xs text-slate-400">{scheme.ministry}</span>
          </div>
          <h3 className="font-display font-extrabold text-2xl text-white">
            {scheme.title}
          </h3>
          <p className="text-xs text-slate-300 italic">{scheme.tagline}</p>
        </div>

        {/* Benefits list */}
        <div className="space-y-3 p-4 rounded-xl bg-white/[0.03] border border-white/10">
          <h4 className="font-display font-bold text-sm text-emerald-400 uppercase tracking-wider">
            Verified Benefits & Entitlements
          </h4>
          <ul className="space-y-2 text-xs text-slate-200">
            {scheme.benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Eligibility Criteria */}
        <div className="space-y-2 text-xs">
          <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
            Eligibility Criteria
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
            <div className="p-2.5 rounded-lg bg-[#070D1E] border border-white/5">
              <span className="text-[10px] text-slate-500 uppercase block font-semibold">Eligible Age</span>
              <span className="font-mono text-white font-medium">{scheme.eligibility.age}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#070D1E] border border-white/5">
              <span className="text-[10px] text-slate-500 uppercase block font-semibold">Income Limits</span>
              <span className="text-white font-medium">{scheme.eligibility.income}</span>
            </div>
          </div>
        </div>

        {/* Documents Checklist */}
        <div className="space-y-2">
          <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
            Documents Checklist to Keep Ready
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            {scheme.documentsRequired.map((doc, idx) => (
              <li key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="w-4 h-4 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">✓</span>
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="btn-secondary text-xs !py-2 !px-4"
          >
            Close
          </button>

          <a
            href={scheme.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-emerald text-xs !py-2.5 !px-5"
          >
            <span>Proceed to {scheme.portalName}</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

// 4. Interactive Eligibility Checker Modal
function EligibilityCheckerModal({ isOpen, onClose, onSelectScheme }) {
  const [age, setAge] = React.useState(28);
  const [occupation, setOccupation] = React.useState('salaried');
  const [incomeRange, setIncomeRange] = React.useState('mid');
  const [hasDaughter, setHasDaughter] = React.useState(false);
  const [results, setResults] = React.useState([]);

  if (!isOpen) return null;

  const calculateMatches = () => {
    soundManager.playSuccess();
    const matched = [];

    // Jan Dhan: Anyone
    matched.push(SCHEMES_DATA.find(s => s.id === 'pmjdy'));

    // PMSBY: 18 - 70
    if (age >= 18 && age <= 70) {
      matched.push(SCHEMES_DATA.find(s => s.id === 'pmsby'));
    }

    // PMJJBY: 18 - 50
    if (age >= 18 && age <= 50) {
      matched.push(SCHEMES_DATA.find(s => s.id === 'pmjjby'));
    }

    // APY: 18 - 40
    if (age >= 18 && age <= 40 && incomeRange !== 'high') {
      matched.push(SCHEMES_DATA.find(s => s.id === 'apy'));
    }

    // Mudra: Business / Self-employed
    if (occupation === 'business' || occupation === 'unorganized') {
      matched.push(SCHEMES_DATA.find(s => s.id === 'pmmy'));
    }

    // SSY: If has daughter
    if (hasDaughter) {
      matched.push(SCHEMES_DATA.find(s => s.id === 'ssy'));
    }

    // Senior citizen: 60+
    if (age >= 60) {
      matched.push(SCHEMES_DATA.find(s => s.id === 'scss'));
    }

    // PM-JAY: Low/Mid income
    if (incomeRange === 'low' || age >= 70) {
      matched.push(SCHEMES_DATA.find(s => s.id === 'pmjay'));
    }

    setResults(matched.filter(Boolean));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel p-6 sm:p-8 max-w-xl w-full max-h-[85vh] overflow-y-auto border border-emerald-500/40 space-y-6 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center text-sm"
        >
          ✕
        </button>

        <div>
          <h3 className="font-display font-extrabold text-2xl text-white">
            Instant Eligibility <span className="text-gradient-emerald">Calculator</span>
          </h3>
          <p className="text-xs text-slate-400">Find exactly which Indian welfare & micro-savings schemes your family qualifies for.</p>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold text-slate-400">Your Age</label>
              <input
                type="number"
                min="10"
                max="90"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full bg-[#070D1E] border border-white/10 focus:border-emerald-400 rounded-xl px-3 py-2 text-xs font-mono font-bold text-white focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold text-slate-400">Occupation</label>
              <select
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                className="w-full bg-[#070D1E] border border-white/10 focus:border-emerald-400 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
              >
                <option value="salaried">Salaried (Private / Govt)</option>
                <option value="business">Small Business / Shop Owner</option>
                <option value="unorganized">Unorganized / Gig / Daily Earner</option>
                <option value="homemaker">Homemaker / Student</option>
                <option value="retired">Retired / Senior Citizen</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] uppercase font-bold text-slate-400">Annual Household Income</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'low', label: '< ₹2.5 Lakh' },
                { id: 'mid', label: '₹2.5L - ₹8 Lakh' },
                { id: 'high', label: '> ₹8 Lakh' }
              ].map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setIncomeRange(tier.id)}
                  className={`py-2 px-2 text-xs font-semibold rounded-xl border transition-all ${
                    incomeRange === tier.id
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400'
                      : 'bg-white/5 border-white/10 text-slate-400'
                  }`}
                >
                  {tier.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <input
              type="checkbox"
              id="daughterCheck"
              checked={hasDaughter}
              onChange={(e) => setHasDaughter(e.target.checked)}
              className="accent-emerald-400 w-4 h-4 cursor-pointer"
            />
            <label htmlFor="daughterCheck" className="text-xs text-slate-200 cursor-pointer">
              I have a daughter under 10 years of age (Eligible for Sukanya Samriddhi 8.2% scheme)
            </label>
          </div>

          <button
            onClick={calculateMatches}
            className="btn-emerald w-full text-xs !py-3"
          >
            Check Eligible Schemes
          </button>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="space-y-3 pt-3 border-t border-white/10 animate-fadeIn">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Qualified Schemes Found ({results.length})
              </span>
              <span className="text-[11px] text-slate-400">Click to view details</span>
            </div>

            <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
              {results.map((scheme) => (
                <div
                  key={scheme.id}
                  onClick={() => {
                    soundManager.playClick();
                    onSelectScheme(scheme);
                    onClose();
                  }}
                  className="p-3 rounded-xl bg-white/[0.03] hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/30 cursor-pointer transition-all flex items-center justify-between"
                >
                  <div>
                    <h5 className="font-display font-bold text-xs text-white">{scheme.title}</h5>
                    <span className="text-[10px] text-emerald-300 font-mono">{scheme.badge}</span>
                  </div>
                  <span className="text-xs text-slate-400">→</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

// 5. User Profile / Auth Modal (LocalStorage persistent)
function AuthModal({ isOpen, onClose, user, onUpdateUser }) {
  const [name, setName] = React.useState(user?.name || 'Aarav Sharma');
  const [city, setCity] = React.useState(user?.city || 'Bengaluru, India');
  const [income, setIncome] = React.useState(user?.monthlyIncome || 75000);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    soundManager.playSuccess();
    onUpdateUser({ name, city, monthlyIncome: Number(income) });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel p-6 sm:p-8 max-w-sm w-full border border-emerald-500/40 space-y-5 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center text-sm"
        >
          ✕
        </button>

        <div className="text-center space-y-1">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-400 to-cyan-500 mx-auto flex items-center justify-center text-slate-900 font-black text-2xl shadow-xl shadow-emerald-500/20">
            {name ? name.charAt(0) : 'A'}
          </div>
          <h3 className="font-display font-extrabold text-xl text-white">Family Profile</h3>
          <p className="text-xs text-slate-400">Stored safely on your browser localStorage.</p>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[11px] uppercase font-bold text-slate-400">Primary Earner Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-[#070D1E] border border-white/10 focus:border-emerald-400 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] uppercase font-bold text-slate-400">City / State</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="w-full bg-[#070D1E] border border-white/10 focus:border-emerald-400 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] uppercase font-bold text-slate-400">Monthly Household Take-Home (₹)</label>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              required
              className="w-full bg-[#070D1E] border border-white/10 focus:border-emerald-400 rounded-xl px-3.5 py-2 text-xs font-mono font-bold text-white focus:outline-none"
            />
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary text-xs !py-2 !px-4"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-emerald text-xs !py-2 !px-5"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// --- END js/components/Modals.js ---

// --- START js/components/Footer.js ---
// FINWISE - Footer Component with Verified Indian Portals & Cyber Helplines

function Footer({ onNavigate, onShowToast }) {
  const [newsletterEmail, setNewsletterEmail] = React.useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    soundManager.playSuccess();
    onShowToast("Subscribed! You will receive monthly Indian financial literacy briefs.", "success");
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-[#03060E] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-400 to-teal-400 p-[1px] shadow-lg shadow-emerald-500/20">
                <div className="w-full h-full bg-[#070D1E] rounded-xl flex items-center justify-center">
                  <span className="font-display font-black text-lg text-emerald-400">₹</span>
                </div>
              </div>
              <span className="font-display font-black text-2xl text-white">FIN<span className="text-emerald-400">WISE</span></span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Smart Money. Better Decisions. Brighter Future. <br />
              India's free open-access financial literacy companion helping households build emergency cushions, eliminate predatory loans, and maximize sovereign welfare benefits.
            </p>

            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className="space-y-2 pt-2">
              <span className="text-[11px] uppercase font-bold text-slate-300 tracking-wider">
                Monthly Financial Digest & Scheme Alerts
              </span>
              <div className="flex items-center gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="flex-1 bg-[#070D1E] border border-white/10 focus:border-emerald-400 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="btn-emerald text-xs !py-2 !px-3 shrink-0"
                >
                  Join
                </button>
              </div>
            </form>
          </div>

          {/* Nav Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Platform Features
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {['dashboard', 'budget', 'savings', 'schemes', 'literacy', 'assistant'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => {
                      soundManager.playTab();
                      onNavigate(id);
                    }}
                    className="hover:text-emerald-400 transition-colors capitalize text-left"
                  >
                    {id === 'dashboard' && 'Financial Snapshot'}
                    {id === 'budget' && '50/30/20 Budget Planner'}
                    {id === 'savings' && 'SIP & Wealth Calculator'}
                    {id === 'schemes' && 'Government Scheme Finder'}
                    {id === 'literacy' && 'Financial Literacy Hub'}
                    {id === 'assistant' && 'FinBot Conversational AI'}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Portals */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Official Portals
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="https://pmjdy.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1">
                  <span>PM Jan Dhan Yojana</span> ↗
                </a>
              </li>
              <li>
                <a href="https://jansuraksha.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1">
                  <span>Jan Suraksha (PMSBY / PMJJBY)</span> ↗
                </a>
              </li>
              <li>
                <a href="https://npscra.nsdl.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1">
                  <span>Atal Pension Yojana</span> ↗
                </a>
              </li>
              <li>
                <a href="https://www.indiapost.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1">
                  <span>India Post Small Savings (SSY)</span> ↗
                </a>
              </li>
              <li>
                <a href="https://pmjay.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1">
                  <span>Ayushman Bharat PM-JAY</span> ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Consumer Safety & Helplines */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-rose-400 uppercase tracking-wider">
              Emergency Helplines
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-1">
                <span className="text-[10px] uppercase font-bold text-rose-300">Cyber Crime Helpline</span>
                <div className="font-mono font-black text-lg text-rose-400">1930</div>
                <p className="text-[10px] text-slate-300">Call within golden hour to freeze unauthorized UPI or bank debits.</p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-300">RBI Sachet Portal</span>
                <p className="text-[10px] text-slate-400">Verify illegal lending apps & lodge unapproved NBFC complaints at <span className="text-emerald-400">sachet.rbi.org.in</span></p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-white/10 space-y-4 text-center sm:text-left sm:flex sm:items-center sm:justify-between text-xs text-slate-500">
          <div className="space-y-1">
            <p>© 2026 FINWISE Technologies. Built for Public Financial Empowerment.</p>
            <p className="text-[11px]">
              Disclaimer: FINWISE is a public educational tool. It does not provide certified SEBI financial advisory. Consult registered advisors for tailored investments.
            </p>
          </div>

          <div className="flex justify-center sm:justify-end gap-4 text-xs font-medium text-slate-400 pt-2 sm:pt-0">
            <span className="text-emerald-400">🇮🇳 Digital India Initiative Compatible</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

// --- END js/components/Footer.js ---

// --- START js/app.js ---
// FINWISE - Main React Application Core

const STORAGE_KEY = 'finwise_household_data_v1';

function App() {
  // Load saved state or fall back to rich realistic Indian household demo data
  const [data, setData] = React.useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load localStorage', e);
    }
    return DEFAULT_DEMO_DATA;
  });

  // Navigation & Active Section Tracking
  const [activeSection, setActiveSection] = React.useState('hero');
  
  // Modals state
  const [isTxModalOpen, setIsTxModalOpen] = React.useState(false);
  const [isGoalModalOpen, setIsGoalModalOpen] = React.useState(false);
  const [selectedScheme, setSelectedScheme] = React.useState(null);
  const [isEligibilityOpen, setIsEligibilityOpen] = React.useState(false);
  const [isAuthOpen, setIsAuthOpen] = React.useState(false);

  // Sound FX State
  const [soundEnabled, setSoundEnabled] = React.useState(soundManager.enabled);

  // Toast notifications state
  const [toasts, setToasts] = React.useState([]);

  // Persist data updates to localStorage
  const persistData = (newData) => {
    setData(newData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  };

  // Toast Trigger Helper
  const showToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  // Toggle Sound FX
  const handleToggleSound = () => {
    const newState = soundManager.toggle();
    setSoundEnabled(newState);
    showToast(newState ? "Sound FX Enabled" : "Sound FX Muted", "info");
  };

  // Reset to Benchmark Demo Data
  const handleResetDemo = () => {
    persistData(DEFAULT_DEMO_DATA);
    soundManager.playSuccess();
    showToast("Reset to Indian middle-class household benchmark data.", "success");
  };

  // Add Transaction
  const handleAddTransaction = (newTx) => {
    soundManager.playSuccess();
    const updatedTransactions = [newTx, ...data.transactions];
    
    // Also update category spent if it's an expense
    let updatedCategories = [...data.categories];
    if (newTx.type === 'expense') {
      updatedCategories = updatedCategories.map(c => {
        if (c.id === newTx.categoryId) {
          return { ...c, spent: (c.spent || 0) + newTx.amount };
        }
        return c;
      });
    }

    persistData({
      ...data,
      transactions: updatedTransactions,
      categories: updatedCategories
    });
    showToast(`Added ${newTx.type === 'income' ? 'income' : 'expense'}: ${formatINR(newTx.amount)}`, "success");
  };

  // Update Budget Limits
  const handleUpdateBudget = ({ income, categories }) => {
    persistData({
      ...data,
      user: { ...data.user, monthlyIncome: income },
      categories
    });
  };

  // Add Savings Goal
  const handleAddGoal = (newGoal) => {
    soundManager.playSuccess();
    persistData({
      ...data,
      savingsGoals: [newGoal, ...data.savingsGoals]
    });
    showToast(`Goal '${newGoal.title}' created successfully!`, "success");
  };

  // Update User Profile
  const handleUpdateUser = (updatedUser) => {
    persistData({
      ...data,
      user: { ...data.user, ...updatedUser }
    });
    showToast("Profile updated successfully!", "success");
  };

  // Calculate Dynamic Financial Health Score
  const totalIncome = data.user.monthlyIncome || 75000;
  const totalExpenses = data.categories.reduce((sum, c) => sum + (c.spent || 0), 0);
  const netSavings = Math.max(0, totalIncome - totalExpenses);
  const healthData = calculateHealthScore(totalIncome, totalExpenses, netSavings, 5);

  // Smooth Scroll Navigation Handler
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Setup Background Particle Network and Cursor Glow
  React.useEffect(() => {
    // 1. Particle Matrix
    const particleCanvas = document.getElementById('particle-canvas');
    let particlesInstance = null;
    if (particleCanvas) {
      particlesInstance = new FinancialParticleNetwork(particleCanvas);
    }

    // 2. Cursor Follower
    const cursorGlow = document.getElementById('cursor-glow');
    const moveGlow = (e) => {
      if (cursorGlow) {
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', moveGlow);

    // 3. Remove Loading Overlay
    const loader = document.getElementById('loading-overlay');
    if (loader) {
      setTimeout(() => {
        loader.classList.add('loaded');
      }, 700);
    }

    return () => {
      window.removeEventListener('mousemove', moveGlow);
    };
  }, []);

  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* Background Particle Canvas */}
      <canvas id="particle-canvas" className="fixed inset-0 pointer-events-none z-0"></canvas>

      {/* Cursor Glow */}
      <div id="cursor-glow" className="hidden lg:block"></div>

      {/* Sticky Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenNewTransaction={() => setIsTxModalOpen(true)}
        user={data.user}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        
        {/* Hero Section */}
        <Hero
          onStartPlanning={() => scrollToSection('budget')}
          onExploreFeatures={() => scrollToSection('dashboard')}
          healthData={healthData}
          totalSavings={netSavings}
          totalIncome={totalIncome}
        />

        {/* Dashboard Section */}
        <Dashboard
          data={data}
          healthData={healthData}
          onOpenAddTransaction={() => setIsTxModalOpen(true)}
          onNavigate={scrollToSection}
        />

        {/* Budget Planner Section */}
        <BudgetPlanner
          data={data}
          onUpdateBudget={handleUpdateBudget}
          onResetDemo={handleResetDemo}
          onShowToast={showToast}
        />

        {/* Savings Planner Section */}
        <SavingsPlanner
          data={data}
          onOpenAddGoal={() => setIsGoalModalOpen(true)}
        />

        {/* Government Scheme Finder Section */}
        <SchemeFinder
          onSelectScheme={(scheme) => setSelectedScheme(scheme)}
          onOpenEligibilityChecker={() => setIsEligibilityOpen(true)}
        />

        {/* Financial Literacy Hub Section */}
        <LiteracyHub
          onShowToast={showToast}
        />

        {/* Smart Financial Assistant (FinBot) */}
        <Assistant />

      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onShowToast={showToast}
      />

      {/* Interactive Modals */}
      <AddTransactionModal
        isOpen={isTxModalOpen}
        onClose={() => setIsTxModalOpen(false)}
        onAdd={handleAddTransaction}
        categories={data.categories}
      />

      <AddGoalModal
        isOpen={isGoalModalOpen}
        onClose={() => setIsGoalModalOpen(false)}
        onAdd={handleAddGoal}
      />

      <SchemeDetailsModal
        scheme={selectedScheme}
        onClose={() => setSelectedScheme(null)}
      />

      <EligibilityCheckerModal
        isOpen={isEligibilityOpen}
        onClose={() => setIsEligibilityOpen(false)}
        onSelectScheme={(scheme) => setSelectedScheme(scheme)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        user={data.user}
        onUpdateUser={handleUpdateUser}
      />

      {/* Floating Toast Notifications */}
      <div className="toast-container">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className={`toast-item px-4 py-3 rounded-xl border backdrop-blur-xl shadow-2xl flex items-center gap-3 text-xs font-semibold ${
              toast.type === 'success'
                ? 'bg-[#09152C]/95 border-emerald-500/50 text-emerald-300 shadow-emerald-500/20'
                : 'bg-[#09152C]/95 border-white/20 text-slate-200'
            }`}
          >
            <span className="text-sm">{toast.type === 'success' ? '✓' : 'ℹ️'}</span>
            <span>{toast.message}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

// Render root
const rootElement = document.getElementById('root');
if (ReactDOM.createRoot) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  ReactDOM.render(<App />, rootElement);
}

// --- END js/app.js ---
