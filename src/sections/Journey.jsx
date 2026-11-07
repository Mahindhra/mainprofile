import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { journeyStops } from '../data/portfolioData';
import {
  GraduationCap,
  BookOpen,
  Code2,
  Cloud,
  Cpu,
  Trophy,
  Sparkles,
  ChevronRight,
  CheckCircle,
  Calendar,
  MapPin
} from 'lucide-react';

const iconMap = {
  GraduationCap,
  BookOpen,
  Code2,
  Cloud,
  Cpu,
  Trophy,
  Sparkles
};

export default function Journey() {
  const [selectedStopId, setSelectedStopId] = useState(journeyStops[0].id);

  const activeStop = journeyStops.find(s => s.id === selectedStopId) || journeyStops[0];
  const ActiveIcon = iconMap[activeStop.icon] || Code2;

  return (
    <section id="journey" className="py-20 md:py-28 bg-[#FFF8EC] relative overflow-hidden">
      {/* Background painted landscape texture */}
      <div className="absolute inset-0 painted-texture opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Interactive Roadmap"
          title="My Learning & Development Journey"
          subtitle="Explore the sequential milestones, academic foundations, technical discoveries, and practical challenges."
        />

        {/* Milestone Route Selector (Horizontal on desktop / scrollable on mobile) */}
        <div className="mt-8 mb-10 overflow-x-auto pb-4 no-scrollbar">
          <div className="flex items-center min-w-[780px] justify-between relative px-6">
            
            {/* Illustrated Connecting Trail Line */}
            <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-2 bg-[#13233A]/10 rounded-full z-0">
              <div
                className="h-full bg-gradient-to-r from-[#2F7FD8] via-[#FFD23F] to-[#FF6B4A] rounded-full transition-all duration-500"
                style={{
                  width: `${(journeyStops.findIndex(s => s.id === selectedStopId) / (journeyStops.length - 1)) * 100}%`
                }}
              />
            </div>

            {/* Interactive Pins along the Trail */}
            {journeyStops.map((stop, index) => {
              const isSelected = stop.id === selectedStopId;
              const isPassed = journeyStops.findIndex(s => s.id === selectedStopId) >= index;
              const IconComponent = iconMap[stop.icon] || Code2;

              return (
                <button
                  key={stop.id}
                  onClick={() => setSelectedStopId(stop.id)}
                  className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-hidden"
                >
                  {/* Pin Node */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-3 shadow-md ${
                      isSelected
                        ? 'scale-125 ring-4 ring-offset-2 ring-[#2F7FD8] text-white'
                        : isPassed
                        ? 'text-white hover:scale-110'
                        : 'bg-white text-[#13233A]/60 border-[#13233A]/20 hover:scale-105'
                    }`}
                    style={{
                      backgroundColor: isSelected || isPassed ? stop.accent : '#FFFFFF',
                      borderColor: isSelected ? '#13233A' : stop.accent
                    }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Stage Number & Label */}
                  <div className="mt-3 text-center">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/80 text-[#13233A] border border-black/5 shadow-2xs">
                      Step {index + 1}
                    </span>
                    <span
                      className={`block text-xs font-bold mt-1 transition-colors ${
                        isSelected ? 'text-[#13233A]' : 'text-[#13233A]/70 group-hover:text-[#13233A]'
                      }`}
                    >
                      {stop.title.split(' ')[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Chapter Detail Card */}
        <div className="max-w-4xl mx-auto">
          <div
            className="bg-white rounded-3xl p-6 sm:p-10 border-2 shadow-2xl relative overflow-hidden transition-all duration-300"
            style={{ borderColor: activeStop.accent }}
          >
            {/* Top decorative accent bar */}
            <div
              className="absolute top-0 inset-x-0 h-3"
              style={{ backgroundColor: activeStop.accent }}
            />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-black/5">
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0"
                  style={{ backgroundColor: activeStop.accent }}
                >
                  <ActiveIcon className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2F7FD8]">
                      {activeStop.category}
                    </span>
                    {activeStop.score && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-[#FFD23F] text-[#13233A]">
                        {activeStop.score}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#13233A] font-heading mt-0.5">
                    {activeStop.title}
                  </h3>
                  {activeStop.qualification && (
                    <p className="text-sm font-semibold text-[#FF6B4A]">
                      {activeStop.qualification}
                    </p>
                  )}
                </div>
              </div>

              {/* Date & Location Badges */}
              <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-xs text-[#13233A]/70">
                <div className="flex items-center gap-1.5 font-medium bg-[#FFF8EC] px-3 py-1.5 rounded-lg border border-black/5">
                  <Calendar className="w-3.5 h-3.5 text-[#2F7FD8]" />
                  <span>{activeStop.date}</span>
                </div>
                {(activeStop.location || activeStop.organization) && (
                  <div className="flex items-center gap-1.5 font-medium bg-[#FFF8EC] px-3 py-1.5 rounded-lg border border-black/5">
                    <MapPin className="w-3.5 h-3.5 text-[#FF6B4A]" />
                    <span>{activeStop.location || activeStop.organization}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Description Narrative */}
            <div className="py-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#13233A]/50 mb-2">
                Chapter Story & Context
              </h4>
              <p className="text-base sm:text-lg text-[#13233A]/85 leading-relaxed font-body">
                {activeStop.description}
              </p>
            </div>

            {/* Skills & Takeaways learned in this stop */}
            <div className="pt-4 border-t border-black/5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#13233A]/50 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD23F]" />
                Key Knowledge & Skills Gained
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeStop.skillsLearned.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#FFF8EC] text-[#13233A] border border-[#13233A]/10 shadow-2xs hover:bg-[#2F7FD8] hover:text-white transition-colors"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#4F9E4A]" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation buttons to step through stops */}
            <div className="mt-8 pt-4 flex items-center justify-between">
              <button
                disabled={journeyStops.findIndex(s => s.id === selectedStopId) === 0}
                onClick={() => {
                  const idx = journeyStops.findIndex(s => s.id === selectedStopId);
                  if (idx > 0) setSelectedStopId(journeyStops[idx - 1].id);
                }}
                className="text-xs font-bold text-[#13233A] hover:text-[#2F7FD8] disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1 cursor-pointer"
              >
                ← Previous Milestone
              </button>

              <span className="text-xs text-[#13233A]/50 font-mono">
                {journeyStops.findIndex(s => s.id === selectedStopId) + 1} of {journeyStops.length}
              </span>

              <button
                disabled={journeyStops.findIndex(s => s.id === selectedStopId) === journeyStops.length - 1}
                onClick={() => {
                  const idx = journeyStops.findIndex(s => s.id === selectedStopId);
                  if (idx < journeyStops.length - 1) setSelectedStopId(journeyStops[idx + 1].id);
                }}
                className="text-xs font-bold text-[#13233A] hover:text-[#2F7FD8] disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1 cursor-pointer"
              >
                Next Milestone <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
