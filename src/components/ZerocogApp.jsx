import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Lock, Globe, Database, Zap } from 'lucide-react';
import { ClockworkBackground } from './ClockworkBackground';
import { PersistentReveal } from './PersistentReveal';
import { ClockworkProvider, useClockwork } from '../context/ClockworkContext';

// ─── Copy ────────────────────────────────────────────────────────────────────

const T = {
  es: {
    nav_cta: 'Solicitar acceso',
    sections: [
      { id: 'hero',      title: 'I_INICIO'      },
      { id: 'problema',  title: 'II_PROBLEMA'   },
      { id: 'diferencia',title: 'III_DIFERENCIA' },
      { id: 'mecanismo', title: 'IV_MECANISMO'  },
      { id: 'propuesta', title: 'V_PROPUESTA'   },
      { id: 'acceso',    title: 'VI_ACCESO'     },
      { id: 'docs',      title: 'VII_DOC', hidden: true },
    ],
  },
  en: {
    nav_cta: 'Request access',
    sections: [
      { id: 'hero',       title: 'I_START'      },
      { id: 'problem',    title: 'II_PROBLEM'   },
      { id: 'difference', title: 'III_DIFFERENCE'},
      { id: 'mechanism',  title: 'IV_MECHANISM' },
      { id: 'value',      title: 'V_VALUE_PROP' },
      { id: 'access',     title: 'VI_ACCESS'    },
      { id: 'docs',       title: 'VII_DOC', hidden: true },
    ],
  },
};

// ─── Section Components ───────────────────────────────────────────────────────

const HeroSection = ({ isEs, onNavigateDocs }) => (
  <div className="flex flex-col items-center text-center space-y-6 md:space-y-10">
    <div className="mono-tech text-brand-green">
      {isEs ? 'Fase_01 // Arquitectura' : 'Phase_01 // Architecture'}
    </div>

    <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-tighter text-brand-blue-deep leading-none">
      <motion.span
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="inline-block"
      >
        {isEs ? 'Arquitectura de' : 'Verified decision'}
      </motion.span>
      <br />
      <motion.span
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="inline-block text-brand-green"
      >
        {isEs ? 'decisión verificada.' : 'architecture.'}
      </motion.span>
    </h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-xl md:text-2xl lg:text-3xl font-light text-brand-blue-med italic max-w-2xl leading-snug px-4"
    >
      {isEs
        ? '¿Cuánto vale una organización que recuerda qué funcionó?'
        : 'How much is an organisation worth that remembers what worked?'}
    </motion.p>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.55 }}
      className="text-base md:text-lg text-brand-blue-deep/60 max-w-lg leading-relaxed px-4"
    >
      {isEs
        ? 'Una arquitectura de datos que solo persiste lo que produjo un resultado verificado. Tu experiencia operativa, activa.'
        : 'A data architecture that only persists what produced a verified outcome. Your operational experience, active.'}
    </motion.p>

    <div className="flex flex-col sm:flex-row gap-4 pt-2 px-4 w-full max-w-sm sm:max-w-none">
      <a
        href="mailto:zerocogorg@gmail.com"
        className="bevelled px-8 md:px-12 py-4 bg-brand-green text-white font-black tracking-widest uppercase text-sm hover:bg-brand-blue-deep transition-all text-center"
      >
        {isEs ? 'Solicitar acceso' : 'Request access'}
      </a>
      <button
        className="bevelled px-8 md:px-12 py-4 border border-brand-blue-deep/20 text-brand-blue-deep font-black tracking-widest uppercase text-sm hover:bg-brand-blue-deep hover:text-white transition-all"
        onClick={onNavigateDocs}
      >
        {isEs ? 'Ver arquitectura' : 'See architecture'}
      </button>
    </div>
  </div>
);

