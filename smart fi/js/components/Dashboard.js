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
