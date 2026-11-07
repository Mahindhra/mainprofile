import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { internships } from '../data/portfolioData';
import { Cloud, Cpu, Building2, Clock, CheckCircle2, Sparkles } from 'lucide-react';

const iconMap = {
  Cloud,
  Cpu
};

export default function Internships() {
  return (
    <section id="internships" className="py-20 md:py-28 bg-[#FFF8EC] relative overflow-hidden">
      {/* Background painted gradient glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#2F7FD8]/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Industry Exposure"
          title="Internship Experiences"
          subtitle="Practical exposure to enterprise cloud architecture and modern machine learning foundations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">
          {internships.map((internship, index) => {
            const IconComponent = iconMap[internship.icon] || Cloud;

            return (
              <div
                key={internship.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-black/5 hover:border-[#2F7FD8] shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Top Colored Accent Stripe */}
                <div
                  className="absolute top-0 inset-x-0 h-2.5"
                  style={{ backgroundColor: internship.accent }}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md"
                      style={{ backgroundColor: internship.accent }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FFF8EC] text-[#13233A] border border-black/5">
                      <Clock className="w-3.5 h-3.5 text-[#2F7FD8]" />
                      {internship.duration}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#13233A]">
                    {internship.role}
                  </h3>

                  <div className="flex items-center gap-2 mt-1 mb-4 text-sm font-semibold text-[#2F7FD8]">
                    <Building2 className="w-4 h-4 text-[#FF6B4A]" />
                    <span>{internship.organization}</span>
                  </div>

                  <p className="text-sm text-[#13233A]/85 leading-relaxed">
                    {internship.description}
                  </p>

                  {/* Key Takeaways */}
                  <div className="mt-6 pt-4 border-t border-black/5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#13233A]/50 mb-2 block flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#FFD23F]" />
                      Practical Exposure:
                    </span>
                    <ul className="space-y-2">
                      {internship.learnings.map((learning, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#13233A]/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#4F9E4A] shrink-0 mt-0.5" />
                          <span>{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-[11px] text-[#13233A]/60 font-mono">
                  <span>Verified Credentials</span>
                  <span className="text-[#4F9E4A] font-bold">✓ Active Learning Record</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
