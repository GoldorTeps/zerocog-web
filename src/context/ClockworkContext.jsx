import React, { createContext, useContext } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

const ClockworkContext = createContext();

export const ClockworkProvider = ({ children }) => {
  // Use a base MotionValue for raw input (scroll or index)
  const rawValue = useMotionValue(0);
  
  // Apply a spring for smoothness across all platforms
  const activeValue = useSpring(rawValue, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const setTarget = (value) => {
    // If it's a number, set directly.
    // If it's a continuous stream (like scroll), set directly to raw.
    rawValue.set(value);
  };

  return (
    <ClockworkContext.Provider value={{ activeValue, setTarget }}>
      {children}
    </ClockworkContext.Provider>
  );
};

export const useClockwork = () => {
  const context = useContext(ClockworkContext);
  if (!context) throw new Error('useClockwork must be used within a ClockworkProvider');
  return context;
};
