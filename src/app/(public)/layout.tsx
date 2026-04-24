import Link from "next/link";
import Image from "next/image";
import { Flame, MapPin, Phone, Globe, Mail, FileText, Menu } from "lucide-react";
import OrcamentoProvider from "@/components/OrcamentoProvider";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <OrcamentoProvider>
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white border-b border-border/50 shadow-sm overflow-visible">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1 group">
            <Image 
              src="/logo-icon.png" 
              alt="Churrasqueiras RJ Ícone" 
              width={72} 
              height={72} 
              className="h-[72px] w-[72px] object-contain transition-transform group-hover:scale-110" 
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] sm:text-lg font-black tracking-tight text-foreground">CHURRASQUEIRAS DE</span>
              <span className="text-[11px] sm:text-lg font-black tracking-tight text-foreground">TIJOLOS <span className="font-medium text-muted-foreground hidden sm:inline">RJ SITE</span> <span className="bg-primary text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-md ml-1">V.2</span></span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Início</Link>
            <Link href="/#modelos" className="hover:text-primary transition-colors">Modelos</Link>
            <Link href="/#sobre" className="hover:text-primary transition-colors">Sobre Nós</Link>
            <Link href="/#contato" className="hover:text-primary transition-colors">Contato</Link>
            <a href="https://www.churrasqueirasdetijolos.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Site Antigo V.1</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              data-orcamento-trigger
              className="bg-primary hover:bg-primary/90 text-white px-4 sm:px-6 py-2.5 rounded-full font-bold shadow-lg shadow-primary/20 transition-all active:scale-95 text-xs sm:text-sm uppercase tracking-wider hover:scale-105 cursor-pointer"
            >
              Orçamento
            </button>
            <div className="md:hidden flex items-center">
              <details className="relative group">
                <summary className="list-none cursor-pointer p-2 text-foreground">
                  <Menu size={28} />
                </summary>
                <div className="absolute right-0 top-full mt-4 w-56 bg-white shadow-2xl rounded-2xl border border-border/50 p-6 flex flex-col gap-6 z-50">
                  <Link href="/" className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Início</Link>
                  <Link href="/#modelos" className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Modelos</Link>
                  <Link href="/#sobre" className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Sobre Nós</Link>
                  <Link href="/#contato" className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Contato</Link>
                  <a href="https://www.churrasqueirasdetijolos.com.br/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors">Site Antigo V.1</a>
                </div>
              </details>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-secondary text-white py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <Image 
                src="/logo-icon.png" 
                alt="Churrasqueiras RJ Ícone" 
                width={72} 
                height={72} 
                className="h-[72px] w-[72px] object-contain transition-transform group-hover:scale-110" 
              />
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-black tracking-tight text-white">CHURRASQUEIRAS DE</span>
                <span className="text-lg font-black tracking-tight text-white">TIJOLOS <span className="font-medium text-white/60">RJ SITE</span> <span className="bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md ml-1">V.2</span></span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Tradição e qualidade em churrasqueiras de tijolo no Rio de Janeiro. Transformando seu lazer em momentos inesquecíveis.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 bg-white/5 hover:bg-primary rounded-full flex items-center justify-center transition-all">
                <Globe size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-widest text-primary">Modelos</h3>
            <ul className="space-y-4 text-white/60 text-sm font-medium">
              <li><Link href="/produto/churrasqueira-tradicional" className="hover:text-white transition-colors">Churrasqueira de 80x60x320 Cor Palha</Link></li>
              <li><Link href="/produto/modelo-gourmet-luxo" className="hover:text-white transition-colors">Churrasqueira com Forno de Pizza</Link></li>
              <li><Link href="/produto/churrasqueira-rustica" className="hover:text-white transition-colors">Churrasqueira Predial C/ Balcão</Link></li>
              <li><Link href="/produto/projeto-sob-medida" className="hover:text-white transition-colors">Churrasqueira Forno e Fogão (Trio)</Link></li>
              <li><Link href="/produto/churrasqueira-predial-80x60-com-forno-e-bancada-1777000995197" className="hover:text-white transition-colors">Churrasqueira Predial c/ Bancada</Link></li>
              <li><Link href="/produto/churrasqueira-forno-caipira-vermelha-palha-1777001177642" className="hover:text-white transition-colors">Churrasqueira com Forno Caipira</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-widest text-primary">Conteúdo</h3>
            <ul className="space-y-4 text-white/60 text-sm font-medium">
              <li><button data-orcamento-trigger className="hover:text-white transition-colors cursor-pointer text-left bg-transparent border-none p-0">Fale Conosco</button></li>
              <li><Link href="/#modelos" className="hover:text-white transition-colors">Modelos</Link></li>
              <li><Link href="/como-isolar-a-chamine" className="hover:text-white transition-colors">Como Isolar a Chaminé</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-widest text-primary">Endereço Fiscal</h3>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-start gap-3">
                <FileText className="text-primary mt-1 shrink-0" size={18} />
                <span>CNPJ: 40.189.966/0001-33</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                <span>Avenida Marechal Câmara, 160 - Sala 1107, Letra 117 - Edifício Orly, Centro, Rio de Janeiro, RJ - 20020-080</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span>(21) 92000-8754</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span>vendas@churrasqueirasdetijolos.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/5 flex flex-col items-center gap-8">
          <Link 
            href="https://transparencyreport.google.com/safe-browsing/search?url=churrasqueirasdetijolos.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity bg-white p-3 rounded-xl shadow-lg border border-white/10"
          >
            <Image 
              src="/google_safe_browsing.png"
              alt="Google Safe Browsing"
              width={160}
              height={40}
              className="w-36 h-auto"
            />
          </Link>

          <Link 
            href="/memorial" 
            className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 px-6 py-4 rounded-2xl border border-white/10 transition-all active:scale-95"
          >
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <History size={20} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">História Preservada</span>
              <span className="text-sm font-bold text-white">Memorial Alvorada</span>
            </div>
          </Link>

          <div className="text-center text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] flex flex-col gap-3">
            <span>&copy; 2026 Churrasqueiras RJ - Todos os direitos reservados</span>
            <span>Site desenvolvido por <a href="https://desenvolvimentodesites.dev.br" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">Alexis Marketing &amp; Dev</a></span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        data-orcamento-trigger
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] group cursor-pointer border-none outline-none bg-transparent p-0"
        aria-label="Pedir Orçamento pelo WhatsApp"
      >
        <div className="absolute -inset-4 bg-[#25D366]/20 rounded-full blur-xl group-hover:bg-[#25D366]/40 transition-all animate-pulse" />
        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-[#25D366]/40 transform transition-all group-hover:scale-110 group-hover:-rotate-12 active:scale-95">
          <svg 
            viewBox="0 0 24 24" 
            className="w-8 h-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.653a11.888 11.888 0 005.685 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
      </button>
    </div>
    </OrcamentoProvider>
  );
}
