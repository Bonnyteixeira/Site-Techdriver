import React from 'react';
import { ShieldCheck, Cpu, Globe } from 'lucide-react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-24 bg-tec-dark relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="text-tec-primary font-bold tracking-wider uppercase text-sm">Sobre a TechDriver</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-2 mb-6">
              Liderando a revolução da <span className="text-transparent bg-clip-text bg-gradient-to-r from-tec-primary to-blue-600">mobilidade inteligente</span>.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Somos uma tech company focada em soluções completas de transporte. Operamos com frota própria, gerenciamos uma rede de franqueados de sucesso e fornecemos a tecnologia por trás de dezenas de aplicativos de transporte em todo o país através do nosso sistema White-Label.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <div className="bg-zinc-800 p-2 rounded-lg text-tec-primary">
                   <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Suporte 24/7</h4>
                  <p className="text-sm text-gray-500">Atendimento humanizado</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-zinc-800 p-2 rounded-lg text-tec-primary">
                   <Cpu size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Tecnologia Multi-tenant</h4>
                  <p className="text-sm text-gray-500">Escalabilidade garantida</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-zinc-800 p-2 rounded-lg text-tec-primary">
                   <Globe size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Expansão Nacional</h4>
                  <p className="text-sm text-gray-500">Presente em 12 estados</p>
                </div>
              </div>
            </div>

            <Button variant="primary" onClick={() => navigate('/sistema')}>
              Conheça Nosso Sistema
            </Button>
          </div>

          {/* Right: Image Composition */}
          <div className="relative">
            <div className="absolute -inset-4 bg-tec-primary/20 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" 
              alt="Dashboard Operation" 
              className="relative rounded-2xl shadow-2xl border border-gray-800 z-10"
            />
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-zinc-900/90 backdrop-blur border border-zinc-700 p-6 rounded-xl shadow-xl z-20 max-w-xs hidden md:block hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-shadow duration-300 cursor-default">
              <div className="flex items-center gap-4 mb-3">
                 <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="text-white font-bold">Sistema Operando</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                   <span className="text-gray-400">Corridas hoje</span>
                   <span className="text-white font-mono">14,203</span>
                </div>
                <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                  <div className="bg-tec-primary w-[80%] h-full rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;