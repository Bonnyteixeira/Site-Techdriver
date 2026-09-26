import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle, Search, User, MapPin, Briefcase, ArrowRight, ShieldCheck } from 'lucide-react';
import SectionHeader from './SectionHeader';
import InterestCityField from './InterestCityField';

const inputClass = 'w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 hover:border-white/20 focus:bg-white/[0.06] focus:border-tec-gold focus:ring-4 focus:ring-tec-gold/15 outline-none transition-all duration-200 [&>option]:bg-zinc-900';
const readOnlyClass = 'w-full bg-white/[0.02] border border-dashed border-white/10 rounded-xl px-4 py-3 text-gray-300 cursor-not-allowed';
const labelClass = 'block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2';

// Título numerado de cada etapa do formulário
const StepTitle: React.FC<{ number: number; icon: React.ElementType; title: string }> = ({ number, icon: Icon, title }) => (
  <legend className="flex items-center gap-3 mb-1 w-full">
    <span className="w-7 h-7 rounded-full bg-gradient-to-br from-tec-gold to-amber-600 flex items-center justify-center text-black text-xs font-bold shadow-lg">
      {number}
    </span>
    <Icon className="w-4 h-4 text-tec-gold" />
    <span className="text-white font-semibold">{title}</span>
    <span className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
  </legend>
);

const FranchiseForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', city: '', state: '', capital: '', experience: '', about: '', cep: '',
    interestState: '', interestCity: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loadingCep, setLoadingCep] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleCepBlur = async () => {
    const cep = formData.cep.replace(/\D/g, '');
    if (cep.length === 8) {
      setLoadingCep(true);
      try {
        const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await res.json();
        if(!data.erro) {
          setFormData(prev => ({...prev, city: data.localidade, state: data.uf}));
        }
      } catch(e) { console.error(e); }
      setLoadingCep(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 2000)); // Simulate API
    setLoading(false);
    setSuccess(true);
  };

  return (
    <section id="franchise-form" className="py-24 bg-tec-dark relative overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-tec-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-tec-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <SectionHeader
          title="Candidate-se"
          highlight="Agora"
          subtitle="Preencha o formulário para receber a apresentação comercial detalhada."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative max-w-3xl mx-auto p-px rounded-3xl bg-gradient-to-br from-tec-gold/80 via-amber-300/30 to-tec-primary/60 shadow-[0_30px_80px_-20px_rgba(212,175,55,0.3)]"
        >
          <div className="relative rounded-3xl bg-zinc-950/95 backdrop-blur-xl p-8 md:p-10 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-tec-gold to-transparent" />
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-tec-gold/10 rounded-full blur-3xl pointer-events-none" />

            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative text-center flex flex-col items-center py-10"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-emerald-500/40 rounded-full blur-2xl animate-pulse" />
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Solicitação Recebida!</h3>
                <p className="text-gray-400 max-w-md leading-relaxed">
                  Nossa equipe de expansão analisará seu perfil para{' '}
                  <span className="text-white font-semibold">{formData.interestCity} - {formData.interestState}</span>{' '}
                  e entrará em contato em breve.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative space-y-8">

                {/* 1. Dados pessoais */}
                <fieldset className="space-y-4">
                  <StepTitle number={1} icon={User} title="Seus dados" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Nome Completo</label>
                      <input name="name" required onChange={handleChange} className={inputClass} placeholder="Seu nome" />
                    </div>
                    <div>
                      <label className={labelClass}>Telefone (WhatsApp)</label>
                      <input name="phone" required onChange={handleChange} className={inputClass} placeholder="(00) 00000-0000" />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>E-mail</label>
                    <input name="email" type="email" required onChange={handleChange} className={inputClass} placeholder="seu@email.com" />
                  </div>
                </fieldset>

                {/* 2. Localização */}
                <fieldset className="space-y-4">
                  <StepTitle number={2} icon={MapPin} title="Localização" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className={`${labelClass} flex justify-between`}>
                        CEP
                        {loadingCep && <span className="text-tec-gold normal-case tracking-normal flex items-center gap-1"><Loader2 className="w-3 h-3 animate-spin" /> Buscando...</span>}
                      </label>
                      <div className="relative">
                        <input name="cep" onChange={handleChange} onBlur={handleCepBlur} maxLength={9} className={`${inputClass} pr-10`} placeholder="00000-000" />
                        <Search className="absolute right-3 top-3.5 text-gray-500 w-[18px] h-[18px]" />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Cidade</label>
                      <input name="city" value={formData.city} readOnly className={readOnlyClass} placeholder="Preenchido pelo CEP" />
                    </div>
                    <div>
                      <label className={labelClass}>Estado</label>
                      <input name="state" value={formData.state} readOnly className={readOnlyClass} placeholder="UF" />
                    </div>
                  </div>
                  <InterestCityField
                    state={formData.interestState}
                    city={formData.interestCity}
                    onChange={(interestState, interestCity) => setFormData(prev => ({ ...prev, interestState, interestCity }))}
                    ownCity={formData.city}
                    ownState={formData.state}
                    inputClass={inputClass}
                    labelClass={labelClass}
                    accentClass="text-tec-gold"
                  />
                </fieldset>

                {/* 3. Perfil de investidor */}
                <fieldset className="space-y-4">
                  <StepTitle number={3} icon={Briefcase} title="Perfil de investidor" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Capital Disponível</label>
                      <select name="capital" onChange={handleChange} className={inputClass}>
                        <option value="">Selecione...</option>
                        <option value="20-50k">R$ 20k a R$ 50k</option>
                        <option value="50-100k">R$ 50k a R$ 100k</option>
                        <option value="100k+">Acima de R$ 100k</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Experiência com Gestão?</label>
                      <select name="experience" onChange={handleChange} className={inputClass}>
                        <option value="">Selecione...</option>
                        <option value="sim">Sim</option>
                        <option value="nao">Não</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Fale um pouco sobre você</label>
                    <textarea name="about" rows={3} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Sua trajetória, motivação e objetivos com a franquia"></textarea>
                  </div>
                </fieldset>

                <div className="flex flex-col items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-amber-500 via-tec-gold to-amber-400 px-7 py-3 text-sm text-black font-bold tracking-wide shadow-[0_10px_30px_-10px_rgba(212,175,55,0.8)] hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,1)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12" />
                    <span className="relative flex items-center gap-2">
                      {loading ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</>
                      ) : (
                        <>Enviar Solicitação de Franquia <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                      )}
                    </span>
                  </button>
                  <p className="flex items-center gap-2 text-xs text-gray-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Seus dados estão seguros. Respeitamos a LGPD.
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FranchiseForm;
