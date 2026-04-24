import Image from "next/image";
import Link from "next/link";
import { History, Heart, Calendar, MapPin, ArrowLeft } from "lucide-react";

export default function MemorialPage() {
  return (
    <div className="min-h-screen bg-[#2d1b10] text-[#f5e6d3] font-serif">
      {/* Navigation */}
      <nav className="p-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#d4a373] hover:text-white transition-colors font-sans text-sm font-bold uppercase tracking-widest"
        >
          <ArrowLeft size={18} />
          Voltar para o Site Novo
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center space-y-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#d4a373]/10 border border-[#d4a373]/20 text-[#d4a373] mb-4">
          <History size={40} />
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
          Galeria do <span className="text-[#d4a373]">Tempo</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#d4a373] font-medium italic">
          Linha do Tempo: Churrasqueiras Alvorada (1994 – 2024)
        </p>
        <div className="w-24 h-1 bg-[#d4a373] mx-auto mt-8" />
      </section>

      {/* Story Section */}
      <section className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        <div className="space-y-6 text-lg leading-relaxed text-[#f5e6d3]/80">
          <p>
            A <strong className="text-white">Churrasqueiras Alvorada</strong> marcou uma história importante no Rio de Janeiro. 
            Fundada em <span className="text-[#d4a373] font-bold">01/03/1994</span>, encerrou suas atividades em 
            <span className="text-[#d4a373] font-bold"> 01/01/2024</span>, deixando lembranças e ensinamentos que permanecem vivos.
          </p>
          <p>
            Tivemos a honra de conviver com pessoas especiais que fizeram parte dessa trajetória, como 
            <span className="text-white"> Belinha</span>, sua filha <span className="text-white">Iris</span> e 
            <span className="text-white"> Laurides</span>, que dedicaram anos de trabalho e carinho à empresa. 
            No início da nossa caminhada, fomos clientes e aprendemos muito com eles.
          </p>
          <p>
            Esta página é uma pequena forma de manter viva essa memória. Ao adquirir o antigo domínio, 
            quisemos preservar um pouco da história, das conquistas e da essência da Churrasqueiras Alvorada 
            — inclusive com registros de como era seu site e sua fachada.
          </p>
        </div>

        <div className="bg-black/20 p-8 rounded-3xl border border-white/5 space-y-4">
          <div className="flex items-center gap-3 text-[#d4a373]">
            <Heart size={20} />
            <span className="font-bold uppercase tracking-widest text-xs">Homenagem Sincera</span>
          </div>
          <p className="text-2xl font-medium leading-tight">
            Que Deus abençoe grandemente suas vidas. Fica aqui nossa sincera e carinhosa homenagem.
          </p>
        </div>
      </section>

      {/* Visual Archive */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold uppercase tracking-[0.2em] mb-4">Arquivo Visual</h2>
          <p className="text-[#d4a373] text-sm font-medium">Registros históricos preservados</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Old Site Record */}
          <div className="group space-y-6">
            <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden border-8 border-[#3d2b1f] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <Image 
                src="/site-antigo-record.png" 
                alt="Registro do Antigo Site da Churrasqueiras Alvorada" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <p className="text-sm font-medium text-white/80">Este foi o registro do antigo site oficial, referência de qualidade no Jardim América por décadas.</p>
              </div>
            </div>
            <div className="px-4">
              <h3 className="text-xl font-bold text-white mb-2 underline decoration-[#d4a373] underline-offset-8">Interface Digital (V.1)</h3>
              <p className="text-sm text-[#d4a373]">O canal onde milhares de clientes iniciaram seus sonhos de área gourmet.</p>
            </div>
          </div>

          {/* Facade Record */}
          <div className="group space-y-6">
            <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden border-8 border-[#3d2b1f] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <Image 
                src="/fachada-antiga.jpg" 
                alt="Fachada Histórica no Jardim América" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <p className="text-sm font-medium text-white/80">A sede na Rua Prof. França Amaral, 553, que se tornou um marco no bairro.</p>
              </div>
            </div>
            <div className="px-4">
              <h3 className="text-xl font-bold text-white mb-2 underline decoration-[#d4a373] underline-offset-8">A Sede Histórica</h3>
              <p className="text-sm text-[#d4a373]">Onde a produção artesanal ganhava vida todos os dias.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-20 border-t border-white/5 text-center space-y-6">
        <div className="flex justify-center gap-12 text-[#d4a373]">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">1994</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Fundação</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">2024</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Legado</span>
          </div>
        </div>
        <p className="text-xs text-[#f5e6d3]/40 uppercase tracking-[0.4em]">Memória Preservada pela Churrasqueiras RJ V.2</p>
      </footer>
    </div>
  );
}
