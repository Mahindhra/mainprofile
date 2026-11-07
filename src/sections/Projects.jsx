import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data/portfolioData';
import { Trophy, Bus, PlusCircle, ArrowUpRight, Sparkles, Smartphone, ShieldCheck } from 'lucide-react';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#FFF8EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Practical Work & Challenges"
          title="Projects & Practical Exposure"
          subtitle="Real-world hackathons, collaborative coding sprints, and academic systems in development."
        />

        {/* Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project) => {
            const isHackathon = project.id === 'android-hackathon';

            return (
              <div
                key={project.id}
                className="group bg-white rounded-3xl border border-[#13233A]/10 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Visual Header / Banner Thumbnail */}
                  <div
                    className="h-44 p-6 flex flex-col justify-between relative overflow-hidden text-white"
                    style={{
                      background: isHackathon
                        ? 'linear-gradient(135deg, #13233A 0%, #2F7FD8 100%)'
                        : 'linear-gradient(135deg, #2F7FD8 0%, #4F9E4A 100%)'
                    }}
                  >
                    {/* Decorative Background Icons */}
                    <div className="absolute -right-4 -bottom-4 opacity-15">
                      {isHackathon ? (
                        <Smartphone className="w-36 h-36" />
                      ) : (
                        <Bus className="w-36 h-36" />
                      )}
                    </div>

                    <div className="flex items-center justify-between relative z-10">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-[#FFF8EC]">
                        {project.type}
                      </span>
                      <span className="text-xs font-mono text-white/80">
                        {project.date}
                      </span>
                    </div>

                    <div className="relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-2">
                        {isHackathon ? <Trophy className="w-5 h-5 text-[#FFD23F]" /> : <Bus className="w-5 h-5 text-white" />}
                      </div>
                      <h4 className="font-heading font-extrabold text-lg text-white leading-snug">
                        {project.title}
                      </h4>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <p className="text-xs sm:text-sm text-[#13233A]/80 leading-relaxed min-h-[50px]">
                      {project.tagline || project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[11px] font-semibold bg-[#FFF8EC] text-[#13233A] rounded-md border border-black/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-[#13233A] text-white group-hover:bg-[#2F7FD8] transition-colors cursor-pointer"
                  >
                    <span>View Project Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Reusable Project Template Card Slot (For future additions) */}
          <div className="bg-white/50 border-2 border-dashed border-[#13233A]/20 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center hover:border-[#2F7FD8] hover:bg-white/80 transition-all">
            <div className="w-14 h-14 rounded-full bg-[#2F7FD8]/10 text-[#2F7FD8] flex items-center justify-center mb-4">
              <PlusCircle className="w-7 h-7" />
            </div>
            <h4 className="font-heading font-bold text-lg text-[#13233A]">
              Next Project Slot
            </h4>
            <p className="text-xs text-[#13233A]/70 mt-2 max-w-xs leading-relaxed">
              Designed as an extensible modular showcase. Future academic or full-stack software builds plug seamlessly into this component.
            </p>
            <span className="mt-4 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#FFD23F]/30 text-[#13233A] border border-[#FFD23F]/50">
              Template Ready
            </span>
          </div>

        </div>

        {/* Modal Case Study Popup */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
}
