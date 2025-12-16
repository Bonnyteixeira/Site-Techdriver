import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import Logo from './Logo';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Franquias', href: '/franquias' },
  { label: 'White-Label', href: '/white-label' },
  { label: 'Soluções', href: '/solucoes' },
  { label: 'Motorista', href: '/motorista' },
  { label: 'Contato', href: '/contato' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force dark background if not on home page or if scrolled
  const isHome = location.pathname === '/';
  const headerClass = !isHome || isScrolled 
    ? 'bg-black/90 backdrop-blur-md py-4 shadow-xl border-b border-gray-800' 
    : 'bg-transparent py-6';

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerClass}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.label}
              to={item.href}
              className={`font-medium transition-colors text-sm uppercase tracking-wider ${
                location.pathname === item.href 
                  ? 'text-tec-primary' 
                  : 'text-gray-300 hover:text-tec-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button variant="primary" size="sm" className="bg-tec-primary text-white">
            <User className="w-4 h-4" />
            Área do Cliente
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-t border-zinc-800 py-6 px-6 flex flex-col gap-4 shadow-2xl">
          {navItems.map((item) => (
            <Link 
              key={item.label}
              to={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-2 font-medium ${
                location.pathname === item.href 
                  ? 'text-tec-primary' 
                  : 'text-gray-300 hover:text-tec-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button variant="primary" className="w-full justify-center mt-4">
            Área do Cliente
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;