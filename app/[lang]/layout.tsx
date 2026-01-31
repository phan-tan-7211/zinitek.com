import Navbar from "@/components/Navbar";
import ContactHotline from "@/components/ContactHotline";
import Footer from "@/components/Footer";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  // 1. Phải await params để lấy lang (Chuẩn Next.js 14/15)
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  return (
    <>
      {/* 2. Thanh điều hướng */}
      <Navbar lang={lang} />
      
      {/* 3. Nội dung trang web */}
      <main className="min-h-screen pt-[88px]"> 
        {children}
      </main>

      {/* 4. Chân trang - Đã truyền lang để đồng bộ 5 thứ tiếng */}
      <Footer lang={lang} />

      {/* 5. Nút liên hệ cố định - Đã truyền lang để đồng bộ 5 thứ tiếng */}
      <ContactHotline lang={lang} />
    </>
  );
}