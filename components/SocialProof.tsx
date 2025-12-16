import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ricardo Mendes",
    role: "Franqueado - São Paulo/SP",
    content: "A migração para a TechDriver foi o ponto de virada do meu negócio. O suporte é incrível e a tecnologia não trava, mesmo nos horários de pico.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Amanda Souza",
    role: "CEO da UrbanMove (White-Label)",
    content: "Contratei o White-Label e em 20 dias meu app estava nas lojas. Hoje tenho 500 motoristas rodando com minha marca própria.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  }
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-6">
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-800 pb-16 mb-16">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">+10k</h3>
            <p className="text-tec-primary uppercase text-xs font-bold tracking-widest">Motoristas</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">+1.5M</h3>
            <p className="text-tec-primary uppercase text-xs font-bold tracking-widest">Corridas Realizadas</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">12</h3>
            <p className="text-tec-primary uppercase text-xs font-bold tracking-widest">Estados</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">98%</h3>
            <p className="text-tec-primary uppercase text-xs font-bold tracking-widest">Satisfação</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-white">Quem usa, recomenda.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-zinc-800/30 p-8 rounded-2xl border border-zinc-700 relative transition-all duration-300 hover:border-tec-primary hover:shadow-[0_0_30px_rgba(30,167,225,0.4)] hover:-translate-y-1">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-tec-primary text-tec-primary" />
                ))}
              </div>
              <p className="text-gray-300 text-lg italic mb-6">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-tec-primary" />
                <div className="text-left">
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;