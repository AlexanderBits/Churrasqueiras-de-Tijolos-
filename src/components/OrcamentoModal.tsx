"use client";

import { useState, useEffect } from "react";
import { X, Flame, Send, CheckCircle2, Clock, Ruler, Info, ChevronRight, ChevronLeft } from "lucide-react";

const WHATSAPP_NUMBER = "5521920008754";

// Opções do conjunto
const CONJUNTO_OPTIONS = [
  { id: "churrasqueira", label: "Churrasqueira Padrão", desc: "80×60×320cm", icon: "🔥" },
  { id: "churrasqueira-sob-medida", label: "Churrasqueira Sob Medida", desc: "Prof. 80cm fixa. Informe L e A", icon: "📏", hasInput: true, inputPlaceholder: "Ex: L: 100cm, A: 350cm" },
  { id: "forno-iglu", label: "Forno tipo Iglu", desc: "Base 1m x 1m, Porta em Vidro", icon: "🍕" },
  { id: "forno-caipira", label: "Forno a Lenha Caipira", desc: "Modelo tradicional", icon: "🪵" },
  { id: "forno-ferro", label: "Forno de Ferro Fundido 50kg", desc: "Ferro Puro (Alta Durabilidade)", icon: "🏗️" },
  { id: "fogao-3-bocas", label: "Fogão a Lenha 3 Bocas", desc: "Alta durabilidade", icon: "♨️" },
  { id: "bancada-pia-120", label: "Bancada de Pia 120cm", desc: "Tamanho padrão", icon: "🚿" },
  { id: "bancada-sob-medida", label: "Bancada Sob Medida", desc: "Informe as medidas", icon: "📐", hasInput: true, inputPlaceholder: "Ex: 150cm x 60cm" },
  { id: "balcao-altura-110", label: "Balcão Altura 110cm", desc: "Informe a extensão", icon: "📏", hasInput: true, inputPlaceholder: "Ex: 200cm de extensão" },
];

// Opções de Chaminé para o Iglu
const CHAMINE_OPTIONS = [
  { id: "tubo-cinza", label: "Tubo Cinza", desc: "Fica preto com o uso" },
  { id: "tijolos", label: "Tijolos", desc: "Acabamento em alvenaria" },
  { id: "acoplado", label: "Acoplado", desc: "Mais Barato" },
];

// Cores de tijolo
const COR_OPTIONS = [
  { id: "palha", label: "Palha", color: "#D4B896", desc: "Tijolo claro/creme" },
  { id: "vermelha", label: "Vermelha", color: "#A0522D", desc: "Tijolo vermelho tradicional" },
  { id: "vermelha-canto-palha", label: "Vermelha c/ Canto Palha", color: "linear-gradient(135deg, #A0522D 50%, #D4B896 50%)", desc: "Principal vermelha, cantos palha" },
  { id: "palha-canto-vermelha", label: "Palha c/ Canto Vermelha", color: "linear-gradient(135deg, #D4B896 50%, #A0522D 50%)", desc: "Principal palha, cantos vermelha" },
];

// Tipo de churrasqueira
const TIPO_OPTIONS = [
  { id: "padrao", label: "Padrão", desc: "Modelo tradicional (80×60×320cm)" },
  { id: "caixote", label: "Caixote / Predial Reta", desc: "Modelo reto para prédios" },
];

