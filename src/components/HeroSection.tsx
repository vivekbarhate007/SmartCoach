import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, Zap, Target } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-24 md:pb-32 px-6">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest mb-8">
              <Zap size={14} className="fill-current" />
              The Future of Sports Learning
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
              Learn Sports Like a <span className="text-blue-600">Player</span>. Think Like a <span className="text-orange-500">Coach</span>.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-12">
              Interactive simulations, beginner-friendly rulebooks, and game-based decisions across multiple sports. Master the game from the inside out.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/sports"
                className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-200 active:scale-95 flex items-center justify-center gap-2"
              >
                Start Training
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/sports"
                className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-bold text-lg hover:border-slate-200 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Explore Sports
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Interactive Sims",
              desc: "Test your awareness with real-game decision scenarios.",
              icon: Target,
              color: "bg-orange-500"
            },
            {
              title: "Smart Rulebooks",
              desc: "Master the basics with clean, easy-to-read guides.",
              icon: Shield,
              color: "bg-blue-600"
            },
            {
              title: "Pro Insights",
              desc: "Learn the 'why' behind every play with coach feedback.",
              icon: Play,
              color: "bg-green-500"
            }
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group"
            >
              <div className={`${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
