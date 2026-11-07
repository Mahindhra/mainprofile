import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { educationList } from '../data/portfolioData';
import { GraduationCap, Award, MapPin, Calendar, Sparkles } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-[#FFF8EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Academic Qualifications"
          title="Education Background"
          subtitle="Formal academic degrees, foundational schooling, and higher computer science education."
        />

        <div className="max-w-4xl mx-auto mt-10 space-y-6">
          {educationList.map((item, index) => (
            <div
              key={item.degree}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 relative ${
                item.current
                  ? 'bg-gradient-to-r from-white via-white to-[#2F7FD8]/5 border-[#2F7FD8] shadow-xl'
                  : 'bg-white border-black/5 shadow-sm hover:shadow-md'
              }`}
            >
              {item.current && (
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#2F7FD8] text-white shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFD23F]" />
                    Currently Pursuing
                  </span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#13233A] text-white flex items-center justify-center shrink-0 shadow-md">
                  <GraduationCap className="w-6 h-6 text-[#FFD23F]" />
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#13233A]">
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-1 text-sm font-semibold text-[#2F7FD8] mt-0.5">
                    <span>{item.institution}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-[#13233A]/70 mb-3">
                <span className="flex items-center gap-1 bg-[#FFF8EC] px-3 py-1 rounded-lg border border-black/5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#FF6B4A]" /> {item.location}
                </span>

                {item.score && (
                  <span className="font-bold px-3 py-1 rounded-lg bg-[#FFD23F] text-[#13233A]">
                    {item.score}
                  </span>
                )}

                <span className="font-medium text-[#13233A]/60">
                  Status: <strong className="text-[#13233A]">{item.status}</strong>
                </span>
              </div>

              <p className="text-sm text-[#13233A]/80 leading-relaxed">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
