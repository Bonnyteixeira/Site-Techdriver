import React from 'react';
import { MapPin, Clock, BarChart3, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

type City = { name: string; uf: string; tag?: string };

const columns = [
  {
    icon: MapPin,
    title: 'Em Operação',
    status: 'Funcionamento Pleno',
    marker: 'check',
    cities: [
      { name: 'Catanduva', uf: 'SP', tag: 'Matriz' },
      { name: 'São José do Rio Preto', uf: 'SP' },
      { name: 'Ribeirão Preto', uf: 'SP' },
      { name: 'Uberlândia', uf: 'MG' },
      { name: 'Londrina', uf: 'PR' },
      { name: 'Maringá', uf: 'PR' },
    ] as City[],
    // Paleta verde
    border: 'from-emerald-500 via-green-400 to-teal-400',
    gradient: 'from-emerald-500 to-teal-400',
    glow: 'bg-emerald-500/25',
    text: 'text-emerald-400',
    dot: 'bg-emerald-400',
    chip: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    rowHover: 'hover:bg-emerald-500/10',
    shadow: 'hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.55)]',
  },
  {
    icon: Clock,
    title: 'Próximas Inaugurações',
    status: 'Fase de Setup',
    marker: 'pulse',
    cities: [
      { name: 'Campinas', uf: 'SP' },
      { name: 'Sorocaba', uf: 'SP' },
      { name: 'Goiânia', uf: 'GO' },
      { name: 'Florianópolis', uf: 'SC' },
      { name: 'Balneário Camboriú', uf: 'SC' },
    ] as City[],
    footer: 'Previsão: Próximos 60 dias',
    // Paleta âmbar
    border: 'from-amber-500 via-yellow-400 to-orange-500',
    gradient: 'from-amber-500 to-orange-500',
    glow: 'bg-amber-500/25',
    text: 'text-amber-400',
    dot: 'bg-amber-400',
    chip: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    rowHover: 'hover:bg-amber-500/10',
    shadow: 'hover:shadow-[0_20px_50px_-15px_rgba(245,158,11,0.55)]',
  },
  {
    icon: BarChart3,
    title: 'Alta Demanda',
    status: 'Negociações em Curso',
    marker: 'ring',
    description: 'Territórios com alto volume de interessados. Se você é de uma dessas regiões, corra para garantir a exclusividade.',
    cities: [
      { name: 'Belo Horizonte', uf: 'MG' },
      { name: 'Curitiba', uf: 'PR' },
      { name: 'Salvador', uf: 'BA' },
      { name: 'Recife', uf: 'PE' },
      { name: 'Vitória', uf: 'ES' },
      { name: 'Porto Alegre', uf: 'RS' },
    ] as City[],
    // Paleta azul → violeta
    border: 'from-blue-500 via-indigo-500 to-violet-500',
    gradient: 'from-blue-500 to-violet-500',
    glow: 'bg-blue-600/25',
    text: 'text-blue-400',
    dot: 'bg-blue-400',
    chip: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
    rowHover: 'hover:bg-blue-500/10',
    shadow: 'hover:shadow-[0_20px_50px_-15px_rgba(99,102,241,0.55)]',
  },
];

const Presence: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      {/* Brilhos de fundo */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <SectionHeader
          title="Expansão"
          highlight="Acelerada"
          subtitle="Estamos pintando o mapa do Brasil de azul. Veja onde a TechDriver já é realidade e onde estaremos em breve."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {columns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`group relative p-px rounded-2xl bg-gradient-to-br ${col.border} transition-all duration-300 hover:-translate-y-1 ${col.shadow}`}
            >
              <div className="relative h-full flex flex-col rounded-2xl bg-zinc-950/95 backdrop-blur-xl p-6 overflow-hidden">
                <div className={`absolute -top-16 -right-16 w-44 h-44 ${col.glow} rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Cabeçalho */}
                <div className="relative flex items-center gap-3 mb-5">
                  <div className="relative">
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${col.gradient} blur-lg opacity-40 group-hover:opacity-80 transition-opacity duration-500`} />
                    <div className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${col.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      <col.icon size={20} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white leading-tight">{col.title}</h3>
                    <p className={`${col.text} text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 mt-0.5`}>
                      <span className="relative flex h-1.5 w-1.5">
                        <span className={`absolute inline-flex h-full w-full rounded-full ${col.dot} opacity-75 animate-ping`} />
                        <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${col.dot}`} />
                      </span>
                      {col.status}
                    </p>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full border text-xs font-bold ${col.chip}`}>
                    {col.cities.length}
                  </span>
                </div>

                {col.description && (
                  <p className="relative text-sm text-gray-400 mb-4 leading-relaxed">{col.description}</p>
                )}

                {/* Cidades */}
                <ul className="relative space-y-1 flex-1">
                  {col.cities.map((city) => (
                    <li
                      key={city.name}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-300 ${col.rowHover} hover:text-white transition-colors`}
                    >
                      {col.marker === 'check' && (
                        <span className={`w-4 h-4 rounded-full bg-gradient-to-br ${col.gradient} flex items-center justify-center shrink-0`}>
                          <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                        </span>
                      )}
                      {col.marker === 'pulse' && (
                        <span className={`w-2 h-2 mx-1 rounded-full ${col.dot} animate-pulse shrink-0`} />
                      )}
                      {col.marker === 'ring' && (
                        <span className={`w-2 h-2 mx-1 rounded-full border ${col.text} border-current shrink-0`} />
                      )}
                      <span className="flex-1 truncate">{city.name}</span>
                      {city.tag && (
                        <span className={`px-2 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wider ${col.chip}`}>
                          {city.tag}
                        </span>
                      )}
                      <span className="text-[11px] font-mono text-zinc-500">{city.uf}</span>
                    </li>
                  ))}
                </ul>

                {col.footer && (
                  <div className="relative mt-4 pt-4 border-t border-dashed border-white/10 flex items-center justify-center gap-2 text-sm text-gray-400">
                    <Clock className={`w-4 h-4 ${col.text}`} />
                    {col.footer}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Presence;
