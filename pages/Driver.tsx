import React from 'react';
import SocialProof from '../components/SocialProof';
import Contact from '../components/Contact';
import Button from '../components/Button';
import { Car, Calendar, Clock, Percent, Zap, Check } from 'lucide-react';

const plans = [
  {
    title: "Assinatura Mensal",
    subtitle: "Lucro Máximo",
    description: "Pague um valor fixo por mês e fique com 100% do valor de todas as suas corridas.",
    icon: Calendar,
    color: "text-blue-500",
    border: "group-hover:border-blue-500",
    shadow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]", // Aumentado para 0.6
    bg: "bg-blue-500/10",
    features: ["0% de taxa por corrida", "Pagamento único mensal", "Ideal para Full-Time", "Maior lucratividade"]
  },
  {
    title: "Diária Avulsa",
    subtitle: "Liberdade Total",
    description: "Só vai rodar hoje? Pague apenas a taxa do dia e garanta 100% do lucro nas próximas 24h.",
    icon: Clock,
    color: "text-yellow-500",
    border: "group-hover:border-yellow-500",
    shadow: "hover:shadow-[0_0_30px_rgba(234,179,8,0.6)]", // Aumentado para 0.6
    bg: "bg-yellow-500/10",
    features: ["Sem compromisso mensal", "Pague só quando usar", "100% do valor das corridas", "Liberdade de agenda"]
  },
  {
    title: "Diária Reduzida + %",
    subtitle: "Menor Risco",
    description: "Pague um valor simbólico ao iniciar o dia e uma pequena taxa percentual sobre as corridas.",
    icon: Percent,
    color: "text-green-500",
    border: "group-hover:border-green-500",
    shadow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]", // Aumentado para 0.6
    bg: "bg-green-500/10",
    features: ["Baixo custo inicial", "Taxa percentual justa", "Ideal para iniciantes", "Flexibilidade diária"]
  },
  {
    title: "Modelo Híbrido",
    subtitle: "O Melhor dos Mundos",
    description: "Uma mensalidade reduzida combinada com taxas menores por corrida realizada.",
    icon: Zap,
    color: "text-purple-500",
    border: "group-hover:border-purple-500",
    shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]", // Aumentado para 0.6
    bg: "bg-purple-500/10",
    features: ["Mensalidade baixa", "Taxas dinâmicas", "Equilíbrio de custos", "Perfil misto"]
  }
];

const Driver: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-tec-dark">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12">
         <div className="flex items-center gap-4 mb-6">
          <div className="bg-green-600/20 p-3 rounded-xl">
             <Car className="text-green-500 w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white">Para Motoristas</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Dirija com a TechDriver e assuma o controle dos seus ganhos.</h2>
            <p className="text-gray-400 text-lg mb-8">
              Oferecemos as melhores taxas do mercado, segurança embarcada no aplicativo e suporte humanizado. Aqui você não é apenas um número, é um parceiro de negócio.
            </p>
            <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-white"><span className="w-2 h-2 bg-tec-primary rounded-full"></span> Clube de benefícios exclusivo (Postos e Oficinas)</li>
                <li className="flex items-center gap-3 text-white"><span className="w-2 h-2 bg-tec-primary rounded-full"></span> Botão de pânico e monitoramento 24h</li>
                <li className="flex items-center gap-3 text-white"><span className="w-2 h-2 bg-tec-primary rounded-full"></span> Recebimento rápido e transparente</li>
            </ul>
            <Button size="lg">Baixar App Motorista</Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent rounded-2xl transform rotate-3"></div>
             <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" className="relative rounded-2xl border border-zinc-800 shadow-2xl z-10" alt="Motorista" />
          </div>
        </div>
      </div>

      {/* Planos Section */}
      <section className="py-24 bg-black border-y border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-tec-primary font-bold tracking-widest uppercase text-sm">Flexibilidade Total</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2 mb-6">
              Escolha o plano que cabe no seu bolso
            </h2>
            <p className="text-gray-400">
              Na TechDriver, entendemos que cada motorista tem uma estratégia diferente. Por isso, criamos múltiplos modelos de cobrança para você maximizar seus lucros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-zinc-900 border border-zinc-800 p-6 rounded-2xl group hover:-translate-y-2 transition-all duration-300 ${plan.border} ${plan.shadow}`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${plan.bg} ${plan.color}`}>
                  <plan.icon size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{plan.title}</h3>
                <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${plan.color}`}>{plan.subtitle}</p>
                <p className="text-gray-400 text-sm mb-6 min-h-[60px]">{plan.description}</p>
                
                <ul className="space-y-3 pt-6 border-t border-zinc-800">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className={`w-4 h-4 mt-0.5 ${plan.color}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              * A disponibilidade dos planos pode variar de acordo com a cidade e o franqueado local.
            </p>
          </div>
        </div>
      </section>

      <SocialProof />
      <Contact />
    </div>
  );
};

export default Driver;