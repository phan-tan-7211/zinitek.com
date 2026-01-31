"use client";

export default function Services({ lang }: { lang: string }) {
  // 1. Dictionary cho Tiêu đề và Dòng Tagline bên dưới
  const titleDict: any = {
    vi: { 
      main: "DỊCH VỤ", 
      sub: "GIA CÔNG", 
      tagline: "Công ty Cơ khí Chính xác Zinitek" 
    },
    en: { 
      main: "OUR", 
      sub: "SERVICES", 
      tagline: "Zinitek Precision Engineering" 
    },
    ja: { 
      main: "機械加工", 
      sub: "サービス", 
      tagline: "Zinitek 精密機械株式会社" 
    },
    ko: { 
      main: "기계 가공", 
      sub: "서비스", 
      tagline: "Zinitek 정밀 공학" 
    },
    zh: { 
      main: "机械加工", 
      sub: "服务", 
      tagline: "Zinitek 精密工程有限公司" 
    },
  };

  const currentTitle = titleDict[lang] || titleDict.en;

  const services = [
    { 
        id: "01", 
        name: { vi: "Gia công chi tiết", en: "Parts Machining", ja: "精密部品加工", ko: "정밀 부품 가공", zh: "精密零件加工" }, 
        img: "/images/gia-cong-chi-tiet.png" 
    },
    { 
        id: "02", 
        name: { vi: "Khuôn dập nguội", en: "Stamping Die", ja: "冷間プレス金型", ko: "냉간 프레스 금형", zh: "冷冲压模具" }, 
        img: "/images/khuong-dap-nguoi.jpg" 
    },
    { 
        id: "03", 
        name: { vi: "Gia công phay", en: "CNC Milling", ja: "CNCフライス加工", ko: "CNC 밀링", zh: "CNC 铣削" }, 
        img: "/images/gia-cong-phay.png" 
    },
    { 
        id: "04", 
        name: { vi: "Gia công ty dụt", en: "Ejector Pins", ja: "エジェクタピン加工", ko: "이젝터 핀 가공", zh: "顶针加工" }, 
        img: "/images/gia-cong-ty-dot.jpg" 
    },
    { 
        id: "05", 
        name: { vi: "Gia công lò xo", en: "Springs", ja: "ばね加工", ko: "스프링 가공", zh: "弹簧加工" }, 
        img: "/images/gia-cong-lo-xo.jpg" 
    },
    { 
        id: "06", 
        name: { vi: "Mài khuôn mẫu", en: "Mold Grinding", ja: "金型研削", ko: "금형 연삭", zh: "模具磨削" }, 
        img: "/images/mai-khuong-mau.png" 
    },
    { 
        id: "07", 
        name: { vi: "Gia công cắt dây", en: "Wire EDM", ja: "ワイヤーカット放電加工", ko: "와이어 컷 EDM", zh: "线切割加工" }, 
        img: "/images/gia-cong-cat-day.jpg" 
    },
    { 
        id: "08", 
        name: { vi: "Làm đồ gá (Jig)", en: "Jig & Fixtures", ja: "治具製作", ko: "지그 및 고정구", zh: "治具制造" }, 
        img: "/images/lam-do-ga.jpg" 
    },
  ];

  return (
    <section className="py-24 bg-[#020617]">
      <div className="container mx-auto px-6">
        {/* Tiêu đề chuẩn phong cách cơ khí */}
        <div className="border-l-4 border-orange-600 pl-6 mb-16">
          <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">
            {currentTitle.main} <span className="text-[#ea580c]">{currentTitle.sub}</span>
          </h2>
          {/* Dòng Tagline đã được đồng bộ hóa ngôn ngữ */}
          <p className="text-slate-500 text-xs mt-2 uppercase tracking-[0.3em]">
            {currentTitle.tagline}
          </p>
        </div>
        
        {/* Grid 8 Card */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((s) => (
            <div key={s.id} className="relative h-64 group cursor-pointer overflow-hidden border border-white/5 bg-slate-900 shadow-2xl">
              <img 
                src={s.img} 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                alt={s.id}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:from-orange-900/80 transition-all duration-500"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <span className="text-[#ea580c] font-black text-4xl opacity-20 group-hover:opacity-100 transition-opacity">
                    {s.id}
                </span>
                <h3 className="text-white font-bold text-sm leading-tight uppercase group-hover:text-orange-400 transition-colors">
                  {s.name[lang as keyof typeof s.name] || s.name.en}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}