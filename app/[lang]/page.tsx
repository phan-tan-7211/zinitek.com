import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";

// Định nghĩa kiểu dữ liệu chuẩn cho Next.js 15/16: params phải là một Promise
interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function Page(props: PageProps) {
  // Giải nén params bằng await (Bắt buộc cho phiên bản mới)
  const { lang } = await props.params;

  return (
    <>
      <Hero lang={lang} />
      <Services lang={lang} />
    </>
  );
}