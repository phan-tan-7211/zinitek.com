"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

export default function Logo({ lang }: { lang: string }) {
  const slogans: Record<string, string> = {
    vi: "Gia công cơ khí chính xác",
    en: "Precision Engineering",
    ja: "精密機械加工",
    ko: "정밀 기계 가 công",
    zh: "精密机械加工",
  };

  const shineControls = useAnimation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // =========================================================
  // THAM SỐ ĐIỀU CHỈNH ĐỘC LẬP (Mượt, không delay)
  // =========================================================
  const rhombusSpring = {
    type: "spring",
    stiffness: 400,
    damping: 30,
  };

  const zLetterSpring = {
    type: "spring",
    stiffness: 500,
    damping: 25,
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    shineControls.start({
      left: ["-150%", "250%"],
      opacity: [0, 1, 1, 0],
      transition: { duration: 1.2, ease: "easeInOut" }
    });
  };

  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Link
      href={`/${lang}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // overflow-visible để bóng đổ neon không bị cắt
      className="relative flex items-center h-full group shrink min-w-0 gap-3 sm:gap-4 px-6 py-3 overflow-visible whitespace-nowrap"
    >
      {/* 0. VIỀN NEON NHẤP NHÁY (Đã sửa: Đẩy ra ngoài bằng Negative Inset) */}
      {isLoaded && (
        <motion.div 
          animate={{ 
            boxShadow: [
              "0 0 5px rgba(234, 88, 12, 0.2)",
              "0 0 20px rgba(234, 88, 12, 0.6)",
              "0 0 5px rgba(234, 88, 12, 0.2)"
            ],
            borderColor: [
              "rgba(234, 88, 12, 0.3)",
              "rgba(234, 88, 12, 0.8)",
              "rgba(234, 88, 12, 0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          // inset-y-[-8px]: Đẩy viền lên trên và xuống dưới 8px để bao trọn hình thoi
          // inset-x-0: Giữ nguyên chiều ngang
          className="absolute inset-y-[-8px] inset-x-0 border rounded-lg pointer-events-none z-10"
        />
      )}

      {/* 1. VỆT SÁNG ÁNH KIM */}
      <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden rounded-lg">
        <motion.div
          animate={shineControls}
          initial={{ left: "-150%", opacity: 0 }}
          className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-30deg] blur-xl"
        />
      </div>

      {/* 2. BIỂU TƯỢNG HÌNH THOI (Xoay 180 độ độc lập) */}
      <motion.div
        animate={{ rotate: isHovered ? 180 : 0 }}
        transition={rhombusSpring}
        // Giữ kích thước cố định để không bị biến dạng khi header co lại
        className="relative h-10 w-10 sm:h-12 sm:w-12 bg-orange-600 flex items-center justify-center z-20 shrink-0 shadow-lg"
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
      >
        {/* CHỮ Z (Xoay 90 độ độc lập) */}
        <motion.span 
          animate={{ rotate: isHovered ? 90 : 0 }}
          transition={zLetterSpring}
          className="text-white text-lg sm:text-xl font-black select-none"
        >
          Z
        </motion.span>
      </motion.div>

      {/* 3. PHẦN TEXT BRAND */}
      <div className="flex flex-col justify-center z-20 min-w-0">
        <div className="flex items-center">
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[clamp(1.1rem,4vw,1.6rem)] font-black tracking-tighter text-white leading-none uppercase"
          >
            ZINITEK
          </motion.span>
          <span className="w-1.5" />
          <motion.span
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[clamp(1.1rem,4vw,1.6rem)] font-black tracking-tighter text-orange-600 leading-none uppercase"
          >
            PRECISION
          </motion.span>
        </div>

        {/* 4. SLOGAN PHÁT SÁNG */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isLoaded ? { 
            opacity: 1, 
            textShadow: [
              "0 0 2px rgba(234, 88, 12, 0)",
              "0 0 12px rgba(234, 88, 12, 0.9)",
              "0 0 2px rgba(234, 88, 12, 0)"
            ]
          } : { opacity: 0 }}
          transition={{ textShadow: { duration: 2, repeat: Infinity } }}
          className="text-[clamp(8px,1.6vw,10.5px)] text-orange-600 font-bold tracking-[0.1em] sm:tracking-[0.2em] uppercase mt-1.5 truncate"
        >
          {slogans[lang] || slogans.en}
        </motion.span>
      </div>
    </Link>
  );
}