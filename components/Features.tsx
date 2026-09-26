import React from 'react';
import { Server, Lock, PhoneCall, BarChart3, Globe2, Rocket } from 'lucide-react';
import { Feature } from '../types';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import SectionHeader from './SectionHeader';

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

// Uma cor de destaque por card, na mesma ordem de `features`
const accents = [
  { rgb: '30,167,225', gradient: 'from-tec-primary to-cyan-300', text: 'text-tec-primary' },
  { rgb: '139,92,246', gradient: 'from-violet-500 to-fuchsia-400', text: 'text-violet-400' },
  { rgb: '16,185,129', gradient: 'from-emerald-500 to-teal-300', text: 'text-emerald-400' },
  { rgb: '245,158,11', gradient: 'from-amber-500 to-yellow-300', text: 'text-amber-400' },
  { rgb: '59,130,246', gradient: 'from-blue-500 to-sky-300', text: 'text-blue-400' },
  { rgb: '244,63,94', gradient: 'from-rose-500 to-orange-300', text: 'text-rose-400' },
];

// Posição do mouse no card, usada pelo brilho que segue o cursor
const trackMouse = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
};

const Features: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="features" className="py-24 bg-tec-dark">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Tecnologia construída para"
          highlight="performance e escala."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const accent = accents[index % accents.length];
            return (
              <div
                key={index}
                onMouseMove={trackMouse}
                style={{ '--accent': accent.rgb } as React.CSSProperties}
                className="group relative p-px rounded-2xl bg-white/[0.06] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(var(--accent),0.55)]"
              >
                {/* Borda que acende na cor do card, a partir da posição do mouse */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(400px_circle_at_var(--x,50%)_var(--y,50%),rgba(var(--accent),0.9),transparent_45%)]" />

                <div className="relative h-full rounded-2xl bg-zinc-950/90 backdrop-blur-xl p-5 overflow-hidden">
                  {/* Brilho interno que segue o cursor */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(350px_circle_at_var(--x,50%)_var(--y,50%),rgba(var(--accent),0.12),transparent_60%)]" />
                  {/* Luz de canto, sempre visível */}
                  <div className="absolute -top-20 -right-20 w-36 h-36 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-[rgb(var(--accent))]" />

                  <div className="relative flex items-start justify-between mb-4">
                    <div className="relative">
                      <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${accent.gradient} blur-lg opacity-40 group-hover:opacity-80 transition-opacity duration-500`} />
                      <div className={`relative w-10 h-10 rounded-lg bg-gradient-to-br ${accent.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <feature.icon size={18} strokeWidth={2.2} />
                      </div>
                    </div>
                    <span className="font-mono text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="relative text-base font-semibold text-white mb-1.5 tracking-tight">{feature.title}</h3>
                  <p className="relative text-gray-400 leading-relaxed text-[13px]">{feature.description}</p>

                  {/* Linha de destaque que cresce no hover */}
                  <div className={`relative mt-4 h-0.5 w-8 rounded-full bg-gradient-to-r ${accent.gradient} group-hover:w-full transition-all duration-700 ease-out`} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="sm" onClick={() => navigate('/funcionalidades')}>
            Ver todas as funcionalidades
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;