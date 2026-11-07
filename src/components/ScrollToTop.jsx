import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-[#13233A] text-white hover:bg-[#2F7FD8] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/20 cursor-pointer focus:outline-hidden"
      aria-label="Scroll to top of page"
      title="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 text-[#FFD23F]" />
    </button>
  );
}
