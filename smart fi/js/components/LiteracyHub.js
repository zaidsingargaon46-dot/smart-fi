// FINWISE - Financial Literacy Hub & Interactive Certification Quiz Component

function LiteracyHub({ onShowToast }) {
  const [selectedModule, setSelectedModule] = React.useState(null);
  
  // Quiz State
  const [quizActive, setQuizActive] = React.useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = React.useState(false);
  const [userScore, setUserScore] = React.useState(0);
  const [quizCompleted, setQuizCompleted] = React.useState(false);
  const [answersHistory, setAnswersHistory] = React.useState([]);

  // Start Quiz
  const startQuiz = () => {
    soundManager.playClick();
    setQuizActive(true);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setUserScore(0);
    setQuizCompleted(false);
    setAnswersHistory([]);
  };

  // Submit Answer
  const handleAnswerSubmit = () => {
    if (selectedOption === null) return;
    const currentQ = LITERACY_QUIZ[currentQuestionIndex];
    const isCorrect = selectedOption === currentQ.correctAnswer;

    if (isCorrect) {
      soundManager.playSuccess();
      setUserScore(prev => prev + 1);
    } else {
      soundManager.playTone(300, 'sawtooth', 0.15, 0.05);
    }

    setIsAnswerSubmitted(true);
    setAnswersHistory(prev => [...prev, { qIndex: currentQuestionIndex, selected: selectedOption, isCorrect }]);
  };

  // Next Question
  const handleNextQuestion = () => {
    soundManager.playTab();
    if (currentQuestionIndex + 1 < LITERACY_QUIZ.length) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizCompleted(true);
      soundManager.playSuccess();
      onShowToast("Quiz completed! You earned your FinWise Certified Citizen Badge.", "success");
    }
  };

  const currentQ = LITERACY_QUIZ[currentQuestionIndex];

  return (
    <section id="literacy" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Financial Empowerment & Fraud Prevention</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Financial Literacy <span className="text-gradient-emerald">Hub</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1">
              Plain-language modules designed for Indian households. Master UPI defense, compounding, and debt discipline.
            </p>
          </div>

          <button
            onClick={startQuiz}
            className="btn-emerald text-xs !py-3 !px-5 shadow-lg shadow-emerald-500/20"
          >
            <span>🎯 Take Financial IQ Quiz</span>
          </button>
        </div>

        {/* 5 Core Learning Modules Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LITERACY_MODULES.map((mod) => (
            <div
              key={mod.id}
              onClick={() => {
                soundManager.playTab();
                setSelectedModule(mod);
              }}
              className="glass-panel p-6 space-y-4 border border-white/10 hover:border-emerald-500/40 cursor-pointer group transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-emerald-400">
                    {mod.category}
                  </span>
                  <span className="text-slate-400 text-[11px] font-mono">{mod.duration}</span>
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-emerald-300 transition-colors">
                  {mod.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {mod.summary}
                </p>

                {/* Key takeaways bullet preview */}
                <div className="pt-2 border-t border-white/5 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Golden Takeaway</span>
                  <div className="text-xs text-slate-300 flex items-start gap-1.5">
                    <span className="text-emerald-400">✓</span>
                    <span className="line-clamp-2">{mod.takeaways[0]}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Difficulty: <span className="text-slate-200">{mod.level}</span></span>
                <span className="text-emerald-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read Guide <span>→</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Quiz Card / Arena */}
        <div className="glass-panel p-6 sm:p-8 border border-emerald-500/30 relative overflow-hidden">
          
          {!quizActive && !quizCompleted && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                  Test Your Awareness
                </span>
                <h3 className="font-display font-extrabold text-2xl text-white">
                  Take the 5-Minute Indian Financial Awareness Quiz
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                  Evaluate your fraud detection reflexes, budgeting instincts, and government scheme awareness.
                  Earn the verified FinWise Citizen Badge upon scoring 4/5 or higher.
                </p>
              </div>

              <button
                onClick={startQuiz}
                className="btn-emerald text-sm !px-6 !py-3 whitespace-nowrap"
              >
                Start Quiz Now
              </button>
            </div>
          )}

          {/* Active Quiz Question Card */}
          {quizActive && !quizCompleted && (
            <div className="space-y-6 max-w-2xl mx-auto">
              {/* Progress Header */}
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono font-bold text-emerald-400">
                  Question {currentQuestionIndex + 1} of {LITERACY_QUIZ.length}
                </span>
                <span className="font-mono font-semibold">
                  Score: {userScore} Points
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-emerald-400 h-full rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / LITERACY_QUIZ.length) * 100}%` }}
                ></div>
              </div>

              {/* Question Text */}
              <h4 className="font-display font-bold text-lg sm:text-xl text-white leading-relaxed">
                {currentQ.question}
              </h4>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((opt, idx) => {
                  let btnStyle = "bg-white/5 border-white/10 text-slate-200 hover:bg-white/10";
                  if (selectedOption === idx) {
                    btnStyle = "bg-emerald-500/20 border-emerald-400 text-white font-semibold";
                  }
                  if (isAnswerSubmitted) {
                    if (idx === currentQ.correctAnswer) {
                      btnStyle = "bg-emerald-500/30 border-emerald-400 text-emerald-300 font-bold";
                    } else if (selectedOption === idx) {
                      btnStyle = "bg-rose-500/30 border-rose-400 text-rose-300";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswerSubmitted}
                      onClick={() => {
                        soundManager.playClick();
                        setSelectedOption(idx);
                      }}
                      className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 ${btnStyle}`}
                    >
                      <span className="w-6 h-6 rounded-lg bg-black/30 border border-white/10 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Feedback and Explanation */}
              {isAnswerSubmitted && (
                <div className={`p-4 rounded-xl text-xs space-y-1.5 animate-fadeIn ${
                  selectedOption === currentQ.correctAnswer
                    ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-200'
                    : 'bg-rose-500/15 border border-rose-500/30 text-rose-200'
                }`}>
                  <div className="font-bold flex items-center gap-1.5">
                    {selectedOption === currentQ.correctAnswer ? '✓ Correct Answer!' : '✗ Not Quite Right.'}
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {currentQ.explanation}
                  </p>
                </div>
              )}

              {/* Navigation Action */}
              <div className="flex justify-end gap-3 pt-2">
                {!isAnswerSubmitted ? (
                  <button
                    disabled={selectedOption === null}
                    onClick={handleAnswerSubmit}
                    className="btn-emerald text-xs !py-2.5 !px-5 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Confirm Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="btn-emerald text-xs !py-2.5 !px-5"
                  >
                    {currentQuestionIndex + 1 < LITERACY_QUIZ.length ? 'Next Question →' : 'View Final Score 🎉'}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Quiz Completed Result Screen */}
          {quizCompleted && (
            <div className="max-w-xl mx-auto text-center space-y-6 py-4 animate-fadeIn">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 mx-auto flex items-center justify-center text-3xl shadow-xl shadow-emerald-500/30">
                {userScore >= 4 ? '🏆' : '📚'}
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                  Quiz Completed
                </span>
                <h3 className="font-display font-black text-3xl text-white">
                  Your Score: {userScore} / {LITERACY_QUIZ.length}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm">
                  {userScore >= 4
                    ? "Outstanding! You possess sharp financial instincts to safeguard your family's savings and spot modern digital scams."
                    : "Good effort! Review the literacy modules above to reinforce your knowledge on UPI safety and compounding rules."}
                </p>
              </div>

              {/* Digital Certificate Badge */}
              <div className="p-4 rounded-2xl bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 inline-block text-left max-w-sm w-full space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-display font-extrabold text-sm text-white">FINWISE CITIZEN BADGE</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-400 text-black font-black text-[10px]">VERIFIED</span>
                </div>
                <div className="text-[11px] text-slate-300">
                  Awarded for demonstrating proficiency in Indian Household Financial Planning & Cyber Defense.
                </div>
                <div className="text-[10px] font-mono text-emerald-400 flex justify-between pt-1 border-t border-white/10">
                  <span>ID: FW-2026-IN</span>
                  <span>Valid Indefinitely</span>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={startQuiz}
                  className="btn-secondary text-xs !py-2.5 !px-5"
                >
                  Retake Quiz
                </button>
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setQuizActive(false);
                    setQuizCompleted(false);
                  }}
                  className="btn-emerald text-xs !py-2.5 !px-5"
                >
                  Explore Modules
                </button>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Full Module Modal */}
      {selectedModule && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-emerald-500/40 space-y-6 relative animate-fadeIn">
            <button
              onClick={() => setSelectedModule(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center text-sm"
            >
              ✕
            </button>

            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                {selectedModule.category}
              </span>
              <h3 className="font-display font-extrabold text-2xl text-white">
                {selectedModule.title}
              </h3>
              <p className="text-xs text-slate-400 font-mono">{selectedModule.duration} • Level: {selectedModule.level}</p>
            </div>

            {/* Content text */}
            <div className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line border-t border-white/10 pt-4">
              {selectedModule.content}
            </div>

            {/* Key takeaways */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                Action Items for Today
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {selectedModule.takeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedModule(null)}
                className="btn-emerald text-xs !py-2 !px-5"
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
