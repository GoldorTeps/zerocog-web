import React, { useState, useEffect } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import { BRAND } from '../constants/brand';
import { Gear } from './Gear';

/**
 * 3D Parallax Background for the Clockwork Palace.
 * @param {Object} props
 * @param {number|Object} props.current - The current section index or a MotionValue for fluid scroll-sync.
 */
export const ClockworkBackground = ({ current = 0 }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Detect if 'current' is a MotionValue (from useScroll/useSpring)
  const isMotionValue = typeof current === 'object' && current !== null && 'get' in current;
  const fallback = useMotionValue(0);
  const activeValue = isMotionValue ? current : fallback;

  // Sync fallback if 'current' changes as a number
  useEffect(() => {
    if (!isMotionValue) fallback.set(Number(current) || 0);
  }, [current, isMotionValue, fallback]);

  // --- Top-level Hooks (Required for React Rules) ---
  const rotateYBase = useTransform(activeValue, v => v * -45);
  const rotateXBase = useTransform(activeValue, v => v * 12);
  const zTranslate = useTransform(activeValue, v => v * -150);

  // Smooth combined rotations for the stage
  const rotateY = useTransform(rotateYBase, v => v + mousePos.x);
  const rotateX = useTransform(rotateXBase, v => v + mousePos.y);

  // Gear rotations
  const gear1Rot = useTransform(activeValue, v => v * 20);
  const gear2Rot = useTransform(activeValue, v => v * -40);
  const gear3Rot = useTransform(activeValue, v => v * 90);
  const gear4Rot = useTransform(activeValue, v => v * -60);

  // Layer rotations for the technical core (6 layers)
  const layer0Rot = useTransform(activeValue, v => v * 30);
  const layer1Rot = useTransform(activeValue, v => v * -50);
  const layer2Rot = useTransform(activeValue, v => v * 30);
  const layer3Rot = useTransform(activeValue, v => v * -50);
  const layer4Rot = useTransform(activeValue, v => v * 30);
  const layer5Rot = useTransform(activeValue, v => v * -50);
  const layerRotations = [layer0Rot, layer1Rot, layer2Rot, layer3Rot, layer4Rot, layer5Rot];

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth - 0.5) * 60,
        y: (e.clientY / window.innerHeight - 0.5) * 60
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 perspective-stage bg-brand-white overflow-hidden">
      <div className="blueprint-grid" />
      
      {/* 3D World Stage */}
      <motion.div 
        className="absolute inset-0 perspective-stage preserve-3d"
        style={{ rotateY, rotateX, z: zTranslate }}
      >
        {/* Layer -1000px: Base Machinery */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none preserve-3d" style={{ transform: 'translateZ(-1000px)' }}>
          <div className="relative w-full h-full flex items-center justify-center preserve-3d">
            <Gear size={1200} color={BRAND.BLUE_DEEP} rotation={gear1Rot} teeth={80} opacity={0.15} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 preserve-3d">
               <Gear size={800} color={BRAND.BLUE_MED} rotation={gear2Rot} teeth={48} opacity={0.1} />
            </div>
          </div>
        </div>

        {/* Layer -500px: Technical Core */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none preserve-3d" style={{ transform: 'translateZ(-500px)' }}>
          {layerRotations.map((rot, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border-2 border-brand-blue-med/5 preserve-3d"
              style={{
                width: 1000 - i * 140,
                height: 1000 - i * 140,
                rotate: rot
              }}
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
          <div className="absolute glass-precision border-brand-blue-deep/5 opacity-10 w-[2000px] h-[1000px]" style={{ transform: 'rotateX(55deg) translateZ(-200px)' }} />
        </div>

        {/* Layer +200px: Foreground Mechanics */}
        <div className="absolute inset-0 flex items-center justify-center preserve-3d">
          <div className="absolute top-0 left-0 preserve-3d">
            <Gear size={500} color={BRAND.BLUE_DEEP} rotation={gear3Rot} teeth={32} opacity={0.2} />
          </div>
          <div className="absolute bottom-0 right-0 rotate-180 preserve-3d">
            <Gear size={600} color={BRAND.GREEN} rotation={gear4Rot} teeth={36} opacity={0.25} />
          </div>
        </div>

        {/* Technical Conduits */}
        <div className="absolute inset-0 preserve-3d pointer-events-none" style={{ transform: 'translateZ(-300px)' }}>
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
        </div>
      </motion.div>
      <div className="scanline" />
    </div>
  );
};
