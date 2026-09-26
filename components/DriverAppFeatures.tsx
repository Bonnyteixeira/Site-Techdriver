import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Map, AlertTriangle, Navigation, CreditCard, Route, FileCheck, MessageSquare } from 'lucide-react';
import DriverSectionTitle from './DriverSectionTitle';
import Spotlight, { useSpotlight } from './Spotlight';

// Recursos do App Motorista (mesmo conteúdo da página Funcionalidades)
const features = [
  { icon: Zap, title: 'Tarifa Dinâmica', desc: 'Multiplicador de ganhos automático em áreas de alta demanda.', color: 'text-amber-400', spot: 'rgba(251,191,36,0.12)', bar: 'from-amber-400' },
  { icon: Map, title: 'Mapa de Calor', desc: 'As zonas com mais pedidos de corrida, em tempo real.', color: 'text-orange-400', spot: 'rgba(251,146,60,0.12)', bar: 'from-orange-400' },
  { icon: AlertTriangle, title: 'Botão de Pânico', desc: 'Alerta silencioso para a central e seus contatos, com geolocalização.', color: 'text-red-400', spot: 'rgba(248,113,113,0.12)', bar: 'from-red-400' },
  { icon: Navigation, title: 'Navegação Integrada', desc: 'Abra a rota no Waze ou no Google Maps com um toque.', color: 'text-sky-400', spot: 'rgba(56,189,248,0.12)', bar: 'from-sky-400' },
  { icon: CreditCard, title: 'Carteira Virtual', desc: 'Ganhos do dia, extrato financeiro e solicitação de saque.', color: 'text-emerald-400', spot: 'rgba(52,211,153,0.12)', bar: 'from-emerald-400' },
  { icon: Route, title: 'Preferência de Rota', desc: 'Defina um destino e receba só corridas nesse sentido.', color: 'text-blue-400', spot: 'rgba(96,165,250,0.12)', bar: 'from-blue-400' },
  { icon: FileCheck, title: 'Documentação Digital', desc: 'Envio e validação da CNH e do veículo pelo próprio app.', color: 'text-purple-400', spot: 'rgba(192,132,252,0.12)', bar: 'from-purple-400' },
  { icon: MessageSquare, title: 'Chat com Suporte', desc: 'Canal direto com a central de operações para qualquer ocorrência.', color: 'text-teal-400', spot: 'rgba(45,212,191,0.12)', bar: 'from-teal-400' },
];

const DriverAppFeatures: React.FC = () => {
  const onMove = useSpotlight();
  return (
    <section className="py-14 md:py-20 bg-[#0E1015] border-y border-white/[0.06]">
      <div className="container mx-auto px-6">
        <DriverSectionTitle
          title="Uma ferramenta de trabalho"
          highlight="à altura do seu dia."
          subtitle="Mais ganhos, mais segurança e mais praticidade em cada corrida."
          align="center"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-3xl overflow-hidden bg-white/[0.08] border border-white/[0.08]">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onMouseMove={onMove}
              className="group isolate relative overflow-hidden p-4 sm:p-5 md:p-8 bg-tec-dark flex flex-col gap-3 md:gap-3.5"
            >
              <Spotlight color={f.spot} size={260} />
              <span className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${f.bar} to-transparent transition-all duration-500`} />
              <f.icon className={`w-[22px] h-[22px] md:w-[26px] md:h-[26px] ${f.color} group-hover:scale-125 group-hover:-translate-y-0.5 transition-transform duration-300`} strokeWidth={1.75} />
              <h3 className="text-sm sm:text-[15px] md:text-[17px] font-semibold text-white">{f.title}</h3>
              <p className="text-[13px] md:text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DriverAppFeatures;
