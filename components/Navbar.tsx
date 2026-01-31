"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Navbar({ lang }: { lang: string }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Xác định ngôn ngữ hiện tại dựa trên URL
  const currentLang = pathname?.split("/")[1] || lang || "vi";

  const menuData: Record<string, any[]> = {
    vi: [
      { name: "Trang chủ", href: "/vi" },
      { name: "Giới thiệu", href: "/vi/about" },
      { name: "Dịch vụ", href: "/vi/services" },
      { name: "Sản phẩm", href: "/vi/products" },
      { name: "Liên hệ", href: "/vi/contact" },
    ],
    en: [
      { name: "Home", href: "/en" },
      { name: "About", href: "/en/about" },
      { name: "Services", href: "/en/services" },
      { name: "Products", href: "/en/products" },
      { name: "Contact", href: "/en/contact" },
    ],
    ja: [
      { name: "ホーム", href: "/ja" },
      { name: "紹介", href: "/ja/about" },
      { name: "サービス", href: "/ja/services" },
      { name: "製品", href: "/ja/products" },
      { name: "連絡先", href: "/ja/contact" },
    ],
    ko: [
      { name: "홈", href: "/ko" },
      { name: "소개", href: "/ko/about" },
      { name: "서비스", href: "/ko/services" },
      { name: "제품", href: "/ko/products" },
      { name: "문의하기", href: "/ko/contact" },
    ],
    zh: [
      { name: "首页", href: "/zh" },
      { name: "关于我们", href: "/zh/about" },
      { name: "服务", href: "/zh/services" },
      { name: "产品", href: "/zh/products" },
      { name: "联系我们", href: "/zh/contact" },
    ]
  };

  const callLabels: Record<string, string> = {
    vi: "Hotline", en: "Call", ja: "電話", ko: "전화", zh: "电话"
  };

  const menu = menuData[currentLang] || menuData.vi;
  const currentCallLabel = callLabels[currentLang] || callLabels.en;

  const getNewPath = (targetLang: string) => {
    if (!pathname) return `/${targetLang}`;
    const segments = pathname.split("/");
    segments[1] = targetLang;
    return segments.join("/");
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass h-[88px] shadow-2xl">
      <div className="container mx-auto px-6 h-full flex justify-between items-center gap-4">
        
        {/* 1. Phần Logo: Thêm shrink-0 và mr-8 (hoặc mr-10) để đẩy Menu ra xa */}
        <div className="h-full flex items-center shrink-0 mr-10"> 
          <Logo lang={currentLang} />
        </div>

        {/* Desktop Menu */}  {/* ... Mẹo nhỏ: Nếu bạn thấy khoảng cách giữa các nút Menu (Trang chủ, Giới thiệu...) vẫn hơi chật, hãy đổi px-5 thành px-4 trong thẻ Link của Menu để tổng thể thanh Navbar trông thoáng hơn. */}
        <ul className="hidden lg:flex items-center h-full space-x-1 font-black text-[12px] uppercase tracking-widest">
          {menu.map((item) => {
            const isActive = pathname === item.href || (pathname.startsWith(item.href + '/') && item.href !== `/${currentLang}`);
            return (
              <li key={item.href} className="h-full">
                <Link 
                  href={item.href} 
                  className={`h-full px-5 flex items-center justify-center text-center leading-none transition-all border-b-[3px] hover:text-white hover:bg-white/5 ${
                    isActive
                    ? 'text-orange-500 border-orange-500 bg-orange-500/5' 
                    : 'text-slate-400 border-transparent hover:border-slate-700'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hotline & Language */}
        <div className="flex items-center gap-5 shrink-0">
           <a href="tel:0973133727" className="hidden xl:flex items-center justify-center bg-orange-600 text-white px-7 py-3 rounded-sm font-black text-[12px] uppercase tracking-wider hover:bg-orange-700 transition-all shadow-lg active:scale-95">
             {currentCallLabel}: 0973 133 727
           </a>

          <div className="flex items-center gap-1.5">
            {['vi', 'en', 'ja', 'ko', 'zh'].map((l) => (
              <Link 
                key={l} 
                href={getNewPath(l)}
                className={`w-9 h-9 flex items-center justify-center text-[10px] font-black border-2 transition-all active:scale-90 ${
                  currentLang === l 
                  ? 'bg-orange-600 border-orange-600 text-white' 
                  : 'border-slate-700 text-slate-400 hover:border-orange-500 hover:text-white'
                }`}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
          
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden flex flex-col justify-between w-7 h-5">
            <span className={`h-1 w-full bg-orange-500 transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`h-1 w-full bg-orange-500 transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`h-1 w-full bg-orange-500 transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-[#020617] border-t-2 border-orange-500/20 overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? "max-h-screen pb-10" : "max-h-0"}`}>
        <ul className="flex flex-col p-4 space-y-1 font-black text-sm uppercase tracking-widest text-center">
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-5 text-slate-400 hover:text-orange-500">
                {item.name}
              </Link>
            </li>
          ))}
          <li className="py-6 border-t border-white/10">
             <a href="tel:0973133727" className="text-orange-500 font-black text-lg">
                {currentCallLabel}: 0973 133 727
             </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}