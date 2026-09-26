import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Gift, ShieldCheck, Wallet } from 'lucide-react';

const highlights = [
  { icon: Gift, value: 'Clube de benefícios', label: 'Descontos em postos e oficinas parceiras', box: 'bg-emerald-400/10 text-emerald-400' },
  { icon: ShieldCheck, value: 'Segurança 24h', label: 'Botão de pânico e monitoramento', box: 'bg-tec-primary/15 text-sky-400' },
  { icon: Wallet, value: 'Recebimento rápido', label: 'Transparente e sem surpresas', box: 'bg-tec-gold/15 text-amber-300' },
];

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const DriverHero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col overflow-hidden">
      {/* Imagem com zoom lento */}
      <motion.img
        src="/assets/motorista/hero.jpg"
        alt="Vista de dentro do carro, com a navegação no painel"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full object-cover object-[60%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-tec-dark/90 via-tec-dark/70 to-tec-dark/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-tec-dark/40 via-transparent to-tec-dark" />

      <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col">
        <div className="max-w-3xl pt-16 md:pt-28 pb-12 flex flex-col gap-6 md:gap-7">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[38px] md:text-[66px] font-display font-semibold text-white leading-[1.08] tracking-tight"
          >
            Dirija com a TechDriver e assuma o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-tec-primary">controle dos seus ganhos.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg md:text-xl text-gray-200 leading-relaxed font-light max-w-2xl"
          >
            As melhores taxas do mercado, segurança embarcada no aplicativo e suporte humanizado. Aqui você não é apenas um número: é um parceiro de negócio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 pt-2"
          >
            <button
              onClick={() => scrollTo('baixar-app')}
              className="group inline-flex items-center justify-center gap-2.5 h-[52px] px-7 rounded-full bg-gradient-to-r from-emerald-400 to-tec-primary text-[#04201A] text-[15px] font-semibold hover:brightness-110 hover:-translate-y-0.5 shadow-[0_10px_30px_-10px_rgba(52,211,153,0.7)] transition-all duration-300"
            >
              Baixar o App Motorista
              <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('planos')}
              className="inline-flex items-center justify-center h-[52px] px-7 rounded-full border border-white/15 bg-white/[0.06] text-white text-[15px] font-semibold hover:bg-white/10 transition-colors duration-300"
            >
              Conhecer os planos
            </button>
          </motion.div>
        </div>

        {/* Destaques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-auto mb-10 md:mb-14 grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl md:rounded-[20px] overflow-hidden border border-white/10 bg-white/[0.08]"
        >
          {highlights.map((h) => (
            <div key={h.value} className="group relative flex items-center gap-4 px-5 md:px-7 py-4 md:py-6 bg-tec-dark/80 hover:bg-tec-dark/60 backdrop-blur-xl transition-colors duration-300">
              <span className="absolute top-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-emerald-400 to-tec-primary transition-all duration-500" />
              <div className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 ${h.box}`}>
                <h.icon size={21} strokeWidth={1.75} />
              </div>
              <div>
                <div className="text-white font-semibold">{h.value}</div>
                <div className="text-sm text-gray-400 mt-0.5">{h.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DriverHero;
