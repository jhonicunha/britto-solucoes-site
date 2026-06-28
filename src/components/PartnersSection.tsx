import React from 'react';
import { ShieldCheck, Zap, Globe, Wifi } from 'lucide-react';

const partners = [
  {
    name: 'Vivo',
    color: 'border-purple-500/30 text-purple-400 bg-purple-500/5',
    desc: 'Líder em Link Dedicado, Fibra óptica de altíssima velocidade e soluções de IoT / M2M para rastreamento e gestão de frotas.',
    features: ['IP Fixo Grátis', 'SLA de até 99.9%', 'Cobertura Nacional'],
    badge: 'Vivo Empresas',
    icon: <Globe className="h-6 w-6" />
  },
  {
    name: 'TIM',
    color: 'border-blue-500/30 text-blue-400 bg-blue-500/5',
    desc: 'Melhor cobertura 5G do Brasil, com planos de telefonia móvel corporativa com ligações ilimitadas e dados robustos compartilháveis.',
    features: ['Gestão de Linhas Web', 'Passaporte Américas/Europa', 'Roaming sem custos'],
    badge: 'TIM Black Empresa',
    icon: <Wifi className="h-6 w-6" />
  },
  {
    name: 'Claro',
    color: 'border-red-500/30 text-red-400 bg-red-500/5',
    desc: 'Planos integrados de telefonia móvel corporativa, internet banda larga de alta performance e canais digitais de atendimento rápido.',
    features: ['Claro Curtir Apps', 'PABX em Nuvem básico', 'Combos customizáveis'],
    badge: 'Claro Empresas',
    icon: <Zap className="h-6 w-6" />
  },
  {
    name: 'Nio',
    color: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/5',
    desc: 'Conectividade e telecomunicações inovadoras com infraestrutura flexível focada no segmento corporativo e soluções personalizadas.',
    features: ['Atendimento Exclusivo', 'Flexibilidade de Contrato', 'Soluções Híbridas'],
    badge: 'Nio Telecom',
    icon: <ShieldCheck className="h-6 w-6" />
  }
];

const PartnersSection = () => {
  return (
    <div id="operadoras" className="bg-[#001319] py-16 md:py-24 border-b border-britto-card">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-britto-cyan uppercase tracking-widest bg-britto-cyan/10 px-3 py-1 rounded-full border border-britto-cyan/20">
            Nossos Parceiros
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-4 text-white">
            Trabalhamos com as <span className="gradient-text">Maiores Operadoras</span> do Mercado
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Não somos uma operadora. Somos uma consultoria neutra. Analisamos a infraestrutura e os custos da sua empresa para indicar e intermediar a melhor solução entre TIM, Vivo, Claro e Nio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className={`bg-britto-bg p-6 rounded-2xl border ${partner.color} transition-all duration-300 hover:-translate-y-2 card-shadow flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold uppercase px-2.5 py-1 rounded bg-white/10 text-white tracking-wider">
                    {partner.badge}
                  </span>
                  <div className="p-2 rounded-lg bg-white/5">
                    {partner.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white">{partner.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {partner.desc}
                </p>
              </div>

              <div className="border-t border-britto-card/60 pt-4">
                <ul className="space-y-2.5">
                  {partner.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-xs text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-britto-cyan mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-britto-bg/60 border border-britto-cyan/10 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="text-left">
            <h4 className="font-bold text-white text-lg">Precisa de um plano sob medida com múltiplas operadoras?</h4>
            <p className="text-sm text-gray-400">Desenhamos projetos híbridos (ex: Vivo para internet dedicada e TIM para celulares corporativos).</p>
          </div>
          <a
            href="https://wa.me/5541984443376?text=Olá!%20Gostaria%20de%20montar%20um%20projeto%20de%20conectividade%20para%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary whitespace-nowrap text-sm"
          >
            Falar com Consultor
          </a>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
