import React, { useEffect, useState } from 'react';
import { Loader2, MapPin } from 'lucide-react';

const UFS = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];

interface InterestCityFieldProps {
  state: string;
  city: string;
  onChange: (state: string, city: string) => void;
  // Cidade/UF do endereço do candidato, para o atalho "Usar minha cidade"
  ownCity?: string;
  ownState?: string;
  inputClass: string;
  labelClass: string;
  accentClass?: string;
}

// Campo "Cidade de Interesse": escolhe a UF e carrega os municípios pela API do IBGE
const InterestCityField: React.FC<InterestCityFieldProps> = ({
  state, city, onChange, ownCity, ownState, inputClass, labelClass, accentClass = 'text-tec-primary',
}) => {
  const [cities, setCities] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!state) {
      setCities([]);
      return;
    }
    let cancelled = false;
    setLoading(true);
    setError(false);
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios?orderBy=nome`)
      .then(res => res.json())
      .then((data: { nome: string }[]) => {
        if (!cancelled) setCities(data.map(c => c.nome));
      })
      .catch(() => {
        // Sem a lista, o campo vira texto livre
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, [state]);

  return (
    <div>
      <label className={`${labelClass} flex justify-between items-center`}>
        <span className="flex items-center gap-1.5"><MapPin className={`w-3.5 h-3.5 ${accentClass}`} /> Cidade de Interesse</span>
        {ownCity && ownState && (
          <button
            type="button"
            onClick={() => onChange(ownState.toUpperCase(), ownCity)}
            className={`normal-case tracking-normal text-xs ${accentClass} hover:brightness-125 transition`}
          >
            Usar minha cidade
          </button>
        )}
      </label>
      <div className="grid grid-cols-4 gap-4">
        <select
          name="interestState"
          required
          value={state}
          // Trocar o estado limpa a cidade escolhida
          onChange={e => onChange(e.target.value, '')}
          className={`${inputClass} col-span-1 px-3 [&>option]:bg-zinc-900`}
        >
          <option value="" disabled>UF</option>
          {UFS.map(uf => <option key={uf} value={uf}>{uf}</option>)}
        </select>
        <div className="col-span-3 relative">
          {error ? (
            <input
              name="interestCity"
              required
              value={city}
              onChange={e => onChange(state, e.target.value)}
              type="text"
              className={inputClass}
              placeholder="Digite a cidade"
            />
          ) : (
            <select
              name="interestCity"
              required
              value={city}
              onChange={e => onChange(state, e.target.value)}
              disabled={!state || loading}
              className={`${inputClass} disabled:opacity-50 disabled:cursor-not-allowed [&>option]:bg-zinc-900`}
            >
              <option value="" disabled>
                {!state ? 'Escolha o estado primeiro' : loading ? 'Carregando cidades...' : 'Selecione a cidade'}
              </option>
              {/* Garante que a cidade vinda do CEP apareça mesmo antes da lista carregar */}
              {city && !cities.includes(city) && <option value={city}>{city}</option>}
              {cities.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          )}
          {loading && <Loader2 className={`w-4 h-4 animate-spin ${accentClass} absolute right-9 top-4`} />}
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-2">Onde você pretende operar com a TechDriver.</p>
    </div>
  );
};

export default InterestCityField;
