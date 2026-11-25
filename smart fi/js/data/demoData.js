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
