import React from 'react';
import { motion } from 'framer-motion';
import { Percent, CreditCard, Zap, LineChart, DollarSign, Check } from 'lucide-react';
import DriverSectionTitle from './DriverSectionTitle';

const points = [
  { icon: Percent, title: '0% de taxa por corrida', desc: 'Nos planos Assinatura Mensal e Diária Avulsa, cada corrida é integralmente sua.' },
  { icon: CreditCard, title: 'Carteira virtual no app', desc: 'Acompanhe os ganhos do dia, consulte o extrato e solicite o saque quando quiser.' },
  { icon: Zap, title: 'Tarifa dinâmica e mapa de calor', desc: 'Saiba onde está a demanda e ganhe mais nos horários de pico.' },
];

// Valores de exemplo exibidos na tela ilustrativa da carteira
const rides = [
  { route: 'Centro → Jardim Europa', meta: '18:42 · 6,8 km', value: '+ R$ 24,90' },
  { route: 'Rodoviária → Shopping', meta: '18:05 · 4,1 km', value: '+ R$ 17,60' },
  { route: 'Universidade → Vila Nova', meta: '17:31 · 9,3 km', value: '+ R$ 31,20' },
];

// Tela ilustrativa da carteira do App Motorista
const WalletMockup: React.FC = () => (
  <div className="relative w-[300px] h-[620px] rounded-[48px] p-2.5 bg-[#1A1D24] border border-white/15 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
    <div className="w-full h-full rounded-[40px] bg-[#0E1015] overflow-hidden flex flex-col">
      <div className="h-[34px] flex justify-center items-center">
        <div className="w-[92px] h-6 rounded-full bg-black" />
      </div>
      <div className="px-5 pt-3.5 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span className="text-[13px] text-gray-400">Carteira</span>
          <span className="text-[11px] font-semibold text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-400/10">Online</span>
        </div>
        <div className="p-5 rounded-[20px] bg-gradient-to-br from-emerald-400/20 to-tec-primary/10 border border-emerald-400/25">
          <div className="text-xs text-gray-300">Ganhos de hoje</div>
          <div className="font-display text-[32px] font-semibold text-white mt-1">R$ 318,40</div>
          <div className="flex justify-between mt-3.5 text-xs text-gray-300">
            <span>14 corridas</span>
            <span>Taxa: R$ 0,00</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3 rounded-2xl bg-[#161920] text-xs text-gray-300 flex flex-col gap-1.5">
            <LineChart className="w-[18px] h-[18px] text-emerald-400" strokeWidth={1.75} />
            Extrato
          </div>
          <div className="p-3 rounded-2xl bg-[#161920] text-xs text-gray-300 flex flex-col gap-1.5">
            <DollarSign className="w-[18px] h-[18px] text-sky-400" strokeWidth={1.75} />
            Solicitar saque
          </div>
        </div>
        <div className="text-xs text-gray-400 pt-1">Últimas corridas</div>
        <div className="flex flex-col divide-y divide-white/[0.06]">
          {rides.map(r => (
            <div key={r.route} className="flex justify-between items-center text-[13px] py-2.5">
              <div>
                <div className="text-gray-100">{r.route}</div>
                <div className="text-[11px] text-gray-500 mt-0.5">{r.meta}</div>
              </div>
              <div className="text-emerald-400 font-semibold">{r.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const FloatingCard: React.FC<{ icon: React.ElementType; box: string; title: string; text: string; className: string }> = ({ icon: Icon, box, title, text, className }) => (
  <div className={`absolute hidden sm:flex items-center gap-3 p-4 rounded-[18px] bg-[#161920]/90 backdrop-blur-xl border border-white/10 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.7)] ${className}`}>
    <div className={`w-[38px] h-[38px] shrink-0 rounded-[10px] flex items-center justify-center ${box}`}>
      <Icon size={18} strokeWidth={1.75} />
    </div>
    <div>
      <div className="text-[13px] font-semibold text-white">{title}</div>
      <div className="text-xs text-gray-400 mt-0.5">{text}</div>
    </div>
  </div>
);

const DriverEarnings: React.FC = () => {
  return (
    <section className="py-14 md:py-20 bg-tec-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <DriverSectionTitle
          title="Você escolhe como paga."
          highlight="O valor da corrida fica com você."
          subtitle="Em vez de uma comissão alta em cada viagem, a TechDriver trabalha com modelos de cobrança pensados para o seu ritmo. Quem roda todo dia paga um valor fixo e fica com 100% do valor de cada corrida."
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="border-t border-white/[0.08]">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative flex gap-4 py-5 border-b border-white/[0.08]"
                >
                  <span className="absolute -bottom-px left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-emerald-400 to-transparent transition-all duration-500" />
                  <p.icon className="w-[22px] h-[22px] shrink-0 mt-0.5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.75} />
                  <div>
                    <div className="font-semibold text-white md:text-[17px] group-hover:text-emerald-300 transition-colors duration-300">{p.title}</div>
                    <div className="text-[15px] leading-relaxed text-gray-400 mt-1">{p.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
  
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex flex-col items-center"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.18)_0%,rgba(30,167,225,0.08)_45%,transparent_70%)] pointer-events-none" />
            <motion.div
              className="relative"
              whileHover={{ y: -8, rotate: -1.5 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            >
              <WalletMockup />
              <FloatingCard icon={Zap} box="bg-amber-400/15 text-amber-400" title="Tarifa dinâmica ativa" text="Região central · alta demanda" className="-right-8 lg:-right-28 top-24 animate-[float_6s_ease-in-out_infinite]" />
              <FloatingCard icon={Check} box="bg-emerald-400/15 text-emerald-400" title="Saque solicitado" text="Acompanhe pelo extrato" className="-left-8 lg:-left-28 bottom-20 animate-[float_6s_ease-in-out_3s_infinite]" />
            </motion.div>
            <p className="relative mt-5 text-xs text-gray-500">Tela ilustrativa do App Motorista</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DriverEarnings;
