import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useSpring, useTransform } from 'framer-motion';
import { Lock, Globe, Activity, UserCheck, Shield, Zap, MapPin, FileText, TrendingUp, Download, Users, ExternalLink, Database, ChevronRight } from 'lucide-react';
import { BRAND } from '../constants/brand';
import { Gear } from '../components/Gear';
import { PersistentReveal } from '../components/PersistentReveal';
import { MainLayout } from '../layouts/MainLayout';
import { useClockwork } from '../context/ClockworkContext';
import { useLanguage } from '../context/LanguageContext';

// --- Hero Section ---
const HeroSection = ({ onNavigate }) => {
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
          onClick={() => onNavigate(5)}
          className="w-full md:w-auto px-8 md:px-12 py-4 md:py-5 border border-[#0F2B46]/20 text-[#0F2B46] font-black tracking-widest uppercase hover:bg-[#0F2B46] hover:text-white transition-all bevelled text-sm md:text-base"
        >
          {t('hero.cta_docs')}
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
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="relative h-[200px] md:h-[300px] lg:h-[400px] flex items-center justify-center order-2 lg:order-1 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center scale-75 md:scale-100">
          <Gear size={450} color={BRAND.GREEN} rotation={45} teeth={32} opacity={0.1} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center mono-tech text-[8rem] md:text-[12rem] lg:text-[15rem] font-black opacity-5 select-none font-mono uppercase">COG</div>
      </div>
      <div className="space-y-8 md:space-y-12 text-left order-1 lg:order-2">
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

// --- Contact (Includes Founding Team) ---
const ContactSection = ({ onNavigate }) => {
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
        <button onClick={() => onNavigate(5)} className="w-full md:w-auto px-10 py-4 bg-[#00A86B] text-white font-black tracking-widest uppercase hover:bg-[#0F2B46] transition-all bevelled shadow-2xl scale-100 md:scale-110">{t('contact.cta')}</button>
        
        <div className="pt-4 space-y-4">
           <p className="text-base md:text-xl text-[#0F2B46]/70 italic max-w-2xl mx-auto">{t('contact.ethics')}</p>
        </div>
      </div>

      {/* Embedded Founding Team Card */}
      <div className="w-full max-w-2xl mx-auto pt-8 flex items-center justify-center pointer-events-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-[#0F2B46]/5 border border-[#1E4F7A]/10 glass-isolation bevelled group hover:bg-[#00A86B]/5 transition-colors">
          
          <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 relative overflow-hidden grayscale contrast-125 border border-[#1E4F7A]/10 shadow-lg">
            <img src="/assets/david-profile.png" alt="David Janer" className="w-full h-full object-cover z-0 opacity-80" />
            <div className="absolute inset-0 bg-[#0F2B46]/10 mix-blend-multiply z-10" />
            <div className="absolute top-1 right-1 text-[#00A86B] scale-50 opacity-50 z-20">
                <Gear size={30} color={BRAND.GREEN} rotation={0} teeth={12} opacity={0.6} />
            </div>
          </div>
          
          <div className="text-center md:text-left space-y-3">
             <h3 className="text-xl font-black text-[#0F2B46]">David Janer Pérez</h3>
             <p className="text-[#0C1A26]/80 text-[11px] md:text-xs italic leading-relaxed font-serif">
                "La IA no necesita tus datos. Puede entender tu mundo sin poseerlo."
             </p>
             <div className="flex items-center justify-center md:justify-start gap-4">
                <a href="mailto:zerocogorg@gmail.com" className="text-xs font-black text-[#1E4F7A]/60 hover:text-[#00A86B] transition-colors font-mono tracking-tighter">zerocogorg@gmail.com</a>
                <a href="https://www.linkedin.com/in/david-janer-p%C3%A9rez" target="_blank" rel="noreferrer" className="text-[#00A86B]/60 hover:text-[#00A86B] transition-colors">
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                     <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                   </svg>
                </a>
             </div>
          </div>
        </div>
      </div>

      {/* Discrete Location Detail */}
      <div className="pt-8 flex items-center justify-center gap-3 opacity-30 hover:opacity-60 transition-opacity">
        <MapPin size={12} className="text-[#00A86B]" />
        <span className="mono-tech text-[9px] tracking-[0.4em] text-[#1E4F7A] uppercase">{t('contact.malaga')}</span>
      </div>
    </div>
  );
};

// --- Documentation Section (Extracted) ---
const DocumentationSection = () => {
  const { t } = useLanguage();
  const documents = [
    { title: t('documentation.docs.doc1'), type: "DOCX", size: "0.8 MB", date: "Apr 01, 2026", url: "/assets/investors/1Zerocog_One_p.docx" },
    { title: t('documentation.docs.doc2'), type: "DOCX", size: "3.2 MB", date: "Apr 01, 2026", url: "/assets/investors/2Zerocog_inv_br.docx" },
    { title: t('documentation.docs.doc3'), type: "DOCX", size: "1.4 MB", date: "Apr 01, 2026", url: "/assets/investors/3Zerocog_Implem_p.docx" },
    { title: t('documentation.docs.doc4'), type: "DOCX", size: "2.1 MB", date: "Apr 01, 2026", url: "/assets/investors/4Zerocog_a_reiesg_mitig.docx" },
    { title: t('documentation.docs.doc5'), type: "JPG", size: "1.1 MB", date: "Apr 01, 2026", url: "/assets/investors/diagram_a.jpg" },
    { title: t('documentation.docs.doc6'), type: "STREAMLIT", size: "LIVE", date: "External App", url: "https://zerocogdemo-appi7rtt7crpgf8cz36feqx.streamlit.app/" },
    { title: t('documentation.docs.doc7'), type: "GITHUB", size: "PUBLIC", date: "Repository", url: "https://github.com/GoldorTeps/zero_cog_DEMO" },
  ];

  const handleDownloadAll = () => {
    const downloadable = documents.filter(doc => doc.url.startsWith('/assets/'));
    downloadable.forEach((doc, index) => {
      setTimeout(() => {
        const a = document.createElement('a');
        a.href = doc.url;
        a.download = '';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }, index * 300);
    });
  };

  return (
    <div className="allow-parent-scroll w-full h-full max-h-[75vh] md:max-h-[85vh] overflow-y-auto custom-scrollbar md:pr-4 relative z-10 pointer-events-auto">
      <div className="space-y-6 md:space-y-8 pb-16 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end border-b border-[#0F2B46]/10 pb-4 gap-4 md:gap-0">
            <h3 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-[#0F2B46]">
              <FileText className="text-[#00A86B]" /> {t('documentation.title')}
            </h3>
            <div className="flex items-center gap-4">
              <button 
                onClick={handleDownloadAll} 
                className="flex items-center gap-2 px-4 py-2 bg-[#0F2B46]/5 hover:bg-[#00A86B] text-[#0F2B46] hover:text-white border border-[#0F2B46]/10 hover:border-[#00A86B] transition-all font-bold text-[10px] uppercase tracking-widest pointer-events-auto shadow-sm"
              >
                <Download size={14} /> {t('documentation.download_all_btn')}
              </button>
              <span className="text-[10px] font-mono text-gray-500 hidden md:block">LAST_UPDATE: 01_APR_2026</span>
            </div>
          </div>

          <div className="grid gap-px bg-[#0F2B46]/10 border border-[#0F2B46]/10">
            {documents.map((doc, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm p-6 md:p-8 flex flex-col xl:flex-row xl:items-center justify-between group hover:bg-[#00A86B]/5 transition-colors gap-6 xl:gap-0 pointer-events-auto">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0F2B46]/5 flex items-center justify-center text-[#00A86B] shrink-0">
                    <Database size={20} md:size={24} />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold group-hover:text-[#00A86B] transition-colors text-[#0F2B46]">{doc.title}</h4>
                    <p className="text-[10px] md:text-xs text-gray-500 mt-1 uppercase tracking-widest font-mono">
                      {doc.type} • {doc.size} • {doc.date}
                    </p>
                  </div>
                </div>
                {doc.type === 'STREAMLIT' ? (
                  <div className="flex shrink-0">
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 px-8 py-4 bg-[#00A86B] text-white shadow-[0_0_25px_rgba(0,168,107,0.4)] hover:shadow-[0_0_40px_rgba(0,168,107,0.6)] hover:bg-[#0F2B46] hover:scale-[1.03] transition-all font-black text-[11px] md:text-xs tracking-[0.2em] uppercase bevelled pointer-events-auto"
                    >
                      <Zap size={16} className="animate-pulse" />
                      {t('documentation.demo_btn')}
                    </a>
                  </div>
                ) : doc.type === 'GITHUB' ? (
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex shrink-0 items-center justify-center gap-3 px-6 py-3 border border-[#1E4F7A]/20 hover:bg-[#0F2B46] hover:text-white transition-all font-bold text-[10px] md:text-xs tracking-widest uppercase text-[#0F2B46] hover:border-[#0F2B46] pointer-events-auto"
                  >
                    {t('documentation.code_btn')} <ExternalLink size={14} md:size={16} />
                  </a>
                ) : (
                  <a
                    href={doc.url}
                    download
                    className="flex shrink-0 items-center justify-center gap-3 px-6 py-3 border border-[#00A86B]/20 hover:bg-[#00A86B] hover:text-white transition-all font-bold text-[10px] md:text-xs tracking-widest uppercase text-[#00A86B] hover:border-[#00A86B] pointer-events-auto"
                  >
                    {t('documentation.download_btn')} <Download size={14} md:size={16} />
                  </a>
                )}
              </div>
            ))}
          </div>
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
  const { t } = useLanguage();
  // Drive the 3D stage using discrete section changes for beautiful homogeneous transitions
  useEffect(() => {
    setTarget(current);
  }, [current, setTarget]);

  const demoAction = (
    <a
      href="https://zerocogdemo-appi7rtt7crpgf8cz36feqx.streamlit.app/"
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
    { id: 'paradox', title: t('nav.paradox') },
    { id: 'usecases', title: t('nav.usecases') },
    { id: 'solution', title: t('nav.solution') },
    { id: 'value', title: t('nav.value') },
    { id: 'documentation', title: t('nav.documentation') },
    { id: 'contact', title: t('nav.contact') },
  ];

  const navigateToSection = (newIdx) => {
    if (newIdx === current || scrollLock.current) return;

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
    <MainLayout current={current} sections={sections} onNavigate={navigateToSection} actions={demoAction}>
      {isMobile ? (
        <div className="flex flex-col pt-20 overflow-x-hidden">
          {sections.map((section, idx) => (
            <motion.div
              key={section.id}
              id={section.id}
              onViewportEnter={() => setCurrent(idx)}
              viewport={{ amount: 0.2 }}
              className="w-full min-h-fit flex items-center justify-center py-8 md:py-16"
            >
              <div className="w-full px-6 py-8">
                {idx === 0 && <HeroSection onNavigate={navigateToSection} />}
                {idx === 1 && <ParadoxSection />}
                {idx === 2 && <UseCasesSection />}
                {idx === 3 && <SolutionSection />}
                {idx === 4 && <ValuePropSection />}
                {idx === 5 && <DocumentationSection />}
                {idx === 6 && <ContactSection onNavigate={navigateToSection} />}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <AnimatePresence mode="wait" custom={direction}>
          <PersistentReveal key={sections[current].id} direction={direction}>
            {current === 0 && <HeroSection onNavigate={navigateToSection} />}
            {current === 1 && <ParadoxSection />}
            {current === 2 && <UseCasesSection />}
            {current === 3 && <SolutionSection />}
            {current === 4 && <ValuePropSection />}
            {current === 5 && <DocumentationSection />}
            {current === 6 && <ContactSection onNavigate={navigateToSection} />}
          </PersistentReveal>
        </AnimatePresence>
      )}
    </MainLayout>
  );
};

export default LandingPage;
