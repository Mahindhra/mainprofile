import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Heart, Sparkles, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer({ onOpenResume }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#13233A] text-white pt-16 pb-12 overflow-hidden">
      {/* Decorative painted horizon transition at top of footer */}
      <div className="absolute top-0 inset-x-0 -translate-y-[99%] pointer-events-none">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-16 sm:h-24 text-[#13233A]" fill="currentColor">
          <path d="M0,32L60,42.7C120,53,240,75,360,69.3C480,64,600,32,720,26.7C840,21,960,43,1080,48C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Identity & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FFD23F] text-[#13233A] flex items-center justify-center font-extrabold text-base shadow-md">
                DM
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl text-white">
                  {personalInfo.fullName}
                </h3>
                <p className="text-xs text-[#9FD3FF] font-medium">
                  {personalInfo.title}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Turning ideas into meaningful digital experiences through Java, Python, web technologies, and continuous practical learning.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#FFD23F]">
              <MapPin className="w-4 h-4 text-[#FF6B4A]" />
              <span>Visakhapatnam, Andhra Pradesh, India</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFD23F] font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-300 font-medium">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#story" className="hover:text-white transition-colors">My Story</a></li>
              <li><a href="#journey" className="hover:text-white transition-colors">Interactive Journey</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Technical Skills</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Practical Projects</a></li>
              <li><a href="#education" className="hover:text-white transition-colors">Education & Certs</a></li>
              <li><a href="#interests" className="hover:text-white transition-colors">Creative Desk</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Me</a></li>
            </ul>
          </div>

          {/* Action Links & Resume */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFD23F] font-mono">
              Connect & Verify
            </h4>
            <div className="space-y-2.5">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#2F7FD8]" /> {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#4F9E4A]" /> {personalInfo.phone}
              </a>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-[#FFD23F]" /> github.com/Mahindhra
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-[#13233A] bg-[#FFD23F] hover:bg-[#ffca28] transition-colors cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4" /> View & Download Resume
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Tech Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <p>© {currentYear} DODDI MAHINDHRA. Built with React & modern web standards.</p>
          <div className="flex items-center gap-1.5 text-xs text-gray-300">
            <span>Crafted with passion, care, & clean code</span>
            <Sparkles className="w-3.5 h-3.5 text-[#FFD23F]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
