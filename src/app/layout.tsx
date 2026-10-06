import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Melhor Visão | Ótica com estratégia",
  description:
    "Pare de perder clientes que já compraram com você. Automação humanizada de WhatsApp para ópticas independentes — sem tecniquês, sem jargão.",
  keywords: "óptica, automação, WhatsApp, clientes, fidelização, ópticas independentes",
  openGraph: {
    title: "Sua base de clientes é o seu maior estoque",
    description:
      "Pare de perder clientes que já compraram com você. Automação humanizada de WhatsApp para ópticas.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${lora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
