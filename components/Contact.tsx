import React, { useState } from 'react';
import Button from './Button';
import { ArrowRight, Search, Loader2, CheckCircle, ShieldCheck, Sparkles, LayoutDashboard, FileSpreadsheet, User, Home, Target, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import InterestCityField from './InterestCityField';

export type ContactBenefit = { icon: React.ElementType; text: string; gradient: string };

const defaultBenefits: ContactBenefit[] = [
  { icon: Sparkles, text: 'Consultoria gratuita e personalizada', gradient: 'from-tec-primary to-cyan-300' },
  { icon: LayoutDashboard, text: 'Demonstração do painel administrativo', gradient: 'from-violet-500 to-fuchsia-400' },
  { icon: FileSpreadsheet, text: 'Planilha de viabilidade econômica', gradient: 'from-emerald-500 to-teal-300' },
];

const initialForm = {
  name: '',
  email: '',
  whatsapp: '',
  cep: '',
  address: '',
  number: '',
  neighborhood: '',
  city: '',
  state: '',
  interest: 'Quero abrir uma Franquia',
  interestState: '',
  interestCity: ''
};

export const WHITE_LABEL_INTEREST = 'Quero contratar White-Label (Marca Própria)';
export const DRIVER_INTEREST = 'Sou Motorista';

interface ContactProps {
  // Quando informado, o interesse fica fixo e o campo "Interesse Principal" some
  fixedInterest?: string;
  // Textos da seção; quando omitidos, usa a versão para investidores
  title?: string;
  highlight?: string;
  intro?: string;
  benefits?: ContactBenefit[];
  submitLabel?: string;
  // Espaçamento vertical da seção
  spacingClass?: string;
}

const Contact: React.FC<ContactProps> = ({
  fixedInterest,
  title = 'Pronto para transformar a mobilidade na',
  highlight = 'sua cidade?',
  intro = 'Preencha o formulário e um de nossos consultores especializados entrará em contato para apresentar a solução ideal para o seu perfil de investimento.',
  benefits = defaultBenefits,
  submitLabel = 'Solicitar Consultoria Personalizada',
  spacingClass = 'py-28',
}) => {
  const [loadingCep, setLoadingCep] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const startForm = { ...initialForm, interest: fixedInterest ?? initialForm.interest };
  const [formData, setFormData] = useState(startForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCepBlur = async () => {
    const cep = formData.cep.replace(/\D/g, '');
    
    if (cep.length === 8) {
      setLoadingCep(true);
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        
        if (!data.erro) {
          setFormData(prev => ({
            ...prev,
            address: data.logradouro,
            neighborhood: data.bairro,
            city: data.localidade,
            state: data.uf
          }));
          // Focar no campo número após carregar (opcional, via ref, mas o preenchimento visual já ajuda)
        }
      } catch (error) {
        console.error("Erro ao buscar CEP", error);
      } finally {
        setLoadingCep(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio para API
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData(startForm);
  };

  const inputClass = 'w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 hover:border-white/20 focus:bg-white/[0.06] focus:border-tec-primary focus:ring-4 focus:ring-tec-primary/15 outline-none transition-all duration-200';
  const labelClass = 'block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2';

  return (
    <section id="contact" className={`${spacingClass} bg-tec-dark relative overflow-hidden scroll-mt-20`}>
      {/* Fundo: grade sutil e brilhos */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-tec-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          title={title}
          highlight={highlight}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative max-w-6xl mx-auto p-px rounded-3xl bg-gradient-to-br from-tec-primary/70 via-violet-500/40 to-emerald-400/50 shadow-[0_30px_80px_-20px_rgba(30,167,225,0.35)]"
        >
          <div className="relative rounded-3xl bg-zinc-950/95 backdrop-blur-xl overflow-hidden flex flex-col lg:flex-row">
            {/* Faixa de luz no topo */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-tec-primary to-transparent" />

            {/* Coluna de texto */}
            <div className="relative lg:w-5/12 p-8 md:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden">
              <div className="absolute -top-24 -left-24 w-72 h-72 bg-tec-primary/20 rounded-full blur-3xl pointer-events-none" />

              <p className="relative text-gray-300 text-lg leading-relaxed mb-10">
                {intro}
              </p>

              <div className="relative space-y-4">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300"
                  >
                    <div className={`w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br ${b.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <b.icon size={18} />
                    </div>
                    <span className="text-gray-200 font-medium">{b.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="relative mt-12 pt-6 border-t border-white/10 flex items-center gap-3 text-sm text-gray-400">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                Seus dados estão seguros. Respeitamos a LGPD.
              </div>
            </div>

            {/* Formulário */}
            <div className="relative lg:w-7/12 p-8 md:p-12">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="h-full text-center flex flex-col items-center justify-center py-10"
                >
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-emerald-500/40 rounded-full blur-2xl animate-pulse" />
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Solicitação Recebida!</h3>
                  <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
                    Obrigado, <span className="text-tec-primary font-bold">{formData.name}</span>.
                    <br />
                    Nossa equipe de expansão recebeu seus dados sobre{' '}
                    <span className="text-white font-semibold">{formData.interestCity} - {formData.interestState}</span>{' '}
                    e entrará em contato via WhatsApp em breve.
                  </p>
                  <Button onClick={handleReset} variant="outline" className="w-full max-w-xs">
                    Enviar nova mensagem
                  </Button>
                </motion.div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>

                  {/* 1. Dados pessoais */}
                  <fieldset className="space-y-4">
                    <StepTitle number={1} icon={User} title="Seus dados" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Nome Completo</label>
                        <input name="name" required value={formData.name} onChange={handleChange} type="text" className={inputClass} placeholder="Seu nome" />
                      </div>
                      <div>
                        <label className={labelClass}>E-mail</label>
                        <input name="email" required value={formData.email} onChange={handleChange} type="email" className={inputClass} placeholder="seu@email.com" />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>WhatsApp</label>
                      <input name="whatsapp" required value={formData.whatsapp} onChange={handleChange} type="tel" className={inputClass} placeholder="(00) 00000-0000" />
                    </div>
                  </fieldset>

                  {/* 2. Endereço */}
                  <fieldset className="space-y-4">
                    <StepTitle number={2} icon={Home} title="Seu endereço" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className={`${labelClass} flex justify-between`}>
                          CEP
                          {loadingCep && <span className="text-tec-primary normal-case tracking-normal flex items-center gap-1"><Loader2 className="w-3 h-3 animate-spin" /> Buscando...</span>}
                        </label>
                        <div className="relative">
                          <input name="cep" value={formData.cep} onChange={handleChange} onBlur={handleCepBlur} type="text" maxLength={9} className={`${inputClass} pr-10`} placeholder="00000-000" />
                          <Search size={18} className="absolute right-3 top-3.5 text-gray-500" />
                        </div>
                      </div>
                      <div className="md:col-span-2 grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                          <label className={labelClass}>Endereço</label>
                          <input name="address" value={formData.address} onChange={handleChange} type="text" className={inputClass} placeholder="Rua, Av..." />
                        </div>
                        <div>
                          <label className={labelClass}>Número</label>
                          <input name="number" value={formData.number} onChange={handleChange} type="text" className={inputClass} placeholder="123" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className={labelClass}>Bairro</label>
                        <input name="neighborhood" value={formData.neighborhood} onChange={handleChange} type="text" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Cidade</label>
                        <input name="city" value={formData.city} onChange={handleChange} type="text" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Estado</label>
                        <input name="state" value={formData.state} onChange={handleChange} type="text" maxLength={2} className={`${inputClass} uppercase`} placeholder="UF" />
                      </div>
                    </div>
                  </fieldset>

                  {/* 3. Interesse */}
                  <fieldset className="space-y-4">
                    <StepTitle number={3} icon={Target} title="Seu interesse" />
                    {!fixedInterest && (
                      <div>
                        <label className={labelClass}>Interesse Principal</label>
                        <select name="interest" value={formData.interest} onChange={handleChange} className={`${inputClass} [&>option]:bg-zinc-900`}>
                          <option>Quero abrir uma Franquia</option>
                          <option>{WHITE_LABEL_INTEREST}</option>
                          <option>{DRIVER_INTEREST}</option>
                          <option>Outros assuntos</option>
                        </select>
                      </div>
                    )}

                    {formData.interest === DRIVER_INTEREST && (
                      <div className="flex items-start gap-3 p-4 rounded-xl border border-emerald-400/30 bg-emerald-400/[0.06] text-sm text-gray-300 leading-relaxed">
                        <Smartphone className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                        <span>
                          O cadastro de motoristas é feito pelo App Motorista, onde você também vê os planos da sua cidade.{' '}
                          <Link to="/motorista" className="font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
                            Ver como começar
                          </Link>
                        </span>
                      </div>
                    )}

                    <InterestCityField
                      state={formData.interestState}
                      city={formData.interestCity}
                      onChange={(interestState, interestCity) => setFormData(prev => ({ ...prev, interestState, interestCity }))}
                      ownCity={formData.city}
                      ownState={formData.state}
                      inputClass={inputClass}
                      labelClass={labelClass}
                    />
                  </fieldset>

                  <div className="flex justify-center pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative overflow-hidden rounded-full bg-gradient-to-r from-tec-primary via-cyan-500 to-violet-500 px-7 py-3 text-sm text-white font-semibold tracking-wide shadow-[0_10px_30px_-10px_rgba(30,167,225,0.8)] hover:shadow-[0_15px_40px_-10px_rgba(139,92,246,0.8)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {/* Reflexo que atravessa o botão */}
                      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
                      <span className="relative flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <><Loader2 className="w-4 h-4 animate-spin" /> Enviando solicitação...</>
                        ) : (
                          <><Sparkles className="w-4 h-4" /> {submitLabel} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                        )}
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Título numerado de cada etapa do formulário
const StepTitle: React.FC<{ number: number; icon: React.ElementType; title: string }> = ({ number, icon: Icon, title }) => (
  <legend className="flex items-center gap-3 mb-1 w-full">
    <span className="w-7 h-7 rounded-full bg-gradient-to-br from-tec-primary to-violet-500 flex items-center justify-center text-white text-xs font-bold shadow-lg">
      {number}
    </span>
    <Icon className="w-4 h-4 text-tec-primary" />
    <span className="text-white font-semibold">{title}</span>
    <span className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
  </legend>
);

export default Contact;
