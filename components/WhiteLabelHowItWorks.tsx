import React from 'react';
import { motion } from 'framer-motion';
import { KeyRound, Palette, SlidersHorizontal, Wallet } from 'lucide-react';
import SectionHeader from './SectionHeader';

// Etapas resumidas do texto "Como funciona"
const steps = [
  { icon: KeyRound, title: 'Licenciamento', desc: 'Nós licenciamos a tecnologia TechDriver para você.', gradient: 'from-tec-primary to-cyan-300' },
  { icon: Palette, title: 'Sua identidade', desc: 'Personalizamos os aplicativos (Passageiro e Motorista) com sua logomarca, suas cores e suas regras de negócio.', gradient: 'from-violet-500 to-fuchsia-400' },
  { icon: SlidersHorizontal, title: 'Sua gestão', desc: 'Você define as tarifas e gerencia os motoristas.', gradient: 'from-emerald-500 to-teal-300' },
  { icon: Wallet, title: 'Seu lucro', desc: 'Fica com 100% do lucro da operação, pagando apenas uma mensalidade fixa ou variável pelo uso da tecnologia.', gradient: 'from-amber-500 to-yellow-300' },
];

const WhiteLabelHowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-tec-primary/60 to-transparent" />
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-tec-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <SectionHeader
          title="Como funciona o"
          highlight="White-Label?"
          subtitle="Uma operação completa com a sua marca, sustentada pela tecnologia TechDriver."
        />

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {/* Linha que liga as etapas */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.2 }}
            className="hidden lg:block absolute top-[46px] left-[12.5%] right-[12.5%] h-px origin-left bg-gradient-to-r from-tec-primary via-violet-500 via-emerald-400 to-amber-400"
          />

          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.25 }}
              className="group relative p-px rounded-2xl bg-white/[0.06] hover:bg-white/[0.14] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative h-full rounded-2xl bg-zinc-950/95 backdrop-blur-xl p-6 overflow-hidden text-center">
                <div className={`absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-3xl bg-gradient-to-br ${step.gradient} opacity-10 group-hover:opacity-30 transition-opacity duration-500`} />

                <div className="relative mx-auto mb-5 w-12 h-12">
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${step.gradient} blur-lg opacity-40 group-hover:opacity-80 transition-opacity duration-500`} />
                  <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <step.icon size={22} />
                  </div>
                </div>

                <span className="relative block font-mono text-[11px] tracking-widest text-zinc-500 mb-1">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="relative text-lg font-semibold text-white mb-2 tracking-tight">{step.title}</h3>
                <p className="relative text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelHowItWorks;
