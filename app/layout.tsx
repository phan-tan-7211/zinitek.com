import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "900"], variable: "--font-montserrat" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${inter.variable} ${montserrat.variable}`}>
      {/* Quan trọng: Class bg-[#020617] phải nằm ở body này */}
      <body className="bg-[#020617] text-slate-200 antialiased"> 
        {children}
      </body>
    </html>
  );
}