import React from 'react';

const testimonials = [
  {
    text: "A equipe da Britto realizou uma auditoria completa em nossas contas e descobriu cobranças duplicadas e linhas ociosas da antiga operadora. Reduzimos nosso custo mensal de telefonia corporativa em 42% sem nenhuma perda de qualidade.",
    author: "Marcos Silva",
    position: "Diretor Administrativo, Metalúrgica Sul",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"
  },
  {
    text: "Estávamos sofrendo com quedas constantes de internet no nosso centro de distribuição. A Britto intermediou a contratação de um Link Dedicado de Fibra de alta performance e hoje nossa operação funciona 24 horas sem interrupções.",
    author: "Amanda Costa",
    position: "Gerente de TI, Logística Express",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100"
  },
  {
    text: "Migramos toda nossa telefonia fixa para PABX em Nuvem com a consultoria deles. Nossos atendentes agora operam home office usando ramais virtuais integrados, mantendo o número central da empresa. A economia de infraestrutura foi imediata.",
    author: "Thiago Rocha",
    position: "Diretor de Operações, CallMed Group",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100"
  }
];

const TestimonialsSection = () => {
  return (
    <div className="bg-britto-bg py-16 md:py-24 border-b border-britto-card">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-britto-cyan uppercase tracking-widest bg-britto-cyan/10 px-3 py-1 rounded-full border border-britto-cyan/20">
            Casos de Sucesso
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-4 text-white">
            O que Nossos Clientes <span className="gradient-text">Dizem</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Ajudamos empresas de diversos segmentos a otimizar processos de comunicação e reduzir despesas de telecom.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-britto-card to-britto-bg border border-britto-cyan/10 hover:border-britto-cyan/25 rounded-2xl p-8 card-shadow flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-britto-cyan" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 italic leading-relaxed text-sm">"{testimonial.text}"</p>
              </div>
              
              <div className="flex items-center border-t border-britto-card/60 pt-4 mt-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4 object-cover border border-britto-cyan/20"
                />
                <div>
                  <p className="font-bold text-white text-sm">{testimonial.author}</p>
                  <p className="text-gray-400 text-xs">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
