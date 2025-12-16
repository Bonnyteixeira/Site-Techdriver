import React, { useState } from 'react';
import Button from './Button';
import { Loader2, CheckCircle, Search } from 'lucide-react';

const FranchiseForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', city: '', state: '', capital: '', experience: '', about: '', cep: ''
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

  if (success) {
    return (
      <section id="franchise-form" className="py-24 bg-tec-dark">
        <div className="container mx-auto px-6 max-w-2xl text-center">
           <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
              <CheckCircle className="w-10 h-10 text-green-500" />
           </div>
           <h2 className="text-3xl font-bold text-white mb-4">Solicitação Recebida!</h2>
           <p className="text-gray-400">Nossa equipe de expansão analisará seu perfil e entrará em contato em breve.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="franchise-form" className="py-24 bg-tec-dark">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Candidate-se Agora</h2>
           <p className="text-gray-400">Preencha o formulário para receber a apresentação comercial detalhada.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl shadow-2xl">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
             <div>
               <label className="text-sm text-gray-400 block mb-2">Nome Completo</label>
               <input name="name" required onChange={handleChange} className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-white focus:border-tec-primary outline-none transition-colors" placeholder="Seu nome" />
             </div>
             <div>
               <label className="text-sm text-gray-400 block mb-2">Telefone (WhatsApp)</label>
               <input name="phone" required onChange={handleChange} className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-white focus:border-tec-primary outline-none transition-colors" placeholder="(00) 00000-0000" />
             </div>
             <div>
               <label className="text-sm text-gray-400 block mb-2">E-mail</label>
               <input name="email" type="email" required onChange={handleChange} className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-white focus:border-tec-primary outline-none transition-colors" placeholder="seu@email.com" />
             </div>
             <div>
               <label className="text-sm text-gray-400 block mb-2 flex justify-between">
                 CEP {loadingCep && <span className="text-tec-primary text-xs flex items-center"><Loader2 className="w-3 h-3 animate-spin mr-1"/>Buscando...</span>}
               </label>
               <div className="relative">
                 <input name="cep" onChange={handleChange} onBlur={handleCepBlur} maxLength={9} className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-white focus:border-tec-primary outline-none transition-colors" placeholder="00000-000" />
                 <Search className="absolute right-3 top-3 text-gray-500 w-5 h-5" />
               </div>
             </div>
             <div>
               <label className="text-sm text-gray-400 block mb-2">Cidade</label>
               <input name="city" value={formData.city} readOnly className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-gray-300" />
             </div>
             <div>
               <label className="text-sm text-gray-400 block mb-2">Estado</label>
               <input name="state" value={formData.state} readOnly className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-gray-300" />
             </div>
             <div>
               <label className="text-sm text-gray-400 block mb-2">Capital Disponível</label>
               <select name="capital" onChange={handleChange} className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-white focus:border-tec-primary outline-none transition-colors">
                 <option value="">Selecione...</option>
                 <option value="20-50k">R$ 20k a R$ 50k</option>
                 <option value="50-100k">R$ 50k a R$ 100k</option>
                 <option value="100k+">Acima de R$ 100k</option>
               </select>
             </div>
             <div>
               <label className="text-sm text-gray-400 block mb-2">Experiência com Gestão?</label>
               <select name="experience" onChange={handleChange} className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-white focus:border-tec-primary outline-none transition-colors">
                 <option value="">Selecione...</option>
                 <option value="sim">Sim</option>
                 <option value="nao">Não</option>
               </select>
             </div>
           </div>
           <div className="mb-6">
              <label className="text-sm text-gray-400 block mb-2">Fale um pouco sobre você</label>
              <textarea name="about" rows={3} onChange={handleChange} className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-white focus:border-tec-primary outline-none transition-colors"></textarea>
           </div>
           
           <Button type="submit" variant="gold" className="w-full font-bold py-4">
             {loading ? <><Loader2 className="w-5 h-5 animate-spin mr-2" /> Enviando...</> : "Enviar Solicitação de Franquia"}
           </Button>
        </form>
      </div>
    </section>
  );
};

export default FranchiseForm;