import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Github, ExternalLink, Sparkles, Filter, Code2, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import ProjectModal from './ProjectModal';

const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'fullstack', label: 'Fullstack Web' },
    { id: 'hackathon', label: 'Hackathons' },
    { id: 'ecommerce', label: 'E-Commerce' },
  ];

  // Filter projects by category & search query
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory =
      selectedCategory === 'all' || project.category === selectedCategory || (selectedCategory === 'fullstack' && ['ai', 'ecommerce', 'fullstack'].includes(project.category));
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="portfolio" className="relative py-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-400 mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Featured GitHub Repositories</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Portfolio Showcase
          </h2>
          <div className="w-16 h-1 bg-gold-500 rounded-full mt-2" />
        </div>

        {/* Real-time Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects or tech..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-800 border border-gray-700/80 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 ${
              selectedCategory === cat.id
                ? 'bg-gold-500 text-dark-900 shadow-md shadow-gold-500/30'
                : 'bg-dark-800 text-gray-400 border border-gray-800 hover:text-white hover:border-gray-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              {/* Thumbnail Container */}
              <div className="relative h-48 w-full overflow-hidden bg-dark-900">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80" />

                {/* Badge Overlay */}
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-dark-900/90 border border-gold-500/40 text-gold-400 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                  {project.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-dark-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500/50 transition-all shrink-0"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Tech Stack Pills & Modal Action Button */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-gold-500/10 border border-gold-500/20 text-gold-400 text-[10px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="w-full py-2.5 px-4 rounded-xl bg-dark-800 hover:bg-gold-500 text-gold-400 hover:text-dark-900 border border-gold-500/30 hover:border-gold-500 font-bold text-xs flex items-center justify-center gap-2 transition-all duration-300 group/btn"
                  >
                    <span>Detailed Explanation</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="col-span-full py-12 text-center text-gray-400 glass-card rounded-3xl">
            <p className="text-sm">No projects matching "{searchQuery}" in this category.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-3 px-4 py-2 rounded-xl bg-gold-500 text-dark-900 font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Modal Popup Component */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectSection;
