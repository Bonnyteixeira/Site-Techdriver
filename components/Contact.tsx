import React, { useState } from 'react';
import Button from './Button';
import { MessageSquare, Search, Loader2, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [loadingCep, setLoadingCep] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    cep: '',
    address: '',
    number: '',
    neighborhood: '',
    city: '',
    state: '',
    interest: 'Quero abrir uma Franquia'
  });

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
    setFormData({
      name: '',
      email: '',
      whatsapp: '',
      cep: '',
      address: '',
      number: '',
      neighborhood: '',
      city: '',
      state: '',
      interest: 'Quero abrir uma Franquia'
    });
  };

  return (
    <section id="contact" className="py-24 bg-tec-dark relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-tec-primary/5 blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row gap-16 shadow-2xl relative z-10 overflow-hidden min-h-[600px]">
          
          {/* Decorative bar */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-tec-primary to-blue-600" />

          {/* Text */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Pronto para transformar a mobilidade na sua cidade?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Preencha o formulário e um de nossos consultores especializados entrará em contato para apresentar a solução ideal para o seu perfil de investimento.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-tec-primary" />
                <span>Consultoria gratuita e personalizada</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-tec-primary" />
                <span>Demonstração do painel administrativo</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-tec-primary" />
                <span>Planilha de viabilidade econômica</span>
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:w-1/2 bg-black/40 p-8 rounded-2xl backdrop-blur-sm border border-white/5 flex flex-col justify-center">
            {isSuccess ? (
              <div className="text-center flex flex-col items-center animate-in fade-in zoom-in duration-500 py-10">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Solicitação Recebida!</h3>
                <p className="text-gray-400 mb-8 max-w-xs">
                  Obrigado, <span className="text-tec-primary font-bold">{formData.name}</span>.
                  <br className="mb-2"/>
                  Nossa equipe de expansão recebeu seus dados e entrará em contato via WhatsApp em breve.
                </p>
                <Button onClick={handleReset} variant="outline" className="w-full">
                  Enviar nova mensagem
                </Button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                
                {/* Nome e Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Nome Completo</label>
                    <input 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      type="text" 
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-tec-primary focus:ring-1 focus:ring-tec-primary outline-none transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">E-mail</label>
                    <input 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-tec-primary focus:ring-1 focus:ring-tec-primary outline-none transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                {/* Whatsapp e CEP */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">WhatsApp</label>
                    <input 
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      type="tel" 
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-tec-primary focus:ring-1 focus:ring-tec-primary outline-none transition-all"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-400 mb-2 flex justify-between">
                      CEP 
                      {loadingCep && <span className="text-tec-primary text-xs flex items-center gap-1"><Loader2 className="w-3 h-3 animate-spin" /> Buscando...</span>}
                    </label>
                    <div className="relative">
                      <input 
                        name="cep"
                        value={formData.cep}
                        onChange={handleChange}
                        onBlur={handleCepBlur}
                        type="text" 
                        maxLength={9}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-tec-primary focus:ring-1 focus:ring-tec-primary outline-none transition-all pr-10"
                        placeholder="00000-000"
                      />
                      <div className="absolute right-3 top-3 text-gray-500">
                        <Search size={18} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Endereço e Número */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-400 mb-2">Endereço</label>
                    <input 
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      type="text" 
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-tec-primary focus:ring-1 focus:ring-tec-primary outline-none transition-all"
                      placeholder="Rua, Av..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Número</label>
                    <input 
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      type="text" 
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-tec-primary focus:ring-1 focus:ring-tec-primary outline-none transition-all"
                      placeholder="123"
                    />
                  </div>
                </div>

                {/* Bairro, Cidade, Estado */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Bairro</label>
                    <input 
                      name="neighborhood"
                      value={formData.neighborhood}
                      onChange={handleChange}
                      type="text" 
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-tec-primary focus:ring-1 focus:ring-tec-primary outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Cidade</label>
                    <input 
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      type="text" 
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-tec-primary focus:ring-1 focus:ring-tec-primary outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Estado</label>
                    <input 
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      type="text" 
                      maxLength={2}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-tec-primary focus:ring-1 focus:ring-tec-primary outline-none transition-all uppercase"
                      placeholder="UF"
                    />
                  </div>
                </div>

                {/* Interesse */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Interesse Principal</label>
                  <select 
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-tec-primary focus:ring-1 focus:ring-tec-primary outline-none transition-all"
                  >
                    <option>Quero abrir uma Franquia</option>
                    <option>Quero contratar White-Label (Marca Própria)</option>
                    <option>Sou Motorista</option>
                    <option>Outros assuntos</option>
                  </select>
                </div>

                <Button type="submit" variant="primary" className="w-full mt-4" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</>
                  ) : (
                    <><MessageSquare className="w-4 h-4" /> Receber Atendimento</>
                  )}
                </Button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  Seus dados estão seguros. Respeitamos a LGPD.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;