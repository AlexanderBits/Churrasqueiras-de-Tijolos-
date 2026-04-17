import Link from "next/link";
import Image from "next/image";
import { Flame, MapPin, Phone, Globe, Mail, FileText } from "lucide-react";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 relative flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3">
              <Image src="/logo.png" alt="Churrasqueiras RJ Logo" fill className="object-contain" />
            </div>
            <div className="flex flex-col justify-center leading-none">
              <span className="font-black text-lg tracking-tighter text-foreground">CHURRASQUEIRAS DE</span>
              <span className="font-black text-2xl tracking-tighter text-foreground flex items-center gap-2">
                TIJOLOS <span className="text-primary">RJ</span>
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Início</Link>
            <Link href="/#modelos" className="hover:text-primary transition-colors">Modelos</Link>
            <Link href="/#sobre" className="hover:text-primary transition-colors">Sobre Nós</Link>
            <Link href="/#contato" className="hover:text-primary transition-colors">Contato</Link>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/5521920008754?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20construção%20de%20churrasqueira.%20Vi%20o%20portfólio%20de%20vocês%20pelo%20site%20e%20gostaria%20de%20saber%20valores" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-primary/20 transition-all active:scale-95 text-sm uppercase tracking-wider"
            >
              Orçamento
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-secondary text-white py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-12 h-12 relative flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3">
                <Image src="/logo.png" alt="Churrasqueiras RJ Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col justify-center leading-none">
                <span className="font-black text-lg tracking-tighter text-white">CHURRASQUEIRAS DE</span>
                <span className="font-black text-2xl tracking-tighter text-white flex items-center gap-2">
                  TIJOLOS <span className="text-primary">RJ</span>
                </span>
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
              <li><Link href="#" className="hover:text-white transition-colors">Churrasqueira de Tijolos</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Churrasqueiras com Bancada</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Churrasqueira com Fogão a Lenha</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Churrasqueira com Forno a Lenha</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Churrasqueira com Forno e Fogão a Lenha</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Churrasqueira com Forno de Pizza</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Escada Caracol</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-widest text-primary">Conteúdo</h3>
            <ul className="space-y-4 text-white/60 text-sm font-medium">
              <li><a href="https://wa.me/5521920008754?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20construção%20de%20churrasqueira.%20Vi%20o%20portfólio%20de%20vocês%20pelo%20site%20e%20gostaria%20de%20saber%20valores" className="hover:text-white transition-colors">Fale Conosco</a></li>
              <li><Link href="/#modelos" className="hover:text-white transition-colors">Modelos</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Uso do Iglú</Link></li>
              <li><Link href="/como-isolar-a-chamine" className="hover:text-white transition-colors">Como Isolar a Chaminé</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Churrasqueira em Manilia Itaborai</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Meios de pagamento</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Política de privacidade</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Politica de Entregas</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Política de Trocas e Devoluções</Link></li>
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
          <div className="text-center text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">
            &copy; 2026 Churrasqueiras RJ - Todos os direitos reservados
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5521920008754?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20construção%20de%20churrasqueira.%20Vi%20o%20portfólio%20de%20vocês%20pelo%20site%20e%20gostaria%20de%20saber%20valores"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] group"
        aria-label="Fale conosco pelo WhatsApp"
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
      </a>
    </div>
  );
}
