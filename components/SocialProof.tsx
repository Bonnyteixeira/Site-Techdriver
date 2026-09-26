import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote, Car, Route, MapPinned, HeartHandshake } from 'lucide-react';
import { animate, motion, useInView } from 'framer-motion';
import { Testimonial } from '../types';
import SectionHeader from './SectionHeader';

const testimonials: (Testimonial & { badge: string; accent: 'blue' | 'cyan' })[] = [
  {
    id: 1,
    name: "Ricardo Mendes",
    role: "Franqueado - São Paulo/SP",
    content: "A migração para a TechDriver foi o ponto de virada do meu negócio. O suporte é incrível e a tecnologia não trava, mesmo nos horários de pico.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    badge: "Franquia",
    accent: "blue"
  },
  {
    id: 2,
    name: "Amanda Souza",
    role: "CEO da UrbanMove (White-Label)",
    content: "Contratei o White-Label e em 20 dias meu app estava nas lojas. Hoje tenho 500 motoristas rodando com minha marca própria.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    badge: "White-Label",
    accent: "cyan"
  }
];

const accentStyles = {
  blue: {
    border: 'from-blue-500 via-indigo-500 to-violet-500',
    badge: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
    quote: 'text-blue-500/20',
    ring: 'from-blue-500 to-violet-500',
    glow: 'bg-blue-600/25',
    shadow: 'hover:shadow-[0_20px_50px_-15px_rgba(99,102,241,0.55)]',
  },
  cyan: {
    border: 'from-tec-primary via-cyan-400 to-emerald-400',
    badge: 'bg-tec-primary/10 text-cyan-300 border-tec-primary/30',
    quote: 'text-tec-primary/20',
    ring: 'from-tec-primary to-emerald-400',
    glow: 'bg-tec-primary/25',
    shadow: 'hover:shadow-[0_20px_50px_-15px_rgba(30,167,225,0.55)]',
  },
};

const stats = [
  { value: 10, decimals: 0, prefix: '+', suffix: 'k', label: 'Motoristas', icon: Car, gradient: 'from-tec-primary to-cyan-300', glow: 'bg-tec-primary/20' },
  { value: 1.5, decimals: 1, prefix: '+', suffix: 'M', label: 'Corridas Realizadas', icon: Route, gradient: 'from-violet-500 to-fuchsia-400', glow: 'bg-violet-500/20' },
  { value: 12, decimals: 0, prefix: '', suffix: '', label: 'Estados', icon: MapPinned, gradient: 'from-emerald-500 to-teal-300', glow: 'bg-emerald-500/20' },
  { value: 98, decimals: 0, prefix: '', suffix: '%', label: 'Satisfação', icon: HeartHandshake, gradient: 'from-amber-500 to-orange-400', glow: 'bg-amber-500/20' },
];

// Número que conta de 0 até o valor quando entra na tela
const CountUp: React.FC<{ value: number; decimals: number; prefix: string; suffix: string }> = ({ value, decimals, prefix, suffix }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration: 1.8, ease: 'easeOut', onUpdate: setDisplay });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}{display.toFixed(decimals).replace('.', ',')}{suffix}
    </span>
  );
};

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-zinc-900 relative overflow-hidden">
      {/* Brilhos de fundo */}
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-tec-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-24">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-px rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] transition-colors duration-300"
            >
              <div className="relative h-full rounded-2xl bg-zinc-950/90 backdrop-blur-xl p-5 overflow-hidden text-center">
                <div className={`absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 ${s.glow} rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`relative mx-auto mb-3 w-10 h-10 rounded-lg bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <s.icon size={18} />
                </div>
                <h3 className={`relative text-3xl md:text-4xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r ${s.gradient} mb-1`}>
                  <CountUp value={s.value} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
                </h3>
                <p className="relative text-gray-400 uppercase text-[11px] font-bold tracking-widest">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <SectionHeader
          title="Quem usa,"
          highlight="recomenda."
          subtitle="Franqueados e empresas que já transformaram a mobilidade nas suas cidades com a TechDriver."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => {
            const a = accentStyles[t.accent];
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`group relative p-px rounded-2xl bg-gradient-to-br ${a.border} transition-all duration-300 hover:-translate-y-1 ${a.shadow}`}
              >
                <div className="relative h-full flex flex-col rounded-2xl bg-zinc-950/95 p-7 overflow-hidden">
                  <div className={`absolute -bottom-16 -right-16 w-48 h-48 ${a.glow} rounded-full blur-3xl opacity-50 group-hover:opacity-90 transition-opacity duration-500`} />
                  <Quote className={`absolute top-5 right-5 w-16 h-16 ${a.quote} rotate-180`} />

                  <div className="relative flex items-center gap-3 mb-5">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} size={15} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className={`px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider rounded-full border ${a.badge}`}>
                      {t.badge}
                    </span>
                  </div>

                  <p className="relative text-gray-200 text-base md:text-lg leading-relaxed mb-7 flex-1">"{t.content}"</p>

                  <div className="relative flex items-center gap-4 pt-5 border-t border-white/10">
                    <div className={`p-0.5 rounded-full bg-gradient-to-br ${a.ring}`}>
                      <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-zinc-950" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-white font-bold">{t.name}</h4>
                      <p className="text-sm text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
