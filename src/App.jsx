import React, { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-900 text-gray-300 relative selection:bg-gold-500 selection:text-dark-900">
      {/* 3D Interactive Particle Background Canvas */}
      <ParticleBackground />

      {/* Glassmorphic Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24 pb-6 relative z-10 lg:h-screen lg:overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-8 items-start lg:h-[calc(100vh-7.5rem)] lg:overflow-hidden">
          {/* Fixed Profile Sidebar (Pinned on Desktop) */}
          <div className="w-full lg:w-[320px] shrink-0 lg:h-full lg:overflow-y-auto">
            <Sidebar onOpenResume={() => setIsResumeModalOpen(true)} />
          </div>

          {/* Main Content Area (Only Right Column Scrolls on Desktop) */}
          <div className="flex-1 w-full space-y-4 lg:h-full lg:overflow-y-auto pr-1 sm:pr-2">
            <HeroSection onOpenResume={() => setIsResumeModalOpen(true)} />
            <ProjectSection />
            <SkillsSection />
            <EducationSection />
            <AchievementsSection />
            <ContactSection />
          </div>
        </div>
      </main>

      {/* CV / Resume Viewer Modal Overlay */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
