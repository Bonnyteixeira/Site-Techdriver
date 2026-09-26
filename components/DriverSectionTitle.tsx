import React from 'react';
import { motion } from 'framer-motion';

interface DriverSectionTitleProps {
  title: string;
  highlight: string;
  subtitle?: string;
  // center: tudo centralizado; left: título à esquerda; split: título à esquerda e subtítulo à direita
  align?: 'center' | 'left' | 'split';
  className?: string;
}

// Cabeçalho das seções da página do motorista: título com destaque verde/turquesa
const DriverSectionTitle: React.FC<DriverSectionTitleProps> = ({
  title, highlight, subtitle, align = 'left', className = '',
}) => {
  const heading = (
    <div className={`flex flex-col gap-5 ${align === 'center' ? 'items-center text-center' : ''} ${align === 'split' ? 'max-w-2xl' : ''}`}>
      <h2 className="text-3xl md:text-[46px] font-display font-semibold text-white leading-[1.12] tracking-tight max-w-3xl">
        {title}{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-tec-primary">{highlight}</span>
      </h2>
      {subtitle && align !== 'split' && (
        <p className={`text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-10 md:mb-12 ${align === 'split' ? 'flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16' : ''} ${className}`}
    >
      {heading}
      {subtitle && align === 'split' && (
        <p className="text-gray-400 text-base md:text-[17px] leading-relaxed lg:max-w-md">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default DriverSectionTitle;
