import React from 'react';
import { ClockworkBackground } from '../components/ClockworkBackground';
import { Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND } from '../constants/brand';

/**
 * Global Layout Wrapper.
 * Provides the persistent 3D background and branding across all pages.
 * @param {Object} props
 * @param {number} props.current - The current section index (0 for single-page views).
 */
export const MainLayout = ({ children, current = 0, actions = null }) => {
  const location = useLocation();
  const isInvestor = location.pathname === '/investor';

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative w-screen h-screen select-none overflow-hidden font-sans bg-brand-white"
    >
      <ClockworkBackground current={current} />
      
      {/* Global Brand Overlay */}
      <nav className="fixed top-0 left-0 right-0 h-24 px-12 flex items-center justify-between z-50 pointer-events-none">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-4 pointer-events-auto group">
            <div className="h-10 w-auto flex items-center justify-center transition-all duration-500 group-hover:scale-110 drop-shadow-sm">
               <img 
                 src="/assets/logo.png" 
                 alt="ZeroCog Logo" 
                 className="h-full w-auto object-contain rounded-lg"
               />
            </div>
            <div className="flex flex-col justify-center border-l-2 border-[#0F2B46]/5 pl-4 h-10">
              <h1 className="text-2xl font-black text-[#0F2B46] tracking-tighter uppercase leading-none group-hover:text-[#00A86B] transition-colors duration-300">
                ZEROCOG
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-1 h-1 bg-[#00A86B] rounded-full animate-pulse" />
                <span className="mono-tech text-[8px] uppercase tracking-[0.2em] text-[#1E4F7A]/60 leading-none">
                  Fase_01
                </span>
              </div>
            </div>
          </Link>
          
        </div>

        {/* Dynamic Actions Slot (Page-Specific) */}
        <div className="pointer-events-auto flex items-center gap-8">
          {actions}
        </div>
      </nav>

      {/* Page Content */}
      <main className="relative w-full h-full z-10">
        {children}
      </main>

      {/* Technical corner overlays (Shared) */}
      <div className="fixed left-8 bottom-8 mono-tech text-[8px] opacity-20 pointer-events-none">
        PROTOCOLO_ALINEACIÓN: { (current * 60).toFixed(2) } DEG_RAD
      </div>
      <div className="fixed right-8 bottom-8 flex items-center gap-4 pointer-events-none">
        <div className="mono-tech opacity-20 text-[8px] uppercase tracking-widest">
          SECTOR_ALINEADO_{current + 1}
        </div>
        <div className="w-10 h-10 border border-[#0F2B46]/10 flex items-center justify-center">
           <Settings size={14} className="text-[#00A86B]/40 animate-spin-slow" />
        </div>
      </div>
    </motion.div>
  );
};
