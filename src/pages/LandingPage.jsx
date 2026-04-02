import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Zap, Lock, Globe, Database, Activity, UserCheck, Shield } from 'lucide-react';
import { BRAND } from '../constants/brand';
import { Gear } from '../components/Gear';
import { PersistentReveal } from '../components/PersistentReveal';
import { MainLayout } from '../layouts/MainLayout';

// --- Hero Section ---
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center text-center space-y-6 md:space-y-12">
      <div className="mono-tech">Fase_01 // Inicio</div>
      <div className="relative">
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-[#0F2B46] leading-none text-center">
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="inline-block"
          >ZERO</motion.span>
          <br />
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block text-[#00A86B]"
          >COG</motion.span>
        </h1>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg md:text-2xl lg:text-3xl font-light text-[#1E4F7A] max-w-3xl leading-relaxed px-4 md:px-0"
      >
        Infraestructura de memoria diseñada para permitir a la IA operar con <span className="text-[#0F2B46] italic border-b border-[#00A86B]/30">contexto real</span> sin exponer datos ni comprometer la privacidad.
      </motion.p>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 pt-6 pointer-events-auto w-full md:w-auto px-8 md:px-0">
        <a
          href="mailto:zerocogorg@gmail.com"
          className="w-full md:w-auto px-8 md:px-12 py-4 md:py-5 bg-[#00A86B] text-white font-black tracking-widest uppercase hover:bg-[#0F2B46] transition-all bevelled shadow-lg text-center flex items-center justify-center text-sm md:text-base"
        >
          Iniciar_Contacto
        </a>
        <button
          onClick={() => navigate('/login')}
          className="w-full md:w-auto px-8 md:px-12 py-4 md:py-5 border border-[#0F2B46]/20 text-[#0F2B46] font-black tracking-widest uppercase hover:bg-[#0F2B46] hover:text-white transition-all bevelled text-sm md:text-base"
        >
          Ver_Arquitectura
        </button>
      </div>
    </div>
  );
};

// --- Tension Section (Replacing Paradox) ---
const ParadoxSection = () => (
  <div className="space-y-8 md:space-y-16">
    <div className="text-center">
      <div className="mono-tech">02 // TENSIÓN</div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#0F2B46]/10 border border-[#0F2B46]/10 shadow-2xl">
      {/* IA ACTUAL */}
      <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 lg:p-16 space-y-8 md:space-y-10 group hover:bg-[#0F2B46]/5 transition-colors">
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-3xl md:text-5xl font-black text-[#0F2B46] tracking-tighter leading-none italic uppercase">
            El límite de la <br />
            <span className="text-gray-400">IA actual</span>
          </h2>
          <p className="text-base md:text-xl text-[#1E4F7A]/90 leading-relaxed font-light italic">
            Las IAs actuales procesan información, pero no mantienen contexto. <br />
            <span className="border-b border-gray-100">Operan por sesión, no sobre memoria estructurada.</span>
          </p>
        </div>
        
        <div className="space-y-6">
          {[
            "El contexto desaparece al cerrar la sesión.",
            "Dependencia de infraestructuras externas.",
            "Sin memoria operativa a largo plazo."
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-6 group/item">
              <div className="w-1 h-8 bg-gray-300 group-hover/item:bg-[#0F2B46] transition-all" />
              <span className="text-lg font-bold text-[#0F2B46]/60 group-hover/item:text-[#0F2B46] transition-colors italic">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* IA FUTURA */}
      <div className="bg-white/90 backdrop-blur-md p-8 md:p-12 lg:p-16 space-y-8 md:space-y-10 group hover:bg-[#00A86B]/5 transition-colors border-l-0 lg:border-l border-t lg:border-t-0 border-[#0F2B46]/10">
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-3xl md:text-5xl font-black text-[#0F2B46] tracking-tighter leading-none italic uppercase">
            El dilema de la <br />
            <span className="text-[#00A86B]">IA futura</span>
          </h2>
          <p className="text-base md:text-xl text-[#0F2B46]/80 leading-relaxed font-light italic">
            Cuando la IA tenga acceso continuo a información contextual, el problema deja de ser técnico. <br />
            <span className="border-b border-[#00A86B]/10">Pasa a ser una cuestión de control.</span>
          </p>
        </div>

        <div className="space-y-6">
          {[
            "¿Quién es propietario de la memoria generada?",
            "¿Dónde reside realmente ese contexto?",
            "¿Se utiliza para asistir o para extraer valor del usuario?"
          ].map((item, i) => (
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

// --- Solution Section ---
const SolutionSection = () => (
  <div className="space-y-8 md:space-y-12">
    <div className="text-center space-y-4 md:space-y-6">
      <div className="mono-tech">04 // LA_SOLUCIÓN</div>
      <h2 className="text-4xl md:text-6xl font-black text-[#0F2B46]">Arquitectura de Memoria Soberana</h2>
      <p className="text-lg md:text-xl text-[#1E4F7A]/80 font-light max-w-2xl mx-auto italic px-4 md:px-0">
        Una misma memoria, dos formas de operar según el nivel de control y capacidad requerido.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto px-4 md:px-0">
      {/* MODO SOBERANO */}
      <div className="glass-isolation bevelled overflow-hidden border border-[#00A86B]/20 group hover:scale-[1.02] transition-transform">
        <div className="glass-precision p-8 md:p-12 space-y-6 md:space-y-8 bg-[#00A86B]/5 h-full flex flex-col">
          <div className="flex items-center gap-4">
            <Lock size={28} className="text-[#00A86B]" />
            <h3 className="text-2xl md:text-3xl font-black text-[#0F2B46]">Modo Soberano</h3>
          </div>
          <div className="space-y-6 flex-1">
            <p className="text-[#1E4F7A]/90 text-lg leading-relaxed font-normal italic">
              La IA opera directamente sobre los datos dentro del entorno controlado.
            </p>
            <ul className="space-y-3">
              {[
                "Ejecución local.",
                "Sin transferencias externas de información sensible.",
                "Máximo control sobre datos y contexto."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#0C1A26]/70 text-sm">
                  <div className="w-1.5 h-1.5 bg-[#00A86B] rotate-45" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-6 border-t border-[#00A86B]/10 flex justify-between items-center">
            <span className="mono-tech text-[10px] tracking-widest text-[#00A86B]">LOCAL · PRIVATE · OFFLINE-CAPABLE</span>
            <Zap size={20} className="text-[#00A86B] animate-pulse" />
          </div>
        </div>
      </div>
      
      {/* MODO EXTERNO */}
      <div className="glass-isolation bevelled overflow-hidden border border-[#1E4F7A]/10 group hover:scale-[1.02] transition-transform">
        <div className="glass-precision p-8 md:p-12 space-y-6 md:space-y-8 bg-[#1E4F7A]/5 h-full flex flex-col">
          <div className="flex items-center gap-4">
            <Globe size={28} className="text-[#1E4F7A]" />
            <h3 className="text-2xl md:text-3xl font-black text-[#0F2B46]">Modo Externo</h3>
          </div>
          <div className="space-y-6 flex-1">
            <p className="text-[#1E4F7A]/90 text-lg leading-relaxed font-normal italic">
              Uso de modelos avanzados manteniendo separación entre contexto y datos reales.
            </p>
            <ul className="space-y-3">
              {[
                "Procesos de anonimización antes de cualquier transferencia.",
                "Compatibilidad con distintos proveedores de IA.",
                "Escalabilidad bajo demanda."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#0C1A26]/70 text-sm">
                  <div className="w-1.5 h-1.5 bg-[#1E4F7A]/30 rotate-45" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-6 border-t border-[#1E4F7A]/10 flex justify-between items-center">
            <span className="mono-tech text-[10px] tracking-widest text-[#1E4F7A]">ANONYMIZED · REMOTE · MODEL-AGNOSTIC</span>
            <Shield size={20} className="text-[#1E4F7A]" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Use Cases (Now Operativa) ---
const UseCasesSection = () => (
  <div className="space-y-12 md:space-y-16">
    <div className="text-center space-y-4 md:space-y-6">
      <div className="mono-tech">03 // OPERATIVA</div>
      <h2 className="text-4xl md:text-6xl font-black text-[#0F2B46]">¿Qué permite esta infraestructura?</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left px-4 md:px-0">
      {[
        { 
          title: "Entorno Personal", 
          text: "Una memoria persistente diseñada para permitir a la IA operar con tu contexto sin exponer tus datos.",
          bullets: [
            "Recuperación de información personal con continuidad entre sesiones.",
            "Asistencia basada en historial estructurado, no solo conversación.",
            "Control sobre qué información se utiliza y cuándo."
          ],
          icon: <UserCheck size={28} /> 
        },
        { 
          title: "Entorno PyME", 
          text: "Una IA capaz de responder sobre tu propio negocio porque trabaja sobre tu información operativa.",
          bullets: [
            "Consulta sobre clientes, presupuestos o decisiones con contexto real.",
            "Acceso estructurado a correos, documentos y operaciones.",
            "Uso de información propia en lugar de respuestas genéricas."
          ],
          icon: <Activity size={28} /> 
        },
        { 
          title: "Infraestructura / Enterprise", 
          text: "Una capa de memoria diseñada para integrarse con sistemas existentes sin exponer información sensible.",
          bullets: [
            "Control de acceso sobre el contexto compartido.",
            "Compatibilidad con modelos locales y externos bajo reglas definidas.",
            "Trazabilidad del uso de información en interacciones con IA."
          ],
          icon: <Shield size={28} /> 
        }
      ].map((use, i) => (
        <div key={i} className="glass-isolation bevelled overflow-hidden border border-[#1E4F7A]/5 group hover:border-[#00A86B]/40 transition-all flex flex-col">
          <div className="glass-precision p-10 space-y-6 flex-1 flex flex-col">
            <div className="w-14 h-14 bg-[#0F2B46]/5 flex items-center justify-center text-[#0F2B46] group-hover:bg-[#00A86B] group-hover:text-white transition-all shrink-0">
               {use.icon}
            </div>
            <div className="space-y-4 flex-1">
              <h3 className="text-2xl font-black text-[#0F2B46]">{use.title}</h3>
              <p className="text-[#1E4F7A]/90 text-sm leading-relaxed font-normal italic border-l-2 border-[#00A86B]/30 pl-4">
                {use.text}
              </p>
              <ul className="space-y-3 pt-2">
                {use.bullets.map((bullet, bi) => (
                  <li key={bi} className="text-[#0C1A26]/70 text-[13px] leading-snug flex gap-3">
                    <span className="text-[#00A86B] shrink-0">•</span>
                    <span>{bullet}</span>
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

// --- Value Prop ---
const ValuePropSection = () => (
  <div className="grid lg:grid-cols-2 gap-20 items-center">
    <div className="relative h-[400px] flex items-center justify-center order-2 lg:order-1">
      <Gear size={450} color={BRAND.GREEN} rotation={45} teeth={32} opacity={0.1} />
      <div className="absolute inset-0 flex items-center justify-center mono-tech text-[15rem] font-black opacity-5 select-none font-mono">
        COG
      </div>
    </div>
    <div className="space-y-12 text-left order-1 lg:order-2">
      <div className="mono-tech">05 // VALOR</div>
      <h2 className="text-4xl md:text-6xl font-black text-[#0F2B46] leading-none uppercase italic tracking-tighter">
        Ventaja <br />
        <span className="text-[#00A86B]">Estructural</span>
      </h2>
      <div className="space-y-8">
        {[
          { h: "Control de datos por diseño", p: "Arquitectura planteada para que el dato no abandone su dominio sin control explícito." },
          { h: "Continuidad operativa", p: "Diseñada para mantener contexto estructurado a largo plazo, más allá del histórico conversacional." },
          { h: "Desacoplamiento del modelo", p: "La inteligencia es intercambiable. La memoria permanece." }
        ].map((prop, i) => (
          <div key={i} className="space-y-2 group">
            <h3 className="text-xl font-black text-[#0F2B46] flex items-center gap-3 group-hover:text-[#00A86B] transition-colors">
              <div className="w-2 h-2 bg-[#00A86B] rotate-45" /> {prop.h}
            </h3>
            <p className="text-[#1E4F7A]/80 pl-5 border-l border-[#00A86B]/20 ml-1 leading-relaxed">
              {prop.p}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Contact ---
const ContactSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center text-center space-y-16">
      <div className="w-1 h-24 bg-[#00A86B]/40 shadow-glow animate-pulse" />
      <div className="space-y-4 md:space-y-6 px-4 md:px-0">
        <h2 className="text-4xl md:text-7xl font-black text-[#0F2B46] tracking-tighter italic uppercase text-center">Acceso y contacto</h2>
        <p className="text-lg md:text-2xl text-[#1E4F7A]/80 font-light max-w-3xl leading-relaxed italic text-center">
          Documentación disponible bajo acceso controlado. Para contexto, colaboración o integración, este es el punto de entrada.
        </p>
      </div>
      
      <div className="flex flex-col items-center gap-8 md:gap-12 w-full px-8 md:px-0">
        <button 
          onClick={() => navigate('/login')}
          className="w-full md:w-auto px-10 md:px-16 py-4 md:py-6 bg-[#00A86B] text-white font-black tracking-[0.2em] uppercase hover:bg-[#0F2B46] transition-all bevelled shadow-2xl scale-100 md:scale-110 text-center text-sm md:text-base"
        >
          Acceso a documentación técnica
        </button>

        <div className="relative group text-center">
          <div className="absolute inset-0 bg-[#00A86B]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <a href="mailto:zerocogorg@gmail.com" className="relative text-xl md:text-3xl font-black text-[#0F2B46]/40 hover:text-[#00A86B] transition-colors font-mono tracking-tighter break-all">
            zerocogorg@gmail.com
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 pt-12 border-t border-[#0F2B46]/5 w-full max-w-4xl px-8 md:px-0">
        {[
          { label: "STATUS", val: "IN DEVELOPMENT" },
          { label: "DOCS", val: "AVAILABLE" },
          { label: "ACCESS", val: "CONTROLLED" }
        ].map((item, i) => (
          <div key={i} className="space-y-1 md:space-y-3 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mono-tech text-[8px] md:text-[10px] uppercase tracking-widest opacity-40">{item.label}</div>
            <div className="text-base md:text-lg font-bold text-[#0F2B46] uppercase font-mono tracking-tight">{item.val}</div>
          </div>
        ))}
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

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

    // Release the lock after the main cinematic transition duration
    setTimeout(() => {
      scrollLock.current = false;
    }, 850); // Slightly longer than transition for safety
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') navigateToSection((current + 1) % sections.length);
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') navigateToSection((current - 1 + sections.length) % sections.length);
    };

    const handleWheel = (e) => {
      if (scrollLock.current) return;

      if (Math.abs(e.deltaY) > 20) {
        if (e.deltaY > 0) {
          navigateToSection((current + 1) % sections.length);
        } else {
          navigateToSection((current - 1 + sections.length) % sections.length);
        }
      }
    };

    window.addEventListener('keydown', handleKey);
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [current]);

  return (
    <MainLayout current={current} sections={sections}>
      {/* Desktop Navigation UI */}
      {!isMobile && (
        <div className="fixed top-0 left-1/2 -translate-x-1/2 h-32 flex items-center z-50 pointer-events-none">
          <div className="flex gap-12 pointer-events-auto">
            {sections.map((section, idx) => (
              <button key={section.id} onClick={() => navigateToSection(idx)} className="relative py-2 group">
                <span className={`font-mono text-[9px] tracking-[0.4em] transition-all uppercase ${current === idx ? 'text-[#00A86B]' : 'text-[#1E4F7A]/40 group-hover:text-[#0F2B46]'}`}>
                  {section.title}
                </span>
                {current === idx && (
                  <motion.div layoutId="nav-pill" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00A86B]" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {isMobile ? (
        /* Mobile Scroll Stack */
        <div className="flex flex-col pt-20">
          {sections.map((section, idx) => (
            <motion.div
              key={section.id}
              id={section.id}
              onViewportEnter={() => setCurrent(idx)}
              viewport={{ amount: 0.5 }}
              className="w-full min-h-[60vh] flex items-center justify-center py-12 md:py-20"
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
        /* Desktop Cinematic View */
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
