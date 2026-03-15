import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Home, Trophy, BookOpen, Layout } from 'lucide-react';

export const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Sports', path: '/sports', icon: Layout },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div 
            whileHover={{ rotate: 10 }}
            className="bg-blue-600 p-2 rounded-xl"
          >
            <Play className="text-white fill-current" size={20} />
          </motion.div>
          <span className="text-2xl font-black tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors">
            SmartCoach
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-all ${
                  isActive ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <item.icon size={16} />
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-[-1.25rem] left-0 right-0 h-1 bg-blue-600 rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <Link
          to="/sports"
          className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-600 transition-all active:scale-95"
        >
          Start Training
        </Link>
      </div>
    </nav>
  );
};
