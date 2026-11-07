import React from 'react';
import { X, Calendar, CheckCircle2, ExternalLink, Sparkles, Tag } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-black/10 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 bg-[#13233A] text-white flex items-start justify-between relative">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFD23F]">
                {project.type}
              </span>
              <span className="text-xs text-white/50">•</span>
              <span className="text-xs text-white/70 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {project.date}
              </span>
            </div>
            <h3 className="text-2xl font-bold font-heading text-white">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Status Badge */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#FFF8EC] border border-[#13233A]/10">
            <span className="text-xs font-bold text-[#13233A]">Project Status:</span>
            <span
              className="text-xs font-bold px-3 py-1 rounded-full text-white"
              style={{ backgroundColor: project.badgeColor || '#2F7FD8' }}
            >
              {project.status}
            </span>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#13233A]/50 mb-2">
              Overview & Focus
            </h4>
            <p className="text-base text-[#13233A]/85 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Core Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#13233A]/50 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD23F]" />
                Key Focus & Outcomes
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#13233A]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#4F9E4A] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#13233A]/50 mb-2 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-[#2F7FD8]" />
              Applied Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#13233A]/5 text-[#13233A] border border-black/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-gray-50 border-t border-black/5 flex items-center justify-between">
          <span className="text-[11px] text-[#13233A]/60 italic">
            {project.githubUrl ? "Source code available on GitHub" : "Verified academic / hackathon challenge"}
          </span>

          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#13233A] hover:bg-[#2F7FD8] transition-colors"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold text-[#13233A] bg-white border border-black/10 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
