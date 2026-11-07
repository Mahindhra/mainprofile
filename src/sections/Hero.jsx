import React from 'react';
import { Compass, Download, Mail, ArrowDown, MapPin, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import LandscapeHeroArtwork from '../components/LandscapeHeroArtwork';

export default function Hero({ onOpenResume }) {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-20 md:pt-24 overflow-hidden">
      {/* Upper Content Hero Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 md:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Storyteller Intro & Primary Pitch */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            {/* Availability / Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-[#2F7FD8]/25 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4F9E4A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4F9E4A]"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-[#13233A]">
                {personalInfo.hero.badge}
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-xs text-[#13233A]/70 flex items-center gap-1 font-medium">
                <MapPin className="w-3 h-3 text-[#FF6B4A]" /> Visakhapatnam
              </span>
            </div>

            {/* Greeting & Main Name */}
            <div className="space-y-2">
              <p className="text-lg md:text-xl font-handwriting text-[#2F7FD8] font-bold">
                {personalInfo.hero.greeting}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-[#13233A] leading-[1.1]">
                An aspiring developer building tomorrow,{' '}
                <span className="relative inline-block text-[#2F7FD8]">
                  one line of code
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FFD23F] -z-10" viewBox="0 0 100 12" preserveAspectRatio="none" fill="currentColor">
                    <path d="M0,8 Q50,0 100,8 L100,12 Q50,4 0,12 Z" />
                  </svg>
                </span>{' '}
                at a time.
              </h1>
            </div>

            {/* Subtitle & Core Learning Pillars */}
            <p className="text-base sm:text-lg text-[#13233A]/80 font-normal max-w-2xl leading-relaxed">
              {personalInfo.hero.supportingText}
            </p>

            {/* Tech Badges Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {personalInfo.hero.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold bg-white/90 text-[#13233A] rounded-md border border-[#13233A]/10 shadow-2xs hover:border-[#2F7FD8] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-3">
              <button
                onClick={() => handleScrollTo('journey')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white bg-[#13233A] hover:bg-[#2F7FD8] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#FFD23F]" />
                Explore My Journey
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm text-[#13233A] bg-[#FFD23F] hover:bg-[#ffca28] border border-[#13233A]/10 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#13233A]" />
                View My Resume
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm text-[#13233A] bg-white/90 hover:bg-white border border-[#13233A]/15 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#FF6B4A]" />
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Column: Illustrated Avatar & Studio Portrait Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Decorative painted background halo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#FFD23F] via-[#FF6B4A] to-[#2F7FD8] rounded-3xl opacity-35 blur-xl group-hover:opacity-55 transition-opacity" />

              {/* Portrait Frame Card */}
              <div className="relative bg-white/95 p-3.5 rounded-3xl border border-white shadow-2xl backdrop-blur-md max-w-[320px] sm:max-w-[340px]">
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-[#13233A]">
                  <img
                    src={personalInfo.avatar}
                    alt="Doddi Mahindhra"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle painted color overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13233A]/60 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs bg-[#13233A]/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                    <span className="font-semibold">{personalInfo.fullName}</span>
                    <span className="text-[#FFD23F] text-[10px] font-mono">B.Sc. MECs • MCA</span>
                  </div>
                </div>

                {/* Hand-drawn caption note */}
                <div className="mt-3 px-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#13233A]/80 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFD23F]" />
                    <span>Visakhapatnam, AP</span>
                  </div>
                  <span className="text-xs font-handwriting text-[#FF6B4A] font-bold text-sm">
                    Aspiring Developer
                  </span>
                </div>
              </div>

              {/* Floating draggable-style sticker badge */}
              <div className="absolute -bottom-4 -left-6 bg-[#FFD23F] text-[#13233A] px-3.5 py-1.5 rounded-xl font-handwriting text-base font-bold shadow-lg border border-black/10 -rotate-6 hidden sm:block animate-float-gentle">
                Ready to build! 🚀
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Centerpiece: Illustrated Landscape with Interactive Pins */}
      <div className="relative z-10 w-full mt-8 md:mt-4">
        <LandscapeHeroArtwork onPinClick={handleScrollTo} />
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-[#13233A]/60 hover:text-[#13233A] cursor-pointer transition-colors"
        onClick={() => handleScrollTo('story')}
      >
        <span className="text-[11px] font-semibold uppercase tracking-widest font-heading">
          Scroll to explore
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#2F7FD8]" />
      </div>
    </section>
  );
}
