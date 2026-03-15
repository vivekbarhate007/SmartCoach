import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Twitter, Instagram, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="bg-blue-600 p-2 rounded-xl">
              <Play className="text-white fill-current" size={20} />
            </div>
            <span className="text-2xl font-black tracking-tighter">SmartCoach</span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            The ultimate sports learning platform. Master the rules, understand the strategy, and make better decisions on the field.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors">
              <Github size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Explore</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><Link to="/sports" className="hover:text-white transition-colors">All Sports</Link></li>
            <li><Link to="/sports/basketball" className="hover:text-white transition-colors">Basketball</Link></li>
            <li><Link to="/sports/soccer" className="hover:text-white transition-colors">Soccer</Link></li>
            <li><Link to="/sports/football" className="hover:text-white transition-colors">Football</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Resources</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Rulebooks</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Coach Mode</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Drills Library</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Support</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
        &copy; 2026 SmartCoach Interactive. Built for champions.
      </div>
    </footer>
  );
};
