import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, FileCheck, UserCheck, Car } from 'lucide-react';
import DriverSectionTitle from './DriverSectionTitle';
import Spotlight, { useSpotlight } from './Spotlight';

const steps = [
  { icon: Smartphone, title: 'Baixe o App Motorista', desc: 'Instale o aplicativo e crie sua conta com seus dados pessoais.' },
  { icon: FileCheck, title: 'Envie seus documentos', desc: 'Faça o upload da CNH e dos documentos do veículo direto pelo app.' },
  { icon: UserCheck, title: 'Aprovação da central', desc: 'A operação da sua cidade valida seu cadastro e entra em contato.' },
  { icon: Car, title: 'Escolha o plano e rode', desc: 'Veja no app os planos da sua cidade, ative o que combina com você e fique online.' },
];

const DriverSteps: React.FC = () => {
  const onMove = useSpotlight();
  return (
    <section className="py-14 md:py-20 bg-[#0E1015] border-y border-white/[0.06]">
      <div className="container mx-auto px-6">
        <DriverSectionTitle
          title="Do cadastro à primeira corrida em"
          highlight="quatro passos."
          subtitle="Todo o processo acontece pelo aplicativo, sem filas e sem papelada."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => {
            const last = i === steps.length - 1;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                onMouseMove={onMove}
                className={`group isolate relative overflow-hidden p-7 md:p-8 rounded-[22px] border flex flex-col gap-4 transition-[border-color,box-shadow] duration-300 hover:shadow-[0_24px_50px_-20px_rgba(52,211,153,0.45)] ${
                  last
                    ? 'bg-gradient-to-br from-emerald-400/[0.14] to-tec-primary/[0.06] border-emerald-400/30 hover:border-emerald-400/60'
                    : 'bg-tec-dark border-white/[0.08] hover:border-emerald-400/40'
                }`}
              >
                <Spotlight />
                <div className="flex justify-between items-center">
                  <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 ${
                    last ? 'bg-gradient-to-br from-emerald-400 to-tec-primary text-[#04201A]' : 'bg-emerald-400/10 text-emerald-400'
                  }`}>
                    <s.icon size={22} strokeWidth={1.75} />
                  </div>
                  <span className={`font-display text-[40px] font-semibold transition-colors duration-300 ${last ? 'text-emerald-400/35 group-hover:text-emerald-400/60' : 'text-white/10 group-hover:text-emerald-400/40'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{s.title}</h3>
                <p className={`text-[15px] leading-relaxed ${last ? 'text-gray-300' : 'text-gray-400'}`}>{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DriverSteps;
