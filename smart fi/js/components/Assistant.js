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
