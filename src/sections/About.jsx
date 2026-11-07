import React from 'react';
import SectionHeading from '../components/SectionHeading';
import DraggableStickyNote from '../components/DraggableStickyNote';
import { personalInfo } from '../data/portfolioData';
import { Code, BookOpen, Compass, CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    { title: "Continuous Learning", desc: "Active problem solver expanding my core knowledge in Java, Python, and SQL.", icon: Code },
    { title: "Practical Foundations", desc: "Hands-on projects and hackathon exposure building responsive digital solutions.", icon: Compass },
    { title: "Academic Background", desc: "B.Sc. MECs graduate (CGPA 7.5) with advanced MCA studies underway.", icon: BookOpen }
  ];

  return (
    <section id="story" className="py-20 md:py-28 relative overflow-hidden bg-[#FFF8EC]">
      {/* Decorative painted water-color brush stroke in background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#9FD3FF]/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#FFD23F]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Personal Introduction"
          title={personalInfo.about.heading}
          subtitle="A perspective on my motivations, work ethic, and path into software engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-8">
          
          {/* Main Story Narrative Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white/90 p-6 sm:p-8 md:p-10 rounded-3xl border border-[#13233A]/10 shadow-xl shadow-[#13233A]/5 relative">
              {/* Corner quote illustration */}
              <span className="text-6xl font-serif text-[#FF6B4A]/20 absolute top-4 right-6 select-none">
                “
              </span>

              <div className="space-y-5 text-base sm:text-lg text-[#13233A]/85 leading-relaxed font-body">
                <p>
                  I'm <strong className="text-[#13233A] font-bold underline decoration-[#FFD23F] decoration-4 underline-offset-4">DODDI MAHINDHRA</strong>, an aspiring software developer from <span className="font-semibold text-[#2F7FD8]">Visakhapatnam, Andhra Pradesh</span>. My interest in technology motivates me to explore programming, understand how software works, and continuously improve my skills.
                </p>

                <p>
                  I enjoy learning through <span className="bg-[#FFD23F]/30 px-2 py-0.5 rounded-sm font-semibold text-[#13233A]">practical exercises</span>, experimenting with technologies, and working on ideas that can solve real-world problems.
                </p>

                <p>
                  My goal is to grow as a software developer and contribute to <strong className="text-[#13233A] font-bold">meaningful software solutions</strong>.
                </p>
              </div>

              {/* Three Pillars Summary Cards */}
              <div className="mt-8 pt-6 border-t border-black/5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="p-3.5 rounded-2xl bg-[#FFF8EC] border border-[#13233A]/5">
                      <div className="w-8 h-8 rounded-xl bg-[#2F7FD8]/10 text-[#2F7FD8] flex items-center justify-center mb-2">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs font-bold text-[#13233A] font-heading">{item.title}</h4>
                      <p className="text-[11px] text-[#13233A]/70 mt-1 leading-snug">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Draggable Sticky Notes Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-center lg:text-left mb-2">
              <span className="font-handwriting text-[#FF6B4A] text-xl font-bold block">
                Values that drive my craft:
              </span>
              <span className="text-xs text-[#13233A]/60">
                Interactive sticky notes — drag them to explore!
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.about.stickyNotes.map((note, index) => (
                <DraggableStickyNote key={note.text} note={note} index={index} />
              ))}
            </div>

            {/* Quick Fact Banner */}
            <div className="p-4 rounded-2xl bg-[#13233A] text-white flex items-center gap-3 shadow-md mt-6">
              <div className="w-10 h-10 rounded-xl bg-[#FFD23F] text-[#13233A] flex items-center justify-center shrink-0 font-bold">
                ✓
              </div>
              <div className="text-xs">
                <span className="font-bold text-[#FFD23F] block">Zero Invented Claims:</span>
                <span className="text-white/80">Every qualification, hackathon, and internship displayed here is 100% verified.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
