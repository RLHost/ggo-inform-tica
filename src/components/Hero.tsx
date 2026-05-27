"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80",
    badge: "Suporte Técnico de Excelência",
    title: (
      <>
        Pare de Perder Dinheiro com <span className="text-blue-400">Computadores Lentos</span> e Redes Instáveis.
      </>
    ),
    description: "A GGO Informática oferece manutenção preventiva, infraestrutura segura e suporte rápido para que sua empresa nunca pare de faturar por problemas de TI."
  },
  {
    image: "https://images.unsplash.com/photo-1605041197572-1dcedff5655e?auto=format&fit=crop&w=1920&q=80",
    badge: "Eficiência e Segurança",
    title: (
      <>
        <span className="text-blue-400">Instalação de Sistemas</span> e Suporte Preventivo de Alto Nível.
      </>
    ),
    description: "Implementamos sistemas de ponta e realizamos visitas preventivas, evitando falhas críticas e perda de dados, mantendo seu negócio 100% focado no crescimento."
  },
  {
    image: "https://images.unsplash.com/photo-1694857807827-cd901ede9ba4?auto=format&fit=crop&w=1920&q=80",
    badge: "Hardware Otimizado",
    title: (
      <>
        Prolongue a <span className="text-blue-400">Vida Útil</span> e a Performance dos seus Equipamentos.
      </>
    ),
    description: "Realizamos manutenção e configuração precisas, resolvendo lentidões crônicas e reduzindo drasticamente os custos com compra de novos computadores."
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const handleDragEnd = (e: any, { offset }: any) => {
    if (offset.x < -50) nextSlide();
    else if (offset.x > 50) prevSlide();
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900 group">
      <motion.div 
        className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].image}
              alt="Infraestrutura de TI"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 via-brand-blue/80 to-transparent mix-blend-multiply z-10"></div>
        {/* Glow effect overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent z-10 opacity-70 blur-3xl mix-blend-overlay pointer-events-none"></div>
      </motion.div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm font-medium tracking-wide">
                  {slides[currentSlide].badge}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                {slides[currentSlide].title}
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>
            
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button 
              onClick={scrollToContact}
              className="flex items-center justify-center space-x-2 bg-brand-accent hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/40 group hover:shadow-blue-500/60 transform hover:-translate-y-1"
            >
              <span>Solicitar Diagnóstico Gratuito</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-wrap items-center gap-6 text-slate-300 text-sm font-medium"
          >
            <div className="flex items-center bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <ShieldCheck className="w-5 h-5 text-blue-400 mr-2" />
              <span>Atendimento Personalizado</span>
            </div>
            <div className="flex items-center bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <ShieldCheck className="w-5 h-5 text-blue-400 mr-2" />
              <span>Baixo Custo, Alta Qualidade</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/20 text-white/70 hover:bg-black/40 hover:text-white backdrop-blur-sm transition-all hidden md:block opacity-0 group-hover:opacity-100"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={32} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/20 text-white/70 hover:bg-black/40 hover:text-white backdrop-blur-sm transition-all hidden md:block opacity-0 group-hover:opacity-100"
        aria-label="Próximo slide"
      >
        <ChevronRight size={32} />
      </button>
      
      {/* Carousel Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-500 rounded-full ${
              currentSlide === idx ? 'w-8 h-2 bg-brand-accent' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Ir para o slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}