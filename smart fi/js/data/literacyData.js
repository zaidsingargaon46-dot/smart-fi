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
