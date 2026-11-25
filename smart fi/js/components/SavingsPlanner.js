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
