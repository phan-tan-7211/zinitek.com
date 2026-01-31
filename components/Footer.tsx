import Link from 'next/link';

interface FooterProps {
  lang: string;
}

export default function Footer({ lang }: FooterProps) {
  // Cập nhật Dictionary đầy đủ 5 ngôn ngữ, giữ nguyên cấu trúc cũ
  const dict: any = {
    vi: {
      tax: "Mã số thuế",
      address: "Thửa đất số 2900, Đường NE2, KCN Mỹ Phước, Bến Cát, Bình Dương",
      copyright: "© 2026 ZINITEK PRECISION. THIẾT KẾ BỞI PHAN TẤN.",
      hotline: "Hotline",
    },
    en: {
      tax: "Tax Code",
      address: "Plot 2900, NE2 Street, My Phuoc IP, Ben Cat, Binh Duong",
      copyright: "© 2026 ZINITEK PRECISION. DESIGNED BY PHAN TAN.",
      hotline: "Hotline",
    },
    ja: {
      tax: "税務コード",
      address: "ビンズオン省、ベンカット、ミーフック工業団地、NE2通り、2900区画",
      copyright: "© 2026 ZINITEK PRECISION. 設計者 PHAN TAN.",
      hotline: "ホットライン",
    },
    ko: {
      tax: "세금 코드",
      address: "빈증성, 벤깟시, 미푹 산업단지, NE2로, 2900 필지",
      copyright: "© 2026 ZINITEK PRECISION. 설계자 PHAN TAN.",
      hotline: "핫라인",
    },
    zh: {
      tax: "税号",
      address: "平阳省, 滨吉市, 美福工业区, NE2路, 2900号地块",
      copyright: "© 2026 ZINITEK PRECISION. 设计者 PHAN TAN.",
      hotline: "热线",
    },
  };

  const t = dict[lang] || dict['en'];

  return (
    <footer id="lien-he" className="py-20 bg-[#020617] border-t border-[#ea580c]/20 relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 relative z-10">
        
        {/* Cột 1: Thông tin công ty */}
        <div className="flex flex-col justify-center">
          <h4 className="text-white font-black text-2xl mb-6 uppercase tracking-tighter">
            ZINI<span className="text-[#ea580c]">TEK</span>
          </h4>
          <div className="space-y-4 text-slate-400 text-sm">
            <p className="flex items-start">
              <span className="text-[#ea580c] mr-3">●</span>
              {t.tax}: 3703281832
            </p>
            <p className="flex items-start leading-relaxed">
              <span className="text-[#ea580c] mr-3">●</span>
              {t.address}
            </p>
            <p className="flex items-start">
              <span className="text-[#ea580c] mr-3">●</span>
              {t.hotline}: 0973 133 727
            </p>
            <p className="flex items-start uppercase tracking-wider">
              <span className="text-[#ea580c] mr-3">●</span>
              Email: info@zinitek.vn
            </p>
          </div>
        </div>

        {/* Cột 2: Bản đồ với hiệu ứng High-tech */}
        <div className="group relative overflow-hidden rounded-xl bg-slate-900 p-2 border border-white/10 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:border-blue-400/50">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2294.5009224394225!2d106.6415612299133!3d11.113041560440589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174cffc59848361%3A0xb8e24cd1841a9b2b!2zQ8O0bmcgVHkgQ8ahIEtow60gxJDDtG5nIFRow6BuaCBQaMO6!5e0!3m2!1svi!2s!4v1769218928098!5m2!1svi!2s" 
            className="w-full h-64 rounded-lg transform transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1" 
            allowFullScreen 
            loading="lazy"
          ></iframe>
          
          {/* Lớp phủ vệt sáng khi hover */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          {/* Khung quét Radar trang trí */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#ea580c] opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ea580c] opacity-50"></div>
        </div>
      </div>

      {/* Dòng Copyright cuối trang */}
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-slate-600 text-[10px] uppercase tracking-[0.4em]">
        {t.copyright}
      </div>

      {/* Hiệu ứng Background Grid ẩn (Tùy chọn cho đúng chất kỹ thuật) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
    </footer>
  );
}