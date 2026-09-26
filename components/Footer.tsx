import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#', hover: 'hover:from-pink-500 hover:to-orange-400' },
  { icon: Linkedin, label: 'LinkedIn', href: '#', hover: 'hover:from-blue-600 hover:to-sky-400' },
  { icon: Facebook, label: 'Facebook', href: '#', hover: 'hover:from-blue-600 hover:to-indigo-500' },
  { icon: Twitter, label: 'Twitter', href: '#', hover: 'hover:from-zinc-600 hover:to-zinc-400' },
];

// `to` = página interna do site; `href` = link ainda sem destino
const columns = [
  {
    title: 'Soluções',
    links: [
      { label: 'Franquias', to: '/franquias' },
      { label: 'White-Label', to: '/white-label' },
      { label: 'Para Empresas', href: '#' },
      { label: 'Gestão de Frotas', href: '#' },
    ],
  },
  {
    title: 'Suporte',
    links: [
      { label: 'Central de Ajuda', href: '#' },
      { label: 'Portal do Motorista', to: '/motorista' },
      { label: 'Política de Privacidade', href: '#' },
      { label: 'Termos de Uso', href: '#' },
    ],
  },
];

const contacts = [
  { icon: Mail, text: 'diretoria@techdriver.com.br', href: 'mailto:diretoria@techdriver.com.br', gradient: 'from-tec-primary to-cyan-300' },
  { icon: Phone, text: '(17) 98806-3384', href: 'tel:+5517988063384', gradient: 'from-violet-500 to-fuchsia-400' },
  { icon: MapPin, text: 'Catanduva - SP', gradient: 'from-emerald-500 to-teal-300' },
];

const linkClass = 'group inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors';

const FooterLink: React.FC<{ label: string; to?: string; href?: string }> = ({ label, to, href }) => {
  const content = (
    <>
      <ChevronRight className="w-3.5 h-3.5 -ml-5 opacity-0 text-tec-primary group-hover:ml-0 group-hover:opacity-100 transition-all duration-300" />
      {label}
    </>
  );
  return to
    ? <Link to={to} className={linkClass}>{content}</Link>
    : <a href={href} className={linkClass}>{content}</a>;
};

const Watermark: React.FC = () => (
  <div aria-hidden className="pointer-events-none select-none text-center font-display font-bold leading-none tracking-tighter text-[18vw] md:text-[14vw] text-transparent bg-clip-text bg-gradient-to-b from-white/[0.07] to-transparent -mb-[3vw]">
    TECHDRIVER
  </div>
);

const Footer: React.FC = () => {
  const { pathname } = useLocation();

  // Nas páginas internas, o rodapé mostra só a marca d'água
  if (pathname !== '/') {
    return (
      <footer className="relative bg-black overflow-hidden pt-12">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-tec-primary to-transparent" />
        <Watermark />
      </footer>
    );
  }

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Linha de luz no topo */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-tec-primary to-transparent" />
      {/* Brilhos de fundo */}
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-tec-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative pt-20">

        {/* Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 max-w-6xl mx-auto mb-16">

          {/* Marca */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Transformando a mobilidade urbana através de tecnologia de ponta. Unidades próprias, franquias e sistemas White-Label.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className={`w-10 h-10 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.04] ${s.hover} hover:border-transparent flex items-center justify-center text-gray-400 hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="text-white font-semibold mb-5 flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full bg-gradient-to-b from-tec-primary to-violet-500" />
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}><FooterLink {...l} /></li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contato */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-semibold mb-5 flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-gradient-to-b from-tec-primary to-violet-500" />
              Contato
            </h4>
            <ul className="space-y-3">
              {contacts.map((c) => {
                const inner = (
                  <>
                    <span className={`w-9 h-9 shrink-0 rounded-lg bg-gradient-to-br ${c.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <c.icon size={16} />
                    </span>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors break-all">{c.text}</span>
                  </>
                );
                const cls = 'group flex items-center gap-3 p-2 -m-2 rounded-xl hover:bg-white/[0.04] transition-colors';
                return (
                  <li key={c.text}>
                    {c.href ? <a href={c.href} className={cls}>{inner}</a> : <div className={cls}>{inner}</div>}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="max-w-6xl mx-auto border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} TechDriver — Todos os direitos reservados.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            Voltar ao topo
            <span className="w-8 h-8 rounded-lg border border-white/10 group-hover:border-tec-primary group-hover:bg-tec-primary/10 flex items-center justify-center transition-all">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      <div className="-mt-4">
        <Watermark />
      </div>
    </footer>
  );
};

export default Footer;
