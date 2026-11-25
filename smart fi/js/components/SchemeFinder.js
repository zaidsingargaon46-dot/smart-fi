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
