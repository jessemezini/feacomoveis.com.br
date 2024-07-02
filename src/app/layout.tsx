import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";

const font = Manrope({ weight: ["600", "500", "400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MZN App Lab",
  description: "Criamos WebSites e Aplicativos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-theme="synthwave">
      <body className={font.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
