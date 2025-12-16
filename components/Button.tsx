import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "font-display font-semibold transition-all duration-300 rounded-lg flex items-center justify-center gap-2 active:scale-95";
  
  const variants = {
    primary: "bg-tec-primary text-white hover:bg-opacity-90 shadow-lg shadow-tec-primary/20 hover:shadow-tec-primary/40",
    outline: "border-2 border-tec-primary text-tec-primary hover:bg-tec-primary hover:text-white",
    white: "bg-white text-tec-dark hover:bg-gray-100",
    gold: "bg-tec-gold text-black hover:bg-yellow-500 shadow-lg shadow-tec-gold/20 hover:shadow-tec-gold/40",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;