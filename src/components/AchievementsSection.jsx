import React from 'react';
import { Award, CheckCircle2, ExternalLink, Code2, Sparkles, Terminal, BookOpen } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "180+ DSA Problems Solved",
      subtitle: "LeetCode Competitive Programming",
      desc: "Solved 180+ Data Structures & Algorithms problems on LeetCode focusing on arrays, strings, hashing, and binary search.",
      icon: Terminal
    },
    {
      title: "4 MERN Fullstack Apps Built",
      subtitle: "Enterprise & Collaboration Systems",
      desc: "Built 4 production-grade full-stack web applications using MERN Stack, Socket.IO, Monaco Editor, and modern web frameworks.",
      icon: Code2
    },
    {
      title: "AI Integration Specialist",
      subtitle: "OpenAI & RAG Vector Systems",
      desc: "Integrated AI features (LangChain RAG, PDF chat, AI notes generator, and semantic search) into university assistant & collaboration platforms.",
      icon: Sparkles
    }
  ];

  const certifications = [
    { name: "Java Programming Masterclass", issuer: "Professional Certification" },
    { name: "Web Development Bootcamp", issuer: "Fullstack Web Engineering" },
    { name: "Data Structures & Algorithms", issuer: "Core CS Competency" }
  ];

  return (
    <section id="achievements" className="py-8">
      <div className="glass-card rounded-3xl p-6 sm:p-10 space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-400 mb-2">
            <Award className="w-4 h-4" />
            <span>Honors & Certifications</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Achievements & Certifications
          </h2>
          <div className="w-16 h-1 bg-gold-500 rounded-full mt-2" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-5 rounded-2xl bg-dark-900/80 border border-gray-800 space-y-3 hover:border-gold-500/40 transition-all">
                <div className="w-10 h-10 rounded-xl bg-dark-800 border border-gray-700 text-gold-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">{item.title}</h3>
                  <span className="text-[11px] font-semibold text-gold-400 block">{item.subtitle}</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Certifications Badges */}
        <div className="pt-4 border-t border-gray-800/80">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-gold-400" />
            <span>Verified Certifications</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-dark-900/60 border border-gray-800/80 flex items-center justify-between gap-2 hover:border-gold-500/50 transition-all">
                <div>
                  <h4 className="font-semibold text-white text-xs">{cert.name}</h4>
                  <span className="text-[10px] text-gray-500">{cert.issuer}</span>
                </div>
                <Award className="w-4 h-4 text-gold-400 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
