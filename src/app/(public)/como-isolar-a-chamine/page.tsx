import Link from "next/link";
import { AlertTriangle, ShieldCheck, CheckCircle2, Play, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Como Isolar a Chaminé da Churrasqueira | Manual Técnico",
  description: "Aprenda a forma correta de realizar o isolamento da chaminé da sua churrasqueira para evitar vazamentos internos e preservar a estrutura.",
};

export default function ComoIsolarChaminePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header / Breadcrumb */}
      <div className="bg-muted/30 py-8 border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all mb-4 text-sm uppercase tracking-widest">
            <ArrowLeft size={16} />
            Voltar ao Início
          </Link>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
            Como Isolar <span className="text-primary italic">a Chaminé</span>
          </h1>
          <p className="text-muted-foreground mt-4 font-medium text-lg">Manual Técnico e Preservação Estrutural</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12 pb-32">
        {/* Intro */}
        <section className="space-y-6">
          <p className="text-xl text-foreground/80 leading-relaxed font-medium">
            A chaminé da churrasqueira é essencial para o bom funcionamento do seu lazer, mas é fundamental protegê-la contra vazamentos de água.
          </p>
          
          <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-2xl space-y-4">
            <div className="flex items-center gap-3 text-amber-800 font-black uppercase tracking-tight text-xl">
              <AlertTriangle className="text-amber-600" size={32} />
              Atenção Crítica
            </div>
            <p className="text-amber-900 leading-relaxed font-bold italic">
              Se não for feito o isolamento correto, isso implicará em vazamentos por dentro da churrasqueira. As juntas entre os tijolos não são impermeáveis e nossa massa é desenvolvida para CALOR, não para retenção de água.
            </p>
          </div>
        </section>

        {/* Content Section 1 */}
        <section className="space-y-6">
          <h2 className="text-3xl font-black tracking-tight uppercase flex items-center gap-3">
            <ShieldCheck className="text-primary" size={28} />
            Por que isolar?
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground font-medium">
            <p>
              Exploraremos aqui a importância e a forma do isolamento adequado. Apresentaremos uma técnica eficaz usando um colarinho de chapa em conjunto com cola PU de para-brisas ou um silicone de alta qualidade.
            </p>
          </div>
        </section>

        {/* Content Section 2 */}
        <section className="bg-card p-10 rounded-[40px] border border-border/50 space-y-8 shadow-xl shadow-black/5">
          <h2 className="text-3xl font-black tracking-tight uppercase">Isolamento com Colarinho de Chapa</h2>
          <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed font-medium space-y-6">
            <p>
              O colarinho de chapa é uma solução eficaz para prevenir vazamentos de água ao redor da chaminé. Esse componente em forma de anel é instalado na base da chaminé, criando uma barreira física que impede a entrada de água.
            </p>
            <p>
              A chapa, geralmente de material resistente às intempéries, forma uma vedação robusta, protegendo toda a estrutura da chaminé.
            </p>
          </div>
        </section>

        {/* Content Section 3 */}
        <section className="space-y-8">
          <h2 className="text-3xl font-black tracking-tight uppercase flex items-center gap-3">
            <CheckCircle2 className="text-primary" size={28} />
            Vedação com Cola PU ou Silicone
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground font-medium space-y-6">
            <p>
              A aplicação de cola PU de para-brisas ou silicone de qualidade é crucial para garantir uma vedação completa entre o colarinho de chapa e a estrutura da chaminé. Ambos os materiais são conhecidos por sua durabilidade e resistência à água.
            </p>
            <p>
              A cola PU é especialmente eficaz devido à sua capacidade de se expandir e contrair, adaptando-se às mudanças de temperatura e movimentações estruturais da alvenaria.
            </p>
          </div>
        </section>

        {/* Video Section */}
        <section className="space-y-8 py-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest">
              <Play size={14} fill="currentColor" />
              Vídeo Demonstrativo
            </div>
            <h2 className="text-4xl font-black tracking-tighter uppercase">Passo a Passo em Vídeo</h2>
            <p className="text-muted-foreground font-medium italic">Tutorial do canal @uvscalhas sobre o isolamento do telhado com colarinho.</p>
          </div>
          
          <div className="aspect-video w-full rounded-[40px] overflow-hidden shadow-2xl bg-black border-8 border-white shadow-black/10">
            <iframe
              src="https://www.dailymotion.com/embed/video/k7FMycsplAdAwJzDS4B"
              width="100%"
              height="100%"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Isolamento de Chaminé"
            ></iframe>
          </div>
        </section>

        {/* Conclusion */}
        <section className="border-t border-border pt-16">
          <div className="max-w-2xl space-y-6">
            <h2 className="text-3xl font-black tracking-tight uppercase">Conclusão</h2>
            <p className="text-muted-foreground leading-relaxed font-medium">
              Preservar a integridade da chaminé da churrasqueira é essencial para garantir seu funcionamento adequado e prolongar a vida útil da sua churrasqueira. Ao seguir estas orientações e assistir ao vídeo, você garante que sua estrutura permaneça protegida e pronta para proporcionar momentos agradáveis sem preocupações com infiltrações.
            </p>
          </div>
        </section>
      </div>

      {/* CTA Final */}
      <div className="bg-secondary text-white py-20 px-4 text-center">
        <div className="max-w-xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Ainda tem dúvidas técnicas?</h2>
          <p className="text-white/60 font-medium">Fale com nossa equipe de especialistas agora mesmo via WhatsApp.</p>
          <a 
            href="https://wa.me/5521920008754?text=Olá!%20Li%20o%20manual%20de%20isolamento%20e%20ainda%20tenho%20algumas%20dúvidas%20técnicas."
            target="_blank"
            className="inline-block bg-primary text-white px-10 py-5 rounded-full font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all text-sm"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </div>
  );
}
