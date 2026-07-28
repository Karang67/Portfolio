import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Parul University, Vadodara, Gujarat",
      period: "2025 – Present",
      details: "Specializing in Full-Stack Development (React, Node.js, Express.js, MongoDB) and AI-powered applications. Current Semester: III.",
      status: "Semester III (In Progress)"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Jai Narain Vyas University, Jodhpur, Rajasthan",
      period: "2022 – 2025",
      details: "Studied core Computer Applications, Object-Oriented Programming, Software Engineering, Data Structures, and Database Management. Scored 71% aggregate.",
      status: "Completed (71%)"
    }
  ];

  return (
    <section id="education" className="py-8">
      <div className="glass-card rounded-3xl p-6 sm:p-10 space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-400 mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Education Journey
          </h2>
          <div className="w-16 h-1 bg-gold-500 rounded-full mt-2" />
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-gold-500/30 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-8">
          {educationData.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-dark-900 border-2 border-gold-500 group-hover:bg-gold-500 shadow-md shadow-gold-500/50 transition-all duration-300" />

              <div className="p-6 rounded-2xl bg-dark-900/80 border border-gray-800/80 group-hover:border-gold-500/40 transition-all space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider bg-dark-800 px-2.5 py-1 rounded-md">
                    {item.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors">
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-1 font-medium italic">
                    <MapPin className="w-3.5 h-3.5 text-gold-500" />
                    <span>{item.institution}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-1">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
