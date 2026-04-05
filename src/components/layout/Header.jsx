import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Logo } from '../common/Logo';

export const Header = ({ sections, current, onNavigate, onToggleMenu, menuOpen, actions }) => {
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 md:h-24 px-6 md:px-12 flex items-center justify-between z-50">
      <div className="flex items-center gap-6 md:gap-12">
        <Link to="/" className="flex items-center gap-2 md:gap-4 pointer-events-auto group">
          <Logo variant="transparent" />
          <div className="flex flex-col justify-center border-l-2 border-[#0F2B46]/5 pl-3 md:pl-4 h-8 md:h-10">
            <h1 className="text-lg md:text-2xl font-black text-[#0F2B46] tracking-tighter uppercase leading-none group-hover:text-[#00A86B] transition-colors duration-300">
              ZEROCOG
            </h1>
          </div>
        </Link>
      </div>

      {/* Desktop Nav */}
      {sections.length > 0 && (
        <div className="hidden lg:flex gap-12 pointer-events-auto">
          {sections.map((section, idx) => (
            <button 
              key={section.id} 
              onClick={() => onNavigate(idx)}
              className="relative py-2 group"
            >
              <span className={`font-mono text-[9px] tracking-[0.4em] transition-all uppercase ${current === idx ? 'text-[#00A86B]' : 'text-[#1E4F7A]/40 group-hover:text-[#0F2B46]'}`}>
                {/* Translating section title using IDs from translations.js */}
                {t(`nav.${section.id}`)}
              </span>
              {current === idx && (
                <motion.div layoutId="nav-pill" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00A86B]" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Trigger & Slot */}
      <div className="pointer-events-auto flex items-center gap-4 md:gap-8">
        {/* Language Switcher (Desktop only) */}
        <div className="hidden lg:flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#1E4F7A]/40 mr-4">
          <button 
            onClick={() => setLang('es')}
            className={`transition-colors hover:text-[#0F2B46] p-1 ${lang === 'es' ? 'text-[#00A86B] font-bold' : ''}`}
          >
            ES
          </button>
          <span className="opacity-30">/</span>
          <button 
            onClick={() => setLang('en')}
            className={`transition-colors hover:text-[#0F2B46] p-1 ${lang === 'en' ? 'text-[#00A86B] font-bold' : ''}`}
          >
            EN
          </button>
        </div>

        {actions}
        
        {sections.length > 0 && (
          <button 
            onClick={onToggleMenu}
            className="lg:hidden w-10 h-10 border border-[#0F2B46]/10 flex items-center justify-center bg-white/80 backdrop-blur-md z-[60] relative"
          >
            <div className="flex flex-col gap-1.5 items-center">
              <motion.div animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6.5 : 0 }} className="w-5 h-0.5 bg-[#0F2B46]" />
              <motion.div animate={{ opacity: menuOpen ? 0 : 1 }} className="w-5 h-0.5 bg-[#0F2B46]" />
              <motion.div animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6.5 : 0 }} className="w-5 h-0.5 bg-[#0F2B46]" />
            </div>
          </button>
        )}
      </div>
    </nav>
  );
};
