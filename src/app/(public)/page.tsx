import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import { Flame, ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";

export default async function HomePage() {
  const products = await prisma.product.findMany({
    include: { images: true },
    take: 6,
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-32 mb-32">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/hero-bg.png"
          alt="Hero background"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 px-4 py-2 rounded-full text-primary font-bold text-xs uppercase tracking-widest animate-fade-in">
            <Flame size={14} className="fill-current" />
            O Rei das Churrasqueiras no Rio
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none max-w-5xl mx-auto">
            Transforme seu lazer em uma <span className="text-primary">Experiência Real.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
            Especialistas em churrasqueiras de tijolo sob medida. Qualidade artesanal com a agilidade que você precisa no RJ.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
            <Link 
              href="#modelos" 
              className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-primary/40 transition-all hover:scale-105 active:scale-95"
            >
              Ver Modelos
            </Link>
            <Link 
              href="https://wa.me/5521999999999" 
              className="w-full md:w-auto bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg transition-all"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="bg-card p-10 rounded-[40px] border border-border/50 space-y-6 hover:translate-y-[-10px] transition-all duration-500 shadow-xl shadow-black/5">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
            <ShieldCheck size={32} />
          </div>
          <h3 className="text-2xl font-bold tracking-tight">Qualidade Blindada</h3>
          <p className="text-muted-foreground leading-relaxed">Utilizamos os melhores materiais refratários do mercado para garantir durabilidade vitalícia.</p>
        </div>
        <div className="bg-card p-10 rounded-[40px] border border-border/50 space-y-6 hover:translate-y-[-10px] transition-all duration-500 shadow-xl shadow-black/5">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
            <Clock size={32} />
          </div>
          <h3 className="text-2xl font-bold tracking-tight">Instalação Express</h3>
          <p className="text-muted-foreground leading-relaxed">Sua churrasqueira pronta para o uso em tempo recorde, sem bagunça e com limpeza total.</p>
        </div>
        <div className="bg-card p-10 rounded-[40px] border border-border/50 space-y-6 hover:translate-y-[-10px] transition-all duration-500 shadow-xl shadow-black/5">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
            <Award size={32} />
          </div>
          <h3 className="text-2xl font-bold tracking-tight">Design sob Medida</h3>
          <p className="text-muted-foreground leading-relaxed">Projetos exclusivos que se adaptam perfeitamente ao espaço e estilo da sua residência.</p>
        </div>
      </section>

      {/* Product Vitrine */}
      <section id="modelos" className="max-w-7xl mx-auto px-4 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Nossos <span className="text-primary">Modelos</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-medium">Conheça os projetos que são tendência no Rio de Janeiro.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link 
              key={product.id} 
              href={`/produto/${product.slug}`}
              className="group bg-card rounded-[32px] overflow-hidden border border-border/50 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col"
            >
              <div className="aspect-[4/5] relative overflow-hidden bg-muted">
                {product.images?.[0] ? (
                  <Image
                    src={product.images[0].url}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                    <Flame size={64} />
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {product.category}
                </div>
              </div>
              
              <div className="p-8 space-y-4 flex-1 flex flex-col">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-2xl font-bold tracking-tight leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
                </div>
                <div className="text-3xl font-black text-primary">
                  R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </div>
                <div className="pt-4 mt-auto border-t border-border/50 flex items-center justify-between text-muted-foreground group-hover:text-foreground transition-all">
                  <span className="text-sm font-bold uppercase tracking-wider">Ver Detalhes</span>
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-20 bg-muted/30 rounded-[40px] border-2 border-dashed border-border">
            <p className="text-muted-foreground font-medium">Estamos preparando novos modelos incríveis para você!</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-secondary mx-4 rounded-[60px] py-24 px-8 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-none">
            Pronto para o <span className="text-primary italic">próximo churrasco?</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed">
            Não perca tempo. Peça agora seu orçamento gratuito e transforme sua área gourmet hoje mesmo. Atendemos em todo o Rio de Janeiro com garantia de satisfação.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/5521999999999" 
              className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl shadow-primary/40 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
            >
              Falar no WhatsApp
              <ArrowRight size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