const ProblemSection = ({ isEs }) => (
  <div className="space-y-8 md:space-y-12 max-w-5xl mx-auto">
    <div className="mono-tech text-brand-green">
      {isEs ? '02 // El problema' : '02 // The problem'}
    </div>

    <blockquote className="text-2xl md:text-4xl lg:text-5xl font-black text-brand-blue-deep tracking-tighter leading-tight italic">
      {isEs
        ? <>Un sistema que no conecta decisiones con consecuencias<br className="hidden md:block" /> no tiene memoria. <span className="text-brand-green">Tiene archivo.</span></>
        : <>A system that doesn&rsquo;t connect decisions with consequences<br className="hidden md:block" /> has no memory. <span className="text-brand-green">It has an archive.</span></>
      }
    </blockquote>

    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
      <p className="text-lg text-brand-blue-deep/70 leading-relaxed">
        {isEs
          ? 'Los sistemas de IA actuales recuperan información, generan respuestas, procesan documentos. Pero comparten un defecto estructural: no distinguen entre información que alguna vez produjo un resultado correcto e información que no.'
          : 'Current AI systems retrieve information, generate responses, process documents. But they share a structural flaw: they cannot distinguish between information that once produced a correct result and information that did not.'}
      </p>
      <div className="border-l-2 border-brand-green/30 pl-6 md:pl-8 space-y-4">
        <p className="text-lg text-brand-blue-deep/70 leading-relaxed">
          {isEs
            ? 'Cada decisión nueva parte del mismo punto de ignorancia que la anterior.'
            : 'Every new decision starts from the same point of ignorance as the one before.'}
        </p>
        <p className="text-xl font-black text-brand-blue-deep italic">
          {isEs
            ? 'La organización no aprende. Simula que aprende.'
            : "The organisation doesn't learn. It simulates learning."}
        </p>
      </div>
    </div>
  </div>
);

const ContrastSection = ({ isEs }) => (
  <div className="space-y-6 md:space-y-10 max-w-5xl mx-auto w-full">
    <div className="mono-tech text-brand-green">
      {isEs ? '03 // La diferencia' : '03 // The difference'}
    </div>

    <div className="grid lg:grid-cols-2 gap-px bg-brand-blue-deep/8 border border-brand-blue-deep/8 overflow-hidden bevelled">
      <div className="p-6 md:p-10 bg-white space-y-4">
        <p className="mono-tech text-brand-blue-deep/30">
          {isEs ? 'Sin ZeroCog' : 'Without ZeroCog'}
        </p>
        <p className="text-base md:text-lg text-brand-blue-deep/45 leading-relaxed">
          {isEs
            ? 'Información genérica sobre el sector. Tendencias, competidores, mejores prácticas. Útil. Genérico. Sin relación con lo que ha funcionado en tu propia empresa.'
            : 'Generic sector information. Trends, competitors, best practices. Useful. Generic. No relation to what has worked in your own organisation.'}
        </p>
        <p className="font-bold text-brand-blue-deep/50 italic text-sm">
          {isEs
            ? 'Cada decisión parte del mismo punto de ignorancia.'
            : 'Every decision starts from the same point of ignorance.'}
        </p>
      </div>

      <div className="p-6 md:p-10 bg-brand-green/[0.03] space-y-4 border-t lg:border-t-0 lg:border-l border-brand-green/20">
        <p className="mono-tech text-brand-green">
          {isEs ? 'Con ZeroCog' : 'With ZeroCog'}
        </p>
        <p className="text-base md:text-lg text-brand-blue-deep leading-relaxed">
          {isEs
            ? 'Experiencia verificada de tu organización. Qué patrón funcionó con ese perfil de cliente. Cuándo y por qué se cayeron oportunidades similares.'
            : 'Verified experience from your own organisation. Which pattern worked with that client profile. When and why similar opportunities fell through.'}
        </p>
        <p className="font-black text-brand-blue-deep italic text-sm">
          {isEs
            ? 'Experiencia propia con resultado conocido, no datos de terceros.'
            : 'Your own experience with a known outcome, not third-party data.'}
        </p>
      </div>
    </div>

    <div className="bg-brand-blue-deep p-6 md:p-10 bevelled">
      <p className="mono-tech text-brand-green mb-4">
        {isEs ? 'OUTPUT_ZEROCOG // EJEMPLO' : 'OUTPUT_ZEROCOG // EXAMPLE'}
      </p>
      <p className="text-base md:text-xl text-white font-light italic leading-relaxed">
        {isEs
          ? '"En 14 oportunidades con este perfil, el ciclo se cerró cuando la primera reunión incluía una demo operativa. En los 6 casos donde se envió propuesta sin demo, el cierre tardó el doble o no ocurrió."'
          : '"In 14 opportunities with this profile, the cycle closed when the first meeting included an operational demo. In the 6 cases where a proposal was sent without a demo, the close took twice as long or didn\'t happen."'}
      </p>
    </div>
  </div>
);

