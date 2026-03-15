import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Activity, Zap, Dumbbell, Trophy, Users, Shield, Flag } from 'lucide-react';
import { Sport } from '../data/sports';

const iconMap: { [key: string]: any } = {
  Target, Activity, Zap, Dumbbell, Trophy, Users, Shield, Flag
};

export const SportCard: React.FC<{ sport: Sport }> = ({ sport }) => {
  const Icon = iconMap[sport.icon] || Activity;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all group"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={sport.heroImage} 
          alt={sport.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 flex items-center gap-3">
          <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white">
            <Icon size={24} />
          </div>
          <div>
            <span className="text-white/70 text-[10px] font-black uppercase tracking-[0.2em] block mb-0.5">
              {sport.difficulty}
            </span>
            <h3 className="text-white text-2xl font-black tracking-tight">{sport.name}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-8">
        <p className="text-slate-500 leading-relaxed mb-8 h-12 overflow-hidden">
          {sport.shortDescription}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
            <Shield size={14} />
            {sport.readTime}
          </div>
          <Link
            to={`/sports/${sport.id}`}
            className="flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-widest hover:gap-4 transition-all"
          >
            Open Training
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
