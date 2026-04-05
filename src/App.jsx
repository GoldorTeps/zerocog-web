import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Globe, Cpu, Zap, Mail, ChevronRight, ChevronLeft, Target, Settings, Layers, Database, Lock, UserCheck, Activity } from 'lucide-react'

// --- Brand Guidelines (V1.0) ---
const BRAND = {
  WHITE: "#FFFFFF",
  BLUE_DEEP: "#0F2B46",
  BLUE_MED: "#1E4F7A",
  GREEN: "#00A86B",
  DARK_TEXT: "#0C1A26",
  GRAY_LIGHT: "#F2F4F7",
  GRAY_MED: "#919699"
}

// --- Clockwork Components ---

const Gear = ({ size = 100, color = BRAND.BLUE_DEEP, rotation = 0, teeth = 12, opacity = 0.4 }) => {
  const toothDepth = size * 0.1
  const innerRadius = size * 0.35
  const outerRadius = size * 0.45
  
  return (
    <motion.svg 
      width={size} 
      height={size} 
      viewBox={`0 0 ${size} ${size}`}
      animate={{ rotate: rotation }}
      transition={{ type: "spring", stiffness: 40, damping: 20 }}
      className="gear-sync"
      style={{ opacity }}
    >
      <circle cx={size/2} cy={size/2} r={innerRadius} fill="none" stroke={color} strokeWidth="1.5" opacity="0.4" />
      <path 
        d={`M ${size/2} ${size/2 - outerRadius} 
           ${[...Array(teeth)].map((_, i) => {
             const angle = (i * 360 / teeth) * (Math.PI / 180)
             const nextAngle = ((i + 1) * 360 / teeth) * (Math.PI / 180)
             const midAngle = (angle + nextAngle) / 2
             return `L ${size/2 + Math.cos(angle) * outerRadius} ${size/2 + Math.sin(angle) * outerRadius}
                     L ${size/2 + Math.cos(midAngle) * (outerRadius + toothDepth)} ${size/2 + Math.sin(midAngle) * (outerRadius + toothDepth)}
                     L ${size/2 + Math.cos(nextAngle) * outerRadius} ${size/2 + Math.sin(nextAngle) * outerRadius}`
           }).join(' ')} Z`}
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
      <circle cx={size/2} cy={size/2} r={size * 0.05} fill={color} />
    </motion.svg>
  )
}

