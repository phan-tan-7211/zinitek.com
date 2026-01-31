"use client";

export default function Hero({ lang }: { lang: string }) {
  // Dictionary chuẩn hóa
  const dict: any = {
    vi: { 
      desc: "Uy tín - Chất lượng - Tiến độ",
      h1: "GIA CÔNG", 
      h1_sub: "PRECISION.", 
      // Tách sub_text để dễ dàng chèn span
      sub_prefix: "Công ty ",
      brand: "TNHH Cơ Khí Zinitek",
      sub_suffix: " chuyên gia công khuôn mẫu, chi tiết máy và cung cấp linh kiện cơ khí chính xác hàng đầu.",
      btn1: "KHÁM PHÁ", 
      btn2: "BÁO GIÁ" 
    },
    en: { 
      desc: "Prestige - Quality - Progress",
      h1: "PRECISION", 
      h1_sub: "MACHINING.", 
      sub_prefix: "",
      brand: "Zinitek Precision Engineering",
      sub_suffix: " specializes in mold making, machine parts, and providing high-quality precision mechanical components.",
      btn1: "EXPLORE", 
      btn2: "GET A QUOTE" 
    },
    ja: { 
      desc: "信頼 - 品質 - 進捗",
      h1: "精密", 
      h1_sub: "機械加工.", 
      sub_prefix: "",
      brand: "Zinitek精密機械",
      sub_suffix: "は、金型製作、機械部品、および高品質の精密機械部品の提供を専門としています。",
      btn1: "探索する", 
      btn2: "見積もり" 
    },
    ko: { 
      desc: "신뢰 - 품질 - 진척",
      h1: "정밀", 
      h1_sub: "기계 가공.", 
      sub_prefix: "",
      brand: "Zinitek Precision Engineering",
      sub_suffix: "은 금형 제작, 기계 부품 및 고품질 정밀 기계 부품 공급을 전문으로 합니다.",
      btn1: "탐색", 
      btn2: "견적 요청" 
    },
    zh: { 
      desc: "信誉 - 质量 - 进度",
      h1: "精密", 
      h1_sub: "机械加工.", 
      sub_prefix: "",
      brand: "Zinitek 精密工程",
      sub_suffix: "专业从事模具制造、机械零件加工并提供高质量的精密机械部件。",
      btn1: "探索", 
      btn2: "获取报价" 
    }
  };

  const currentLang = lang?.toLowerCase() || 'en';
  const data = dict[currentLang] || dict.en;

  return (
    <header className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#020617]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('/images/header.jpg')] bg-cover bg-center opacity-70"
        style={{ transform: 'scale(1.05)' }}
      ></div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
          {/* Slogan */}
          <h2 className="text-orange-500 font-bold tracking-[0.4em] uppercase text-xs mb-4">
            {data.desc}
          </h2>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-none uppercase italic tracking-tighter">
            {data.h1} <br />
            <span className="text-orange-500">{data.h1_sub}</span>
          </h1>

          {/* Description Paragraph - Đã nhấn mạnh tên công ty màu trắng */}
          <p className="text-slate-400 text-lg mb-10 max-w-2xl leading-relaxed">
            {data.sub_prefix}
            <span className="text-white font-bold">{data.brand}</span>
            {data.sub_suffix}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <button className="bg-[#ea580c] hover:bg-orange-500 text-white px-10 py-4 font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-orange-900/20 active:scale-95">
              {data.btn1}
            </button>
            <button className="border border-slate-700 hover:bg-slate-800 text-white px-10 py-4 font-black text-xs uppercase tracking-widest transition-all active:scale-95">
              {data.btn2}
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-transparent opacity-30"></div>
    </header>
  );
}