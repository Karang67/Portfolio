import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-gray-800/60 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <span>&copy; {new Date().getFullYear()} Karan Gehlot. Built with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
          <span>using React & Tailwind CSS.</span>
        </div>

        <button
          onClick={scrollToTop}
          className="px-3.5 py-2 rounded-xl bg-dark-800 border border-gray-700/80 hover:border-gold-500 text-gray-400 hover:text-gold-400 font-semibold flex items-center gap-1.5 transition-all shadow-md"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
