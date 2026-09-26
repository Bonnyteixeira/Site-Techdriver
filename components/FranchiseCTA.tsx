import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const FranchiseCTA: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('franchise-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-tec-gold/50 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative max-w-5xl mx-auto p-px rounded-3xl bg-gradient-to-r from-tec-primary via-tec-gold to-tec-primary"
        >
          <div className="relative rounded-3xl bg-zinc-950/95 backdrop-blur-xl px-8 py-16 md:px-16 text-center overflow-hidden">
            {/* Anéis concêntricos, como um radar sobre a cidade */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              {[200, 360, 520, 680].map((size, i) => (
                <div
                  key={size}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-tec-gold/10 animate-pulse"
                  style={{ width: size, height: size, animationDelay: `${i * 0.4}s` }}
                />
              ))}
            </div>
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-tec-primary/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-tec-gold/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="mx-auto mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-tec-gold to-amber-600 flex items-center justify-center text-black shadow-[0_0_40px_rgba(212,175,55,0.5)]">
                <MapPin size={26} />
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-5 leading-tight tracking-tight">
                Sua cidade precisa de uma{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tec-gold via-amber-200 to-tec-primary">nova mobilidade.</span>
              </h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Não perca a chance de ser o pioneiro na sua região. Verifique a disponibilidade de território hoje mesmo.
              </p>

              <button onClick={scrollToForm} className="group relative inline-flex items-center justify-center">
                <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-tec-gold via-amber-300 to-tec-gold opacity-60 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-pulse" />
                <span className="relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-amber-500 via-tec-gold to-amber-400 px-7 py-3 text-black text-sm font-bold tracking-wide group-hover:scale-[1.03] transition-transform duration-300">
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12" />
                  <MapPin className="relative w-4 h-4" />
                  <span className="relative">Verificar Disponibilidade na Minha Cidade</span>
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FranchiseCTA;
