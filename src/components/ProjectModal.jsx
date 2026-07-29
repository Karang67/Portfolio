import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, CheckCircle2, Cpu, ExternalLink, Code2, Sparkles, Layers } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        {/* Modal Backdrop Click Handler */}
        <div
          className="fixed inset-0"
          onClick={onClose}
        />

        {/* Modal Content Drawer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-dark-800 border border-gold-500/40 rounded-3xl shadow-2xl shadow-black/80 overflow-hidden z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-dark-900/80 border border-gray-700 text-gray-400 hover:text-gold-400 hover:border-gold-500 transition-all"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-dark-900">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/40 to-transparent" />

            {/* Badge overlay */}
            <div className="absolute bottom-4 left-6 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-gold-500 text-dark-900 text-xs font-extrabold uppercase tracking-wider shadow-lg">
                {project.badge}
              </span>
              <span className="px-3 py-1 rounded-full bg-dark-900/90 border border-gold-500/30 text-gold-400 text-xs font-semibold backdrop-blur-md">
                ⭐ GitHub Star
              </span>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Title & Tagline */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm text-gold-400 font-medium mt-1">
                {project.tagline}
              </p>
            </div>

            {/* Project Overview */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider">
                <Layers className="w-4 h-4 text-gold-400" />
                <span>Project Architecture & Overview</span>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed bg-dark-900/60 p-4 rounded-2xl border border-gray-800/80">
                {project.fullOverview}
              </p>
            </div>

            {/* Features & Capabilities */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>Key Technical Features</span>
              </div>
              <div className="space-y-2.5">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <Cpu className="w-4 h-4 text-gold-400" />
                <span>Technologies Used</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-gray-800 flex flex-wrap gap-3 items-center justify-between">
              <div className="flex flex-wrap gap-3 items-center">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-dark-900 font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 text-dark-900" />
                    <span>Launch Live App</span>
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-dark-900 hover:bg-dark-700 text-gray-200 hover:text-gold-400 font-semibold text-xs sm:text-sm border border-gray-700 flex items-center gap-2 transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>

              <button
                onClick={onClose}
                className="px-5 py-3 rounded-xl bg-dark-900 hover:bg-dark-700 text-gray-400 hover:text-white font-medium text-xs border border-gray-700 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