const ClockworkBackground = ({ current }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth - 0.5) * 60, // Increased amplitude from 40 to 60
        y: (e.clientY / window.innerHeight - 0.5) * 60 // Increased amplitude from 40 to 60
      })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <div className="fixed -inset-[5%] pointer-events-none z-0 perspective-stage bg-brand-white overflow-hidden">
      <div className="blueprint-grid" />
      
      {/* 3D World Stage - Increased Amplitude & 6-Section stop calibration */}
      <motion.div 
        className="absolute inset-0 perspective-stage preserve-3d"
        animate={{ 
          rotateY: current * -45 + mousePos.x, // Each stop is 45 degrees
          rotateX: current * 12 + mousePos.y,  // Increased vertical pivot per stop
          z: current * -150,                   // Increased depth amplitude
        }}
        transition={{ type: "spring", stiffness: 12, damping: 18, mass: 2.5 }}
      >
        {/* Layer -1000px: Base Machinery */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none preserve-3d" style={{ transform: 'translateZ(-1000px)' }}>
          <div className="relative w-full h-full flex items-center justify-center preserve-3d">
            <Gear size={1200} color={BRAND.BLUE_DEEP} rotation={current * 20} teeth={80} opacity={0.15} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 preserve-3d">
               <Gear size={800} color={BRAND.BLUE_MED} rotation={current * -40} teeth={48} opacity={0.1} />
            </div>
          </div>
        </div>

        {/* Layer -500px: Technical Core */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none preserve-3d" style={{ transform: 'translateZ(-500px)' }}>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border-2 border-brand-blue-med/5 preserve-3d"
              style={{
                width: 1000 - i * 140,
                height: 1000 - i * 140,
              }}
              animate={{ 
                rotate: current * (i % 2 === 0 ? 30 : -50),
              }}
              transition={{ type: "spring", stiffness: 15, damping: 25 }}
            >
              {[...Array(24)].map((_, j) => (
                <div 
                  key={j}
                  className="absolute top-0 left-1/2 w-1 h-4 bg-brand-blue-med/15"
                  style={{ 
                    transform: `translateX(-50%) rotate(${j * (360/24)}deg)`,
                    transformOrigin: `0 ${ (1000 - i * 140) / 2 }px`
                  }}
                />
              ))}
            </motion.div>
          ))}
          
          {/* Crystalline Brand Slabs */}
          <div className="absolute glass-precision border-brand-blue-deep/5 opacity-10 w-[2000px] h-[1000px]" style={{ transform: 'rotateX(55deg) translateZ(-200px)' }} />
        </div>

        {/* Layer +200px: Foreground Mechanics */}
        <div className="absolute inset-0 flex items-center justify-center preserve-3d">
          <div className="absolute top-0 left-0 preserve-3d">
            <Gear size={500} color={BRAND.BLUE_DEEP} rotation={current * 90} teeth={32} opacity={0.2} />
          </div>
          <div className="absolute bottom-0 right-0 rotate-180 preserve-3d">
            <Gear size={600} color={BRAND.GREEN} rotation={current * -60} teeth={36} opacity={0.25} />
          </div>
        </div>

        {/* Technical Conduits */}
        <motion.div 
          className="absolute inset-0 preserve-3d pointer-events-none"
          style={{ transform: 'translateZ(-300px)' }}
        >
          <svg className="w-full h-full opacity-15">
             <defs>
               <linearGradient id="tech-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                 <stop offset="0%" stopColor={BRAND.GREEN} />
                 <stop offset="100%" stopColor={BRAND.BLUE_MED} />
               </linearGradient>
             </defs>
             <line x1="15%" y1="15%" x2="85%" y2="85%" stroke="url(#tech-grad)" strokeWidth="1" className="tech-line" />
             <line x1="85%" y1="15%" x2="15%" y2="85%" stroke="url(#tech-grad)" strokeWidth="1" className="tech-line" />
          </svg>
        </motion.div>

      </motion.div>
      
      <div className="scanline" />
    </div>
  )
}

const PersistentReveal = ({ children, direction }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: direction * 50, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: direction * -50, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-24"
    >
      {/* Firefox Compatibility: Split glass-isolation/bevelled from glass-precision */}
      <div className="w-full max-w-7xl z-10 glass-isolation bevelled overflow-visible md:overflow-hidden shadow-none border border-brand-blue-deep/5">
        <div className="glass-precision p-6 md:p-12 lg:p-16 w-full h-full">
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-brand-green/30" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-brand-green/30" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-brand-green/30" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-brand-green/30" />
          
          {children}
        </div>
      </div>
    </motion.div>
  )
}

// --- Content Sections ---

const HeroSection = () => (
  <div className="flex flex-col items-center text-center space-y-6 md:space-y-12">
    <div className="mono-tech">SECTOR_01 // INICIALIZACIÓN</div>
    <div className="relative">
      <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-brand-blue-deep leading-none">
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
          className="inline-block text-brand-green"
        >COG</motion.span>
      </h1>
    </div>
    
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-lg md:text-2xl lg:text-3xl font-light text-brand-blue-med max-w-3xl leading-relaxed px-4"
    >
      La arquitectura de IA soberana que <span className="text-brand-blue-deep italic">recuerda</span> con precisión arquitectónica.
    </motion.p>
    
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 pt-6 w-full px-8 md:px-0 max-w-sm md:max-w-none">
      <button className="w-full md:w-auto px-8 md:px-12 py-4 md:py-5 bg-brand-green text-white font-black tracking-widest uppercase hover:bg-brand-blue-deep transition-all bevelled shadow-lg text-sm md:text-base">
        Acceder_Memoria
      </button>
      <button className="w-full md:w-auto px-8 md:px-12 py-4 md:py-5 border-brand-blue-deep/20 text-brand-blue-deep font-black tracking-widest uppercase hover:bg-brand-blue-deep hover:text-white transition-all bevelled text-sm md:text-base">
        Ver_Arquitectura
      </button>
    </div>
  </div>
)

