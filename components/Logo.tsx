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
      /* 
         - shrink: Cho phép logo co lại khi không gian hẹp.
         - min-w-0: Bắt buộc phải có để các thành phần con bên trong co lại được.
         - gap-2 sm:gap-4: Thu hẹp khoảng cách trên mobile.
         - px-0 sm:px-4: Bỏ padding lề trên mobile để dành chỗ cho chữ.
      */
      className="relative flex items-center h-full group shrink min-w-0 gap-2 sm:gap-4 px-0 sm:px-4 overflow-hidden whitespace-nowrap"
    >
      {/* 1. HIỆU ỨNG VỆT SÁNG ÁNH KIM (Metallic Shine) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="shine-effect" />
      </div>

      {/* 2. HÌNH THOI (Rhombus) - Co giãn tỉ lệ theo chiều cao Navbar */}
      <div 
        className="relative h-[65%] sm:h-[75%] aspect-square bg-[#ea580c] flex items-center justify-center transition-transform duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) group-hover:rotate-[180deg] min-w-0"
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
      >
        {/* CHỮ Z - Font size co giãn tỉ lệ */}
        <span className="text-white text-[clamp(1rem,3vw,1.5rem)] font-black transition-transform duration-500 group-hover:rotate-[90deg]">
          Z
        </span>
      </div>

      {/* 3. PHẦN TEXT BRAND - TRÁI TIM CỦA SỰ CO GIÃN ĐỘNG */}
      <div className="flex flex-col justify-center z-20 min-w-0 overflow-hidden">
        {/* 
           Sử dụng clamp() để font-size tự động tính toán:
           - Nhỏ nhất: 1rem (16px) để vẫn đọc được trên Galaxy S8.
           - Lý tưởng: 4.2vw (4.2% chiều ngang màn hình).
           - Lớn nhất: 1.5rem (24px) cho Desktop.
        */}
        <span className="text-[clamp(1rem,4.2vw,1.5rem)] font-black tracking-tighter text-white leading-none uppercase transition-all duration-300">
          ZINITEK <span className="text-[#ea580c]">PRECISION</span>
        </span>
        
        {/* 
           Slogan: 
           - Tracking hẹp hơn trên mobile để không chiếm diện tích.
           - Clamp cho font-size nhỏ từ 7px đến 9px.
        */}
        <span className="text-[clamp(7px,1.8vw,9px)] text-[#ea580c] tracking-[0.05em] sm:tracking-[0.2em] uppercase font-bold mt-1.5 opacity-90 truncate">
          {slogans[lang] || slogans.en}
        </span>
      </div>

      {/* 4. CSS ANIMATION */}
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

        .cubic-bezier {
          transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </Link>
  );
}