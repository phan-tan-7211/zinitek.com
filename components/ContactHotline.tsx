"use client";
import { useEffect, useState } from "react";

export default function ContactHotline({ lang }: { lang: string }) {
  const [showTop, setShowTop] = useState(false);

  // Dictionary hỗ trợ 5 ngôn ngữ cho Zinitek
  const dict: any = {
    vi: {
      hotlineLabel: "Hotline",
      zaloLabel: "Zalo",
      mapLabel: "Vị Trí",
      zaloTooltip: "Chat Zalo",
      mapTooltip: "Xưởng Cơ Khí Zinitek",
    },
    en: {
      hotlineLabel: "Hotline",
      zaloLabel: "Zalo",
      mapLabel: "Location",
      zaloTooltip: "Chat Zalo",
      mapTooltip: "Zinitek Precision Workshop",
    },
    ja: {
      hotlineLabel: "電話",
      zaloLabel: "ザロ",
      mapLabel: "位置",
      zaloTooltip: "Zaloチャット",
      mapTooltip: "Zinitek機械工場",
    },
    ko: {
      hotlineLabel: "핫라인",
      zaloLabel: "자로",
      mapLabel: "위치",
      zaloTooltip: "Zalo 채팅",
      mapTooltip: "Zinitek 기계 공장",
    },
    zh: {
      hotlineLabel: "热线",
      zaloLabel: "扎洛",
      mapLabel: "位置",
      zaloTooltip: "Zalo 聊天",
      mapTooltip: "Zinitek 机械厂",
    },
  };

  const t = dict[lang] || dict.en;

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const tooltipClass = `
    absolute opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-[10000]
    whitespace-nowrap px-4 py-2 rounded-lg font-black text-white shadow-2xl text-sm
    max-md:bottom-[140%] max-md:left-1/2 max-md:-translate-x-1/2 
    md:left-16 md:top-1/2 md:-translate-y-1/2
  `;

  const arrowClass = `
    absolute w-0 h-0 border-8 border-transparent
    max-md:top-full max-md:left-1/2 max-md:-translate-x-1/2 max-md:border-t-inherit
    md:right-full md:top-1/2 md:-translate-y-1/2 md:border-r-inherit
  `;

  return (
    <div className="fixed inset-x-0 bottom-6 z-[9999] pointer-events-none max-md:bottom-0 max-md:bg-white/95 max-md:backdrop-blur-md max-md:border-t max-md:pointer-events-auto">
      <div className="container mx-auto px-6 max-md:px-0">
        <div className="flex flex-col gap-5 w-fit pointer-events-auto 
                        max-md:flex-row max-md:w-full max-md:justify-around max-md:p-3 max-md:shadow-2xl">
          
          {/* 1. HOTLINE */}
          <div className="relative group flex items-center justify-center">
            <a href="tel:0973133727" className="flex items-center max-md:flex-col gap-1">
              <div className="w-12 h-12 bg-[#ea580c] rounded-full flex items-center justify-center text-white animate-pulse-orange max-md:w-8 max-md:h-8 max-md:bg-transparent max-md:text-[#ea580c] max-md:animate-none">
                <svg className="w-6 h-6 animate-ring-shake max-md:animate-none" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"/>
                </svg>
              </div>
              <span className="hidden max-md:block text-[10px] font-black uppercase text-slate-900 tracking-tighter">
                {t.hotlineLabel}
              </span>
              
              <div className={`${tooltipClass} bg-[#ea580c] border-[#ea580c]`}>
                0973 133 727
                <div className={`${arrowClass} border-t-[#ea580c] md:border-r-[#ea580c]`}></div>
              </div>
            </a>
          </div>

          {/* 2. ZALO */}
          <div className="relative group flex items-center justify-center">
            <a href="https://zalo.me/0973133727" target="_blank" className="flex items-center max-md:flex-col gap-1">
              <div className="w-12 h-12 bg-[#2962ff] rounded-full flex items-center justify-center text-white animate-pulse-blue max-md:w-8 max-md:h-8 max-md:bg-transparent max-md:text-[#2962ff] max-md:animate-none">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 48 48"> 
                   <path d="M34.5,19c0-5.52-6.5-10-14.5-10S5.5,13.48,5.5,19c0,3.1,2.06,5.85,5.2,7.63l-1.03,3.77c-0.1,0.36,0.27,0.67,0.59,0.51l4.47-2.18c1.3,0.18,2.66,0.28,4.07,0.28C28,29,34.5,24.52,34.5,19z"/>
                </svg>
              </div>
              <span className="hidden max-md:block text-[10px] font-black uppercase text-slate-900 tracking-tighter">
                {t.zaloLabel}
              </span>
              
              <div className={`${tooltipClass} bg-[#2962ff] border-[#2962ff]`}>
                {t.zaloTooltip}
                <div className={`${arrowClass} border-t-[#2962ff] md:border-r-[#2962ff]`}></div>
              </div>
            </a>
          </div>

          {/* 3. ĐỊA CHỈ */}
          <div className="relative group flex items-center justify-center">
            <a href="https://www.google.com/maps/search/?api=1&query=Zinitek+Precision" target="_blank" className="flex items-center max-md:flex-col gap-1">
              <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-white max-md:w-8 max-md:h-8 max-md:bg-transparent max-md:text-slate-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"/>
                </svg>
              </div>
              <span className="hidden max-md:block text-[10px] font-black uppercase text-slate-900 tracking-tighter">
                {t.mapLabel}
              </span>
              
              <div className={`${tooltipClass} bg-slate-700 border-slate-700`}>
                {t.mapTooltip}
                <div className={`${arrowClass} border-t-slate-700 md:border-r-slate-700`}></div>
              </div>
            </a>
          </div>

          {/* 4. TOP */}
          <button 
            onClick={scrollToTop}
            className={`w-12 h-12 bg-slate-950 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-500 max-md:hidden
                       ${showTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4l-8 8h5v8h6v-8h5z"/>
            </svg>
          </button>

        </div>
      </div>
    </div>
  );
}