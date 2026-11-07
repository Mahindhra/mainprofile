import React from 'react';
import { motion } from 'framer-motion';
import { Pin } from 'lucide-react';

export default function DraggableStickyNote({ note, index }) {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -40, right: 40, top: -40, bottom: 40 }}
      dragElastic={0.2}
      whileHover={{ scale: 1.05, cursor: 'grab' }}
      whileTap={{ scale: 0.98, cursor: 'grabbing' }}
      initial={{ opacity: 0, y: 20, rotate: note.rotation || 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="p-4 sm:p-5 rounded-2xl shadow-lg border border-black/10 select-none relative"
      style={{
        backgroundColor: note.color,
        rotate: `${note.rotation}deg`,
        boxShadow: '0 10px 25px -5px rgba(19, 35, 58, 0.15)'
      }}
    >
      {/* Decorative top push-pin icon */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#13233A] text-white flex items-center justify-center shadow-md">
        <Pin className="w-3.5 h-3.5 text-[#FFD23F] -rotate-45" />
      </div>

      <div className="mt-2 text-center">
        <p className="font-handwriting text-xl sm:text-2xl font-bold text-[#13233A] leading-tight">
          "{note.text}"
        </p>
        <span className="text-[10px] uppercase font-bold text-[#13233A]/50 tracking-wider mt-2 block">
          ✎ Drag me around
        </span>
      </div>
    </motion.div>
  );
}
