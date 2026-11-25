# FINWISE 🇮🇳
**Smart Money. Better Decisions. Brighter Future.**

> A next-generation fintech platform empowering Indian households to master monthly budgeting, track expenses, achieve long-term savings goals, discover verified government welfare schemes, and build resilience against digital payment frauds.

---

## 🌟 Key Highlights & Hackathon Features

### 1. 🪙 Futuristic Animated Hero & 3D Interactive Dashboard
- **Floating 3D Gold Rupee Coins Canvas:** High-performance HTML5 Canvas rendering of 3D rotating gold coins with specular glints, Rupee symbol `₹`, continuous bobbing physics, and mouse repulsion.
- **Parallax 3D Tilt Dashboard:** Mouse-coordinated interactive 3D perspective tilt on the financial command card.
- **Animated Circular Health Score Ring:** Dynamic SVG drawing of household health index (0 to 100) with graded status.
- **Smooth Count-Up Counter:** Live savings counter animating smoothly to current monthly retained surplus.
- **Floating Glassmorphic Cards:** Bobbing satellite notification badges featuring live 50/30/20 balance and PMSBY coverage.

### 2. 📊 Smart Financial Dashboard
- **Key Metrics:** Monthly Income, Total Monthly Outflows, Net Savings, and Financial Health Score with actionable advice.
- **Cash Flow History:** 6-month comparative bar chart tracking household income vs expenses vs retained surplus.
- **Category Breakdown:** Real-time percentage distribution across 8 household categories.
- **Audited Passbook Transactions:** Categorized transaction log with instant search, filter tabs (All / Income / Expense), payment mode indicators (UPI, BBPS, RuPay), and quick transaction recording modal.

### 3. ⚖️ Smart Budget Planner with 50/30/20 Engine
- Tailored for Indian families with 8 core categories:
  - *Food & Groceries*
  - *Rent & Housing*
  - *Education & School Fees*
  - *Transport & Fuel*
  - *Healthcare & Medical*
  - *Shopping & Lifestyle*
  - *Utilities & Bills*
  - *Others & Entertainment*
- **Live 50/30/20 Rule Analyzer:** Automatic partitioning into Needs (50%), Wants (30%), and Savings (20%).
- Real-time remaining balance recalculation and spending warning highlights.
- Print/Save as PDF functionality for family records.

### 4. 🎯 Savings Goals & Compound Interest SIP Simulator
- **Aspiration Milestones:** 6-Month Emergency Cushion, Child's Higher Education, Sovereign Gold Bonds, Electric Vehicle, Dream Home Down Payment.
- **Animated Circular Progress Rings:** Visual milestone completion percentage.
- **Interactive SIP & Wealth Calculator:** Sliders for monthly investment (₹500 to ₹1,00,000), expected return rate (FD 6.5%, PPF 7.1%, SSY 8.2%, Nifty 12%, Small Cap 14%), and tenure (1 to 30 years).
- Visual comparison bar between capital invested vs compounded returns.

### 5. 🏛️ Indian Government Scheme Finder
- Comprehensive directory of verified Indian welfare schemes:
  - **PM Jan Dhan Yojana (PMJDY):** Zero balance banking & ₹2L accidental insurance.
  - **PM Suraksha Bima Yojana (PMSBY):** ₹2L accidental cover at ₹20/year.
  - **PM Jeevan Jyoti Bima Yojana (PMJJBY):** ₹2L life cover at ₹436/year.
  - **Atal Pension Yojana (APY):** Guaranteed ₹1,000 to ₹5,000 monthly pension.
  - **Sukanya Samriddhi Yojana (SSY):** 8.2% sovereign return with triple tax-exemption (EEE).
  - **PM Mudra Yojana (PMMY):** Collateral-free micro-enterprise loans up to ₹10 Lakhs.
  - **Ayushman Bharat (PM-JAY):** ₹5 Lakh/family/year free cashless hospitalization.
  - **Senior Citizen Savings Scheme (SCSS):** 8.2% quarterly income for elders.
  - **Kisan Vikas Patra (KVP):** Doubles investment with sovereign guarantee.
- **Instant Eligibility Checker:** Multi-criteria questionnaire (Age, Income tier, Occupation, Gender) matching citizen profiles to government schemes instantly.
- Direct links to official `.gov.in` and `.nic.in` gateways.

### 6. 📚 Financial Literacy Hub & IQ Certification Quiz
- **Plain-Language Interactive Modules:**
  1. *The 50/30/20 Rule for Indian Households*
  2. *The Power of Compounding & SIP vs Traditional FD*
  3. *Digital Payment Safety & UPI Fraud Defense*
  4. *Good Debt vs The Bad Debt Trap (42% credit card roll-overs)*
  5. *Building a Rock-Solid 6-Month Emergency Fund*
- **Interactive Certification Quiz:** Real-life situational questions on OTP scams, OLX fake QR codes, and 1930 Cyber Helpline with instant feedback, scoring, and verifiable digital certificate badge.

### 7. 🤖 Smart Financial Assistant (FinBot)
- Conversational chat interface with quick suggested questions, animated typing indicator, formatted structured Indian financial advice in ₹ INR, and prominent educational transparency notices.

### 8. 🎨 Design Aesthetics & Micro-Interactions
- **Color Palette:** Deep Navy (`#050814`, `#0A1128`) and Neon Emerald (`#00F5A0`, `#00D97E`) with Cyan (`#00E5FF`) and Amber Gold (`#FFB800`).
- **Glassmorphism:** Multi-layered blurred backdrops with subtle neon edge highlights.
- **Micro-Interactions:** Web Audio API synth clicks and success chimes (with sound mute toggle).
- **Desktop Cursor Glow:** Flashlight beam follower.
- **Persistence:** LocalStorage integration allowing full offline client-side persistence with zero user tracking.

---

## 🚀 How to Run Locally

### Option 1: One-Click Runner (Windows)
Double-click `start-server.bat` in the root folder. It will automatically start the Python server and open `http://localhost:8000` in your default browser.

### Option 2: Command Line
```powershell
# Using Python
python serve.py
# Or py launcher
py serve.py
```
Then navigate to: `http://localhost:8000` in Chrome, Edge, or Firefox.

### Option 3: Direct File View
Open `index.html` directly in any modern browser!

---

## 🔒 Security & Citizen Privacy
- **Zero Third-Party Tracking:** All financial figures and transactions remain strictly on the user's browser via LocalStorage.
- **No Aadhaar/PAN Harvesting:** FINWISE does not collect sensitive biometric or KYC information.
- **Scam-Proof Gateways:** All external redirects link only to authorized sovereign portals (`india.gov.in`, `pmjdy.gov.in`, `jansuraksha.gov.in`).
