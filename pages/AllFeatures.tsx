import React, { useState } from 'react';
import { 
  Smartphone, Map, Shield, CreditCard, MessageSquare, Star, 
  Navigation, Zap, History, Bell, AlertTriangle, 
  LayoutDashboard, PieChart, Globe, Settings, Users,
  CheckCircle2, ChevronRight
} from 'lucide-react';
import Button from '../components/Button';
import Contact from '../components/Contact';

const AllFeatures: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'passenger' | 'driver' | 'admin'>('passenger');

  const features = {
    passenger: [
      { icon: Map, title: "Rastreamento em Tempo Real", desc: "Acompanhe o deslocamento do motorista no mapa desde o aceite até o destino final." },
      { icon: CreditCard, title: "Múltiplos Pagamentos", desc: "Suporte a Cartão de Crédito (In-App), Dinheiro, PIX, Voucher Corporativo e Saldo na Carteira." },
      { icon: Shield, title: "Compartilhar Viagem", desc: "Botão de segurança para enviar o link da rota em tempo real para contatos de confiança." },
      { icon: MessageSquare, title: "Chat Integrado", desc: "Comunicação segura com o motorista sem expor o número de telefone real (máscara de chamada opcional)." },
      { icon: Navigation, title: "Múltiplas Paradas", desc: "Adicione pontos de parada intermediários antes de chegar ao destino final." },
      { icon: Star, title: "Sistema de Avaliação", desc: "Classifique a experiência e o motorista para manter a qualidade da plataforma." },
      { icon: Zap, title: "Favoritos", desc: "Salve endereços frequentes (Casa, Trabalho) para solicitar corridas com um toque." },
      { icon: History, title: "Histórico Detalhado", desc: "Acesso a todas as viagens realizadas, recibos e itens esquecidos." }
    ],
    driver: [
      { icon: Zap, title: "Tarifa Dinâmica", desc: "Multiplicador de ganhos automático em áreas de alta demanda (configurável)." },
      { icon: Map, title: "Mapa de Calor", desc: "Visualização em tempo real das zonas com maior solicitação de corridas." },
      { icon: AlertTriangle, title: "Botão de Pânico", desc: "Disparo de alerta silencioso para a central e contatos de emergência com geolocalização." },
      { icon: Navigation, title: "Navegação Integrada", desc: "Abertura automática de rotas no Waze ou Google Maps com um clique." },
      { icon: CreditCard, title: "Carteira Virtual", desc: "Visualização de ganhos do dia, extrato financeiro e solicitação de saque." },
      { icon: Settings, title: "Preferências de Rota", desc: "Defina um destino para o qual deseja ir e receba apenas corridas nesse sentido." },
      { icon: Users, title: "Documentação Digital", desc: "Upload e validação de CNH e documentos do veículo direto pelo app." },
      { icon: MessageSquare, title: "Chat com Suporte", desc: "Canal direto com a central de operações para reportar incidentes." }
    ],
    admin: [
      { icon: LayoutDashboard, title: "Dashboard Live", desc: "Visão de águia da operação: motoristas online, em corrida, faturamento e alertas." },
      { icon: Globe, title: "Cercas Eletrônicas", desc: "Desenhe no mapa áreas de atuação permitidas, proibidas ou com tarifas especiais." },
      { icon: Settings, title: "Gestão de Tarifas", desc: "Crie regras complexas de preço: Bandeirada, KM rodado, Minuto parado, Hora de pico, etc." },
      { icon: Users, title: "Controle de Usuários", desc: "Aprovação de motoristas, gestão de passageiros, bloqueios e validação de documentos." },
      { icon: PieChart, title: "Relatórios Financeiros", desc: "DRE completo da operação, split de pagamentos, comissões e contas a pagar." },
      { icon: Bell, title: "Push Notifications", desc: "Envie mensagens em massa para base de usuários (Marketing, Avisos, Promoções)." },
      { icon: Zap, title: "Gestão de Cupons", desc: "Crie códigos promocionais de desconto fixo ou percentual com regras de uso." },
      { icon: Shield, title: "Permissões de Acesso", desc: "Crie perfis para seus funcionários com acesso restrito a áreas sensíveis do sistema." }
    ]
  };

  return (
    <div className="pt-20 min-h-screen bg-tec-dark">
      
      {/* Hero */}
      <section className="bg-zinc-900 border-b border-zinc-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block bg-tec-primary/10 border border-tec-primary/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-tec-primary font-bold uppercase tracking-widest text-xs">Catálogo Completo</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Tudo o que você precisa <br/> para <span className="text-blue-500">dominar o mercado</span>.
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Uma lista exaustiva das ferramentas que colocam a TechDriver anos-luz à frente dos sistemas tradicionais de transporte.
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-20 z-40 bg-tec-dark/95 backdrop-blur border-b border-zinc-800 py-4">
        <div className="container mx-auto px-6 flex justify-center gap-4 flex-wrap">
          <button 
            onClick={() => setActiveTab('passenger')}
            className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${activeTab === 'passenger' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'}`}
          >
            <Smartphone size={18} /> App Passageiro
          </button>
          <button 
            onClick={() => setActiveTab('driver')}
            className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${activeTab === 'driver' ? 'bg-yellow-600 text-white shadow-lg shadow-yellow-600/30' : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'}`}
          >
            <Navigation size={18} /> App Motorista
          </button>
          <button 
            onClick={() => setActiveTab('admin')}
            className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${activeTab === 'admin' ? 'bg-green-600 text-white shadow-lg shadow-green-600/30' : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'}`}
          >
            <LayoutDashboard size={18} /> Painel Gestor
          </button>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {features[activeTab].map((item, idx) => (
              <div 
                key={idx} 
                className={`bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl group hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] ${
                  activeTab === 'passenger' ? 'hover:border-blue-500' : 
                  activeTab === 'driver' ? 'hover:border-yellow-500' : 'hover:border-green-500'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                  activeTab === 'passenger' ? 'bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white' : 
                  activeTab === 'driver' ? 'bg-yellow-500/10 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white' : 
                  'bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white'
                }`}>
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Por que somos superiores?</h2>
            <p className="text-gray-400">Comparativo técnico de mercado</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-gray-500 font-medium border-b border-zinc-800">Recurso</th>
                  <th className="p-4 text-white font-bold border-b border-zinc-800 bg-zinc-900/50 rounded-t-xl text-center min-w-[180px]">
                    <span className="text-tec-primary">TechDriver</span>
                  </th>
                  <th className="p-4 text-gray-500 font-medium border-b border-zinc-800 text-center min-w-[180px]">Apps de Prateleira</th>
                  <th className="p-4 text-gray-500 font-medium border-b border-zinc-800 text-center min-w-[180px]">Dev. Próprio</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Código Nativo (Alta Performance)", us: true, others: false, dev: true },
                  { name: "Suporte 24/7 Humanizado", us: true, others: false, dev: "Custo Alto" },
                  { name: "Atualizações Semanais", us: true, others: false, dev: "Custo Alto" },
                  { name: "Gateway de Pagamento Integrado", us: true, others: "Taxas Altas", dev: "Complexo" },
                  { name: "Google Maps Enterprise", us: true, others: false, dev: "Custo Alto" },
                  { name: "Tempo de Lançamento", us: "15 Dias", others: "Imediato", dev: "6-12 Meses" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-zinc-800 hover:bg-zinc-900/30 transition-colors">
                    <td className="p-4 text-white font-medium">{row.name}</td>
                    <td className="p-4 text-center bg-zinc-900/30 border-x border-zinc-800/50">
                      {row.us === true ? <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" /> : <span className="text-green-500 font-bold">{row.us}</span>}
                    </td>
                    <td className="p-4 text-center text-gray-500">
                      {row.others === false ? "❌" : row.others}
                    </td>
                    <td className="p-4 text-center text-gray-500">
                      {row.dev === true ? <CheckCircle2 className="w-6 h-6 text-gray-600 mx-auto" /> : row.dev}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 bg-gradient-to-r from-tec-primary to-blue-600 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Não espere a concorrência se atualizar.
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Tenha hoje a tecnologia que vai liderar o mercado de mobilidade amanhã.
          </p>
          <Button 
            variant="white" 
            size="lg"
            className="shadow-2xl"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Solicitar Demonstração Completa
          </Button>
        </div>
      </section>

      <div id="contact">
        <Contact />
      </div>

    </div>
  );
};

export default AllFeatures;