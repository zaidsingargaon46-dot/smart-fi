// FINWISE - Animated Futuristic Hero Section with 3D Tilt Dashboard & Floating Coins Canvas

function Hero({ onStartPlanning, onExploreFeatures, healthData, totalSavings, totalIncome }) {
  const [counterSavings, setCounterSavings] = React.useState(0);
  const coinsCanvasRef = React.useRef(null);
  const dashboardCardRef = React.useRef(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  // Smooth Counter animation for savings
  React.useEffect(() => {
    let start = 0;
    const end = totalSavings || 24200;
    const duration = 2000;
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = (end - start) / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCounterSavings(end);
        clearInterval(timer);
      } else {
        setCounterSavings(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [totalSavings]);

  // Initialize Canvas 3D Floating Coins
  React.useEffect(() => {
    let coinsInstance = null;
    if (coinsCanvasRef.current) {
      coinsInstance = new HeroCoinsCanvas(coinsCanvasRef.current);
    }
    return () => {
      if (coinsInstance) coinsInstance.destroy();
    };
  }, []);

  // Parallax 3D tilt tracking for hero container
  const handleMouseMove = (e) => {
    if (!dashboardCardRef.current) return;
    const rect = dashboardCardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setMousePos({ x: -y, y: x });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Circular health score parameters
  const score = healthData?.score || 84;
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <section 
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      {/* Floating 3D Coins Canvas Overlay */}
      <canvas 
        ref={coinsCanvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Super Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md shadow-sm shadow-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-bold text-emerald-300 tracking-wide">
                NEXT-GEN INDIAN FINTECH PLATFORM
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
              Take Control of <br />
              <span className="text-gradient-emerald">Your Money.</span> <br />
              <span className="relative">
                Build a Better Future.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-400/40" viewBox="0 0 300 12" fill="none">
                  <path d="M2 9C70 3 230 3 298 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Your smart companion for household budgeting, automated savings milestones, 
              verified Indian government schemes, and fraud-free financial awareness.
            </p>

            {/* Trust Highlights Grid */}
            <div className="grid grid-cols-3 gap-3 py-2 max-w-xl mx-auto lg:mx-0">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                <div className="font-display font-bold text-lg sm:text-xl text-white">₹0 Zero</div>
                <div className="text-[11px] text-slate-400">100% Free for Citizens</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                <div className="font-display font-bold text-lg sm:text-xl text-emerald-400">50/30/20</div>
                <div className="text-[11px] text-slate-400">Rule Built-in Engine</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                <div className="font-display font-bold text-lg sm:text-xl text-cyan-400">10+ Verified</div>
                <div className="text-[11px] text-slate-400">Govt Schemes Portal</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => {
                  soundManager.playClick();
                  onStartPlanning();
                }}
                className="btn-emerald w-full sm:w-auto text-sm !px-7 !py-3.5 shadow-xl shadow-emerald-500/25"
              >
                <span>Start Planning Free</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <button
                onClick={() => {
                  soundManager.playTab();
                  onExploreFeatures();
                }}
                className="btn-secondary w-full sm:w-auto text-sm !px-6 !py-3.5"
              >
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Explore Features</span>
              </button>
            </div>

            {/* Indian Citizens Security Guarantee */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-medium">100% Client-Side Privacy</span>
              </div>
              <span>•</span>
              <span>No Aadhaar/Bank login needed for planner</span>
              <span>•</span>
              <span className="text-slate-300">₹ INR Localized</span>
            </div>

          </div>

          {/* Right Column: 3D Floating Financial Dashboard */}
          <div className="lg:col-span-5 relative">
            
            {/* Decorative Ambient Background Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-2xl transform scale-95 opacity-80"></div>

            {/* Main Interactive 3D Card with Tilt */}
            <div 
              ref={dashboardCardRef}
              style={{
                transform: `perspective(1000px) rotateX(${mousePos.x}deg) rotateY(${mousePos.y}deg)`,
                transition: 'transform 0.15s ease-out'
              }}
              className="relative glass-panel-elevated p-6 border border-emerald-500/30 backdrop-blur-2xl shadow-2xl shadow-black/80"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                  <span className="font-display font-bold text-sm tracking-wide text-white">LIVE FAMILY LEDGER</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono font-semibold">
                  <span>NOVEMBER 2026</span>
                </div>
              </div>

              {/* Top Row: Savings Counter & Financial Health Ring */}
              <div className="grid grid-cols-2 gap-4 py-5 items-center">
                
                {/* Savings Counter Box */}
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Net Savings This Month</span>
                  <div className="font-display font-extrabold text-3xl sm:text-4xl text-gradient-emerald">
                    {formatINR(counterSavings)}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span>+22.7% of Household Income</span>
                  </div>
                </div>

                {/* Animated Health Ring Indicator */}
                <div className="flex flex-col items-center justify-center relative">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r={radius}
                        stroke="rgba(255, 255, 255, 0.08)"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r={radius}
                        stroke="url(#emeraldGrad)"
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        fill="transparent"
                        className="circular-progress-circle"
                      />
                      <defs>
                        <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00F5A0" />
                          <stop offset="100%" stopColor="#00E5FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="font-display font-black text-2xl text-white leading-none">{score}</span>
                      <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-bold">HEALTH</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-slate-300 mt-1">Excellent Score</span>
                </div>

              </div>

              {/* Animated Mini Cash Flow Line Chart Simulation */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Monthly Cash Flow Flowchart</span>
                  <span className="text-emerald-400 font-mono font-bold">Surplus: +₹24.2k</span>
                </div>
                {/* SVG Mini Wave Chart */}
                <div className="h-16 w-full">
                  <svg className="w-full h-full" viewBox="0 0 300 70" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00F5A0" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#00F5A0" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Area fill */}
                    <path
                      d="M0,50 Q40,42 80,48 T160,25 T240,32 T300,12 L300,70 L0,70 Z"
                      fill="url(#chartGlow)"
                    />
                    {/* Gradient Line */}
                    <path
                      d="M0,50 Q40,42 80,48 T160,25 T240,32 T300,12"
                      fill="none"
                      stroke="#00F5A0"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    {/* Pulsing Dot at End */}
                    <circle cx="300" cy="12" r="5" fill="#00F5A0" />
                    <circle cx="300" cy="12" r="10" fill="#00F5A0" opacity="0.3" className="animate-ping" />
                  </svg>
                </div>
              </div>

              {/* Floating Mini Satellite Glass Cards */}
              
              {/* Satellite 1: Top Right Scheme Alert */}
              <div className="absolute -top-6 -right-6 hidden sm:flex items-center gap-2.5 p-3 rounded-xl bg-[#09112A]/90 border border-emerald-500/40 backdrop-blur-xl shadow-xl shadow-black/60 animate-float-slow">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">
                  🛡️
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">PMSBY Scheme Enrolled</div>
                  <div className="text-[10px] text-emerald-300 font-mono">₹2,00,000 Cover @ ₹20/yr</div>
                </div>
              </div>

              {/* Satellite 2: Bottom Left 50-30-20 Rule Alert */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-2.5 p-3 rounded-xl bg-[#09112A]/90 border border-cyan-500/40 backdrop-blur-xl shadow-xl shadow-black/60 animate-float-reverse">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-xs">
                  ⚖️
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">50/30/20 Balanced</div>
                  <div className="text-[10px] text-cyan-300 font-mono">Needs: 48% | Wants: 29% | Save: 23%</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
