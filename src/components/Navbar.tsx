import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to check if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Scroll to section helper
  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-britto-dark bg-opacity-95 backdrop-blur-md sticky top-0 z-50 border-b border-britto-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <Logo light={true} />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => handleScroll('inicio')} 
                className="px-3 py-2 text-sm font-medium text-white hover:text-britto-cyan transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => handleScroll('operadoras')} 
                className="px-3 py-2 text-sm font-medium text-white hover:text-britto-cyan transition-colors"
              >
                Operadoras
              </button>
              <button 
                onClick={() => handleScroll('servicos')} 
                className="px-3 py-2 text-sm font-medium text-white hover:text-britto-cyan transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => handleScroll('planos')} 
                className="px-3 py-2 text-sm font-medium text-white hover:text-britto-cyan transition-colors"
              >
                Soluções
              </button>
              <button 
                onClick={() => handleScroll('faq')} 
                className="px-3 py-2 text-sm font-medium text-white hover:text-britto-cyan transition-colors"
              >
                Dúvidas
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="https://wa.me/5541984443376?text=Olá!%20Gostaria%20de%20solicitar%20uma%20auditoria%20gratuita%20de%20telefonia%20para%20minha%20empresa." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              Auditoria Gratuita
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none">
              {isOpen ? <X className="h-6 w-6 text-britto-cyan" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-britto-dark border-b border-britto-card">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => handleScroll('inicio')} 
              className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-britto-cyan"
            >
              Início
            </button>
            <button 
              onClick={() => handleScroll('operadoras')} 
              className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-britto-cyan"
            >
              Operadoras
            </button>
            <button 
              onClick={() => handleScroll('servicos')} 
              className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-britto-cyan"
            >
              Serviços
            </button>
            <button 
              onClick={() => handleScroll('planos')} 
              className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-britto-cyan"
            >
              Soluções
            </button>
            <button 
              onClick={() => handleScroll('faq')} 
              className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-britto-cyan"
            >
              Dúvidas
            </button>
            <div className="mt-4 px-3 py-2">
              <a 
                href="https://wa.me/5541984443376?text=Olá!%20Gostaria%20de%20solicitar%20uma%20auditoria%20gratuita%20de%20telefonia%20para%20minha%20empresa." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary block text-center"
              >
                Auditoria Gratuita
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
