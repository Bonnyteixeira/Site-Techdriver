import React, { useCallback } from 'react';

// Guarda a posição do mouse no cartão (em variáveis CSS) para a luz seguir o cursor
export const useSpotlight = () =>
  useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  }, []);

interface SpotlightProps {
  color?: string;
  size?: number;
}

// Luz que acompanha o cursor. O cartão precisa das classes `group isolate relative overflow-hidden`
// e do onMouseMove de useSpotlight; a luz fica atrás do conteúdo e acima do fundo do cartão.
const Spotlight: React.FC<SpotlightProps> = ({ color = 'rgba(52,211,153,0.14)', size = 320 }) => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    style={{ background: `radial-gradient(${size}px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${color}, transparent 70%)` }}
  />
);

export default Spotlight;
