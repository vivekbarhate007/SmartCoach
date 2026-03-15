import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { sports } from '../data/sports';
import { rulebooks } from '../data/rulebooks';
import { 
  ArrowLeft, Clock, Shield, Target, BookOpen, Play, 
  CheckCircle2, AlertCircle, ChevronDown, ChevronUp, Users, Zap, Trophy 
} from 'lucide-react';

export const SportDetailPage: React.FC = () => {
  const { sportId } = useParams<{ sportId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'rulebook'>('overview');
  const [expandedRule, setExpandedRule] = useState<number | null>(0);

  const sport = sports.find(s => s.id === sportId);
  const rulebook = rulebooks.find(r => r.sportId === sportId);

  if (!sport || !rulebook) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Sport not found</h2>
          <Link to="/sports" className="text-blue-600 font-bold">Back to Sports</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img 
          src={sport.heroImage} 
          alt={sport.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-end px-6 pb-12">
          <div className="max-w-7xl mx-auto w-full">
            <Link 
              to="/sports" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 font-bold text-sm uppercase tracking-widest"
            >
              <ArrowLeft size={16} />
              Back to Sports
            </Link>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                    {sport.difficulty}
                  </span>
                  <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest">
                    <Clock size={14} />
                    {sport.readTime} Read
                  </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
                  {sport.name}
                </h1>
              </div>
              <button
                onClick={() => navigate(`/sports/${sport.id}/coach`)}
                className="bg-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 active:scale-95 flex items-center justify-center gap-3"
              >
                <Play className="fill-current" size={24} />
                Train with Coach
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="sticky top-[73px] z-30 bg-white border-b border-slate-100 px-6">
        <div className="max-w-7xl mx-auto flex gap-8">
          {[
            { id: 'overview', label: 'Overview', icon: Target },
            { id: 'rulebook', label: 'Rulebook', icon: BookOpen },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 py-6 text-sm font-black uppercase tracking-widest transition-all relative ${
                activeTab === tab.id ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-full"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' ? (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
              <div className="md:col-span-2 space-y-12">
                <section>
                  <h2 className="text-3xl font-black text-slate-900 mb-6">Introduction</h2>
                  <p className="text-xl text-slate-500 leading-relaxed">
                    {sport.shortDescription} Whether you're a complete beginner or looking to sharpen your tactical edge, our SmartCoach system will guide you through the core principles of {sport.name}.
                  </p>
                </section>

                <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                      <Target size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Objective</h3>
                    <p className="text-slate-500 leading-relaxed">{rulebook.objective}</p>
                  </div>
                  <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-6">
                      <Trophy size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Scoring</h3>
                    <p className="text-slate-500 leading-relaxed">{rulebook.scoring}</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-black text-slate-900 mb-8">Key Player Roles</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {rulebook.roles.map((role, i) => (
                      <div key={role} className="bg-slate-900 text-white p-4 rounded-2xl text-center">
                        <div className="text-blue-400 font-black text-xs mb-1">Role {i + 1}</div>
                        <div className="font-bold">{role}</div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="space-y-8">
                <div className="bg-blue-600 text-white p-8 rounded-[2.5rem] shadow-xl shadow-blue-200">
                  <Zap className="mb-6" size={32} />
                  <h3 className="text-2xl font-black mb-4">Ready to play?</h3>
                  <p className="text-blue-100 leading-relaxed mb-8">
                    Master the rules first, then jump into Coach Mode to test your decision-making skills in real-game scenarios.
                  </p>
                  <button
                    onClick={() => setActiveTab('rulebook')}
                    className="w-full bg-white text-blue-600 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all active:scale-95"
                  >
                    Read Rulebook
                  </button>
                </div>

                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Users size={20} className="text-blue-600" />
                    Community Tips
                  </h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-2xl text-sm text-slate-600 italic">
                      "Always watch the hips of the defender, they never lie!"
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl text-sm text-slate-600 italic">
                      "Communication is 50% of the game. Call for the ball!"
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="rulebook"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">The Rulebook</h2>
                <p className="text-slate-500 text-lg">
                  Everything you need to know to start playing {sport.name} like a pro.
                </p>
              </div>

              <div className="space-y-4 mb-16">
                {rulebook.keyRules.map((rule, i) => (
                  <div 
                    key={i}
                    className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedRule(expandedRule === i ? null : i)}
                      className="w-full px-8 py-6 flex items-center justify-between hover:bg-slate-50 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-black">
                          {i + 1}
                        </div>
                        <span className="text-lg font-bold text-slate-900 text-left">{rule}</span>
                      </div>
                      {expandedRule === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    <AnimatePresence>
                      {expandedRule === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-8 pb-8 text-slate-500 leading-relaxed"
                        >
                          This rule is fundamental to {sport.name}. Understanding how to play within these boundaries is the first step toward advanced strategy. Coaches look for players who master these basics consistently.
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-orange-50 p-8 rounded-[2.5rem] border border-orange-100">
                  <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white mb-6">
                    <AlertCircle size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-orange-900 mb-4">Common Mistake</h3>
                  <p className="text-orange-800/70 leading-relaxed font-medium">
                    {rulebook.beginnerMistake}
                  </p>
                </div>
                <div className="bg-green-50 p-8 rounded-[2.5rem] border border-green-100">
                  <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white mb-6">
                    <Zap size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-green-900 mb-4">Strategy Tip</h3>
                  <p className="text-green-800/70 leading-relaxed font-medium">
                    {rulebook.strategyTip}
                  </p>
                </div>
              </div>

              <div className="mt-20 text-center">
                <button
                  onClick={() => navigate(`/sports/${sport.id}/coach`)}
                  className="bg-slate-900 text-white px-12 py-6 rounded-[2rem] font-black text-xl hover:bg-blue-600 transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-4 mx-auto"
                >
                  <Trophy size={24} />
                  Enter Coach Mode
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};
