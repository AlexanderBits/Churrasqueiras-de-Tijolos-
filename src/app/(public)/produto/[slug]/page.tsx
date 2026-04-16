import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import { getProductJsonLd } from "@/lib/seo";
import { Flame, CheckCircle2, MapPin, Truck, ShieldCheck } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await prisma.product.findUnique({ where: { slug } });

  if (!product) return { title: "Produto não encontrado" };

  return {
    title: product.metaTitle || `${product.name} | Churrasqueiras RJ`,
    description: product.metaDescription || "As melhores churrasqueiras de tijolo do Rio de Janeiro.",
    keywords: product.keywords || "churrasqueira, tijolo, rj, área gourmet",
    openGraph: {
      title: product.name,
      description: product.metaDescription || undefined,
      images: product.images?.[0] ? [{ url: product.images[0].toString() }] : [],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await prisma.product.findUnique({
    where: { slug },
    include: { images: true },
  });

  if (!product) notFound();

  const jsonLd = getProductJsonLd(product);

  return (
    <div className="pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square relative rounded-[40px] overflow-hidden bg-muted shadow-2xl">
              {product.images?.[0] ? (
                <Image
                  src={product.images[0].url}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                  <Flame size={128} />
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.slice(1).map((image, idx) => (
                <div key={idx} className="aspect-square relative rounded-2xl overflow-hidden bg-muted border border-border">
                  <Image
                    src={image.url}
                    alt={`${product.name} ${idx + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                {product.category}
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
                {product.name}
              </h1>
              <div className="text-4xl md:text-5xl font-black text-primary">
                R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </div>
            </div>

            <div className="p-8 bg-card rounded-[32px] border border-border/50 shadow-sm space-y-6">
              <h3 className="font-bold text-lg uppercase tracking-widest text-muted-foreground">O que está incluso:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center gap-3 font-medium">
                  <CheckCircle2 className="text-green-500" size={20} />
                  Base Refratária
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <CheckCircle2 className="text-green-500" size={20} />
                  Grelhas em Inox
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <CheckCircle2 className="text-green-500" size={20} />
                  Acabamento em Granito
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <CheckCircle2 className="text-green-500" size={20} />
                  Iluminação Interna
                </li>
              </ul>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: product.description }} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 border-b border-border">
              <div className="flex items-center gap-4 text-sm font-medium">
                <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center text-muted-foreground">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-bold">Entrega e Instalação</div>
                  <div className="text-muted-foreground">Todo o Rio de Janeiro</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm font-medium">
                <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center text-muted-foreground">
                  <Truck size={24} />
                </div>
                <div>
                  <div className="font-bold">Prazo de Entrega</div>
                  <div className="text-muted-foreground">5 a 10 dias úteis</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href={`https://wa.me/5521999999999?text=Olá, tenho interesse na ${product.name}`}
                className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-[32px] font-bold text-2xl shadow-2xl shadow-primary/40 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-4"
              >
                Solicitar Orçamento Grátis
                <ShieldCheck size={28} />
              </a>
              <p className="text-center text-xs text-muted-foreground mt-4 font-bold uppercase tracking-widest">
                Garantia de 5 anos inclusa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
