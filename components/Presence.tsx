import React from 'react';
import { MapPin, CheckCircle2, Clock, BarChart3 } from 'lucide-react';

const Presence: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Expansão Acelerada
          </h2>
          <p className="text-gray-400 text-lg">
            Estamos pintando o mapa do Brasil de azul. Veja onde a TechDriver já é realidade e onde estaremos em breve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Coluna 1: Em Operação */}
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Em Operação</h3>
                <p className="text-green-500 text-sm font-bold uppercase tracking-wider">Funcionamento Pleno</p>
              </div>
            </div>
            
            <ul className="space-y-4">
              {[
                "Catanduva - SP (Matriz)",
                "São José do Rio Preto - SP",
                "Ribeirão Preto - SP",
                "Uberlândia - MG",
                "Londrina - PR",
                "Maringá - PR"
              ].map((city, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300 border-b border-zinc-800 pb-2 last:border-0">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{city}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 2: Em Breve (Expansão) */}
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-yellow-500 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Próximas Inaugurações</h3>
                <p className="text-yellow-500 text-sm font-bold uppercase tracking-wider">Fase de Setup</p>
              </div>
            </div>
            
            <ul className="space-y-4">
              {[
                "Campinas - SP",
                "Sorocaba - SP",
                "Goiânia - GO",
                "Florianópolis - SC",
                "Balneário Camboriú - SC"
              ].map((city, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300 border-b border-zinc-800 pb-2 last:border-0">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse flex-shrink-0"></div>
                  <span>{city}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-dashed border-zinc-800 text-center">
              <p className="text-sm text-gray-500">Previsão: Próximos 60 dias</p>
            </div>
          </div>

          {/* Coluna 3: Interesse (Consultas) */}
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                <BarChart3 size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Alta Demanda</h3>
                <p className="text-blue-500 text-sm font-bold uppercase tracking-wider">Negociações em Curso</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 mb-6">
              Territórios com alto volume de interessados. Se você é de uma dessas regiões, corra para garantir a exclusividade.
            </p>

            <ul className="space-y-4">
              {[
                "Belo Horizonte - MG",
                "Curitiba - PR",
                "Salvador - BA",
                "Recife - PE",
                "Vitória - ES",
                "Porto Alegre - RS"
              ].map((city, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300 border-b border-zinc-800 pb-2 last:border-0">
                  <div className="w-2 h-2 rounded-full border border-blue-500 flex-shrink-0"></div>
                  <span>{city}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Presence;