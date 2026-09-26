import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Headphones, Phone, Smartphone, UserPlus, Wallet, Navigation, ShieldCheck, LayoutGrid } from 'lucide-react';
import DriverSectionTitle from './DriverSectionTitle';

type Category = 'cadastro' | 'planos' | 'dia-a-dia' | 'seguranca';

const categories: { id: Category | 'todas'; label: string; icon: React.ElementType }[] = [
  { id: 'todas', label: 'Todas', icon: LayoutGrid },
  { id: 'cadastro', label: 'Cadastro', icon: UserPlus },
  { id: 'planos', label: 'Planos e ganhos', icon: Wallet },
  { id: 'dia-a-dia', label: 'No dia a dia', icon: Navigation },
  { id: 'seguranca', label: 'Segurança', icon: ShieldCheck },
];

const faqs: { category: Category; q: string; a: string }[] = [
  {
    category: 'cadastro',
    q: 'Como faço meu cadastro?',
    a: 'Todo o cadastro é feito pelo App Motorista: baixe o app na loja do seu celular, preencha seus dados e envie os documentos por lá mesmo, sem filas e sem papelada.',
  },
  {
    category: 'cadastro',
    q: 'Quais documentos preciso para me cadastrar?',
    a: 'CNH e documentos do veículo, enviados e validados pelo próprio app. Requisitos específicos, como ano mínimo do veículo e observação EAR na CNH, são definidos pela operação da sua cidade.',
  },
  {
    category: 'cadastro',
    q: 'Quanto tempo leva a aprovação?',
    a: 'Depois do envio dos documentos, a central da sua cidade analisa o cadastro e entra em contato com você para concluir a aprovação.',
  },
  {
    category: 'cadastro',
    q: 'A TechDriver já opera na minha cidade?',
    a: 'A TechDriver é operada por franqueados locais. Baixe o App Motorista e informe sua cidade no cadastro para ver a operação e os planos disponíveis.',
  },
  {
    category: 'planos',
    q: 'Quanto custa cada plano?',
    a: 'Cada franquia define os planos que oferece e os valores de cada um. Depois de baixar o App Motorista, você consulta as condições da sua cidade antes de escolher.',
  },
  {
    category: 'planos',
    q: 'Posso trocar de plano depois?',
    a: 'Sim. Você pode mudar o modelo de cobrança conforme a sua rotina, respeitando as regras da franquia da sua cidade.',
  },
  {
    category: 'planos',
    q: 'Como recebo o valor das minhas corridas?',
    a: 'Pela Carteira Virtual do app: você acompanha os ganhos do dia, consulta o extrato e solicita o saque quando quiser.',
  },
  {
    category: 'planos',
    q: 'Como funciona a tarifa dinâmica?',
    a: 'Em áreas e horários de alta demanda, um multiplicador aumenta automaticamente o valor das corridas. O mapa de calor do app mostra onde a procura está maior.',
  },
  {
    category: 'dia-a-dia',
    q: 'Posso usar o Waze ou o Google Maps?',
    a: 'Sim. Ao aceitar uma corrida, o app abre a rota no Waze ou no Google Maps com um toque.',
  },
  {
    category: 'dia-a-dia',
    q: 'Posso escolher para onde quero ir?',
    a: 'Com a Preferência de Rota, você define um destino e passa a receber apenas corridas nesse sentido, ideal para voltar para casa rodando.',
  },
  {
    category: 'dia-a-dia',
    q: 'Como falo com o suporte durante o trabalho?',
    a: 'Pelo chat do próprio app, direto com a central de operações da sua cidade, para reportar qualquer ocorrência.',
  },
  {
    category: 'seguranca',
    q: 'O que acontece se eu estiver em uma situação de risco?',
    a: 'O botão de pânico dispara um alerta silencioso para a central e para seus contatos de emergência, com a sua localização. A operação é monitorada 24 horas.',
  },
];

