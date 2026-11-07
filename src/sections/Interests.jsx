import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { interests } from '../data/portfolioData';
import { Music, Utensils, Palette, PenTool, Laptop, Sparkles, Volume2, Flame, Brush } from 'lucide-react';

const interestIcons = {
  Music,
  Utensils,
  Palette,
  PenTool
};

// Playable Web Audio synth for piano keys
function playPianoNote(frequency) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);

    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.8);
  } catch (e) {
    console.log("Audio not supported or blocked", e);
  }
}

const pianoKeys = [
  { note: 'C4', freq: 261.63, label: 'Do' },
  { note: 'D4', freq: 293.66, label: 'Re' },
  { note: 'E4', freq: 329.63, label: 'Mi' },
  { note: 'F4', freq: 349.23, label: 'Fa' },
  { note: 'G4', freq: 392.00, label: 'Sol' },
  { note: 'A4', freq: 440.00, label: 'La' },
  { note: 'B4', freq: 493.88, label: 'Ti' },
  { note: 'C5', freq: 523.25, label: 'Do' }
];

const canvasColors = ['#FF6B4A', '#FFD23F', '#4F9E4A', '#2F7FD8', '#B7A2FF', '#13233A'];

export default function Interests() {
  const [selectedInterest, setSelectedInterest] = useState(interests[0]);
  const [activeColor, setActiveColor] = useState(canvasColors[3]);
  const [lastPlayedNote, setLastPlayedNote] = useState(null);

  const handleKeyClick = (key) => {
    playPianoNote(key.freq);
    setLastPlayedNote(key.note);
  };

  return (
    <section id="interests" className="py-20 md:py-28 bg-[#FFF8EC] relative overflow-hidden">
      {/* Background painted texture */}
      <div className="absolute inset-0 painted-texture opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Beyond The Code"
          title="My Creative Desk & Personal Passions"
          subtitle="Outside technology, I enjoy playing piano, cooking, painting, and drawing. These interests nurture creativity, precision, and harmony."
        />

        {/* Interactive Desk Scene Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interest Cards & Selector */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#13233A]/60 block mb-2">
              Select an activity to explore:
            </span>

            {interests.map((item) => {
              const Icon = interestIcons[item.icon] || Sparkles;
              const isSelected = selectedInterest.id === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedInterest(item)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white border-[#2F7FD8] shadow-lg scale-[1.02] ring-2 ring-[#2F7FD8]/20'
                      : 'bg-white/70 border-black/5 hover:bg-white hover:border-[#13233A]/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-110"
                      style={{ backgroundColor: item.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base text-[#13233A]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#FF6B4A] font-medium">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-[#2F7FD8] group-hover:translate-x-1 transition-transform">
                    Interact →
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Desk Workspace Canvas */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-2 border-black/10 shadow-xl relative min-h-[460px] flex flex-col justify-between">
            {/* Top Bar of the Desk */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-black/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF6B4A]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFD23F]" />
                  <div className="w-3 h-3 rounded-full bg-[#4F9E4A]" />
                  <span className="text-xs font-mono font-semibold text-[#13233A]/60 ml-2">
                    Mahindhra's Creative Workspace • {selectedInterest.title}
                  </span>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FFF8EC] text-[#13233A] border border-black/5">
                  Interactive Element
                </span>
              </div>

              {/* Dynamic Interactive Desk Area Based on Selected Activity */}
              <div className="py-6">
                <h3 className="font-heading font-extrabold text-2xl text-[#13233A] mb-1">
                  {selectedInterest.title}
                </h3>
                <p className="text-sm font-semibold text-[#2F7FD8] mb-4">
                  {selectedInterest.category} — {selectedInterest.tagline}
                </p>
                <p className="text-sm sm:text-base text-[#13233A]/85 leading-relaxed mb-6 font-body">
                  {selectedInterest.description}
                </p>

                {/* Sub-component: Playable Piano */}
                {selectedInterest.id === 'piano' && (
                  <div className="p-4 rounded-2xl bg-[#13233A] text-white space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#FFF8EC]/70">
                      <span className="flex items-center gap-1.5 font-bold">
                        <Volume2 className="w-4 h-4 text-[#FFD23F]" /> Tap keys to play notes:
                      </span>
                      {lastPlayedNote && (
                        <span className="font-mono text-[#FFD23F] font-bold">
                          Played: {lastPlayedNote}
                        </span>
                      )}
                    </div>
                    {/* Piano Keyboard */}
                    <div className="flex justify-between gap-1 sm:gap-2 pt-2">
                      {pianoKeys.map((k) => (
                        <button
                          key={k.note}
                          onClick={() => handleKeyClick(k)}
                          className="flex-1 h-28 bg-white hover:bg-[#FFD23F] active:bg-[#FF6B4A] text-[#13233A] rounded-b-xl flex flex-col justify-end items-center pb-2 font-bold text-xs shadow-md transition-all active:translate-y-1 cursor-pointer select-none"
                        >
                          <span className="text-[10px] text-gray-400">{k.label}</span>
                          <span>{k.note}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sub-component: Painting Color Palette */}
                {selectedInterest.id === 'painting' && (
                  <div className="p-5 rounded-2xl bg-[#FFF8EC] border border-black/10 space-y-4">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#13233A]">
                      <span className="flex items-center gap-1.5">
                        <Brush className="w-4 h-4 text-[#FF6B4A]" /> Pick a palette tone:
                      </span>
                      <span className="font-mono">{activeColor}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      {canvasColors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setActiveColor(color)}
                          className={`w-10 h-10 rounded-full shadow-md transition-all cursor-pointer ${
                            activeColor === color ? 'scale-125 ring-4 ring-offset-2 ring-[#13233A]' : 'hover:scale-110'
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>

                    {/* Virtual Canvas Preview */}
                    <div
                      className="w-full h-24 rounded-xl flex items-center justify-center text-white font-handwriting text-2xl font-bold shadow-inner transition-colors duration-500"
                      style={{ backgroundColor: activeColor }}
                    >
                      "Art is the code of emotion."
                    </div>
                  </div>
                )}

                {/* Sub-component: Cooking Inspiration */}
                {selectedInterest.id === 'cooking' && (
                  <div className="p-5 rounded-2xl bg-[#FFF8EC] border border-black/10 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#FF6B4A] text-white flex items-center justify-center shrink-0 shadow-md">
                      <Flame className="w-7 h-7 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-[#13233A]">
                        Recipe for Great Code:
                      </h4>
                      <p className="text-xs text-[#13233A]/80 mt-1 leading-relaxed">
                        Fresh ingredients (clean architecture), exact measurements (types and data models), careful timing (event loops), and passion for the craft.
                      </p>
                    </div>
                  </div>
                )}

                {/* Sub-component: Drawing & Sketchbook */}
                {selectedInterest.id === 'drawing' && (
                  <div className="p-5 rounded-2xl bg-[#FFF8EC] border border-black/10 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#4F9E4A] text-white flex items-center justify-center shrink-0 shadow-md">
                      <PenTool className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-[#13233A]">
                        Sketching Before Coding:
                      </h4>
                      <p className="text-xs text-[#13233A]/80 mt-1 leading-relaxed">
                        Drawing on paper trains spatial intuition. Before writing database tables or front-end components, I map user flows and layout wireframes visually.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Footer Note */}
            <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs text-[#13233A]/60">
              <span className="font-handwriting text-base font-bold text-[#FF6B4A]">
                Balance fuels good engineering ✨
              </span>
              <span className="font-mono text-[10px]">Creativity • Discipline • Curiosity</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
