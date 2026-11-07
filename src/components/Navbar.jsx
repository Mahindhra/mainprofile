import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Send, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'My Story', href: '#story' },
  { name: 'Journey', href: '#journey' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Interests', href: '#interests' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledRatio = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolledRatio);

      // Detect scrolled state
      if (winScroll > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = winScroll + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-black/5">
        <div
          className="h-full bg-gradient-to-r from-[#2F7FD8] via-[#FFD23F] to-[#FF6B4A] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Navigation Header */}
      <header className="fixed top-3 inset-x-0 z-40 px-4 sm:px-6 max-w-7xl mx-auto pointer-events-none">
        <nav
          className={`pointer-events-auto mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? 'glass-panel shadow-lg shadow-[#13233A]/5 border border-white/60 bg-[#FFF8EC]/85 backdrop-blur-md'
              : 'bg-[#FFF8EC]/60 backdrop-blur-xs border border-transparent'
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo / Personal Monogram */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2F7FD8] rounded-full pr-2"
          >
            <div className="w-9 h-9 rounded-full bg-[#13233A] text-[#FFF8EC] flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-105 group-hover:bg-[#2F7FD8] transition-all">
              DM
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="font-heading font-bold text-sm tracking-tight text-[#13233A] leading-tight">
                {personalInfo.shortName}
              </span>
              <span className="text-[10px] text-[#13233A]/60 font-medium tracking-wide">
                Software Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-[#13233A]/5 px-2 py-1 rounded-full border border-[#13233A]/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-[#FFF8EC] bg-[#13233A] shadow-xs'
                      : 'text-[#13233A]/75 hover:text-[#13233A] hover:bg-black/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#13233A] bg-[#FFD23F] hover:bg-[#FFD23F]/90 border border-[#13233A]/10 shadow-xs hover:shadow-md transition-all active:scale-95"
              title="View & Download Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#FF6B4A] hover:bg-[#ff5733] shadow-xs hover:shadow-md transition-all active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Let's Connect</span>
              <span className="xs:hidden">Contact</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-[#13233A] hover:bg-[#13233A]/5 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto lg:hidden mt-2 p-4 rounded-2xl glass-panel shadow-2xl border border-white/80 bg-[#FFF8EC]/95 backdrop-blur-xl animate-float-gentle">
            <div className="grid grid-cols-2 gap-2 mb-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold text-center transition-all ${
                      isActive
                        ? 'bg-[#13233A] text-[#FFF8EC]'
                        : 'bg-white/60 text-[#13233A] hover:bg-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="pt-2 border-t border-black/5 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold bg-[#FFD23F] text-[#13233A]"
              >
                <Download className="w-4 h-4" />
                Resume
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold bg-[#FF6B4A] text-white"
              >
                <Send className="w-4 h-4" />
                Contact
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
