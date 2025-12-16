import React from 'react';

const steps = [
  { num: "01", title: "Análise de Território", desc: "Estudo de viabilidade e potencial da região." },
  { num: "02", title: "Assinatura do Contrato", desc: "Formalização e pagamento da taxa de franquia." },
  { num: "03", title: "Treinamento & Setup", desc: "Imersão na Universidade TechDriver e configuração dos apps." },
  { num: "04", title: "Lançamento Oficial", desc: "Início das operações e campanhas de marketing." }
];

const FranchiseTimeline: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-900 to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-16">Jornada do Franqueado</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
           <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-800 -translate-y-1/2 z-0" />
           
           {steps.map((step, idx) => (
             <div key={idx} className="relative z-10 bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(30,167,225,0.3)] hover:border-tec-primary">
               <div className="w-12 h-12 bg-tec-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 shadow-lg shadow-tec-primary/30">
                 {step.num}
               </div>
               <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
               <p className="text-gray-400 text-sm">{step.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default FranchiseTimeline;