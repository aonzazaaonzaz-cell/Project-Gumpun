import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
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
  ArrowLeft
} from 'lucide-react';
import { motion } from 'framer-motion';

interface PageProps {
  setCurrentPage: (page: string) => void;
}

const Navbar = ({ setCurrentPage }: PageProps) => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <img
              src="/gumpunmuaythailogo.png"
              alt="Gumpun Muay Thai Logo"
              className="h-12 w-12 object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = "https://ui-avatars.com/api/?name=GMT&background=e60000&color=fff&rounded=true";
              }}
            />
            <span className="text-xl font-black tracking-tighter text-white uppercase hidden sm:block group-hover:text-[#e9c349] transition-colors">
              GUMPUN MUAY THAI
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-[#e9c349] font-bold uppercase text-sm tracking-widest hover:text-white transition-colors">Home</a>
            <a href="#visa-comparison" onClick={(e) => handleNavClick(e, 'visa-comparison')} className="text-white/80 hover:text-white transition-colors font-bold uppercase text-sm tracking-widest">ED Visa vs. DTV</a>
            <a href="#visa-process" onClick={(e) => handleNavClick(e, 'visa-process')} className="text-white/80 hover:text-white transition-colors font-bold uppercase text-sm tracking-widest">Visa Process</a>
            <a href="#partner-camps" onClick={(e) => handleNavClick(e, 'partner-camps')} className="text-white/80 hover:text-white transition-colors font-bold uppercase text-sm tracking-widest">Partner Camps</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-white/80 hover:text-white transition-colors font-bold uppercase text-sm tracking-widest">Contact</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#131313] border-b border-white/10 px-4 py-6 space-y-4">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="block text-[#e9c349] font-bold uppercase text-sm">Home</a>
          <a href="#visa-comparison" onClick={(e) => handleNavClick(e, 'visa-comparison')} className="block text-white/80 font-bold uppercase text-sm">ED Visa vs. DTV</a>
          <a href="#visa-process" onClick={(e) => handleNavClick(e, 'visa-process')} className="block text-white/80 font-bold uppercase text-sm">Visa Process</a>
          <a href="#partner-camps" onClick={(e) => handleNavClick(e, 'partner-camps')} className="block text-white/80 font-bold uppercase text-sm">Partner Camps</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block text-white/80 font-bold uppercase text-sm">Contact</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
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
            <h1 className="font-black uppercase mb-8 flex flex-col">
              <span className="text-3xl md:text-5xl text-white/80 tracking-[0.2em] mb-2">Train</span>
              <span className="text-7xl md:text-[7.5rem] lg:text-[8.5rem] text-[#e60000] tracking-tighter leading-[0.85] mb-4" style={{ textShadow: '0 0 40px rgba(230,0,0,0.5)' }}>
                Muay Thai
              </span>
              <span className="text-5xl md:text-6xl lg:text-7xl text-white tracking-tighter">
                In <span className="text-[#e9c349]">Thailand.</span>
              </span>
            </h1>
            <p className="text-[#e9c349] font-bold text-xl uppercase tracking-tight mb-8">
              ED & DTV VISA TRAINING SUPPORT WITH CERTIFIED MUAY THAI CAMPS ACROSS THAILAND.
            </p>
            <p className="text-white/60 text-lg mb-8 max-w-xl">
              Now you can extend your stay in Thailand by training Muay Thai at Sports Authority of Thailand (SAT) certified camps located across the country. From Bangkok to the mountains of the North and the beaches of the South.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "TRAIN WITH EXPERIENCED THAI TRAINERS",
                "DISCOVER MUAY THAI CULTURE",
                "CAMPS LOCATED ACROSS THAILAND"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#e60000]" size={20} />
                  <span className="text-white font-bold uppercase text-sm tracking-widest">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#partner-camps" onClick={(e) => handleScroll(e, 'partner-camps')} className="bg-[#e60000] text-white px-8 py-4 font-black uppercase tracking-tighter text-lg flex items-center gap-2 hover:bg-red-700 transition-all">
                Choose Your Training City <ChevronRight size={24} />
              </a>
              <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="border border-white/20 text-white px-8 py-4 font-black uppercase tracking-tighter text-lg hover:bg-white/10 transition-all flex items-center justify-center">
                Check Eligibility
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
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
              </div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold uppercase text-xs tracking-[0.3em] bg-black/50 px-2 py-1 rounded">Train Muay Thai in Thailand</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhatWeDo = () => {
  const services = [
    {
      icon: <ShieldCheck className="text-[#e60000]" size={40} />,
      title: "CERTIFIED CAMP COORDINATION",
      desc: "Direct access to SAT-certified gyms that meet all legal requirements for visa sponsorship."
    },
    {
      icon: <FileText className="text-[#e60000]" size={40} />,
      title: "TRAINING CONFIRMATION DOCUMENTS",
      desc: "Expedited preparation of enrollment letters and gym certificates for your application."
    },
    {
      icon: <Gavel className="text-[#e60000]" size={40} />,
      title: "SAT SUBMISSION COORDINATION",
      desc: "Management of documentation required for Sports Authority of Thailand approval seals."
    },
    {
      icon: <MapIcon className="text-[#e60000]" size={40} />,
      title: "END-TO-END SUPPORT",
      desc: "From selecting your training city to guiding your document preparation and reminding you of submission timelines."
    }
  ];

  return (
    <section className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-[#e9c349] font-bold uppercase text-xs tracking-[0.3em] mb-2">THE FOUNDATION</p>
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter">WHAT WE DO</h2>
          <p className="text-white/60 mt-4 max-w-2xl">
            We coordinate Muay Thai training programs with eligible partner camps across Thailand and support the documentation workflow for ED and DTV visa applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-[#222] p-8 border-l-4 border-[#e60000] hover:bg-[#2a2a2a] transition-all"
            >
              <div className="mb-6">{s.icon}</div>
              <h3 className="text-lg font-black text-white uppercase mb-4 leading-tight">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VisaComparison = () => {
  const handleScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const edVisaDetails = [
    { label: "STAY PERIOD", values: ["90 days"] },
    { label: "RE-APPLICATION", values: ["Renewable Outside Thailand"] },
    { label: "LOCATION", values: ["Single Base Recommended"] },
    { label: "TRAINING ATTENDANCE", values: ["Structured"] },
    { label: "DOCUMENTS", values: ["Passport, Enrollment,", "Proof of Funds at least $1,000"] },
    { label: "TIMELINE", values: ["~30-45 days"] }
  ];

  const dtvVisaDetails = [
    { label: "STAY PERIOD", values: ["5 Years (180 days/entry)"] },
    { label: "RE-APPLICATION", values: ["Multiple-Entry"] },
    { label: "LOCATION", values: ["Flexible / Remote Work Friendly"] },
    { label: "TRAINING ATTENDANCE", values: ["Flexible / Remote Work Friendly"] },
    { label: "DOCUMENTS", values: ["Passport, Enrollment,", "Proof of Funds at least 500,000 THB"] },
    { label: "TIMELINE", values: ["~30-45 days"] }
  ];

  return (
    <section id="visa-comparison" className="py-24 bg-[#131313] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter text-center mb-10">
          WHICH VISA SUITS YOUR TRAINING JOURNEY?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* ED VISA */}
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 flex flex-col">
            <div className="bg-[#e60000] p-8 text-center flex-shrink-0">
              <h3 className="text-3xl font-black text-white uppercase">ED VISA</h3>
              <p className="text-white/70 font-bold text-xs tracking-widest mt-1">EDUCATION VISA</p>
            </div>

            <div className="p-8 space-y-6 flex-grow">
              {edVisaDetails.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row justify-between items-start border-b border-white/10 pb-4 gap-3 sm:gap-4">
                  <span className="text-white/40 font-bold text-xs uppercase tracking-widest min-w-[140px] mt-1">{item.label}</span>
                  <div className="text-white font-bold sm:text-right flex flex-col gap-1.5 w-full sm:w-auto">
                    {item.values.map((val, j) => (
                      <span key={j} className="flex items-center sm:justify-end gap-2 text-sm md:text-base leading-tight">
                        {item.values.length > 1 && <span className="w-1.5 h-1.5 bg-[#e60000] rounded-full inline-block sm:hidden"></span>}
                        {val}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DTV VISA */}
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-[#e9c349]/20 flex flex-col">
            <div className="bg-[#e9c349] p-8 text-center flex-shrink-0">
              <h3 className="text-3xl font-black text-black uppercase">DTV VISA</h3>
              <p className="text-black/70 font-bold text-xs tracking-widest mt-1">DESTINATION THAILAND VISA</p>
            </div>

            <div className="p-8 space-y-6 flex-grow">
              {dtvVisaDetails.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row justify-between items-start border-b border-white/10 pb-4 gap-3 sm:gap-4">
                  <span className="text-white/40 font-bold text-xs uppercase tracking-widest min-w-[140px] mt-1">{item.label}</span>
                  <div className="text-white font-bold sm:text-right flex flex-col gap-1.5 w-full sm:w-auto">
                    {item.values.map((val, j) => (
                      <span key={j} className="flex items-center sm:justify-end gap-2 text-sm md:text-base leading-tight">
                        {item.values.length > 1 && <span className="w-1.5 h-1.5 bg-[#e9c349] rounded-full inline-block sm:hidden"></span>}
                        {val}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Unified Consult Us Button */}
        <div className="flex justify-center mb-16">
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="bg-[#e60000] text-white px-10 py-5 font-black uppercase tracking-tighter text-xl hover:bg-red-700 transition-all flex items-center gap-2">
            Consult Us For Visa Options <ChevronRight size={24} />
          </a>
        </div>

        {/* 💡 ย้ายรูปภาพ Infographic Visa Guide (Pic 2) มาไว้ตรงนี้ (ใต้ปุ่ม) */}
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

        {/* FAQ & Review Case Section */}
        <div id="faq" className="mt-8 bg-[#1a1a1a] p-8 md:p-12 rounded-xl border border-white/5 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black text-white uppercase mb-8 flex items-center gap-3">
                <span className="bg-[#e60000] text-white w-8 h-8 flex items-center justify-center rounded-full text-lg">?</span>
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                <div className="border-b border-white/10 pb-4">
                  <p className="text-[#e9c349] font-bold mb-2">Can I change from a tourist visa to an ED Muay Thai visa inside Thailand?</p>
                  <p className="text-white/70 text-sm">No. The ED visa must be applied for outside Thailand.</p>
                </div>
                <div className="border-b border-white/10 pb-4">
                  <p className="text-[#e9c349] font-bold mb-2">Can I apply for a DTV visa while in Thailand?</p>
                  <p className="text-white/70 text-sm">No. The application must be submitted through the Thai e-Visa system and completed outside Thailand, where you will collect your visa.</p>
                </div>
                <div>
                  <p className="text-[#e9c349] font-bold mb-2">Can I train in multiple cities?</p>
                  <p className="text-white/70 text-sm">Yes, but you must maintain attendance with your registered gym.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-[#222] p-8 rounded-lg border-l-4 border-[#e9c349] mb-8">
                <h4 className="font-black text-white uppercase mb-4 flex items-center gap-2">
                  <ShieldCheck size={20} className="text-[#e9c349]" /> Important Notice
                </h4>
                <ul className="text-white/60 text-sm space-y-3 list-disc list-inside">
                  <li>Visa approval is determined solely by the Royal Thai Embassy or Consulate.</li>
                  <li>Processing times are estimates and may vary.</li>
                  <li>We provide coordination and documentation support only.</li>
                </ul>
              </div>

              <div className="bg-[#e60000] p-8 rounded-lg text-center">
                <h4 className="font-black text-white uppercase mb-2 text-xl">Want us to review your case?</h4>
                <p className="text-white/90 text-sm mb-6">Send us your: Current visa status, Current location, Preferred embassy/consulate, Desired training city, and Target start date.</p>
                <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="inline-flex items-center justify-center gap-2 bg-white text-black font-black uppercase py-4 px-8 hover:bg-[#e9c349] hover:scale-[1.02] transition-all w-full rounded shadow-lg">
                  Contact Us For Review <ChevronRight size={20} />
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
  const steps = [
    { num: "01", title: "INITIAL SCREENING", desc: "Evaluation of your eligibility and choice of training camp.", time: "TIME: 1-2 DAYS" },
    { num: "02", title: "CAMP ENROLLMENT", desc: "Deposit payment and receipt of official invitation documents from gym.", time: "TIME: 3-5 DAYS" },
    { num: "03", title: "SAT CERTIFICATION", desc: "Submission to the Sports Authority of Thailand for official visa endorsement.", time: "TIME: 10-14 DAYS" },
    { num: "04", title: "GOVERNMENT PROCESSING", desc: "The certified invitation letter from the Sports Authority of Thailand is forwarded to the Department of Consular Affairs, and then to your chosen Royal Thai Embassy or Consulate.", time: "TIME: ~ 3 WEEKS" },
    { num: "05", title: "APPLY FOR YOUR VISA", desc: "Upload your documents to the Thai e-Visa System, pay the fee, and attend an interview if required. Once approved, your visa will be issued electronically.\n\nPlease note: Do not enter Thailand while your application is in process, as this may lead to cancellation.", time: "" },
  ];

  return (
    <section id="visa-process" className="py-24 bg-[#1a1a1a] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter max-w-3xl mb-10">
          MUAY THAI ED / DTV VISA PROCESS: COMPLETE OVERVIEW & TIMELINE
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((s, i) => (
            <div key={i} className="bg-[#222] p-8 relative border-l-4 border-[#e60000]">
              <span className="absolute top-4 right-4 text-4xl font-black text-white/5">{s.num}</span>
              <p className="text-[#e9c349] font-bold text-xs tracking-widest mb-2">STEP {i + 1}</p>
              <h3 className="text-xl font-black text-white uppercase mb-4">{s.title}</h3>
              <p className="text-white/50 text-sm mb-6 whitespace-pre-line">{s.desc}</p>
              {s.time && (
                <p className="text-white/30 font-bold text-xs uppercase tracking-widest">{s.time}</p>
              )}
            </div>
          ))}
          <div className="bg-[#e60000] p-8 flex flex-col items-center justify-center text-center">
            <Clock size={48} className="text-white mb-4" />
            <h3 className="text-2xl font-black text-white uppercase">ESTIMATED TOTAL TIMELINE</h3>
            <p className="text-4xl font-black text-[#e9c349] mt-2">30-45 days</p>
          </div>
        </div>

        {/* 💡 ย้ายรูปภาพ Infographic Roadmap (Pic 1) มาไว้ตรงนี้ (ใต้ Grid ขั้นตอนการทำงาน) */}
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

const Locations = () => {
  const regions = [
    {
      title: "CENTRAL THAILAND",
      camps: [
        { city: "Bangkok", gym: "KaewSamrit Gym", gymThai: "แก้วสัมฤทธิ์", fbUrl: "https://www.facebook.com/kaewsamritgym", mapUrl: "https://maps.app.goo.gl/35EawV1W38YfK5p68" },
        { city: "Bangkok", gym: "Nok Jeans Ladkrabang Muay Thai", gymThai: "นกยีนส์ลาดกระบัง", fbUrl: "https://www.facebook.com/p/%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%A1%E0%B8%A7%E0%B8%A2-%E0%B8%99%E0%B8%81%E0%B8%A2%E0%B8%B5%E0%B8%99%E0%B8%AA%E0%B9%8C%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B1%E0%B8%87-%E0%B8%A1%E0%B8%A7%E0%B8%A2%E0%B9%84%E0%B8%97%E0%B8%A2-100054528276685/?locale=th_TH", mapUrl: "https://maps.app.goo.gl/q5Gd4CLeH2HDXRKV9" },
        { city: "Bangkok", gym: "Wor.Auracha MuayThai Gym", gymThai: "ว.อุรชา", fbUrl: "https://www.facebook.com/Wor.Auracha/?locale=th_TH", mapUrl: "https://maps.app.goo.gl/ghXToKWTTJZZrTTc8" },
        { city: "Chai Nat", gym: "Chaopraya Muay Thai", gymThai: "เจ้าพระยามวยไทย", fbUrl: "https://www.facebook.com/share/187zuSVXcJ/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/YvqdAmG4Ge1Ez5cy8" },
        { city: "Nonthaburi", gym: "Sor. Suwannaran Muay Thai", gymThai: "ศ.สุวรรณารัณย์", fbUrl: "https://www.facebook.com/krugunmuaythai/?locale=th_TH", mapUrl: "https://maps.app.goo.gl/4aVyGdAmZrotJHGf7" },
        { city: "Pathum Thani", gym: "Singmanasak Gym", gymThai: "สิงห์มนัสศักดิ์", fbUrl: "https://www.facebook.com/share/1CQq7rQ1td/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/qWr6fuYe8MR47uHz6" },
        { city: "Samut Prakan", gym: "Sor. Songtham Muay Thai", gymThai: "ศ.ทรงธรรม", fbUrl: "https://www.facebook.com/share/1861pHYrjX/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/by5PVZSABQSFSpgRA" },
        { city: "Saraburi", gym: "Kiat Chamroon", gymThai: "เกียรติจำรูญ", fbUrl: "https://www.facebook.com/p/%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%A1%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B8%88%E0%B8%B3%E0%B8%A3%E0%B8%B9%E0%B8%8D-100057305454164/?locale=th_TH", mapUrl: "maps.app.goo.gl/c4cZMwLic2kD7iFHA" },
        { city: "Sing Buri", gym: "J.Apichat MuayThai Gym", gymThai: "จ.อภิชาติมวยไทยยิม", fbUrl: "https://www.facebook.com/share/1HsQB6nLSz/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/RN6aEqP5EpoYuNmB7" }
      ]
    },
    {
      title: "EASTERN THAILAND",
      camps: [
        { city: "Chonburi", gym: "Ha Payak Muay Thai Gym", gymThai: "ห้าพยัคฆ์มวยไทย", fbUrl: "https://sites.google.com/view/hapayak", mapUrl: "https://maps.app.goo.gl/NSbiftLiYu9rnK297" },
        { city: "Chonburi", gym: "Por. Chimplee Muay Thai", gymThai: "ป.ฉิมพลี", fbUrl: "https://www.facebook.com/share/1QmKNUgJcH/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/19ES2pNCbRXwVVhD7" },
        { city: "Prachin Buri", gym: "Sor. Meeanan Muay Thai", gymThai: "ส.มีอนันต์", fbUrl: "https://www.facebook.com/s.meeanan", mapUrl: "https://maps.app.goo.gl/xnZLXAe1aNsZ3Enn9" },
        { city: "Rayong", gym: "Sor.Ninthai Muaythai Gym", gymThai: "ส.นิลทัย", fbUrl: "https://www.facebook.com/share/1XkrKXWvNy/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/vH9dBWH6fJMvKm1C9" }
      ]
    },
    {
      title: "NORTHEASTERN (ISAN)",
      camps: [
        { city: "Buriram", gym: "Phet Nong Ki Muay Thai", gymThai: "เพชรหนองกี่", fbUrl: "https://www.facebook.com/share/1C1iiXmw24/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/SW9hrhnvj56u6F446" },
        { city: "Buriram", gym: "Por.Mongkolin", gymThai: "ป.มงคลอินทร์", fbUrl: "https://www.facebook.com/khay.mwy.p.mngkhl.xinthr?mibextid=wwXIfr&mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/CS33kzqSTV4HkRNr9?g_st=il" },
        { city: "Buriram", gym: "Sit Jack MuayThai", gymThai: "ศิษย์แจ๊กมวยไทย", fbUrl: "https://www.facebook.com/share/1AdQqNd2nq/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/6aRnwEvGaM19bdmD7" },
        { city: "Kalasin", gym: "Sor. Rodjarin Muay Thai", gymThai: "ส.รจนา", mapUrl: "https://maps.app.goo.gl/BC3xtexhSkoFKJNm6" },
        { city: "Khon Kaen", gym: "Gumpun Muay Thai Khon Kaen", gymThai: "กำปั้นมวยไทย (ขอนแก่น)", mapUrl: "https://maps.app.goo.gl/CXrEdiMnfgZVZzxC6" },
        { city: "Loei", gym: "Aor.Yutthachai", gymThai: "อ.ยุทธชัย", fbUrl: "https://www.facebook.com/profile.php?id=61588659636876#", mapUrl: "https://maps.app.goo.gl/PEPm9YTWquYqqv8d8" },
        { city: "Maha Sarakham", gym: "Sit Phananchoeng Muay Thai", gymThai: "ศิษย์พนัญเชิง", fbUrl: "https://www.facebook.com/share/1Dhz9rtpvx/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/hqzVauahhMvoyp8U6" },
        { city: "Nakhon Ratchasima", gym: "Gumpun Muay Thai Korat", gymThai: "กำปั้นมวยไทย (โคราช)", mapUrl: "https://maps.app.goo.gl/STKT94mZnXZky6sx9" },
        { city: "Nakhon Ratchasima", gym: "Phimai Phongsathorn", gymThai: "พิมายพงศธร", fbUrl: "https://www.facebook.com/share/17LYdqdLR4/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/xTfXte6jA9LEx3Bg7" },
        { city: "Nong Khai", gym: "Sor. Sophon Muay Thai", gymThai: "ส.โสภณ", fbUrl: "https://www.facebook.com/share/1ENe4GZGVX/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/duhPJoo3iZDEJCiw8" },
        { city: "Sakon Nakhon", gym: "Jackie Gyms Muay Thai", gymThai: "แจ็คกี้ยิมส์", fbUrl: "https://www.facebook.com/share/1DMrW8YT2x/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/MpGNeyAvpc5z5JAr9" },
        { city: "Surin", gym: "Pakorn Porn Muay Thai", gymThai: "ปกรณ์พร", fbUrl: "https://www.facebook.com/share/1DR1EZ1zYg/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/knb6sk62nduuEDdi7" },
        { city: "Ubon Ratchathani", gym: "Sor. Sak Ubon Muay Thai", gymThai: "ศ.ศักดิ์อุบล", fbUrl: "https://www.facebook.com/share/1JhFzeTt4B/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/Yh5yuUGKQZCgvbAXA" },
        { city: "Udon Thani", gym: "Kaen Norsing Muay Thai", gymThai: "แก่นนรสิงห์", fbUrl: "https://www.facebook.com/share/1DWLHfYKkP/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/ZarKLaRmSH3cEnkJ6" },
        { city: "Yasothon", gym: "Aor. Phet Khunsuek Muay Thai", gymThai: "อ.เพชรขุนศึก", mapUrl: "https://maps.app.goo.gl/M8bungkCSg5cfuYv6" },
        { city: "Yasothon", gym: "Sai Mun Snooker Club", gymThai: "ทรายมูลสนุ๊กเกอร์คลับ", fbUrl: "https://www.facebook.com/share/18LC9xWHqa/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/TPGomz2mH4F7u2929" },
        { city: "Yasothon", gym: "Sor. Ninthai Muay Thai", gymThai: "ส.นิลไทย", mapUrl: "https://maps.app.goo.gl/Hkxth15Pp7PfjA9X8" }
      ]
    },
    {
      title: "NORTHERN THAILAND",
      camps: [
        { city: "Chiang Mai", gym: "Champions GYM", gymThai: "", fbUrl: "https://www.facebook.com/thaiboxingcnx/?locale=th_TH", mapUrl: "https://maps.app.goo.gl/fQepi9L9XSwcdoDK8" },
        { city: "Chiang Rai", gym: "The Underdog Muay Thai Gym", gymThai: "", fbUrl: "https://www.facebook.com/TheUnderdogMuayThaiGym", mapUrl: "https://maps.app.goo.gl/1pneBRhvHqrjUqUi7" },
        { city: "Kamphaeng Phet", gym: "Kiat Chatchai", gymThai: "เกียรติฉัตรชัย", fbUrl: "https://www.facebook.com/share/17nrStp76x/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/pt13S7JBUSw8VkVm9" },
        { city: "Kamphaeng Phet", gym: "Look Thap Ong Dam", gymThai: "ลูกทัพองค์ดำ", fbUrl: "https://www.facebook.com/share/1ASrR8K2yN/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/TU2PGtHTd4zti6Mo6" },
        { city: "Lamphun", gym: "Aor. Sanitpan", gymThai: "อ.สนิทพันธุ์", fbUrl: "https://www.facebook.com/share/1DCtA3AF1h/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/pcnzdgwemuTD1vB76" },
        { city: "Nan", gym: "Kiatpichitchai", gymThai: "เกียรติพิชิตชัย", fbUrl: "https://www.facebook.com/share/1Jtr2HYv5H/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/zsZbQzKucU9m7pJ2A" },
        { city: "Nan", gym: "T20 Sport Complex", gymThai: "T20", fbUrl: "https://www.facebook.com/share/1DQjSTPEr5/", mapUrl: "https://maps.app.goo.gl/qCG6pxQFFxf6F1a18" },
        { city: "Phitsanulok", gym: "JP Boxing Gym", gymThai: "เจพี บ๊อกซิ่งยิม", fbUrl: "https://www.facebook.com/share/1FisaF6BWB/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/jWx1HQUYJzAEjxSE9" },
        { city: "Phitsanulok", gym: "Suwanno Muay Thai", gymThai: "สุวรรณโณ (ศ.ไก่เขี่ย)", fbUrl: "https://www.facebook.com/share/1FqFhLX6Lm/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/97q6y8QaSGmqtJ8x7?g_st=ipc" },
        { city: "Uttaradit", gym: "Tor. Khong-In", gymThai: "ต.คงอินทร์", fbUrl: "https://www.facebook.com/share/18RGuKww3b/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/BBVXsxTVHPwJSurB8" }
      ]
    },
    {
      title: "SOUTHERN THAILAND",
      camps: [
        { city: "Chumphon", gym: "Kiat Yodying", gymThai: "เกียรติยอดยิ่ง", fbUrl: "https://www.facebook.com/share/1CHdJpAbm9/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/cUdo2DC2K4qMKxPN7" },
        { city: "Krabi", gym: "Kmax gym", gymThai: "", fbUrl: "https://www.facebook.com/kmaxgymTh/?locale=th_TH", mapUrl: "https://maps.app.goo.gl/xVS2wAADAhuEgRom9" },
        { city: "Nakhon Si Thammarat", gym: "Legend MuayThai", gymThai: "เลเจนมวยไทย", fbUrl: "https://www.facebook.com/Krumeechai/", mapUrl: "https://maps.app.goo.gl/QUCaAxKFEioavaAy9" },
        { city: "Phuket", gym: "Surakit Gym Phuket", gymThai: "สุรกิตย์", fbUrl: "https://www.facebook.com/masterjayphuket/?locale=th_TH", mapUrl: "https://maps.app.goo.gl/8GP4LZYmN3ELL6Ya9" },
        { city: "Songkhla", gym: "Saenrak Muay Thai", gymThai: "แสนรักมวยไทย", fbUrl: "https://www.facebook.com/share/1Dqz3nkE9V/?mibextid=wwXIfr", mapUrl: "https://maps.app.goo.gl/krGAJqKrTXwpAQSk8" },
        { city: "Surat Thani", gym: "Singha Samui Muay Thai", gymThai: "สิงห์สมุยมวยไทย", fbUrl: "https://www.instagram.com/singsamui_muaythai/", mapUrl: "https://maps.app.goo.gl/5wY44PCKKeDDfS9d9" }
      ]
    }
  ];

  return (
    <section id="partner-camps" className="py-24 bg-[#131313] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#e60000] font-bold uppercase text-xs tracking-[0.3em] mb-2">PARTNER CAMPS</p>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">CERTIFIED MUAY THAI CAMPS ACROSS THAILAND</h2>

        <p className="text-white/60 max-w-3xl mx-auto mb-16">
          We work with partner Muay Thai camps across all regions of Thailand — from city gyms to authentic provincial training environments. Choose your training location here:
        </p>

        {/* --- Professional Map Section --- */}
        <div className="relative max-w-5xl mx-auto mb-16 group text-left">
          {/* แสงเงาด้านหลัง (Glow Effect) เพิ่มความพรีเมียม */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#e60000] to-[#e9c349] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>

          <div className="relative bg-[#1a1a1a] p-2 md:p-4 rounded-xl border border-white/10 shadow-2xl">

            {/* 💡 เทคนิคซ่อนแถบเมนูด้านบนของ Google Maps 
              - ใช้ overflow-hidden เพื่อตัดส่วนที่ล้นออก
              - ปรับ marginTop ให้ติดลบมากขึ้นเป็น -75px เพื่อดึงแถบหัวสีเทาขึ้นไปซ่อนให้มิดยิ่งขึ้น
              - (คุณสามารถปรับตัวเลข 75 เป็น 80 หรือ 85 ได้ตามความต้องการครับ)
            */}
            <div className="w-full h-[350px] md:h-[450px] rounded-lg overflow-hidden bg-[#222] relative border border-white/5">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1KUPZa4ZIWSmkGcG4KQPYPqryF5RthqA&ehbc=2E312F"
                className="w-full border-0 opacity-90 hover:opacity-100 transition-opacity duration-500"
                style={{ height: 'calc(100% + 75px)', marginTop: '-75px' }}
                title="Gumpun Muay Thai Partner Camps Map"
              ></iframe>
            </div>

            {/* แถบข้อมูลด้านล่างแผนที่ (Custom Footer) */}
            <div className="flex flex-wrap items-center justify-between pt-4 px-2 pb-1 gap-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e60000] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#e60000]"></span>
                </span>
                <span className="text-white/50 font-bold uppercase text-[10px] tracking-widest">
                  Interactive Live Map
                </span>
              </div>
              <a
                href="https://www.google.com/maps/d/viewer?mid=1KUPZa4ZIWSmkGcG4KQPYPqryF5RthqA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e9c349] hover:text-white text-[10px] uppercase tracking-widest font-bold flex items-center gap-1 transition-colors"
              >
                Open in Google Maps <ChevronRight size={14} />
              </a>
            </div>

          </div>
        </div>
        {/* --- End Professional Map Section --- */}

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
                      {/* ชื่อภาษาอังกฤษ (ใหญ่และเด่นกว่า) */}
                      <span className="text-white font-black block text-[15px] leading-tight mb-1">{camp.gym}</span>
                      {/* ชื่อภาษาไทย (เล็กลงมาและสีดรอปนิดหน่อย แสดงเฉพาะค่ายที่มี) */}
                      {camp.gymThai && (
                        <span className="text-white/60 font-medium block text-xs leading-tight mb-3">{camp.gymThai}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-3">
                      {camp.mapUrl && camp.mapUrl !== "#" && (
                        <a href={camp.mapUrl} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#e60000] flex items-center gap-1.5 text-xs font-medium transition-colors">
                          <MapPin size={12} /> Maps
                        </a>
                      )}

                      {/* ส่วนลิงก์ Social: เปลี่ยน Icon และสีตามลิงก์อัตโนมัติ (IG หรือ FB) */}
                      {camp.fbUrl && camp.fbUrl !== "#" && (
                        <a
                          href={camp.fbUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${camp.fbUrl.includes("instagram.com")
                            ? "text-white/50 hover:text-[#E1306C]" // สี IG
                            : "text-white/50 hover:text-[#1877F2]" // สี FB
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
  const reasons = [
    { icon: <Award size={24} />, title: "VERIFIED PARTNER GYMS" },
    { icon: <Zap size={24} />, title: "STRUCTURED PROCESS" },
    { icon: <ShieldCheck size={24} />, title: "COMPLIANCE-FOCUSED" },
    { icon: <CreditCard size={24} />, title: "CLEAR PAYMENT" },
    { icon: <Headphones size={24} />, title: "ONGOING SUPPORT" },
  ];

  return (
    <section className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">WHY CHOOSE GUMPUN MUAY THAI</h2>
        <div className="w-24 h-1 bg-[#e60000] mx-auto mb-16"></div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {reasons.map((r, i) => (
            <div key={i} className="bg-[#222] p-8 flex flex-col items-center gap-4 hover:bg-[#2a2a2a] transition-all">
              <div className="text-[#e9c349]">{r.icon}</div>
              <h4 className="text-white font-bold uppercase text-xs tracking-widest leading-tight">{r.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImportantNotice = () => {
  const notices = [
    {
      title: "COORDINATION ONLY",
      desc: "Gumpun Muay Thai provides coordination and documentation support for Muay Thai training programs in\u00A0Thailand.",
      icon: <FileText size={24} className="text-[#e60000]" />
    },
    {
      title: "VISA DECISIONS",
      desc: "We do not provide legal or immigration advice, and we do not have authority over visa decisions. All visa approvals are determined solely by the Royal Thai Embassy or Consulate where the application is\u00A0submitted.",
      icon: <ShieldCheck size={24} className="text-[#e60000]" />
    },
    {
      title: "PROCESSING TIMELINES",
      desc: "Processing timelines provided are estimates based on typical procedures and may vary depending on the Sports Authority of Thailand (SAT) and the Royal Thai Embassy or\u00A0Consulate.",
      icon: <Clock size={24} className="text-[#e60000]" />
    },
    {
      title: "APPLICANT RESPONSIBILITY",
      desc: "Applicants are responsible for ensuring that all submitted information and documents are accurate and\u00A0complete.",
      icon: <CheckCircle2 size={24} className="text-[#e60000]" />
    }
  ];

  return (
    <section className="py-24 bg-[#131313] border-t border-b border-white/5 relative overflow-hidden">
      {/* เอฟเฟกต์แสงจางๆ พื้นหลัง เพิ่มความมีมิติให้โซนนี้ */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-[#e60000]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <ShieldCheck className="text-[#e60000] mb-4" size={48} />
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
            Important Information
          </h2>
          <div className="w-20 h-1 bg-[#e60000] mt-4"></div>
        </div>

        {/* 💡 แบ่งเป็น Grid 2x2 และนำ Icon ไว้ด้านบน เพื่อให้ตัวหนังสือมีพื้นที่แนวนอนเต็มที่ */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {notices.map((item, i) => (
            <div key={i} className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 hover:border-white/10 hover:bg-[#222] transition-all group flex flex-col gap-6">

              {/* กล่อง Icon แยกชัดเจน */}
              <div className="bg-[#131313] w-14 h-14 rounded-xl border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:border-[#e60000]/30 transition-all shadow-lg">
                {item.icon}
              </div>

              {/* พื้นที่ตัวหนังสือเต็มความกว้าง */}
              <div>
                <h4 className="text-[#e9c349] font-black uppercase tracking-widest mb-3 text-sm">
                  {item.title}
                </h4>
                <p className="text-white/60 text-sm md:text-base leading-relaxed group-hover:text-white/90 transition-colors">
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
  return (
    <section id="contact" className="py-24 bg-[#e60000] relative overflow-hidden scroll-mt-20">
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none select-none">
        <h2 className="text-[20rem] font-black text-black leading-none -mb-20">MUAY</h2>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.9] tracking-tighter mb-6">
          START YOUR <span className="text-black">MUAY THAI</span> JOURNEY.
        </h2>
        <p className="text-white font-bold text-xl md:text-2xl uppercase mb-12">
          REACH OUT TO US DIRECTLY VIA ANY OF OUR CHANNELS BELOW TO GET STARTED.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {/* LINE */}
          <a href="https://line.me/R/ti/p/@gumpunmuaythai" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 bg-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-white hover:-translate-y-1 transition-all border border-white/20 group shadow-lg">
            <MessageSquare className="text-white group-hover:text-[#00B900] transition-colors" size={44} />
            <div className="text-center mt-2">
              <p className="text-white/60 group-hover:text-black/50 font-bold text-[10px] uppercase tracking-widest mb-1 transition-colors">LINE OFFICIAL</p>
              <p className="text-white group-hover:text-black font-black text-xl transition-colors">@gumpunmuaythai</p>
            </div>
          </a>

          {/* EMAIL */}
          <a href="mailto:gumpun@gumpunmuaythai.club" className="flex flex-col items-center justify-center gap-3 bg-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-white hover:-translate-y-1 transition-all border border-white/20 group shadow-lg">
            <Mail className="text-white group-hover:text-[#e60000] transition-colors" size={44} />
            <div className="text-center mt-2">
              <p className="text-white/60 group-hover:text-black/50 font-bold text-[10px] uppercase tracking-widest mb-1 transition-colors">EMAIL</p>
              <p className="text-white group-hover:text-black font-black text-lg sm:text-xl transition-colors truncate w-full px-2">gumpun@gumpunmuaythai.club</p>
            </div>
          </a>

          {/* INSTAGRAM */}
          <a href="https://www.instagram.com/gumpun_visa" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 bg-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-white hover:-translate-y-1 transition-all border border-white/20 group shadow-lg">
            <Instagram className="text-white group-hover:text-[#E1306C] transition-colors" size={44} />
            <div className="text-center mt-2">
              <p className="text-white/60 group-hover:text-black/50 font-bold text-[10px] uppercase tracking-widest mb-1 transition-colors">INSTAGRAM</p>
              <p className="text-white group-hover:text-black font-black text-xl transition-colors">@gumpun_visa</p>
            </div>
          </a>

          {/* FACEBOOK */}
          <a href="https://www.facebook.com/people/Muay-Thai-ED-DTV-Visa-Support/61588289336687/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 bg-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-white hover:-translate-y-1 transition-all border border-white/20 group shadow-lg">
            <Facebook className="text-white group-hover:text-[#1877F2] transition-colors" size={44} />
            <div className="text-center mt-2">
              <p className="text-white/60 group-hover:text-black/50 font-bold text-[10px] uppercase tracking-widest mb-1 transition-colors">FACEBOOK</p>
              <p className="text-white group-hover:text-black font-black text-xl transition-colors">Muay Thai ED&DTV Visa support</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

const PrivacyPolicy = ({ setCurrentPage }: PageProps) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-white">
      <button
        onClick={() => setCurrentPage('home')}
        className="flex items-center gap-2 text-[#e9c349] hover:text-white transition-colors mb-8 font-bold uppercase tracking-widest text-sm"
      >
        <ArrowLeft size={16} /> Back to Home
      </button>

      <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 border-b border-white/10 pb-6">Privacy Policy</h1>

      <div className="space-y-8 text-white/70 leading-relaxed">
        <div>
          <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">1. Information Collection</h2>
          <p>We collect information you provide directly to us when you request visa coordination services, including but not limited to your name, contact information, passport details, current visa status, and preferred training locations. This information is strictly used for the purpose of assessing your eligibility and facilitating the Muay Thai ED/DTV visa process.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">2. Use of Information</h2>
          <p>The information collected is used solely to coordinate with partner Muay Thai camps and prepare necessary documentation for the Sports Authority of Thailand (SAT) and respective Royal Thai Embassies or Consulates. We do not sell, rent, or share your personal data with unrelated third parties.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">3. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">4. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us via our official email at gumpun@gumpunmuaythai.club.</p>
        </div>
      </div>
    </section>
  );
};

const TermsOfService = ({ setCurrentPage }: PageProps) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-white">
      <button
        onClick={() => setCurrentPage('home')}
        className="flex items-center gap-2 text-[#e9c349] hover:text-white transition-colors mb-8 font-bold uppercase tracking-widest text-sm"
      >
        <ArrowLeft size={16} /> Back to Home
      </button>

      <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 border-b border-white/10 pb-6">Terms of Service</h1>

      <div className="space-y-8 text-white/70 leading-relaxed">
        <div>
          <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">1. Service Description</h2>
          <p>Gumpun Muay Thai operates strictly as a coordination and documentation support agency. We connect prospective trainees with SAT-certified Muay Thai camps and assist in gathering and organizing the paperwork required for ED and DTV visa applications.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">2. Limitation of Liability</h2>
          <p>We do not provide legal or immigration advice. Gumpun Muay Thai has no authority over visa issuance. All decisions regarding visa approvals, denials, or delays rest entirely with the Royal Thai Embassy or Consulate. We are not liable for any financial loss, travel disruptions, or rejected applications.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">3. Applicant Responsibilities</h2>
          <p>It is the applicant's responsibility to ensure that all personal information, financial proofs, and submitted documents are genuine, accurate, and meet the specific requirements of their local Thai Embassy. Applicants must also adhere to the attendance rules and regulations set by their chosen Muay Thai camp once the visa is granted.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">4. Payments and Refunds</h2>
          <p>Coordination fees and gym deposits are subject to the individual policies of the partner camps. Please review the specific payment and refund terms provided during your enrollment process before making any financial commitments.</p>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ setCurrentPage }: PageProps) => {
  const handleScrollToFaq = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage('home');
    setTimeout(() => {
      document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-[#0e0e0e] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div className="flex flex-col items-center gap-2">
            <img
              src="/gumpunmuaythailogo.png"
              alt="Gumpun Muay Thai Logo"
              className="h-14 w-14 md:h-16 md:w-16 object-contain"
              onError={(e) => {
                e.currentTarget.src = "https://ui-avatars.com/api/?name=GMT&background=e60000&color=fff&rounded=true";
              }}
            />
            <span className="text-[#e9c349] font-black uppercase tracking-tighter text-xl md:text-2xl">GUMPUN MUAY THAI</span>
          </div>

          <p className="text-white/30 text-xs font-bold uppercase tracking-widest text-center">
            © {new Date().getFullYear()} GUMPUN MUAY THAI. ALL RIGHTS RESERVED.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#faq" onClick={handleScrollToFaq} className="text-white/40 hover:text-white transition-colors text-[10px] md:text-xs font-bold uppercase tracking-widest cursor-pointer">FAQ</a>
            <span onClick={() => setCurrentPage('privacy')} className="text-white/40 hover:text-white transition-colors text-[10px] md:text-xs font-bold uppercase tracking-widest cursor-pointer">Privacy Policy</span>
            <span onClick={() => setCurrentPage('terms')} className="text-white/40 hover:text-white transition-colors text-[10px] md:text-xs font-bold uppercase tracking-widest cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingContact = () => {
  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-50 bg-[#e60000] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Contact Us"
    >
      <MessageSquare size={28} />
      <span className="absolute right-16 bg-white text-black text-xs font-bold uppercase px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Contact Us
      </span>
    </a>
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