const DriverFAQ: React.FC = () => {
  const [filter, setFilter] = useState<Category | 'todas'>('todas');
  const [open, setOpen] = useState<string | null>(faqs[0].q);

  const visible = filter === 'todas' ? faqs : faqs.filter(f => f.category === filter);

  const selectFilter = (id: Category | 'todas') => {
    setFilter(id);
    const first = id === 'todas' ? faqs[0] : faqs.find(f => f.category === id);
    setOpen(first?.q ?? null);
  };

  return (
    <section className="py-14 md:py-20 bg-[#0E1015] border-t border-white/[0.06] relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.07),transparent_65%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <DriverSectionTitle
          title="Tudo o que você precisa saber"
          highlight="antes de começar."
          subtitle="Reunimos as perguntas mais comuns de quem está chegando. Escolha um tema para encontrar sua resposta mais rápido."
          align="center"
        />

        {/* Filtro por tema */}
        <div role="tablist" aria-label="Temas das dúvidas" className="flex flex-wrap justify-center gap-2 mb-10 md:mb-12">
          {categories.map(c => {
            const active = filter === c.id;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => selectFilter(c.id)}
                className={`inline-flex items-center gap-2 h-11 px-4 md:px-5 rounded-full border text-sm font-medium transition-all duration-300 ${
                  active
                    ? 'bg-gradient-to-r from-emerald-400 to-tec-primary border-transparent text-[#04201A] shadow-[0_8px_24px_-10px_rgba(52,211,153,0.7)]'
                    : 'bg-white/[0.03] border-white/10 text-gray-300 hover:border-white/25 hover:text-white'
                }`}
              >
                <c.icon size={16} strokeWidth={1.75} />
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Perguntas */}
        <motion.div layout className="max-w-3xl mx-auto flex flex-col gap-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((f, i) => {
              const isOpen = open === f.q;
              const id = `faq-${faqs.indexOf(f)}`;
              return (
                <motion.div
                  key={f.q}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className={`rounded-2xl border transition-colors duration-300 ${
                    isOpen
                      ? 'bg-gradient-to-br from-emerald-400/[0.08] to-tec-primary/[0.04] border-emerald-400/30'
                      : 'bg-tec-dark/60 border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <button
                    type="button"
                    id={`${id}-q`}
                    onClick={() => setOpen(isOpen ? null : f.q)}
                    aria-expanded={isOpen}
                    aria-controls={`${id}-a`}
                    className="w-full flex items-center gap-4 md:gap-5 px-5 md:px-7 py-5 text-left"
                  >
                    <span className={`hidden sm:block font-display text-sm font-semibold tabular-nums transition-colors ${isOpen ? 'text-emerald-400' : 'text-gray-600'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`flex-1 font-display text-base md:text-lg font-medium transition-colors ${isOpen ? 'text-white' : 'text-gray-200'}`}>
                      {f.q}
                    </span>
                    <span className={`w-9 h-9 shrink-0 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'border-emerald-400/50 bg-emerald-400/10 text-emerald-400 rotate-45' : 'border-white/15 text-gray-400'
                    }`}>
                      <Plus size={16} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`${id}-a`}
                        role="region"
                        aria-labelledby={`${id}-q`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 md:px-7 sm:pl-[3.75rem] md:pl-[4.75rem] pb-6 pr-6 md:pr-20 text-[15px] md:text-base leading-relaxed text-gray-400">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Suporte */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mt-10 flex flex-col md:flex-row items-center gap-5 md:gap-6 p-6 md:p-7 rounded-3xl bg-[#111318] border border-white/[0.08] text-center md:text-left"
        >
          <div className="w-12 h-12 shrink-0 rounded-2xl bg-teal-400/15 text-teal-400 flex items-center justify-center">
            <Headphones size={22} strokeWidth={1.75} />
          </div>
          <div className="flex-1">
            <div className="font-display font-semibold text-white text-lg">Não encontrou sua resposta?</div>
            <p className="text-sm text-gray-400 mt-1">Fale com a nossa equipe ou baixe o app e tire suas dúvidas pelo chat.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 w-full md:w-auto">
            <a
              href="tel:+5517988063384"
              className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full border border-white/15 bg-white/[0.06] text-white text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              <Phone size={16} strokeWidth={1.75} />
              (17) 98806-3384
            </a>
            <button
              type="button"
              onClick={() => document.getElementById('baixar-app')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-gradient-to-r from-emerald-400 to-tec-primary text-[#04201A] text-sm font-semibold hover:brightness-110 transition-all"
            >
              <Smartphone size={16} strokeWidth={1.75} />
              Baixar o app
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DriverFAQ;
