"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function Navbar({ lang }: { lang: string }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. Xử lý hiệu ứng cuộn (Shrink Header)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Khóa cuộn khi mở menu mobile
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  const currentLang = pathname?.split("/")[1] || lang || "vi";
  const menuData: Record<string, any[]> = {
    vi: [{ name: "Trang chủ", href: "/vi" }, { name: "Giới thiệu", href: "/vi/about" }, { name: "Dịch vụ", href: "/vi/services" }, { name: "Sản phẩm", href: "/vi/products" }, { name: "Liên hệ", href: "/vi/contact" }],
    en: [{ name: "Home", href: "/en" }, { name: "About", href: "/en/about" }, { name: "Services", href: "/en/services" }, { name: "Products", href: "/en/products" }, { name: "Contact", href: "/en/contact" }],
    ja: [{ name: "ホーム", href: "/ja" }, { name: "紹介", href: "/ja/about" }, { name: "サービス", href: "/ja/services" }, { name: "製品", href: "/ja/products" }, { name: "連絡先", href: "/ja/contact" }],
    ko: [{ name: "홈", href: "/ko" }, { name: "소개", href: "/ko/about" }, { name: "서비스", href: "/ko/services" }, { name: "제품", href: "/ko/products" }, { name: "문의하기", href: "/ko/contact" }],
    zh: [{ name: "首页", href: "/zh" }, { name: "关于", href: "/zh/about" }, { name: "服务", href: "/zh/services" }, { name: "产品", href: "/zh/products" }, { name: "联系 ", href: "/zh/contact" }]
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
      <nav 
        className={`fixed top-0 w-full z-[1000] transition-all duration-500 ease-in-out
  ${isScrolled 
    ? "h-16 bg-[#020617]/90 backdrop-blur-xl border-b border-orange-500/20 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]" 
    : "h-24 bg-transparent border-none"}`} // Thay border-transparent bằng border-none cho chắc chắn
      >
        <div className="max-w-7xl mx-auto h-full px-4 md:px-10 flex items-center justify-between gap-4">
          
{/* LOGO: Giữ nguyên kích thước đẹp, chỉ thu nhỏ cực nhẹ khi cuộn để tinh tế */}
<motion.div 
  animate={{ 
    scale: isScrolled ? 0.95 : 1, // Thu nhỏ nhẹ hơn (0.95 thay vì 0.9)
    y: isScrolled ? 0 : 0 
  }}
  className="h-full flex items-center flex-shrink-0 py-2" // Thêm h-full và flex items-center để logo to ra
>
  <Logo lang={currentLang} />
</motion.div>

          {/* DESKTOP MENU: Modern Underline Effect */}
          <ul className="hidden lg:flex items-center gap-2 font-bold text-[11px] uppercase tracking-[0.2em] text-slate-400">
            {menu.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className="relative group px-4 py-2">
                  <Link 
                    href={item.href} 
                    className={`transition-colors duration-300 ${isActive ? 'text-white' : 'group-hover:text-white'}`}
                  >
                    {item.name}
                  </Link>
                  {/* Đường kẻ snake mượt mà */}
                  {isActive ? (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-500" 
                    />
                  ) : (
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full" />
                  )}
                </li>
              );
            })}
          </ul>

          {/* ACTIONS: Hotline & Language */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-6">
              {/* Nút Hotline Neon */}
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:0973133727" 
                className="relative group bg-orange-600 text-white px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-tighter shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-orange-500/50 transition-all"
              >
                <span className="relative z-10">{currentCallLabel}: 0973 133 727</span>
              </motion.a>

              {/* Language Switcher hiện đại */}
              <div className="flex bg-white/5 p-1 rounded-full border border-white/10">
                {['VI', 'EN', 'JA', 'KO', 'ZH'].map((l) => (
                  <Link 
                    key={l} 
                    href={getNewPath(l.toLowerCase())} 
                    className={`w-8 h-8 flex items-center justify-center text-[9px] font-black rounded-full transition-all
                    ${currentLang === l.toLowerCase() ? 'bg-orange-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
                  >
                    {l}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Hamburger Button: Animated */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)} 
              className="lg:hidden flex flex-col gap-1.5 p-2 bg-orange-600/10 rounded-lg border border-orange-500/20"
            >
              <span className="w-6 h-0.5 bg-orange-500"></span>
              <span className="w-4 h-0.5 bg-orange-500 ml-auto"></span>
              <span className="w-6 h-0.5 bg-orange-500"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* 2. MOBILE MENU: Staggered trượt từ bên phải */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-screen bg-[#020617] z-[1100] flex flex-col"
          >
            {/* Header trong menu mobile */}
            <div className="h-20 flex items-center justify-between px-6 border-b border-white/5">
              <Logo lang={currentLang} />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full text-orange-500"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* List menu với hiệu ứng Stagger */}
            <div className="flex-1 px-8 py-12">
              <div className="flex flex-col gap-8">
                {menu.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={item.href}
                  >
                    <Link 
                      href={item.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-4xl font-black uppercase italic tracking-tighter ${pathname === item.href ? "text-orange-500" : "text-white"}`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Mobile Menu */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-20"
              >
                <div className="grid grid-cols-5 gap-2 mb-10">
                  {['vi', 'en', 'ja', 'ko', 'zh'].map((l) => (
                    <Link key={l} href={getNewPath(l)} onClick={() => setIsMobileMenuOpen(false)} className={`py-3 text-center text-[10px] font-black border rounded-lg ${currentLang === l ? 'bg-orange-600 border-orange-600 text-white' : 'border-white/10 text-slate-500'}`}>{l.toUpperCase()}</Link>
                  ))}
                </div>
                <a href="tel:0973133727" className="flex items-center justify-center w-full bg-orange-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-[0_20px_40px_-10px_rgba(234,88,12,0.5)]">
                  {currentCallLabel}: 0973 133 727
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}