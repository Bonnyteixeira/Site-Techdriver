import React from 'react';

const Logo: React.FC = () => {
  return (
    <div 
      className="flex items-center gap-2 cursor-pointer select-none group" 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
        <svg 
          viewBox="0 0 200 200" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full"
        >
          {/* Back Orbit */}
          <path 
            d="M40 120 C 40 120, 70 40, 160 70" 
            stroke="white" 
            strokeWidth="12" 
            strokeLinecap="round" 
            className="opacity-40"
          />
          
          {/* Pin Body */}
          <path 
            d="M100 30 C 60 30, 30 60, 30 95 C 30 140, 100 190, 100 190 C 100 190, 170 140, 170 95 C 170 60, 140 30, 100 30 Z" 
            className="fill-tec-primary drop-shadow-lg"
          />
          
          {/* Inner Dot */}
          <circle cx="100" cy="85" r="22" className="fill-tec-dark" />
          
          {/* Front Orbit */}
          <path 
            d="M160 70 C 160 70, 140 160, 40 120" 
            stroke="white" 
            strokeWidth="12" 
            strokeLinecap="round"
            className="opacity-90"
          />
        </svg>
      </div>
      <span className="text-2xl font-display font-bold text-white tracking-wide">
        Tech<span className="text-tec-primary">Driver</span>
      </span>
    </div>
  );
};

export default Logo;