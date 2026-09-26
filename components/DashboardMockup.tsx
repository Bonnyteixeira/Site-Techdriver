import React from 'react';
import { motion } from 'framer-motion';
import { Car, Users, Wallet, Star, TrendingUp, LayoutDashboard, Map, MapPin, PieChart, Settings, Ticket } from 'lucide-react';

// Ilustração de um painel em português. Os valores são exemplos, não dados reais.
const kpis = [
  { icon: Car, label: 'Corridas hoje', value: '1.284', trend: '+12%', color: 'from-tec-primary to-cyan-300' },
  { icon: Users, label: 'Motoristas online', value: '326', trend: '+8%', color: 'from-violet-500 to-fuchsia-400' },
  { icon: Wallet, label: 'Faturamento', value: 'R$ 38,9 mil', trend: '+15%', color: 'from-emerald-500 to-teal-300' },
  { icon: Star, label: 'Avaliação média', value: '4,9', trend: '+0,1', color: 'from-amber-500 to-yellow-300' },
];

const hours = ['06h', '09h', '12h', '15h', '18h', '21h'];

const payments = [
  { label: 'PIX', pct: 45, color: '#1EA7E1' },
  { label: 'Cartão', pct: 30, color: '#8b5cf6' },
  { label: 'Carteira', pct: 15, color: '#10b981' },
  { label: 'Dinheiro', pct: 10, color: '#f59e0b' },
];

const drivers = [
  { initials: 'AS', name: 'Ana S.', rides: 42 },
  { initials: 'CM', name: 'Carlos M.', rides: 38 },
  { initials: 'JP', name: 'João P.', rides: 35 },
];

const rides = [
  { from: 'Centro', to: 'Aeroporto', eta: '12 min', status: 'Em viagem', style: 'bg-tec-primary/15 text-tec-primary' },
  { from: 'Jardim América', to: 'Shopping', eta: '4 min', status: 'A caminho', style: 'bg-amber-500/15 text-amber-400' },
  { from: 'Rodoviária', to: 'Hospital', eta: '8 min', status: 'Em viagem', style: 'bg-tec-primary/15 text-tec-primary' },
];

const sidebar = [LayoutDashboard, Map, PieChart, Ticket, Settings];

// Donut de formas de pagamento
const Donut: React.FC = () => {
  const radius = 15.9;
  let offset = 25;
  return (
    <svg viewBox="0 0 42 42" className="w-20 h-20 -rotate-90 shrink-0">
      <circle cx="21" cy="21" r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
      {payments.map((p) => {
        const dash = `${p.pct} ${100 - p.pct}`;
        const el = (
          <motion.circle
            key={p.label}
            cx="21" cy="21" r={radius} fill="none"
            stroke={p.color} strokeWidth="5"
            strokeDasharray={dash}
            strokeDashoffset={offset}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
        );
        offset -= p.pct;
        return el;
      })}
    </svg>
  );
};

