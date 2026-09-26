import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, LayoutDashboard, TrendingUp, ChevronDown } from 'lucide-react';

// Destaques tirados do card White-Label
const highlights = [
  { icon: Smartphone, value: 'Android & iOS', label: 'Apps Motorista e Passageiro' },
  { icon: LayoutDashboard, value: 'Painel Completo', label: 'Gestão administrativa' },
  { icon: TrendingUp, value: '100% seu', label: 'Faturamento da operação' },
];

const WhiteLabelHero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Imagem com zoom lento; os celulares ficam à direita */}
      <motion.img
        src="/assets/white-label/hero.jpg"
        alt="Aplicativos Android e iOS em dois celulares"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full object-cover object-[75%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-tec-dark/90 via-tec-dark/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-tec-dark via-transparent to-transparent" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-tec-primary/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 pt-16 pb-24">
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]"
          >
            Sua marca, nossa{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tec-primary via-cyan-300 to-emerald-400">tecnologia.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed font-light border-l-2 border-tec-primary pl-5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
          >
            Lance seu aplicativo de transporte em menos de 30 dias com a plataforma mais robusta do mercado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <button onClick={scrollToContact} className="group relative inline-flex items-center justify-center">
              <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-tec-primary via-cyan-300 to-emerald-400 opacity-60 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-pulse" />
              <span className="relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-tec-primary to-emerald-500 px-7 py-3 text-white text-sm font-semibold tracking-wide group-hover:scale-[1.03] transition-transform duration-300">
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                <span className="relative">Contratar White-Label</span>
                <span className="relative w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </span>
            </button>
          </motion.div>
        </div>

        {/* Destaques */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 + i * 0.1 }}
              className="group flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-tec-primary/40 hover:bg-black/50 transition-all duration-300"
            >
              <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-tec-primary to-emerald-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <h.icon size={18} />
              </div>
              <div className="text-left">
                <div className="text-white font-bold leading-tight">{h.value}</div>
                <div className="text-xs text-gray-400">{h.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Indicador de rolagem */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-gray-400 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default WhiteLabelHero;
