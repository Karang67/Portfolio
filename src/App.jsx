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

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-dark-900 text-gray-300 relative selection:bg-gold-500 selection:text-dark-900">
      {/* 3D Interactive Particle Background Canvas */}
      <ParticleBackground />

      {/* Glassmorphic Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28 pb-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sticky Profile Sidebar */}
          <div className="w-full lg:w-[320px] lg:sticky lg:top-28">
            <Sidebar />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 w-full space-y-4">
            <HeroSection />
            <ProjectSection />
            <SkillsSection />
            <EducationSection />
            <AchievementsSection />
            <ContactSection />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
