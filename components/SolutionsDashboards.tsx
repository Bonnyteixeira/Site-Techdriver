import React from 'react';
import { motion } from 'framer-motion';
import { Map, PieChart, Ticket, Percent, LayoutDashboard } from 'lucide-react';
import SectionHeader from './SectionHeader';
import DashboardMockup from './DashboardMockup';

// Posição do mouse no card, usada pelo brilho que segue o cursor
const trackMouse = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
};

// Card com borda que acende a partir do cursor
const Tile: React.FC<{ accent: string; className?: string; delay?: number; children: React.ReactNode }> = ({ accent, className = '', delay = 0, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay }}
    onMouseMove={trackMouse}
    style={{ '--accent': accent } as React.CSSProperties}
    className={`group relative p-px rounded-3xl bg-white/[0.07] hover:shadow-[0_20px_60px_-20px_rgba(var(--accent),0.6)] transition-shadow duration-500 ${className}`}
  >
    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(400px_circle_at_var(--x,50%)_var(--y,50%),rgba(var(--accent),0.9),transparent_45%)]" />
    <div className="relative h-full rounded-3xl bg-zinc-950/95 backdrop-blur-xl overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(350px_circle_at_var(--x,50%)_var(--y,50%),rgba(var(--accent),0.10),transparent_60%)]" />
      {children}
    </div>
  </motion.div>
);

// Mini visual: pontos de um mapa com focos de demanda pulsando
const HeatmapVisual: React.FC = () => {
  const hotspots = [
    { top: '30%', left: '28%', size: 'w-12 h-12', color: 'bg-rose-500/50' },
    { top: '55%', left: '62%', size: 'w-16 h-16', color: 'bg-orange-500/50' },
    { top: '22%', left: '72%', size: 'w-8 h-8', color: 'bg-amber-400/50' },
  ];
  return (
    <div className="relative h-28 rounded-2xl border border-white/10 overflow-hidden bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:12px_12px]">
      {hotspots.map((h, i) => (
        <span key={i} className="absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center" style={{ top: h.top, left: h.left }}>
          <span className={`absolute ${h.size} rounded-full ${h.color} blur-md animate-pulse`} style={{ animationDelay: `${i * 0.5}s` }} />
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75 animate-ping" style={{ animationDelay: `${i * 0.4}s` }} />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-400" />
          </span>
        </span>
      ))}
      {/* Rota tracejada */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
        <motion.path
          d="M20 80 C 60 70, 70 30, 110 40 S 170 60, 185 20"
          fill="none"
          stroke="url(#routeGradient)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id="routeGradient" x1="0" x2="1">
            <stop offset="0%" stopColor="#1EA7E1" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// Mini visual: barras que crescem ao entrar na tela
const BarsVisual: React.FC = () => {
  const bars = [40, 65, 50, 80, 60, 95, 75];
  return (
    <div className="relative h-28 rounded-2xl border border-white/10 px-4 pt-4 flex items-end gap-2 bg-[linear-gradient(to_top,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:100%_25%]">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 + i * 0.08, ease: 'easeOut' }}
          className="flex-1 rounded-t-md bg-gradient-to-t from-violet-600 to-fuchsia-400 opacity-80 group-hover:opacity-100 transition-opacity"
        />
      ))}
    </div>
  );
};

// Mini visual: cupom com recorte e brilho
const CouponVisual: React.FC = () => (
  <div className="relative h-28 flex items-center justify-center">
    <div className="relative w-full max-w-[220px] h-20 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-400/10 border border-dashed border-emerald-400/50 flex items-center overflow-hidden group-hover:-rotate-2 transition-transform duration-500">
      <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-zinc-950 border border-emerald-400/40" />
      <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-zinc-950 border border-emerald-400/40" />
      <div className="pl-7 pr-4 flex items-center gap-3 w-full">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-300 flex items-center justify-center text-white shadow-lg">
          <Percent size={18} />
        </div>
        <div className="flex-1 space-y-1.5">
          <div className="h-2 w-3/4 rounded-full bg-emerald-300/60" />
          <div className="h-2 w-1/2 rounded-full bg-white/20" />
        </div>
      </div>
      {/* Brilho que atravessa o cupom */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
    </div>
  </div>
);

const features = [
  { icon: Map, title: 'Mapa de calor em tempo real', desc: 'Veja quais áreas da cidade têm mais demanda e em quais horários de pico.', accent: '244,63,94', gradient: 'from-rose-500 to-orange-400', visual: <HeatmapVisual /> },
  { icon: PieChart, title: 'Relatórios financeiros detalhados', desc: 'Faturamento em tempo real e performance individual de cada motorista.', accent: '139,92,246', gradient: 'from-violet-500 to-fuchsia-400', visual: <BarsVisual /> },
  { icon: Ticket, title: 'Gestão de cupons e promoções', desc: 'Crie campanhas para atrair e fidelizar passageiros.', accent: '16,185,129', gradient: 'from-emerald-500 to-teal-300', visual: <CouponVisual /> },
];

const SolutionsDashboards: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-tec-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <SectionHeader
          title="Dashboards"
          highlight="Inteligentes"
          subtitle="Tenha controle total da sua operação. Saiba quais áreas da cidade têm mais demanda, horários de pico, faturamento em tempo real e performance individual de cada motorista."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-5 max-w-6xl mx-auto">
          {/* Card principal: painel dentro de uma janela de aplicativo */}
          <Tile accent="30,167,225" className="lg:col-span-2 lg:row-span-3">
            <div className="relative h-full flex flex-col p-5">
              {/* Barra da janela */}
              <div className="relative flex items-center gap-3 mb-4">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                </div>
                <div className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-gray-400">
                  <LayoutDashboard className="w-3.5 h-3.5 text-tec-primary" />
                  Painel TechDriver
                </div>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
              </div>

              {/* Dashboard em português */}
              <div className="relative flex-1 flex flex-col">
                <DashboardMockup />
              </div>
            </div>
          </Tile>

          {/* Recursos */}
          {features.map((f, i) => (
            <Tile key={f.title} accent={f.accent} delay={0.15 + i * 0.12}>
              <div className="relative p-5 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 shrink-0 rounded-lg bg-gradient-to-br ${f.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <f.icon size={16} />
                  </div>
                  <h4 className="text-white font-semibold leading-snug">{f.title}</h4>
                </div>
                {f.visual}
                <p className="text-xs text-gray-400 leading-relaxed mt-3">{f.desc}</p>
              </div>
            </Tile>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsDashboards;
