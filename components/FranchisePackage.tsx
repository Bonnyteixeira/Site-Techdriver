import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, LayoutDashboard, PieChart, Megaphone, Scale, GraduationCap, Check } from 'lucide-react';
import SectionHeader from './SectionHeader';

const items = [
  { icon: Smartphone, title: "Apps Android & iOS", desc: "Aplicativos nativos para motoristas e passageiros.", gradient: 'from-tec-primary to-cyan-300' },
  { icon: LayoutDashboard, title: "Painel Administrativo", desc: "Controle total da operação em tempo real.", gradient: 'from-violet-500 to-fuchsia-400' },
  { icon: PieChart, title: "Gestão Financeira", desc: "Split de pagamentos e relatórios automáticos.", gradient: 'from-emerald-500 to-teal-300' },
  { icon: Megaphone, title: "Marketing Nacional", desc: "Artes, campanhas e estratégias de tráfego.", gradient: 'from-rose-500 to-orange-300' },
  { icon: Scale, title: "Suporte Jurídico", desc: "Modelos de contratos e adequação à LGPD.", gradient: 'from-blue-500 to-sky-300' },
  { icon: GraduationCap, title: "Universidade TechDriver", desc: "Treinamento completo para você e sua equipe.", gradient: 'from-tec-gold to-amber-300' }
];

const FranchisePackage: React.FC = () => {
  return (
    <section className="py-24 bg-tec-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="container mx-auto px-6 relative">
        <SectionHeader
          title="O Que Está"
          highlight="Incluso"
          subtitle="Entregamos a estrutura completa para o seu sucesso."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="group relative flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute -bottom-12 -right-12 w-32 h-32 rounded-full blur-3xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              <div className={`relative w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <item.icon size={20} />
              </div>
              <div className="relative flex-1">
                <h4 className="text-base font-semibold text-white mb-1 flex items-center gap-2">
                  {item.title}
                  <Check className="w-4 h-4 text-emerald-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FranchisePackage;
