import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { 
  FileText, 
  TrendingUp, 
  ShieldCheck, 
  Download, 
  Calendar, 
  Users, 
  ExternalLink,
  ChevronRight,
  Database,
  Lock
} from 'lucide-react';
import { validateAccess } from '../access_config';
import { MainLayout } from '../layouts/MainLayout';
import { PersistentReveal } from '../components/PersistentReveal';

const InvestorArea = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    const key = searchParams.get('key');
    const exp = searchParams.get('exp');
    const authorized = validateAccess(key, exp);
    
    if (!authorized) {
       navigate('/login');
    } else {
       setIsAuthorized(true);
    }
  }, [searchParams, navigate]);

  const documents = [
    { title: "Plan de Implementación", type: "DOCX", size: "1.2 MB", date: "Mar 29, 2026", url: "/assets/investors/Plan de Implementación.docx" },
    { title: "Análisis de Riesgos Técnicos y Mitigaciones", type: "DOCX", size: "2.4 MB", date: "Mar 29, 2026", url: "/assets/investors/Análisis de Riesgos Técnicos y Mitigaciones.docx" },
    { title: "OnePage", type: "DOCX", size: "0.8 MB", date: "Mar 29, 2026", url: "/assets/investors/OnePage.docx" },
    { title: "Technical Investor Brief V4", type: "DOCX", size: "3.1 MB", date: "Mar 29, 2026", url: "/assets/investors/Technical Investor Brief V4.docx" },
  ];

  const metrics = [
    { label: "Active Tokens", value: "24.8M", trend: "+14.2%" },
    { label: "Storage Capacity", value: "1.2 PB", trend: "Scalable" },
    { label: "Sovereign Nodes", value: "124", trend: "+8" },
    { label: "API Response", value: "14ms", trend: "-2ms" },
  ];

  if (isAuthorized === null) return <MainLayout><div className="h-full flex items-center justify-center mono-tech animate-pulse">AUTHORIZING_CHANNEL...</div></MainLayout>;

  return (
    <MainLayout>
      <header className="px-8 lg:px-16 h-24 flex items-center justify-between border-b border-[#0F2B46]/5 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4 ml-48">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#00A86B] rounded-full animate-pulse" />
            <span className="text-[9px] font-mono text-[#00A86B] tracking-widest uppercase italic">Verified Session</span>
          </div>
        </div>

        <button 
          onClick={() => navigate('/')}
          className="text-[10px] font-mono text-gray-400 hover:text-[#0F2B46] transition-colors flex items-center gap-2 uppercase tracking-widest"
        >
          SALIR <ExternalLink size={12} />
        </button>
      </header>

      <div className="overflow-y-auto h-[calc(100vh-6rem)] custom-scrollbar">
        <main className="max-w-7xl mx-auto px-8 lg:px-16 py-16 space-y-24">
          
          <section className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-6xl font-black tracking-tighter leading-none text-[#0F2B46]">
                Inmortalidad <br />
                <span className="text-[#00A86B]">Digital Arquitectónica.</span>
              </h1>
              <p className="text-xl text-[#1E4F7A]/80 font-light max-w-xl leading-relaxed">
                Bienvenido al portal exclusivo para inversores de ZeroCog. Aquí encontrará el estado actual del despliegue, métricas estratégicas y documentación técnica detallada para el ciclo 2026.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m, i) => (
                <div key={i} className="p-6 bg-[#0F2B46]/5 border border-[#0F2B46]/5 hover:border-[#00A86B]/30 transition-all group glass-isolation">
                  <p className="text-[10px] font-mono text-gray-500 mb-1 uppercase tracking-widest">{m.label}</p>
                  <p className="text-3xl font-black text-[#0F2B46] group-hover:text-[#00A86B] transition-colors">{m.value}</p>
                  <p className="text-xs text-[#00A86B] mt-2 font-mono">{m.trend}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex justify-between items-end border-b border-[#0F2B46]/10 pb-4">
              <h3 className="text-2xl font-bold flex items-center gap-3 text-[#0F2B46]">
                <FileText className="text-[#00A86B]" /> Repositorio de Materiales
              </h3>
              <span className="text-xs font-mono text-gray-500">LAST_UPDATE: 29_MAR_2026</span>
            </div>

            <div className="grid gap-px bg-[#0F2B46]/10 border border-[#0F2B46]/10">
              {documents.map((doc, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-sm p-8 flex flex-col md:flex-row md:items-center justify-between group hover:bg-[#00A86B]/5 transition-colors">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-[#0F2B46]/5 flex items-center justify-center text-[#00A86B]">
                      <Database size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold group-hover:text-[#00A86B] transition-colors text-[#0F2B46]">{doc.title}</h4>
                      <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-mono">
                        {doc.type} • {doc.size} • {doc.date}
                      </p>
                    </div>
                  </div>
                  <a 
                    href={doc.url} 
                    download 
                    className="mt-6 md:mt-0 flex items-center justify-center gap-3 px-6 py-3 border border-[#00A86B]/20 hover:bg-[#00A86B] hover:text-white transition-all font-bold text-xs tracking-widest uppercase text-[#00A86B] hover:border-[#00A86B] pointer-events-auto"
                  >
                    DESCARGAR <Download size={16} />
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h3 className="text-2xl font-bold flex items-center gap-3 text-[#0F2B46]">
                <TrendingUp className="text-[#00A86B]" /> Roadmap Estratégico
              </h3>
              <div className="space-y-6">
                 {[
                   { q: "Q4 2025", title: "Kernel Alpha", status: "Completed", desc: "Despliegue del motor de persistencia inicial." },
                   { q: "Q1 2026", title: "Mainnet V1", status: "In Progress", desc: "Apertura de nodos soberanos para socios estratégicos." },
                   { q: "Q3 2026", title: "Unfold Scale", status: "Upcoming", desc: "Escalado masivo de almacenamiento distribuido." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-8 relative">
                     {i !== 2 && <div className="absolute left-6 top-12 bottom-0 w-px bg-[#0F2B46]/10" />}
                     <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${item.status === 'Completed' ? 'border-[#00A86B] bg-[#00A86B]/10' : 'border-[#0F2B46]/10 bg-[#0F2B46]/5'}`}>
                        <ChevronRight size={20} className={item.status === 'Completed' ? 'text-[#00A86B]' : 'text-[#1E4F7A]/30'} />
                     </div>
                     <div className="flex-1 pb-12">
                       <div className="flex items-center gap-3 mb-2">
                         <span className="text-xs font-mono text-gray-500">{item.q}</span>
                         <span className={`text-[9px] px-2 py-0.5 font-mono border ${item.status === 'Completed' ? 'border-[#00A86B] text-[#00A86B]' : 'border-gray-400 text-gray-400 uppercase'}`}>{item.status}</span>
                       </div>
                       <h5 className="text-xl font-bold text-[#0F2B46]">{item.title}</h5>
                       <p className="text-[#1E4F7A]/80 mt-2 text-sm leading-relaxed">{item.desc}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </div>

            <div className="space-y-12">
              <div className="p-8 border border-[#00A86B]/30 bg-[#00A86B]/5 space-y-6 glass-isolation">
                <Lock className="text-[#00A86B]" />
                <h4 className="text-xl font-bold text-[#0F2B46]">Seguridad de Datos</h4>
                <p className="text-sm text-[#1E4F7A]/80 leading-relaxed">
                  Toda la documentación está cifrada de punto a punto siguiendo el protocolo Sovereign_Arch. No comparta este enlace privado.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E4F7A]/40">Contacto Directo</h4>
                <div className="p-6 bg-[#0F2B46]/5 border border-[#0F2B46]/5 flex items-center gap-4 glass-isolation group hover:border-[#00A86B]/30 transition-all">
                  <div className="w-10 h-10 bg-[#1E4F7A] flex items-center justify-center rounded-full text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Users size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0F2B46]">Founding Team</p>
                    <p className="text-xs text-[#00A86B] font-mono">investors@zerocog.ia</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="py-12 border-t border-[#0F2B46]/5 flex flex-col md:flex-row justify-between items-center opacity-30 gap-6">
            <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">© 2026 ZEROCOG SYSTEM // ALL RIGHTS RESERVED</div>
            <div className="flex gap-8">
               <span className="text-[10px] font-mono">LAT_REF: 36.72 N</span>
               <span className="text-[10px] font-mono">LON_REF: 4.42 W</span>
            </div>
          </footer>
        </main>
      </div>
    </MainLayout>
  );
};

export default InvestorArea;
