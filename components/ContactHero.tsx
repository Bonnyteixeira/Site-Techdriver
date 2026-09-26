import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, ArrowRight } from 'lucide-react';
import Spotlight, { useSpotlight } from './Spotlight';

const scrollToForm = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

const channels = [
  {
    icon: Phone,
    title: 'Telefone',
    value: '(17) 98806-3384',
    href: 'tel:+5517988063384',
    box: 'bg-tec-primary/15 text-sky-400',
    spot: 'rgba(30,167,225,0.16)',
    border: 'hover:border-tec-primary/50',
  },
  {
    icon: Mail,
    title: 'E-mail',
    value: 'diretoria@techdriver.com.br',
    href: 'mailto:diretoria@techdriver.com.br',
    box: 'bg-violet-400/15 text-violet-400',
    spot: 'rgba(167,139,250,0.16)',
    border: 'hover:border-violet-400/50',
  },
  {
    icon: MessageSquare,
    title: 'Formulário',
    value: 'Respondemos pelo WhatsApp',
    onClick: scrollToForm,
    box: 'bg-emerald-400/15 text-emerald-400',
    spot: 'rgba(52,211,153,0.16)',
    border: 'hover:border-emerald-400/50',
  },
];

const ContactHero: React.FC = () => {
  const onMove = useSpotlight();

  return (
    <section className="relative overflow-hidden">
      {/* Fundo: grade sutil e brilhos */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[radial-gradient(ellipse,rgba(30,167,225,0.18),transparent_65%)] pointer-events-none" />
      <div className="absolute top-40 -right-32 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative pt-16 md:pt-24 pb-14 md:pb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[38px] md:text-[64px] font-display font-semibold text-white leading-[1.08] tracking-tight max-w-4xl mx-auto"
        >
          Vamos conversar sobre a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-tec-primary via-violet-400 to-emerald-400">mobilidade da sua cidade.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-2xl mx-auto"
        >
          Franquias, white-label, soluções para empresas ou dúvidas gerais: nossa equipe está pronta para atender você.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-9 flex flex-col sm:flex-row justify-center gap-3"
        >
          <button
            onClick={scrollToForm}
            className="group inline-flex items-center justify-center gap-2.5 h-[52px] px-7 rounded-full bg-gradient-to-r from-tec-primary to-violet-500 text-white text-[15px] font-semibold hover:brightness-110 hover:-translate-y-0.5 shadow-[0_10px_30px_-10px_rgba(30,167,225,0.7)] transition-all duration-300"
          >
            Enviar mensagem
            <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="tel:+5517988063384"
            className="inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-full border border-white/15 bg-white/[0.06] text-white text-[15px] font-semibold hover:bg-white/10 transition-colors duration-300"
          >
            <Phone className="w-[18px] h-[18px]" strokeWidth={1.75} />
            Ligar agora
          </a>
        </motion.div>

        {/* Canais de atendimento */}
        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto text-left">
          {channels.map((c, i) => {
            const content = (
              <>
                <Spotlight color={c.spot} size={280} />
                <div className={`w-12 h-12 shrink-0 rounded-[14px] flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 ${c.box}`}>
                  <c.icon size={22} strokeWidth={1.75} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm text-gray-400">{c.title}</div>
                  <div className="text-white font-semibold truncate">{c.value}</div>
                </div>
                <ArrowRight className="w-[18px] h-[18px] shrink-0 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </>
            );
            const cls = `group isolate relative overflow-hidden flex items-center gap-4 p-5 rounded-2xl bg-[#111318] border border-white/[0.08] hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.9)] transition-[border-color,box-shadow] duration-300 ${c.border}`;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 + i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {c.href ? (
                  <a href={c.href} onMouseMove={onMove} className={cls}>{content}</a>
                ) : (
                  <button type="button" onClick={c.onClick} onMouseMove={onMove} className={`${cls} w-full text-left`}>{content}</button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
