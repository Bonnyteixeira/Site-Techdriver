import React from 'react';
import Button from './Button';
import { MapPin } from 'lucide-react';

const FranchiseCTA: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('franchise-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-black border-t border-blue-900/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
          Sua cidade precisa de uma nova mobilidade.
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
          Não perca a chance de ser o pioneiro na sua região. Verifique a disponibilidade de território hoje mesmo.
        </p>
        <Button 
          variant="gold"
          onClick={scrollToForm}
          className="mx-auto px-12 py-4 h-auto text-lg"
        >
          <MapPin className="mr-2 w-5 h-5" /> Verificar Disponibilidade na Minha Cidade
        </Button>
      </div>
    </section>
  );
};

export default FranchiseCTA;