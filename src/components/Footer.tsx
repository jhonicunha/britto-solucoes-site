import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-britto-dark border-t border-britto-card pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <Logo light={true} />
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Consultoria independente especializada em telecomunicações e redução de custos. Encontramos o plano corporativo perfeito para conectar seu negócio com alta estabilidade e economia real.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Serviços</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-britto-cyan transition-colors">
                  Auditoria de Contas
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-britto-cyan transition-colors">
                  Portabilidade Corporativa
                </a>
              </li>
              <li>
                <a href="#planos" className="text-gray-400 hover:text-britto-cyan transition-colors">
                  Mobilidade Empresarial
                </a>
              </li>
              <li>
                <a href="#planos" className="text-gray-400 hover:text-britto-cyan transition-colors">
                  Internet Link Dedicado
                </a>
              </li>
              <li>
                <a href="#planos" className="text-gray-400 hover:text-britto-cyan transition-colors">
                  PABX Virtual / Telefonia IP
                </a>
              </li>
            </ul>
          </div>

          {/* Partners links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Parceiros</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#operadoras" className="text-gray-400 hover:text-britto-cyan transition-colors">
                  Vivo Empresas
                </a>
              </li>
              <li>
                <a href="#operadoras" className="text-gray-400 hover:text-britto-cyan transition-colors">
                  TIM Black Empresa
                </a>
              </li>
              <li>
                <a href="#operadoras" className="text-gray-400 hover:text-britto-cyan transition-colors">
                  Claro Empresas
                </a>
              </li>
              <li>
                <a href="#operadoras" className="text-gray-400 hover:text-britto-cyan transition-colors">
                  Nio Telecom
                </a>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <span className="font-semibold text-white">E-mail:</span><br />
                contato@brittosolucoes.com.br
              </li>
              <li>
                <span className="font-semibold text-white">WhatsApp:</span><br />
                <a 
                  href="https://wa.me/5541984443376?text=Olá!%20Gostaria%20de%20solicitar%20uma%20análise%20gratuita%20de%20telefonia." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-britto-cyan transition-colors"
                >
                  (41) 98444-3376
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-britto-card text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Britto Soluções Corporativas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
