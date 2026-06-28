import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, ShieldAlert } from 'lucide-react';

const PricingSection = () => {
  const solutions = [
    {
      name: 'Mobilidade Corporativa',
      description: 'Planos de celular empresariais (TIM, Vivo, Claro) e chips M2M/IoT para conectar sua equipe e dispositivos de forma eficiente.',
      features: [
        'Ligações ilimitadas para todo o Brasil',
        'Pacotes de dados compartilháveis (10GB a 1TB+)',
        'Roaming internacional e Passaporte de dados',
        'Gestão e controle de consumo via Web/App',
        'Chips M2M dedicados para rastreamento / IoT',
        'Ativação rápida e portabilidade zero downtime'
      ],
      isPopular: false,
      ctaText: 'Solicitar Orçamento Móvel'
    },
    {
      name: 'Internet Fibra & Link Dedicado',
      description: 'Conexões corporativas de alta disponibilidade para garantir que sua empresa nunca fique desconectada ou lenta.',
      features: [
        'Velocidades de 100 Mega a 10 Giga',
        'Banda Simétrica (mesma velocidade de upload e download)',
        'IP Fixo público incluso',
        'Garantia de SLA superior a 99.8%',
        'Suporte técnico empresarial 24x7 prioritário',
        'Infraestrutura em fibra óptica de ponta a ponta'
      ],
      isPopular: true,
      ctaText: 'Solicitar Orçamento de Conectividade'
    },
    {
      name: 'PABX Nuvem & Telefonia IP',
      description: 'Virtualize todo o atendimento telefônico da sua empresa. Reduza o custo com hardware e crie ramais remotos instantaneamente.',
      features: [
        'Ramais virtuais no computador, celular ou aparelho IP',
        'Menu de atendimento digital inteligente (URA)',
        'Gravação de chamadas integrada e relatórios',
        'Números virtuais (DID) em todo o Brasil',
        'Atendimento de múltiplos canais simultâneos',
        'Integração com CRMs e sistemas de atendimento'
      ],
      isPopular: false,
      ctaText: 'Solicitar Orçamento de Telefonia IP'
    }
  ];

  return (
    <div id="planos" className="bg-[#001319] py-16 md:py-24 border-b border-britto-card">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-britto-cyan uppercase tracking-widest bg-britto-cyan/10 px-3 py-1 rounded-full border border-britto-cyan/20">
            Nossas Soluções
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-4 text-white">
            Soluções Sob Medida para <span className="gradient-text">Cada Necessidade</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Não vendemos planos prontos de "prateleira". Nossa equipe desenha a solução perfeita e negocia valores promocionais exclusivos de acordo com o tamanho e perfil da sua empresa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((sol, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between ${
                sol.isPopular 
                  ? 'bg-gradient-to-b from-britto-cyan/15 to-britto-bg border border-britto-cyan/30 transform hover:-translate-y-2 card-shadow' 
                  : 'bg-britto-bg border border-britto-card transform hover:-translate-y-1 card-shadow'
              }`}
            >
              <div>
                {sol.isPopular && (
                  <span className="bg-britto-cyan text-britto-dark text-xs font-extrabold px-3 py-1 rounded-full uppercase mb-4 inline-block tracking-wider">
                    Mais Procurado
                  </span>
                )}
                
                <h3 className="text-2xl font-bold mb-3 text-white">{sol.name}</h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed min-h-[60px]">{sol.description}</p>
                
                <ul className="space-y-4 mb-8">
                  {sol.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-britto-cyan mr-2.5 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href={`https://wa.me/5541984443376?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20a%20solução%20de%20${encodeURIComponent(sol.name)}.`}
                target="_blank" 
                rel="noopener noreferrer" 
                className={`w-full py-3.5 px-4 rounded-lg font-bold text-center transition-all ${
                  sol.isPopular 
                    ? 'bg-britto-cyan text-britto-dark hover:bg-opacity-95 shadow-lg shadow-britto-cyan/15' 
                    : 'bg-secondary text-white hover:bg-britto-card border border-britto-cyan/20'
                }`}
              >
                {sol.ctaText}
              </a>
            </div>
          ))}
        </div>

        {/* Auditoria Callout */}
        <div className="mt-16 bg-gradient-to-r from-[#00222b] to-[#002f3a] border border-britto-cyan/20 p-8 rounded-2xl max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="p-3 bg-britto-cyan/10 rounded-xl border border-britto-cyan/20 text-britto-cyan shrink-0">
            <ShieldAlert className="h-10 w-10 animate-pulse" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-2">Já possui faturas corporativas contratadas?</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Antes de mudar de operadora ou contratar um novo plano, envie suas faturas atuais para nosso time. Em até 48 horas realizamos uma varredura para identificar se sua empresa está pagando tarifas acima do mercado ou recebendo cobranças indevidas.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 items-center">
              <a 
                href="https://wa.me/5541984443376?text=Olá!%20Tenho%20minhas%20faturas%20atuais%20em%20mãos%20e%20gostaria%20de%20uma%20análise." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-britto-cyan font-bold text-sm hover:underline flex items-center gap-1.5"
              >
                Enviar Contas via WhatsApp &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