const STEPS = {
  es: [
    { n: '01', title: 'Conecta tus fuentes',           body: 'CRM, email, chat interno, facturación, inventario, proyectos. ZeroCog se integra en el stack operativo existente sin reemplazar nada.' },
    { n: '02', title: 'Filtra por resultado verificado', body: 'Cada decisión documentada se convierte en un evento estructurado. Solo persiste si llega una señal verificada de que produjo un resultado. Sin resultado, no entra en memoria.' },
    { n: '03', title: 'Activa memoria operativa real',  body: 'El modelo de IA que ya usas opera sobre experiencia propia verificada, no sobre patrones estadísticos de otras empresas. ZeroCog es el criterio. El motor lo eliges tú.' },
  ],
  en: [
    { n: '01', title: 'Connect your sources',        body: 'CRM, email, internal chat, billing, inventory, projects. ZeroCog integrates into your existing operational stack without replacing anything.' },
    { n: '02', title: 'Filter by verified outcome',  body: 'Each documented decision becomes a structured event. It only persists if a verified signal arrives that it produced a result. No outcome, no entry into memory.' },
    { n: '03', title: 'Activate real operational memory', body: 'The AI model you already use operates on your own verified experience — not on statistical patterns from other companies. ZeroCog is the criterion. You choose the engine.' },
  ],
};

