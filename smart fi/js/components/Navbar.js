// FINWISE - Navigation Component with Glassmorphism, Sound Toggle, and Mobile Drawer

function Navbar({ activeSection, onNavigate, onOpenAuth, onOpenNewTransaction, user, soundEnabled, onToggleSound }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'budget', label: 'Budget Planner' },
    { id: 'savings', label: 'Savings' },
    { id: 'schemes', label: 'Govt Schemes' },
    { id: 'literacy', label: 'Learn Finance' },
    { id: 'assistant', label: 'FinBot AI' }
  ];

  const handleLinkClick = (id) => {
    soundManager.playTab();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[#050814]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => handleLinkClick('hero')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-[1px] shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all">
            <div className="w-full h-full bg-[#070D1E] rounded-xl flex items-center justify-center relative overflow-hidden">
              <span className="font-display font-extrabold text-xl text-emerald-400">₹</span>
              <div className="absolute inset-0 bg-emerald-400/10 group-hover:bg-emerald-400/20 transition-all"></div>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full"></div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-2xl tracking-tight text-white">FIN<span className="text-emerald-400">WISE</span></span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">INDIA</span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium -mt-1 hidden sm:block tracking-wide">Smart Money. Better Decisions.</p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 relative ${
                  isActive
                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 shadow-sm shadow-emerald-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-emerald-400 rounded-full shadow-[0_0_8px_#00F5A0]"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions & Utilities */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Sound Toggle Button */}
          <button
            onClick={() => {
              onToggleSound();
            }}
            title={soundEnabled ? "Sound FX Enabled" : "Sound Muted"}
            className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-all"
          >
            {soundEnabled ? (
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            )}
          </button>

          {/* Quick Add Transaction */}
          <button
            onClick={() => {
              soundManager.playClick();
              onOpenNewTransaction();
            }}
            className="px-3 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-1.5 transition-all"
          >
            <span className="text-sm leading-none">+</span> Add Entry
          </button>

          {/* User Profile / Login */}
          <button
            onClick={() => {
              soundManager.playClick();
              onOpenAuth();
            }}
            className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 transition-all group"
          >
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-emerald-400 to-cyan-500 flex items-center justify-center text-[11px] font-black text-slate-900">
              {user?.name ? user.name.charAt(0) : 'A'}
            </div>
            <span className="group-hover:text-emerald-400 transition-colors">{user?.name ? user.name.split(' ')[0] : 'Profile'}</span>
          </button>

          {/* CTA Button */}
          <button
            onClick={() => handleLinkClick('budget')}
            className="btn-emerald text-xs !py-2 !px-4"
          >
            <span>Get Started</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070D1E]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 mt-3 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                activeSection === link.id
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  : 'text-slate-300 hover:bg-white/5'
              }`}
            >
              <span>{link.label}</span>
              <svg className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
          <div className="pt-3 border-t border-white/10 flex items-center gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenNewTransaction();
              }}
              className="flex-1 py-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold text-center"
            >
              + Add Transaction
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="flex-1 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-bold text-center"
            >
              My Account
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
