import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual é o custo da consultoria da Britto?",
    answer: "A auditoria de faturas inicial é 100% gratuita. Caso recomendemos a migração ou novos planos, nossos honorários são pagos diretamente pelas operadoras parceiras como comissão de vendas ou vinculados à economia gerada (success-fee). Ou seja, sua empresa não tem riscos ou desembolso inicial."
  },
  {
    question: "Posso manter os mesmos números de telefone atuais?",
    answer: "Sim! Cuidamos de todo o processo de portabilidade numérica (seja de linhas móveis ou fixas/0800). O trâmite é planejado para que a transição ocorra de forma transparente, sem que a sua empresa fique um minuto sequer incomunicável."
  },
  {
    question: "Quais operadoras a Britto Soluções Corporativas atende?",
    answer: "Trabalhamos de forma integrada com as principais operadoras homologadas do país: TIM, Vivo, Claro e Nio. Isso nos dá total liberdade para cotar e indicar a operadora que apresenta a melhor cobertura física na sua região e a tarifa mais competitiva."
  },
  {
    question: "O que é necessário para iniciar a auditoria gratuita?",
    answer: "Precisamos apenas das faturas completas (em formato PDF) de telefonia móvel, telefonia fixa e links de internet dos últimos 3 meses. Nossa equipe fará o mapeamento de tarifas cobradas indevidamente e identificará oportunidades de redução de custo."
  },
  {
    question: "Vocês atendem PMEs (Pequenas e Médias Empresas)?",
    answer: "Atendemos empresas de todos os portes. Desde PMEs com poucas linhas móveis que buscam reduzir gastos básicos, até indústrias e corporações complexas que necessitam de redes SD-WAN, Links Dedicados redundantes e PABX IP integrado."
  },
  {
    question: "Como o PABX em Nuvem ajuda a economizar?",
    answer: "O PABX em Nuvem elimina a necessidade de cabos dedicados, centrais telefônicas físicas caras e contratos de manutenção complexos. Ele funciona via conexão de internet (VoIP), permitindo que ramais sejam instalados em celulares ou computadores para que seus colaboradores atendam chamadas corporativas de qualquer lugar."
  }
];

const FaqSection = () => {
  return (
    <div id="faq" className="bg-[#001319] py-16 md:py-24 border-b border-britto-card">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-britto-cyan uppercase tracking-widest bg-britto-cyan/10 px-3 py-1 rounded-full border border-britto-cyan/20">
            Perguntas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-4 text-white">
            Tire Suas <span className="gradient-text">Dúvidas</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Entenda como funciona nossa assessoria de telecomunicações para otimizar a infraestrutura de comunicação da sua empresa.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-britto-bg rounded-2xl p-6 md:p-10 border border-britto-cyan/10 card-shadow">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-britto-card last:border-0">
                <AccordionTrigger className="text-left text-white hover:text-britto-cyan py-4 font-bold text-base md:text-lg transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4 leading-relaxed text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
