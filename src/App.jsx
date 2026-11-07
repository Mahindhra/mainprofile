import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Journey from './sections/Journey';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Internships from './sections/Internships';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements';
import Interests from './sections/Interests';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF8EC] text-[#13233A] selection:bg-[#FFD23F] selection:text-[#13233A] relative">
      {/* Floating Glassmorphism Navbar */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Layout */}
      <main>
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Internships />
        <Education />
        <Certifications />
        <Achievements />
        <Interests />
        <Contact onOpenResume={() => setResumeModalOpen(true)} />
      </main>

      {/* Footer & Floating Controls */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />
      <ScrollToTop />

      {/* Fullscreen Official Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
