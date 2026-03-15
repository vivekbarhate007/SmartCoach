import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/HeroSection';
import { SportCard } from '../components/SportCard';
import { sports } from '../data/sports';
import { CheckCircle2, Play, Users, Trophy } from 'lucide-react';

export const LandingPage: React.FC = () => {
  return (
    <div className="bg-white">
      <HeroSection />

      {/* Featured Sports */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">
                The Playbook
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                Master Your Favorite Sports
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm">
              From the court to the pitch, we cover the strategy that wins games. Choose a sport to begin your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sports.slice(0, 3).map((sport) => (
              <SportCard key={sport.id} sport={sport} />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">How SmartCoach Works</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We've broken down complex sports strategy into a simple, interactive learning path designed for the modern athlete.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
            
            {[
              { step: "01", title: "Choose Sport", desc: "Select from our library of 8+ major sports.", icon: Play },
              { step: "02", title: "Learn Rules", desc: "Master the basics with beginner-friendly guides.", icon: CheckCircle2 },
              { step: "03", title: "Train Mode", desc: "Enter the simulator for game-based decisions.", icon: Trophy },
              { step: "04", title: "Level Up", desc: "Improve your awareness and win more games.", icon: Users },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative z-10 text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-blue-100">
                  <item.icon size={28} />
                </div>
                <span className="text-blue-600 font-black text-sm mb-2 block">{item.step}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-blue-400 font-black uppercase tracking-[0.2em] text-xs mb-6 block">
              Why SmartCoach
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-10 leading-tight">
              Traditional coaching is slow. <span className="text-blue-400">We make it interactive.</span>
            </h2>
            <div className="space-y-8">
              {[
                { t: "Game-Based Learning", d: "Stop reading boring manuals. Start making real decisions in simulated game scenarios." },
                { t: "Expert Insights", d: "Every feedback loop is designed by coaches to teach you the 'why' behind the play." },
                { t: "Multi-Sport Mastery", d: "One platform for all your favorite sports. Switch between them seamlessly." }
              ].map(item => (
                <div key={item.t} className="flex gap-6">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.t}</h4>
                    <p className="text-slate-400 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-blue-600/20 rounded-[3rem] border border-blue-500/30 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1000" 
                alt="Sports Training"
                className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl text-slate-900 hidden md:block"
            >
              <div className="text-3xl font-black text-blue-600">92%</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Decision Accuracy</div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-10 -left-10 bg-orange-500 p-6 rounded-3xl shadow-2xl text-white hidden md:block"
            >
              <div className="text-3xl font-black">24+</div>
              <div className="text-xs font-bold text-white/70 uppercase tracking-widest">Training Scenarios</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