const ParadoxSection = () => (
  <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
    <div className="space-y-6 md:space-y-10 text-left">
      <div className="mono-tech">02 // LA_PARADOJA</div>
      <h2 className="text-4xl md:text-6xl font-black text-brand-blue-deep leading-none">
        La Paradoja de la <br />
        <span className="text-brand-green">IA Actual.</span>
      </h2>
      <p className="text-lg text-brand-dark-text leading-relaxed opacity-90">
        Las IAs de hoy sufren de amnesia selectiva. Procesan millones de datos, pero olvidan el contexto de <span className="font-black italic underline decoration-brand-green/30 underline-offset-4">quién eres tú</span> en el momento en que cierras la sesión.
      </p>
      <div className="space-y-4 md:space-y-6">
        {[
          "Memoria fragmentada entre sesiones.",
          "Dependencia de nubes públicas externas.",
          "Falta de continuidad lógica a largo plazo."
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 md:gap-6 group">
            <div className="w-1 h-6 md:h-8 bg-brand-green/40 group-hover:bg-brand-green transition-all" />
            <span className="text-base md:text-lg font-bold text-brand-blue-deep/80 group-hover:text-brand-blue-deep transition-colors italic">{item}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="relative h-64 md:h-[450px] flex items-center justify-center opacity-40 lg:translate-x-12 overflow-visible">
       <div className="absolute scale-75 md:scale-100">
         <Gear size={500} color={BRAND.BLUE_MED} rotation={-120} teeth={56} opacity={0.3} />
       </div>
       <div className="absolute scale-50 md:scale-75">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
             <Cpu size={150} className="text-brand-blue-deep" />
          </motion.div>
       </div>
    </div>
  </div>
)

const SolutionSection = () => (
  <div className="space-y-8 md:space-y-12">
    <div className="text-center space-y-4 md:space-y-6">
      <div className="mono-tech">03 // LA_SOLUCIÓN</div>
      <h2 className="text-4xl md:text-6xl font-black text-brand-blue-deep">Ecosistema de Memoria Continua.</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto px-4">
      <div className="glass-isolation bevelled overflow-hidden border border-brand-green/20 group hover:scale-[1.02] transition-transform">
        <div className="glass-precision p-8 md:p-12 space-y-6 md:space-y-8 bg-brand-green/5">
          <div className="flex items-center gap-4">
             <Lock size={28} className="text-brand-green" />
             <h3 className="text-2xl md:text-3xl font-black text-brand-blue-deep">Modo Soberano</h3>
          </div>
          <p className="text-brand-dark-text/80 text-base md:text-lg leading-relaxed">
            Ejecución local absoluta. Tus datos nunca abandonan tu hardware. Memoria persistente privada, encriptada a nivel de engranaje lógico.
          </p>
          <div className="pt-4 border-t border-brand-green/10 flex justify-between items-center">
             <span className="mono-tech text-[8px] md:text-[10px]">STATUS: PROTECTED</span>
             <Zap size={18} className="text-brand-green animate-pulse" />
          </div>
        </div>
      </div>
      
      <div className="glass-isolation bevelled overflow-hidden border border-brand-blue-med/10 group hover:scale-[1.02] transition-transform">
        <div className="glass-precision p-8 md:p-12 space-y-6 md:space-y-8 bg-brand-blue-med/5">
          <div className="flex items-center gap-4">
             <Globe size={28} className="text-brand-blue-med" />
             <h3 className="text-2xl md:text-3xl font-black text-brand-blue-deep">Modo Externo</h3>
          </div>
          <p className="text-brand-dark-text/80 text-base md:text-lg leading-relaxed">
            Sincronización híbrida bajo demanda. Utiliza potencia de cálculo externa mientras mantienes el control de las llaves de acceso a tu memoria.
          </p>
          <div className="pt-4 border-t border-brand-blue-med/10 flex justify-between items-center">
             <span className="mono-tech text-[8px] md:text-[10px]">STATUS: ENCRYPTED_SYNC</span>
             <Shield size={18} className="text-brand-blue-med" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

const UseCasesSection = () => (
  <div className="space-y-12 md:space-y-16 py-8">
    <div className="text-center space-y-4 md:space-y-6">
      <div className="mono-tech">04 // CASOS_DE_USO</div>
      <h2 className="text-4xl md:text-6xl font-black text-brand-blue-deep">¿Qué puedes hacer con esto?</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left px-4">
      {[
        { title: "Asistente Permanente", desc: "Un sistema que recuerda tus proyectos, preferencias y discusiones técnicas de hace meses como si hubieran ocurrido hoy.", icon: <UserCheck /> },
        { title: "Bóveda de Conocimiento", desc: "Ingesta de terabytes de documentación técnica que tu IA puede navegar con lógica arquitectónica instantánea.", icon: <Database /> },
        { title: "Agentes Continuos", desc: "Agentes que operan en segundo plano, manteniendo el estado de tareas complejas de larga duración sin pérdida de contexto.", icon: <Activity /> }
      ].map((use, i) => (
        <div key={i} className="glass-isolation bevelled overflow-hidden border border-brand-blue-med/5 group hover:border-brand-green/40 transition-all">
          <div className="glass-precision p-8 md:p-10 space-y-4 md:space-y-6 h-full">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-blue-deep/5 flex items-center justify-center text-brand-blue-deep group-hover:bg-brand-green group-hover:text-white transition-all">
               {React.cloneElement(use.icon, { size: 20 })}
            </div>
            <h3 className="text-xl md:text-2xl font-black text-brand-blue-deep">{use.title}</h3>
            <p className="text-brand-dark-text/70 text-sm leading-relaxed">{use.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const ValuePropSection = () => (
  <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
    <div className="relative h-64 md:h-[400px] flex items-center justify-center order-2 lg:order-1">
       <div className="absolute scale-75 md:scale-100">
         <Gear size={450} color={BRAND.GREEN} rotation={45} teeth={32} opacity={0.1} />
       </div>
       <div className="absolute inset-0 flex items-center justify-center mono-tech text-[8rem] md:text-[15rem] font-black opacity-5 select-none">
          COG
       </div>
    </div>
    <div className="space-y-8 md:space-y-12 text-left order-1 lg:order-2 px-4">
      <div className="mono-tech">05 // VALOR_DIFERENCIAL</div>
      <h2 className="text-4xl md:text-6xl font-black text-brand-blue-deep leading-none">
        Por qué <br />
        <span className="text-brand-green">ZeroCog?</span>
      </h2>
      <div className="space-y-6 md:space-y-8">
        {[
          { h: "Latencia Zero de Recuperación", p: "Nuestro motor de indexación mecánica recupera fragmentos de memoria en milisegundos." },
          { h: "Continuidad Arquitectónica", p: "Cada interacción construye una estructura lógica que no se degrada con el tiempo." },
          { h: "Privacidad por Geometría", p: "Tus datos se fragmentan matemáticamente fuera del alcance de terceros." }
        ].map((prop, i) => (
          <div key={i} className="space-y-2">
            <h3 className="text-lg md:text-xl font-black text-brand-blue-deep flex items-center gap-3">
              <div className="w-2 h-2 bg-brand-green rotate-45" /> {prop.h}
            </h3>
            <p className="text-brand-blue-med/80 pl-5 border-l border-brand-blue-med/10 ml-1 text-sm md:text-base">{prop.p}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const ContactSection = () => (
  <div className="flex flex-col items-center text-center space-y-8 md:space-y-16 py-8">
    <div className="w-1 h-12 md:h-24 bg-brand-green/40 shadow-glow animate-pulse" />
    <div className="space-y-4 md:space-y-6 px-4">
      <h2 className="text-4xl md:text-7xl font-black text-brand-blue-deep tracking-tighter">Únete a la Unfold.</h2>
      <p className="text-xl md:text-2xl text-brand-blue-med">Colaboraciones selectas para el despliegue de 2026.</p>
    </div>
    
    <div className="relative group px-4">
      <div className="absolute inset-0 bg-brand-green/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <a href="mailto:zerocogorg@gmail.com" className="relative text-2xl md:text-5xl font-black text-brand-green hover:text-brand-blue-deep transition-colors underline underline-offset-8 decoration-1 break-all">
        zerocogorg@gmail.com
      </a>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 pt-12">
      {[
        { label: "LATITUD", val: "36.72° N" },
        { label: "LONGITUD", val: "4.42° W" },
        { label: "SISTEMA", val: "SINCRONIZADO" }
      ].map((item, i) => (
        <div key={i} className="space-y-2 md:space-y-3">
          <div className="mono-tech text-[8px] md:text-[10px]">{item.label}</div>
          <div className="text-lg md:text-xl font-bold text-brand-blue-deep">{item.val}</div>
        </div>
      ))}
    </div>
  </div>
)

const TeamSection = () => (
  <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center h-full pt-8 lg:pt-0">
    <div className="space-y-6 md:space-y-8 text-left order-2 lg:order-1 px-4">
      <div className="mono-tech">06 // EQUIPO_FUNDADOR</div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-blue-deep leading-none">
        Arquitectura Húmeda. <br />
        <span className="text-brand-green">Soberanía Real.</span>
      </h2>
      
      <div className="p-6 md:p-8 border border-brand-blue-med/10 bg-brand-blue-deep/5 space-y-4">
        <h3 className="text-2xl md:text-3xl font-black text-brand-blue-deep">David Janer Pérez</h3>
        <p className="text-brand-blue-med text-sm md:text-base italic font-medium leading-relaxed">
          David · Arquitecto. Sistemas distribuidos, privacidad por diseño, estándares abiertos. ZeroCog es su apuesta por una IA que recuerda sin espiar.
        </p>
        
        <div className="w-12 h-1 bg-brand-green/40 mt-4 mb-2" />
        <p className="text-brand-dark-text/80 text-sm italic border-l-2 border-brand-green/30 pl-4 py-1 leading-relaxed">
          "La IA no necesita tus datos. <br className="hidden md:block" />Puede entender tu mundo sin poseerlo."
        </p>
        
        <a href="https://www.linkedin.com/in/david-janer-p%C3%A9rez" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-brand-green hover:text-brand-blue-deep transition-colors font-black mt-6 uppercase tracking-wider text-xs md:text-sm">
           <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
             <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
           </svg>
           <span>Conectar en LinkedIn</span>
        </a>
      </div>
    </div>
    
    <div className="order-1 lg:order-2 w-full max-w-xs md:max-w-sm mx-auto relative aspect-[4/5] flex items-center justify-center overflow-hidden grayscale contrast-125 border border-brand-blue-med/10 shadow-2xl glass-isolation bevelled group mt-6 lg:mt-0">
        <div className="absolute inset-0 bg-brand-blue-deep/5 mix-blend-multiply z-10 pointer-events-none group-hover:bg-brand-green/5 transition-colors" />
        <img src="/assets/david-profile.png" alt="David Janer" className="w-full h-full object-cover z-0 opacity-80" />
        
        {/* Decorative mechanical overlays */}
        <div className="absolute top-4 right-4 text-brand-green scale-[0.6] md:scale-75 opacity-50 z-20">
            <Gear size={60} color={BRAND.GREEN} rotation={0} teeth={12} opacity={0.6} />
        </div>
        <div className="absolute bottom-2 left-2 mono-tech text-white z-20 mix-blend-overlay font-bold text-[8px] md:text-[10px] tracking-[0.4em]">
           ID: D.JANER_001
        </div>
    </div>
  </div>
)

// --- Main App Logic ---

export default function App() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const sections = [
    { id: 'hero', title: 'I_INICIO' },
    { id: 'paradox', title: 'II_PARADOJA' },
    { id: 'solution', title: 'III_SOLUCIÓN' },
    { id: 'usecases', title: 'IV_CASOS' },
    { id: 'value', title: 'V_VALOR' },
    { id: 'team', title: 'VI_EQUIPO' },
    { id: 'contact', title: 'VII_DESPLIEGUE' },
  ]

  const navigate = (newIdx) => {
    if (newIdx === current) return
    setDirection(newIdx > current ? 1 : -1)
    setCurrent(newIdx)
    setMenuOpen(false)
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') navigate((current + 1) % sections.length)
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') navigate((current - 1 + sections.length) % sections.length)
    }
    
    let lastTime = 0
    const handleWheel = (e) => {
      const currentTime = new Date().getTime()
      if (currentTime - lastTime < 1000) return 
      
      if (e.deltaY > 50) {
        navigate((current + 1) % sections.length)
        lastTime = currentTime
      }
      if (e.deltaY < -50) {
        navigate((current - 1 + sections.length) % sections.length)
        lastTime = currentTime
      }
    }

    window.addEventListener('keydown', handleKey)
    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => {
      window.removeEventListener('keydown', handleKey)
      window.removeEventListener('wheel', handleWheel)
    }
  }, [current])

  // --- Touch Swipe Logic for Mobile ---
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  
  const minSwipeDistance = 50 

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientY)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientY)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isUpSwipe = distance > minSwipeDistance
    const isDownSwipe = distance < -minSwipeDistance
    
    if (isUpSwipe) navigate((current + 1) % sections.length)
    if (isDownSwipe) navigate((current - 1 + sections.length) % sections.length)
  }

  return (
    <div 
      className="relative w-screen h-screen select-none overflow-hidden font-sans bg-brand-white"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <ClockworkBackground current={current} />
      
      {/* Persitent Nav - Cleaner & Lighter */}
      <nav className="fixed top-0 left-0 right-0 h-20 md:h-32 px-6 md:px-12 flex items-center justify-between z-50">
        <div className="flex items-center gap-4 md:gap-6">
          <div className="w-8 h-8 md:w-10 md:h-10 border border-brand-blue-deep/20 flex items-center justify-center p-1.5 md:p-2">
             <div className="w-full h-full bg-brand-green/20" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-black text-brand-blue-deep tracking-tighter">ZEROCOG</span>
            <span className="mono-tech text-[6px] md:text-[7px]">SISTEMA_SOBERANO_V1.5</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10 xl:gap-16">
          {sections.map((section, idx) => (
            <button key={section.id} onClick={() => navigate(idx)} className="relative py-2 group">
              <span className={`font-mono text-[9px] tracking-[0.4em] transition-all ${current === idx ? 'text-brand-green' : 'text-brand-blue-med/40 group-hover:text-brand-blue-deep'}`}>
                {section.title}
              </span>
              {current === idx && (
                <motion.div layoutId="nav-pill" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-green" />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-12 h-12 border border-brand-blue-deep/10 flex items-center justify-center bg-brand-white/80 backdrop-blur-md z-[100] relative"
          aria-label="Toggle Menu"
        >
          <div className="flex flex-col gap-1.5 items-center">
            <motion.div 
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
              className="w-6 h-0.5 bg-brand-blue-deep" 
            />
            <motion.div 
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-brand-blue-deep" 
            />
            <motion.div 
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
              className="w-6 h-0.5 bg-brand-blue-deep" 
            />
          </div>
        </button>

        <div className="hidden md:block mono-tech text-brand-blue-med opacity-40">SOVEREIGN_ARCH</div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed inset-0 bg-brand-white/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center space-y-8"
            >
              {sections.map((section, idx) => (
                <button 
                  key={section.id} 
                  onClick={() => navigate(idx)}
                  className="group flex flex-col items-center"
                >
                  <span className={`font-mono text-xs tracking-[0.6em] transition-all ${current === idx ? 'text-brand-green' : 'text-brand-blue-med'}`}>
                    {section.title}
                  </span>
                  {current === idx && (
                    <motion.div layoutId="mobile-nav-line" className="w-12 h-1 bg-brand-green mt-2" />
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Persistent Content Container */}
      <main className="relative w-full h-full">
        <AnimatePresence mode="wait" custom={direction}>
          <PersistentReveal key={sections[current].id} direction={direction}>
            {current === 0 && <HeroSection />}
            {current === 1 && <ParadoxSection />}
            {current === 2 && <SolutionSection />}
            {current === 3 && <UseCasesSection />}
            {current === 4 && <ValuePropSection />}
            {current === 5 && <TeamSection />}
            {current === 6 && <ContactSection />}
          </PersistentReveal>
        </AnimatePresence>
      </main>

      {/* Technical corner overlays */}
      <div className="fixed left-8 bottom-8 mono-tech text-[8px] opacity-20">
        PROTOCOLO_ALINEACIÓN: { (current * 60).toFixed(2) } DEG_RAD
      </div>
      <div className="fixed right-8 bottom-8 flex items-center gap-4">
        <div className="mono-tech opacity-20">SECTOR_ALINEADO_{current + 1}</div>
        <div className="w-10 h-10 border border-brand-blue-deep/10 flex items-center justify-center">
           <Settings size={14} className="text-brand-green/40 animate-spin-slow" />
        </div>
      </div>
    </div>
  )
}
