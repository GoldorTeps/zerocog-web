import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Lock, Globe, Activity, UserCheck, Shield, Zap, MapPin } from 'lucide-react';
import { BRAND } from '../constants/brand';
import { Gear } from '../components/Gear';
import { PersistentReveal } from '../components/PersistentReveal';
import { MainLayout } from '../layouts/MainLayout';
import { useClockwork } from '../context/ClockworkContext';
import { useLanguage } from '../context/LanguageContext';

// --- Hero Section ---
const HeroSection = () => {
  const navigate = useNavigate();
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

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg md:text-2xl lg:text-3xl font-light text-[#1E4F7A] max-w-3xl leading-relaxed px-4 md:px-0"
        dangerouslySetInnerHTML={{ __html: t('hero.subtitle') }}
      />

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 pt-6 pointer-events-auto w-full md:w-auto px-8 md:px-0">
        <a
          href="mailto:zerocogorg@gmail.com"
          className="w-full md:w-auto px-8 md:px-12 py-4 md:py-5 bg-[#00A86B] text-white font-black tracking-widest uppercase hover:bg-[#0F2B46] transition-all bevelled shadow-lg text-center flex items-center justify-center text-sm md:text-base"
        >
          {t('hero.cta_contact')}
        </a>
        <button
          onClick={() => navigate('/login')}
          className="w-full md:w-auto px-8 md:px-12 py-4 md:py-5 border border-[#0F2B46]/20 text-[#0F2B46] font-black tracking-widest uppercase hover:bg-[#0F2B46] hover:text-white transition-all bevelled text-sm md:text-base"
        >
          {t('hero.cta_arch')}
        </button>
      </div>
    </div>
  );
};

