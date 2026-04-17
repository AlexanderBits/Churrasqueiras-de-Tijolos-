"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Flame } from "lucide-react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Senha incorreta. Tente novamente.");
      } else {
        router.push("/admin/dashboard");
      }
    } catch (err) {
      setError("Ocorreu um erro ao tentar entrar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-primary/20 to-secondary p-4">
      <div className="glass p-8 rounded-3xl w-full max-w-md shadow-2xl border border-white/10">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 shadow-lg ring-4 ring-primary/20">
            <Flame className="text-white w-8 h-8 fill-current" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-1 tracking-tight">MONTA CHURR</h1>
          <p className="text-muted-foreground text-sm">Acesso Restrito ao Administrador</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2 ml-1">
              Senha Mestra
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 rounded-2xl bg-background/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              required
              autoFocus
            />
          </div>
          
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm py-2 px-4 rounded-xl text-center">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold transition-all shadow-[0_8px_0_0_rgba(154,52,18,0.3)] active:shadow-none active:translate-y-[2px] disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider text-sm"
          >
            {loading ? "Verificando..." : "Entrar no Painel"}
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground/50 font-medium">
            &copy; 2026 CHURRASQUEIRAS RJ - SISTEMA BLINDADO
          </p>
        </div>
      </div>
    </div>
  );
}
