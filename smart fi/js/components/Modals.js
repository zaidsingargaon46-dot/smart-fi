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
