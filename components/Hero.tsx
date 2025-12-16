import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { SlideData } from '../types';
import { ChevronRight, PlayCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const slides: SlideData[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop', // Driving/City
    title: 'A Nova Era da Mobilidade Urbana',
    subtitle: 'Tecnologia de ponta e gestão inteligente para transformar o transporte na sua cidade.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop', // Corporate/Tech meeting
    title: 'Sistema White-Label Completo',
    subtitle: 'Sua marca, nossa tecnologia. Apps Android, iOS e Painel Administrativo prontos para operar.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1974&auto=format&fit=crop', // Driver/App usage
    title: 'Seja Dono de uma Franquia',
    subtitle: 'Baixo investimento inicial e alta rentabilidade com suporte total da matriz TechDriver.'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative h-screen min-h-[700px] w-full overflow-hidden bg-tec-dark flex items-center justify-center">
      
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-tec-dark via-transparent to-black/30 z-10" />
          <img 
            src={slides[currentSlide].image} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="max-w-3xl">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-tec-primary/20 text-tec-primary border border-tec-primary/30 rounded-full text-xs font-bold uppercase tracking-widest">
                Líder em Tecnologia
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light mb-10 leading-relaxed max-w-2xl border-l-4 border-tec-primary pl-6">
              {slides[currentSlide].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto" onClick={() => navigate('/franquias')}>
                Quero ser Franqueado <ChevronRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => navigate('/white-label')}>
                <PlayCircle className="w-5 h-5" /> Testar White-Label
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 right-10 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-300 rounded-full ${
              currentSlide === index ? 'w-12 bg-tec-primary' : 'w-4 bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;