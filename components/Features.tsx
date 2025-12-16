import React from 'react';
import { Server, Lock, PhoneCall, BarChart3, Globe2, Rocket } from 'lucide-react';
import { Feature } from '../types';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const features: Feature[] = [
  {
    title: "Infraestrutura Escalável",
    description: "Servidores em nuvem de alta performance preparados para suportar milhões de requisições simultâneas.",
    icon: Server
  },
  {
    title: "Segurança & LGPD",
    description: "Criptografia de ponta a ponta e total conformidade com as leis de proteção de dados vigentes.",
    icon: Lock
  },
  {
    title: "Suporte Especializado",
    description: "Time de especialistas disponível 24 horas por dia para resolver qualquer incidente crítico.",
    icon: PhoneCall
  },
  {
    title: "Business Intelligence",
    description: "Dashboards analíticos completos para você acompanhar cada centavo da sua operação em tempo real.",
    icon: BarChart3
  },
  {
    title: "Geolocalização Precisa",
    description: "Integração premium com Google Maps Platform garantindo rotas otimizadas e precificação exata.",
    icon: Globe2
  },
  {
    title: "Lançamento Rápido",
    description: "Coloque sua operação na rua em tempo recorde com nosso processo de setup otimizado.",
    icon: Rocket
  }
];

const Features: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="features" className="py-24 bg-tec-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-tec-primary font-bold uppercase tracking-widest text-sm">Por que escolher a TechDriver</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2">
              Tecnologia construída para <br/> performance e escala.
            </h2>
          </div>
          <Button variant="outline" size="sm" onClick={() => navigate('/funcionalidades')}>
            Ver todas as funcionalidades
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-tec-primary hover:shadow-[0_0_30px_rgba(30,167,225,0.6)] transition-all duration-300 group hover:bg-zinc-900 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                 <feature.icon size={100} className="text-tec-primary transform rotate-12" />
              </div>

              <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-white mb-6 group-hover:bg-tec-primary group-hover:scale-110 transition-all duration-300 relative z-10">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm relative z-10">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;