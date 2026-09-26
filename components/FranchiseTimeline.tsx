import React from 'react';
import { motion } from 'framer-motion';
import { MapPinned, FileSignature, GraduationCap, Rocket } from 'lucide-react';
import SectionHeader from './SectionHeader';

const steps = [
  { num: "01", icon: MapPinned, title: "Análise de Território", desc: "Estudo de viabilidade e potencial da região." },
  { num: "02", icon: FileSignature, title: "Assinatura do Contrato", desc: "Formalização e pagamento da taxa de franquia." },
  { num: "03", icon: GraduationCap, title: "Treinamento & Setup", desc: "Imersão na Universidade TechDriver e configuração dos apps." },
  { num: "04", icon: Rocket, title: "Lançamento Oficial", desc: "Início das operações e campanhas de marketing." }
];

const FranchiseTimeline: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-950 to-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-tec-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <SectionHeader
          title="Jornada do"
          highlight="Franqueado"
        />

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Linha de progresso que se desenha ao entrar na tela */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-white/10" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.3 }}
            className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px origin-left bg-gradient-to-r from-tec-primary via-violet-500 to-tec-gold shadow-[0_0_12px_rgba(30,167,225,0.8)]"
          />

          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.35 }}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Marcador com ícone */}
              <div className="relative z-10 mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-tec-primary to-violet-500 blur-lg opacity-50 group-hover:opacity-90 transition-opacity" />
                <div className="relative w-16 h-16 rounded-full p-[2px] bg-gradient-to-br from-tec-primary via-violet-500 to-tec-gold">
                  <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center text-white group-hover:bg-transparent transition-colors duration-300">
                    <step.icon size={24} />
                  </div>
                </div>
              </div>

              {/* Card */}
              <div className="relative w-full h-full p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl group-hover:border-white/20 group-hover:bg-white/[0.06] group-hover:-translate-y-1 transition-all duration-300">
                <span className="block font-mono text-xs tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-tec-primary to-tec-gold mb-2">
                  ETAPA {step.num}
                </span>
                <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FranchiseTimeline;
