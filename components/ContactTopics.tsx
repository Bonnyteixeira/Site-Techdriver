import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Palette, LayoutDashboard, Car, ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Spotlight, { useSpotlight } from './Spotlight';

const topics = [
  {
    icon: Building2,
    title: 'Quero uma franquia',
    desc: 'Tenha sua própria operação de mobilidade urbana com a tecnologia e o suporte da TechDriver.',
    to: '/franquias',
    box: 'bg-tec-gold/15 text-amber-300',
    spot: 'rgba(212,175,55,0.16)',
    border: 'border-tec-gold/25 hover:border-tec-gold/60',
    glow: 'hover:shadow-[0_24px_50px_-20px_rgba(212,175,55,0.5)]',
    link: 'text-amber-300',
    line: 'via-tec-gold',
  },
  {
    icon: Palette,
    title: 'Aplicativo com minha marca',
    desc: 'Lance seu aplicativo de transporte white-label com a plataforma mais robusta do mercado.',
    to: '/white-label',
    box: 'bg-violet-400/15 text-violet-400',
    spot: 'rgba(167,139,250,0.16)',
    border: 'border-violet-400/25 hover:border-violet-400/60',
    glow: 'hover:shadow-[0_24px_50px_-20px_rgba(167,139,250,0.55)]',
    link: 'text-violet-300',
    line: 'via-violet-400',
  },
  {
    icon: LayoutDashboard,
    title: 'Soluções para empresas',
    desc: 'Conheça a arquitetura tecnológica e os painéis de gestão que sustentam a operação.',
    to: '/solucoes',
    box: 'bg-tec-primary/15 text-sky-400',
    spot: 'rgba(30,167,225,0.16)',
    border: 'border-tec-primary/25 hover:border-tec-primary/60',
    glow: 'hover:shadow-[0_24px_50px_-20px_rgba(30,167,225,0.55)]',
    link: 'text-sky-300',
    line: 'via-tec-primary',
  },
  {
    icon: Car,
    title: 'Sou motorista',
    desc: 'O cadastro de motoristas é feito pelo App Motorista. Veja planos, benefícios e como começar.',
    to: '/motorista',
    box: 'bg-emerald-400/15 text-emerald-400',
    spot: 'rgba(52,211,153,0.16)',
    border: 'border-emerald-400/25 hover:border-emerald-400/60',
    glow: 'hover:shadow-[0_24px_50px_-20px_rgba(52,211,153,0.55)]',
    link: 'text-emerald-300',
    line: 'via-emerald-400',
  },
];

const ContactTopics: React.FC = () => {
  const onMove = useSpotlight();

  return (
    <section className="py-14 md:py-20 bg-[#0E1015] border-y border-white/[0.06]">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Como podemos"
          highlight="ajudar você?"
          subtitle="Escolha o assunto e vá direto para as informações certas, ou fale com a nossa equipe pelo formulário abaixo."
          className="!mb-10 md:!mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {topics.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Link
                to={t.to}
                onMouseMove={onMove}
                className={`group isolate relative overflow-hidden h-full flex flex-col gap-4 p-7 rounded-3xl bg-[#111318] border transition-[border-color,box-shadow] duration-300 ${t.border} ${t.glow}`}
              >
                <Spotlight color={t.spot} size={340} />
                <div className={`absolute top-0 inset-x-7 group-hover:inset-x-0 h-0.5 bg-gradient-to-r from-transparent ${t.line} to-transparent transition-all duration-500`} />
                <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 ${t.box}`}>
                  <t.icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{t.title}</h3>
                <p className="text-[15px] leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{t.desc}</p>
                <span className={`mt-auto pt-2 inline-flex items-center gap-2 text-sm font-semibold ${t.link}`}>
                  Saiba mais
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactTopics;
