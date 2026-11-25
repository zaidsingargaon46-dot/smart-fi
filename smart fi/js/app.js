// FINWISE - Main React Application Core

const STORAGE_KEY = 'finwise_household_data_v1';

function App() {
  // Load saved state or fall back to rich realistic Indian household demo data
  const [data, setData] = React.useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load localStorage', e);
    }
    return DEFAULT_DEMO_DATA;
  });

  // Navigation & Active Section Tracking
  const [activeSection, setActiveSection] = React.useState('hero');
  
  // Modals state
  const [isTxModalOpen, setIsTxModalOpen] = React.useState(false);
  const [isGoalModalOpen, setIsGoalModalOpen] = React.useState(false);
  const [selectedScheme, setSelectedScheme] = React.useState(null);
  const [isEligibilityOpen, setIsEligibilityOpen] = React.useState(false);
  const [isAuthOpen, setIsAuthOpen] = React.useState(false);

  // Sound FX State
  const [soundEnabled, setSoundEnabled] = React.useState(soundManager.enabled);

  // Toast notifications state
  const [toasts, setToasts] = React.useState([]);

  // Persist data updates to localStorage
  const persistData = (newData) => {
    setData(newData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  };

  // Toast Trigger Helper
  const showToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  // Toggle Sound FX
  const handleToggleSound = () => {
    const newState = soundManager.toggle();
    setSoundEnabled(newState);
    showToast(newState ? "Sound FX Enabled" : "Sound FX Muted", "info");
  };

  // Reset to Benchmark Demo Data
  const handleResetDemo = () => {
    persistData(DEFAULT_DEMO_DATA);
    soundManager.playSuccess();
    showToast("Reset to Indian middle-class household benchmark data.", "success");
  };

  // Add Transaction
  const handleAddTransaction = (newTx) => {
    soundManager.playSuccess();
    const updatedTransactions = [newTx, ...data.transactions];
    
    // Also update category spent if it's an expense
    let updatedCategories = [...data.categories];
    if (newTx.type === 'expense') {
      updatedCategories = updatedCategories.map(c => {
        if (c.id === newTx.categoryId) {
          return { ...c, spent: (c.spent || 0) + newTx.amount };
        }
        return c;
      });
    }

    persistData({
      ...data,
      transactions: updatedTransactions,
      categories: updatedCategories
    });
    showToast(`Added ${newTx.type === 'income' ? 'income' : 'expense'}: ${formatINR(newTx.amount)}`, "success");
  };

  // Update Budget Limits
  const handleUpdateBudget = ({ income, categories }) => {
    persistData({
      ...data,
      user: { ...data.user, monthlyIncome: income },
      categories
    });
  };

  // Add Savings Goal
  const handleAddGoal = (newGoal) => {
    soundManager.playSuccess();
    persistData({
      ...data,
      savingsGoals: [newGoal, ...data.savingsGoals]
    });
    showToast(`Goal '${newGoal.title}' created successfully!`, "success");
  };

  // Update User Profile
  const handleUpdateUser = (updatedUser) => {
    persistData({
      ...data,
      user: { ...data.user, ...updatedUser }
    });
    showToast("Profile updated successfully!", "success");
  };

  // Calculate Dynamic Financial Health Score
  const totalIncome = data.user.monthlyIncome || 75000;
  const totalExpenses = data.categories.reduce((sum, c) => sum + (c.spent || 0), 0);
  const netSavings = Math.max(0, totalIncome - totalExpenses);
  const healthData = calculateHealthScore(totalIncome, totalExpenses, netSavings, 5);

  // Smooth Scroll Navigation Handler
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Setup Background Particle Network and Cursor Glow
  React.useEffect(() => {
    // 1. Particle Matrix
    const particleCanvas = document.getElementById('particle-canvas');
    let particlesInstance = null;
    if (particleCanvas) {
      particlesInstance = new FinancialParticleNetwork(particleCanvas);
    }

    // 2. Cursor Follower
    const cursorGlow = document.getElementById('cursor-glow');
    const moveGlow = (e) => {
      if (cursorGlow) {
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', moveGlow);

    // 3. Remove Loading Overlay
    const loader = document.getElementById('loading-overlay');
    if (loader) {
      setTimeout(() => {
        loader.classList.add('loaded');
      }, 700);
    }

    return () => {
      window.removeEventListener('mousemove', moveGlow);
    };
  }, []);

  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* Background Particle Canvas */}
      <canvas id="particle-canvas" className="fixed inset-0 pointer-events-none z-0"></canvas>

      {/* Cursor Glow */}
      <div id="cursor-glow" className="hidden lg:block"></div>

      {/* Sticky Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenNewTransaction={() => setIsTxModalOpen(true)}
        user={data.user}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        
        {/* Hero Section */}
        <Hero
          onStartPlanning={() => scrollToSection('budget')}
          onExploreFeatures={() => scrollToSection('dashboard')}
          healthData={healthData}
          totalSavings={netSavings}
          totalIncome={totalIncome}
        />

        {/* Dashboard Section */}
        <Dashboard
          data={data}
          healthData={healthData}
          onOpenAddTransaction={() => setIsTxModalOpen(true)}
          onNavigate={scrollToSection}
        />

        {/* Budget Planner Section */}
        <BudgetPlanner
          data={data}
          onUpdateBudget={handleUpdateBudget}
          onResetDemo={handleResetDemo}
          onShowToast={showToast}
        />

        {/* Savings Planner Section */}
        <SavingsPlanner
          data={data}
          onOpenAddGoal={() => setIsGoalModalOpen(true)}
        />

        {/* Government Scheme Finder Section */}
        <SchemeFinder
          onSelectScheme={(scheme) => setSelectedScheme(scheme)}
          onOpenEligibilityChecker={() => setIsEligibilityOpen(true)}
        />

        {/* Financial Literacy Hub Section */}
        <LiteracyHub
          onShowToast={showToast}
        />

        {/* Smart Financial Assistant (FinBot) */}
        <Assistant />

      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onShowToast={showToast}
      />

      {/* Interactive Modals */}
      <AddTransactionModal
        isOpen={isTxModalOpen}
        onClose={() => setIsTxModalOpen(false)}
        onAdd={handleAddTransaction}
        categories={data.categories}
      />

      <AddGoalModal
        isOpen={isGoalModalOpen}
        onClose={() => setIsGoalModalOpen(false)}
        onAdd={handleAddGoal}
      />

      <SchemeDetailsModal
        scheme={selectedScheme}
        onClose={() => setSelectedScheme(null)}
      />

      <EligibilityCheckerModal
        isOpen={isEligibilityOpen}
        onClose={() => setIsEligibilityOpen(false)}
        onSelectScheme={(scheme) => setSelectedScheme(scheme)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        user={data.user}
        onUpdateUser={handleUpdateUser}
      />

      {/* Floating Toast Notifications */}
      <div className="toast-container">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className={`toast-item px-4 py-3 rounded-xl border backdrop-blur-xl shadow-2xl flex items-center gap-3 text-xs font-semibold ${
              toast.type === 'success'
                ? 'bg-[#09152C]/95 border-emerald-500/50 text-emerald-300 shadow-emerald-500/20'
                : 'bg-[#09152C]/95 border-white/20 text-slate-200'
            }`}
          >
            <span className="text-sm">{toast.type === 'success' ? '✓' : 'ℹ️'}</span>
            <span>{toast.message}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

// Render root
const rootElement = document.getElementById('root');
if (ReactDOM.createRoot) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  ReactDOM.render(<App />, rootElement);
}
