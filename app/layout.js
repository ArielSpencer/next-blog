import { Geist, Geist_Mono, Spectral, Quicksand } from "next/font/google";
import "./globals.css";
import RootLayoutClient from "./RootLayoutClient";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spectralFont = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  style: ["normal", "italic"],
});

const quicksandFont = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
});

export const metadata = {
  title: "Ariel Spencer Blog | Tech, Programação, UX Design e SEO",
  description:
    "Explore artigos e tutoriais sobre programação, UX design e SEO. Aprenda dicas práticas, melhores práticas e tendências do mundo tech por Ariel Spencer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`bg-background font-primary text-writingDark tracking-wider font-medium ${geistSans.variable} ${geistMono.variable} ${spectralFont.variable} ${quicksandFont.variable} antialiased`}
      >
        <Providers>
          <RootLayoutClient>
            {children}
          </RootLayoutClient>
        </Providers>
      </body>
    </html>
  );
}