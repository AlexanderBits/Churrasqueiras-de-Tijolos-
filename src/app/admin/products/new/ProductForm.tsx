"use client";

import { useState, useTransition } from "react";
import { createProduct } from "../actions";
import RichTextEditor from "@/components/admin/RichTextEditor";
import { SEOPreview } from "@/components/admin/SEOPreview";
import { Save, AlertCircle, Image as ImageIcon, Search } from "lucide-react";

export default function ProductForm() {
  const [description, setDescription] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSlugify = (name: string) => {
    const s = name
      .toLowerCase()
      .trim()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
    setSlug(s);
  };

  return (
    <form action={(formData) => {
      formData.set("description", description);
      startTransition(() => createProduct(formData));
    }} className="space-y-8 max-w-5xl mx-auto pb-20">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card p-6 rounded-3xl border border-border shadow-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full" />
              Informações Básicas
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome do Produto</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Ex: Churrasqueira de Tijolo Prime"
                  onChange={(e) => handleSlugify(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Link (Slug)</label>
                  <input
                    name="slug"
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="URL amigável"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Categoria</label>
                  <select
                    name="category"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  >
                    <option value="Tradicional">Tradicional</option>
                    <option value="Moderna">Moderna</option>
                    <option value="Gourmet">Gourmet</option>
                    <option value="Sob Medida">Sob Medida</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Preço (R$)</label>
                <input
                  name="price"
                  type="number"
                  step="0.01"
                  placeholder="0,00"
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Descrição Completa</label>
                <RichTextEditor
                  value={description}
                  onChange={setDescription}
                  placeholder="Descreva as especificações, materiais e diferenciais..."
                />
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-3xl border border-border shadow-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <ImageIcon className="text-primary" size={24} />
              Imagens
            </h2>
            <div>
              <label className="block text-sm font-medium mb-2 text-muted-foreground">URLs das Imagens (separadas por vírgula)</label>
              <textarea
                name="imageUrls"
                rows={3}
                placeholder="https://exemplo.com/foto1.jpg, https://exemplo.com/foto2.jpg"
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:ring-2 focus:ring-primary/20 outline-none transition-all font-mono text-xs"
                required
              />
              <p className="text-[11px] text-muted-foreground mt-2 italic flex items-center gap-1">
                <AlertCircle size={12} />
                Dica: Use fotos em alta definição para converter melhor seus clientes.
              </p>
            </div>
          </div>
        </div>

        {/* SEO Sidebar */}
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-3xl border border-border shadow-sm sticky top-8">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Search className="text-primary" size={24} />
              Configurações de SEO
            </h2>
            
            <div className="space-y-4 mb-8">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold text-muted-foreground uppercase">Meta Title</label>
                  <span className={`text-[10px] ${metaTitle.length > 70 ? 'text-red-500' : 'text-green-500'}`}>
                    {metaTitle.length}/70
                  </span>
                </div>
                <input
                  name="metaTitle"
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  placeholder="Título para o Google"
                  className="w-full px-3 py-2 text-sm rounded-lg bg-muted/50 border border-border focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold text-muted-foreground uppercase">Meta Description</label>
                  <span className={`text-[10px] ${metaDescription.length > 160 ? 'text-red-500' : 'text-green-500'}`}>
                    {metaDescription.length}/160
                  </span>
                </div>
                <textarea
                  name="metaDescription"
                  rows={4}
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  placeholder="Breve resumo para os resultados de busca"
                  className="w-full px-3 py-2 text-sm rounded-lg bg-muted/50 border border-border focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase block mb-1">Keywords</label>
                <input
                  name="keywords"
                  type="text"
                  placeholder="tijolo, churrasqueira, rj, design"
                  className="w-full px-3 py-2 text-sm rounded-lg bg-muted/50 border border-border focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>
            </div>

            <SEOPreview
              title={metaTitle}
              description={metaDescription}
              slug={slug}
            />

            <button
              type="submit"
              disabled={isPending}
              className="w-full mt-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-primary/90 transition-all disabled:opacity-50"
            >
              <Save size={20} />
              {isPending ? "Salvando..." : "Publicar Produto"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
