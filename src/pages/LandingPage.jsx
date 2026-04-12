import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Globe, Activity, UserCheck, Shield, Zap, MapPin, FileText, TrendingUp, Download, Users, ExternalLink, Database, ChevronRight, AlertTriangle, Layers, Target, CheckCircle } from 'lucide-react';
import { BRAND } from '../constants/brand';
import { Gear } from '../components/Gear';
import { PersistentReveal } from '../components/PersistentReveal';
import { MainLayout } from '../layouts/MainLayout';
import { useClockwork } from '../context/ClockworkContext';
import { useLanguage } from '../context/LanguageContext';

// --- Section 1: Hero ---
const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center text-center space-y-6 md:space-y-12">
      <div className="mono-tech">{t('hero.fase')}</div>
      <div className="relative">
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-[#0F2B46] leading-none text-center">
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="inline-block"
          >{t('hero.title_top')}</motion.span>
          <br />
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block text-[#00A86B]"
          >{t('hero.title_bottom')}</motion.span>
        </h1>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-3xl font-black text-[#0F2B46] uppercase italic tracking-tight"
        >
          {t('hero.line1')}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-2xl font-light text-[#1E4F7A]"
        >
          {t('hero.line2')}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 max-w-2xl mx-auto w-full px-4">
         <div className="p-6 bg-[#0F2B46]/5 border-l-2 border-[#1E4F7A]/20 text-left">
            <span className="mono-tech text-[10px] opacity-40 block mb-2">SYSTEM_EMISSION</span>
            <p className="text-[#0F2B46] font-bold italic">{t('hero.line3')}</p>
         </div>
         <div className="p-6 bg-[#00A86B]/5 border-l-2 border-[#00A86B]/40 text-left">
            <span className="mono-tech text-[10px] text-[#00A86B]/60 block mb-2">ZEROCOG_CORE</span>
            <p className="text-[#0F2B46] font-bold italic">{t('hero.line4')}</p>
         </div>
      </div>
    </div>
  );
};

// --- Section 2: Core Assertion ---
const AssertionSection = () => {
  const { t } = useLanguage();
  return (
    <div className="max-w-4xl mx-auto text-center space-y-12">
      <div className="mono-tech">{t('assertion.label')}</div>
      <div className="space-y-8">
        <h2 className="text-4xl md:text-7xl font-black text-[#0F2B46] tracking-tighter uppercase italic leading-none">
          {t('assertion.title')}
        </h2>
        <div className="h-px w-24 bg-[#00A86B] mx-auto" />
        <p className="text-2xl md:text-4xl font-light text-[#1E4F7A] leading-tight">
          {t('assertion.subtitle')}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#0F2B46]/10 border border-[#0F2B46]/10 shadow-xl overflow-hidden bevelled">
        <div className="bg-white/80 p-8 md:p-12 space-y-4">
           <span className="mono-tech text-[10px] opacity-40">INT_DOUBT</span>
           <p className="text-2xl font-serif italic text-gray-400">“{t('assertion.question')}”</p>
        </div>
        <div className="bg-[#00A86B]/5 p-8 md:p-12 space-y-4 border-l border-[#0F2B46]/10">
           <span className="mono-tech text-[10px] text-[#00A86B]">VAL_LAYER</span>
           <p className="text-2xl font-black text-[#0F2B46] italic uppercase">{t('assertion.evaluation')}</p>
        </div>
      </div>
    </div>
  );
};

// --- Section 3: The Problem ---
const ProblemSection = () => {
  const { t } = useLanguage();
  return (
    <div className="space-y-12 md:space-y-16 max-w-6xl mx-auto">
      <div className="text-center"><div className="mono-tech">{t('problem.label')}</div></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
           <h2 className="text-4xl md:text-6xl font-black text-[#0F2B46] tracking-tighter leading-none italic uppercase">
             {t('problem.title')}
           </h2>
           <div className="space-y-4">
             {t('problem.bullets').map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-1.5 h-1.5 bg-gray-300 rotate-45 group-hover:bg-[#0F2B46] transition-all" />
                  <span className="text-xl md:text-2xl font-bold text-[#0F2B46]/40 group-hover:text-[#0F2B46] transition-colors italic">{item}</span>
                </div>
             ))}
           </div>
        </div>
        <div className="glass-isolation p-10 space-y-8 border-l-4 border-red-500/30 bg-red-500/5">
           <p className="text-2xl md:text-3xl text-[#0F2B46] font-light leading-relaxed italic">
             {t('problem.detail1')}
           </p>
           <div className="p-6 bg-[#0F2B46] text-white bevelled">
              <p className="text-xl font-black tracking-widest uppercase">{t('problem.detail2')}</p>
           </div>
           <p className="mono-tech text-xs tracking-widest text-[#1E4F7A]/60 uppercase">
             {t('problem.footer')}
           </p>
        </div>
      </div>
    </div>
  );
};

// --- Section 4: The Shift ---
const ShiftSection = () => {
  const { t } = useLanguage();
  return (
    <div className="space-y-12 md:space-y-20 max-w-5xl mx-auto text-center">
      <div className="mono-tech">{t('shift.label')}</div>
      <h2 className="text-4xl md:text-6xl font-black text-[#0F2B46] leading-none uppercase italic tracking-tighter">
        {t('shift.title')}
      </h2>
      
      <div className="relative py-12 px-8 bg-[#0F2B46] text-white bevelled overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="grid-bg w-full h-full" />
        </div>
        <p className="text-2xl md:text-4xl font-mono tracking-tighter text-[#00A86B] font-bold">
          {t('shift.flow')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 text-left">
         <div className="space-y-6">
            <p className="text-2xl text-[#1E4F7A] font-light italic leading-snug">
              {t('shift.text1')}
            </p>
            <div className="h-1 w-12 bg-[#00A86B]" />
            <p className="text-2xl text-[#0F2B46] font-black uppercase italic leading-none">
              {t('shift.text2')}
            </p>
         </div>
         <div className="flex items-end">
            <p className="mono-tech text-sm text-[#1E4F7A]/40 uppercase tracking-[0.3em] leading-relaxed border-l border-[#0F2B46]/10 pl-6">
              {t('shift.note')}
            </p>
         </div>
      </div>
    </div>
  );
};

// --- Section 5: What is a Precedent ---
const PrecedentSection = () => {
  const { t } = useLanguage();
  return (
    <div className="space-y-12 md:space-y-16 max-w-6xl mx-auto">
      <div className="text-center"><div className="mono-tech">{t('precedent.label')}</div></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-10">
           <h2 className="text-4xl md:text-5xl font-black text-[#0F2B46] tracking-tighter uppercase italic leading-none">
             {t('precedent.title')}
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {t('precedent.bullets').map((item, i) => (
                <div key={i} className="p-6 glass-isolation border-l-2 border-[#00A86B] flex items-center gap-4 group hover:bg-[#00A86B]/5 transition-colors">
                  <span className="mono-tech text-[10px] opacity-30">0{i+1}</span>
                  <span className="text-lg font-bold text-[#0F2B46] uppercase italic">{item}</span>
                </div>
             ))}
           </div>
        </div>
        <div className="space-y-8 flex flex-col justify-center">
           <div className="p-8 bg-[#0F2B46]/5 border border-[#0F2B46]/10 space-y-4">
              <span className="text-red-500/60 font-black italic line-through block opacity-50 text-sm whitespace-pre-line">{t('precedent.negative')}</span>
              <div className="h-px w-full bg-[#0F2B46]/10" />
              <p className="text-2xl font-black text-[#00A86B] uppercase italic leading-none">
                {t('precedent.store')}
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- Section 6: Core Mechanism ---
const MechanismSection = () => {
  const { t } = useLanguage();
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
      <div className="relative h-[300px] flex items-center justify-center order-2 lg:order-1">
        <div className="absolute inset-0 flex items-center justify-center scale-75 md:scale-100">
          <Gear size={400} color={BRAND.GREEN} rotation={45} teeth={32} opacity={0.1} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center mono-tech text-[10rem] font-black opacity-5 select-none font-mono uppercase">MECH</div>
      </div>
      <div className="space-y-8 md:space-y-12 text-left order-1 lg:order-2">
        <div className="mono-tech">{t('mechanism.label')}</div>
        <h2 className="text-4xl md:text-6xl font-black text-[#0F2B46] leading-none uppercase italic tracking-tighter">
          {t('mechanism.title')}
        </h2>
        <div className="space-y-6">
          {t('mechanism.bullets').map((prop, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="w-2 h-2 bg-[#00A86B] rotate-45" />
              <span className="text-2xl font-bold text-[#0F2B46]/60 group-hover:text-[#0F2B46] transition-colors uppercase italic">{prop}</span>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-[#0F2B46]/10 space-y-4">
           <p className="text-xl text-[#1E4F7A]/60 italic line-through">{t('mechanism.text1')}</p>
           <p className="text-3xl font-black text-[#00A86B] uppercase italic tracking-tighter leading-none">{t('mechanism.text2')}</p>
        </div>
      </div>
    </div>
  );
};

// --- Section 7: Interpretation Constraints ---
const ConstraintsSection = () => {
  const { t } = useLanguage();
  return (
    <div className="space-y-12 md:space-y-16 max-w-6xl mx-auto">
      <div className="text-center"><div className="mono-tech">{t('constraints.label')}</div></div>
      <div className="space-y-10">
        <h2 className="text-4xl md:text-6xl font-black text-[#0F2B46] leading-none uppercase italic tracking-tighter text-center">
          {t('constraints.title')}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {t('constraints.list').map((item, i) => (
            <div key={i} className="p-6 border border-red-500/20 bg-red-500/5 text-center group hover:bg-red-500/10 transition-colors">
               <AlertTriangle size={20} className="mx-auto mb-4 text-red-500/40" />
               <span className="text-sm font-bold text-red-900/60 uppercase italic tracking-tighter">{item}</span>
            </div>
          ))}
        </div>

        <div className="p-4 bg-red-600 text-white text-center font-black uppercase tracking-widest text-xs">
          {t('constraints.warning')}
        </div>

        <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-[#0F2B46]/10">
           <div className="space-y-6">
              <span className="mono-tech text-[10px] text-[#00A86B] uppercase">{t('constraints.operates_on_label')}</span>
              <div className="space-y-4">
                {t('constraints.operates_on').map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-lg font-black text-[#0F2B46] uppercase italic">
                    <div className="w-4 h-0.5 bg-[#00A86B]" /> {item}
                  </div>
                ))}
              </div>
           </div>
           <div className="space-y-6">
              <span className="mono-tech text-[10px] text-gray-400 uppercase">{t('constraints.not_on_label')}</span>
              <div className="space-y-4">
                {t('constraints.not_on').map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-lg font-bold text-gray-300 uppercase italic line-through">
                    <div className="w-4 h-0.5 bg-gray-200" /> {item}
                  </div>
                ))}
              </div>
           </div>
        </div>
        <p className="text-center mono-tech text-xs tracking-[0.5em] text-[#0F2B46] pt-12">
          {t('constraints.final')}
        </p>
      </div>
    </div>
  );
};

// --- Section 8: Evaluation Requirement ---
const RequirementSection = () => {
  const { t } = useLanguage();
  return (
    <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
      <div className="text-center"><div className="mono-tech">{t('requirement.label')}</div></div>
      <div className="bg-[#0F2B46] text-white p-12 md:p-20 bevelled space-y-12">
         <h2 className="text-3xl md:text-5xl font-black italic uppercase leading-tight tracking-tighter text-center">
           {t('requirement.title')}
         </h2>
         <div className="space-y-10">
           {t('requirement.questions').map((q, i) => (
              <div key={i} className="flex gap-8 group">
                 <span className="text-4xl md:text-6xl font-black text-[#00A86B] opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                 <p className="text-xl md:text-3xl font-light italic leading-snug border-b border-white/10 pb-4 flex-1">
                   {q}
                 </p>
              </div>
           ))}
         </div>
         <p className="mono-tech text-[10px] tracking-widest text-[#00A86B] text-center pt-8">
           {t('requirement.final')}
         </p>
      </div>
    </div>
  );
};

// --- Section 9: Failure Mode of Current AI ---
const FailureModeSection = () => {
  const { t } = useLanguage();
  return (
    <div className="max-w-5xl mx-auto space-y-12 text-center">
      <div className="mono-tech">{t('failure_mode.label')}</div>
      <div className="space-y-8">
        <h2 className="text-4xl md:text-6xl font-black text-[#0F2B46] uppercase italic leading-none tracking-tighter">
          {t('failure_mode.title')}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {t('failure_mode.list').map((item, i) => (
            <span key={i} className="px-6 py-2 border border-[#0F2B46]/10 text-xl font-bold italic text-[#1E4F7A]/40 uppercase tracking-tighter">{item}</span>
          ))}
        </div>
        <div className="py-12 bg-red-600 text-white bevelled">
           <h3 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter animate-pulse">{t('failure_mode.conclusion')}</h3>
        </div>
        <div className="space-y-4 pt-12">
           <p className="text-2xl text-[#1E4F7A] font-light italic">{t('failure_mode.note')}</p>
           <p className="text-3xl md:text-5xl font-black text-[#0F2B46] uppercase italic tracking-tighter bg-[#00A86B]/10 inline-block px-4">{t('failure_mode.final')}</p>
        </div>
      </div>
    </div>
  );
};

// --- Section 10: Architecture ---
const ArchitectureSection = () => {
  const { t } = useLanguage();
  return (
    <div className="space-y-12 md:space-y-16 max-w-6xl mx-auto">
      <div className="text-center"><div className="mono-tech">{t('architecture.label')}</div></div>
      <div className="space-y-12">
         <h2 className="text-4xl md:text-6xl font-black text-[#0F2B46] text-center uppercase italic tracking-tighter">
           {t('architecture.title')}
         </h2>
         <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-isolation p-10 space-y-6 border-t-4 border-[#1E4F7A]/20">
               <div className="flex items-center gap-4 text-[#00A86B]">
                  <Layers size={32} />
                  <h3 className="text-3xl font-black text-[#0F2B46] uppercase italic leading-none">{t('architecture.layer1.name')}</h3>
               </div>
               <p className="text-xl text-[#1E4F7A] font-light italic leading-relaxed">{t('architecture.layer1.desc')}</p>
            </div>
            <div className="glass-precision p-10 space-y-6 border-t-4 border-[#00A86B]/40 bg-[#00A86B]/5">
               <div className="flex items-center gap-4 text-[#00A86B]">
                  <Target size={32} />
                  <h3 className="text-3xl font-black text-[#0F2B46] uppercase italic leading-none">{t('architecture.layer2.name')}</h3>
               </div>
               <p className="text-xl text-[#1E4F7A] font-bold italic leading-relaxed">{t('architecture.layer2.desc')}</p>
            </div>
         </div>
         <div className="p-8 bg-[#0F2B46] text-white text-center font-mono text-sm tracking-widest leading-relaxed uppercase">
           {t('architecture.footer')}
         </div>
      </div>
    </div>
  );
};

// --- Section 11: Result ---
const ResultSection = () => {
  const { t } = useLanguage();
  return (
    <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
      <div className="text-center"><div className="mono-tech">{t('result.label')}</div></div>
      <div className="space-y-12">
         <h2 className="text-4xl md:text-6xl font-black text-[#0F2B46] text-center uppercase italic tracking-tighter">
           {t('result.title')}
         </h2>
         <div className="space-y-6">
           {t('result.bullets').map((item, i) => (
              <div key={i} className="flex items-center gap-8 p-8 border border-[#0F2B46]/5 bg-white/50 bevelled group hover:bg-[#00A86B]/10 transition-colors">
                 <CheckCircle size={40} className="text-[#00A86B] shrink-0" />
                 <span className="text-2xl md:text-4xl font-black text-[#0F2B46] uppercase italic tracking-tighter">{item}</span>
              </div>
           ))}
         </div>
      </div>
    </div>
  );
};

// --- Section 12: Closing ---
const ClosingSection = () => {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col items-center text-center space-y-12 md:space-y-16 max-w-4xl mx-auto">
      <div className="mono-tech">{t('closing.label')}</div>
      <div className="w-px h-24 bg-[#00A86B]/40 animate-pulse" />
      <div className="space-y-8">
        <h2 className="text-4xl md:text-7xl font-black text-[#0F2B46] tracking-tighter uppercase italic leading-tight">
          {t('closing.text')}
        </h2>
        <motion.p 
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl md:text-[8rem] font-black text-[#00A86B] uppercase tracking-tighter leading-none"
        >
          {t('closing.final')}
        </motion.p>
      </div>
      <div className="pt-20">
         <a
           href="mailto:zerocogorg@gmail.com"
           className="px-12 py-5 bg-[#00A86B] text-white font-black tracking-[0.3em] uppercase hover:bg-[#0F2B46] transition-all bevelled shadow-2xl inline-block text-lg"
         >
           CONTACT_INIT
         </a>
      </div>
    </div>
  );
};

// --- Main Landing Page Logic ---

const LandingPage = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollLock = React.useRef(false);
  
  const { setTarget } = useClockwork();
  const { t } = useLanguage();

  useEffect(() => {
    setTarget(current);
  }, [current, setTarget]);

  const demoAction = (
    <a
      href="https://demon2-production.up.railway.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex relative items-center gap-2 px-6 py-2.5 bg-[#00A86B] text-white text-[10px] uppercase tracking-widest font-black hover:bg-[#0F2B46] transition-all bevelled shadow-[0_0_15px_rgba(0,168,107,0.3)] hover:shadow-[0_0_20px_rgba(0,168,107,0.5)] pointer-events-auto"
    >
      <Zap size={14} className="animate-pulse" /> LIVE DEMO
    </a>
  );

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sections = [
    { id: 'hero', title: t('nav.hero') },
    { id: 'assertion', title: t('nav.assertion') },
    { id: 'problem', title: t('nav.problem') },
    { id: 'shift', title: t('nav.shift') },
    { id: 'precedent', title: t('nav.precedent') },
    { id: 'mechanism', title: t('nav.mechanism') },
    { id: 'constraints', title: t('nav.constraints') },
    { id: 'requirement', title: t('nav.requirement') },
    { id: 'failure_mode', title: t('nav.failure_mode') },
    { id: 'architecture', title: t('nav.architecture') },
    { id: 'result', title: t('nav.result') },
    { id: 'closing', title: t('nav.closing') },
  ];

  const navigateToSection = (newIdx) => {
    if (newIdx < 0 || newIdx >= sections.length || scrollLock.current) return;

    scrollLock.current = true;
    setDirection(newIdx > current ? 1 : -1);
    setCurrent(newIdx);

    setTimeout(() => {
      scrollLock.current = false;
    }, 850);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') navigateToSection((current + 1) % sections.length);
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') navigateToSection((current - 1 + sections.length) % sections.length);
    };

    const handleWheel = (e) => {
      if (scrollLock.current || isMobile) return;
      if (e.target.closest('.allow-parent-scroll')) return;
      if (Math.abs(e.deltaY) > 20) {
        if (e.deltaY > 0) {
          if (current < sections.length - 1) navigateToSection(current + 1);
        } else {
          if (current > 0) navigateToSection(current - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKey);
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [current, isMobile, sections.length]);

  return (
    <MainLayout current={current} sections={sections} onNavigate={navigateToSection} actions={demoAction}>
      {isMobile ? (
        <div className="flex flex-col pt-20 overflow-x-hidden">
          {sections.map((section, idx) => (
            <motion.div
              key={section.id}
              id={section.id}
              onViewportEnter={() => setCurrent(idx)}
              viewport={{ amount: 0.2 }}
              className="w-full min-h-fit flex items-center justify-center py-16"
            >
              <div className="w-full px-6 py-8">
                {idx === 0 && <HeroSection />}
                {idx === 1 && <AssertionSection />}
                {idx === 2 && <ProblemSection />}
                {idx === 3 && <ShiftSection />}
                {idx === 4 && <PrecedentSection />}
                {idx === 5 && <MechanismSection />}
                {idx === 6 && <ConstraintsSection />}
                {idx === 7 && <RequirementSection />}
                {idx === 8 && <FailureModeSection />}
                {idx === 9 && <ArchitectureSection />}
                {idx === 10 && <ResultSection />}
                {idx === 11 && <ClosingSection />}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <AnimatePresence mode="wait" custom={direction}>
          <PersistentReveal key={sections[current].id} direction={direction}>
            {current === 0 && <HeroSection />}
            {current === 1 && <AssertionSection />}
            {current === 2 && <ProblemSection />}
            {current === 3 && <ShiftSection />}
            {current === 4 && <PrecedentSection />}
            {current === 5 && <MechanismSection />}
            {current === 6 && <ConstraintsSection />}
            {current === 7 && <RequirementSection />}
            {current === 8 && <FailureModeSection />}
            {current === 9 && <ArchitectureSection />}
            {current === 10 && <ResultSection />}
            {current === 11 && <ClosingSection />}
          </PersistentReveal>
        </AnimatePresence>
      )}
    </MainLayout>
  );
};

export default LandingPage;
