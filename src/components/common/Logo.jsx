import React from 'react';

export const Logo = ({ variant = 'transparent', className = "" }) => {
  const bgClass = variant === 'white' ? 'bg-white shadow-sm ring-1 ring-[#0F2B46]/5' : '';
  
  return (
    <div className={`h-8 md:h-10 w-auto flex items-center justify-center transition-all duration-500 group-hover:scale-105 drop-shadow-sm p-1 overflow-hidden shrink-0 ${bgClass} ${className}`}>
      <img 
        src="/assets/logo_transp2.png" 
        alt="ZeroCog Logo" 
        className="h-full w-auto object-contain"
      />
    </div>
  );
};
