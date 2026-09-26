import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Contact from '../components/Contact';
import { Monitor, Smartphone, Shield, Globe, CreditCard, ChevronRight, BarChart3, Map } from 'lucide-react';

const System: React.FC = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-20 min-h-screen bg-tec-dark">
      
      {/* 1. Hero Section System */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-tec-primary/10 blur-[120px] rounded-full"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
                O ecossistema completo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-tec-primary to-blue-600">gestão de transporte</span>.
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed border-l-4 border-tec-primary pl-6">
                Esqueça sistemas travados. A TechDriver oferece uma suíte tecnológica de alta performance, composta por Apps Nativos, Painel Administrativo em Nuvem e Algoritmos de Dispatch Inteligente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={scrollToContact}>
                  Agendar Demonstração
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigate('/franquias')}>
                  Ver Modelos de Negócio
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
               <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-zinc-700 bg-zinc-900/50 backdrop-blur-sm group">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                    alt="Dashboard TechDriver" 
                    className="w-full h-auto opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Floating Elements */}
                  <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur border border-zinc-700 p-4 rounded-xl flex items-center gap-4 shadow-xl">
                    <div className="h-10 w-10 bg-green-500/20 rounded-lg flex items-center justify-center text-green-500">
                      <BarChart3 />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold">Uptime</p>
                      <p className="text-white font-mono font-bold">99.98%</p>
                    </div>
                  </div>
               </div>
               {/* Background Glow */}
               <div className="absolute -inset-4 bg-gradient-to-r from-tec-primary to-blue-600 rounded-2xl blur-2xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Three Pillars */}
      <section className="py-24 bg-zinc-950 border-y border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Poder Total na Palma da Mão</h2>
            <p className="text-gray-400">Nossa solução é dividida em três pilares fundamentais, todos sincronizados em tempo real.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-tec-primary hover:shadow-[0_0_30px_rgba(30,167,225,0.2)] transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Smartphone className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Super App Usuário</h3>
              <p className="text-gray-400 mb-6">
                Interface limpa, chamadas rápidas, múltiplas paradas, carteira digital e segurança com compartilhamento de rota.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> UX/UI Premium</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Cupons & Cashback</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Pagamento In-App</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-tec-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-300 group relative transform md:-translate-y-6 z-10">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tec-gold to-yellow-600 rounded-t-2xl"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Map className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">App Motorista</h3>
              <p className="text-gray-400 mb-6">
                Ferramenta de trabalho robusta. Mapa de calor, gestão de ganhos, botão de pânico e chat integrado.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div> Tarifa Dinâmica</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div> Destino Definido</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div> Taxa Zero (Configurável)</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Monitor className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Painel Master</h3>
              <p className="text-gray-400 mb-6">
                O cérebro da operação. Controle financeiro, gestão de frota, configuração de tarifas e suporte em tempo real.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Business Intelligence</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Controle de Acessos</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Auditoria Completa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Feature Showcase */}
      <section className="py-24 bg-tec-dark">
        <div className="container mx-auto px-6">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
             <div className="md:w-1/2 order-2 md:order-1">
               <img 
                 src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop" 
                 alt="Gestão Financeira" 
                 className="rounded-2xl border border-zinc-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
               />
             </div>
             <div className="md:w-1/2 order-1 md:order-2">
               <div className="bg-zinc-800/50 p-3 rounded-xl inline-block mb-4 text-tec-primary">
                 <CreditCard size={24} />
               </div>
               <h3 className="text-3xl font-bold text-white mb-4">Split de Pagamento Automático</h3>
               <p className="text-gray-400 text-lg leading-relaxed mb-6">
                 Nossa tecnologia financeira separa automaticamente o valor da corrida. A taxa da plataforma vai para sua conta e o valor do motorista vai direto para a conta dele, sem intermediários e sem bitributação.
               </p>
               <ul className="grid grid-cols-2 gap-4">
                 <li className="flex items-center gap-2 text-gray-300 font-medium"><div className="h-1 w-4 bg-tec-primary"></div> PIX Automático</li>
                 <li className="flex items-center gap-2 text-gray-300 font-medium"><div className="h-1 w-4 bg-tec-primary"></div> Gateway Integrado</li>
                 <li className="flex items-center gap-2 text-gray-300 font-medium"><div className="h-1 w-4 bg-tec-primary"></div> Cartão de Crédito</li>
                 <li className="flex items-center gap-2 text-gray-300 font-medium"><div className="h-1 w-4 bg-tec-primary"></div> Pré-pago (Wallet)</li>
               </ul>
             </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
             <div className="md:w-1/2">
               <div className="bg-zinc-800/50 p-3 rounded-xl inline-block mb-4 text-tec-primary">
                 <Globe size={24} />
               </div>
               <h3 className="text-3xl font-bold text-white mb-4">Google Maps Platform Enterprise</h3>
               <p className="text-gray-400 text-lg leading-relaxed mb-6">
                 Não arrisque com mapas gratuitos. Utilizamos a API Enterprise do Google Maps para garantir precisão milimétrica no cálculo de rotas, tempo de chegada e precificação da corrida.
               </p>
               <Button variant="outline" onClick={scrollToContact}>
                 Ver Especificações Técnicas
               </Button>
             </div>
             <div className="md:w-1/2">
               <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1474&auto=format&fit=crop" 
                 alt="Mapas e Rotas" 
                 className="rounded-2xl border border-zinc-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
               />
             </div>
          </div>
        </div>
      </section>

      {/* 4. Tech Specs (Bento Grid) */}
      <section className="py-24 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-6">
           <h2 className="text-3xl font-bold text-white text-center mb-12">Especificações de Infraestrutura</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl text-center">
                 <div className="text-tec-primary font-mono text-3xl font-bold mb-2">AWS</div>
                 <p className="text-gray-500 text-sm">Cloud Computing</p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl text-center">
                 <div className="text-tec-primary font-mono text-3xl font-bold mb-2">Node.js</div>
                 <p className="text-gray-500 text-sm">Backend Scalable</p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl text-center">
                 <div className="text-tec-primary font-mono text-3xl font-bold mb-2">React</div>
                 <p className="text-gray-500 text-sm">Frontend Web</p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl text-center">
                 <div className="text-tec-primary font-mono text-3xl font-bold mb-2">Flutter</div>
                 <p className="text-gray-500 text-sm">Apps Híbridos</p>
              </div>
           </div>
        </div>
      </section>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default System;
