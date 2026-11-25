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
