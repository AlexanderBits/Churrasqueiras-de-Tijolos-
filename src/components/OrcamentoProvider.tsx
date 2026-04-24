"use client";

import { useState } from "react";
import OrcamentoModal from "@/components/OrcamentoModal";

export default function OrcamentoProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="contents"
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.closest("[data-orcamento-trigger]")) {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
      >
        {children}
      </div>
      <OrcamentoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
