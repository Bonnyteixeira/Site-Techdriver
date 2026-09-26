import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, FileCheck, Car } from 'lucide-react';

// Links das lojas do App Motorista
const PLAY_STORE_URL = '';
const APP_STORE_URL = '';

const steps = [
  { icon: Smartphone, text: 'Baixe o App Motorista na loja do seu celular' },
  { icon: FileCheck, text: 'Faça seu cadastro e envie os documentos pelo app' },
  { icon: Car, text: 'Veja os planos da sua cidade e comece a rodar' },
];

const GooglePlayIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
    <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
  </svg>
);

const AppleIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
  </svg>
);

const StoreButton: React.FC<{ href: string; icon: React.ReactNode; caption: string; store: string }> = ({ href, icon, caption, store }) => (
  <a
    href={href || undefined}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-3.5 h-[62px] pl-5 pr-7 rounded-2xl bg-black border border-white/20 text-white hover:border-emerald-400/60 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_-15px_rgba(52,211,153,0.6)] transition-all duration-300"
  >
    {icon}
    <span className="flex flex-col leading-tight text-left">
      <span className="text-[11px] text-gray-400">{caption}</span>
      <span className="font-display text-lg font-semibold">{store}</span>
    </span>
  </a>
);

const DriverDownload: React.FC = () => {
  return (
    <section id="baixar-app" className="py-14 md:py-20 bg-tec-dark scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative flex flex-col items-center gap-10 md:gap-12 p-6 md:p-16 rounded-[32px] bg-[#111318] border border-emerald-400/25 overflow-hidden"
        >
          <div className="absolute -left-40 -bottom-52 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.16),transparent_70%)] pointer-events-none" />

          <div className="relative flex flex-col items-center text-center gap-6">
            <h2 className="text-3xl md:text-[46px] font-display font-semibold text-white leading-[1.12] tracking-tight">
              Pronto para dirigir com{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-tec-primary">mais autonomia?</span>
            </h2>
            <p className="text-gray-400 text-base md:text-[17px] leading-relaxed max-w-xl">
              Baixe o App Motorista e faça seu cadastro direto pelo celular. É por lá que você conhece os planos e os valores da sua cidade.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <StoreButton href={PLAY_STORE_URL} icon={<GooglePlayIcon />} caption="Disponível no" store="Google Play" />
              <StoreButton href={APP_STORE_URL} icon={<AppleIcon />} caption="Baixar na" store="App Store" />
            </div>
          </div>

          <div className="relative w-full max-w-xl p-6 md:p-8 rounded-3xl bg-tec-dark border border-white/[0.08] flex flex-col justify-center">
            <div className="text-sm font-semibold text-white mb-2">Como fazer seu cadastro</div>
            <ol className="flex flex-col">
              {steps.map((s, i) => (
                <li key={s.text} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center font-display font-semibold text-[15px] ${
                      i === steps.length - 1
                        ? 'bg-gradient-to-br from-emerald-400 to-tec-primary text-[#04201A]'
                        : 'border border-emerald-400/40 text-emerald-400'
                    }`}>
                      {i + 1}
                    </div>
                    {i < steps.length - 1 && <div className="w-px flex-1 min-h-[28px] bg-emerald-400/25" />}
                  </div>
                  <div className="flex items-start gap-3 pt-2 pb-7">
                    <s.icon className="w-5 h-5 shrink-0 text-gray-400 mt-0.5" strokeWidth={1.75} />
                    <span className="text-gray-200 leading-relaxed">{s.text}</span>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-sm text-gray-500 leading-relaxed">
              Depois do envio dos documentos, a central da sua cidade analisa o cadastro e libera seu acesso.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DriverDownload;
