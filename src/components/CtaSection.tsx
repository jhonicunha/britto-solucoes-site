import React from 'react';
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <div className="bg-britto-bg py-16 md:py-20 border-b border-britto-card">
      <div className="section-container">
        <div className="bg-gradient-to-r from-britto-cyan/20 to-britto-blue/20 rounded-3xl p-8 md:p-14 relative overflow-hidden border border-britto-cyan/15">
          {/* Brand colors glow effects */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-britto-cyan opacity-15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-britto-blue opacity-10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-2/3">
              <span className="text-xs font-bold text-britto-cyan uppercase tracking-widest bg-britto-cyan/10 px-3 py-1 rounded-full border border-britto-cyan/20 mb-4 inline-block">
                Diagnóstico Rápido
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                Pronto para reduzir sua conta de telecomunicações?
              </h2>
              <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                Nossa consultoria audita seus contratos sem qualquer custo inicial. Pare de pagar taxas indevidas e tenha os melhores planos da Vivo, TIM, Claro e Nio agora mesmo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/5541984443376?text=Olá!%20Gostaria%20de%20iniciar%20a%20análise%20gratuita%20de%20telefonia." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary flex items-center justify-center text-center text-base font-bold px-8 py-4 pulse-cyan"
                >
                  Falar com Especialista
                </a>
                <a 
                  href="mailto:contato@brittosolucoes.com.br?subject=Solicitação de Auditoria de Fatura - Telecom"
                  className="btn-secondary flex items-center justify-center text-center text-base font-bold px-8 py-4 hover:border-britto-cyan"
                >
                  Enviar e-mail
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/3 w-full flex justify-center">
              <div className="relative max-w-[280px]">
                <div className="absolute inset-0 bg-britto-cyan/15 rounded-2xl blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=300&h=300&q=80"
                  alt="Telefonia Corporativa Britto"
                  className="rounded-2xl w-full border border-britto-cyan/20 relative z-10 card-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
