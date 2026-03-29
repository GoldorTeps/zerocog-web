import React from 'react';
import { motion } from 'framer-motion';
import { BRAND } from '../constants/brand';

/**
 * Gear component for the visual clockwork aesthetic.
 * @param {Object} props
 */
export const Gear = ({ size = 100, color = BRAND.BLUE_DEEP, rotation = 0, teeth = 12, opacity = 0.4 }) => {
  const toothDepth = size * 0.1;
  const innerRadius = size * 0.35;
  const outerRadius = size * 0.45;
  
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
             const angle = (i * 360 / teeth) * (Math.PI / 180);
             const nextAngle = ((i + 1) * 360 / teeth) * (Math.PI / 180);
             const midAngle = (angle + nextAngle) / 2;
             return `L ${size/2 + Math.cos(angle) * outerRadius} ${size/2 + Math.sin(angle) * outerRadius}
                     L ${size/2 + Math.cos(midAngle) * (outerRadius + toothDepth)} ${size/2 + Math.sin(midAngle) * (outerRadius + toothDepth)}
                     L ${size/2 + Math.cos(nextAngle) * outerRadius} ${size/2 + Math.sin(nextAngle) * outerRadius}`;
           }).join(' ')} Z`}
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
      <circle cx={size/2} cy={size/2} r={size * 0.05} fill={color} />
    </motion.svg>
  );
};
