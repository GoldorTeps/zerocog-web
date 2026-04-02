import React from 'react';
import { ClockworkBackground } from '../components/ClockworkBackground';
import { Settings } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useMotionValueEvent } from 'framer-motion';
import { BRAND } from '../constants/brand';

/**
 * Helper to display technical values that might be MotionValues or Numbers.
 */
const TechValue = ({ value, transform = (v) => v, suffix = "" }) => {
  const isMV = typeof value === 'object' && value !== null && 'get' in value;
  const [display, setDisplay] = React.useState(isMV ? value.get() : value);
  const dummyValue = useMotionValue(0);
  const activeMV = isMV ? value : dummyValue;

  useMotionValueEvent(activeMV, "change", (latest) => {
    if (isMV) setDisplay(latest);
  });

  React.useEffect(() => {
    if (!isMV) setDisplay(value);
  }, [value, isMV]);

  return <>{transform(display)}{suffix}</>;
};

/**
 * Global Layout Wrapper.
 * Provides the persistent 3D background and branding across all pages.
 * @param {Object} props
 * @param {number} props.current - The current section index (0 for single-page views).
 */
export const MainLayout = ({ children, current = 0, actions = null, sections = [] }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isInvestor = location.pathname === '/investor' || location.pathname === '/login';
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleNavigate = (idx) => {
    if (sections[idx]?.id) {
       const landingPath = '/';
       if (location.pathname !== landingPath) {
          navigate(landingPath + '?section=' + idx);
       } else {
          // If on mobile, scroll to section
          const sectionEl = document.getElementById(sections[idx].id);
          if (sectionEl) {
            sectionEl.scrollIntoView({ behavior: 'smooth' });
          }
       }
    }
    setMenuOpen(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative w-screen h-auto lg:h-screen select-none overflow-y-visible lg:overflow-hidden font-sans bg-brand-white"
    >
      <div className="fixed -inset-[5%] pointer-events-none z-0">
        <ClockworkBackground current={current} />
      </div>
      
      {/* Global Brand Overlay */}
      <nav className="absolute lg:fixed top-0 left-0 right-0 h-20 md:h-24 px-6 md:px-12 flex items-center justify-between z-50">
        <div className="flex items-center gap-6 md:gap-12">
          <Link to="/" className="flex items-center gap-2 md:gap-4 pointer-events-auto group">
            <div className="h-8 md:h-10 w-auto flex items-center justify-center transition-all duration-500 group-hover:scale-110 drop-shadow-sm">
               <img 
                 src="/assets/logo.png" 
                 alt="ZeroCog Logo" 
                 className="h-full w-auto object-contain rounded-lg"
               />
            </div>
            <div className="flex flex-col justify-center border-l-2 border-[#0F2B46]/5 pl-3 md:pl-4 h-8 md:h-10">
              <h1 className="text-lg md:text-2xl font-black text-[#0F2B46] tracking-tighter uppercase leading-none group-hover:text-[#00A86B] transition-colors duration-300">
                ZEROCOG
              </h1>
            </div>
          </Link>
        </div>

        {/* Desktop Nav - Only shown if sections provided */}
        {sections.length > 0 && (
          <div className="hidden lg:flex gap-12 pointer-events-auto">
            {sections.map((section, idx) => (
              <button 
                key={section.id} 
                onClick={() => handleNavigate(idx)}
                className="relative py-2 group"
              >
                <span className={`font-mono text-[9px] tracking-[0.4em] transition-all uppercase ${current === idx ? 'text-[#00A86B]' : 'text-[#1E4F7A]/40 group-hover:text-[#0F2B46]'}`}>
                  {section.title}
                </span>
                {current === idx && (
                  <motion.div layoutId="nav-pill" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00A86B]" />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Mobile Menu Trigger & Actions Slot */}
        <div className="pointer-events-auto flex items-center gap-4 md:gap-8">
          {actions}
          
          {sections.length > 0 && (
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 border border-[#0F2B46]/10 flex items-center justify-center bg-white/80 backdrop-blur-md z-[60] relative"
              aria-label="Toggle Menu"
            >
              <div className="flex flex-col gap-1.5 items-center">
                <motion.div 
                  animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6.5 : 0 }}
                  className="w-5 h-0.5 bg-[#0F2B46]" 
                />
                <motion.div 
                  animate={{ opacity: menuOpen ? 0 : 1 }}
                  className="w-5 h-0.5 bg-[#0F2B46]" 
                />
                <motion.div 
                  animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6.5 : 0 }}
                  className="w-5 h-0.5 bg-[#0F2B46]" 
                />
              </div>
            </button>
          )}
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="lg:hidden fixed inset-0 bg-white/95 backdrop-blur-2xl z-[55] flex flex-col items-center justify-center space-y-10"
            >
              {sections.map((section, idx) => (
                <button 
                  key={section.id} 
                  onClick={() => handleNavigate(idx)}
                  className="group flex flex-col items-center"
                >
                  <span className={`font-mono text-xs tracking-[0.6em] transition-all uppercase ${current === idx ? 'text-[#00A86B]' : 'text-[#1E4F7A]'}`}>
                    {section.title}
                  </span>
                  {current === idx && (
                    <motion.div layoutId="mobile-nav-line" className="w-12 h-1 bg-[#00A86B] mt-4" />
                  )}
                </button>
              ))}
              
              <button 
                onClick={() => setMenuOpen(false)}
                className="mt-12 text-[10px] font-mono tracking-widest text-[#1E4F7A]/40 uppercase"
              >
                Cerrar_Panel
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Page Content */}
      <main className="relative w-full h-full z-10">
        {children}
      </main>

      {/* Technical corner overlays (Shared) */}
      <div className="fixed left-8 bottom-8 mono-tech text-[8px] opacity-20 pointer-events-none">
        PROTOCOLO_ALINEACIÓN: <TechValue value={current} transform={v => (v * 60).toFixed(2)} suffix=" DEG_RAD" />
      </div>
      <div className="fixed right-8 bottom-8 flex items-center gap-4 pointer-events-none">
        <div className="mono-tech opacity-20 text-[8px] uppercase tracking-widest">
          SECTOR_ALINEADO_<TechValue value={current} transform={v => Math.round(v) + 1} />
        </div>
        <div className="w-10 h-10 border border-[#0F2B46]/10 flex items-center justify-center">
           <Settings size={14} className="text-[#00A86B]/40 animate-spin-slow" />
        </div>
      </div>
    </motion.div>
  );
};
