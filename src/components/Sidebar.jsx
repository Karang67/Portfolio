import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Code, Send } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-[320px] shrink-0 space-y-6">
      <div className="glass-card rounded-3xl p-6 lg:p-8 text-center relative overflow-hidden group">
        {/* Glow halo in card top background */}
        <div className="absolute -top-16 -left-16 w-32 h-32 bg-gold-500/20 rounded-full blur-3xl group-hover:bg-gold-500/30 transition-all" />

        {/* Profile Avatar */}
        <div className="relative inline-block mx-auto mb-4">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-gold-500 via-amber-300 to-amber-600 shadow-xl shadow-gold-500/20">
            <img
              src="/karan-Picsart-AiImageEnhancer-min (2).jpg"
              alt="Karan Gehlot"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover rounded-full border-2 border-dark-900"
            />
          </div>
          <span className="absolute bottom-1 right-1 bg-emerald-500 border-2 border-dark-900 w-5 h-5 rounded-full shadow-md" title="Available for Opportunities" />
        </div>

        {/* Name & Title */}
        <h1 className="text-2xl font-bold text-white tracking-tight mb-1">
          Karan Gehlot
        </h1>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold mb-4">
          <Code className="w-3.5 h-3.5" />
          <span>Fullstack Web Developer</span>
        </div>

        <p className="text-xs text-gray-400 leading-relaxed mb-6">
          Crafting responsive, high-performance web solutions & AI-driven user experiences.
        </p>

        {/* Contact Info Table */}
        <div className="space-y-3.5 text-left border-t border-gray-800/80 pt-5 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-dark-800 border border-gray-700/60 flex items-center justify-center text-gold-400 shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="truncate">
              <span className="block text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Email</span>
              <a href="mailto:karangehlot5686@gmail.com" className="text-gray-200 hover:text-gold-400 font-medium truncate block transition-colors">
                karangehlot5686@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-dark-800 border border-gray-700/60 flex items-center justify-center text-gold-400 shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Phone</span>
              <a href="tel:8949012308" className="text-gray-200 hover:text-gold-400 font-medium transition-colors">
                +91 8949012308
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-dark-800 border border-gray-700/60 flex items-center justify-center text-gold-400 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Location</span>
              <span className="text-gray-200 font-medium">Vadodara, Gujarat, India</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800/80 pt-5 mt-5 flex items-center justify-center gap-2.5">
          <a
            href="https://github.com/Karang67"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-dark-800 border border-gray-700/60 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500/50 hover:scale-110 transition-all duration-300 shadow-md"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/karan-gehlot-0025922b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-dark-800 border border-gray-700/60 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500/50 hover:scale-110 transition-all duration-300 shadow-md"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://leetcode.com/u/KaranGehlot/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-dark-800 border border-gray-700/60 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500/50 hover:scale-110 transition-all duration-300 shadow-md font-bold text-xs"
            title="LeetCode (@KaranGehlot)"
          >
            LC
          </a>
          <a
            href="https://x.com/karanGehlo24891"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-dark-800 border border-gray-700/60 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500/50 hover:scale-110 transition-all duration-300 shadow-md"
            title="X / Twitter (@karanGehlo24891)"
          >
            <Twitter className="w-4 h-4" />
          </a>
        </div>

        {/* Action Button */}
        <div className="mt-6">
          <a
            href="#contact"
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-dark-900 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 transition-all duration-300 cursor-pointer"
          >
            <Send className="w-4 h-4 text-dark-900" />
            <span>Get In Touch</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
