import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Smartphone, Zap, Map, ShieldCheck } from 'lucide-react';
import SectionHeader from './SectionHeader';

const benefits = [
  { icon: DollarSign, title: "Baixo Investimento", desc: "Modelo asset-light sem necessidade de ponto comercial físico." },
  { icon: TrendingUp, title: "Alta Lucratividade", desc: "Margens de lucro líquida entre 25% e 35% sobre o faturamento." },
  { icon: Zap, title: "Retorno Rápido", desc: "Payback estimado entre 6 a 12 meses de operação." },
  { icon: Smartphone, title: "100% Digital", desc: "Gestão completa pelo computador ou celular, de onde estiver." },
  { icon: Map, title: "Exclusividade", desc: "Território exclusivo garantido em contrato para sua proteção." },
  { icon: ShieldCheck, title: "Modelo Escalável", desc: "Cresça sua frota sem aumentar seus custos fixos proporcionalmente." }
];

const FranchiseBenefits: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-tec-gold/50 to-transparent" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-tec-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-tec-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <SectionHeader
          title="Vantagens"
          highlight="Exclusivas"
          subtitle="Por que a TechDriver é a melhor escolha de investimento."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {benefits.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative p-px rounded-2xl bg-white/[0.06] hover:bg-gradient-to-br hover:from-tec-gold hover:via-amber-300/60 hover:to-tec-primary/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(212,175,55,0.45)]"
            >
              <div className="relative h-full rounded-2xl bg-zinc-950/95 backdrop-blur-xl p-6 overflow-hidden">
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-tec-gold/20 rounded-full blur-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-start justify-between mb-5">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-tec-gold to-amber-600 blur-lg opacity-30 group-hover:opacity-70 transition-opacity duration-500" />
                    <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-tec-gold to-amber-600 flex items-center justify-center text-black shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <item.icon size={20} />
                    </div>
                  </div>
                  <span className="font-mono text-xs text-zinc-600 group-hover:text-tec-gold/70 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="relative text-lg font-semibold text-white mb-2 tracking-tight">{item.title}</h3>
                <p className="relative text-gray-400 text-sm leading-relaxed">{item.desc}</p>

                <div className="relative mt-5 h-0.5 w-8 rounded-full bg-gradient-to-r from-tec-gold to-amber-300 group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FranchiseBenefits;
