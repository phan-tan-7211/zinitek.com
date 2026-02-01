import Navbar from "@/components/Navbar";
import ContactHotline from "@/components/ContactHotline";
import Footer from "@/components/Footer";

// Định nghĩa kiểu dữ liệu chuẩn cho Next.js 15/16
type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>; // BẮT BUỘC: params phải là Promise
};

export default async function LangLayout(props: Props) {
  // 1. Giải nén (await) các giá trị từ props
  const { children } = props;
  const resolvedParams = await props.params;
  const lang = resolvedParams.lang;

  return (
    <>
      {/* 2. Thanh điều hướng - Sử dụng lang đã await */}
      {/* <Navbar TRAN RA NGOÀI /> */}
      {/* <Navbar lang={lang} /> */}
      <Navbar lang={lang} />
      

      {/* 3. Nội dung trang chính */}
      {/* Thêm container mx-auto để nội dung nằm giữa và có lề hai bên */}
{/*<main className="min-h-screen pt-[88px] max-w-7xl mx-auto px-4 md:px-10">*/}

<main className="min-h-screen">

        {children}
      </main>

      {/* 4. Chân trang - Đồng bộ 5 thứ tiếng */}
      {/* <Footer lang={lang} /> */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 mt-20"> {/* Thêm mt-20 để giãn cách */}
  <Footer lang={lang} />
    </div>

      {/* 5. Nút liên hệ - Đồng bộ 5 thứ tiếng */}
      <ContactHotline lang={lang} />
    </>
  );
}