import { Search } from "lucide-react";

interface SEOPreviewProps {
  title: string;
  description: string;
  slug: string;
}

export function SEOPreview({ title, description, slug }: SEOPreviewProps) {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
      <div className="bg-muted/50 px-4 py-2 border-b border-border flex items-center gap-2">
        <Search size={14} className="text-muted-foreground" />
        <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Prévia do Google</span>
      </div>
      <div className="p-6 bg-white dark:bg-[#202124]">
        <div className="max-w-[600px] font-sans">
          <p className="text-[#1a0dab] dark:text-[#8ab4f8] text-xl hover:underline cursor-pointer mb-1 truncate leading-tight">
            {title || "Título do Produto - Churrasqueiras RJ"}
          </p>
          <div className="flex items-center text-sm mb-1">
            <span className="text-[#202124] dark:text-[#bdc1c6] font-medium">churrasqueirasrj.com.br</span>
            <span className="text-[#5f6368] dark:text-[#9aa0a6]"> › produto › {slug || "exemplo-slug"}</span>
          </div>
          <p className="text-[#4d5156] dark:text-[#bdc1c6] text-sm line-clamp-2 leading-relaxed">
            {description || "A descrição meta aparecerá aqui. Certifique-se de incluir palavras-chave importantes para atrair cliques na busca do Google."}
          </p>
        </div>
      </div>
    </div>
  );
}
