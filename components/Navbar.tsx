"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Navbar({ lang }: { lang: string }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const currentLang = pathname?.split("/")[1] || lang || "vi";
  const menuData: Record<string, any[]> = {
    vi: [{ name: "Trang chủ", href: "/vi" }, { name: "Giới thiệu", href: "/vi/about" }, { name: "Dịch vụ", href: "/vi/services" }, { name: "Sản phẩm", href: "/vi/products" }, { name: "Liên hệ", href: "/vi/contact" }],
    en: [{ name: "Home", href: "/en" }, { name: "About", href: "/en/about" }, { name: "Services", href: "/en/services" }, { name: "Products", href: "/en/products" }, { name: "Contact", href: "/en/contact" }],
    ja: [{ name: "ホーム", href: "/ja" }, { name: "紹介", href: "/ja/about" }, { name: "サービス", href: "/ja/services" }, { name: "製品", href: "/ja/products" }, { name: "連絡先", href: "/ja/contact" }],
    ko: [{ name: "홈", href: "/ko" }, { name: "소개", href: "/ko/about" }, { name: "サービス", href: "/ko/services" }, { name: "제품", href: "/ko/products" }, { name: "문의하기", href: "/ko/contact" }],
    zh: [{ name: "首页", href: "/zh" }, { name: "关于我们", href: "/zh/about" }, { name: "服务", href: "/zh/services" }, { name: "产品", href: "/zh/products" }, { name: "联系 chúng tôi", href: "/zh/contact" }]
  };

  const menu = menuData[currentLang] || menuData.vi;
  const currentCallLabel = { vi: "Hotline", en: "Call", ja: "電話", ko: "전화", zh: "电话" }[currentLang] || "Call";

  const getNewPath = (targetLang: string) => {
    if (!pathname) return `/${targetLang}`;
    const segments = pathname.split("/");
    segments[1] = targetLang;
    return segments.join("/");
  };

  return (
    <>
      {/* 1. THANH NAVBAR CHÍNH */}
      <nav className="fixed top-0 w-full z-[1000] glass h-[clamp(64px,10vw,88px)] shadow-2xl border-b border-white/5">
        
        {/* 
            THAY ĐỔI TẠI ĐÂY: 
            Đổi 'container mx-auto px-3 md:px-6' 
            thành 'max-w-7xl mx-auto px-4 md:px-10' 
            để khớp 100% với Main và Footer 
        */}
        <div className="max-w-7xl mx-auto h-full px-4 md:px-10 grid grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-[auto_1fr_auto] items-center gap-2">
          
          {/* CỘT 1: LOGO */}
          <div className="h-full flex items-center min-w-0 overflow-hidden py-1"> 
            <Logo lang={currentLang} />
          </div>

          {/* CỘT 2: DESKTOP MENU (LG+) */}
          <ul className="hidden lg:flex items-center h-full justify-center space-x-1 font-black text-[11px] uppercase tracking-widest text-slate-400">
            {menu.map((item) => (
              <li key={item.href} className="h-full">
                <Link 
                  href={item.href} 
                  className={`h-full px-3 flex items-center transition-all border-b-[3px] whitespace-nowrap ${
                    pathname === item.href ? 'text-orange-500 border-orange-500 bg-orange-500/5' : 'border-transparent hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CỘT 3: ACTIONS */}
          <div className="flex items-center gap-2 shrink-0 h-full">
             <div className="hidden lg:flex items-center gap-4 h-full">
                {/* Nút Hotline bây giờ sẽ dừng đúng lề, không bị lòi ra ngoài */}
                <a href="tel:0973133727" className="bg-[#ea580c] text-white px-5 py-2 rounded-sm font-black text-[10px] uppercase shadow-lg whitespace-nowrap">
                  {currentCallLabel}: 0973 133 727
                </a>
                <div className="flex gap-1">
                  {['VI', 'EN', 'JA', 'KO', 'ZH'].map((l) => (
                    <Link key={l} href={getNewPath(l.toLowerCase())} className={`w-7 h-7 flex items-center justify-center text-[9px] font-bold border ${currentLang === l.toLowerCase() ? 'bg-[#ea580c] border-[#ea580c] text-white' : 'border-slate-800 text-slate-500'}`}>{l}</Link>
                  ))}
                </div>
             </div>
            
            <button 
              onClick={() => setIsMobileMenuOpen(true)} 
              className="lg:hidden h-[70%] aspect-square flex items-center justify-center text-[#ea580c] bg-white/5 rounded-sm border border-white/10 shrink-0"
            >
              <div className="space-y-1.5 w-6">
                <span className="block h-0.5 w-full bg-current rounded-full"></span>
                <span className="block h-0.5 w-full bg-current rounded-full"></span>
                <span className="block h-0.5 w-full bg-current rounded-full"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* 2. MOBILE MENU OVERLAY - KHÔNG ĐỔI */}
      <div className={`
        fixed inset-0 w-full h-screen bg-[#020617]/98 backdrop-blur-3xl
        z-[11000] flex flex-col overflow-hidden transition-all duration-500
        ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
      `}>
        <div className="h-[clamp(64px,10vw,88px)] flex items-center justify-between px-4 border-b border-white/10 shrink-0 bg-[#020617]">
          <div className="h-full flex items-center min-w-0 overflow-hidden"><Logo lang={currentLang} /></div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="h-full aspect-square flex items-center justify-center text-[#ea580c]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="flex-1 flex flex-col justify-between overflow-y-auto px-8 py-[5vh]">
          <ul className="flex flex-col space-y-[3vh]">
            {menu.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)} className={`block uppercase font-black italic tracking-tighter text-[clamp(1.8rem,6vh,3.5rem)] leading-none ${pathname === item.href ? "text-[#ea580c]" : "text-white"}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 shrink-0 pb-10">
            <div className="grid grid-cols-5 gap-2 mb-8">
              {['vi', 'en', 'ja', 'ko', 'zh'].map((l) => (
                <Link key={l} href={getNewPath(l)} onClick={() => setIsMobileMenuOpen(false)} className={`py-4 text-center text-[10px] font-black border ${currentLang === l ? 'bg-[#ea580c] border-[#ea580c] text-white' : 'border-slate-800 text-slate-500'}`}>{l.toUpperCase()}</Link>
              ))}
            </div>
            <a href="tel:0973133727" className="flex items-center justify-center w-full bg-[#ea580c] text-white py-5 font-black uppercase tracking-widest text-sm shadow-2xl">{currentCallLabel}: 0973 133 727</a>
          </div>
        </div>
      </div>
    </>
  );
}