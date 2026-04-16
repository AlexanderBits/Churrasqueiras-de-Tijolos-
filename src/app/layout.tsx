import { Outfit, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Churrasqueiras de Tijolos RJ | O Rei das Churrasqueiras",
  description: "As melhores churrasqueiras de tijolo do Rio de Janeiro. Qualidade premium, durabilidade e o melhor churrasco para sua casa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn("h-full antialiased", "font-sans", geist.variable)}>
      <body className={`${outfit.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
