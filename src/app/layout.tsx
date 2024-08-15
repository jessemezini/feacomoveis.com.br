import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { THEME } from "@/consts";

const font = Manrope({
  weight: ["600", "500", "400", "300"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MZN Digital",
  description: "Agência de design e desenvolvimento de Sites e Aplicativos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-theme={THEME}>
      <body className={font.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
