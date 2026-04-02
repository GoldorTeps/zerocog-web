import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { processLogin } from '../access_config';
import { MainLayout } from '../layouts/MainLayout';
import { useLanguage } from '../context/LanguageContext';

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const emailRef = useRef(null);

  const { t } = useLanguage();

  useEffect(() => {
    // Autofocus on mount to improve UX
    emailRef.current?.focus();
    
    // Anticipar email si viene en el URL
    const emailParam = searchParams.get('email');
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trim and lowercase email for robustness against copy-paste / case errors
    const cleanEmail = email.trim().toLowerCase();
    
    if (processLogin(cleanEmail, password)) {
      navigate('/investor');
    } else {
      setError(t('login.error'));
    }
  };

  return (
    <MainLayout>
      <div className="flex items-center justify-center h-full p-4 md:p-6 pb-24 md:pb-6">
        <div className="w-full max-w-md relative">
          <div className="absolute -top-6 md:-top-12 -left-6 md:-left-12 w-12 md:w-24 h-12 md:h-24 border-t-2 border-l-2 border-[#00A86B]/50" />
          
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 md:p-10 shadow-2xl space-y-6 md:space-y-8 glass-isolation bevelled">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[#00A86B]/10 rounded-full mb-2 md:mb-4 border border-[#00A86B]/20">
                <Lock className="text-[#00A86B]" size={24} md:size={32} />
              </div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tighter uppercase font-heading text-[#0F2B46]">{t('login.title')}</h1>
              <p className="text-[8px] md:text-[10px] text-[#1E4F7A]/60 font-mono tracking-widest uppercase">{t('login.subtitle')}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-[#00A86B] tracking-[0.2em] uppercase ml-1">{t('login.email_label')}</label>
                <div className="relative text-black">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    ref={emailRef}
                    type="email" 
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder={t('login.placeholder_email')}
                    className="w-full bg-[#0F2B46]/5 text-[#0F2B46] border border-[#0F2B46]/10 py-4 pl-12 pr-4 focus:outline-none focus:border-[#00A86B] transition-colors font-light placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-[#00A86B] tracking-[0.2em] uppercase ml-1">{t('login.pass_label')}</label>
                <div className="relative text-black">
                  <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="password" 
                    name="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="••••••••"
                    className="w-full bg-[#0F2B46]/5 text-[#0F2B46] border border-[#0F2B46]/10 py-4 pl-12 pr-4 focus:outline-none focus:border-[#00A86B] transition-colors font-light placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-xs font-mono text-center animate-bounce">{error}</p>
              )}

              <button 
                type="submit"
                className="w-full py-4 md:py-5 bg-[#00A86B] text-white font-black tracking-widest uppercase hover:bg-[#0F2B46] transition-all duration-300 flex items-center justify-center gap-3 group text-sm md:text-base"
                style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }}
              >
                {t('login.btn_login')} <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>

            <div className="pt-6 border-t border-[#0F2B46]/5 flex items-center justify-between opacity-50">
               <span className="text-[9px] font-mono tracking-widest text-[#0F2B46]">{t('login.footer_secure')}</span>
               <span className="text-[9px] font-mono tracking-widest italic uppercase text-[#0F2B46]">{t('login.footer_sync')}</span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button 
              onClick={() => navigate('/')}
              className="text-[10px] font-mono text-gray-500 hover:text-[#00A86B] tracking-widest transition-colors uppercase"
            >
              {t('login.back')}
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
