import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Gear } from '../Gear';
import { BRAND } from '../../constants/brand';
import { X, Globe } from 'lucide-react';

export const GlobalMenu = ({ isOpen, sections, current, onNavigate, onClose }) => {
  const { lang, setLang, t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "circOut" }}
          className="fixed inset-0 bg-white/95 backdrop-blur-2xl z-[200] flex flex-col items-center justify-center p-6 md:p-12 overflow-y-auto"
        >
          {/* Subtle Decorative Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
            <div className="blueprint-grid w-full h-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
               <Gear size={1200} color={BRAND.BLUE_DEEP} rotation={0} teeth={80} />
            </div>
          </div>

          <div className="relative w-full max-w-7xl flex flex-col items-center gap-12 md:gap-20">
            
            {/* Header Area in Menu */}
            <div className="w-full flex justify-between items-center border-b border-[#0F2B46]/10 pb-8">
              <div className="flex items-center gap-4">
                <Globe size={18} className="text-[#00A86B]" />
                <span className="mono-tech text-[10px] tracking-[0.4em] text-[#0F2B46] font-bold">
                  ZEROCOG_NAV_PROTOCOL
                </span>
              </div>
              <button 
                onClick={onClose}
                className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#0F2B46]/5 transition-colors group"
                aria-label="Close Menu"
              >
                <X size={24} className="text-[#0F2B46] group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Navigation Grid - 12 Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 md:gap-y-6 w-full">
              {sections.map((section, idx) => (
                <motion.button 
                  key={section.id} 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.03 }}
                  onClick={() => onNavigate(idx)}
                  className={`group relative flex items-start gap-4 p-4 md:p-6 transition-all bevelled border ${current === idx ? 'bg-[#00A86B]/5 border-[#00A86B]/20' : 'hover:bg-[#0F2B46]/5 border-transparent'}`}
                >
                  <span className={`font-mono text-[10px] mt-1 shrink-0 ${current === idx ? 'text-[#00A86B]' : 'text-[#0F2B46]/30'}`}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col text-left">
                    <span className={`font-mono text-xs md:text-sm tracking-[0.3em] uppercase transition-colors ${current === idx ? 'text-[#00A86B] font-black' : 'text-[#0F2B46]/70 group-hover:text-[#0F2B46]'}`}>
                      {t(`nav.${section.id}`)}
                    </span>
                    {current === idx && (
                       <motion.div layoutId="active-indicator" className="h-0.5 bg-[#00A86B] w-full mt-2" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Footer Area: Language & Status */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 pt-12 border-t border-[#0F2B46]/10">
              <div className="flex items-center gap-8">
                <button 
                  onClick={() => setLang('es')}
                  className={`font-mono text-xs tracking-[0.2em] transition-all px-4 py-2 bevelled ${lang === 'es' ? 'bg-[#0F2B46] text-white font-bold' : 'text-[#0F2B46]/40 hover:text-[#0F2B46]'}`}
                >
                  ES_CASTELLANO
                </button>
                <button 
                  onClick={() => setLang('en')}
                  className={`font-mono text-xs tracking-[0.2em] transition-all px-4 py-2 bevelled ${lang === 'en' ? 'bg-[#0F2B46] text-white font-bold' : 'text-[#0F2B46]/40 hover:text-[#0F2B46]'}`}
                >
                  EN_ENGLISH
                </button>
              </div>

              <div className="flex items-center gap-3 opacity-30">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#00A86B] animate-pulse" />
                 <span className="mono-tech text-[9px] tracking-[0.5em] text-[#0F2B46]">
                   {t('common.status_secure') || 'INTERFACE_STABLE'}
                 </span>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
