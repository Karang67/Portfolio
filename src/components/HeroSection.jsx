import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, ArrowRight, ShieldCheck, FolderGit2, Cpu, Send, FileText } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="about" className="relative pt-6 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-3xl p-6 sm:p-10 relative overflow-hidden"
      >
        {/* Glow ambient background element */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-800 border border-gold-500/30 text-gold-400 text-xs font-semibold mb-6 shadow-md">
          <Sparkles className="w-4 h-4 text-gold-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span>Fullstack Developer & MCA Student</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Building Scalable <span className="bg-gradient-to-r from-gold-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">Web Applications</span> & Intelligent Solutions.
        </h1>

        {/* About Paragraph */}
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl">
          MCA student at Parul University specializing in Full-Stack Development (React, Node.js, Express.js, MongoDB) and AI-powered applications. Passionate about building scalable web solutions, real-time collaboration platforms, and intelligent retrieval systems (RAG). Seeking Software Developer opportunities to contribute strong problem-solving and fullstack engineering skills.
        </p>

        {/* Quick Highlights / Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <a
            href="https://leetcode.com/u/KaranGehlot/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-dark-900/60 border border-gray-800 text-center hover:border-gold-500/60 transition-all group cursor-pointer"
          >
            <div className="flex items-center justify-center text-gold-400 mb-1 group-hover:scale-110 transition-transform">
              <Code2 className="w-5 h-5 text-gold-400" />
            </div>
            <div className="text-xl font-bold text-white group-hover:text-gold-400">180+</div>
            <div className="text-[11px] text-gray-400 font-medium">LeetCode (@KaranGehlot)</div>
          </a>

          <div className="p-4 rounded-2xl bg-dark-900/60 border border-gray-800 text-center hover:border-gold-500/40 transition-colors">
            <div className="flex items-center justify-center text-gold-400 mb-1">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div className="text-xl font-bold text-white">4</div>
            <div className="text-[11px] text-gray-400 font-medium">Fullstack MERN Apps</div>
          </div>

          <div className="p-4 rounded-2xl bg-dark-900/60 border border-gray-800 text-center hover:border-gold-500/40 transition-colors">
            <div className="flex items-center justify-center text-gold-400 mb-1">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="text-xl font-bold text-white">RAG / AI</div>
            <div className="text-[11px] text-gray-400 font-medium">OpenAI & LangChain</div>
          </div>

          <div className="p-4 rounded-2xl bg-dark-900/60 border border-gray-800 text-center hover:border-gold-500/40 transition-colors">
            <div className="flex items-center justify-center text-gold-400 mb-1">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-xl font-bold text-white">MCA</div>
            <div className="text-[11px] text-gray-400 font-medium">Parul University (Sem III)</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-dark-900 font-bold text-sm flex items-center gap-2 shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 transition-all duration-300 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-dark-900" />
            <span>View Resume (PDF)</span>
          </a>

          <a
            href="#portfolio"
            className="px-6 py-3 rounded-xl bg-dark-800 hover:bg-dark-700 text-white font-semibold text-sm border border-gray-700 hover:border-gold-500/50 transition-all duration-300 flex items-center gap-2"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-dark-800 hover:bg-dark-700 text-white font-semibold text-sm border border-gray-700 hover:border-gold-500/50 transition-all duration-300 flex items-center gap-2"
          >
            <Send className="w-4 h-4 text-gold-400" />
            <span>Get In Touch</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
