import React from 'react';
import { Search, Phone, Wifi, Cpu, FileText, TrendingDown } from 'lucide-react';

const features = [
  {
    icon: <Search className="h-6 w-6 text-britto-cyan" />,
    title: 'Auditoria de Faturas',
    description: 'Analisamos suas faturas passadas para identificar cobranças indevidas, tarifas fora do contrato e linhas sem uso que geram desperdício.'
  },
  {
    icon: <TrendingDown className="h-6 w-6 text-britto-cyan" />,
    title: 'Redução de Custos',
    description: 'Buscamos e negociamos diretamente as melhores tarifas corporativas da TIM, Vivo, Claro e Nio para obter reduções médias de 30% a 50%.'
  },
  {
    icon: <FileText className="h-6 w-6 text-britto-cyan" />,
    title: 'Gestão de Contratos',
    description: 'Acompanhamos prazos de fidelidade, renegociações anuais e limites de consumo para evitar sustos na conta e manter o menor custo.'
  },
  {
    icon: <Wifi className="h-6 w-6 text-britto-cyan" />,
    title: 'Link Dedicado & Fibra',
    description: 'Garantimos internet estável com banda simétrica e garantia de SLA para escritórios, indústrias e comércio com as melhores rotas de fibra.'
  },
  {
    icon: <Phone className="h-6 w-6 text-britto-cyan" />,
    title: 'PABX Virtual / Telefonia IP',
    description: 'Implementamos ramais em nuvem, atendimento eletrônico (Ura), gravação de chamadas e integrações para modernizar seu atendimento telefônico.'
  },
  {
    icon: <Cpu className="h-6 w-6 text-britto-cyan" />,
    title: 'Mobilidade & IoT / M2M',
    description: 'Configuramos chips para telemetria, rastreamento de frotas e conectividade móvel segura para equipes de vendas externas e tablets.'
  }
];

const FeaturesSection = () => {
  return (
    <div id="servicos" className="bg-britto-bg py-16 md:py-24 border-b border-britto-card">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-britto-cyan uppercase tracking-widest bg-britto-cyan/10 px-3 py-1 rounded-full border border-britto-cyan/20">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-4 text-white">
            Soluções Completas de <span className="gradient-text">Telecom e Conectividade</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Seja para economizar nos celulares da equipe, garantir a estabilidade da internet ou virtualizar seu atendimento telefônico, temos o plano ideal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-britto-card p-6 rounded-2xl border border-britto-cyan/10 hover:border-britto-cyan/35 transition-all duration-300 card-shadow flex flex-col justify-between"
            >
              <div>
                <div className="bg-britto-cyan/10 w-12 h-12 flex items-center justify-center rounded-xl mb-6 border border-britto-cyan/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
