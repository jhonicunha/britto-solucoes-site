import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="inicio" className="relative bg-britto-bg overflow-hidden min-h-[90vh] flex items-center pt-8 border-b border-britto-card">
      {/* Brand color glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-britto-cyan opacity-5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-britto-blue opacity-10 rounded-full blur-[100px]"></div>
      <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-britto-cyan opacity-5 rounded-full blur-[90px]"></div>
      
      <div className="section-container relative z-10 text-center">
        <div className="flex flex-col items-center justify-center max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <span className="inline-block bg-britto-cyan/10 text-britto-cyan px-4 py-2 rounded-full text-xs font-semibold mb-6 border border-britto-cyan/20 uppercase tracking-widest">
              Consultoria Telefônica Inteligente
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-white">
              Reduza os Custos de <span className="bg-gradient-to-r from-britto-cyan to-britto-blue bg-clip-text text-transparent">Telefonia e Internet</span> da sua Empresa
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
              Encontramos os melhores planos e soluções sob medida da <span className="text-white font-semibold">TIM, Vivo, Claro e Nio</span> para o seu negócio. Auditoria gratuita de faturas, portabilidade sem complicação e redução real de até 40% na sua conta.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5541984443376?text=Olá!%20Gostaria%20de%20solicitar%20uma%20auditoria%20gratuita%20de%20telefonia%20para%20minha%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 text-base px-8 py-4 pulse-cyan"
              >
                Solicitar Auditoria Gratuita
                <ArrowRight className="h-5 w-5" />
              </a>
              <button 
                onClick={() => handleScroll('servicos')}
                className="btn-secondary text-base px-8 py-4 hover:border-britto-cyan"
              >
                Conhecer Nossas Soluções
              </button>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-5 w-5 text-britto-cyan" />
                <span>Auditoria 100% Gratuita</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-5 w-5 text-britto-cyan" />
                <span>Portabilidade Sem Custos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-5 w-5 text-britto-cyan" />
                <span>Suporte Pós-Venda Dedicado</span>
              </div>
            </div>
          </div>
          
          {/* Main Visual Section */}
          <div className="mt-16 w-full animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-britto-cyan to-britto-blue blur-2xl opacity-15 rounded-2xl"></div>
              <div className="relative bg-[#001319]/90 rounded-2xl border border-britto-cyan/20 p-4 md:p-6 card-shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Como funciona o nosso diagnóstico?
                    </h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-britto-cyan/10 border border-britto-cyan/20 flex items-center justify-center text-britto-cyan font-bold text-sm shrink-0">1</div>
                        <div>
                          <h4 className="font-semibold text-white">Análise das Contas Atuais</h4>
                          <p className="text-sm text-gray-400">Você envia suas últimas 3 faturas de telefonia e internet.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-britto-cyan/10 border border-britto-cyan/20 flex items-center justify-center text-britto-cyan font-bold text-sm shrink-0">2</div>
                        <div>
                          <h4 className="font-semibold text-white">Varredura de Erros e Upgrade</h4>
                          <p className="text-sm text-gray-400">Identificamos cobranças indevidas, linhas ociosas e oportunidades de melhoria.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-britto-cyan/10 border border-britto-cyan/20 flex items-center justify-center text-britto-cyan font-bold text-sm shrink-0">3</div>
                        <div>
                          <h4 className="font-semibold text-white">Proposta de Economia</h4>
                          <p className="text-sm text-gray-400">Apresentamos um comparativo com planos da Vivo, TIM, Claro ou Nio para reduzir sua conta.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#00222b] rounded-xl border border-britto-cyan/10 p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-britto-cyan font-bold mb-2">Simulação Real de Economia</div>
                      <div className="text-3xl font-extrabold text-white mb-4">Até 40% Menos</div>
                      <p className="text-sm text-gray-300 leading-relaxed mb-6">
                        Ao consolidar seus serviços de telefonia móvel corporativa, links dedicados de internet e PABX Virtual com a consultoria da Britto, a redução de custos é imediata e sem perda de qualidade.
                      </p>
                    </div>
                    <button 
                      onClick={() => handleScroll('planos')}
                      className="bg-britto-cyan/10 hover:bg-britto-cyan/20 text-britto-cyan font-semibold py-3 px-4 rounded-lg border border-britto-cyan/30 transition-all text-center w-full"
                    >
                      Ver Comparativos de Planos
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative background shapes */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border border-britto-cyan/15 rounded-full"></div>
      <div className="absolute top-20 right-10 w-10 h-10 border border-britto-cyan/15 rounded-full"></div>
    </div>
  );
};

export default HeroSection;
