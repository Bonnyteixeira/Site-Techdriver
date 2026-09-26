import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideData } from '../types';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const slides: SlideData[] = [
  {
    id: 1,
    image: '/assets/carrossel/slide-1.jpg', // Trânsito urbano à noite
    title: 'A Nova Era da Mobilidade Urbana',
    subtitle: 'Tecnologia de ponta e gestão inteligente para transformar o transporte na sua cidade.'
  },
  {
    id: 2,
    image: '/assets/carrossel/slide-2.jpg', // Usuário no app pelo celular
    title: 'Sistema White-Label Completo',
    subtitle: 'Sua marca, nossa tecnologia. Apps Android, iOS e Painel Administrativo prontos para operar.'
  },
  {
    id: 3,
    image: '/assets/carrossel/slide-3.jpg', // Motorista ao volante
    title: 'Seja Dono de uma Franquia',
    subtitle: 'Baixo investimento inicial e alta rentabilidade com suporte total da matriz TechDriver.'
  },
  {
    id: 4,
    image: '/assets/carrossel/slide-4.jpg', // Família junto ao carro
    title: 'Mobilidade para Toda a Família',
    subtitle: 'Viagens seguras e confortáveis para quem você ama, a poucos toques de distância.'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Pré-carrega as imagens para a troca não esperar o download
  useEffect(() => {
    slides.forEach(({ image }) => { new Image().src = image; });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative h-screen min-h-[700px] w-full overflow-hidden bg-tec-dark flex items-center justify-center">
      
      {/* Background Slides */}
      {/* Crossfade: a nova imagem surge por cima da anterior, que só sai depois */}
      <AnimatePresence initial={false}>
        <motion.img
          key={currentSlide}
          src={slides[currentSlide].image}
          alt="Hero Background"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1, zIndex: 1, transition: { opacity: { duration: 1.2, ease: "easeInOut" }, scale: { duration: 6, ease: "easeOut" } } }}
          exit={{ opacity: 1, zIndex: 0, transition: { duration: 1.2 } }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-tec-dark via-transparent to-transparent z-10" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="max-w-3xl">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light mb-10 leading-relaxed max-w-2xl border-l-4 border-tec-primary pl-6">
              {slides[currentSlide].subtitle}
            </p>
          </motion.div>
        </div>

        {/* Centralizado na seção e fora do bloco animado, para não piscar a cada troca de slide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mt-16 md:mt-32"
        >
          <button
            onClick={() => navigate('/franquias')}
            className="group relative inline-flex items-center justify-center"
          >
            {/* Halo pulsante */}
            <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-tec-primary via-violet-500 to-emerald-400 opacity-60 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-pulse" />
            {/* Borda em gradiente */}
            <span className="relative p-[2px] rounded-full bg-gradient-to-r from-tec-primary via-violet-500 to-emerald-400">
              <span className="relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-tec-primary to-violet-600 px-6 py-2.5 text-white text-sm font-semibold tracking-wide group-hover:scale-[1.03] transition-transform duration-300">
                {/* Reflexo que atravessa o botão */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                <span className="relative">Quero ser Franqueado</span>
                <span className="relative w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </span>
            </span>
          </button>
        </motion.div>
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