import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  highlight: string;
  subtitle?: string;
  className?: string;
}

// Cabeçalho padrão das seções: título com destaque em gradiente e subtítulo, tudo centralizado
const SectionHeader: React.FC<SectionHeaderProps> = ({ title, highlight, subtitle, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className={`text-center max-w-3xl mx-auto mb-14 ${className}`}
  >
    <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight tracking-tight">
      {title}{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-tec-primary via-violet-400 to-emerald-400">
        {highlight}
      </span>
    </h2>

    {subtitle && (
      <p className="text-gray-400 text-lg leading-relaxed mt-5 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </motion.div>
);

export default SectionHeader;
