import React from 'react';
import { ClockworkBackground } from '../components/ClockworkBackground';
import { Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND } from '../constants/brand';

/**
 * Global Layout Wrapper.
 * Provides the persistent 3D background and branding across all pages.
 * @param {Object} props
 * @param {number} props.current - The current section index (0 for single-page views).
 */
export const MainLayout = ({ children, current = 0 }) => {
  const location = useLocation();
  const isInvestor = location.pathname === '/investor';

  return (
    <div className="relative w-screen h-screen select-none overflow-hidden font-sans bg-brand-white">
      <ClockworkBackground current={current} />
      
      {/* Global Brand Overlay */}
      <nav className="fixed top-0 left-0 right-0 h-32 px-12 flex items-center justify-between z-50 pointer-events-none">
        <Link to="/" className="flex items-center gap-6 pointer-events-auto group">
          <div className="w-10 h-10 border border-[#0F2B46]/20 flex items-center justify-center p-2 group-hover:border-[#00A86B]/40 transition-colors">
             <div className={`w-full h-full transition-colors ${isInvestor ? 'bg-[#00A86B]/20' : 'bg-transparent'}`} />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xl font-black text-[#0F2B46] tracking-tighter uppercase leading-none group-hover:text-[#00A86B] transition-colors">ZEROCOG</span>
            <span className="mono-tech text-[7px] uppercase tracking-widest opacity-60 leading-none mt-1">FASE_01</span>
          </div>
        </Link>
        
        <div className="mono-tech text-[#1E4F7A] opacity-40 uppercase tracking-widest text-[10px]">SOVEREIGN_ARCH // 2026</div>
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
    </div>
  );
};
