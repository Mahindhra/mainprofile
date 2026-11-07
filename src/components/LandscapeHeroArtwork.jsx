import React from 'react';
import { Sparkles, MapPin, GraduationCap, Code, Briefcase, Rocket } from 'lucide-react';

export default function LandscapeHeroArtwork({ onPinClick }) {
  const destinationPins = [
    {
      id: 'journey',
      title: 'Journey Route',
      icon: Rocket,
      color: '#FF6B4A',
      position: 'left-[12%] bottom-[28%]',
      badge: 'Step by Step'
    },
    {
      id: 'skills',
      title: 'Tech Valley',
      icon: Code,
      color: '#2F7FD8',
      position: 'left-[34%] bottom-[42%]',
      badge: 'Java • Python'
    },
    {
      id: 'internships',
      title: 'Cloud & AI Ridge',
      icon: Briefcase,
      color: '#B7A2FF',
      position: 'right-[32%] bottom-[38%]',
      badge: 'AWS & ML'
    },
    {
      id: 'education',
      title: 'Aditya Campus',
      icon: GraduationCap,
      color: '#4F9E4A',
      position: 'right-[14%] bottom-[26%]',
      badge: 'B.Sc. & MCA'
    }
  ];

  return (
    <div className="relative w-full h-[620px] md:h-[720px] lg:h-[780px] overflow-hidden select-none pointer-events-auto">
      {/* Dynamic Sky Gradient (Sunrise/Sunset Golden Hour Atmosphere) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#9FD3FF]/70 via-[#FFF8EC] to-[#FFF8EC] pointer-events-none" />

      {/* Atmospheric Sun with layered glowing auras */}
      <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full pointer-events-none flex items-center justify-center">
        {/* Outer solar aura */}
        <div className="absolute inset-0 rounded-full bg-[#FFD23F]/20 blur-3xl animate-pulse-glow" />
        {/* Mid solar corona */}
        <div className="absolute w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-[#FFD23F]/40 blur-xl" />
        {/* Core sun disc */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-[#FFD23F] via-[#FFD23F] to-[#FFF8EC] shadow-[0_0_50px_rgba(255,210,63,0.8)]" />
      </div>

      {/* Looping Flying Birds (Subtle SVG Silhouette) */}
      <div className="absolute top-[18%] left-0 w-full pointer-events-none overflow-hidden h-24">
        <div className="animate-bird opacity-75">
          <svg className="w-16 h-8 text-[#13233A]/60" viewBox="0 0 60 30" fill="currentColor">
            <path d="M0 15 Q 15 5 25 15 Q 35 25 45 12 Q 55 5 60 15 Q 45 10 32 18 Q 18 25 0 15 Z" />
            <path d="M22 6 Q 30 1 38 6 Q 44 11 50 4 Q 40 8 32 11 Q 25 14 22 6 Z" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* Background Soft Cloud Layer (Upper Sky) */}
      <div className="absolute top-[6%] w-[130%] -left-[15%] pointer-events-none animate-cloud-slow opacity-60">
        <svg viewBox="0 0 1200 200" fill="none" className="w-full h-auto">
          <ellipse cx="200" cy="80" rx="140" ry="45" fill="white" />
          <ellipse cx="280" cy="65" rx="100" ry="50" fill="white" />
          <ellipse cx="140" cy="85" rx="80" ry="35" fill="white" />

          <ellipse cx="650" cy="90" rx="180" ry="55" fill="white" />
          <ellipse cx="760" cy="70" rx="120" ry="50" fill="white" />
          <ellipse cx="560" cy="95" rx="110" ry="40" fill="white" />

          <ellipse cx="1050" cy="75" rx="130" ry="45" fill="white" />
          <ellipse cx="1140" cy="65" rx="90" ry="40" fill="white" />
        </svg>
      </div>

      {/* Distant Mountain Ridges (Layer 1 - Sky Blue Silhouettes) */}
      <div className="absolute bottom-[240px] md:bottom-[280px] inset-x-0 pointer-events-none">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-44 md:h-64 text-[#2F7FD8]/25" fill="currentColor">
          <path d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,202.7C672,203,768,149,864,133.3C960,117,1056,139,1152,160C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>

      {/* Midground Mountain Ridges (Layer 2 - Deep Slate & Lavender) */}
      <div className="absolute bottom-[170px] md:bottom-[200px] inset-x-0 pointer-events-none">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-48 md:h-72 text-[#13233A]/15" fill="currentColor">
          <path d="M0,96L60,122.7C120,149,240,203,360,208C480,213,600,171,720,165.3C840,160,960,192,1080,181.3C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
      </div>

      {/* Floating Foreground Clouds (Medium speed) */}
      <div className="absolute top-[24%] w-[120%] -left-[10%] pointer-events-none animate-cloud-medium opacity-50">
        <svg viewBox="0 0 1200 160" fill="none" className="w-full h-auto">
          <ellipse cx="420" cy="70" rx="140" ry="40" fill="white" />
          <ellipse cx="500" cy="55" rx="90" ry="45" fill="white" />
          <ellipse cx="920" cy="80" rx="160" ry="45" fill="white" />
        </svg>
      </div>

      {/* Layer 3: Rolling Green Foothills (Grass Green with Warm Highlights) */}
      <div className="absolute bottom-[60px] md:bottom-[80px] inset-x-0 pointer-events-none">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-56 md:h-80 text-[#4F9E4A]/80" fill="currentColor">
          <path d="M0,160L80,176C160,192,320,224,480,208C640,192,800,128,960,128C1120,128,1280,192,1360,224L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
        </svg>
      </div>

      {/* Layer 4: Deep Painted Valley Foreground with Foliage Accents */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none">
        <svg viewBox="0 0 1440 280" preserveAspectRatio="none" className="w-full h-44 md:h-64 text-[#4F9E4A]" fill="currentColor">
          <path d="M0,192L60,181.3C120,171,240,149,360,165.3C480,181,600,235,720,240C840,245,960,203,1080,170.7C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>

        {/* Trees & Nature Silhouettes */}
        <div className="absolute bottom-6 left-[8%] hidden md:block">
          <svg className="w-16 h-20 text-[#13233A]/40" viewBox="0 0 50 70" fill="currentColor">
            <path d="M25 0 L38 22 L32 22 L44 42 L36 42 L48 62 L28 62 L28 70 L22 70 L22 62 L2 62 L14 42 L6 42 L18 22 L12 22 Z" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-[10%] hidden md:block">
          <svg className="w-12 h-16 text-[#13233A]/30" viewBox="0 0 50 70" fill="currentColor">
            <path d="M25 5 L36 24 L30 24 L42 44 L34 44 L45 64 L27 64 L27 70 L23 70 L23 64 L5 64 L16 44 L8 44 L20 24 L14 24 Z" />
          </svg>
        </div>
      </div>

      {/* Floating Interactive Destination Pins placed on the Landscape */}
      <div className="absolute inset-0 pointer-events-none">
        {destinationPins.map((pin) => {
          const Icon = pin.icon;
          return (
            <div
              key={pin.id}
              className={`absolute ${pin.position} pointer-events-auto group cursor-pointer transition-all duration-300 hover:scale-110`}
              onClick={() => onPinClick(pin.id)}
            >
              <div className="relative flex flex-col items-center">
                {/* Floating tooltip label */}
                <div
                  className="mb-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold text-white shadow-lg whitespace-nowrap opacity-90 group-hover:opacity-100 transition-opacity flex items-center gap-1.5"
                  style={{ backgroundColor: pin.color }}
                >
                  <Icon className="w-3 h-3" />
                  <span>{pin.title}</span>
                </div>

                {/* Pin marker icon with ripple glow */}
                <div className="relative flex items-center justify-center">
                  <div
                    className="absolute w-7 h-7 rounded-full animate-ping opacity-35"
                    style={{ backgroundColor: pin.color }}
                  />
                  <div
                    className="w-7 h-7 rounded-full text-white flex items-center justify-center shadow-md border-2 border-white"
                    style={{ backgroundColor: pin.color }}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Subtitle tag */}
                <span className="mt-1 text-[9px] font-semibold bg-white/90 text-[#13233A] px-1.5 py-0.5 rounded-sm shadow-xs backdrop-blur-xs">
                  {pin.badge}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Fade Gradient Transitioning into Content */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#FFF8EC] to-transparent pointer-events-none" />
    </div>
  );
}
