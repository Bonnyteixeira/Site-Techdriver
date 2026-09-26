import React from 'react';
import { motion } from 'framer-motion';
import { Fuel, Wrench, Plus } from 'lucide-react';
import Spotlight, { useSpotlight } from './Spotlight';

const safety = [
  { title: 'Botão de pânico', desc: 'Alerta silencioso com a sua localização.' },
  { title: 'Monitoramento 24h', desc: 'Central acompanhando cada corrida.' },
  { title: 'Contatos de emergência', desc: 'Avisados junto com a central.' },
  { title: 'Suporte humanizado', desc: 'Gente de verdade do outro lado.' },
];

const partners = [
  { icon: Fuel, title: 'Postos de combustível', desc: 'Descontos no abastecimento em postos parceiros' },
  { icon: Wrench, title: 'Oficinas e manutenção', desc: 'Revisões e serviços com condição especial' },
];

const DriverSafetyBenefits: React.FC = () => {
  const onMove = useSpotlight();
  return (
    <section className="py-14 md:py-20 bg-tec-dark">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Segurança */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          onMouseMove={onMove}
          className="group isolate relative p-7 md:p-12 rounded-[28px] bg-[#111318] border border-white/[0.08] hover:border-sky-400/30 transition-colors duration-500 flex flex-col items-center text-center gap-5 overflow-hidden"
        >
          <Spotlight color="rgba(56,189,248,0.1)" size={420} />
          <div className="absolute -top-28 -right-28 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(30,167,225,0.2),transparent_70%)] pointer-events-none group-hover:scale-125 transition-transform duration-700" />
          <h3 className="font-display text-[26px] md:text-[34px] font-semibold text-white leading-tight tracking-tight">Você nunca roda sozinho.</h3>
          <p className="text-gray-400 leading-relaxed max-w-lg mx-auto">Segurança embarcada no aplicativo e uma central que acompanha a operação o tempo todo.</p>
          <div className="relative w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            {safety.map(s => (
              <div key={s.title} className="p-5 rounded-2xl bg-tec-dark/80 border border-white/[0.06] hover:border-sky-400/40 hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgba(56,189,248,0.5)] transition-all duration-300">
                <div className="font-semibold text-[15px] text-white">{s.title}</div>
                <div className="text-sm leading-relaxed text-gray-400 mt-1.5">{s.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Clube de benefícios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onMouseMove={onMove}
          className="group isolate relative p-7 md:p-12 rounded-[28px] bg-[#111318] border border-tec-gold/25 hover:border-tec-gold/50 transition-colors duration-500 flex flex-col items-center text-center gap-5 overflow-hidden"
        >
          <Spotlight color="rgba(212,175,55,0.1)" size={420} />
          <div className="absolute -top-28 -right-28 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_70%)] pointer-events-none group-hover:scale-125 transition-transform duration-700" />
          <h3 className="font-display text-[26px] md:text-[34px] font-semibold text-white leading-tight tracking-tight">Economia que chega ao seu bolso.</h3>
          <p className="text-gray-400 leading-relaxed max-w-lg mx-auto">Condições exclusivas para motoristas parceiros com os estabelecimentos credenciados na sua cidade.</p>
          <div className="relative w-full flex flex-col gap-3 mt-2 text-left">
            {partners.map(p => (
              <div key={p.title} className="group/row flex items-center gap-4 px-5 py-[18px] rounded-2xl bg-tec-dark/80 border border-white/[0.06] hover:border-tec-gold/40 hover:translate-x-1 hover:shadow-[0_16px_32px_-16px_rgba(212,175,55,0.45)] transition-all duration-300">
                <div className="w-[42px] h-[42px] shrink-0 rounded-xl bg-tec-gold/15 text-amber-300 flex items-center justify-center group-hover/row:scale-110 group-hover/row:-rotate-6 transition-transform duration-300">
                  <p.icon size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <div className="font-semibold text-[15px] text-white">{p.title}</div>
                  <div className="text-sm text-gray-400 mt-0.5">{p.desc}</div>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-4 px-5 py-[18px] rounded-2xl bg-tec-dark/80 border border-dashed border-white/15 hover:border-white/30 hover:translate-x-1 transition-all duration-300">
              <div className="w-[42px] h-[42px] shrink-0 rounded-xl bg-white/5 text-gray-400 flex items-center justify-center">
                <Plus size={20} strokeWidth={1.75} />
              </div>
              <div>
                <div className="font-semibold text-[15px] text-white">E outros parceiros</div>
                <div className="text-sm text-gray-400 mt-0.5">Definidos pela operação da sua cidade</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DriverSafetyBenefits;
