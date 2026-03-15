import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { scenarios } from '../data/scenarios';
import { sports } from '../data/sports';
import { 
  ArrowLeft, Trophy, RefreshCw, ChevronRight, Play, 
  CheckCircle2, AlertCircle, Target, Zap, Activity, Users
} from 'lucide-react';

export const CoachSimulatorPage: React.FC = () => {
  const { sportId } = useParams<{ sportId: string }>();
  const navigate = useNavigate();
  
  const sport = sports.find(s => s.id === sportId);
  const sportScenarios = scenarios.filter(s => s.sportId === sportId);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  if (!sport || sportScenarios.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No scenarios found for this sport</h2>
          <Link to="/sports" className="text-blue-600 font-bold">Back to Sports</Link>
        </div>
      </div>
    );
  }

  const currentScenario = sportScenarios[currentIndex];

  const handleSelectChoice = (choice: string) => {
    if (showFeedback) return;
    setSelectedChoice(choice);
    setShowFeedback(true);
    if (choice === currentScenario.correct) {
      setScore(prev => prev + 1);
      setShowConfetti(true);
    }
  };

  const handleNext = () => {
    if (currentIndex < sportScenarios.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedChoice(null);
      setShowFeedback(false);
    } else {
      setIsGameOver(true);
    }
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedChoice(null);
    setShowFeedback(false);
    setIsGameOver(false);
  };

  const progress = ((currentIndex + 1) / sportScenarios.length) * 100;

  if (isGameOver) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-[3rem] p-12 shadow-2xl border border-slate-100 text-center max-w-xl w-full"
        >
          <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Trophy className="text-orange-500 w-12 h-12" />
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-4">Training Complete!</h1>
          <p className="text-slate-500 text-lg mb-8">
            You've completed the {sport.name} Coach Mode. Your tactical awareness is growing.
          </p>
          
          <div className="bg-blue-50 rounded-[2rem] p-10 mb-10">
            <div className="text-sm font-black text-blue-400 uppercase tracking-[0.2em] mb-2">Final Score</div>
            <div className="text-7xl font-black text-blue-900">
              {score} <span className="text-2xl text-blue-300">/ {sportScenarios.length}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={resetGame}
              className="w-full bg-slate-100 text-slate-900 py-5 rounded-2xl font-bold text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              <RefreshCw size={20} />
              Retry Drills
            </button>
            <button
              onClick={() => navigate('/sports')}
              className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-100 active:scale-95"
            >
              Choose Another
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Confetti Overlay */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -20, x: Math.random() * window.innerWidth, rotate: 0 }}
              animate={{ 
                y: window.innerHeight + 20, 
                x: (Math.random() - 0.5) * 300 + (Math.random() * window.innerWidth),
                rotate: 720 
              }}
              transition={{ duration: 2 + Math.random() * 2, ease: "linear" }}
              className="absolute w-3 h-3 rounded-sm"
              style={{ backgroundColor: [sport.accentColor, '#F97316', '#22C55E', '#1D4ED8'][Math.floor(Math.random() * 4)] }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <header className="bg-white border-b border-slate-100 px-6 py-4 sticky top-0 z-40 shadow-sm">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => navigate(`/sports/${sport.id}`)}
            className="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-bold text-sm uppercase tracking-widest"
          >
            <ArrowLeft size={18} />
            Exit
          </button>
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Play className="text-white fill-current" size={16} />
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900">Coach Mode</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Score</div>
              <div className="text-lg font-black text-blue-600">{score} pts</div>
            </div>
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-black text-slate-900">
              {currentIndex + 1}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Play {currentIndex + 1} of {sportScenarios.length}</span>
            <span className="text-xs font-black text-blue-600 uppercase tracking-[0.2em]">{Math.round(progress)}% Complete</span>
          </div>
          <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-blue-600 rounded-full"
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Scenario Card */}
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden mb-8">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Target size={120} />
              </div>
              
              <div className="flex items-center gap-3 mb-8">
                <div className="px-4 py-1.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                  {currentScenario.tag}
                </div>
                <div className="px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                  {currentScenario.difficulty}
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-8">
                {currentScenario.scenario}
              </h2>

              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm bg-blue-50 w-fit px-4 py-2 rounded-xl">
                <Zap size={16} className="fill-current" />
                What's the best play?
              </div>
            </div>

            {/* Decision Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {currentScenario.choices.map((choice) => {
                const isSelected = selectedChoice === choice;
                const isCorrect = choice === currentScenario.correct;
                const isWrong = isSelected && !isCorrect;
                
                let btnClass = "w-full py-6 px-8 rounded-[2rem] font-black text-lg transition-all border-2 ";
                
                if (!showFeedback) {
                  btnClass += "bg-white border-slate-100 text-slate-700 hover:border-blue-600 hover:shadow-xl hover:-translate-y-1 active:scale-95";
                } else {
                  if (isCorrect) {
                    btnClass += "bg-green-500 border-green-500 text-white shadow-xl shadow-green-100";
                  } else if (isWrong) {
                    btnClass += "bg-orange-500 border-orange-500 text-white";
                  } else {
                    btnClass += "bg-slate-50 border-slate-50 text-slate-300 opacity-50";
                  }
                }

                return (
                  <button
                    key={choice}
                    onClick={() => handleSelectChoice(choice)}
                    disabled={showFeedback}
                    className={btnClass}
                  >
                    {choice}
                  </button>
                );
              })}
            </div>

            {/* Feedback Panel */}
            <AnimatePresence>
              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className={`p-8 rounded-[2.5rem] border-2 ${
                    selectedChoice === currentScenario.correct 
                      ? 'bg-green-50 border-green-200 text-green-900' 
                      : 'bg-orange-50 border-orange-200 text-orange-900'
                  }`}>
                    <div className="flex items-start gap-6">
                      <div className={`p-3 rounded-2xl ${selectedChoice === currentScenario.correct ? 'bg-green-200' : 'bg-orange-200'}`}>
                        {selectedChoice === currentScenario.correct ? <CheckCircle2 size={32} /> : <AlertCircle size={32} />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-black mb-3">
                          {selectedChoice === currentScenario.correct ? 'Correct Decision!' : 'Good Try, Coach'}
                        </h3>
                        <p className="text-lg opacity-80 leading-relaxed mb-6">
                          {currentScenario.explanation}
                        </p>
                        
                        <div className="bg-white/50 p-6 rounded-2xl border border-white/50">
                          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest mb-2 opacity-60">
                            <Users size={14} />
                            Coaching Insight
                          </div>
                          <p className="font-bold italic">"{currentScenario.coachingInsight}"</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleNext}
                      className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-600 transition-all shadow-xl active:scale-95 flex items-center gap-3"
                    >
                      {currentIndex === sportScenarios.length - 1 ? 'See Results' : 'Next Play'}
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};