// --- Tension Section ---
const ParadoxSection = () => {
  const { t } = useLanguage();
  return (
    <div className="space-y-8 md:space-y-16">
      <div className="text-center">
        <div className="mono-tech">{t('tension.label')}</div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#0F2B46]/10 border border-[#0F2B46]/10 shadow-2xl">
        <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 lg:p-16 space-y-8 md:space-y-10 group hover:bg-[#0F2B46]/5 transition-colors">
          <div className="space-y-4 md:space-y-6">
            <h2 
              className="text-3xl md:text-5xl font-black text-[#0F2B46] tracking-tighter leading-none italic uppercase"
              dangerouslySetInnerHTML={{ __html: t('tension.left_title') }}
            />
            <p 
              className="text-base md:text-xl text-[#1E4F7A]/90 leading-relaxed font-light italic"
              dangerouslySetInnerHTML={{ __html: t('tension.left_text') }}
            />
          </div>
          <div className="space-y-6">
            {t('tension.left_bullets').map((item, i) => (
              <div key={i} className="flex items-center gap-6 group/item">
                <div className="w-1 h-8 bg-gray-300 group-hover/item:bg-[#0F2B46] transition-all" />
                <span className="text-lg font-bold text-[#0F2B46]/60 group-hover/item:text-[#0F2B46] transition-colors italic">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-md p-8 md:p-12 lg:p-16 space-y-8 md:space-y-10 group hover:bg-[#00A86B]/5 transition-colors border-l-0 lg:border-l border-t lg:border-t-0 border-[#0F2B46]/10">
          <div className="space-y-4 md:space-y-6">
            <h2 
              className="text-3xl md:text-5xl font-black text-[#0F2B46] tracking-tighter leading-none italic uppercase"
              dangerouslySetInnerHTML={{ __html: t('tension.right_title') }}
            />
            <p 
              className="text-base md:text-xl text-[#0F2B46]/80 leading-relaxed font-light italic"
              dangerouslySetInnerHTML={{ __html: t('tension.right_text') }}
            />
          </div>
          <div className="space-y-6">
            {t('tension.right_bullets').map((item, i) => (
              <div key={i} className="flex items-center gap-6 group/item">
                <div className="w-1 h-8 bg-[#00A86B]/30 group-hover/item:bg-[#10B981] transition-all" />
                <span className="text-lg font-bold text-[#0F2B46]/80 group-hover/item:text-[#00A86B] transition-colors italic">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Solution Section ---
const SolutionSection = () => {
  const { t } = useLanguage();
  return (
    <div className="space-y-8 md:space-y-12">
      <div className="text-center space-y-4 md:space-y-6">
        <div className="mono-tech">{t('solution.label')}</div>
        <h2 className="text-4xl md:text-6xl font-black text-[#0F2B46]">{t('solution.title')}</h2>
        <p className="text-lg md:text-xl text-[#1E4F7A]/80 font-light max-w-2xl mx-auto italic px-4 md:px-0">
          {t('solution.text')}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto px-4 md:px-0">
        <div className="glass-isolation bevelled overflow-hidden border border-[#00A86B]/20 group hover:scale-[1.02] transition-transform">
          <div className="glass-precision p-8 md:p-12 space-y-6 md:space-y-8 bg-[#00A86B]/5 h-full flex flex-col">
            <div className="flex items-center gap-4">
              <Lock size={28} className="text-[#00A86B]" />
              <h3 className="text-2xl md:text-3xl font-black text-[#0F2B46]">{t('solution.sovereign.title')}</h3>
            </div>
            <div className="space-y-6 flex-1">
              <p className="text-[#1E4F7A]/90 text-lg leading-relaxed font-normal italic">
                {t('solution.sovereign.text')}
              </p>
              <ul className="space-y-3">
                {t('solution.sovereign.bullets').map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#0C1A26]/70 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#00A86B] rotate-45" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6 border-t border-[#00A86B]/10 flex justify-between items-center">
              <span className="mono-tech text-[10px] tracking-widest text-[#00A86B] uppercase">{t('solution.sovereign.footer')}</span>
              < Zap size={20} className="text-[#00A86B] animate-pulse" />
            </div>
          </div>
        </div>
        <div className="glass-isolation bevelled overflow-hidden border border-[#1E4F7A]/10 group hover:scale-[1.02] transition-transform">
          <div className="glass-precision p-8 md:p-12 space-y-6 md:space-y-8 bg-[#1E4F7A]/5 h-full flex flex-col">
            <div className="flex items-center gap-4">
              <Globe size={28} className="text-[#1E4F7A]" />
              <h3 className="text-2xl md:text-3xl font-black text-[#0F2B46]">{t('solution.external.title')}</h3>
            </div>
            <div className="space-y-6 flex-1">
              <p className="text-[#1E4F7A]/90 text-lg leading-relaxed font-normal italic">
                {t('solution.external.text')}
              </p>
              <ul className="space-y-3">
                {t('solution.external.bullets').map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#0C1A26]/70 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#1E4F7A]/30 rotate-45" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6 border-t border-[#1E4F7A]/10 flex justify-between items-center">
              <span className="mono-tech text-[10px] tracking-widest text-[#1E4F7A] uppercase">{t('solution.external.footer')}</span>
              <Shield size={20} className="text-[#1E4F7A]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Operativa Section ---
const UseCasesSection = () => {
  const { t } = useLanguage();
  const cases = [
    { key: 'personal', icon: <UserCheck size={28} /> },
    { key: 'smb', icon: <Activity size={28} /> },
    { key: 'enterprise', icon: <Shield size={28} /> }
  ];

  return (
    <div className="space-y-12 md:space-y-16">
      <div className="text-center space-y-4 md:space-y-6">
        <div className="mono-tech">{t('operativa.label')}</div>
        <h2 className="text-4xl md:text-6xl font-black text-[#0F2B46]">{t('operativa.title')}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left px-4 md:px-0">
        {cases.map((use, i) => (
          <div key={i} className="glass-isolation bevelled overflow-hidden border border-[#1E4F7A]/5 group hover:border-[#00A86B]/40 transition-all flex flex-col">
            <div className="glass-precision p-10 space-y-6 flex-1 flex flex-col">
              <div className="w-14 h-14 bg-[#0F2B46]/5 flex items-center justify-center text-[#0F2B46] group-hover:bg-[#00A86B] group-hover:text-white transition-all shrink-0">{use.icon}</div>
              <div className="space-y-4 flex-1">
                <h3 className="text-2xl font-black text-[#0F2B46]">{t(`operativa.${use.key}.title`)}</h3>
                <p className="text-[#1E4F7A]/90 text-sm leading-relaxed italic border-l-2 border-[#00A86B]/30 pl-4">{t(`operativa.${use.key}.text`)}</p>
                <ul className="space-y-3 pt-2">
                  {t(`operativa.${use.key}.bullets`).map((bullet, bi) => (
                    <li key={bi} className="text-[#0C1A26]/70 text-[13px] leading-snug flex gap-3">
                      <span className="text-[#00A86B] shrink-0">•</span> {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Value Prop ---
const ValuePropSection = () => {
  const { t } = useLanguage();
  return (
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <div className="relative h-[400px] flex items-center justify-center order-2 lg:order-1">
        <Gear size={450} color={BRAND.GREEN} rotation={45} teeth={32} opacity={0.1} />
        <div className="absolute inset-0 flex items-center justify-center mono-tech text-[15rem] font-black opacity-5 select-none font-mono uppercase">COG</div>
      </div>
      <div className="space-y-12 text-left order-1 lg:order-2">
        <div className="mono-tech">{t('value.label')}</div>
        <h2 className="text-4xl md:text-6xl font-black text-[#0F2B46] leading-none uppercase italic tracking-tighter" dangerouslySetInnerHTML={{ __html: t('value.title') }} />
        <div className="space-y-8">
          {t('value.bullets').map((prop, i) => (
            <div key={i} className="space-y-2 group">
              <h3 className="text-xl font-black text-[#0F2B46] flex items-center gap-3 group-hover:text-[#00A86B] transition-colors uppercase">
                <div className="w-2 h-2 bg-[#00A86B] rotate-45" /> {prop.h}
              </h3>
              <p className="text-[#1E4F7A]/80 pl-5 border-l border-[#00A86B]/20 ml-1 leading-relaxed">{prop.p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Contact ---
const ContactSection = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  return (
    <div className="flex flex-col items-center text-center space-y-12 md:space-y-16">
      <div className="w-px h-16 md:h-24 bg-[#00A86B]/40 shadow-glow animate-pulse" />
      
      <div className="space-y-6 px-4">
        <h2 className="text-4xl md:text-7xl font-black text-[#0F2B46] tracking-tighter uppercase italic">{t('contact.title')}</h2>
        <p className="text-lg md:text-2xl text-[#1E4F7A]/80 font-light max-w-3xl leading-relaxed italic">{t('contact.text')}</p>
      </div>

      <div className="flex flex-col items-center gap-8 w-full px-8">
        <button onClick={() => navigate('/login')} className="w-full md:w-auto px-10 py-4 bg-[#00A86B] text-white font-black tracking-widest uppercase hover:bg-[#0F2B46] transition-all bevelled shadow-2xl scale-100 md:scale-110">{t('contact.cta')}</button>
        <a href="mailto:zerocogorg@gmail.com" className="text-xl md:text-3xl font-black text-[#0F2B46]/40 hover:text-[#00A86B] transition-colors font-mono tracking-tighter">zerocogorg@gmail.com</a>
      </div>

      {/* Discrete Location Detail - Final Minimal Version */}
      <div className="pt-8 flex items-center justify-center gap-3 opacity-30 hover:opacity-60 transition-opacity">
        <MapPin size={12} className="text-[#00A86B]" />
        <span className="mono-tech text-[9px] tracking-[0.4em] text-[#1E4F7A] uppercase">{t('contact.malaga')}</span>
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
  const containerRef = React.useRef(null);
  
  const { setTarget } = useClockwork();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Standardized way to drive 3D stage on mobile scroll
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (isMobile) {
      setTarget(v * 5);
    }
  });

  const sections = [
    { id: 'hero', title: 'I_INICIO' },
    { id: 'paradox', title: 'II_TENSIÓN' },
    { id: 'usecases', title: 'III_OPERATIVA' },
    { id: 'solution', title: 'IV_SOLUCIÓN' },
    { id: 'value', title: 'V_VALOR' },
    { id: 'contact', title: 'VI_CONTACTO' },
  ];

  const navigateToSection = (newIdx) => {
    if (newIdx === current || scrollLock.current) return;

    scrollLock.current = true;
    setDirection(newIdx > current ? 1 : -1);
    setCurrent(newIdx);
    
    if (!isMobile) setTarget(newIdx);

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
      if (Math.abs(e.deltaY) > 20) {
        if (e.deltaY > 0) navigateToSection((current + 1) % sections.length);
        else navigateToSection((current - 1 + sections.length) % sections.length);
      }
    };

    window.addEventListener('keydown', handleKey);
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [current, isMobile]);

  return (
    <MainLayout current={current} sections={sections} onNavigate={navigateToSection}>
      {isMobile ? (
        <div ref={containerRef} className="flex flex-col pt-20">
          {sections.map((section, idx) => (
            <motion.div
              key={section.id}
              id={section.id}
              onViewportEnter={() => setCurrent(idx)}
              viewport={{ amount: 0.3 }}
              className="w-full min-h-[60vh] lg:min-h-screen flex items-center justify-center py-12 md:py-24"
            >
              <div className="w-full px-6">
                {idx === 0 && <HeroSection />}
                {idx === 1 && <ParadoxSection />}
                {idx === 2 && <UseCasesSection />}
                {idx === 3 && <SolutionSection />}
                {idx === 4 && <ValuePropSection />}
                {idx === 5 && <ContactSection />}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <AnimatePresence mode="wait" custom={direction}>
          <PersistentReveal key={sections[current].id} direction={direction}>
            {current === 0 && <HeroSection />}
            {current === 1 && <ParadoxSection />}
            {current === 2 && <UseCasesSection />}
            {current === 3 && <SolutionSection />}
            {current === 4 && <ValuePropSection />}
            {current === 5 && <ContactSection />}
          </PersistentReveal>
        </AnimatePresence>
      )}
    </MainLayout>
  );
};

export default LandingPage;
