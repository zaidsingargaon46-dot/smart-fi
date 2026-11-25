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