const MechanismSection = ({ isEs }) => {
  const steps = isEs ? STEPS.es : STEPS.en;
  return (
    <div className="space-y-8 md:space-y-12 max-w-5xl mx-auto w-full">
      <div className="mono-tech text-brand-green">
        {isEs ? '04 // Cómo funciona' : '04 // How it works'}
      </div>
      <h2 className="text-3xl md:text-5xl font-black text-brand-blue-deep tracking-tighter leading-none">
        {isEs ? 'Tres pasos. Sin reemplazar nada.' : 'Three steps. Replace nothing.'}
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {steps.map(s => (
          <div key={s.n} className="space-y-4">
            <p className="font-mono text-[4rem] font-bold text-brand-blue-deep/07 leading-none select-none">{s.n}</p>
            <div className="w-8 h-px bg-brand-green" />
            <h3 className="text-lg font-black text-brand-blue-deep">{s.title}</h3>
            <p className="text-brand-blue-med/75 text-sm leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PILLARS = {
  es: [
    { code: 'SOVEREIGNTY', icon: Lock,     title: 'Soberanía de datos',        body: 'Tu experiencia verificada permanece bajo tu control. ZeroCog opera con tus datos sin exponerlos a terceros. La memoria operativa de tu empresa es tuya.' },
    { code: 'INDEPENDENCE', icon: Globe,   title: 'Independencia de modelo',   body: 'ZeroCog no condiciona qué modelos de IA usa tu organización. Condiciona con qué experiencia operan esos modelos. Cambia de modelo cuando quieras. El criterio permanece.' },
    { code: 'AI ACT · GDPR', icon: Database, title: 'Trazabilidad regulatoria', body: 'El AI Act europeo exige demostrar en qué experiencia se basó un sistema para recomendar algo. ZeroCog produce esa trazabilidad de forma estructural, no como añadido posterior.' },
  ],
  en: [
    { code: 'SOVEREIGNTY', icon: Lock,     title: 'Data sovereignty',        body: "Your verified experience stays under your control. ZeroCog works with your data without exposing it to third parties. Your organisation's operational memory is yours." },
    { code: 'INDEPENDENCE', icon: Globe,   title: 'Model independence',      body: "ZeroCog doesn't determine which AI models your organisation uses. It determines what experience those models operate on. Change models whenever you want. The criterion remains." },
    { code: 'AI ACT · GDPR', icon: Database, title: 'Regulatory traceability', body: "The EU AI Act requires demonstrating what experience a system used to make a recommendation. ZeroCog produces that traceability structurally — not as a bolt-on." },
  ],
};

const ValueSection = ({ isEs }) => {
  const pillars = isEs ? PILLARS.es : PILLARS.en;
  return (
    <div className="space-y-8 md:space-y-12 max-w-5xl mx-auto w-full">
      <div className="mono-tech text-brand-green">
        {isEs ? '05 // Por qué ZeroCog' : '05 // Why ZeroCog'}
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {pillars.map(p => {
          const Icon = p.icon;
          return (
            <div key={p.code} className="border-t-2 border-brand-green pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <Icon size={20} className="text-brand-green shrink-0" />
                <p className="mono-tech text-brand-green">{p.code}</p>
              </div>
              <h3 className="text-xl font-black text-brand-blue-deep">{p.title}</h3>
              <p className="text-brand-blue-med/75 text-sm leading-relaxed">{p.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ClosingSection = ({ isEs, onNavigateDocs }) => (
  <div className="flex flex-col items-center text-center space-y-8 md:space-y-12 max-w-3xl mx-auto">
    <div className="w-px h-12 md:h-20 bg-brand-green/40 animate-pulse" />
    <div className="mono-tech text-brand-green">
      {isEs ? '06 // Acceso' : '06 // Access'}
    </div>

    <div className="space-y-4 px-4">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-brand-blue-deep tracking-tighter leading-tight">
        {isEs
          ? <>La especificación técnica existe.<br />El sistema es construible hoy.</>
          : <>The technical specification exists.<br />The system is buildable today.</>
        }
      </h2>
      <p className="text-xl text-brand-blue-med/70 italic">
        {isEs
          ? 'La única pregunta es quién quiere construirlo.'
          : 'The only question is who wants to build it.'}
      </p>
      <p className="mono-tech text-brand-green/70">
        {isEs
          ? 'La especificación completa está disponible bajo NDA.'
          : 'The complete specification is available under NDA.'}
      </p>
    </div>

    <div className="flex flex-col sm:flex-row gap-4 pt-4">
      <a
        href="mailto:zerocogorg@gmail.com"
        className="bevelled px-12 py-5 bg-brand-green text-white font-black tracking-widest uppercase text-sm hover:bg-brand-blue-deep transition-all text-center"
      >
        {isEs ? 'Solicitar acceso' : 'Request access'}
      </a>

      <button
        onClick={onNavigateDocs}
        className="bevelled px-12 py-5 border border-brand-blue-deep/20 text-brand-blue-deep font-black tracking-widest uppercase text-sm hover:bg-brand-blue-deep hover:text-white transition-all"
      >
        {isEs ? 'Ver arquitectura' : 'See architecture'}
      </button>
    </div>
  </div>
);

const DownloadIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 1v7M2.5 5l3.5 4 3.5-4M1 11h10" />
  </svg>
);

const DocsSection = ({ isEs }) => (
  <div className="flex flex-col space-y-8 md:space-y-10 max-w-4xl mx-auto w-full">
    <div className="space-y-2">
      <div className="mono-tech text-brand-green">
        {isEs ? '07 // Documentación' : '07 // Documentation'}
      </div>
      <h2 className="text-3xl md:text-5xl font-black text-brand-blue-deep tracking-tighter">
        One Paper
      </h2>
      <p className="text-brand-blue-med/60 text-base">
        {isEs
          ? 'Resumen ejecutivo de la arquitectura ZeroCog.'
          : 'Executive summary of the ZeroCog architecture.'}
      </p>
    </div>

    <div className="grid sm:grid-cols-2 gap-6">
      {/* Spanish */}
      <div className="p-8 md:p-10 border border-brand-blue-deep/10 bg-white/30 bevelled space-y-6">
        <div className="space-y-1">
          <p className="mono-tech text-brand-blue-deep/30">REF_01 // ES</p>
          <h3 className="text-xl font-black text-brand-blue-deep">Español</h3>
          <p className="text-sm text-brand-blue-med/50">Versión original</p>
        </div>
        <div className="flex gap-3">
          <a
            href="/assets/investors/ZeroCog_OnePaper_ES.md"
            download="ZeroCog_OnePaper_ES.md"
            className="flex-1 bevelled inline-flex items-center justify-center gap-2 px-4 py-3 bg-brand-blue-deep text-white font-black text-[9px] tracking-[0.2em] uppercase hover:bg-brand-green transition-all"
          >
            <DownloadIcon /> Markdown
          </a>
          <a
            href="/assets/investors/ZeroCog_OnePaper_ES.docx"
            download="ZeroCog_OnePaper_ES.docx"
            className="flex-1 bevelled inline-flex items-center justify-center gap-2 px-4 py-3 bg-brand-blue-deep/70 text-white font-black text-[9px] tracking-[0.2em] uppercase hover:bg-brand-green transition-all"
          >
            <DownloadIcon /> Word
          </a>
        </div>
      </div>

      {/* English */}
      <div className="p-8 md:p-10 border border-brand-blue-deep/10 bg-white/30 bevelled space-y-6">
        <div className="space-y-1">
          <p className="mono-tech text-brand-blue-deep/30">REF_01 // EN</p>
          <h3 className="text-xl font-black text-brand-blue-deep">English</h3>
          <p className="text-sm text-brand-blue-med/50">English version</p>
        </div>
        <div className="flex gap-3">
          <a
            href="/assets/investors/ZeroCog_OnePaper_EN.md"
            download="ZeroCog_OnePaper_EN.md"
            className="flex-1 bevelled inline-flex items-center justify-center gap-2 px-4 py-3 bg-brand-blue-deep text-white font-black text-[9px] tracking-[0.2em] uppercase hover:bg-brand-green transition-all"
          >
            <DownloadIcon /> Markdown
          </a>
          <a
            href="/assets/investors/ZeroCog_OnePaper_EN.docx"
            download="ZeroCog_OnePaper_EN.docx"
            className="flex-1 bevelled inline-flex items-center justify-center gap-2 px-4 py-3 bg-brand-blue-deep/70 text-white font-black text-[9px] tracking-[0.2em] uppercase hover:bg-brand-green transition-all"
          >
            <DownloadIcon /> Word
          </a>
        </div>
      </div>
    </div>
  </div>
);

// ─── Header ──────────────────────────────────────────────────────────────────

const SpaHeader = ({ isEs, current, sections, onNavigate, menuOpen, setMenuOpen }) => {
  const altHref = isEs ? '/en/' : '/';
  const altLabel = isEs ? 'EN' : 'ES';
  const cta = isEs ? 'Solicitar acceso' : 'Request access';

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 md:h-24 px-6 md:px-12 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-brand-blue-deep/10">
        {/* Logo */}
        <a href={isEs ? '/' : '/en/'} className="flex flex-col group">
          <span className="text-xl font-black text-brand-blue-deep tracking-tighter uppercase leading-none group-hover:text-brand-green transition-colors">
            ZEROCOG
          </span>
          <span className="mono-tech text-[6px] text-brand-blue-med/40 mt-0.5">
            SISTEMA_SOBERANO_V1.5
          </span>
        </a>

        {/* Desktop section links */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {sections.filter(s => !s.hidden).map((s, idx) => (
            <button
              key={s.id}
              data-section={idx}
              onClick={() => onNavigate(idx)}
              className="relative py-2 group"
            >
              <span className={`font-mono text-[9px] tracking-[0.4em] transition-all ${
                current === idx ? 'text-brand-green' : 'text-brand-blue-med/40 group-hover:text-brand-blue-deep'
              }`}>
                {s.title}
              </span>
              {current === idx && (
                <motion.div
                  layoutId="nav-line"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-brand-green"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <a
            href={altHref}
            className="font-mono text-[9px] tracking-[0.3em] uppercase text-brand-blue-med/50 hover:text-brand-blue-deep transition-colors px-2.5 py-1.5 border border-brand-blue-deep/12 hover:border-brand-blue-deep/30"
          >
            {altLabel}
          </a>

          {/* CTA */}
          <a
            href="mailto:zerocogorg@gmail.com"
            className="hidden sm:inline-block bevelled px-6 py-2.5 bg-brand-green text-white font-black text-[9px] tracking-[0.3em] uppercase hover:bg-brand-blue-deep transition-all"
          >
            {cta}
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 border border-brand-blue-deep/12 flex flex-col items-center justify-center gap-1.5"
            aria-label={isEs ? 'Abrir menú' : 'Open menu'}
          >
            <motion.div animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6.5 : 0 }}
              className="w-5 h-px bg-brand-blue-deep" />
            <motion.div animate={{ opacity: menuOpen ? 0 : 1 }}
              className="w-5 h-px bg-brand-blue-deep" />
            <motion.div animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6.5 : 0 }}
              className="w-5 h-px bg-brand-blue-deep" />
          </button>

          <a
            href="https://demon2-production.up.railway.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-brand-blue-deep text-white text-[9px] uppercase tracking-widest font-black hover:bg-brand-blue-med transition-all bevelled"
          >
            <Zap size={12} className="animate-pulse" /> LIVE_DEMO
          </a>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8"
          >
            {sections.filter(s => !s.hidden).map((s, idx) => (
              <button
                key={s.id}
                onClick={() => { onNavigate(idx); setMenuOpen(false); }}
                className="group flex flex-col items-center"
              >
                <span className={`font-mono text-xs tracking-[0.6em] transition-all ${
                  current === idx ? 'text-brand-green' : 'text-brand-blue-med'
                }`}>{s.title}</span>
                {current === idx && (
                  <motion.div layoutId="mob-line" className="w-12 h-1 bg-brand-green mt-2" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// ─── Technical corner overlays ────────────────────────────────────────────────

const TechOverlays = ({ current }) => (
  <>
    <div className="fixed left-6 bottom-6 mono-tech text-[7px] text-brand-blue-deep/20">
      PROTOCOLO_ALINEACIÓN: {(current * 60).toFixed(2)} DEG_RAD
    </div>
    <div className="fixed right-6 bottom-6 flex items-center gap-3">
      <div className="mono-tech text-[7px] text-brand-blue-deep/20">
        SECTOR_ALINEADO_{current + 1}
      </div>
      <div className="w-8 h-8 border border-brand-blue-deep/10 flex items-center justify-center">
        <Settings size={12} className="text-brand-green/40 animate-spin-slow" />
      </div>
    </div>
  </>
);

// ─── Main SPA content (inside ClockworkProvider) ──────────────────────────────

const SpaContent = ({ lang }) => {
  const { setTarget } = useClockwork();
  const isEs = lang === 'es';
  const sections = T[lang].sections;

  const [current, setCurrent]   = useState(0);
  const [direction, setDirection] = useState(0);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [isMobile, setIsMobile]   = useState(false);
  const scrollLock = useRef(false);

  // Touch state
  const touchStart = useRef(null);
  const touchEnd   = useRef(null);
  const MIN_SWIPE  = 50;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    setTarget(current);
  }, [current, setTarget]);

  // Lock body scroll on desktop
  useEffect(() => {
    if (!isMobile) {
      document.body.classList.add('spa-active');
      return () => document.body.classList.remove('spa-active');
    }
  }, [isMobile]);

  const navigate = (newIdx) => {
    if (newIdx < 0 || newIdx >= sections.length || scrollLock.current) return;
    scrollLock.current = true;
    setDirection(newIdx > current ? 1 : -1);
    setCurrent(newIdx);
    setTimeout(() => { scrollLock.current = false; }, 900);
  };

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        let next = (current + 1) % sections.length;
        if (next === 6) next = 0; // Skip VII, wrap to start
        navigate(next);
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        let prev = (current - 1 + sections.length) % sections.length;
        if (prev === 6) prev = 5; // Skip VII, go to VI
        navigate(prev);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [current, sections.length]);

  // Wheel
  useEffect(() => {
    const onWheel = (e) => {
      if (scrollLock.current || isMobile) return;
      if (Math.abs(e.deltaY) > 20) {
        if (e.deltaY > 0 && current < sections.length - 1) {
          const next = current + 1;
          if (next === 6) return; // Skip VII
          navigate(next);
        }
        if (e.deltaY < 0 && current > 0) {
          const prev = current - 1;
          if (prev === 6) return; // Skip VII
          navigate(prev);
        }
      }
    };
    window.addEventListener('wheel', onWheel, { passive: true });
    return () => window.removeEventListener('wheel', onWheel);
  }, [current, isMobile, sections.length]);

  const onTouchStart = (e) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientY;
  };
  const onTouchMove  = (e) => { touchEnd.current = e.targetTouches[0].clientY; };
  const onTouchEnd   = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const dist = touchStart.current - touchEnd.current;
    if (dist > MIN_SWIPE) {
      let next = (current + 1) % sections.length;
      if (next === 6) next = 0; // Skip VII, wrap to start
      navigate(next);
    }
    if (dist < -MIN_SWIPE) {
      let prev = (current - 1 + sections.length) % sections.length;
      if (prev === 6) prev = 5; // Skip VII, go to VI
      navigate(prev);
    }
  };

  // Section renderers
  const renderSection = (idx) => {
    switch (idx) {
      case 0: return <HeroSection isEs={isEs} onNavigateDocs={() => navigate(6)} />;
      case 1: return <ProblemSection isEs={isEs} />;
      case 2: return <ContrastSection isEs={isEs} />;
      case 3: return <MechanismSection isEs={isEs} />;
      case 4: return <ValueSection   isEs={isEs} />;
      case 5: return <ClosingSection isEs={isEs} onNavigateDocs={() => navigate(6)} />;
      case 6: return <DocsSection    isEs={isEs} />;
      default: return null;
    }
  };

  return (
    <div
      className="relative w-screen h-screen select-none overflow-hidden font-sans bg-brand-white"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <ClockworkBackground />

      <SpaHeader
        isEs={isEs}
        current={current}
        sections={sections}
        onNavigate={navigate}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Desktop: full-screen animated SPA */}
      {!isMobile && (
        <main className="relative w-full h-full">
          <AnimatePresence mode="wait" custom={direction}>
            <PersistentReveal key={sections[current].id} direction={direction}>
              {renderSection(current)}
            </PersistentReveal>
          </AnimatePresence>
        </main>
      )}

      {/* Mobile: scrolling layout — onViewportEnter keeps clockwork background in sync */}
      {isMobile && (
        <div className="flex flex-col pt-20 overflow-x-hidden">
          {sections.map((s, idx) => (
            <motion.div
              key={s.id}
              id={s.id}
              onViewportEnter={() => setCurrent(idx)}
              viewport={{ amount: 0.2 }}
              className="w-full min-h-fit flex items-center justify-center py-16"
            >
              <div className="w-full px-6 py-8">
                {renderSection(idx)}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <TechOverlays current={current} />
    </div>
  );
};

// ─── Public export ────────────────────────────────────────────────────────────

export default function ZerocogApp({ lang = 'es' }) {
  return (
    <ClockworkProvider>
      <SpaContent lang={lang} />
    </ClockworkProvider>
  );
}
