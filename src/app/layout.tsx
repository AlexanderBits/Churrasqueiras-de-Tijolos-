import { Outfit, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.churrasqueirasdetijolos.com.br"),
  title: "Churrasqueiras de Tijolos RJ | O Rei das Churrasqueiras",
  description: "As melhores churrasqueiras de tijolo do Rio de Janeiro. Qualidade premium, durabilidade e o melhor churrasco para sua casa.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Churrasqueiras de Tijolos RJ",
    description: "As melhores churrasqueiras de tijolo do Rio de Janeiro. Arte no tijolinho sob medida.",
    url: "https://www.churrasqueirasdetijolos.com.br",
    siteName: "Churrasqueiras RJ",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Churrasqueiras de Tijolos RJ",
    description: "Qualidade premium em churrasqueiras, fornos e fogões a lenha.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn("h-full antialiased", "font-sans", geist.variable)} suppressHydrationWarning>
      <body className={`${outfit.className} min-h-full flex flex-col`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
