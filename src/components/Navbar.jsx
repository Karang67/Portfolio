import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Code2, User, GraduationCap, FolderGit2, Mail, Award } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'portfolio', label: 'Portfolio', icon: FolderGit2 },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-dark-900/80 backdrop-blur-xl border-b border-gold-500/20 shadow-lg shadow-black/40' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-gold-600 via-amber-400 to-amber-200 p-[1px] shadow-md shadow-gold-500/20 group-hover:shadow-gold-500/40 transition-all duration-300">
            <div className="w-full h-full bg-dark-900 rounded-[11px] flex items-center justify-between px-2 font-bold text-gold-500">
              <Sparkles className="w-5 h-5 text-gold-400 animate-pulse" />
              <span className="text-sm tracking-wider">KG</span>
            </div>
          </div>
          <div>
            <span className="font-bold text-lg text-white group-hover:text-gold-400 transition-colors">
              Karan Gehlot
            </span>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>Fullstack Developer</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-dark-800/80 p-1.5 rounded-full border border-gray-800/80 backdrop-blur-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-gold-500 to-amber-400 text-dark-900 shadow-md shadow-gold-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-dark-700/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-dark-900' : 'text-gold-500'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('contact')}
            className="relative group overflow-hidden px-4 py-2 rounded-full text-xs font-bold text-dark-900 bg-gold-500 hover:bg-gold-400 transition-all duration-300 shadow-md shadow-gold-500/20 hover:shadow-gold-500/40 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <span>Hire Me</span>
              <Sparkles className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-dark-800 border border-gray-700 text-gray-300 hover:text-gold-500 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-900/95 border-b border-gold-500/20 backdrop-blur-2xl px-4 py-6 space-y-3 shadow-2xl animate-fadeIn">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gold-500 text-dark-900 font-bold'
                    : 'text-gray-300 hover:bg-dark-800 hover:text-gold-400'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </button>
            );
          })}
          <div className="pt-4 border-t border-gray-800">
            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full text-center py-3 rounded-xl bg-gold-500 text-dark-900 font-bold text-sm shadow-lg shadow-gold-500/20 cursor-pointer"
            >
              Hire Me / Send Message
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
