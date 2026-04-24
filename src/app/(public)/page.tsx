import Link from "next/link";
import Image from "next/image";
import { Flame, ArrowRight, ShieldCheck, Clock, Award, Mouse, CheckCircle2 } from "lucide-react";

export const revalidate = 3600;
export const dynamic = 'force-dynamic';

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
  const { prisma } = await import("@/lib/prisma");
  let products: any[] = [];
  try {
    products = await prisma.product.findMany({
      include: { images: true },
      take: 6,
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Erro ao carregar produtos na home:", error);
  }

  return (
    <div className="space-y-32 mb-32">
      {/* Schema Markup Oculto para SEO (Conteúdo do Site Antigo) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Churrasqueiras Alvorada / Churrasqueiras de Tijolos RJ",
            "description": "Tradição em churrasqueiras pré-moldadas, fornos pré-moldados e lareiras. Rapidez e praticidade na montagem de sua churrasqueira com vários acabamentos. Fabricação modular de fornos caipira ideais para pães, pizzas e esfihas. Também trabalhamos com churrasqueiras residenciais e comerciais, fogões a lenha e uma linha completa de material refratário para sua obra.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Prof. França Amaral, 553 - Jardim América",
              "addressLocality": "Rio de Janeiro",
              "addressRegion": "RJ",
              "addressCountry": "BR"
            },
            "telephone": "(21) 3346-4288",
            "makesOffer": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Churrasqueiras pré-moldadas",
                  "description": "Rapidez e praticidade na montagem de sua churrasqueira. Vários acabamentos."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Fornos caipira e pré-moldados",
                  "description": "Maior eficiência e rapidez na distribuição do calor. Ideal para pães, pizzas e esfihas."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Lareiras e Material Refratário",
                  "description": "Projetos italianos dimensionados para eliminar a chance de retorno de fumaça. Tudo o que você precisa em refratários e outros materiais."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-10 pt-32">
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.85] max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            Construímos sua <span className="text-primary italic">Churrasqueira</span> de Verdade.
          </h1>

          <p className="text-lg md:text-2xl text-white max-w-3xl mx-auto font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
            Especialistas em churrasqueiras de tijolo Artesanais sob medida.
          </p>


        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Explore</span>
          <Mouse size={20} />
        </div>
      </section>

      {/* Quote Section */}
      <section className="max-w-5xl mx-auto px-4 text-center py-4">
        <div className="relative py-12 md:py-16">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-6">
            <Flame className="text-primary/20" size={32} />
          </div>
          <p className="text-xl md:text-3xl text-muted-foreground italic font-medium leading-relaxed">
            "A <span className="text-primary font-black not-italic uppercase tracking-wider">Alvorada</span> traz consigo a promessa de um mundo novo. Cada amanhecer é um convite para sermos melhores do que fomos ontem, iluminando o caminho com a clareza da luz que nasce."
          </p>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-foreground/40">— Fernando Pessoa</p>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-32 bg-gradient-to-r from-transparent via-border to-transparent" />
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
                <div className={`font-black ${product.price === 0 ? "text-xl text-primary/80 uppercase" : "text-3xl text-primary"}`}>
                  {product.price === 0 ? "Preço a Consultar" : `R$ ${product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
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

      {/* About Section */}
      <section id="sobre" className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-[60px] overflow-hidden shadow-2xl">
              <Image 
                src="/sobre-nos.jpg" 
                alt="Construção de Churrasqueira" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-primary p-10 rounded-[40px] shadow-2xl hidden md:block">
              <p className="text-white text-5xl font-black tracking-tighter">15+</p>
              <p className="text-white/80 text-sm font-bold uppercase tracking-widest">Anos de Experiência</p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                Tradição em <span className="text-primary italic">Arte no Tijolinho</span>
              </h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Somos especialistas na construção de churrasqueiras, fogões e fornos a lenha artesanais em todo o Rio de Janeiro.
              </p>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Cada projeto é único e construído tijolo por tijolo, utilizando materiais de alta performance térmica (refratários originais) e acabamento impecável. Nosso compromisso é com a durabilidade e a satisfação de quem busca o verdadeiro sabor do churrasco e da comida feita no fogo de chão.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-sm font-bold text-foreground">Projetos Sob Medida para seu espaço.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-sm font-bold text-foreground">Mão de obra especializada e limpa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/50 py-32">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Como <span className="text-primary">Trabalhamos</span></h2>
            <p className="text-muted-foreground max-w-xl mx-auto font-medium">Do orçamento à primeira brasa, transparência total.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Orçamento", desc: "Você escolhe o modelo e nós enviamos o valor na hora pelo WhatsApp." },
              { step: "02", title: "Contrato Online", desc: "Envio de contrato online para sua segurança, com cada ponto do produto explicado com transparência." },
              { step: "03", title: "Construção", desc: "Nossa equipe executa a obra com materiais de primeira linha e agilidade." },
              { step: "04", title: "Primeira Brasa", desc: "Entregamos tudo pronto para você inaugurar sua área gourmet." }
            ].map((item, idx) => (
              <div key={idx} className="bg-background p-10 rounded-[40px] border border-border/50 space-y-6 relative overflow-hidden group">
                <span className="text-8xl font-black text-primary/5 absolute -right-4 -bottom-4 transition-transform group-hover:scale-110 duration-500">{item.step}</span>
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-black text-xl">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="bg-secondary mx-4 rounded-[60px] py-24 px-8 text-center relative overflow-hidden shadow-2xl">
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
            <button
              data-orcamento-trigger
              className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl shadow-primary/40 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
            >
              Fazer Orçamento Agora
              <ArrowRight size={24} />
            </button>
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
