import React from 'react';
import { TrendingUp, DollarSign, Smartphone, Zap, Map, ShieldCheck } from 'lucide-react';

const benefits = [
  { icon: DollarSign, title: "Baixo Investimento", desc: "Modelo asset-light sem necessidade de ponto comercial físico." },
  { icon: TrendingUp, title: "Alta Lucratividade", desc: "Margens de lucro líquida entre 25% e 35% sobre o faturamento." },
  { icon: Zap, title: "Retorno Rápido", desc: "Payback estimado entre 6 a 12 meses de operação." },
  { icon: Smartphone, title: "100% Digital", desc: "Gestão completa pelo computador ou celular, de onde estiver." },
  { icon: Map, title: "Exclusividade", desc: "Território exclusivo garantido em contrato para sua proteção." },
  { icon: ShieldCheck, title: "Modelo Escalável", desc: "Cresça sua frota sem aumentar seus custos fixos proporcionalmente." }
];

const FranchiseBenefits: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-900 border-y border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Vantagens Exclusivas</h2>
           <p className="text-gray-400">Por que a TechDriver é a melhor escolha de investimento.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <div key={idx} className="bg-black/40 border border-zinc-800 p-8 rounded-2xl hover:border-tec-gold/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300 group">
              <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-tec-gold group-hover:text-black transition-colors text-tec-gold">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FranchiseBenefits;