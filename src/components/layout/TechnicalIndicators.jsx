import React from 'react';
import { Settings } from 'lucide-react';
import { useMotionValue, useMotionValueEvent } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const TechValue = ({ value, transform = (v) => v, suffix = "" }) => {
  const isMV = typeof value === 'object' && value !== null && 'get' in value;
  const [display, setDisplay] = React.useState(isMV ? value.get() : value);
  const dummyValue = useMotionValue(0);
  const activeMV = isMV ? value : dummyValue;

  useMotionValueEvent(activeMV, "change", (latest) => {
    if (isMV) setDisplay(latest);
  });

  React.useEffect(() => {
    if (!isMV) setDisplay(value);
  }, [value, isMV]);

  return <>{transform(display)}{suffix}</>;
};

export const TechnicalIndicators = ({ current }) => {
  const { t } = useLanguage();
  return (
    <>
      <div className="fixed left-8 bottom-8 flex flex-col gap-2 pointer-events-none z-40">
        <div className="mono-tech text-[8px] opacity-20">
          {t('indicators.alignment')}: <TechValue value={current} transform={v => (v * 60).toFixed(2)} suffix=" DEG_RAD" />
        </div>
      </div>
      <div className="fixed right-8 bottom-8 flex items-center gap-4 pointer-events-none z-40">
        <div className="mono-tech opacity-20 text-[8px] uppercase tracking-widest">
          {t('indicators.sector')}_<TechValue value={current} transform={v => Math.round(v) + 1} />
        </div>
        <div className="w-10 h-10 border border-[#0F2B46]/10 flex items-center justify-center">
           <Settings size={14} className="text-[#00A86B]/40 animate-spin-slow" />
        </div>
      </div>
    </>
  );
};
