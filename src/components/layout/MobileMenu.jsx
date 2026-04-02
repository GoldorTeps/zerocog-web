import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const MobileMenu = ({ isOpen, sections, current, onNavigate, onClose }) => {
  const { t } = useLanguage();
  return (
    <AnimatePresence>
      {isOpen && (
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
              onClick={() => onNavigate(idx)}
              className="group flex flex-col items-center"
            >
              <span className={`font-mono text-xs tracking-[0.6em] transition-all uppercase ${current === idx ? 'text-[#00A86B]' : 'text-[#1E4F7A]'}`}>
                {t(`nav.${section.id}`)}
              </span>
              {current === idx && (
                <motion.div layoutId="mobile-nav-line" className="w-12 h-1 bg-[#00A86B] mt-4" />
              )}
            </button>
          ))}
          
          <button 
            onClick={onClose}
            className="mt-12 text-[10px] font-mono tracking-widest text-[#1E4F7A]/40 uppercase"
          >
            {t('common.close_panel') || 'Cerrar_Panel'}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
