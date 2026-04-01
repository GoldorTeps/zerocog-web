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
    <div className="flex flex-col items-center text-center space-y-12">
      <div className="mono-tech">SECTOR_01 // INICIALIZACIÓN</div>
      <div className="relative">
        <h1 className="text-8xl lg:text-[10rem] font-black tracking-tighter text-[#0F2B46] leading-none">
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
        className="text-2xl lg:text-3xl font-light text-[#1E4F7A] max-w-3xl leading-relaxed"
      >
        La arquitectura de IA soberana que <span className="text-[#0F2B46] italic border-b border-[#00A86B]/30">recuerda</span> con precisión arquitectónica.
      </motion.p>
      
      <div className="flex gap-8 pt-6 pointer-events-auto">
        <a 
          href="mailto:zerocogorg@gmail.com"
          className="px-12 py-5 bg-[#00A86B] text-white font-black tracking-widest uppercase hover:bg-[#0F2B46] transition-all bevelled shadow-lg text-center flex items-center justify-center"
        >
          Iniciar_Contacto
        </a>
        <button 
          onClick={() => navigate('/login')}
          className="px-12 py-5 border border-[#0F2B46]/20 text-[#0F2B46] font-black tracking-widest uppercase hover:bg-[#0F2B46] hover:text-white transition-all bevelled"
        >
          Ver_Arquitectura
        </button>
      </div>
    </div>
  );
};

