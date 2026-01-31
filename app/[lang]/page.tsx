import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";

// 1. Chuyển hàm thành async
export default async function Page({ params }: { params: { lang: string } }) {
  
  // 2. PHẢI có await ở đây để lấy giá trị lang từ URL
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  return (
    <>
      {/* Bây giờ lang đã là "vi", "ja", "en"... thực sự */}
      <Hero lang={lang} />
      <Services lang={lang} />
    </>
  );
}