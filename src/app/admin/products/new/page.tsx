import ProductForm from "./ProductForm";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function NewProductPage() {
  return (
    <div>
      <div className="mb-8">
        <Link 
          href="/admin/dashboard" 
          className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-sm font-medium mb-4"
        >
          <ChevronLeft size={16} />
          Voltar ao Dashboard
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Novo Produto</h1>
        <p className="text-muted-foreground">Cadastre uma nova churrasqueira com foco total em SEO.</p>
      </div>

      <ProductForm />
    </div>
  );
}
