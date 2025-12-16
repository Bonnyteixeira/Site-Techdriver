import React from 'react';
import { Smartphone, Store, TrendingUp, Map, Layers, Zap } from 'lucide-react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Products: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="products" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Nossos Modelos de Negócio
          </h2>
          <p className="text-gray-400 text-lg">
            Escolha como você quer entrar no mercado de mobilidade. Seja um parceiro franqueado ou crie sua própria marca com nossa tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Franchise Card */}
          <div className="group relative bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 hover:border-blue-500 p-8 rounded-3xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex flex-col">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Store size={120} className="text-white" />
            </div>
            
            <div className="mb-6">
              <div className="w-14 h-14 bg-blue-600/20 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Store size={28} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Franquias TechDriver</h3>
              <p className="text-gray-400">O modelo ideal para quem quer empreender com uma marca já consolidada e suporte total.</p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-gray-300">
                <TrendingUp className="text-blue-500 w-5 h-5" />
                <span>Alta rentabilidade comprovada</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Map className="text-blue-500 w-5 h-5" />
                <span>Exclusividade de território</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Layers className="text-blue-500 w-5 h-5" />
                <span>Marketing nacional incluso</span>
              </li>
            </ul>

            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 shadow-blue-900/20 text-white"
              onClick={() => navigate('/franquias')}
            >
              Quero Minha Franquia
            </Button>
          </div>

          {/* White-Label Card */}
          <div className="group relative bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 hover:border-tec-primary p-8 rounded-3xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(30,167,225,0.5)] flex flex-col">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Smartphone size={120} className="text-white" />
            </div>
            
            <div className="mb-6">
              <div className="w-14 h-14 bg-tec-primary/20 text-tec-primary rounded-2xl flex items-center justify-center mb-6">
                <Smartphone size={28} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Plataforma White-Label</h3>
              <p className="text-gray-400">Tecnologia completa para você lançar o SEU aplicativo de transporte com a SUA marca.</p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-gray-300">
                <Zap className="text-tec-primary w-5 h-5" />
                <span>Apps Motorista e Passageiro (Android/iOS)</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Layers className="text-tec-primary w-5 h-5" />
                <span>Painel Administrativo Completo</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <TrendingUp className="text-tec-primary w-5 h-5" />
                <span>Faturamento 100% seu</span>
              </li>
            </ul>

            <Button 
              variant="primary" 
              className="w-full"
              onClick={() => navigate('/white-label')}
            >
              Contratar White-Label
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;