const DashboardMockup: React.FC = () => {
  return (
    <div className="relative flex-1 min-h-[480px] flex rounded-2xl border border-white/10 bg-[#0d0f14] overflow-hidden text-left select-none">
      {/* Barra lateral */}
      <div className="hidden sm:flex flex-col items-center gap-3 py-4 px-2.5 border-r border-white/10 bg-white/[0.02]">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-tec-primary to-violet-500 mb-2" />
        {sidebar.map((Icon, i) => (
          <div key={i} className={`w-7 h-7 rounded-lg flex items-center justify-center ${i === 0 ? 'bg-tec-primary/20 text-tec-primary' : 'text-zinc-500'}`}>
            <Icon size={14} />
          </div>
        ))}
      </div>

      <div className="flex-1 min-w-0 p-4 flex flex-col gap-3">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-white text-sm font-semibold">Visão Geral</p>
            <p className="text-[10px] text-zinc-500">Operação em tempo real</p>
          </div>
          <div className="flex gap-1 text-[10px]">
            {['Hoje', '7 dias', '30 dias'].map((p, i) => (
              <span key={p} className={`px-2 py-1 rounded-md ${i === 0 ? 'bg-tec-primary text-white' : 'bg-white/[0.05] text-zinc-400'}`}>{p}</span>
            ))}
          </div>
        </div>

        {/* Indicadores */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-2">
          {kpis.map((k, i) => (
            <motion.div
              key={k.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${k.color} flex items-center justify-center text-white`}>
                  <k.icon size={12} />
                </div>
                <span className="text-[9px] font-semibold text-emerald-400 flex items-center gap-0.5">
                  <TrendingUp size={9} /> {k.trend}
                </span>
              </div>
              <p className="text-white text-sm font-bold leading-tight">{k.value}</p>
              <p className="text-[9px] text-zinc-500">{k.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Gráfico de corridas por hora: cresce para ocupar a altura disponível */}
        <div className="flex-1 min-h-[140px] flex flex-col p-3 rounded-xl bg-white/[0.03] border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-semibold text-gray-200">Corridas por hora</p>
            <span className="flex items-center gap-1 text-[9px] text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-tec-primary" /> Hoje
              <span className="w-2 h-2 rounded-full bg-violet-500 ml-2" /> Ontem
            </span>
          </div>
          <svg viewBox="0 0 300 90" className="w-full flex-1 min-h-[96px]" preserveAspectRatio="none">
            <defs>
              <linearGradient id="areaToday" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#1EA7E1" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#1EA7E1" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[22, 45, 68].map((y) => (
              <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="rgba(255,255,255,0.06)" vectorEffect="non-scaling-stroke" />
            ))}
            <motion.path
              d="M0 70 C 30 65, 45 40, 70 45 S 110 60, 130 42 S 170 15, 195 25 S 240 55, 260 35 S 290 20, 300 22"
              fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
            <motion.path
              d="M0 75 C 25 72, 40 35, 65 38 S 105 55, 125 35 S 165 8, 190 15 S 235 45, 255 28 S 285 10, 300 12 L 300 90 L 0 90 Z"
              fill="url(#areaToday)"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.2 }}
            />
            <motion.path
              d="M0 75 C 25 72, 40 35, 65 38 S 105 55, 125 35 S 165 8, 190 15 S 235 45, 255 28 S 285 10, 300 12"
              fill="none" stroke="#1EA7E1" strokeWidth="2.5" vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </svg>
          <div className="flex justify-between text-[9px] text-zinc-500 mt-1">
            {hours.map((h) => <span key={h}>{h}</span>)}
          </div>
        </div>

        {/* Pagamentos e ranking */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
            <p className="text-[11px] font-semibold text-gray-200 mb-2">Formas de pagamento</p>
            <div className="flex items-center gap-3">
              <Donut />
              <ul className="space-y-1 text-[10px] flex-1">
                {payments.map((p) => (
                  <li key={p.label} className="flex items-center justify-between text-zinc-400">
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />{p.label}</span>
                    <span className="text-gray-200 font-medium">{p.pct}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
            <p className="text-[11px] font-semibold text-gray-200 mb-2">Destaques do dia</p>
            <ul className="space-y-1.5">
              {drivers.map((d, i) => (
                <li key={d.name} className="flex items-center gap-2 text-[10px]">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-tec-primary to-violet-500 flex items-center justify-center text-white text-[9px] font-bold">{d.initials}</span>
                  <span className="flex-1 text-gray-300">{d.name}</span>
                  <div className="w-16 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-tec-primary to-violet-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${100 - i * 12}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                    />
                  </div>
                  <span className="text-zinc-400 w-12 text-right">{d.rides} corridas</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Corridas em andamento */}
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-semibold text-gray-200">Corridas em andamento</p>
            <span className="flex items-center gap-1.5 text-[9px] text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Ao vivo
            </span>
          </div>
          <ul className="divide-y divide-white/5">
            {rides.map((r, i) => (
              <motion.li
                key={r.from}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-2 py-1.5 text-[10px]"
              >
                <MapPin size={11} className="text-tec-primary shrink-0" />
                <span className="flex-1 min-w-0 truncate text-gray-300">
                  {r.from} <span className="text-zinc-600">→</span> {r.to}
                </span>
                <span className="text-zinc-500 hidden sm:inline">{r.eta}</span>
                <span className={`px-1.5 py-0.5 rounded-md text-[9px] font-semibold ${r.style}`}>{r.status}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <p className="text-[9px] text-zinc-600 text-right">Dados ilustrativos</p>
      </div>
    </div>
  );
};

export default DashboardMockup;
