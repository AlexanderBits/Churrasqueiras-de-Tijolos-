import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import { Flame, ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";

export const revalidate = 3600;

export const metadata = {
  keywords: [
    "fogões a lenha", "fogões de lenha", "fogão de lenha com forno", "modelos de churrasqueira de alvenaria",
    "forno à lenha", "churrasqueira de tijolo maciço", "churrasqueira e forno", "fogão de lenha",
    "forno de lenha pizzaria", "forno lenha pizza", "forno pizza lenha", "comprar churrasqueira de alvenaria",
    "forno a lenha pizzaria", "forno de pizza gourmet", "churrasqueira pronta de tijolo", "construção de churrasqueira",
    "churrasqueira 3 em 1", "churrasqueira com tijolo", "churrasqueira de tijolos", "churrasqueira de tijolinho",
    "churrasqueira tijolinho", "churrasqueira tijolo", "churrasqueiras de tijolinhos", "churrasqueiras de tijolo",
    "fogão a lenha com forno", "fogão a lenha de tijolo", "fogão de lenha de tijolo", "forno a lenha",
    "forno de pizza a lenha", "forno de pizza lenha", "forno para pizza a lenha", "forno para pizza lenha",
    "forno pizza a lenha", "modelos de churrasqueira de tijolo", "modelos de churrasqueiras de tijolinho",
    "modelos de churrasqueiras de tijolo", "churrasqueira alvenaria", "churrasqueira de alvenaria",
    "churrasqueira de tijolo", "churrasqueiras de alvenaria", "fogão a lenha", "forno pizza",
    "churrasqueira com forno e fogão a lenha", "churrasqueira com fogão a lenha e forno", "churrasqueira com fogão a lenha",
    "churrasqueira e fogão a lenha", "churrasqueira forno e fogão a lenha", "churrasqueira fogão a lenha e forno",
    "churrasqueira e forno a lenha", "churrasqueira com forno a lenha", "churrasqueira e fogão a lenha e forno",
    "churrasqueira com fogão a lenha e forno de pizza", "churrasqueira fogão a lenha e forno de pizza",
    "churrasqueira com forno", "fogão a lenha com churrasqueira", "churrasqueira e forno de pizza",
    "churrasqueira com forno de pizza", "fogão a lenha e churrasqueira", "churrasqueira de alvenaria com fogão a lenha",
    "churrasqueira de tijolo com fogão a lenha", "churrasqueira de alvenaria com forno e fogão a lenha",
    "churrasqueira de alvenaria com fogão a lenha e forno", "churrasqueira de tijolo com forno e fogão a lenha",
    "churrasqueira de tijolo com fogão a lenha e forno", "churrasqueira de alvenaria com forno",
    "churrasqueira de tijolo com forno", "churrasqueira de alvenaria com forno de pizza", "churrasqueira de tijolo com forno de pizza",
    "churrasqueira de alvenaria com fogão", "churrasqueira de tijolo com fogão", "churrasqueira com fogão",
    "churrasqueira e fogão", "fogão e churrasqueira", "fogão com churrasqueira", "churrasqueira gourmet de alvenaria",
    "churrasqueira gourmet alvenaria", "churrasqueira de alvenaria gourmet", "churrasqueira de tijolo gourmet",
    "churrasqueira gourmet de tijolo", "churrasqueira gourmet tijolo", "churrasqueira de alvenaria moderna",
    "churrasqueira de tijolo moderna", "churrasqueira moderna de alvenaria", "churrasqueira moderna de tijolo",
    "churrasqueira de alvenaria simples", "churrasqueira de tijolo simples", "churrasqueira simples de alvenaria",
    "churrasqueira simples de tijolo", "churrasqueira de alvenaria pequena", "churrasqueira de tijolo pequena",
    "churrasqueira pequena de alvenaria", "churrasqueira pequena de tijolo", "churrasqueira de alvenaria com pia",
    "churrasqueira de tijolo com pia", "churrasqueira com pia de alvenaria", "churrasqueira com pia de tijolo",
    "churrasqueira de alvenaria preço", "churrasqueira de tijolo preço", "preço de churrasqueira de alvenaria",
    "preço de churrasqueira de tijolo", "churrasqueira de alvenaria valor", "churrasqueira de tijolo valor",
    "valor de churrasqueira de alvenaria", "valor de churrasqueira de tijolo", "churrasqueira de alvenaria fotos",
    "churrasqueira de tijolo fotos", "fotos de churrasqueira de alvenaria", "fotos de churrasqueira de tijolo",
    "churrasqueira de alvenaria modelos", "churrasqueira de tijolo modelos", "churrasqueira de alvenaria como fazer",
    "churrasqueira de tijolo como fazer", "como fazer churrasqueira de alvenaria", "como fazer churrasqueira de tijolo",
    "churrasqueira de alvenaria passo a passo", "churrasqueira de tijolo passo a passo", "passo a passo churrasqueira de alvenaria",
    "passo a passo churrasqueira de tijolo", "churrasqueira de alvenaria projeto", "churrasqueira de tijolo projeto",
    "projeto de churrasqueira de alvenaria", "projeto de churrasqueira de tijolo", "churrasqueira de alvenaria medidas",
    "churrasqueira de tijolo medidas", "medidas de churrasqueira de alvenaria", "medidas de churrasqueira de tijolo",
    "churrasqueira de alvenaria revestida", "churrasqueira de tijolo revestida", "churrasqueira revestida de alvenaria",
    "churrasqueira revestida de tijolo", "churrasqueira de alvenaria com vidro", "churrasqueira de tijolo com vidro",
    "churrasqueira com vidro de alvenaria", "churrasqueira com vidro de tijolo", "churrasqueira de alvenaria de canto",
    "churrasqueira de tijolo de canto", "churrasqueira de canto de alvenaria", "churrasqueira de canto de tijolo",
    "churrasqueira de alvenaria pré moldada", "churrasqueira de tijolo pré moldada", "churrasqueira pré moldada de alvenaria",
    "churrasqueira pré moldada de tijolo", "churrasqueira de alvenaria tijolinho", "churrasqueira de tijolo tijolinho",
    "churrasqueira de tijolinho de alvenaria", "churrasqueira de tijolinho de tijolo", "churrasqueira de alvenaria para apartamento",
    "churrasqueira de tijolo para apartamento", "churrasqueira para apartamento de alvenaria", "churrasqueira para apartamento de tijolo",
    "churrasqueira de alvenaria para varanda gourmet", "churrasqueira de tijolo para varanda gourmet",
    "churrasqueira para varanda gourmet de alvenaria", "churrasqueira para varanda gourmet de tijolo",
    "churrasqueira de alvenaria interna", "churrasqueira de tijolo interna", "churrasqueira interna de alvenaria",
    "churrasqueira interna de tijolo", "churrasqueira de alvenaria externa", "churrasqueira de tijolo externa",
    "churrasqueira externa de alvenaria", "churrasqueira externa de tijolo", "churrasqueira de alvenaria rústica",
    "churrasqueira de tijolo rústica", "churrasqueira rústica de alvenaria", "churrasqueira rústica de tijolo",
    "churrasqueira de alvenaria com bancada", "churrasqueira de tijolo com bancada", "churrasqueira com bancada de alvenaria",
    "churrasqueira com bancada de tijolo", "churrasqueira de alvenaria com balcão", "churrasqueira de tijolo com balcão",
    "churrasqueira com balcão de alvenaria", "churrasqueira com balcão de tijolo", "churrasqueira de alvenaria grande",
    "churrasqueira de tijolo grande", "churrasqueira grande de alvenaria", "churrasqueira grande de tijolo",
    "churrasqueira de alvenaria embutida", "churrasqueira de tijolo embutida", "churrasqueira embutida de alvenaria",
    "churrasqueira embutida de tijolo", "churrasqueira de alvenaria quadrada", "churrasqueira de tijolo quadrada",
    "churrasqueira quadrada de alvenaria", "churrasqueira quadrada de tijolo", "churrasqueira de alvenaria redonda",
    "churrasqueira de tijolo redonda", "churrasqueira redonda de alvenaria", "churrasqueira redonda de tijolo",
    "churrasqueira de alvenaria com chaminé", "churrasqueira de tijolo com chaminé", "churrasqueira com chaminé de alvenaria",
    "churrasqueira com chaminé de tijolo", "churrasqueira de alvenaria sem chaminé", "churrasqueira de tijolo sem chaminé",
    "churrasqueira sem chaminé de alvenaria", "churrasqueira sem chaminé de tijolo", "churrasqueira de alvenaria com coifa",
    "churrasqueira de tijolo com coifa", "churrasqueira com coifa de alvenaria", "churrasqueira com coifa de tijolo",
    "churrasqueira de alvenaria com exaustor", "churrasqueira de tijolo com exaustor", "churrasqueira com exaustor de alvenaria",
    "churrasqueira com exaustor de tijolo", "churrasqueira de alvenaria com iluminação", "churrasqueira de tijolo com iluminação",
    "churrasqueira com iluminação de alvenaria", "churrasqueira com iluminação de tijolo", "churrasqueira de alvenaria com espeto giratório",
    "churrasqueira de tijolo com espeto giratório", "churrasqueira com espeto giratório de alvenaria",
    "churrasqueira com espeto giratório de tijolo", "churrasqueira de alvenaria com grelha", "churrasqueira de tijolo com grelha",
    "churrasqueira com grelha de alvenaria", "churrasqueira com grelha de tijolo", "churrasqueira de alvenaria com tampa",
    "churrasqueira de tijolo com tampa", "churrasqueira com tampa de alvenaria", "churrasqueira com tampa de tijolo",
    "churrasqueira de alvenaria com porta", "churrasqueira de tijolo com porta", "churrasqueira com porta de alvenaria",
    "churrasqueira com porta de tijolo", "churrasqueira de alvenaria com gaveta", "churrasqueira de tijolo com gaveta",
    "churrasqueira com gaveta de alvenaria", "churrasqueira com gaveta de tijolo", "churrasqueira de alvenaria com rodinha",
    "churrasqueira de tijolo com rodinha", "churrasqueira com rodinha de alvenaria", "churrasqueira com rodinha de tijolo",
    "churrasqueira de alvenaria portátil", "churrasqueira de tijolo portátil", "churrasqueira portátil de alvenaria",
    "churrasqueira portátil de tijolo", "churrasqueira de alvenaria fixa", "churrasqueira de tijolo fixa",
    "churrasqueira fixa de alvenaria", "churrasqueira fixa de tijolo", "churrasqueira de alvenaria de tijolo aparente",
    "churrasqueira de tijolo de tijolo aparente", "churrasqueira de tijolo aparente de alvenaria", "churrasqueira de tijolo aparente de tijolo",
    "churrasqueira de alvenaria de tijolo comum", "churrasqueira de tijolo de tijolo comum", "churrasqueira de tijolo comum de alvenaria",
    "churrasqueira de tijolo comum de tijolo", "churrasqueira de alvenaria de tijolo refratário", "churrasqueira de tijolo de tijolo refratário",
    "churrasqueira de tijolo refratário de alvenaria", "churrasqueira de tijolo refratário de tijolo", "churrasqueira de alvenaria de tijolo ecológico",
    "churrasqueira de tijolo de tijolo ecológico", "churrasqueira de tijolo ecológico de alvenaria", "churrasqueira de tijolo ecológico de tijolo",
    "churrasqueira de alvenaria de tijolo de demolição", "churrasqueira de tijolo de tijolo de demolição",
    "churrasqueira de tijolo de demolição de alvenaria", "churrasqueira de tijolo de demolição de tijolo",
    "churrasqueira de alvenaria de tijolo de cimento", "churrasqueira de tijolo de tijolo de cimento",
    "churrasqueira de tijolo de cimento de alvenaria", "churrasqueira de tijolo de cimento de tijolo",
    "churrasqueira de alvenaria de tijolo de barro", "churrasqueira de tijolo de tijolo de barro", "churrasqueira de tijolo de barro de alvenaria",
    "churrasqueira de tijolo de barro de tijolo", "churrasqueira de alvenaria de tijolo de vidro", "churrasqueira de tijolo de tijolo de vidro",
    "churrasqueira de tijolo de vidro de alvenaria", "churrasqueira de tijolo de vidro de tijolo"
  ]
};

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
          sizes="100vw"
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 px-4 py-2 rounded-full text-primary font-bold text-xs uppercase tracking-widest animate-fade-in">
            <Flame size={14} className="fill-current" />
            Empresa Líder na Internet
          </div>

          <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none max-w-5xl mx-auto">
            Uma <span className="text-primary">Churrasqueira de Verdade</span> para celebrar.
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed">
            Especialistas em churrasqueiras de tijolo sob medida. Modelos artesanais construidas a mão tijolos a tijolos modelo rustico e original na medida que você precisa. Churrasqueiras, Churrasqueiras com Fogão, Churrasqueiras com Forno, Churrasqueiras forno e fogão, Balcão de tijolinho, Paredes e tudo na Arte do Tijolinho.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
            <Link
              href="#modelos"
              className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-primary/40 transition-all hover:scale-105 active:scale-95"
            >
              Ver Modelos
            </Link>
            <Link
              href="https://wa.me/5521920008754?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20construção%20de%20churrasqueira.%20Vi%20o%20portfólio%20de%20vocês%20pelo%20site%20e%20gostaria%20de%20saber%20valores"
              className="w-full md:w-auto bg-white hover:bg-white/90 text-primary px-10 py-5 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105 active:scale-95"
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
          <h3 className="text-2xl font-bold tracking-tight">Tijolinhos Originais</h3>
          <p className="text-muted-foreground leading-relaxed">Utilizamos Tijolinhos Originais feitos em fornos para garantir resistencia a alta temperatura.</p>
        </div>
        <div className="bg-card p-10 rounded-[40px] border border-border/50 space-y-6 hover:translate-y-[-10px] transition-all duration-500 shadow-xl shadow-black/5">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
            <Clock size={32} />
          </div>
          <h3 className="text-2xl font-bold tracking-tight">Contrato Transparente</h3>
          <p className="text-muted-foreground leading-relaxed">Fechamento via contrato digital com total clareza. Sem letras miúdas, priorizamos a transparência em cada etapa.</p>
        </div>
        <div className="bg-card p-10 rounded-[40px] border border-border/50 space-y-6 hover:translate-y-[-10px] transition-all duration-500 shadow-xl shadow-black/5">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
            <Award size={32} />
          </div>
          <h3 className="text-2xl font-bold tracking-tight">Churrasqueira Sob Medida</h3>
          <p className="text-muted-foreground leading-relaxed">Sua área de lazer merece uma churrasqueira sob medida. Aproveitamento total do seu espaço com aquele acabamento rústico que você busca.</p>
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
              <div className="aspect-square relative overflow-hidden bg-muted">
                {product.images?.[0] ? (
                  <Image
                    src={product.images[0].url}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

      {/* SEO Keywords Section */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-muted/30 p-10 rounded-[40px] border border-border/50">
          <h2 className="text-[16px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8 text-center">Nossas Especialidades e Modelos</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "fogões a lenha", "fogões de lenha", "fogão de lenha com forno", "modelos de churrasqueira de alvenaria",
              "forno à lenha", "churrasqueira de tijolo maciço", "churrasqueira e forno", "fogão de lenha",
              "forno de lenha pizzaria", "forno lenha pizza", "forno pizza lenha", "comprar churrasqueira de alvenaria",
              "forno a lenha pizzaria", "forno de pizza gourmet", "churrasqueira pronta de tijolo", "construção de churrasqueira",
              "churrasqueira 3 em 1", "churrasqueira com tijolo", "churrasqueira de tijolos", "churrasqueira de tijolinho",
              "churrasqueira tijolinho", "churrasqueira tijolo", "churrasqueiras de tijolinhos", "churrasqueiras de tijolo",
              "fogão a lenha com forno", "fogão a lenha de tijolo", "fogão de lenha de tijolo", "forno a lenha",
              "forno de pizza a lenha", "forno de pizza lenha", "forno para pizza a lenha", "forno para pizza lenha",
              "forno pizza a lenha", "modelos de churrasqueira de tijolo", "modelos de churrasqueiras de tijolinho",
              "modelos de churrasqueiras de tijolo", "churrasqueira alvenaria", "churrasqueira de alvenaria",
              "churrasqueira de tijolo", "churrasqueiras de alvenaria", "fogão a lenha", "forno pizza",
              "churrasqueira com forno e fogão a lenha", "churrasqueira com fogão a lenha e forno", "churrasqueira com fogão a lenha",
              "churrasqueira e fogão a lenha", "churrasqueira forno e fogão a lenha", "churrasqueira fogão a lenha e forno",
              "churrasqueira e forno a lenha", "churrasqueira com forno a lenha", "churrasqueira e fogão a lenha e forno",
              "churrasqueira com fogão a lenha e forno de pizza", "churrasqueira fogão a lenha e forno de pizza",
              "churrasqueira com forno", "fogão a lenha com churrasqueira"
            ].map((keyword) => (
              <span key={keyword} className="px-3 py-1 bg-background/50 border border-border/30 rounded-full text-[12px] text-muted-foreground whitespace-nowrap">
                {keyword}
              </span>
            ))}
            <span className="text-[12px] text-muted-foreground self-center px-2">e muito mais em arte do tijolinho...</span>
          </div>
        </div>
      </section>
    </div>
  );
}
