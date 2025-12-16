import React from 'react';
import ContactComponent from '../components/Contact';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-tec-dark">
      <div className="container mx-auto px-6 pt-12 text-center">
         <div className="inline-block bg-zinc-800 p-4 rounded-full mb-6">
            <Mail className="w-8 h-8 text-tec-primary" />
         </div>
         <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Fale Conosco</h1>
         <p className="text-gray-400 max-w-2xl mx-auto">
           Estamos prontos para atender você. Seja para franquias, white-label ou dúvidas gerais, nossa equipe está à disposição.
         </p>
      </div>
      <ContactComponent />
    </div>
  );
};

export default Contact;