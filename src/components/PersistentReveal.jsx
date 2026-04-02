import React from 'react';
import { motion } from 'framer-motion';

/**
 * Framer Motion wrapper for section transitions.
 * @param {Object} props
 * @param {number} props.direction - The direction of the transition (1 for forward, -1 for backward).
 */
export const PersistentReveal = ({ children, direction = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: direction * 50, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: direction * -50, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-24"
    >
      {/* Container for glassmorphism panels */}
      <div className="w-full max-w-7xl z-10 glass-isolation bevelled overflow-visible md:overflow-hidden shadow-none border border-white/5">
        <div className="glass-precision p-6 md:p-12 lg:p-16 w-full h-full">
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#00A86B]/30" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#00A86B]/30" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#00A86B]/30" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#00A86B]/30" />
          
          {children}
        </div>
      </div>
    </motion.div>
  );
};
