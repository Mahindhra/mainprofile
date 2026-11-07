import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { achievements } from '../data/portfolioData';
import { Trophy, Users, HeartHandshake, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

const achievementIcons = {
  Trophy,
  Users,
  HeartHandshake,
  TrendingUp
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-28 bg-[#FFF8EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Leadership & Recognition"
          title="Achievements & Extracurriculars"
          subtitle="Collaborative team leadership, hackathon participation, and community initiative engagement."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto">
          {achievements.map((item) => {
            const Icon = achievementIcons[item.icon] || Trophy;

            return (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md"
                      style={{ backgroundColor: item.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FFF8EC] text-[#13233A] border border-black/5">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-[#13233A]">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#2F7FD8] mt-1 mb-3">
                    {item.date}
                  </p>

                  <p className="text-sm text-[#13233A]/85 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-1.5 text-xs text-[#4F9E4A] font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Participation & Contribution</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
