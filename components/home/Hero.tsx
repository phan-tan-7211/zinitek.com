"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero({ lang }: { lang: string }) {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<any[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const particleCount = 380; 

  useEffect(() => {
    setMounted(true);
    const newParticles = [...Array(particleCount)].map(() => {
      const rand = Math.random();
      let color = "#ffffff"; 
      if (rand > 0.6) color = "#00f2ff";      
        else if (rand > 0.3) color = "#ea580c"; 

      return {
        size: Math.random() * 3 + 1,
        color: color,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 4 + 2,
        delay: Math.random() * 10,
        driftDuration: Math.random() * 100 + 100
      };
    });
    setParticles(newParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const dict: any = {
    vi: { desc: "Uy tín - Chất lượng - Tiến độ", h1: "GIA CÔNG", h1_sub: "PRECISION.", sub_prefix: "Công ty ", brand: "Cơ Khí Zinitek", sub_suffix: " chuyên gia công khuôn mẫu, chi tiết máy và cung cấp linh kiện cơ khí chính xác hàng đầu.", btn1: "KHÁM PHÁ", btn2: "BÁO GIÁ" },
    en: { desc: "Prestige - Quality - Progress", h1: "PRECISION", h1_sub: "MACHINING.", sub_prefix: "", brand: "Zinitek Precision", sub_suffix: " specializes in mold making, machine parts, and providing high-quality precision mechanical components.", btn1: "EXPLORE", btn2: "GET A QUOTE" },
    ja: { desc: "信頼 - 品質 - 進捗", h1: "精密", h1_sub: "機械加工.", brand: "Zinitek精密機械", sub_suffix: "は、金型製作、機械部品、および高品質の精密機械部品の提供を専門としています.", btn1: "探索する", btn2: "見積もり" },
    ko: { desc: "신뢰 - 품질 - 진척", h1: "정밀", h1_sub: "기계 가공.", brand: "Zinitek Precision", sub_suffix: "은 금형 제작, 기계 부품 및 고품질 정밀 기계 부품 공급을 전문으로 합니다.", btn1: "탐색", btn2: "견적 요청" },
    zh: { desc: "信誉 - 质量 - 进度", h1: "精密", h1_sub: "机械加工.", brand: "Zinitek 精密工程", sub_suffix: "专业从事模具制造、机械零件加工并提供高质量的精密机械部件.", btn1: "探索", btn2: "获取报价" }
  };

  const currentLang = lang?.toLowerCase() || 'en';
  const data = dict[currentLang] || dict.vi;

  return (
    // THAY ĐỔI: Thêm top-0 và đảm bảo không có margin/padding phía trên
    <header className="relative min-h-[100dvh] w-full flex items-center overflow-hidden bg-[#020617] m-0 p-0">
      
      {/* 1. LỚP NỀN (Z-0) */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ x: mousePos.x * -0.5, y: mousePos.y * -0.5 }}
      >
        {/* 
            THAY ĐỔI: 
            1. bg-top thay vì bg-center để ảnh bám chặt mí trên.
            2. Thêm origin-top vào animate-ken-burns để khi scale nó không bị kéo xuống.
        */}
        
        <div 
        className="absolute inset-0 bg-[url('/images/header.jpg')] bg-cover bg-top opacity-30 animate-ken-burns scale-110 origin-top"
        style={{ top: 0 }} // Đảm bảo bám chặt top
      ></div>
        

      </motion.div>
      
      {/* Gradient phủ lên nền - Chỉnh lại z-index để không che mất ảnh */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/85 to-transparent z-[1] top-0"></div>

      {/* 2. LỚP HẠT (Z-5) */}
      <motion.div 
        className="absolute inset-0 z-[5] pointer-events-none"
        style={{ x: mousePos.x, y: mousePos.y }}
      >
        {mounted && (
          <div className="absolute inset-[-50%] w-[200%] h-[200%] animate-galaxy">
            {particles.map((p, i) => (
              <div
                key={i}
                className="absolute rounded-full shadow-lg"
                style={{
                  width: `${p.size}px`, height: `${p.size}px`,
                  left: `${p.left}%`, top: `${p.top}%`,
                  backgroundColor: p.color,
                  boxShadow: `0 0 10px ${p.color}`,
                  animation: `space-float ${p.driftDuration}s linear infinite, twinkle ${p.duration}s ease-in-out infinite alternate`,
                  animationDelay: `${p.delay}s`,
                }}
              ></div>
            ))}
          </div>
        )}
      </motion.div>
      
      {/* 3. NỘI DUNG CHỮ (Z-10) */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-orange-500 font-bold tracking-[0.5em] uppercase text-[10px] sm:text-xs mb-6"
          >
            {data.desc}
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-9xl font-black mb-8 leading-[0.85] uppercase italic tracking-tighter"
          >
            <span className="text-white">{data.h1}</span> <br />
            <span className="text-orange-500">{data.h1_sub}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-300 text-base md:text-xl mb-12 max-w-2xl leading-relaxed border-l-2 border-orange-500/50 pl-6"
          >
            {data.sub_prefix}
            <span className="text-white font-bold">{data.brand}</span>
            {data.sub_suffix}
          </motion.p>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#f97316" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#ea580c] text-white px-8 md:px-12 py-4 md:py-5 font-black text-[10px] md:text-xs uppercase tracking-widest shadow-xl"
            >
              {data.btn1}
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05, borderColor: "#ffffff", color: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              className="border border-slate-700 bg-white/5 backdrop-blur-sm text-slate-300 px-8 md:px-12 py-4 md:py-5 font-black text-[10px] md:text-xs uppercase tracking-widest transition-all"
            >
              {data.btn2}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Đường quét đáy */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-900/50">
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-1/2 h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"
        />
      </div>
    </header>
  );
}