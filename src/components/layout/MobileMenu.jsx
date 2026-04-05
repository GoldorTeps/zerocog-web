import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { FileText, Database, Zap, Download, ExternalLink } from 'lucide-react';

export const MobileMenu = ({ isOpen, sections, current, onNavigate, onClose }) => {
  const { lang, setLang, t } = useLanguage();
  const [showDocs, setShowDocs] = React.useState(false);

  // We are bringing the documents from Architecture into here for the mobile view "desplegable"
  const documents = [
    { title: "One Page Summary", type: "DOCX", size: "0.8 MB", date: "Apr 01, 2026", url: "/assets/investors/1Zerocog_One_p.docx" },
    { title: "Technical Investor Brief", type: "DOCX", size: "3.2 MB", date: "Apr 01, 2026", url: "/assets/investors/2Zerocog_inv_br.docx" },
    { title: "Plan de Implementación", type: "DOCX", size: "1.4 MB", date: "Apr 01, 2026", url: "/assets/investors/3Zerocog_Implem_p.docx" },
    { title: "Análisis de Riesgos y Mitigación", type: "DOCX", size: "2.1 MB", date: "Apr 01, 2026", url: "/assets/investors/4Zerocog_a_reiesg_mitig.docx" },
    { title: "Diagrama de Arquitectura", type: "JPG", size: "1.1 MB", date: "Apr 01, 2026", url: "/assets/investors/diagram_a.jpg" },
    { title: "ZeroCog Interactive Pipeline Demo", type: "STREAMLIT", size: "LIVE", date: "External App", url: "https://zerocogdemo-appi7rtt7crpgf8cz36feqx.streamlit.app/" },
    { title: "Pipeline Backend Source Code", type: "GITHUB", size: "PUBLIC", date: "Repository", url: "https://github.com/GoldorTeps/zero_cog_DEMO" },
  ];
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="lg:hidden fixed inset-0 bg-white/95 backdrop-blur-2xl z-[55] flex flex-col items-center justify-center space-y-10"
        >
          {sections.map((section, idx) => (
            <button 
              key={section.id} 
              onClick={() => {
                setShowDocs(false);
                onNavigate(idx);
              }}
              className="group flex flex-col items-center"
            >
              <span className={`font-mono text-xs tracking-[0.6em] transition-all uppercase ${current === idx && !showDocs ? 'text-[#00A86B]' : 'text-[#1E4F7A]'}`}>
                {t(`nav.${section.id}`)}
              </span>
              {current === idx && !showDocs && (
                <motion.div layoutId="mobile-nav-line" className="w-12 h-1 bg-[#00A86B] mt-4" />
              )}
            </button>
          ))}
          
          <button 
            onClick={() => setShowDocs(!showDocs)}
            className="group flex flex-col items-center"
          >
            <span className={`font-mono text-xs tracking-[0.6em] transition-all uppercase ${showDocs ? 'text-[#00A86B]' : 'text-[#1E4F7A]'}`}>
              {t('nav.documentation') || 'VIII_DOCUMENTACIÓN'}
            </span>
            {showDocs && (
              <motion.div layoutId="mobile-nav-line" className="w-12 h-1 bg-[#00A86B] mt-4" />
            )}
          </button>
          
          <AnimatePresence>
            {showDocs && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="w-full max-w-[90vw] overflow-hidden flex flex-col items-center gap-4 ptr-4 pb-4"
              >
                <div className="w-full max-h-[40vh] overflow-y-auto px-4 space-y-3 custom-scrollbar">
                  {documents.map((doc, i) => (
                    <div key={i} className="bg-white/80 p-4 border border-[#0F2B46]/10 flex flex-col gap-3">
                      <div>
                        <h4 className="text-sm font-bold text-[#0F2B46] truncate">{doc.title}</h4>
                        <p className="text-[9px] text-gray-500 mt-1 uppercase tracking-widest font-mono">
                          {doc.type} • {doc.size}
                        </p>
                      </div>
                      {doc.type === 'STREAMLIT' ? (
                        <a href={doc.url} target="_blank" rel="noopener noreferrer" className="self-end flex items-center justify-center gap-2 px-3 py-1.5 bg-[#00A86B] text-white text-[9px] tracking-widest uppercase">
                          <Zap size={10} /> INICIAR
                        </a>
                      ) : doc.type === 'GITHUB' ? (
                         <a href={doc.url} target="_blank" rel="noopener noreferrer" className="self-end flex items-center justify-center gap-2 px-3 py-1.5 border border-[#1E4F7A]/20 text-[#0F2B46] text-[9px] tracking-widest uppercase">
                          CÓDIGO <ExternalLink size={10} />
                        </a>
                      ) : (
                         <a href={doc.url} download className="self-end flex items-center justify-center gap-2 px-3 py-1.5 border border-[#00A86B]/20 text-[#00A86B] text-[9px] tracking-widest uppercase">
                          DESCARGAR <Download size={10} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="flex items-center gap-6 font-mono text-xs tracking-widest text-[#1E4F7A]/40 mt-4 pointer-events-auto">
            <button 
              onClick={() => { setLang('es'); onClose(); }}
              className={`transition-colors hover:text-[#0F2B46] p-2 ${lang === 'es' ? 'text-[#00A86B] font-bold' : ''}`}
            >
              ES
            </button>
            <span className="opacity-30">/</span>
            <button 
              onClick={() => { setLang('en'); onClose(); }}
              className={`transition-colors hover:text-[#0F2B46] p-2 ${lang === 'en' ? 'text-[#00A86B] font-bold' : ''}`}
            >
              EN
            </button>
          </div>

          <button 
            onClick={() => {
              setShowDocs(false);
              onClose();
            }}
            className="mt-12 text-[10px] font-mono tracking-widest text-[#1E4F7A]/40 uppercase"
          >
            {t('common.close_panel') || 'Cerrar_Panel'}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
