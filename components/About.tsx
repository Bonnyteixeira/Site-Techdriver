import React from 'react';
import { ShieldCheck, Cpu, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';
import SectionHeader from './SectionHeader';
import { useNavigate } from 'react-router-dom';

const highlights = [
  { icon: ShieldCheck, title: 'Suporte 24/7', text: 'Atendimento humanizado', gradient: 'from-tec-primary to-cyan-300', glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(30,167,225,0.6)]' },
  { icon: Cpu, title: 'Tecnologia Multi-tenant', text: 'Escalabilidade garantida', gradient: 'from-violet-500 to-fuchsia-400', glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.6)]' },
  { icon: Globe, title: 'Expansão Nacional', text: 'Presente em 12 estados', gradient: 'from-emerald-500 to-teal-300', glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.6)]' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' } }),
};

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-28 bg-tec-dark relative overflow-hidden">
      {/* Grade sutil com fade nas bordas */}
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-tec-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          title="Liderando a revolução da"
          highlight="mobilidade inteligente."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Texto */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
            <motion.p variants={fadeUp} custom={2} className="text-gray-400 text-lg leading-relaxed mb-10 pl-5 border-l-2 border-transparent [border-image:linear-gradient(to_bottom,#1EA7E1,#8b5cf6)_1]">
              Somos uma empresa de tecnologia especializada em mobilidade urbana por aplicativo. Conduzimos uma rede de franqueados em expansão e desenvolvemos a tecnologia que move dezenas de aplicativos de transporte em todo o Brasil, com o nosso sistema White-Label.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  variants={fadeUp}
                  custom={3 + i}
                  className={`group relative p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1 transition-all duration-300 ${h.glow}`}
                >
                  <div className={`w-9 h-9 mb-3 rounded-lg bg-gradient-to-br ${h.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <h.icon size={18} />
                  </div>
                  <h4 className="text-white font-semibold text-sm leading-snug">{h.title}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{h.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} custom={6} className="flex justify-center">
              <Button variant="primary" onClick={() => navigate('/sistema')}>
                Conheça Nosso Sistema
              </Button>
            </motion.div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative group"
          >
            {/* Moldura deslocada decorativa */}
            <div className="absolute -inset-0 translate-x-5 translate-y-5 rounded-3xl border border-tec-primary/30 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-700" />
            {/* Halo de cor */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-tec-primary/30 via-violet-500/20 to-emerald-400/20 rounded-[2.5rem] blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Borda em gradiente */}
            <div className="relative p-px rounded-3xl bg-gradient-to-br from-tec-primary via-violet-500/60 to-emerald-400/60 shadow-2xl">
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="/assets/sobre/motorista-app.jpg"
                  alt="Motorista TechDriver com o app de corridas no painel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tec-dark/60 via-transparent to-transparent" />
                {/* Reflexo de luz que atravessa a imagem no hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
              </div>
            </div>

            {/* Cantos em destaque */}
            <div className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-tec-primary rounded-tl-2xl" />
            <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-violet-400 rounded-br-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
