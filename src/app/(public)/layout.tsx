import Link from "next/link";
import { Flame, MapPin, Phone, Instagram } from "lucide-react";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 glass border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-primary/20">
              <Flame className="text-white w-6 h-6 fill-current" />
            </div>
            <span className="font-bold text-xl tracking-tighter text-foreground">CHURRASQUEIRAS RJ</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Início</Link>
            <Link href="/#modelos" className="hover:text-primary transition-colors">Modelos</Link>
            <Link href="/#sobre" className="hover:text-primary transition-colors">Sobre Nós</Link>
            <Link href="/#contato" className="hover:text-primary transition-colors">Contato</Link>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/5521999999999" 
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
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Flame className="text-white w-5 h-5 fill-current" />
              </div>
              <span className="font-bold text-lg tracking-tight">CHURRASQUEIRAS RJ</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Tradição e qualidade em churrasqueiras de tijolo no Rio de Janeiro. Transformando seu lazer em momentos inesquecíveis.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 bg-white/5 hover:bg-primary rounded-full flex items-center justify-center transition-all">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-widest text-primary">Modelos</h3>
            <ul className="space-y-4 text-white/60 text-sm font-medium">
              <li><Link href="#" className="hover:text-white transition-colors">Tradicional</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Gourmet Luxo</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Rústica</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Sob Medida</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-widest text-primary">Links Úteis</h3>
            <ul className="space-y-4 text-white/60 text-sm font-medium">
              <li><Link href="#" className="hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Galeria de Obras</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Dicas de Manutenção</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-widest text-primary">Contato</h3>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                <span>Rio de Janeiro, RJ - Atendimento em todo o estado</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span>(21) 99999-9999</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/5 text-center text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">
          &copy; 2026 Churrasqueiras RJ - Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
}
