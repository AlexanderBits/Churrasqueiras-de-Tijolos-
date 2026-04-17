"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState, useTransition, useEffect } from "react";
import { createProduct } from "../actions";
import { GooglePreview } from "@/components/admin/GooglePreview";
import RichTextEditor from "@/components/admin/RichTextEditor";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Flame, Save, Search, LayoutGrid, Info, Tag } from "lucide-react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const productSchema = z.object({
  name: z.string().min(1, "O nome do produto é obrigatório"),
  price: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "O preço deve ser um número positivo",
  }),
  category: z.string().min(1, "A categoria é obrigatória"),
  description: z.string().min(10, "A descrição deve ter pelo menos 10 caracteres"),
  metaTitle: z.string().min(1, "O título de SEO é obrigatório").max(70, "O título deve ter no máximo 70 caracteres"),
  metaDescription: z.string().max(160, "A meta descrição deve ter no máximo 160 caracteres"),
  slug: z.string().min(1, "O slug é obrigatório"),
  imageUrls: z.string().min(1, "Pelo menos uma imagem é necessária"),
});

type ProductFormValues = z.infer<typeof productSchema>;

export default function NovoProdutoPage() {
  const [isPending, startTransition] = useTransition();
  const [description, setDescription] = useState("");

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      price: "",
      category: "Tradicional",
      description: "",
      metaTitle: "",
      metaDescription: "",
      slug: "",
      imageUrls: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80",
    },
  });

  const { register, handleSubmit, watch, setValue, formState: { errors } } = form;

  const watchedValues = watch();

  // Auto-generate slug and meta title from name
  useEffect(() => {
    if (watchedValues.name && !form.getFieldState("slug").isDirty) {
      const generatedSlug = watchedValues.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
      setValue("slug", generatedSlug);
    }
    
    if (watchedValues.name && !form.getFieldState("metaTitle").isDirty) {
      setValue("metaTitle", `${watchedValues.name} | Churrasqueiras RJ`);
    }
  }, [watchedValues.name, setValue, form]);

  const onSubmit = (values: ProductFormValues) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
    // Ensure the description from State is used
    formData.set("description", description);

    startTransition(async () => {
      await createProduct(formData);
    });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 p-4">
      <div className="flex items-center justify-between">
        <div>
          <Link 
            href="/admin/dashboard" 
            className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-sm font-medium mb-2"
          >
            <ChevronLeft size={16} />
            Voltar ao Dashboard
          </Link>
          <h1 className="text-4xl font-black tracking-tighter uppercase flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Flame size={24} className="text-white fill-current" />
            </div>
            Cadastrar Churrasqueira
          </h1>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-8">
          {/* Informações Básicas */}
          <Card className="border-border/50 shadow-xl shadow-black/5 rounded-[32px] overflow-hidden">
            <CardHeader className="bg-muted/30 border-b border-border/50 pb-6">
              <div className="flex items-center gap-2 mb-1">
                <Info className="text-primary w-5 h-5" />
                <CardTitle className="text-xl font-bold tracking-tight">Informações do Produto</CardTitle>
              </div>
              <CardDescription>Dados essenciais para a vitrine da loja.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Nome do Produto</Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="Ex: Churrasqueira Tijolinho Gourmet"
                  className="rounded-xl h-12 border-border/50 bg-muted/20 focus:ring-primary/20"
                />
                {errors.name && <p className="text-red-500 text-[10px] font-bold uppercase ml-1">{errors.name.message}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Preço (R$)</Label>
                  <Input
                    id="price"
                    {...register("price")}
                    type="number"
                    step="0.01"
                    placeholder="0,00"
                    className="rounded-xl h-12 border-border/50 bg-muted/20"
                  />
                  {errors.price && <p className="text-red-500 text-[10px] font-bold uppercase ml-1">{errors.price.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Categoria</Label>
                  <select
                    id="category"
                    {...register("category")}
                    className="flex h-12 w-full rounded-xl border border-border/50 bg-muted/20 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                  >
                    <option value="Tradicional">Tradicional</option>
                    <option value="Gourmet">Gourmet</option>
                    <option value="Rústica">Rústica</option>
                    <option value="Premium">Premium</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Descrição</Label>
                <RichTextEditor
                  value={description}
                  onChange={(val) => {
                    setDescription(val);
                    setValue("description", val);
                  }}
                  placeholder="Descreva os materiais, dimensões e diferenciais..."
                />
                {errors.description && <p className="text-red-500 text-[10px] font-bold uppercase ml-1">{errors.description.message}</p>}
              </div>
              
              <div className="space-y-2 pt-4">
                <Label htmlFor="imageUrls" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Links das Imagens (Separados por vírgula)</Label>
                <Textarea
                  id="imageUrls"
                  {...register("imageUrls")}
                  placeholder="https://exemplo.com/foto1.jpg, https://exemplo.com/foto2.jpg"
                  className="rounded-xl min-h-[80px] border-border/50 bg-muted/20 font-mono text-xs"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-5 space-y-8">
          {/* SEO Section */}
          <Card className="border-primary/20 shadow-2xl shadow-primary/5 rounded-[40px] overflow-hidden ring-1 ring-primary/10">
            <CardHeader className="bg-primary/5 border-b border-primary/10 pb-6">
              <div className="flex items-center gap-2 mb-1">
                <Search className="text-primary w-5 h-5" />
                <CardTitle className="text-xl font-black tracking-tighter uppercase">Otimização SEO <span className="text-primary italic font-normal text-xs normal-case tracking-normal ml-2">(Padrão Neil Patel)</span></CardTitle>
              </div>
              <CardDescription className="text-foreground/60 font-medium">Configure como o Google verá este produto.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="metaTitle" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Tag Title</Label>
                  <span className={`text-[10px] font-bold ${watchedValues.metaTitle?.length > 70 ? 'text-red-500' : 'text-green-600'}`}>
                    {watchedValues.metaTitle?.length || 0}/70
                  </span>
                </div>
                <Input
                  id="metaTitle"
                  {...register("metaTitle")}
                  placeholder="Título para o Google"
                  className={`rounded-xl h-11 border-border/50 transition-all ${watchedValues.metaTitle?.length > 70 ? 'border-red-300 ring-1 ring-red-100' : ''}`}
                />
                {errors.metaTitle && <p className="text-red-500 text-[10px] font-bold uppercase ml-1">{errors.metaTitle.message}</p>}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="metaDescription" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Meta Description</Label>
                  <span className={`text-[10px] font-bold ${watchedValues.metaDescription?.length > 160 ? 'text-red-500' : 'text-green-600'}`}>
                    {watchedValues.metaDescription?.length || 0}/160
                  </span>
                </div>
                <Textarea
                  id="metaDescription"
                  {...register("metaDescription")}
                  placeholder="Resumo estratégico para cliques..."
                  className={`rounded-xl min-h-[100px] border-border/50 transition-all resize-none ${watchedValues.metaDescription?.length > 160 ? 'border-red-300 ring-1 ring-red-100' : ''}`}
                />
                {errors.metaDescription && <p className="text-red-500 text-[10px] font-bold uppercase ml-1">{errors.metaDescription.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">URL Amigável (Slug)</Label>
                <div className="relative">
                  <Input
                    id="slug"
                    {...register("slug")}
                    placeholder="nome-do-produto"
                    className="rounded-xl h-11 border-border/50 pl-3 font-mono text-sm"
                  />
                </div>
                {errors.slug && <p className="text-red-500 text-[10px] font-bold uppercase ml-1">{errors.slug.message}</p>}
              </div>

              <Separator className="bg-primary/10" />

              <GooglePreview
                title={watchedValues.metaTitle}
                description={watchedValues.metaDescription}
                slug={watchedValues.slug}
              />

              <Button
                type="submit"
                disabled={isPending}
                className="w-full h-16 rounded-[24px] bg-primary hover:bg-primary/90 text-white font-black text-lg uppercase tracking-widest shadow-xl shadow-primary/30 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 mt-4"
              >
                <Save className="mr-2 h-6 w-6" />
                {isPending ? "SALVANDO..." : "PUBLICAR AGORA"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </form>
    </div>
  );
}
