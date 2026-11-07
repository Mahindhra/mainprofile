import React from 'react';
import { X, Download, Printer, CheckCircle, Mail, Phone, MapPin, ExternalLink, GraduationCap, Briefcase, Award } from 'lucide-react';
import { personalInfo, educationList, certifications, internships, projects } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-black/10 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Action Bar */}
        <div className="p-4 sm:p-5 bg-[#13233A] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FFD23F] text-[#13233A] flex items-center justify-center font-bold text-sm">
              DM
            </div>
            <div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-white leading-tight">
                Doddi Mahindhra — Official Resume
              </h3>
              <span className="text-[11px] text-white/70">
                Verified Credentials & Contact Details
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Doddi_Mahindhra_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#13233A] bg-[#FFD23F] hover:bg-[#ffca28] transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#FFF8EC]/20 text-[#13233A]">
          {/* Resume Header */}
          <div className="text-center pb-6 border-b border-black/10">
            <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#13233A] tracking-tight">
              {personalInfo.fullName}
            </h1>
            <p className="text-sm font-semibold text-[#2F7FD8] mt-1">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-3 text-xs text-[#13233A]/80 font-medium">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#4F9E4A]" /> {personalInfo.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#2F7FD8]" /> {personalInfo.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#FF6B4A]" /> {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#2F7FD8] mb-2 font-mono">
              CAREER OBJECTIVE
            </h2>
            <p className="text-sm text-[#13233A]/85 leading-relaxed bg-white p-4 rounded-2xl border border-black/5">
              Aspiring Software Developer seeking an opportunity to join a reputed organization where I can learn, grow, and contribute to innovative software solutions. Possess foundational knowledge of Java, C, HTML, CSS, JavaScript, and SQL, with strong problem-solving, teamwork, and communication skills.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#2F7FD8] mb-3 font-mono flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" /> EDUCATION
            </h2>
            <div className="space-y-3">
              {educationList.map((edu, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-sm text-[#13233A]">{edu.degree}</h3>
                    <p className="text-xs text-[#13233A]/70">{edu.institution} • {edu.location}</p>
                  </div>
                  <div className="text-right">
                    {edu.score && (
                      <span className="font-bold text-xs px-2.5 py-1 rounded-md bg-[#FFD23F] text-[#13233A]">
                        {edu.score}
                      </span>
                    )}
                    {edu.status && (
                      <span className="text-[11px] font-semibold text-[#2F7FD8] block mt-0.5">
                        {edu.status}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#2F7FD8] mb-3 font-mono">
              TECHNICAL SKILLS
            </h2>
            <div className="bg-white p-4 rounded-2xl border border-black/5 space-y-2 text-xs">
              <div>
                <strong className="text-[#13233A]">Programming Languages:</strong> Java, C, Python (Fundamentals)
              </div>
              <div>
                <strong className="text-[#13233A]">Web Technologies:</strong> HTML, CSS, JavaScript, XML
              </div>
              <div>
                <strong className="text-[#13233A]">Database Technologies:</strong> SQL, MySQL
              </div>
              <div>
                <strong className="text-[#13233A]">Tools & Platforms:</strong> Git, GitHub, Apache Tomcat, MS Office
              </div>
              <div>
                <strong className="text-[#13233A]">Soft Skills:</strong> Communication, Team Collaboration, Time Management, Problem Solving, Adaptability
              </div>
            </div>
          </div>

          {/* Practical Work & Hackathons */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#2F7FD8] mb-3 font-mono flex items-center gap-1.5">
              <Award className="w-4 h-4" /> PRACTICAL WORK & HACKATHONS
            </h2>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-2xl border border-black/5">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-sm text-[#13233A]">
                    Android Development Hackathon
                  </h3>
                  <span className="text-xs text-[#13233A]/60 font-mono">
                    30-09-2024 to 04-10-2024
                  </span>
                </div>
                <p className="text-xs text-[#13233A]/80 mt-1 leading-relaxed">
                  Recognized for outstanding participation in an intensive hackathon focusing on Android development, live project challenges, and practical problem solving.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-black/5">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-sm text-[#13233A]">
                    Smart APSRTC Passenger Complaint & Feedback System
                  </h3>
                  <span className="text-xs text-[#2F7FD8] font-bold">
                    Academic Project (In Progress)
                  </span>
                </div>
                <p className="text-xs text-[#13233A]/80 mt-1 leading-relaxed">
                  Designing a digital grievance and feedback management system with Java, MySQL, and web technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Internships */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#2F7FD8] mb-3 font-mono flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" /> INTERNSHIP EXPERIENCES
            </h2>
            <div className="space-y-3">
              {internships.map((intern, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-black/5">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-sm text-[#13233A]">
                      {intern.role} — {intern.organization}
                    </h3>
                    <span className="text-xs text-[#13233A]/60 font-mono">
                      {intern.duration}
                    </span>
                  </div>
                  <p className="text-xs text-[#13233A]/80 mt-1 leading-relaxed">
                    {intern.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#2F7FD8] mb-3 font-mono">
              CERTIFICATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {certifications.map((c) => (
                <div key={c.title} className="bg-white p-3.5 rounded-xl border border-black/5 text-xs">
                  <span className="font-bold text-[#13233A] block">{c.title}</span>
                  <span className="text-[11px] text-[#2F7FD8]">{c.issuer}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Download Footer */}
        <div className="p-4 bg-gray-50 border-t border-black/10 flex items-center justify-between">
          <span className="text-xs text-[#13233A]/60">
            Path: <code className="font-mono text-[#2F7FD8]">public/resume.pdf</code>
          </span>

          <a
            href="/resume.pdf"
            download="Doddi_Mahindhra_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#13233A] hover:bg-[#2F7FD8] transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download Official Resume PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
}
