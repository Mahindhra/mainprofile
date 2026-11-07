import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { skillCategories } from '../data/portfolioData';
import {
  Coffee,
  Cpu,
  Terminal,
  FileCode,
  Palette,
  Zap,
  Layers,
  Database,
  Server,
  GitBranch,
  HardDrive,
  FileText,
  MessageSquare,
  Users,
  Clock,
  Brain,
  Repeat,
  Info,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';

const skillIconMap = {
  Coffee,
  Cpu,
  Terminal,
  FileCode,
  Palette,
  Zap,
  Layers,
  Database,
  Server,
  GitBranch,
  Github: GithubIcon,
  HardDrive,
  FileText,
  MessageSquare,
  Users,
  Clock,
  Brain,
  Repeat
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.id === activeTab);

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#FFF8EC] relative overflow-hidden">
      {/* Background painted ambient glow */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#B7A2FF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#4F9E4A]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Technical Competencies"
          title="Skills & Technologies"
          subtitle="Honest, grounded proficiency across core programming, web technologies, databases, and collaboration tools."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#13233A] text-white shadow-md'
                : 'bg-white/80 text-[#13233A]/70 hover:bg-white hover:text-[#13233A] border border-black/5'
            }`}
          >
            All Skills ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-[#2F7FD8] text-white shadow-md'
                  : 'bg-white/80 text-[#13233A]/70 hover:bg-white hover:text-[#13233A] border border-black/5'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="bg-white/70 p-6 sm:p-8 rounded-3xl border border-black/5 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-black/5">
                <div>
                  <h3 className="text-xl font-bold font-heading text-[#13233A]">
                    {category.title}
                  </h3>
                  <p className="text-xs text-[#13233A]/60 mt-0.5">
                    {category.subtitle}
                  </p>
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-[#FFF8EC] text-[#2F7FD8] mt-2 sm:mt-0 w-fit">
                  {category.skills.length} competencies
                </span>
              </div>

              {/* Skill Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill) => {
                  const Icon = skillIconMap[skill.icon] || Info;
                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="group p-4 rounded-2xl bg-white border border-[#13233A]/10 hover:border-[#2F7FD8] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-[#2F7FD8]/10 text-[#2F7FD8] group-hover:bg-[#2F7FD8] group-hover:text-white flex items-center justify-center transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#FFD23F]/30 text-[#13233A] border border-[#FFD23F]/40">
                            {skill.level}
                          </span>
                        </div>

                        <h4 className="font-heading font-bold text-base text-[#13233A] group-hover:text-[#2F7FD8] transition-colors">
                          {skill.name}
                        </h4>

                        <p className="text-xs text-[#13233A]/70 mt-1.5 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-[10px] text-[#13233A]/50">
                        <span className="flex items-center gap-1 font-medium text-[#4F9E4A]">
                          <CheckCircle2 className="w-3 h-3" /> Verified by practice
                        </span>
                        <span className="font-mono text-[#2F7FD8]">Active</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Transparency Note */}
        <div className="mt-12 p-4 rounded-2xl bg-white/80 border border-[#2F7FD8]/30 max-w-2xl mx-auto text-center shadow-xs">
          <p className="text-xs text-[#13233A]/80 leading-relaxed">
            <strong className="text-[#2F7FD8] font-bold">Integrity Note:</strong> No inflated "95% proficiency" bars or artificial guru badges. I believe in demonstrating what I know clearly — from solid Java & web development fundamentals to learning modern stacks through real practice.
          </p>
        </div>

      </div>
    </section>
  );
}
