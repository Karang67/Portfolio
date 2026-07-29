import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, Printer, Mail, Phone, MapPin, Github, Linkedin, Code2, Award, BookOpen, GraduationCap, Briefcase } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
        {/* Backdrop click handler */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-dark-800 border border-gold-500/40 rounded-3xl shadow-2xl overflow-hidden z-10 my-6 max-h-[90vh] flex flex-col"
        >
          {/* Header Action Bar */}
          <div className="p-4 sm:p-6 bg-dark-900 border-b border-gray-800 flex items-center justify-between gap-4 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <h2 className="text-base sm:text-lg font-extrabold text-white">
                Curriculum Vitae — Karan Kumar (Karan Gehlot)
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-3.5 py-2 rounded-xl bg-dark-800 border border-gray-700 hover:border-gold-500 text-gray-300 hover:text-gold-400 text-xs font-semibold flex items-center gap-1.5 transition-all"
                title="Print / Save as PDF"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-dark-800 border border-gray-700 text-gray-400 hover:text-gold-400 hover:border-gold-500 transition-all"
                title="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Body Content */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-dark-900/90 text-gray-200 text-xs sm:text-sm print:bg-white print:text-black print:p-0">
            {/* Resume Title Header */}
            <div className="text-center space-y-3 border-b border-gray-800 pb-6 print:border-gray-300">
              <h1 className="text-3xl font-black tracking-wider text-white uppercase print:text-black">
                KARAN KUMAR
              </h1>
              <p className="text-gold-400 text-xs font-bold tracking-widest uppercase print:text-gray-700">
                Full-Stack Web Developer & AI Solutions Specialist
              </p>

              {/* Contact Icons Ribbon */}
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-400 pt-2 print:text-gray-700">
                <a href="tel:8949012308" className="hover:text-gold-400 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-gold-500" />
                  <span>+91-8949012308</span>
                </a>
                <span>•</span>
                <a href="mailto:karangehlot5686@gmail.com" className="hover:text-gold-400 flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-gold-500" />
                  <span>karangehlot5686@gmail.com</span>
                </a>
                <span>•</span>
                <a href="https://www.linkedin.com/in/karan-gehlot-0025922b2/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 flex items-center gap-1">
                  <Linkedin className="w-3.5 h-3.5 text-gold-500" />
                  <span>LinkedIn</span>
                </a>
                <span>•</span>
                <a href="https://github.com/Karang67" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 flex items-center gap-1">
                  <Github className="w-3.5 h-3.5 text-gold-500" />
                  <span>GitHub</span>
                </a>
                <span>•</span>
                <a href="https://leetcode.com/u/KaranGehlot/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 flex items-center gap-1 font-bold text-gold-400">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>LeetCode (@KaranGehlot)</span>
                </a>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gold-500" />
                  <span>Vadodara, Gujarat, India</span>
                </span>
              </div>
            </div>

            {/* Career Objective */}
            <div className="space-y-2">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-gold-400 border-b border-gold-500/30 pb-1 flex items-center gap-2 print:text-black">
                <Briefcase className="w-4 h-4" />
                CAREER OBJECTIVE
              </h2>
              <p className="text-gray-300 leading-relaxed text-xs sm:text-sm print:text-gray-800">
                MCA student specializing in Full-Stack Development with hands-on experience in React, Node.js, Express.js, MongoDB, and AI-powered applications. Passionate about building scalable web solutions and seeking Software Developer opportunities to contribute strong problem-solving and development skills.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-gold-400 border-b border-gold-500/30 pb-1 flex items-center gap-2 print:text-black">
                <GraduationCap className="w-4 h-4" />
                EDUCATION
              </h2>

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="font-bold text-white text-sm print:text-black">Parul University</h3>
                    <span className="text-xs text-gold-400 italic font-medium">Master of Computer Applications (MCA)</span>
                  </div>
                  <div className="text-right text-xs text-gray-400 font-semibold print:text-gray-700">
                    <span>2025 – Present | Vadodara, Gujarat</span>
                    <span className="block text-[11px] text-emerald-400">Current Semester: III</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-2 border-t border-gray-800/60 print:border-gray-200">
                  <div>
                    <h3 className="font-bold text-white text-sm print:text-black">Jai Narain Vyas University</h3>
                    <span className="text-xs text-gold-400 italic font-medium">Bachelor of Computer Applications (BCA)</span>
                  </div>
                  <div className="text-right text-xs text-gray-400 font-semibold print:text-gray-700">
                    <span>2022 – 2025 | Jodhpur, Rajasthan</span>
                    <span className="block text-[11px] text-emerald-400">Aggregate: 71%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-4">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-gold-400 border-b border-gold-500/30 pb-1 flex items-center gap-2 print:text-black">
                <Code2 className="w-4 h-4" />
                FEATURED PROJECTS
              </h2>

              <div className="space-y-4">
                {/* AnonHub */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-sm print:text-black">
                      AnonHub — Real-Time Collaboration Platform
                    </h3>
                    <a href="https://github.com/Karang67/Anonhub" target="_blank" rel="noopener noreferrer" className="text-xs text-gold-400 hover:underline flex items-center gap-1">
                      <Github className="w-3.5 h-3.5" /> Repository
                    </a>
                  </div>
                  <ul className="list-disc list-inside text-xs text-gray-300 space-y-1 print:text-gray-800">
                    <li>Developed a real-time collaboration platform using Node.js, Express.js, MongoDB, and Socket.IO.</li>
                    <li>Implemented AI-assisted collaboration features using OpenAI API and secured rooms with password protection and role-based access control.</li>
                    <li>Implemented live chat, collaborative document editing, whiteboard drawing, and code collaboration.</li>
                    <li>Integrated Monaco Editor, TinyMCE, and Fabric.js for coding, document editing, and whiteboard workspaces.</li>
                  </ul>
                </div>

                {/* CampusGPT */}
                <div className="space-y-1.5 pt-2 border-t border-gray-800/60 print:border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-sm print:text-black">
                      CampusGPT — AI-Powered University Knowledge Assistant
                    </h3>
                    <a href="https://github.com/Karang67/Campusgpt" target="_blank" rel="noopener noreferrer" className="text-xs text-gold-400 hover:underline flex items-center gap-1">
                      <Github className="w-3.5 h-3.5" /> Repository
                    </a>
                  </div>
                  <ul className="list-disc list-inside text-xs text-gray-300 space-y-1 print:text-gray-800">
                    <li>Developed a full-stack AI-powered university assistant using React 19, TypeScript, Node.js, Express.js, MongoDB, and LangChain with Retrieval-Augmented Generation (RAG).</li>
                    <li>Implemented multi-role authentication (Student, Faculty, HOD, Admin, Super Admin), role-based access control (RBAC), secure REST APIs, JWT authentication, and real-time notifications.</li>
                    <li>Built AI-powered features including semantic search, OCR-based document processing, PDF chat, AI Notes Generator, Question Paper Generator, Attendance Advisor, Placement Assistant, and source-cited responses using a vector database.</li>
                  </ul>
                </div>

                {/* TraveLoop */}
                <div className="space-y-1.5 pt-2 border-t border-gray-800/60 print:border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-sm print:text-black">
                      TraveLoop — AI Travel Planning Platform
                    </h3>
                    <a href="https://github.com/Karang67/Travel-Management" target="_blank" rel="noopener noreferrer" className="text-xs text-gold-400 hover:underline flex items-center gap-1">
                      <Github className="w-3.5 h-3.5" /> Repository
                    </a>
                  </div>
                  <ul className="list-disc list-inside text-xs text-gray-300 space-y-1 print:text-gray-800">
                    <li>Developed a full-stack travel planning platform using React 19, TypeScript, Node.js, Express.js, and MongoDB.</li>
                    <li>Built responsive user interfaces with Tailwind CSS and Framer Motion for an interactive user experience.</li>
                    <li>Developed secure REST APIs with JWT authentication, input validation, and file upload support.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-gold-400 border-b border-gold-500/30 pb-1 flex items-center gap-2 print:text-black">
                <BookOpen className="w-4 h-4" />
                TECHNICAL SKILLS
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div><span className="font-bold text-white print:text-black">Programming Languages:</span> <span className="text-gray-300 print:text-gray-800">Java, JavaScript, Python, C</span></div>
                <div><span className="font-bold text-white print:text-black">Core Concepts:</span> <span className="text-gray-300 print:text-gray-800">Data Structures & Algorithms, OOP</span></div>
                <div><span className="font-bold text-white print:text-black">Frontend Technologies:</span> <span className="text-gray-300 print:text-gray-800">HTML5, CSS3, React.js, Tailwind CSS, Bootstrap</span></div>
                <div><span className="font-bold text-white print:text-black">Backend Technologies:</span> <span className="text-gray-300 print:text-gray-800">Node.js, Express.js, REST APIs, Socket.IO</span></div>
                <div><span className="font-bold text-white print:text-black">Databases:</span> <span className="text-gray-300 print:text-gray-800">MongoDB, MongoDB Atlas, MySQL, SQLite</span></div>
                <div><span className="font-bold text-white print:text-black">State Management & Auth:</span> <span className="text-gray-300 print:text-gray-800">Redux Toolkit, JWT, bcryptjs</span></div>
                <div className="sm:col-span-2"><span className="font-bold text-white print:text-black">Libraries & Tools:</span> <span className="text-gray-300 print:text-gray-800">Git, GitHub, VS Code, Postman, Vite, Framer Motion, TinyMCE, Monaco Editor, Fabric.js, LangChain, OpenAI API</span></div>
              </div>
            </div>

            {/* Achievements & Certifications */}
            <div className="space-y-3">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-gold-400 border-b border-gold-500/30 pb-1 flex items-center gap-2 print:text-black">
                <Award className="w-4 h-4" />
                ACHIEVEMENTS & CERTIFICATIONS
              </h2>

              <div className="space-y-2 text-xs text-gray-300 print:text-gray-800">
                <div className="flex items-start gap-2">
                  <span className="text-gold-400 font-bold">•</span>
                  <span><strong>LeetCode Milestone:</strong> Solved 180+ Data Structures & Algorithms problems on LeetCode (<a href="https://leetcode.com/u/KaranGehlot/" target="_blank" rel="noopener noreferrer" className="text-gold-400 underline">@KaranGehlot</a>) with focus on arrays, strings, hashing, and binary search.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gold-400 font-bold">•</span>
                  <span><strong>Full-Stack Applications:</strong> Built 4 full-stack web applications using MERN Stack and modern web technologies.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gold-400 font-bold">•</span>
                  <span><strong>AI Features Integration:</strong> Integrated AI-powered features using OpenAI API and LangChain (RAG) in real-time collaboration platforms.</span>
                </div>
                <div className="flex items-start gap-2 pt-1">
                  <span className="text-gold-400 font-bold">•</span>
                  <span><strong>Certifications:</strong> Java Programming Masterclass, Web Development Bootcamp, Data Structures.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Action Bar */}
          <div className="p-4 sm:p-6 bg-dark-900 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4 shrink-0">
            <a
              href="mailto:karangehlot5686@gmail.com?subject=Job%20Opportunity%20-%20Karan%20Kumar"
              className="px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-dark-900 font-bold text-xs flex items-center gap-2 shadow-lg shadow-gold-500/20"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Candidate directly</span>
            </a>

            <button
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-700 text-white font-bold text-xs border border-gray-700 flex items-center gap-2"
            >
              <Printer className="w-4 h-4 text-gold-400" />
              <span>Download / Save as PDF</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
