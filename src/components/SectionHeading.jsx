import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  center = true,
  dark = false,
  className = ""
}) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border shadow-xs"
          style={{
            backgroundColor: dark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(47, 127, 216, 0.1)',
            borderColor: dark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(47, 127, 216, 0.25)',
            color: dark ? '#FFD23F' : '#2F7FD8'
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          {badge}
        </div>
      )}

      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight ${
          dark ? 'text-[#FFF8EC]' : 'text-[#13233A]'
        }`}
      >
        {title}
      </h2>

      {/* Decorative hand-drawn underline curve */}
      <div className={`flex ${center ? 'justify-center' : 'justify-start'} my-3`}>
        <svg
          className="w-36 h-3 text-[#FF6B4A]"
          viewBox="0 0 160 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 8.5C35 2 95 1.5 157 8.5"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M35 10.5C65 7 110 7.5 145 10.5"
            stroke="#FFD23F"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      </div>

      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            dark ? 'text-gray-300' : 'text-[#13233A]/75'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
