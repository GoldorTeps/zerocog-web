import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Logo } from '../common/Logo';

export const Header = ({ sections, current, onNavigate, onToggleMenu, menuOpen, actions }) => {
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 md:h-24 px-6 md:px-12 flex items-center justify-between z-50 bg-white/80 backdrop-blur-md border-b border-[#0F2B46]/10">
      <div className="flex items-center gap-6 md:gap-12">
        <Link to="/" className="flex items-center gap-2 md:gap-4 pointer-events-auto group py-2">
          <Logo variant="transparent" />
          <div className="flex flex-col justify-center border-l-2 border-[#0F2B46]/5 pl-3 md:pl-4 h-8 md:h-10 shrink-0">
            <h1 className="text-lg md:text-2xl font-black text-[#0F2B46] tracking-tighter uppercase leading-none group-hover:text-[#00A86B] transition-colors duration-300 whitespace-nowrap">
              ZEROCOG
            </h1>
          </div>
        </Link>
      </div>

      {/* Global Controls Area */}
      <div className="pointer-events-auto flex items-center gap-3 md:gap-4 lg:gap-6">
        
        {/* Resource Link (Smooth scroll to resources section) */}
        <button 
          onClick={() => onNavigate(sections.length - 1)}
          className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-[#0F2B46] text-[#FFFFFF] hover:bg-[#1E4F7A] transition-all bevelled shadow-xl border-b-2 border-white/20 active:border-b-0 active:translate-y-0.5 group"
        >
          <FileText size={14} className="text-[#00A86B]" />
          <span className="text-[10px] font-black tracking-widest uppercase text-[#FFFFFF]">RESOURCES</span>
        </button>

        {/* Demo Action (Slot) */}
        {actions}

        {/* Premium Language Switcher */}
        <div className="hidden md:flex items-center border border-[#0F2B46]/10 rounded-full p-0.5 bg-white/50 backdrop-blur-sm self-center">
          <button 
            onClick={() => setLang('es')}
            className={`px-3 py-1 rounded-full text-[9px] font-mono tracking-widest transition-all ${lang === 'es' ? 'bg-[#0F2B46] text-white font-bold shadow-md' : 'text-[#0F2B46]/40 hover:text-[#0F2B46]'}`}
          >
            ES
          </button>
          <button 
            onClick={() => setLang('en')}
            className={`px-3 py-1 rounded-full text-[9px] font-mono tracking-widest transition-all ${lang === 'en' ? 'bg-[#0F2B46] text-white font-bold shadow-md' : 'text-[#0F2B46]/40 hover:text-[#0F2B46]'}`}
          >
            EN
          </button>
        </div>
        
        {/* Menu Toggle */}
        <button 
          onClick={onToggleMenu}
          className="w-10 h-10 md:w-12 md:h-12 border border-[#0F2B46]/10 flex items-center justify-center bg-white/80 backdrop-blur-md z-[110] relative group hover:border-[#00A86B]/40 transition-colors"
        >
          <div className="flex flex-col gap-1.5 items-center">
            <motion.div animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6.5 : 0 }} className="w-5 md:w-6 h-0.5 bg-[#0F2B46] group-hover:bg-[#00A86B]" />
            <motion.div animate={{ opacity: menuOpen ? 0 : 1 }} className="w-5 md:w-6 h-0.5 bg-[#0F2B46] group-hover:bg-[#00A86B]" />
            <motion.div animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6.5 : 0 }} className="w-5 md:w-6 h-0.5 bg-[#0F2B46] group-hover:bg-[#00A86B]" />
          </div>
        </button>
      </div>
    </nav>
  );
};
