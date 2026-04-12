import React from 'react';
import { ClockworkBackground } from '../components/ClockworkBackground';
import { motion } from 'framer-motion';
import { ClockworkProvider } from '../context/ClockworkContext';
import { Header } from '../components/layout/Header';
import { GlobalMenu } from '../components/layout/GlobalMenu';
import { TechnicalIndicators } from '../components/layout/TechnicalIndicators';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Global Layout Wrapper.
 * Provides the persistent 3D background and branding across all pages.
 */
export const LayoutContent = ({ children, current = 0, actions = null, sections = [], onNavigate = null }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleNavigate = (idx) => {
    // 1. Trigger state update if provided (Desktop SPA logic)
    if (onNavigate) {
       onNavigate(idx);
    } 
    
    // 2. Trigger Scroll Logic (Mobile / Global Navigation)
    if (sections[idx]?.id) {
       const landingPath = '/';
       if (location.pathname !== landingPath) {
          navigate(landingPath + '?section=' + idx);
       } else {
          const sectionEl = document.getElementById(sections[idx].id);
          if (sectionEl) {
             // Use smooth scroll but handle the desktop SPA context as well
             sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      
      <Header 
        sections={sections} 
        current={current} 
        onNavigate={handleNavigate} 
        onToggleMenu={() => setMenuOpen(!menuOpen)}
        menuOpen={menuOpen}
        actions={actions}
      />

      <GlobalMenu 
        isOpen={menuOpen}
        sections={sections}
        current={current}
        onNavigate={handleNavigate}
        onClose={() => setMenuOpen(false)}
      />

      <main className="relative w-full h-full z-10">
        {children}
      </main>

      <TechnicalIndicators current={current} />
    </motion.div>
  );
};

export const MainLayout = (props) => (
  <LayoutContent {...props} />
);
