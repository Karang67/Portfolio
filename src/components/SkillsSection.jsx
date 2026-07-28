import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Wrench, CheckCircle, Terminal, Layers, ShieldCheck, Server } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages & Core",
      icon: Terminal,
      skills: ["Java", "JavaScript (ES6+)", "Python", "C", "Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)"]
    },
    {
      title: "Frontend Development",
      icon: Code2,
      skills: ["HTML5", "CSS3", "React.js", "React 19", "TypeScript", "Tailwind CSS", "Bootstrap", "Responsive Web Design"]
    },
    {
      title: "Backend & Real-Time APIs",
      icon: Server,
      skills: ["Node.js", "Express.js", "REST API Development", "Socket.IO", "JWT Authentication", "bcryptjs Security"]
    },
    {
      title: "Databases & State Management",
      icon: Database,
      skills: ["MongoDB", "MongoDB Atlas", "MySQL", "SQLite", "Redux Toolkit", "React Redux"]
    },
    {
      title: "Libraries & Developer Tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "Vite", "VS Code", "Postman", "Monaco Editor", "TinyMCE", "Fabric.js", "Chart.js", "Leaflet.js", "Appwrite", "LangChain (RAG)", "OpenAI API"]
    }
  ];

  return (
    <section id="skills" className="py-8">
      <div className="glass-card rounded-3xl p-6 sm:p-10 space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-400 mb-2">
            <Cpu className="w-4 h-4" />
            <span>Technical Stack</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Technical Skills & Expertise
          </h2>
          <div className="w-16 h-1 bg-gold-500 rounded-full mt-2" />
        </div>

        {/* Category Skill Groups */}
        <div className="space-y-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="p-5 rounded-2xl bg-dark-900/70 border border-gray-800 space-y-3">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Icon className="w-4 h-4 text-gold-400" />
                  <span>{cat.title}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl bg-dark-800 border border-gray-700/80 text-gray-200 text-xs font-medium hover:border-gold-500/50 hover:text-gold-400 transition-all flex items-center gap-1.5"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-gold-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
