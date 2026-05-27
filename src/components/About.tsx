"use client";

import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  const benefits = [
    'Visitas periódicas para manutenção preventiva',
    'Perfil de atendimento personalizado',
    'Serviços com qualidade, rapidez e baixo custo',
    'Vasta experiência na gestão de infraestrutura de TI'
  ];

  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      {/* Background Animated Glow Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/40 blur-[100px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-brand-light/30 blur-[120px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] group">
              <Image 
                src="/about_datacenter.jpg" 
                alt="Parque Tecnológico e Data Center" 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            
            <div 
              className="absolute -bottom-8 -right-8 bg-brand-blue text-white p-8 rounded-2xl shadow-xl hidden md:block"
            >
              <p className="text-4xl font-bold mb-1">+10</p>
              <p className="text-sm font-medium text-blue-200">Anos de<br/>Experiência</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
            className="lg:w-1/2"
          >
            <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-2">Sobre a GGO Informática</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6 leading-tight">
              Protegemos o Motor Tecnológico do Seu Negócio
            </h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              A GGO Informática nasceu com um propósito claro: acabar com a frustração de empresas que sofrem com equipamentos lentos e redes instáveis. Liderada por <strong>Gilberto Gomide</strong>, que detém profundo conhecimento técnico e vasta experiência profissional, nossa equipe aplica as melhores práticas do mercado para proteger a sua infraestrutura e garantir o andamento ágil do seu trabalho.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Não somos apenas técnicos de informática. Somos parceiros estratégicos que realizam análises completas, instalam os programas certos e garantem que sua equipe foque no que importa: crescer a empresa.
            </p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + (idx * 0.1) }}
                  className="flex items-start hover:translate-x-2 transition-transform duration-300 cursor-default"
                >
                  <CheckCircle2 className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}