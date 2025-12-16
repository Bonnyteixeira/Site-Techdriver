import React from 'react';
import { Smartphone, LayoutDashboard, PieChart, Megaphone, Scale, GraduationCap } from 'lucide-react';

const items = [
  { icon: Smartphone, title: "Apps Android & iOS", desc: "Aplicativos nativos para motoristas e passageiros." },
  { icon: LayoutDashboard, title: "Painel Administrativo", desc: "Controle total da operação em tempo real." },
  { icon: PieChart, title: "Gestão Financeira", desc: "Split de pagamentos e relatórios automáticos." },
  { icon: Megaphone, title: "Marketing Nacional", desc: "Artes, campanhas e estratégias de tráfego." },
  { icon: Scale, title: "Suporte Jurídico", desc: "Modelos de contratos e adequação à LGPD." },
  { icon: GraduationCap, title: "Universidade TechDriver", desc: "Treinamento completo para você e sua equipe." }
];

const FranchisePackage: React.FC = () => {
  return (
    <section className="py-24 bg-tec-dark">
      <div className="container mx-auto px-6">
         <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">O Que Está Incluso</h2>
           <p className="text-gray-400">Entregamos a estrutura completa para o seu sucesso.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {items.map((item, idx) => (
             <div key={idx} className="flex items-start gap-4 p-6 bg-zinc-900/30 rounded-xl border border-zinc-800 hover:border-tec-primary/50 transition-colors">
                <div className="text-tec-primary shrink-0">
                   <item.icon size={32} />
                </div>
                <div>
                   <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                   <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default FranchisePackage;