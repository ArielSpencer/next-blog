import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: " Ariel Spencer Blog | Tech, Programação, UX Design e SEO",
  description: "Explore artigos e tutoriais sobre programação, UX design e SEO. Aprenda dicas práticas, melhores práticas e tendências do mundo tech por Ariel Spencer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`bg-[#F6F3ED] ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
