import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const FranchiseHero: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('franchise-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2064&auto=format&fit=crop"
          alt="City Night Traffic"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tec-dark via-tec-dark/80 to-black/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center pt-20">
        <div className="inline-block bg-tec-gold/10 border border-tec-gold/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
           <span className="text-tec-gold font-bold uppercase tracking-widest text-xs">Oportunidade Premium</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
          Seja dono da sua própria operação de <span className="text-tec-primary">mobilidade urbana</span>.
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Entre para o mercado que movimenta bilhões. Tenha sua franquia TechDriver com tecnologia de ponta, suporte total e alta lucratividade.
        </p>
        <Button
          variant="gold"
          onClick={scrollToForm}
          className="mx-auto px-10 py-4 h-auto text-lg"
        >
          Quero Abrir Minha Franquia <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default FranchiseHero;