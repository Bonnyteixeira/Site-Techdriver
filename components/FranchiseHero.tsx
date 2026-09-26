import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Zap, Map, ChevronDown } from 'lucide-react';

// Destaques tirados das vantagens da franquia
const highlights = [
  { icon: TrendingUp, value: '25% a 35%', label: 'Margem líquida' },
  { icon: Zap, value: '6 a 12 meses', label: 'Payback estimado' },
  { icon: Map, value: 'Exclusivo', label: 'Território em contrato' },
];

const FranchiseHero: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('franchise-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Imagem com zoom lento */}
      <motion.img
        src="/assets/franquias/hero.jpg"
        alt="Trânsito urbano ao entardecer"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-tec-dark via-tec-dark/25 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,12,16,0.35)_0%,transparent_60%,rgba(11,12,16,0.45)_100%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tec-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tec-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center pt-16 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight max-w-4xl mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]"
        >
          Seja dono da sua própria operação de{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-tec-gold via-amber-200 to-tec-primary">mobilidade urbana</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
        >
          Entre para o mercado que movimenta bilhões. Tenha sua franquia TechDriver com tecnologia de ponta, suporte total e alta lucratividade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mb-16"
        >
          <button onClick={scrollToForm} className="group relative inline-flex items-center justify-center">
            <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-tec-gold via-amber-300 to-tec-gold opacity-60 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-pulse" />
            <span className="relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-amber-500 via-tec-gold to-amber-400 px-7 py-3 text-black text-sm font-bold tracking-wide group-hover:scale-[1.03] transition-transform duration-300">
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12" />
              <span className="relative">Quero Abrir Minha Franquia</span>
              <span className="relative w-6 h-6 rounded-full bg-black/15 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </span>
          </button>
        </motion.div>

        {/* Destaques */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 + i * 0.1 }}
              className="group flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-tec-gold/40 hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-tec-gold to-amber-600 flex items-center justify-center text-black shadow-lg group-hover:scale-110 transition-transform">
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-gray-500 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default FranchiseHero;
