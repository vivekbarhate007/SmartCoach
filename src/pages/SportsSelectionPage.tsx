import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sports } from '../data/sports';
import { SportCard } from '../components/SportCard';
import { Search, Filter } from 'lucide-react';

export const SportsSelectionPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredSports = sports.filter(sport => {
    const matchesSearch = sport.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'All' || sport.difficulty.includes(filter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">
            Training Center
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Choose Your Sport
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Select a sport to explore its rulebook and enter the coach simulator. Every journey begins with the first play.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between bg-white p-4 rounded-[2rem] border border-slate-100 shadow-sm">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search sports..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-600 transition-all font-medium"
            />
          </div>
          
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            {['All', 'Beginner Friendly', 'Intermediate'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${
                  filter === f 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' 
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSports.map((sport, i) => (
            <motion.div
              key={sport.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <SportCard sport={sport} />
            </motion.div>
          ))}
        </div>

        {filteredSports.length === 0 && (
          <div className="text-center py-24">
            <div className="text-slate-300 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No sports found</h3>
            <p className="text-slate-500">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
};
