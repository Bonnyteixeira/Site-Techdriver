import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Car, LayoutDashboard, Wallet, Check } from 'lucide-react';
import SectionHeader from './SectionHeader';

// Os três pilares do sistema, entregues com a marca do cliente (mesmo conteúdo da página Sistema)
const pillars = [
  {
    icon: Smartphone,
    title: 'App Passageiro',
    desc: 'Interface limpa, chamadas rápidas, múltiplas paradas, carteira digital e segurança com compartilhamento de rota.',
    items: ['UX/UI Premium', 'Cupons & Cashback', 'Pagamento In-App'],
    gradient: 'from-tec-primary to-cyan-300',
    border: 'from-tec-primary via-cyan-400 to-tec-primary/40',
    glow: 'bg-tec-primary/25',
    check: 'text-tec-primary',
  },
  {
    icon: Car,
    title: 'App Motorista',
    desc: 'Ferramenta de trabalho robusta. Mapa de calor, gestão de ganhos, botão de pânico e chat integrado.',
    items: ['Tarifa Dinâmica', 'Destino Definido', 'Taxa Zero (Configurável)'],
    gradient: 'from-violet-500 to-fuchsia-400',
    border: 'from-violet-500 via-fuchsia-400 to-violet-500/40',
    glow: 'bg-violet-500/25',
    check: 'text-violet-400',
  },
  {
    icon: LayoutDashboard,
    title: 'Painel Master',
    desc: 'O cérebro da operação. Controle financeiro, gestão de frota, configuração de tarifas e suporte em tempo real.',
    items: ['Business Intelligence', 'Controle de Acessos', 'Auditoria Completa'],
    gradient: 'from-emerald-500 to-teal-300',
    border: 'from-emerald-500 via-teal-400 to-emerald-500/40',
    glow: 'bg-emerald-500/25',
    check: 'text-emerald-400',
  },
];

const payments = ['PIX Automático', 'Gateway Integrado', 'Cartão de Crédito', 'Pré-pago (Wallet)'];

const WhiteLabelPackage: React.FC = () => {
  return (
    <section className="py-24 bg-tec-dark relative overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-tec-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <SectionHeader
          title="Tudo com a"
          highlight="sua marca."
          subtitle="Aplicativos e painel personalizados com a sua identidade, todos sincronizados em tempo real."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`group relative p-px rounded-2xl bg-gradient-to-br ${p.border} transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="relative h-full flex flex-col rounded-2xl bg-zinc-950/95 backdrop-blur-xl p-6 overflow-hidden">
                <div className={`absolute -top-16 -right-16 w-44 h-44 ${p.glow} rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative mb-5 w-12 h-12">
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${p.gradient} blur-lg opacity-40 group-hover:opacity-80 transition-opacity duration-500`} />
                  <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <p.icon size={22} />
                  </div>
                </div>

                <h3 className="relative text-xl font-semibold text-white mb-2 tracking-tight">{p.title}</h3>
                <p className="relative text-gray-400 text-sm leading-relaxed mb-5 flex-1">{p.desc}</p>

                <ul className="relative space-y-2 pt-4 border-t border-white/10">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className={`w-4 h-4 ${p.check} shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Split de pagamento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative max-w-6xl mx-auto mt-5 p-px rounded-2xl bg-gradient-to-r from-amber-500/70 via-yellow-400/40 to-amber-500/70"
        >
          <div className="relative rounded-2xl bg-zinc-950/95 backdrop-blur-xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center gap-6 overflow-hidden">
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-amber-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/25 transition-colors duration-500" />

            <div className="relative flex items-start gap-4 lg:w-3/5">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-300 flex items-center justify-center text-black shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Wallet size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Split de Pagamento Automático</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Nossa tecnologia financeira separa automaticamente o valor da corrida. A taxa da plataforma vai para sua conta e o valor do motorista vai direto para a conta dele, sem intermediários e sem bitributação.
                </p>
              </div>
            </div>

            <div className="relative grid grid-cols-2 gap-2 lg:w-2/5">
              {payments.map((pay) => (
                <div key={pay} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/[0.03] text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  {pay}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhiteLabelPackage;
