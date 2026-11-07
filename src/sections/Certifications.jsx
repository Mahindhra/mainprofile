import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { certifications } from '../data/portfolioData';
import { Award, FileSpreadsheet, Binary, CheckCircle2, ShieldCheck } from 'lucide-react';

const certIcons = {
  FileSpreadsheet,
  Binary,
  Award
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-[#FFF8EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Verified Competencies"
          title="Professional Certifications"
          subtitle="Accredited certifications in office productivity, procedural C programming, and English communication."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
          {certifications.map((cert) => {
            const Icon = certIcons[cert.icon] || Award;

            return (
              <div
                key={cert.title}
                className="bg-white rounded-3xl p-6 border border-black/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFD23F]/20 text-[#13233A] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#2F7FD8]" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#FFF8EC] text-[#13233A] border border-black/5">
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#13233A] leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#FF6B4A] mt-1 mb-3">
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-[#13233A]/75 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-[11px] text-[#4F9E4A] font-semibold">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Certified
                  </span>
                  <span className="text-[#13233A]/50 font-normal">Real Credential</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
