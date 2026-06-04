import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Menu,
  X,
  ChevronDown,
  CheckCircle2,
  PlayCircle,
  ShieldCheck,
  FileText,
  Gavel,
  Map as MapIcon,
  MapPin,
  Clock,
  ChevronRight,
  MessageSquare,
  Mail,
  Instagram,
  Facebook,
  Award,
  Zap,
  CreditCard,
  Headphones,
  ArrowLeft,
  MessageCircle,
  Phone
} from 'lucide-react';
import { motion } from 'framer-motion';
import dbdLogo from './dbd-badge.jpg';

interface PageProps {
  setCurrentPage: (page: string) => void;
}

const Navbar = ({ setCurrentPage }: PageProps) => {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false); // 👈 เพิ่ม State สำหรับเปิด/ปิด Dropdown

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    setCurrentPage('home');
    setIsOpen(false);

    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const currentLanguage = i18n.language || 'en';

  // จัดระเบียบข้อมูลภาษาใหม่ให้เรียกใช้ง่ายขึ้น
  const languages = [
    { code: 'en', flag: '🇬🇧', short: 'EN', full: 'English' },
    { code: 'th', flag: '🇹🇭', short: 'TH', full: 'ภาษาไทย' },
    { code: 'ko', flag: '🇰🇷', short: 'KO', full: '한국어' },
    { code: 'ja', flag: '🇯🇵', short: 'JA', full: '日本語' },
    { code: 'it', flag: '🇮🇹', short: 'IT', full: 'Italiano' },
    { code: 'es', flag: '🇪🇸', short: 'ES', full: 'Español' },
    { code: 'fr', flag: '🇫🇷', short: 'FR', full: 'Français' },
    { code: 'ru', flag: '🇷🇺', short: 'RU', full: 'Русский' },
    { code: 'nl', flag: '🇳🇱', short: 'NL', full: 'Nederlands' },
    { code: 'de', flag: '🇩🇪', short: 'DE', full: 'Deutsch' },
    { code: 'da', flag: '🇩🇰', short: 'DA', full: 'Dansk' },
    { code: 'sv', flag: '🇸🇪', short: 'SV', full: 'Svenska' }
  ];

  const currentLangData = languages.find(l => l.code === currentLanguage) || languages[0];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          <div
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <img
              src="/gumpunmuaythailogo.png"
              alt="Gumpun Muay Thai Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = "https://ui-avatars.com/api/?name=GMT&background=e60000&color=fff&rounded=true";
              }}
            />
            <span className="text-lg md:text-xl font-black tracking-tighter text-white uppercase hidden sm:block group-hover:text-[#e9c349] transition-colors">
              GUMPUN MUAY THAI
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-3 xl:gap-6 flex-1 justify-end ml-4">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-[#e9c349] font-bold uppercase text-[10px] xl:text-xs 2xl:text-sm tracking-wider hover:text-white transition-colors text-center whitespace-nowrap">
              {t('navbar.home')}
            </a>
            <a href="#visa-comparison" onClick={(e) => handleNavClick(e, 'visa-comparison')} className="text-white/80 hover:text-white transition-colors font-bold uppercase text-[10px] xl:text-xs 2xl:text-sm tracking-wider text-center whitespace-nowrap">
              {t('navbar.visa_comparison')}
            </a>
            <a href="#visa-process" onClick={(e) => handleNavClick(e, 'visa-process')} className="text-white/80 hover:text-white transition-colors font-bold uppercase text-[10px] xl:text-xs 2xl:text-sm tracking-wider text-center whitespace-nowrap">
              {t('navbar.visa_process')}
            </a>
            <a href="#partner-camps" onClick={(e) => handleNavClick(e, 'partner-camps')} className="text-white/80 hover:text-white transition-colors font-bold uppercase text-[10px] xl:text-xs 2xl:text-sm tracking-wider text-center whitespace-nowrap">
              {t('navbar.partner_camps')}
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-white/80 hover:text-white transition-colors font-bold uppercase text-[10px] xl:text-xs 2xl:text-sm tracking-wider text-center whitespace-nowrap">
              {t('navbar.contact')}
            </a>

            {/* --- CUSTOM DROPDOWN DESKTOP --- */}
            <div className="relative flex items-center border-l border-white/20 pl-3 xl:pl-5 ml-1 xl:ml-2">

              {/* ปุ่มกดเรียก Dropdown */}
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 bg-[#131313] text-white text-[10px] xl:text-xs 2xl:text-sm font-bold border border-white/30 rounded-md px-2 py-1.5 outline-none cursor-pointer hover:border-[#e9c349] transition-colors"
              >
                <span className="text-base leading-none">{currentLangData.flag}</span>
                <span>{currentLangData.short}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180 text-[#e9c349]' : 'text-white/50'}`} />
              </button>

              {/* ฉากใสๆ บังพื้นหลัง กดเพื่อปิดเมนู */}
              {isLangOpen && (
                <div className="fixed inset-0 z-40" onClick={() => setIsLangOpen(false)}></div>
              )}

              {/* กล่องเมนูตัวเลือก */}
              <div
                className={`absolute right-0 top-full mt-3 w-44 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-2xl z-50 overflow-hidden transition-all origin-top-right duration-200 ${isLangOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                  }`}
              >
                <div className="max-h-[60vh] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-black/20 [&::-webkit-scrollbar-thumb]:bg-[#e60000]/50 hover:[&::-webkit-scrollbar-thumb]:bg-[#e60000] [&::-webkit-scrollbar-thumb]:rounded-full">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-xs font-bold transition-colors flex items-center gap-3 ${currentLanguage === lang.code
                        ? 'text-[#e9c349] bg-white/5'
                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                      <span className="text-base">{lang.flag}</span>
                      <span>{lang.full}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* ----------------------------- */}
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#131313] border-b border-white/10 px-4 py-6 space-y-4 shadow-2xl overflow-y-auto max-h-[calc(100vh-80px)]">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="block text-[#e9c349] font-bold uppercase text-sm">
            {t('navbar.home')}
          </a>
          <a href="#visa-comparison" onClick={(e) => handleNavClick(e, 'visa-comparison')} className="block text-white/80 font-bold uppercase text-sm">
            {t('navbar.visa_comparison')}
          </a>
          <a href="#visa-process" onClick={(e) => handleNavClick(e, 'visa-process')} className="block text-white/80 font-bold uppercase text-sm">
            {t('navbar.visa_process')}
          </a>
          <a href="#partner-camps" onClick={(e) => handleNavClick(e, 'partner-camps')} className="block text-white/80 font-bold uppercase text-sm">
            {t('navbar.partner_camps')}
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block text-white/80 font-bold uppercase text-sm">
            {t('navbar.contact')}
          </a>

          {/* --- LANGUAGE GRID MOBILE --- */}
          <div className="pt-6 mt-4 border-t border-white/10 flex flex-col gap-3 pb-6">
            <label className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Select Language</label>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`py-3 px-2 flex items-center justify-center gap-2 rounded-lg text-xs font-bold transition-all ${currentLanguage === lang.code
                    ? 'bg-[#e9c349]/10 text-[#e9c349] border border-[#e9c349]/30'
                    : 'bg-white/5 text-white/60 border border-transparent hover:bg-white/10'
                    }`}
                >
                  <span className="text-base leading-none">{lang.flag}</span>
                  <span>{lang.full}</span>
                </button>
              ))}
            </div>
          </div>
          {/* ----------------------------- */}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { t } = useTranslation();

  const handleScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/background.jpg"
          alt="Muay Thai Background"
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#131313] via-transparent to-[#131313]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* 💡 เพิ่ม text-balance และ break-words เพื่อให้หัวข้อภาษาเยอรมัน/รัสเซีย ไม่ล้นขอบ */}
            <h1 className="font-black uppercase mb-8 flex flex-col text-balance break-words">
              <span className="text-3xl md:text-5xl text-white/80 tracking-[0.2em] mb-2">{t('hero.title_1')}</span>
              <span className="text-7xl md:text-[7.5rem] lg:text-[8.5rem] text-[#e60000] tracking-tighter leading-[0.85] mb-4" style={{ textShadow: '0 0 40px rgba(230,0,0,0.5)' }}>
                {t('hero.title_2')}
              </span>
              <span className="text-5xl md:text-6xl lg:text-7xl text-white tracking-tighter leading-tight mt-2">
                {t('hero.title_3')} <span className="text-[#e9c349]">{t('hero.title_4')}</span>
              </span>
            </h1>
            <p className="text-[#e9c349] font-bold text-[1rem] md:text-xl uppercase tracking-tight mb-8 text-balance leading-snug">
              {t('hero.subtitle')}
            </p>
            <p className="text-white/60 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="space-y-4 mb-10">
              {[1, 2, 3].map((num) => (
                // 💡 เพิ่ม items-start และ flex-shrink-0 ที่ไอคอน เผื่อข้อความยาวจนตกบรรทัด ไอคอนจะได้ไม่เบี้ยว
                <div key={num} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#e60000] flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-white font-bold uppercase text-xs md:text-sm tracking-widest leading-relaxed break-words">{t(`hero.feature_${num}`)}</span>
                </div>
              ))}
            </div>

            {/* 💡 ปรับปุ่มให้เป็น flex-1 บนมือถือ และใส่ h-auto ให้ข้อความในปุ่มซ้อนบรรทัดได้ถ้าคำแปลยาวมาก */}
            <div className="flex flex-wrap gap-4">
              <a href="#partner-camps" onClick={(e) => handleScroll(e, 'partner-camps')} className="bg-[#e60000] text-white px-6 md:px-8 py-4 font-black uppercase tracking-tighter text-base md:text-lg flex items-center justify-center text-center gap-2 hover:bg-red-700 transition-all flex-1 sm:flex-none min-h-[60px] h-auto">
                <span>{t('hero.btn_choose_city')}</span> <ChevronRight size={24} className="flex-shrink-0" />
              </a>
              <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="border border-white/20 text-white px-6 md:px-8 py-4 font-black uppercase tracking-tighter text-base md:text-lg hover:bg-white/10 transition-all flex items-center justify-center text-center flex-1 sm:flex-none min-h-[60px] h-auto">
                {t('hero.btn_check_eligibility')}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="aspect-video bg-black rounded-lg overflow-hidden border border-white/10 shadow-2xl relative">
              <video
                src="/gumpunmuaythaivideo.mp4"
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
              />
              {/* 💡 ปรับป้ายกำกับวิดีโอให้รองรับข้อความยาว */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] bg-black/60 px-2 py-1.5 rounded inline-block break-words max-w-full leading-tight">
                  {t('hero.video_label')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhatWeDo = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <ShieldCheck className="text-[#e60000]" size={40} />,
      title: t('whatwedo.srv_1_title'),
      desc: t('whatwedo.srv_1_desc')
    },
    {
      icon: <FileText className="text-[#e60000]" size={40} />,
      title: t('whatwedo.srv_2_title'),
      desc: t('whatwedo.srv_2_desc')
    },
    {
      icon: <Gavel className="text-[#e60000]" size={40} />,
      title: t('whatwedo.srv_3_title'),
      desc: t('whatwedo.srv_3_desc')
    },
    {
      icon: <MapIcon className="text-[#e60000]" size={40} />,
      title: t('whatwedo.srv_4_title'),
      desc: t('whatwedo.srv_4_desc')
    }
  ];

  return (
    <section className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-[#e9c349] font-bold uppercase text-xs tracking-[0.3em] mb-2">{t('whatwedo.subtitle')}</p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter text-balance break-words">{t('whatwedo.title')}</h2>
          <p className="text-white/60 mt-4 max-w-2xl leading-relaxed">
            {t('whatwedo.description')}
          </p>
        </div>

        {/* 💡 เพิ่ม items-stretch ที่ grid เพื่อบังคับให้ลูกๆ (การ์ด) สูงเท่ากันหมด */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              // 💡 ใส่ h-full และ flex flex-col ให้ตัวการ์ดยืดเต็มพื้นที่
              className="bg-[#222] p-8 border-l-4 border-[#e60000] hover:bg-[#2a2a2a] transition-all flex flex-col h-full"
            >
              <div className="mb-6 flex-shrink-0">{s.icon}</div>
              <h3 className="text-lg font-black text-white uppercase mb-4 leading-tight break-words">{s.title}</h3>
              {/* 💡 ใส่ flex-grow เพื่อให้คำอธิบายดันตัวเองกินพื้นที่ว่างทั้งหมด */}
              <p className="text-white/50 text-sm leading-relaxed flex-grow">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VisaComparison = () => {
  const { t } = useTranslation();

  const handleScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const edVisaDetails = [
    { label: t('visacomparison.labels.stay_period'), values: [t('visacomparison.ed.stay_period')] },
    { label: t('visacomparison.labels.re_application'), values: [t('visacomparison.ed.re_application')] },
    { label: t('visacomparison.labels.location'), values: [t('visacomparison.ed.location')] },
    { label: t('visacomparison.labels.training'), values: [t('visacomparison.ed.training')] },
    { label: t('visacomparison.labels.documents'), values: [t('visacomparison.ed.doc_1'), t('visacomparison.ed.doc_2')] },
    { label: t('visacomparison.labels.timeline'), values: [t('visacomparison.ed.timeline')] }
  ];

  const dtvVisaDetails = [
    { label: t('visacomparison.labels.stay_period'), values: [t('visacomparison.dtv.stay_period')] },
    { label: t('visacomparison.labels.re_application'), values: [t('visacomparison.dtv.re_application')] },
    { label: t('visacomparison.labels.location'), values: [t('visacomparison.dtv.location')] },
    { label: t('visacomparison.labels.training'), values: [t('visacomparison.dtv.training')] },
    { label: t('visacomparison.labels.documents'), values: [t('visacomparison.dtv.doc_1'), t('visacomparison.dtv.doc_2')] },
    { label: t('visacomparison.labels.timeline'), values: [t('visacomparison.dtv.timeline')] }
  ];

  return (
    <section id="visa-comparison" className="py-24 bg-[#131313] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter text-center mb-10 text-balance break-words">
          {t('visacomparison.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-10 items-stretch">
          {/* ED VISA */}
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 flex flex-col h-full">
            <div className="bg-[#e60000] p-6 md:p-8 text-center flex-shrink-0">
              <h3 className="text-3xl font-black text-white uppercase break-words">{t('visacomparison.ed_title')}</h3>
              <p className="text-white/70 font-bold text-xs tracking-widest mt-1 break-words">{t('visacomparison.ed_subtitle')}</p>
            </div>

            <div className="p-6 md:p-8 space-y-6 flex-grow flex flex-col">
              {edVisaDetails.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row justify-between items-start border-b border-white/10 pb-4 gap-2 sm:gap-4 last:border-0 last:pb-0">
                  <span className="text-white/40 font-bold text-xs uppercase tracking-widest w-full sm:w-2/5 flex-shrink-0 mt-1 break-words">
                    {item.label}
                  </span>
                  <div className="text-white font-bold sm:text-right flex flex-col gap-1.5 w-full sm:w-3/5 flex-grow">
                    {item.values.map((val, j) => (
                      <span key={j} className="flex items-start sm:justify-end gap-2 text-sm md:text-base leading-tight break-words">
                        {item.values.length > 1 && <span className="w-1.5 h-1.5 bg-[#e60000] rounded-full inline-block sm:hidden mt-1.5 flex-shrink-0"></span>}
                        <span className="flex-1 sm:flex-auto">{val}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DTV VISA */}
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-[#e9c349]/20 flex flex-col h-full">
            <div className="bg-[#e9c349] p-6 md:p-8 text-center flex-shrink-0">
              <h3 className="text-3xl font-black text-black uppercase break-words">{t('visacomparison.dtv_title')}</h3>
              <p className="text-black/70 font-bold text-xs tracking-widest mt-1 break-words">{t('visacomparison.dtv_subtitle')}</p>
            </div>

            <div className="p-6 md:p-8 space-y-6 flex-grow flex flex-col">
              {dtvVisaDetails.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row justify-between items-start border-b border-white/10 pb-4 gap-2 sm:gap-4 last:border-0 last:pb-0">
                  <span className="text-white/40 font-bold text-xs uppercase tracking-widest w-full sm:w-2/5 flex-shrink-0 mt-1 break-words">
                    {item.label}
                  </span>
                  <div className="text-white font-bold sm:text-right flex flex-col gap-1.5 w-full sm:w-3/5 flex-grow">
                    {item.values.map((val, j) => (
                      <span key={j} className="flex items-start sm:justify-end gap-2 text-sm md:text-base leading-tight break-words">
                        {item.values.length > 1 && <span className="w-1.5 h-1.5 bg-[#e9c349] rounded-full inline-block sm:hidden mt-1.5 flex-shrink-0"></span>}
                        <span className="flex-1 sm:flex-auto">{val}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-16">
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="bg-[#e60000] text-white px-8 md:px-10 py-4 md:py-5 font-black uppercase tracking-tighter text-lg md:text-xl hover:bg-red-700 transition-all flex items-center justify-center gap-2 text-center h-auto min-h-[60px] break-words max-w-full">
            <span>{t('visacomparison.btn_consult')}</span> <ChevronRight size={24} className="flex-shrink-0" />
          </a>
        </div>

        <div className="max-w-5xl mx-auto mb-16 relative group mt-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#e60000] to-[#e9c349] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white">
            <img
              src="/visa-guide.jpg"
              alt="ED vs DTV Visa Guide"
              className="w-full h-auto"
              onError={(e) => {
                e.currentTarget.parentElement!.style.display = 'none';
              }}
            />
          </div>
        </div>

        <div id="faq" className="mt-8 bg-[#1a1a1a] p-6 md:p-12 rounded-xl border border-white/5 scroll-mt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-black text-white uppercase mb-8 flex items-center gap-3 break-words">
                <span className="bg-[#e60000] text-white w-8 h-8 flex items-center justify-center rounded-full text-lg flex-shrink-0">?</span>
                <span>{t('visacomparison.faq_title')}</span>
              </h3>
              <div className="space-y-6">
                <div className="border-b border-white/10 pb-4">
                  <p className="text-[#e9c349] font-bold mb-2 leading-snug break-words">{t('visacomparison.faq_q1')}</p>
                  <p className="text-white/70 text-sm leading-relaxed break-words">{t('visacomparison.faq_a1')}</p>
                </div>
                <div className="border-b border-white/10 pb-4">
                  <p className="text-[#e9c349] font-bold mb-2 leading-snug break-words">{t('visacomparison.faq_q2')}</p>
                  <p className="text-white/70 text-sm leading-relaxed break-words">{t('visacomparison.faq_a2')}</p>
                </div>
                <div>
                  <p className="text-[#e9c349] font-bold mb-2 leading-snug break-words">{t('visacomparison.faq_q3')}</p>
                  <p className="text-white/70 text-sm leading-relaxed break-words">{t('visacomparison.faq_a3')}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center h-full space-y-8">
              <div className="bg-[#222] p-6 md:p-8 rounded-lg border-l-4 border-[#e9c349] flex-1">
                <h4 className="font-black text-white uppercase mb-4 flex items-center gap-2 break-words">
                  <ShieldCheck size={20} className="text-[#e9c349] flex-shrink-0" />
                  <span>{t('visacomparison.notice_title')}</span>
                </h4>
                <ul className="text-white/60 text-sm space-y-3 list-disc list-inside leading-relaxed">
                  <li className="break-words">{t('visacomparison.notice_item1')}</li>
                  <li className="break-words">{t('visacomparison.notice_item2')}</li>
                  <li className="break-words">{t('visacomparison.notice_item3')}</li>
                </ul>
              </div>

              <div className="bg-[#e60000] p-6 md:p-8 rounded-lg text-center flex flex-col justify-center">
                <h4 className="font-black text-white uppercase mb-2 text-xl break-words">{t('visacomparison.review_title')}</h4>
                <p className="text-white/90 text-sm mb-6 leading-relaxed break-words">{t('visacomparison.review_desc')}</p>
                <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="inline-flex items-center justify-center gap-2 bg-white text-black font-black uppercase py-4 px-6 md:px-8 hover:bg-[#e9c349] hover:scale-[1.02] transition-all w-full rounded shadow-lg text-center h-auto min-h-[56px] break-words">
                  <span>{t('visacomparison.btn_review')}</span> <ChevronRight size={20} className="flex-shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessTimeline = () => {
  const { t } = useTranslation();

  const steps = [
    { num: "01", title: t('timeline.step1_title'), desc: t('timeline.step1_desc'), time: t('timeline.step1_time') },
    { num: "02", title: t('timeline.step2_title'), desc: t('timeline.step2_desc'), time: t('timeline.step2_time') },
    { num: "03", title: t('timeline.step3_title'), desc: t('timeline.step3_desc'), time: t('timeline.step3_time') },
    { num: "04", title: t('timeline.step4_title'), desc: t('timeline.step4_desc'), time: t('timeline.step4_time') },
    { num: "05", title: t('timeline.step5_title'), desc: t('timeline.step5_desc'), time: "" },
  ];

  return (
    <section id="visa-process" className="py-24 bg-[#1a1a1a] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter max-w-3xl mb-10 text-balance break-words">
          {t('timeline.main_title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          {steps.map((s, i) => (
            <div key={i} className="bg-[#222] p-6 md:p-8 relative border-l-4 border-[#e60000] flex flex-col h-full">
              <span className="absolute top-4 right-4 text-4xl font-black text-white/5 pointer-events-none select-none">{s.num}</span>
              <p className="text-[#e9c349] font-bold text-xs tracking-widest mb-2 break-words">{t('timeline.step_label')} {i + 1}</p>
              <h3 className="text-xl font-black text-white uppercase mb-4 leading-tight break-words pr-8">{s.title}</h3>
              {/* 💡 ใส่ flex-grow เพื่อดันส่วนของ "เวลา (TIME)" ให้ลงไปติดขอบล่างเท่ากันทุกกล่อง */}
              <p className="text-white/50 text-sm mb-6 whitespace-pre-line leading-relaxed flex-grow break-words">{s.desc}</p>

              {s.time && (
                <div className="mt-auto pt-4 border-t border-white/5">
                  <p className="text-white/30 font-bold text-xs uppercase tracking-widest break-words">{s.time}</p>
                </div>
              )}
            </div>
          ))}

          {/* กล่องสรุปรวมเวลา (กล่องสุดท้าย) */}
          <div className="bg-[#e60000] p-6 md:p-8 flex flex-col items-center justify-center text-center h-full">
            <Clock size={48} className="text-white mb-4 flex-shrink-0" />
            <h3 className="text-2xl font-black text-white uppercase break-words">{t('timeline.total_title')}</h3>
            <p className="text-4xl font-black text-[#e9c349] mt-2 break-words">{t('timeline.total_days')}</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#e9c349] to-[#e60000] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white">
            <img
              src="/roadmap.jpg"
              alt="Visa Process Roadmap"
              className="w-full h-auto"
              onError={(e) => {
                e.currentTarget.parentElement!.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// 1. เพิ่ม Interface บอก TypeScript ว่าข้อมูลของเรามีโครงสร้างแบบไหน
interface CampInfo {
  city: string;
  gym: string;
  gymThai: string;
  fbUrl?: string;
  mapUrl?: string;
  highlightUrl?: string;
}

interface RegionInfo {
  title: string;
  camps: CampInfo[];
}

const Locations = () => {
  const { t } = useTranslation(); // 👈 เรียกใช้งาน i18n

  // ย้าย regions มาไว้ข้างในเพื่อผูกตัวแปร t สำหรับแปลชื่อภูมิภาคครับ
  const regions: RegionInfo[] = [
    {
      title: t('locations.regions.central'),
      camps: [
        {
          city: "Bangkok",
          gym: "KaewSamrit Gym",
          gymThai: "แก้วสัมฤทธิ์",
          fbUrl: "https://www.facebook.com/kaewsamritgym",
          mapUrl: "https://maps.app.goo.gl/35EawV1W38YfK5p68",
          highlightUrl: "https://www.facebook.com/share/p/14cqubdP7uB/"
        },
        {
          city: "Bangkok",
          gym: "Nok Jeans Ladkrabang Muay Thai",
          gymThai: "นกยีนส์ลาดกระบัง",
          fbUrl: "https://www.facebook.com/p/%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%A1%E0%B8%A7%E0%B8%A2-%E0%B8%99%E0%B8%81%E0%B8%A2%E0%B8%B5%E0%B8%99%E0%B8%AA%E0%B9%8C%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B1%E0%B8%87-%E0%B8%A1%E0%B8%A7%E0%B8%A2%E0%B9%84%E0%B8%97%E0%B8%A2-100054528276685/?locale=th_TH",
          mapUrl: "https://maps.app.goo.gl/q5Gd4CLeH2HDXRKV9",
          highlightUrl: "https://www.facebook.com/share/p/18TsAb2U1N/"
        },
        {
          city: "Bangkok",
          gym: "Wor.Auracha MuayThai Gym",
          gymThai: "ว.อุรชา",
          fbUrl: "https://www.facebook.com/Wor.Auracha/?locale=th_TH",
          mapUrl: "https://maps.app.goo.gl/ghXToKWTTJZZrTTc8",
          highlightUrl: ""
        },
        {
          city: "Chai Nat",
          gym: "Chaopraya Muay Thai",
          gymThai: "เจ้าพระยามวยไทย",
          fbUrl: "https://www.facebook.com/share/187zuSVXcJ/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/YvqdAmG4Ge1Ez5cy8",
          highlightUrl: "https://www.facebook.com/share/p/18dY37pSFW/"
        },
        {
          city: "Nonthaburi",
          gym: "Sor. Suwannaran Muay Thai",
          gymThai: "ศ.สุวรรณารัณย์",
          fbUrl: "https://www.facebook.com/krugunmuaythai/?locale=th_TH",
          mapUrl: "https://maps.app.goo.gl/4aVyGdAmZrotJHGf7",
          highlightUrl: "https://www.facebook.com/share/p/1Y7wFTesUf/"
        },
        {
          city: "Pathum Thani",
          gym: "Singmanasak Gym",
          gymThai: "สิงห์มนัสศักดิ์",
          fbUrl: "https://www.facebook.com/share/1CQq7rQ1td/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/qWr6fuYe8MR47uHz6",
          highlightUrl: "https://www.facebook.com/share/p/1Tws2Ntehu/"
        },
        {
          city: "Samut Prakan",
          gym: "Sor. Songtham Muay Thai",
          gymThai: "ศ.ทรงธรรม",
          fbUrl: "https://www.facebook.com/share/1861pHYrjX/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/by5PVZSABQSFSpgRA",
          highlightUrl: "https://www.facebook.com/share/p/1CxfVbLTHp/"
        },
        {
          city: "Saraburi",
          gym: "Kiat Chamroon",
          gymThai: "เกียรติจำรูญ",
          fbUrl: "https://www.facebook.com/p/%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%A1%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B8%88%E0%B8%B3%E0%B8%A3%E0%B8%B9%E0%B8%8D-100057305454164/?locale=th_TH",
          mapUrl: "maps.app.goo.gl/c4cZMwLic2kD7iFHA",
          highlightUrl: "https://www.facebook.com/share/p/1Fd9tcFdur/"
        },
        {
          city: "Sing Buri",
          gym: "J.Apichat MuayThai Gym",
          gymThai: "จ.อภิชาติมวยไทยยิม",
          fbUrl: "https://www.facebook.com/share/1HsQB6nLSz/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/RN6aEqP5EpoYuNmB7",
          highlightUrl: "https://www.facebook.com/share/p/1EL2GSVgfK/"
        },
        {
          city: "Suphan Buri",
          gym: "Yod WanLop Muaythai",
          gymThai: "ยอดวัลภมวยไทย",
          fbUrl: "https://www.facebook.com/%E0%B8%A2%E0%B8%AD%E0%B8%94%E0%B8%A7%E0%B8%B1%E0%B8%A5%E0%B8%A5%E0%B8%A0%E0%B8%A1%E0%B8%A7%E0%B8%A2%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B8%A2%E0%B8%B4%E0%B8%A1-100079242512041/",
          mapUrl: "https://maps.app.goo.gl/4hzTSP2bhq99nTd76",
          highlightUrl: ""
        }
      ]
    },
    {
      title: t('locations.regions.eastern'),
      camps: [
        {
          city: "Chonburi",
          gym: "Ha Payak Muay Thai Gym",
          gymThai: "ห้าพยัคฆ์มวยไทย",
          fbUrl: "https://sites.google.com/view/hapayak",
          mapUrl: "https://maps.app.goo.gl/NSbiftLiYu9rnK297",
          highlightUrl: "https://www.facebook.com/share/p/17rPgAHWGC/"
        },
        {
          city: "Chonburi",
          gym: "Phonchimphli Boxing Camp",
          gymThai: "พร.ฉิมพลี",
          fbUrl: "https://www.facebook.com/share/1QmKNUgJcH/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/19ES2pNCbRXwVVhD7",
          highlightUrl: "https://www.facebook.com/share/r/1SLj1xqB9k/"
        },
        {
          city: "Prachin Buri",
          gym: "S.Mee-Anan Muay Thai Training",
          gymThai: "ส.มีอนันต์",
          fbUrl: "https://www.facebook.com/s.meeanan",
          mapUrl: "https://maps.app.goo.gl/xnZLXAe1aNsZ3Enn9",
          highlightUrl: "https://www.facebook.com/share/r/18mVmNMfYK/"
        },
        {
          city: "Rayong",
          gym: "Sor.Ninthai Muaythai Gym",
          gymThai: "ส.นิลทัย",
          fbUrl: "https://www.facebook.com/share/1XkrKXWvNy/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/vH9dBWH6fJMvKm1C9",
          highlightUrl: "https://www.facebook.com/share/p/1AYoxZuGSV/"
        },
        {
          city: "Trat",
          gym: "Sit nong rak gym",
          gymThai: "ศิษย์น้องรักยิม",
          fbUrl: "https://www.facebook.com/nongrakgym",
          mapUrl: "https://maps.app.goo.gl/BK2dKBFYRLJAR5C48",
          highlightUrl: "https://www.facebook.com/share/p/1B5D5YVJYr/"
        }
      ]
    },
    {
      title: t('locations.regions.northeast'),
      camps: [
        {
          city: "Buriram",
          gym: "Phet Nong Ki Muay Thai",
          gymThai: "เพชรหนองกี่",
          fbUrl: "https://www.facebook.com/share/1C1iiXmw24/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/SW9hrhnvj56u6F446",
          highlightUrl: "https://www.facebook.com/share/r/18pRcqvJ4J/"
        },
        {
          city: "Buriram",
          gym: "Por.Mongkolin",
          gymThai: "ป.มงคลอินทร์",
          fbUrl: "https://www.facebook.com/khay.mwy.p.mngkhl.xinthr?mibextid=wwXIfr&mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/CS33kzqSTV4HkRNr9?g_st=il",
          highlightUrl: "https://www.facebook.com/share/p/18wa3DTjyw/"
        },
        {
          city: "Buriram",
          gym: "Sit Jack MuayThai",
          gymThai: "ศิษย์แจ๊กมวยไทย",
          fbUrl: "https://www.facebook.com/share/1AdQqNd2nq/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/6aRnwEvGaM19bdmD7",
          highlightUrl: "https://www.facebook.com/share/p/18iqK8t1h7/"
        },
        {
          city: "Kalasin",
          gym: "Sor. Rodjarin Muay Thai",
          gymThai: "ส.รจรินทร์",
          fbUrl: "https://www.facebook.com/profile.php?id=100066491934335",
          mapUrl: "https://maps.app.goo.gl/BC3xtexhSkoFKJNm6",
          highlightUrl: "https://www.facebook.com/share/p/1Cq3NbnC6A/"
        },
        {
          city: "Khon Kaen",
          gym: "Gumpun Muay Thai Khon Kaen",
          gymThai: "กำปั้นมวยไทย (ขอนแก่น)",
          fbUrl: "https://www.facebook.com/gumpunmuaythai",
          mapUrl: "https://maps.app.goo.gl/CXrEdiMnfgZVZzxC6",
          highlightUrl: "https://www.facebook.com/share/p/1NTm8qfxts/"
        },
        {
          city: "Loei",
          gym: "Aor.Yutthachai",
          gymThai: "อ.ยุทธชัย",
          fbUrl: "https://www.facebook.com/profile.php?id=61588659636876#",
          mapUrl: "https://maps.app.goo.gl/PEPm9YTWquYqqv8d8",
          highlightUrl: "https://www.facebook.com/share/p/17WX8yE8n1/"
        },
        {
          city: "Maha Sarakham",
          gym: "Sit Phananchoeng Muay Thai",
          gymThai: "ศิษย์พนัญเชิง",
          fbUrl: "https://www.facebook.com/share/1Dhz9rtpvx/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/hqzVauahhMvoyp8U6",
          highlightUrl: "https://www.facebook.com/share/p/18p7eGxTvJ/"
        },
        {
          city: "Nakhon Ratchasima",
          gym: "Gumpun Muay Thai Korat",
          gymThai: "กำปั้นมวยไทย (โคราช)",
          fbUrl: "",
          mapUrl: "https://maps.app.goo.gl/STKT94mZnXZky6sx9",
          highlightUrl: "https://www.facebook.com/share/p/1NTm8qfxts/"
        },
        {
          city: "Nakhon Ratchasima",
          gym: "Phimai Phongsathorn",
          gymThai: "พิมายพงศธร",
          fbUrl: "https://www.facebook.com/share/17LYdqdLR4/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/xTfXte6jA9LEx3Bg7",
          highlightUrl: "https://www.facebook.com/share/p/1GzobeysnT/"
        },
        {
          city: "Nong Khai",
          gym: "Sor. Sophon Muay Thai",
          gymThai: "ส.โสภณ",
          fbUrl: "https://www.facebook.com/share/1ENe4GZGVX/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/duhPJoo3iZDEJCiw8",
          highlightUrl: "https://www.facebook.com/share/p/1EKupMqfmk/"
        },
        {
          city: "Sakon Nakhon",
          gym: "Jackie Gyms Muay Thai",
          gymThai: "แจ็คกี้ยิมส์",
          fbUrl: "https://www.facebook.com/share/1DMrW8YT2x/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/MpGNeyAvpc5z5JAr9",
          highlightUrl: "https://www.facebook.com/share/p/18jwXaGXQf/"
        },
        {
          city: "Sakon Nakhon",
          gym: "Sith Bon Sakonnakorn",
          gymThai: "ศิษย์บอลสกลนคร",
          fbUrl: "https://www.facebook.com/%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%A1%E0%B8%A7%E0%B8%A2%E0%B8%A8%E0%B8%B4%E0%B8%A9%E0%B8%A2%E0%B9%8C%E0%B8%9A%E0%B8%AD%E0%B8%A5%E0%B8%AA%E0%B8%81%E0%B8%A5-Bonsakon-Muaythai-Gym-100093604656847/",
          mapUrl: "https://maps.app.goo.gl/7nQ2ms9tiueiQL7H8",
          highlightUrl: "https://www.facebook.com/share/p/1CudDM7qAj/"
        },
        {
          city: "Surin",
          gym: "Pakorn Porn Surin Gym",
          gymThai: "ปกรณ์พรสุรินทร์",
          fbUrl: "https://www.facebook.com/share/1DR1EZ1zYg/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/knb6sk62nduuEDdi7",
          highlightUrl: "https://www.facebook.com/share/p/1PMHm4udBK/"
        },
        {
          city: "Ubon Ratchathani",
          gym: "Sor. Sak Ubon Muay Thai",
          gymThai: "ศ.ศักดิ์อุบล",
          fbUrl: "https://www.facebook.com/share/1JhFzeTt4B/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/Yh5yuUGKQZCgvbAXA",
          highlightUrl: "https://www.facebook.com/permalink.php?story_fbid=pfbid0hXknrtZdrYwXDumDKP71ZFaiBH4Bx251NxMW8LJ2irn3pZ9361kDRfHYSnpNgvvsl&id=61588289336687"
        },
        {
          city: "Udon Thani",
          gym: "Kaennorsing MuayThai Gym",
          gymThai: "แก่นนรสิงห์",
          fbUrl: "https://www.facebook.com/share/1DWLHfYKkP/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/ZarKLaRmSH3cEnkJ6",
          highlightUrl: "https://www.facebook.com/share/p/1B7WB93jqD/"
        },
        {
          city: "Yasothon",
          gym: "Aor. Phet Khunsuek Muay Thai",
          gymThai: "อ.เพชรขุนศึก",
          fbUrl: "https://www.facebook.com/groups/326793244628082/",
          mapUrl: "https://maps.app.goo.gl/M8bungkCSg5cfuYv6",
          highlightUrl: "https://www.facebook.com/share/r/1BkjfcUTwc/"
        },
        {
          city: "Yasothon",
          gym: "Sai Mun Snooker Club",
          gymThai: "ทรายมูลสนุ๊กเกอร์คลับ",
          fbUrl: "https://www.facebook.com/share/18LC9xWHqa/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/TPGomz2mH4F7u2929",
          highlightUrl: "https://www.facebook.com/share/p/1DECVQYqNu/"
        },
        {
          city: "Yasothon",
          gym: "Sor. Ninthai Muay Thai",
          gymThai: "ส.นิลไทย",
          fbUrl: "",
          mapUrl: "https://maps.app.goo.gl/Hkxth15Pp7PfjA9X8",
          highlightUrl: ""
        }
      ]
    },
    {
      title: t('locations.regions.northern'),
      camps: [
        {
          city: "Chiang Mai",
          gym: "Champions GYM",
          gymThai: "",
          fbUrl: "https://www.facebook.com/thaiboxingcnx/?locale=th_TH",
          mapUrl: "https://maps.app.goo.gl/fQepi9L9XSwcdoDK8",
          highlightUrl: ""
        },
        {
          city: "Chiang Mai",
          gym: "Aor.Kitjareonchai",
          gymThai: "ค่ายมวย อ.กิจเจริญชัย",
          fbUrl: "",
          mapUrl: "https://maps.app.goo.gl/Z87JtJ96aZ9FWZR19",
          highlightUrl: "https://www.facebook.com/share/p/1LwRNoRdKw/"
        },
        {
          city: "Chiang Rai",
          gym: "The Underdog Muay Thai Gym",
          gymThai: "",
          fbUrl: "https://www.facebook.com/TheUnderdogMuayThaiGym",
          mapUrl: "https://maps.app.goo.gl/1pneBRhvHqrjUqUi7",
          highlightUrl: "https://www.facebook.com/share/p/18zHBdedxv/"
        },
        {
          city: "Kamphaeng Phet",
          gym: "Kiat Chatchai",
          gymThai: "เกียรติฉัตรชัย ไทย บ็อกซิ่งแคมป์",
          fbUrl: "https://www.facebook.com/share/17nrStp76x/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/pt13S7JBUSw8VkVm9",
          highlightUrl: "https://www.facebook.com/share/p/17p6VLsoG8/"
        },
        {
          city: "Kamphaeng Phet",
          gym: "Lookthap Ongdam Muaythai Gym",
          gymThai: "มวยไทย ลูกทัพองค์ดำยิม",
          fbUrl: "https://www.facebook.com/share/1ASrR8K2yN/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/TU2PGtHTd4zti6Mo6",
          highlightUrl: "https://www.facebook.com/share/p/14fr2oeVkrg/"
        },
        {
          city: "Lamphun",
          gym: "Aor. Sanitpan",
          gymThai: "อ.สนิทพันธุ์",
          fbUrl: "https://www.facebook.com/share/1DCtA3AF1h/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/pcnzdgwemuTD1vB76",
          highlightUrl: "https://www.facebook.com/share/p/1AAtibH5hK/"
        },
        {
          city: "Mae Hong Son",
          gym: "Apple Muaythai Gym",
          gymThai: "แอปเปิ้ล มวยไทยยิม",
          fbUrl: "https://www.facebook.com/apple.muay.thai.gym.team/",
          mapUrl: "https://maps.app.goo.gl/mRm2m5MGCwjS7f1V8",
          highlightUrl: "https://www.facebook.com/share/p/14PP7M1dFKN/"
        },
        {
          city: "Nan",
          gym: "Kiatpichitchai",
          gymThai: "เกียรติพิชิตชัย",
          fbUrl: "https://www.facebook.com/share/1Jtr2HYv5H/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/zsZbQzKucU9m7pJ2A",
          highlightUrl: "https://www.facebook.com/share/p/19r8hcMvw6/"
        },
        {
          city: "Nan",
          gym: "T20 Sport Complex",
          gymThai: "T20",
          fbUrl: "https://www.facebook.com/share/1DQjSTPEr5/",
          mapUrl: "https://maps.app.goo.gl/qCG6pxQFFxf6F1a18",
          highlightUrl: "https://www.facebook.com/share/p/1HZvwFnc45/"
        },
        {
          city: "Phayao",
          gym: "Tor.Buates",
          gymThai: "ต.บัวเทศ",
          fbUrl: "https://www.facebook.com/profile.php?id=61551708162998",
          mapUrl: "https://maps.app.goo.gl/z2r2B14pygfdMASE7",
          highlightUrl: "https://www.facebook.com/share/p/1CQnbwV875/"
        },
        {
          city: "Phitsanulok",
          gym: "JP Boxing Gym",
          gymThai: "เจพี บ๊อกซิ่งยิม",
          fbUrl: "https://www.facebook.com/share/1FisaF6BWB/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/jWx1HQUYJzAEjxSE9",
          highlightUrl: "https://www.facebook.com/share/p/1F7ehEj6Ao/"
        },
        {
          city: "Phitsanulok",
          gym: "Suwanno Muay Thai",
          gymThai: "สุวรรณโณ (ศ.ไก่เขี่ย)",
          fbUrl: "https://www.facebook.com/share/1FqFhLX6Lm/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/97q6y8QaSGmqtJ8x7?g_st=ipc",
          highlightUrl: "https://www.facebook.com/share/p/14eeym4mTEH/"
        },
        {
          city: "Uttaradit",
          gym: "Tor. Khong-In",
          gymThai: "ต.คงอินทร์",
          fbUrl: "https://www.facebook.com/share/18RGuKww3b/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/BBVXsxTVHPwJSurB8",
          highlightUrl: ""
        }
      ]
    },
    {
      title: t('locations.regions.southern'),
      camps: [
        {
          city: "Chumphon",
          gym: "Kiat Yodying",
          gymThai: "เกียรติยอดยิ่ง",
          fbUrl: "https://www.facebook.com/share/1CHdJpAbm9/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/cUdo2DC2K4qMKxPN7",
          highlightUrl: "https://www.facebook.com/share/p/1Kjkx1Q8Ja/"
        },
        {
          city: "Krabi",
          gym: "Kmax gym",
          gymThai: "",
          fbUrl: "https://www.facebook.com/kmaxgymTh/?locale=th_TH",
          mapUrl: "https://maps.app.goo.gl/xVS2wAADAhuEgRom9",
          highlightUrl: "https://www.facebook.com/share/r/1D8n3nJNz5/"
        },
        {
          city: "Nakhon Si Thammarat",
          gym: "Legend MuayThai",
          gymThai: "เลเจนมวยไทย",
          fbUrl: "https://www.facebook.com/Krumeechai/",
          mapUrl: "https://maps.app.goo.gl/QUCaAxKFEioavaAy9",
          highlightUrl: "https://www.facebook.com/share/p/1JetKa1Y8P/"
        },
        {
          city: "Prachuap Khiri Khan",
          gym: "Por Pet Kat Kaew",
          gymThai: "ป.เพชรไข่แก้ว",
          fbUrl: "https://www.instagram.com/explore/locations/1026096420/",
          mapUrl: "https://maps.app.goo.gl/MWwsku1t9YKEGeaS6",
          highlightUrl: "https://www.facebook.com/share/p/14dqEx3KTC3/"
        },
        {
          city: "Phuket",
          gym: "Surakit Gym Phuket",
          gymThai: "สุรกิตย์",
          fbUrl: "https://www.facebook.com/masterjayphuket/?locale=th_TH",
          mapUrl: "https://maps.app.goo.gl/8GP4LZYmN3ELL6Ya9",
          highlightUrl: "https://www.facebook.com/share/p/1BNxkjgMDC/"
        },
        {
          city: "Songkhla",
          gym: "Saenrak Muay Thai",
          gymThai: "แสนรักมวยไทย",
          fbUrl: "https://www.facebook.com/share/1Dqz3nkE9V/?mibextid=wwXIfr",
          mapUrl: "https://maps.app.goo.gl/krGAJqKrTXwpAQSk8",
          highlightUrl: "https://www.facebook.com/share/p/17pdjYCNR5/"
        },
        {
          city: "Surat Thani",
          gym: "Singha Samui Muay Thai",
          gymThai: "สิงห์สมุยมวยไทย",
          fbUrl: "https://www.instagram.com/singsamui_muaythai/",
          mapUrl: "https://maps.app.goo.gl/5wY44PCKKeDDfS9d9",
          highlightUrl: ""
        }
      ]
    },
    {
      title: t('locations.regions.western'),
      camps: [
        {
          city: "Phetchaburi",
          gym: "Chok Dee Gym - Muay Thai & Fitness",
          gymThai: "โชคดีชะอำ",
          fbUrl: "https://www.facebook.com/chokdeechaam/?locale=th_TH",
          mapUrl: "https://maps.app.goo.gl/GV7sn4tfUbz7mkuW8",
          highlightUrl: ""
        },
      ]
    }
  ];

  return (
    <section id="partner-camps" className="py-24 bg-[#131313] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#e60000] font-bold uppercase text-xs tracking-[0.3em] mb-2">{t('locations.subtitle')}</p>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">{t('locations.title')}</h2>

        <p className="text-white/60 max-w-3xl mx-auto mb-16">
          {t('locations.description')}
        </p>

        <div className="relative max-w-5xl mx-auto mb-16 group text-left">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#e60000] to-[#e9c349] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>

          <div className="relative bg-[#1a1a1a] p-2 md:p-4 rounded-xl border border-white/10 shadow-2xl">
            <div className="w-full h-[350px] md:h-[450px] rounded-lg overflow-hidden bg-[#222] relative border border-white/5">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1KUPZa4ZIWSmkGcG4KQPYPqryF5RthqA&ehbc=2E312F"
                className="w-full border-0 opacity-90 hover:opacity-100 transition-opacity duration-500"
                style={{ height: 'calc(100% + 75px)', marginTop: '-75px' }}
                title="Gumpun Muay Thai Partner Camps Map"
              ></iframe>
            </div>

            <div className="flex flex-wrap items-center justify-between pt-4 px-2 pb-1 gap-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e60000] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#e60000]"></span>
                </span>
                <span className="text-white/50 font-bold uppercase text-[10px] tracking-widest">
                  {t('locations.map_live')}
                </span>
              </div>
              <a
                href="https://www.google.com/maps/d/viewer?mid=1KUPZa4ZIWSmkGcG4KQPYPqryF5RthqA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e9c349] hover:text-white text-[10px] uppercase tracking-widest font-bold flex items-center gap-1 transition-colors"
              >
                {t('locations.map_open')} <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {regions.map((r, i) => (
            <div key={i} className="bg-[#1a1a1a] p-6 border-t-4 border-[#e60000] hover:bg-[#1f1f1f] transition-all rounded-b-md shadow-lg flex flex-col h-[460px]">
              <h4 className="font-black uppercase tracking-widest mb-4 text-[#e9c349] text-xl border-b border-white/5 pb-3 flex-shrink-0">{r.title}</h4>

              <ul className="space-y-3 overflow-y-auto flex-grow pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-black/20 [&::-webkit-scrollbar-thumb]:bg-[#e60000]/50 hover:[&::-webkit-scrollbar-thumb]:bg-[#e60000] [&::-webkit-scrollbar-thumb]:rounded-full">
                {r.camps.map((camp, j) => (
                  <li key={j} className="bg-[#222] p-4 rounded-md flex flex-col justify-between border border-white/5 hover:border-white/10 transition-colors">
                    <div>
                      <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 mb-2">
                        <MapIcon size={12} /> {camp.city}
                      </span>
                      <span className="text-white font-black block text-[15px] leading-tight mb-1">{camp.gym}</span>
                      {camp.gymThai && (
                        <span className="text-white/60 font-medium block text-xs leading-tight mb-3">{camp.gymThai}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-3">

                      {camp.mapUrl && camp.mapUrl !== "#" && (
                        <a href={camp.mapUrl} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#e60000] flex items-center gap-1.5 text-xs font-medium transition-colors">
                          <MapPin size={12} /> {t('locations.btn_maps')}
                        </a>
                      )}

                      {camp.fbUrl && camp.fbUrl !== "#" && (
                        <a
                          href={camp.fbUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${camp.fbUrl.includes("instagram.com")
                            ? "text-white/50 hover:text-[#E1306C]"
                            : "text-white/50 hover:text-[#1877F2]"
                            }`}
                        >
                          {camp.fbUrl.includes("instagram.com") ? (
                            <Instagram size={12} />
                          ) : (
                            <Facebook size={12} />
                          )}
                          {camp.fbUrl.includes("instagram.com") ? "Instagram" : "Facebook"}
                        </a>
                      )}

                      {camp.highlightUrl && camp.highlightUrl !== "" && (
                        <a
                          href={camp.highlightUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto bg-[#e60000] text-white hover:bg-[#e9c349] hover:text-black px-3 py-1.5 rounded text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 transition-all duration-300 shadow-[0_0_10px_rgba(230,0,0,0.2)] hover:shadow-[0_0_15px_rgba(233,195,73,0.5)] hover:-translate-y-0.5"
                        >
                          <Zap size={12} /> {t('locations.btn_highlight')}
                        </a>
                      )}

                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const reasons = [
    { icon: <Award size={24} />, title: t('whychooseus.reason_1') },
    { icon: <Zap size={24} />, title: t('whychooseus.reason_2') },
    { icon: <ShieldCheck size={24} />, title: t('whychooseus.reason_3') },
    { icon: <CreditCard size={24} />, title: t('whychooseus.reason_4') },
    { icon: <Headphones size={24} />, title: t('whychooseus.reason_5') },
  ];

  return (
    <section className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 text-balance break-words">{t('whychooseus.title')}</h2>
        <div className="w-24 h-1 bg-[#e60000] mx-auto mb-16"></div>

        {/* 💡 ใส่ items-stretch ให้กล่องแต่ละใบสูงเท่ากันแม้คำแปลในบางกล่องจะยาว 2 บรรทัด */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-stretch">
          {reasons.map((r, i) => (
            // 💡 ใส่ h-full และจัด text-center ให้สมดุล
            <div key={i} className="bg-[#222] p-6 flex flex-col items-center justify-start gap-4 hover:bg-[#2a2a2a] transition-all h-full text-center">
              <div className="text-[#e9c349] flex-shrink-0">{r.icon}</div>
              <h4 className="text-white font-bold uppercase text-xs tracking-widest leading-tight break-words text-balance w-full">{r.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImportantNotice = () => {
  const { t } = useTranslation();

  const notices = [
    {
      title: t('importantnotice.item1_title'),
      desc: t('importantnotice.item1_desc'),
      icon: <FileText size={24} className="text-[#e60000]" />
    },
    {
      title: t('importantnotice.item2_title'),
      desc: t('importantnotice.item2_desc'),
      icon: <ShieldCheck size={24} className="text-[#e60000]" />
    },
    {
      title: t('importantnotice.item3_title'),
      desc: t('importantnotice.item3_desc'),
      icon: <Clock size={24} className="text-[#e60000]" />
    },
    {
      title: t('importantnotice.item4_title'),
      desc: t('importantnotice.item4_desc'),
      icon: <CheckCircle2 size={24} className="text-[#e60000]" />
    }
  ];

  return (
    <section className="py-24 bg-[#131313] border-t border-b border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-[#e60000]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <ShieldCheck className="text-[#e60000] mb-4 flex-shrink-0" size={48} />
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter text-balance break-words">
            {t('importantnotice.main_title')}
          </h2>
          <div className="w-20 h-1 bg-[#e60000] mt-4"></div>
        </div>

        {/* 💡 บังคับให้การ์ดข้อมูล 4 ใบมีความสูงเท่ากันด้วย items-stretch */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {notices.map((item, i) => (
            // 💡 ใส่ h-full ให้การ์ดยืดจนสุดความสูง
            <div key={i} className="bg-[#1a1a1a] p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/10 hover:bg-[#222] transition-all group flex flex-col sm:flex-row gap-6 h-full items-start">

              {/* 💡 ใส่ flex-shrink-0 ที่กล่องไอคอน เพื่อไม่ให้มันโดนบีบจนแบนถ้าประโยคข้างๆ ยาวเกิน */}
              <div className="bg-[#131313] w-14 h-14 rounded-xl border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:border-[#e60000]/30 transition-all shadow-lg flex-shrink-0">
                {item.icon}
              </div>

              {/* 💡 ส่วนเนื้อหาใช้ flex-grow เพื่อดันให้กินพื้นที่เต็ม */}
              <div className="flex-grow flex flex-col">
                <h4 className="text-[#e9c349] font-black uppercase tracking-widest mb-3 text-sm md:text-base break-words leading-tight">
                  {item.title}
                </h4>
                <p className="text-white/60 text-sm md:text-base leading-relaxed group-hover:text-white/90 transition-colors break-words">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 bg-[#1a1a1a] scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 💡 เพิ่ม text-balance เพื่อให้บรรทัดของหัวข้อสมดุลกันเวลาขึ้นบรรทัดใหม่ */}
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 text-balance break-words">
          {t('contact.main_title_1')} <span className="text-[#e60000]">{t('contact.main_title_2')}</span> {t('contact.main_title_3')}
        </h2>
        <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto leading-relaxed break-words">
          {t('contact.subtitle')}
        </p>

        {/* 💡 ใช้ grid และ items-stretch เพื่อให้กล่องทั้ง 4 สูงเท่ากันเสมอ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-stretch">

          {/* LINE */}
          <a href="https://line.me/ti/p/H4tqD0T4U0" target="_blank" rel="noopener noreferrer"
            className="bg-[#222] p-6 rounded-xl border border-white/5 hover:border-[#00B900] hover:bg-[#1a1a1a] transition-all group flex flex-col items-center justify-center gap-3 h-full">
            <div className="w-12 h-12 rounded-full bg-[#131313] flex items-center justify-center group-hover:bg-[#00B900] transition-colors flex-shrink-0">
              <MessageCircle size={24} className="text-white" />
            </div>
            {/* 💡 ใส่ break-words และ leading-tight เพื่อให้คำยาวๆ ซ้อนบรรทัดได้สวยงามในกล่อง */}
            <span className="text-white/80 font-bold uppercase text-[10px] md:text-xs tracking-widest group-hover:text-white transition-colors text-center break-words leading-tight w-full">
              {t('contact.line_label')}
            </span>
          </a>

          {/* EMAIL */}
          <a href="mailto:gumpun@gumpunmuaythai.club"
            className="bg-[#222] p-6 rounded-xl border border-white/5 hover:border-[#e60000] hover:bg-[#1a1a1a] transition-all group flex flex-col items-center justify-center gap-3 h-full">
            <div className="w-12 h-12 rounded-full bg-[#131313] flex items-center justify-center group-hover:bg-[#e60000] transition-colors flex-shrink-0">
              <Mail size={24} className="text-white" />
            </div>
            <span className="text-white/80 font-bold uppercase text-[10px] md:text-xs tracking-widest group-hover:text-white transition-colors text-center break-words leading-tight w-full">
              {t('contact.email_label')}
            </span>
          </a>

          {/* INSTAGRAM */}
          <a href="https://www.instagram.com/gumpunmuaythai" target="_blank" rel="noopener noreferrer"
            className="bg-[#222] p-6 rounded-xl border border-white/5 hover:border-[#E1306C] hover:bg-[#1a1a1a] transition-all group flex flex-col items-center justify-center gap-3 h-full">
            <div className="w-12 h-12 rounded-full bg-[#131313] flex items-center justify-center group-hover:bg-[#E1306C] transition-colors flex-shrink-0">
              <Instagram size={24} className="text-white" />
            </div>
            <span className="text-white/80 font-bold uppercase text-[10px] md:text-xs tracking-widest group-hover:text-white transition-colors text-center break-words leading-tight w-full">
              {t('contact.ig_label')}
            </span>
          </a>

          {/* FACEBOOK */}
          <a href="https://www.facebook.com/gumpunmuaythai" target="_blank" rel="noopener noreferrer"
            className="bg-[#222] p-6 rounded-xl border border-white/5 hover:border-[#1877F2] hover:bg-[#1a1a1a] transition-all group flex flex-col items-center justify-center gap-3 h-full">
            <div className="w-12 h-12 rounded-full bg-[#131313] flex items-center justify-center group-hover:bg-[#1877F2] transition-colors flex-shrink-0">
              <Facebook size={24} className="text-white" />
            </div>
            <span className="text-white/80 font-bold uppercase text-[10px] md:text-xs tracking-widest group-hover:text-white transition-colors text-center break-words leading-tight w-full">
              {t('contact.fb_label')}
            </span>
          </a>

        </div>
      </div>
    </section>
  );
};

const PrivacyPolicy = ({ setCurrentPage }: PageProps) => {
  const { t } = useTranslation(); // 👈 เรียกใช้งาน i18n
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-white">
      <button
        onClick={() => setCurrentPage('home')}
        className="flex items-center gap-2 text-[#e9c349] hover:text-white transition-colors mb-8 font-bold uppercase tracking-widest text-sm"
      >
        <ArrowLeft size={16} /> {t('privacy.btn_back')}
      </button>

      <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 border-b border-white/10 pb-6">{t('privacy.main_title')}</h1>

      <div className="space-y-8 text-white/70 leading-relaxed">
        <div>
          <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{t('privacy.sec1_title')}</h2>
          <p>{t('privacy.sec1_desc')}</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{t('privacy.sec2_title')}</h2>
          <p>{t('privacy.sec2_desc')}</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{t('privacy.sec3_title')}</h2>
          <p>{t('privacy.sec3_desc')}</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{t('privacy.sec4_title')}</h2>
          <p>{t('privacy.sec4_desc')}</p>
        </div>
      </div>
    </section>
  );
};

const TermsOfService = ({ setCurrentPage }: PageProps) => {
  const { t } = useTranslation(); // 👈 เรียกใช้งาน i18n
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-white">
      <button
        onClick={() => setCurrentPage('home')}
        className="flex items-center gap-2 text-[#e9c349] hover:text-white transition-colors mb-8 font-bold uppercase tracking-widest text-sm"
      >
        <ArrowLeft size={16} /> {t('terms.btn_back')}
      </button>

      <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 border-b border-white/10 pb-6">{t('terms.main_title')}</h1>

      <div className="space-y-8 text-white/70 leading-relaxed">
        <div>
          <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{t('terms.sec1_title')}</h2>
          <p>{t('terms.sec1_desc')}</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{t('terms.sec2_title')}</h2>
          <p>{t('terms.sec2_desc')}</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{t('terms.sec3_title')}</h2>
          <p>{t('terms.sec3_desc')}</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{t('terms.sec4_title')}</h2>
          <p>{t('terms.sec4_desc')}</p>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ setCurrentPage }: PageProps) => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#131313] py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex items-center gap-3">
          <img
            src="/gumpunmuaythailogo.png"
            alt="Gumpun Muay Thai Logo"
            className="h-8 w-8 object-contain opacity-50"
            onError={(e) => {
              e.currentTarget.src = "https://ui-avatars.com/api/?name=GMT&background=131313&color=fff&rounded=true";
            }}
          />
          {/* 💡 ใส่ text-balance และ break-words กันชื่อบริษัทล้นจอมือถือ */}
          <p className="text-white/30 text-xs font-bold uppercase tracking-widest text-center md:text-left text-balance break-words">
            © {new Date().getFullYear()} Gumpun Muay Thai. <br className="md:hidden" /> {t('footer.legitimate_notice')}
          </p>
        </div>

        {/* 💡 เปลี่ยนเป็น flex-wrap ป้องกันลิงก์ 3 อันชนกันถ้าแปลแล้วคำยาว */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          <button onClick={() => setCurrentPage('privacy')} className="text-white/40 hover:text-[#e9c349] text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors break-words text-center">
            {t('footer.privacy')}
          </button>
          <button onClick={() => setCurrentPage('terms')} className="text-white/40 hover:text-[#e9c349] text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors break-words text-center">
            {t('footer.terms')}
          </button>
        </div>

      </div>
    </footer>
  );
};

const FloatingContact = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

      {/* LINE Button */}
      <a
        href="https://line.me/ti/p/H4tqD0T4U0"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#00B900] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,185,0,0.4)] hover:scale-110 transition-transform group relative"
      >
        <MessageCircle size={28} className="text-white" />
        {/* 💡 ปรับ right เป็น right-full mr-4 ให้ป้ายเด้งออกไปทางซ้ายเสมอ และใส่ whitespace-nowrap ห้ามตัดบรรทัด */}
        <span className="absolute right-full mr-4 bg-[#1a1a1a] text-white text-xs font-bold px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10 shadow-lg">
          LINE Official
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/66863133377"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform group relative"
      >
        <Phone size={28} className="text-white" />
        {/* 💡 เช่นเดียวกันกับปุ่ม LINE */}
        <span className="absolute right-full mr-4 bg-[#1a1a1a] text-white text-xs font-bold px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10 shadow-lg">
          WhatsApp
        </span>
      </a>

    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Scroll handling is done inside components now for smoother transitions
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-[#131313] font-sans selection:bg-[#e60000] selection:text-white scroll-smooth">
      <Navbar setCurrentPage={setCurrentPage} />

      {currentPage === 'home' && (
        <main>
          <Hero />
          <WhatWeDo />
          <VisaComparison />
          <ProcessTimeline />
          <Locations />
          <WhyChooseUs />
          <ImportantNotice />
          <Contact />
        </main>
      )}

      {currentPage === 'privacy' && <PrivacyPolicy setCurrentPage={setCurrentPage} />}
      {currentPage === 'terms' && <TermsOfService setCurrentPage={setCurrentPage} />}

      <Footer setCurrentPage={setCurrentPage} />

      {currentPage === 'home' && <FloatingContact />}
    </div>
  );
}