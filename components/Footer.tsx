import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transformando a mobilidade urbana através de tecnologia de ponta. Unidades próprias, franquias e sistemas White-Label.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-bold mb-6">Soluções</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-tec-primary transition-colors">Franquias</a></li>
              <li><a href="#" className="hover:text-tec-primary transition-colors">White-Label</a></li>
              <li><a href="#" className="hover:text-tec-primary transition-colors">Para Empresas</a></li>
              <li><a href="#" className="hover:text-tec-primary transition-colors">Gestão de Frotas</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-6">Suporte</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-tec-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-tec-primary transition-colors">Portal do Motorista</a></li>
              <li><a href="#" className="hover:text-tec-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-tec-primary transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="mailto:diretoria@techdriver.com.br" className="hover:text-tec-primary transition-colors">
                  diretoria@techdriver.com.br
                </a>
              </li>
              <li>
                <a href="tel:+5517988063384" className="hover:text-tec-primary transition-colors">
                  (17) 98806-3384
                </a>
              </li>
              <li>Catanduva - SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2025 TechDriver — Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-gray-600 text-xs">
            <span>Desenvolvido com tecnologia de ponta</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;