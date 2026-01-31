"use client";
import Link from "next/link";

export default function Logo({ lang }: { lang: string }) {
  const slogans: Record<string, string> = {
    vi: "Gia công cơ khí chính xác",
    en: "Precision Engineering",
    ja: "精密機械加工",
    ko: "정밀 기계 가공",
    zh: "精密机械加工",
  };

  return (
    <Link
      href={`/${lang}`}
      className="relative flex items-center h-full group shrink-0 gap-4 px-4 overflow-hidden whitespace-nowrap"
      >
        {/* whitespace-nowrap để đảm bảo chữ ZINITREK không bị xuống dòng */}


        
      {/* 1. HIỆU ỨNG VỆT SÁNG ÁNH KIM (Metallic Shine) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="shine-effect" />
      </div>

      {/* 2. HÌNH THOI (Rhombus) - Xoay 180 độ khi hover */}
      <div 
        className="relative h-full aspect-square bg-orange-600 flex items-center justify-center transition-transform duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) group-hover:rotate-[180deg]"
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
      >
        {/* CHỮ Z - Xoay 90 độ thành chữ N khi hover */}
        <span className="text-white text-2xl font-black transition-transform duration-500 group-hover:rotate-[90deg]">
          Z
        </span>
      </div>

      {/* 3. PHẦN TEXT BRAND */}
      <div className="flex flex-col justify-center z-20">
        <span className="text-2xl font-black tracking-tighter text-white leading-none uppercase">
          ZINITEK <span className="text-orange-500">PRECISION</span>
        </span>
        <span className="text-[9px] text-orange-500 tracking-[0.3em] uppercase font-bold mt-1.5">
          {slogans[lang] || slogans.en}
        </span>
      </div>

      {/* 4. CSS ANIMATION (Scoped inside the component) */}
      <style jsx>{`
        .shine-effect {
          position: absolute;
          top: -50%;
          left: -150%;
          width: 80px;
          height: 200%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 30%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0.1) 70%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(25deg);
          animation: metallicShine 8s infinite linear;
        }

        @keyframes metallicShine {
          0% { left: -150%; }
          20% { left: 150%; }
          100% { left: 150%; }
        }

        /* Hàm nội suy giúp hiệu ứng xoay mượt và nảy (tech feel) */
        .cubic-bezier {
          transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </Link>
  );
}