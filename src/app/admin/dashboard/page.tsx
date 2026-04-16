import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Package, Eye, Edit } from "lucide-react";

export default async function DashboardPage() {
  const products = await prisma.product.findMany({
    include: { images: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Produtos</h1>
          <p className="text-muted-foreground">Gerencie o catálogo de churrasqueiras da sua loja.</p>
        </div>
        <Link
          href="/admin/products/new"
          className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-2xl font-semibold shadow-lg hover:bg-primary/90 transition-all active:scale-95"
        >
          <Plus size={20} />
          Novo Produto
        </Link>
      </div>

      <div className="bg-card rounded-3xl border border-border shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="px-6 py-4 font-semibold text-sm">Produto</th>
              <th className="px-6 py-4 font-semibold text-sm">Preço</th>
              <th className="px-6 py-4 font-semibold text-sm text-center">Status SEO</th>
              <th className="px-6 py-4 font-semibold text-sm text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {products.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-muted-foreground">
                  <Package className="mx-auto mb-3 opacity-20" size={48} />
                  Nenhum produto cadastrado ainda.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-foreground">{product.name}</div>
                    <div className="text-xs text-muted-foreground">{product.category}</div>
                  </td>
                  <td className="px-6 py-4 text-foreground font-medium">
                    R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      <span className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase ${
                        product.metaTitle && product.metaDescription 
                        ? "bg-green-500/10 text-green-600" 
                        : "bg-yellow-500/10 text-yellow-600"
                      }`}>
                        {product.metaTitle && product.metaDescription ? "Otimizado" : "Incompleto"}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Link 
                        href={`/produto/${product.slug}`}
                        target="_blank"
                        className="p-2 hover:bg-muted rounded-lg text-muted-foreground transition-all"
                        title="Ver no site"
                      >
                        <Eye size={18} />
                      </Link>
                      <Link 
                        href={`/admin/products/${product.id}/edit`}
                        className="p-2 hover:bg-muted rounded-lg text-muted-foreground transition-all"
                        title="Editar"
                      >
                        <Edit size={18} />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
