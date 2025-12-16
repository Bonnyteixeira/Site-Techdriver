import React from 'react';
import Products from '../components/Products';
import Features from '../components/Features';
import Contact from '../components/Contact';
import { Smartphone } from 'lucide-react';

const WhiteLabel: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-tec-dark">
      {/* Page Header */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-tec-primary/20 p-3 rounded-xl">
             <Smartphone className="text-tec-primary w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white">White-Label</h1>
        </div>
        <p className="text-xl text-gray-400 max-w-2xl border-l-4 border-tec-primary pl-6">
          Sua marca, nossa tecnologia. Lance seu aplicativo de transporte em menos de 30 dias com a plataforma mais robusta do mercado.
        </p>
      </div>

      <Products />
      
      <div className="bg-zinc-900 py-16">
        <div className="container mx-auto px-6 text-center max-w-4xl">
           <h2 className="text-3xl font-bold mb-6">Como funciona o White-Label?</h2>
           <p className="text-gray-400 text-lg">
             No modelo White-Label, nós licenciamos a tecnologia TechDriver para você. Personalizamos os aplicativos (Passageiro e Motorista) com sua logomarca, suas cores e suas regras de negócio. Você define as tarifas, gerencia os motoristas e fica com 100% do lucro da operação, pagando apenas uma mensalidade fixa ou variável pelo uso da tecnologia.
           </p>
        </div>
      </div>

      <Features />
      <Contact />
    </div>
  );
};

export default WhiteLabel;