// --- Paradox Section ---
const ParadoxSection = () => (
  <div className="grid lg:grid-cols-2 gap-24 items-center">
    <div className="space-y-10 text-left">
      <div className="mono-tech">02 // LA_PARADOJA</div>
      <h2 className="text-6xl font-black text-[#0F2B46] leading-none">
        La Paradoja de la <br />
        <span className="text-[#00A86B]">IA Actual.</span>
      </h2>
      <p className="text-xl text-[#0C1A26] leading-relaxed opacity-90">
        Las IAs de hoy sufren de amnesia selectiva. Procesan millones de datos, pero olvidan el contexto de <span className="font-black italic underline decoration-[#00A86B]/30 underline-offset-4">quién eres tú</span> en el momento en que cierras la sesión.
      </p>
      <div className="space-y-6">
        {[
          "Memoria fragmentada entre sesiones.",
          "Dependencia de nubes públicas externas.",
          "Falta de continuidad lógica a largo plazo."
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-6 group">
            <div className="w-1 h-8 bg-[#00A86B]/40 group-hover:bg-[#00A86B] transition-all" />
            <span className="text-lg font-bold text-[#0F2B46]/80 group-hover:text-[#0F2B46] transition-colors italic">{item}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="relative h-[450px] flex items-center justify-center opacity-40 translate-x-12">
       <Gear size={500} color={BRAND.BLUE_MED} rotation={-120} teeth={56} opacity={0.3} />
       <div className="absolute scale-50">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
             <Cpu size={200} className="text-[#0F2B46]" />
          </motion.div>
       </div>
    </div>
  </div>
);

// --- Solution Section ---
const SolutionSection = () => (
  <div className="space-y-12">
    <div className="text-center space-y-6">
      <div className="mono-tech">04 // LA_SOLUCIÓN</div>
      <h2 className="text-6xl font-black text-[#0F2B46]">Ecosistema de Memoria Continua.</h2>
    </div>
    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
      <div className="glass-isolation bevelled overflow-hidden border border-[#00A86B]/20 group hover:scale-[1.02] transition-transform">
        <div className="glass-precision p-12 space-y-8 bg-[#00A86B]/5">
          <div className="flex items-center gap-4">
             <Lock size={32} className="text-[#00A86B]" />
             <h3 className="text-3xl font-black text-[#0F2B46]">Modo Soberano</h3>
          </div>
          <p className="text-[#0C1A26]/80 text-lg leading-relaxed">
            Ejecución local absoluta. Tus datos nunca abandonan tu hardware. Memoria persistente privada, encriptada a nivel de engranaje lógico.
          </p>
          <div className="pt-4 border-t border-[#00A86B]/10 flex justify-between items-center">
             <span className="mono-tech">STATUS: PROTECTED</span>
             <Zap size={20} className="text-[#00A86B] animate-pulse" />
          </div>
        </div>
      </div>
      
      <div className="glass-isolation bevelled overflow-hidden border border-[#1E4F7A]/10 group hover:scale-[1.02] transition-transform">
        <div className="glass-precision p-12 space-y-8 bg-[#1E4F7A]/5">
          <div className="flex items-center gap-4">
             <Globe size={32} className="text-[#1E4F7A]" />
             <h3 className="text-3xl font-black text-[#0F2B46]">Modo Externo</h3>
          </div>
          <p className="text-[#0C1A26]/80 text-lg leading-relaxed">
            Sincronización híbrida bajo demanda. Utiliza potencia de cálculo externa mientras mantienes el control de las llaves de acceso a tu memoria.
          </p>
          <div className="pt-4 border-t border-[#1E4F7A]/10 flex justify-between items-center">
             <span className="mono-tech">STATUS: ENCRYPTED_SYNC</span>
             <Shield size={20} className="text-[#1E4F7A]" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Use Cases ---
const UseCasesSection = () => (
  <div className="space-y-16">
    <div className="text-center space-y-6">
      <div className="mono-tech">03 // CASOS_DE_USO</div>
      <h2 className="text-6xl font-black text-[#0F2B46]">¿Qué puedes hacer con esto?</h2>
    </div>
    <div className="grid md:grid-cols-3 gap-8 text-left">
      {[
        { title: "Asistente Permanente", desc: "Un sistema que recuerda tus proyectos, preferencias y discusiones técnicas de hace meses como si hubieran ocurrido hoy.", icon: <UserCheck /> },
        { title: "Bóveda de Conocimiento", desc: "Ingesta de terabytes de documentación técnica que tu IA puede navegar con lógica arquitectónica instantánea.", icon: <Database /> },
        { title: "Agentes Continuos", desc: "Agentes que operan en segundo plano, manteniendo el estado de tareas complejas de larga duración sin pérdida de contexto.", icon: <Activity /> }
      ].map((use, i) => (
        <div key={i} className="glass-isolation bevelled overflow-hidden border border-[#1E4F7A]/5 group hover:border-[#00A86B]/40 transition-all">
          <div className="glass-precision p-10 space-y-6 h-full">
            <div className="w-14 h-14 bg-[#0F2B46]/5 flex items-center justify-center text-[#0F2B46] group-hover:bg-[#00A86B] group-hover:text-white transition-all">
               {use.icon}
            </div>
            <h3 className="text-2xl font-black text-[#0F2B46]">{use.title}</h3>
            <p className="text-[#0C1A26]/70 text-sm leading-relaxed">{use.desc}</p>
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
       <div className="absolute inset-0 flex items-center justify-center mono-tech text-[15rem] font-black opacity-5 select-none">
          COG
       </div>
    </div>
    <div className="space-y-12 text-left order-1 lg:order-2">
      <div className="mono-tech">05 // VALOR_DIFERENCIAL</div>
      <h2 className="text-6xl font-black text-[#0F2B46] leading-none">
        Por qué <br />
        <span className="text-[#00A86B]">ZeroCog?</span>
      </h2>
      <div className="space-y-8">
        {[
          { h: "Latencia Zero de Recuperación", p: "Nuestro motor de indexación mecánica recupera fragmentos de memoria en milisegundos." },
          { h: "Continuidad Arquitectónica", p: "Cada interacción construye una estructura lógica que no se degrada con el tiempo." },
          { h: "Privacidad por Geometría", p: "Tus datos se fragmentan matemáticamente fuera del alcance de terceros." }
        ].map((prop, i) => (
          <div key={i} className="space-y-2">
            <h3 className="text-xl font-black text-[#0F2B46] flex items-center gap-3">
              <div className="w-2 h-2 bg-[#00A86B] rotate-45" /> {prop.h}
            </h3>
            <p className="text-[#1E4F7A]/80 pl-5 border-l border-[#1E4F7A]/10 ml-1">{prop.p}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Contact ---
const ContactSection = () => (
  <div className="flex flex-col items-center text-center space-y-16">
    <div className="w-1 h-24 bg-[#00A86B]/40 shadow-glow animate-pulse" />
    <div className="space-y-6">
      <h2 className="text-7xl font-black text-[#0F2B46] tracking-tighter">Establece el Enlace.</h2>
      <p className="text-2xl text-[#1E4F7A]">La arquitectura soberana está lista para integrarse en tu ecosistema. Iniciemos la conversación.</p>
    </div>
    
    <div className="relative group">
      <div className="absolute inset-0 bg-[#00A86B]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <a href="mailto:zerocogorg@gmail.com" className="relative text-5xl font-black text-[#00A86B] hover:text-[#0F2B46] transition-colors underline underline-offset-8 decoration-1">
        zerocogorg@gmail.com
      </a>
    </div>

    <div className="grid grid-cols-3 gap-24 pt-12">
      {[
        { label: "LATITUD", val: "36.72° N" },
        { label: "LONGITUD", val: "4.42° W" },
        { label: "SISTEMA", val: "SINCRONIZADO" }
      ].map((item, i) => (
        <div key={i} className="space-y-3">
          <div className="mono-tech text-[10px] uppercase tracking-widest opacity-40">{item.label}</div>
          <div className="text-xl font-bold text-[#0F2B46] uppercase">{item.val}</div>
        </div>
      ))}
    </div>
  </div>
);

// --- Main Landing Page Logic ---
const LandingPage = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const scrollLock = React.useRef(false);

  const sections = [
    { id: 'hero', title: 'I_INICIO' },
    { id: 'paradox', title: 'II_PARADOJA' },
    { id: 'usecases', title: 'III_CASOS' },
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
    <MainLayout current={current}>
      {/* Scroll Navigation Pills */}
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
    </MainLayout>
  );
};

export default LandingPage;
