import React from 'react';

interface GooglePreviewProps {
  title: string;
  description: string;
  slug: string;
}

// Componente de Visualização em Tempo Real (Google Preview) - Padrão Neil Patel
export function GooglePreview({ title, description, slug }: GooglePreviewProps) {
  return (
    <div className="mt-6 p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border-dashed border-2 border-slate-200 dark:border-slate-800">
      <h4 className="text-xs font-bold text-slate-500 uppercase mb-4 tracking-widest">Prévia do Resultado de Busca</h4>
      <div className="max-w-[600px] font-sans">
        <span className="text-sm text-[#202124] dark:text-[#bdc1c6] block mb-1 truncate">
          https://churrasqueirasrj.com.br/produto/<span className="font-bold">{slug || 'seu-produto'}</span>
        </span>
        <h3 className="text-[20px] text-[#1a0dab] dark:text-[#8ab4f8] leading-[1.3] hover:underline cursor-pointer mb-1 line-clamp-1">
          {title || "Título do Produto - Churrasqueiras RJ"}
        </h3>
        <p className="text-[14px] text-[#4d5156] dark:text-[#bdc1c6] leading-[1.58] line-clamp-2">
          {description || "Comece a digitar a meta descrição para ver como este produto aparecerá nos resultados de busca do Google..."}
        </p>
      </div>
    </div>
  );
}
