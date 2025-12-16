import React from 'react';
import Features from '../components/Features';
import Contact from '../components/Contact';
import { Cpu } from 'lucide-react';

const Solutions: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-tec-dark">
      <div className="container mx-auto px-6 py-16 text-center flex flex-col items-center">
        <div className="bg-purple-600/20 p-4 rounded-2xl mb-8 inline-flex animate-bounce-slow">
           <Cpu className="text-purple-500 w-10 h-10" />
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
          Nossas Soluções
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Conheça a arquitetura tecnológica que processa milhões de requisições e mantém milhares de motoristas conectados simultaneamente.
        </p>
      </div>

      <Features />
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Analytics" className="relative rounded-2xl shadow-2xl border border-zinc-800" />
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Dashboards Inteligentes</h3>
                <p className="text-gray-400 mb-4">Tenha controle total da sua operação. Saiba quais áreas da cidade têm mais demanda, horários de pico, faturamento em tempo real e performance individual de cada motorista.</p>
                <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-tec-primary"></span> Mapa de calor em tempo real</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-tec-primary"></span> Relatórios financeiros detalhados</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-tec-primary"></span> Gestão de cupons e promoções</li>
                </ul>
            </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default Solutions;