export default function OrcamentoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [conjuntoSelecionado, setConjuntoSelecionado] = useState<string[]>([]);
  const [conjuntoInputs, setConjuntoInputs] = useState<Record<string, string>>({});
  const [corSelecionada, setCorSelecionada] = useState<string>("");
  const [tipoSelecionado, setTipoSelecionado] = useState<string>("");
  const [chamineSelecionada, setChamineSelecionada] = useState<string>("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [enviado, setEnviado] = useState(false);

  // Bloquear scroll do body quando aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleConjunto = (id: string) => {
    setConjuntoSelecionado((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const formatTelefone = (value: string) => {
    const nums = value.replace(/\D/g, "").slice(0, 11);
    if (nums.length <= 2) return `(${nums}`;
    if (nums.length <= 7) return `(${nums.slice(0, 2)}) ${nums.slice(2)}`;
    return `(${nums.slice(0, 2)}) ${nums.slice(2, 7)}-${nums.slice(7)}`;
  };

  const formatCep = (value: string) => {
    const nums = value.replace(/\D/g, "").slice(0, 8);
    if (nums.length <= 5) return nums;
    return `${nums.slice(0, 5)}-${nums.slice(5)}`;
  };

  const isStep1Valid = conjuntoSelecionado.length > 0;
  const isStep2Valid = corSelecionada && tipoSelecionado;
  const isStep3Valid = nome.trim() && telefone.length >= 14 && cep.length >= 9;

  const enviarWhatsApp = async () => {
    const itens = conjuntoSelecionado.map((id) => {
      const opt = CONJUNTO_OPTIONS.find((o) => o.id === id);
      if (!opt) return "";
      let text = `✅ ${opt.label}`;
      if (opt.hasInput && conjuntoInputs[id]) {
        text += ` — ${conjuntoInputs[id]}`;
      }
      return text;
    }).filter(Boolean).join("\n");

    const corLabel = COR_OPTIONS.find((c) => c.id === corSelecionada)?.label || "";
    const tipoLabel = TIPO_OPTIONS.find((t) => t.id === tipoSelecionado)?.label || "";
    const tipoDesc = TIPO_OPTIONS.find((t) => t.id === tipoSelecionado)?.desc || "";

    const mensagem = `🔥 *PEDIDO DE ORÇAMENTO — Churrasqueiras de Tijolos RJ*

👤 *Nome:* ${nome}
📞 *Telefone:* ${telefone}
📍 *CEP de Montagem:* ${cep}

📋 *Conjunto Selecionado:*
${itens}

🧱 *Cor dos Tijolos:* ${corLabel}
📐 *Tipo:* ${tipoLabel} (${tipoDesc})${chamineSelecionada ? `\n🗼 *Chaminé Iglu:* ${CHAMINE_OPTIONS.find(c => c.id === chamineSelecionada)?.label}` : ""}

Gostaria de receber um orçamento para este conjunto. Obrigado!`;

    // Integração Zoho CRM (Silenciosa)
    try {
      const formData = new FormData();
      formData.append("xnQsjsdp", "88d71f0040eb9a0631c8427e3117987cc9d3f164ea756713ca2ea1ce46ea63ff");
      formData.append("xmIwtLD", "5973d8c89e4ddfd7cff48612aa4f2acd3d1fd5dc1753cb9df1cae1ef1f4001fce58b803f5a4515a60bf27625ad050717");
      formData.append("actionType", "TGVhZHM=");
      formData.append("Lead Source", "Site");
      
      const nomes = nome.trim().split(" ");
      const firstName = nomes[0];
      const lastName = nomes.length > 1 ? nomes.slice(1).join(" ") : "Não Informado";

      formData.append("First Name", firstName);
      formData.append("Last Name", lastName);
      formData.append("Email", "contato_site@orcamento.com"); // Email falso pois não pedimos no form
      formData.append("Mobile", telefone); // Adicionado campo Celular
      formData.append("Zip Code", cep);
      
      const descricaoZoho = `Orçamento detalhado:\n\n${mensagem}`;
      formData.append("Description", descricaoZoho);

      await fetch("https://crm.zoho.com/crm/WebToLeadForm", {
        method: "POST",
        body: formData,
        mode: "no-cors" // Evita erros de CORS no navegador
      });
    } catch (e) {
      console.error("Erro silencioso Zoho:", e);
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    
    setEnviado(true);
    setTimeout(() => {
      window.open(url, "_blank");
    }, 1500);
  };

  const handleClose = () => {
    setEnviado(false);
    setStep(1);
    setConjuntoSelecionado([]);
    setConjuntoInputs({});
    setCorSelecionada("");
    setTipoSelecionado("");
    setNome("");
    setTelefone("");
    setCep("");
    setChamineSelecionada("");
    onClose();
  };

  // Mapeamento de imagens de prévia
  const getPreviewImage = () => {
    const ids = conjuntoSelecionado;
    
    // Caso: Churrasqueira + Forno Caipira + Bancada
    if (ids.includes("churrasqueira") && ids.includes("forno-caipira") && (ids.includes("bancada-pia-120") || ids.includes("bancada-sob-medida"))) {
      return "/previa_modelos/Churrasqueira_Forno-Caipia_ou_50kg_Bancada.gif";
    }
    
    // Caso: Churrasqueira + Forno Ferro + Bancada
    if (ids.includes("churrasqueira") && ids.includes("forno-ferro") && (ids.includes("bancada-pia-120") || ids.includes("bancada-sob-medida"))) {
      return "/previa_modelos/Churrasqueira_Forno-Caipia_ou_50kg_Bancada.gif"; // Usando o mesmo por enquanto como exemplo
    }

    // Default por categoria individual se não houver conjunto complexo
    if (ids.includes("forno-iglu")) return "/produtos/gourmet.png";
    if (ids.includes("churrasqueira")) return "/produtos/tradicional.png";
    if (ids.includes("forno-caipira")) return "/produtos/caipira_nova.jpg";
    
    return null;
  };

  const previewImage = getPreviewImage();

  if (enviado) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={handleClose} />
        <div className="relative bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] rounded-[40px] p-12 max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in-95 duration-500 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto ring-4 ring-green-500/10 animate-pulse">
            <CheckCircle2 size={56} className="text-green-400" />
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-black text-white tracking-tight">Tudo pronto!</h3>
            <p className="text-white/60 font-medium">
              Sua solicitação foi enviada. Agora é só aguardar o redirecionamento para o WhatsApp.
            </p>
          </div>
          {previewImage && (
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden border border-white/5 bg-white/5">
              <img src={previewImage} alt="Modelo Escolhido" className="w-full h-full object-contain" />
            </div>
          )}
          <div className="flex items-center justify-center gap-2 py-3 px-6 bg-white/5 rounded-2xl text-primary font-bold">
            <Clock size={20} />
            <span>Resposta em menos de 1 minuto</span>
          </div>
          <button
            onClick={handleClose}
            className="w-full bg-white text-black hover:bg-white/90 px-8 py-4 rounded-2xl font-black transition-all hover:scale-[1.02] active:scale-95"
          >
            Entendido
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={handleClose} />

      <div className="relative bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] rounded-[40px] max-w-2xl w-full max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-500 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col">
        
        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 rotate-3">
              <Flame size={28} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white tracking-tight uppercase">Orçamento <span className="text-primary italic">Premium</span></h2>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Rio de Janeiro — Qualidade Artesanal</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-10 h-10 rounded-2xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all hover:rotate-90"
          >
            <X size={20} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-white/5 w-full">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out shadow-[0_0_10px_rgba(var(--primary),0.5)]" 
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 py-8 space-y-10 custom-scrollbar">
          
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary text-sm">01</span>
                  Selecione os itens do seu conjunto
                </h3>
                <p className="text-white/40 text-sm">Escolha todos os componentes que deseja incluir na sua área gourmet.</p>
              </div>

              {previewImage && (
                <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden border border-white/5 bg-white/[0.02] animate-in zoom-in-95 duration-500 shadow-2xl shadow-black/40 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                  <img 
                    src={previewImage} 
                    alt="Prévia do Modelo" 
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute bottom-4 left-6 z-20 flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Visualização em Tempo Real</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CONJUNTO_OPTIONS.map((opt) => {
                  const isSelected = conjuntoSelecionado.includes(opt.id);
                  return (
                    <div key={opt.id} className="space-y-2">
                      <button
                        onClick={() => toggleConjunto(opt.id)}
                        className={`w-full text-left p-5 rounded-3xl border-2 transition-all duration-300 group ${
                          isSelected
                            ? "border-primary bg-primary/10 shadow-lg shadow-primary/5"
                            : "border-white/5 bg-white/[0.03] hover:border-white/10 hover:bg-white/[0.05]"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <span className="text-3xl bg-white/5 w-12 h-12 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">{opt.icon}</span>
                          <div className="flex-1">
                            <p className={`font-bold text-base ${isSelected ? "text-primary" : "text-white"}`}>
                              {opt.label}
                            </p>
                            <p className="text-xs text-white/40 font-medium">{opt.desc}</p>
                          </div>
                          {isSelected && (
                            <div className="bg-primary text-white rounded-full p-1">
                              <CheckCircle2 size={16} />
                            </div>
                          )}
                        </div>
                      </button>
                      {opt.hasInput && isSelected && (
                        <div className="relative animate-in slide-in-from-top-2 duration-300">
                          <input
                            type="text"
                            placeholder={opt.inputPlaceholder}
                            value={conjuntoInputs[opt.id] || ""}
                            onChange={(e) =>
                              setConjuntoInputs((prev) => ({ ...prev, [opt.id]: e.target.value }))
                            }
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all font-medium"
                          />
                          <Ruler size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="p-5 bg-amber-500/10 border border-amber-500/20 rounded-3xl flex gap-4">
                <Info size={24} className="text-amber-500 shrink-0" />
                <div className="space-y-1">
                  <p className="text-amber-500 font-bold text-sm uppercase tracking-wider">Atenção Especial</p>
                  <p className="text-white/60 text-xs leading-relaxed">
                    Nossos fornos de ferro são de **Ferro Fundido Puro**. Não trabalhamos com fornos de chapa, pois apodrecem com o tempo. Qualidade é nossa prioridade.
                  </p>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary text-sm">02</span>
                  Personalize o acabamento
                </h3>
                <p className="text-white/40 text-sm">Defina as cores e o estilo construtivo da sua churrasqueira.</p>
              </div>

              {previewImage && (
                <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden border border-white/5 bg-white/[0.02] animate-in zoom-in-95 duration-500 shadow-2xl shadow-black/40 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                  <img 
                    src={previewImage} 
                    alt="Prévia do Modelo" 
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute bottom-4 left-6 z-20 flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Visualização em Tempo Real</span>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-primary/60 px-1">Cor dos Tijolos</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {COR_OPTIONS.map((cor) => {
                    const isSelected = corSelecionada === cor.id;
                    return (
                      <button
                        key={cor.id}
                        onClick={() => setCorSelecionada(cor.id)}
                        className={`p-5 rounded-3xl border-2 transition-all duration-300 flex items-center gap-4 ${
                          isSelected
                            ? "border-primary bg-primary/10"
                            : "border-white/5 bg-white/[0.03] hover:border-white/10"
                        }`}
                      >
                        <div
                          className="w-14 h-14 rounded-2xl border-4 border-white/5 flex-shrink-0 shadow-inner"
                          style={{ background: cor.color }}
                        />
                        <div className="text-left">
                          <p className={`font-bold text-lg ${isSelected ? "text-primary" : "text-white"}`}>
                            {cor.label}
                          </p>
                          <p className="text-xs text-white/40 font-medium">{cor.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-primary/60 px-1">Tipo de Churrasqueira</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {TIPO_OPTIONS.map((tipo) => {
                    const isSelected = tipoSelecionado === tipo.id;
                    return (
                      <button
                        key={tipo.id}
                        onClick={() => setTipoSelecionado(tipo.id)}
                        className={`p-6 rounded-3xl border-2 transition-all duration-300 text-left ${
                          isSelected
                            ? "border-primary bg-primary/10"
                            : "border-white/5 bg-white/[0.03] hover:border-white/10"
                        }`}
                      >
                        <p className={`font-bold text-lg ${isSelected ? "text-primary" : "text-white"}`}>
                          {tipo.label}
                        </p>
                        <p className="text-xs text-white/40 font-medium mt-1 leading-relaxed">{tipo.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {conjuntoSelecionado.includes("forno-iglu") && (
                <div className="space-y-6 animate-in slide-in-from-top-4 duration-500">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-primary/60 px-1">Chaminé do Iglu</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {CHAMINE_OPTIONS.map((chamine) => {
                      const isSelected = chamineSelecionada === chamine.id;
                      return (
                        <button
                          key={chamine.id}
                          onClick={() => setChamineSelecionada(chamine.id)}
                          className={`p-5 rounded-3xl border-2 transition-all duration-300 text-left ${
                            isSelected
                              ? "border-primary bg-primary/10"
                              : "border-white/5 bg-white/[0.03] hover:border-white/10"
                          }`}
                        >
                          <p className={`font-bold text-sm ${isSelected ? "text-primary" : "text-white"}`}>
                            {chamine.label}
                          </p>
                          <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider mt-1">{chamine.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary text-sm">03</span>
                  Dados de Entrega
                </h3>
                <p className="text-white/40 text-sm">Para onde devemos enviar o orçamento e a equipe de montagem?</p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2.5">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/60 px-1">Nome Completo</label>
                  <input
                    type="text"
                    placeholder="Ex: João Silva"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full bg-white/[0.03] border-2 border-white/5 rounded-3xl px-6 py-5 text-base text-white placeholder-white/10 focus:outline-none focus:border-primary/50 focus:ring-8 focus:ring-primary/5 transition-all font-bold"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/60 px-1">WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="(21) 99999-9999"
                      value={telefone}
                      onChange={(e) => setTelefone(formatTelefone(e.target.value))}
                      className="w-full bg-white/[0.03] border-2 border-white/5 rounded-3xl px-6 py-5 text-base text-white placeholder-white/10 focus:outline-none focus:border-primary/50 focus:ring-8 focus:ring-primary/5 transition-all font-bold"
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/60 px-1">CEP Local</label>
                    <input
                      type="text"
                      placeholder="00000-000"
                      value={cep}
                      onChange={(e) => setCep(formatCep(e.target.value))}
                      className="w-full bg-white/[0.03] border-2 border-white/5 rounded-3xl px-6 py-5 text-base text-white placeholder-white/10 focus:outline-none focus:border-primary/50 focus:ring-8 focus:ring-primary/5 transition-all font-bold"
                    />
                  </div>
                </div>
              </div>

              {/* Resumo */}
              <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-8 space-y-6">
                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/30 text-center">Resumo da sua Escolha</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {conjuntoSelecionado.map(id => (
                    <span key={id} className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-bold text-primary uppercase tracking-wider">
                      {CONJUNTO_OPTIONS.find(o => o.id === id)?.label}
                    </span>
                  ))}
                  {corSelecionada && (
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[11px] font-bold text-white/60 uppercase tracking-wider">
                      Tijolo {COR_OPTIONS.find(c => c.id === corSelecionada)?.label}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 py-8 border-t border-white/5 flex gap-4 bg-white/[0.02]">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-6 rounded-3xl border-2 border-white/10 text-white font-bold flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
            >
              <ChevronLeft size={20} />
              Voltar
            </button>
          )}
          
          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              disabled={step === 1 ? !isStep1Valid : !isStep2Valid}
              className={`flex-1 py-5 rounded-[2rem] font-black text-lg flex items-center justify-center gap-2 transition-all duration-500 ${
                (step === 1 ? isStep1Valid : isStep2Valid)
                  ? "bg-primary text-white shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 cursor-pointer"
                  : "bg-white/5 text-white/20 cursor-not-allowed border border-white/5"
              }`}
            >
              Próximo Passo
              <ChevronRight size={22} />
            </button>
          ) : (
            <button
              onClick={enviarWhatsApp}
              disabled={!isStep3Valid}
              className={`flex-1 py-5 rounded-[2rem] font-black text-lg flex items-center justify-center gap-3 transition-all duration-500 ${
                isStep3Valid
                  ? "bg-[#25D366] text-white shadow-xl shadow-[#25D366]/20 hover:scale-[1.02] active:scale-95 cursor-pointer"
                  : "bg-white/5 text-white/20 cursor-not-allowed border border-white/5"
              }`}
            >
              <Send size={22} />
              Finalizar Orçamento
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
