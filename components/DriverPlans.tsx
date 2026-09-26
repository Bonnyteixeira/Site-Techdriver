import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Percent, Zap, Check, MapPin } from 'lucide-react';
import DriverSectionTitle from './DriverSectionTitle';
import Spotlight, { useSpotlight } from './Spotlight';

const plans = [
  {
    title: 'Assinatura Mensal',
    subtitle: 'Lucro máximo',
    description: 'Pague um valor fixo por mês e fique com 100% do valor de todas as suas corridas.',
    icon: Calendar,
    features: ['0% de taxa por corrida', 'Pagamento único mensal', 'Ideal para quem roda em tempo integral'],
    border: 'border-blue-400/35 hover:border-blue-400/70',
    line: 'via-blue-400',
    box: 'bg-blue-400/15 text-blue-400',
    text: 'text-blue-300',
    check: 'text-blue-400',
    spot: 'rgba(96,165,250,0.16)',
    glow: 'hover:shadow-[0_24px_50px_-20px_rgba(96,165,250,0.55)]',
  },
  {
    title: 'Diária Avulsa',
    subtitle: 'Liberdade total',
    description: 'Só vai rodar hoje? Pague a taxa do dia e garanta 100% do lucro nas próximas 24h.',
    icon: Clock,
    features: ['Sem compromisso mensal', 'Pague só quando usar', '100% do valor das corridas'],
    border: 'border-amber-400/30 hover:border-amber-400/70',
    line: 'via-amber-400',
    box: 'bg-amber-400/15 text-amber-400',
    text: 'text-amber-300',
    check: 'text-amber-400',
    spot: 'rgba(251,191,36,0.14)',
    glow: 'hover:shadow-[0_24px_50px_-20px_rgba(251,191,36,0.5)]',
  },
  {
    title: 'Diária Reduzida + %',
    subtitle: 'Menor risco',
    description: 'Pague um valor simbólico ao iniciar o dia e uma pequena taxa percentual sobre as corridas.',
    icon: Percent,
    features: ['Baixo custo inicial', 'Taxa percentual justa', 'Ideal para quem está começando'],
    border: 'border-emerald-400/35 hover:border-emerald-400/70',
    line: 'via-emerald-400',
    box: 'bg-emerald-400/15 text-emerald-400',
    text: 'text-emerald-300',
    check: 'text-emerald-400',
    spot: 'rgba(52,211,153,0.16)',
    glow: 'hover:shadow-[0_24px_50px_-20px_rgba(52,211,153,0.55)]',
  },
  {
    title: 'Modelo Híbrido',
    subtitle: 'O melhor dos mundos',
    description: 'Uma mensalidade reduzida combinada com taxas menores por corrida realizada.',
    icon: Zap,
    features: ['Mensalidade baixa', 'Taxas dinâmicas', 'Equilíbrio para perfil misto'],
    border: 'border-violet-400/35 hover:border-violet-400/70',
    line: 'via-violet-400',
    box: 'bg-violet-400/15 text-violet-400',
    text: 'text-violet-300',
    check: 'text-violet-400',
    spot: 'rgba(167,139,250,0.16)',
    glow: 'hover:shadow-[0_24px_50px_-20px_rgba(167,139,250,0.55)]',
  },
];

const DriverPlans: React.FC = () => {
  const onMove = useSpotlight();
  const scrollToDownload = () => document.getElementById('baixar-app')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="planos" className="py-14 md:py-20 bg-tec-dark relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 relative">
        <DriverSectionTitle
          title="Escolha o plano que cabe no"
          highlight="seu bolso."
          subtitle="Cada motorista tem uma estratégia diferente. Por isso, a TechDriver oferece modelos de cobrança para você maximizar seus lucros."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <motion.article
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              onMouseMove={onMove}
              className={`group isolate relative flex flex-col gap-4 p-7 rounded-3xl bg-[#111318] border overflow-hidden transition-[border-color,box-shadow] duration-300 ${plan.border} ${plan.glow}`}
            >
              <Spotlight color={plan.spot} size={360} />
              <div className={`absolute top-0 inset-x-7 group-hover:inset-x-0 h-0.5 bg-gradient-to-r from-transparent ${plan.line} to-transparent transition-all duration-500`} />

              <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 ${plan.box}`}>
                <plan.icon size={22} strokeWidth={1.75} />
              </div>

              <div>
                <div className={`text-xs font-semibold uppercase tracking-[0.14em] ${plan.text}`}>{plan.subtitle}</div>
                <h3 className="mt-1.5 font-display text-[22px] font-semibold text-white">{plan.title}</h3>
              </div>

              <p className="text-[15px] leading-relaxed text-gray-400 lg:min-h-[74px]">{plan.description}</p>

              <ul className="flex flex-col gap-3 pt-5 border-t border-white/[0.08] text-sm text-gray-300">
                {plan.features.map(f => (
                  <li key={f} className="flex gap-2.5 group-hover:text-gray-100 transition-colors duration-300">
                    <Check className={`w-[18px] h-[18px] shrink-0 ${plan.check}`} strokeWidth={1.75} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToDownload}
                className="mt-auto h-12 rounded-full border border-white/15 bg-white/[0.06] text-white text-[15px] font-semibold group-hover:border-white/30 group-hover:bg-white/10 hover:!bg-white hover:!text-tec-dark transition-colors duration-300"
              >
                Ver no app
              </button>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 md:px-7 rounded-2xl bg-[#111318] border border-white/[0.08]">
          <div className="w-11 h-11 shrink-0 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center">
            <MapPin size={20} strokeWidth={1.75} />
          </div>
          <p className="text-[15px] leading-relaxed text-gray-400">
            <span className="text-white font-semibold">Cada franquia define seus planos e valores.</span>{' '}
            Consulte no App Motorista quais modelos estão disponíveis na sua cidade e as condições de cada um.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DriverPlans;
