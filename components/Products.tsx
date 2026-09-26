import React from 'react';
import { Smartphone, Store, TrendingUp, Map, Layers, Zap, ChevronRight, Building2, MapPin, ShieldCheck, Headphones } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SectionHeader from './SectionHeader';

const models = [
  {
    icon: Store,
    tag: 'Empreenda',
    title: 'Franquias TechDriver',
    description: 'O modelo ideal para quem quer empreender com uma marca já consolidada e suporte total.',
    items: [
      { icon: TrendingUp, text: 'Alta rentabilidade comprovada' },
      { icon: Map, text: 'Exclusividade de território' },
      { icon: Layers, text: 'Marketing nacional incluso' },
    ],
    cta: 'Quero Minha Franquia',
    href: '/franquias',
    // Paleta azul → violeta
    border: 'from-blue-500 via-indigo-500 to-violet-500',
    glow: 'bg-blue-600/30',
    iconBg: 'from-blue-500 to-violet-600',
    accent: 'text-blue-400',
    tagStyle: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
    button: 'from-blue-600 to-violet-600 hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]',
    hoverShadow: 'hover:shadow-[0_10px_40px_-10px_rgba(99,102,241,0.6)]',
  },
  {
    icon: Smartphone,
    tag: 'Sua marca',
    title: 'Plataforma White-Label',
    description: 'Tecnologia completa para você lançar o SEU aplicativo de transporte com a SUA marca.',
    items: [
      { icon: Zap, text: 'Apps Motorista e Passageiro (Android/iOS)' },
      { icon: Layers, text: 'Painel Administrativo Completo' },
      { icon: TrendingUp, text: 'Faturamento 100% seu' },
    ],
    cta: 'Contratar White-Label',
    href: '/white-label',
    // Paleta ciano (cor da marca) → verde
    border: 'from-tec-primary via-cyan-400 to-emerald-400',
    glow: 'bg-tec-primary/30',
    iconBg: 'from-tec-primary to-emerald-500',
    accent: 'text-tec-primary',
    tagStyle: 'bg-tec-primary/10 text-cyan-300 border-tec-primary/30',
    button: 'from-tec-primary to-emerald-500 hover:shadow-[0_0_25px_rgba(30,167,225,0.6)]',
    hoverShadow: 'hover:shadow-[0_10px_40px_-10px_rgba(30,167,225,0.6)]',
  },
  {
    icon: Building2,
    tag: 'Operação direta',
    title: 'Unidades Próprias',
    description: 'Cidades operadas diretamente pela TechDriver, com gestão da matriz e padrão de qualidade garantido.',
    items: [
      { icon: MapPin, text: 'Presença local nas principais cidades' },
      { icon: ShieldCheck, text: 'Gestão e qualidade da matriz' },
      { icon: Headphones, text: 'Atendimento próximo a motoristas e passageiros' },
    ],
    cta: 'Seja Motorista Parceiro',
    href: '/motorista',
    // Paleta laranja → rosa
    border: 'from-orange-500 via-amber-500 to-rose-500',
    glow: 'bg-orange-500/30',
    iconBg: 'from-orange-500 to-rose-500',
    accent: 'text-orange-400',
    tagStyle: 'bg-orange-500/10 text-orange-300 border-orange-500/30',
    button: 'from-orange-500 to-rose-500 hover:shadow-[0_0_25px_rgba(249,115,22,0.6)]',
    hoverShadow: 'hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.6)]',
  },
];

const Products: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="products" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Brilhos de fundo */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-tec-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <SectionHeader
          title="Nossos"
          highlight="Modelos de Negócio"
          subtitle="Escolha como você quer entrar no mercado de mobilidade. Seja um parceiro franqueado ou crie sua própria marca com nossa tecnologia."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {models.map((m) => (
            // Borda em gradiente: 1px de padding sobre fundo colorido
            <div
              key={m.title}
              className={`group relative p-px rounded-2xl md:last:col-span-2 md:last:w-1/2 md:last:mx-auto lg:last:col-span-1 lg:last:w-auto bg-gradient-to-br ${m.border} transition-all duration-300 hover:-translate-y-1 ${m.hoverShadow}`}
            >
              <div className="relative h-full flex flex-col bg-zinc-950/95 rounded-2xl p-6 overflow-hidden">
                <div className={`absolute -top-16 -right-16 w-40 h-40 ${m.glow} rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r ${m.border} rounded-full`} />

                <div className="relative flex items-center justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${m.iconBg} text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <m.icon size={22} />
                  </div>
                  <span className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full border ${m.tagStyle}`}>
                    {m.tag}
                  </span>
                </div>

                <h3 className="relative text-2xl font-bold text-white mb-2">{m.title}</h3>
                <p className="relative text-sm text-gray-400 mb-5">{m.description}</p>

                <ul className="relative space-y-2.5 mb-6 flex-1">
                  {m.items.map((item) => (
                    <li key={item.text} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <item.icon className={`${m.accent} w-4 h-4 shrink-0`} />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate(m.href)}
                  className={`relative w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r ${m.button} text-white text-sm font-semibold transition-all duration-300`}
                >
                  {m.cta}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
