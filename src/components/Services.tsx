"use client";
import { MonitorDot, Network, Wrench, ShieldAlert } from 'lucide-react'; 
import { motion } from 'motion/react'; 

export default function Services() { 
  const services = [ 
    { icon: <Wrench className="w-8 h-8 text-brand-accent group-hover:text-white transition-colors" />, title: 'Manutenção de Computadores', desc: 'Montagem, formatação, configuração e reparos essenciais para prolongar a vida útil dos seus equipamentos.' }, 
    { icon: <Network className="w-8 h-8 text-brand-accent group-hover:text-white transition-colors" />, title: 'Infraestrutura de Redes', desc: 'Administração e projetos de redes ponto a ponto até estruturas complexas e seguras, cabeadas ou wireless.' }, 
    { icon: <MonitorDot className="w-8 h-8 text-brand-accent group-hover:text-white transition-colors" />, title: 'Instalação de Sistemas', desc: 'Implementação de sistemas operacionais, softwares específicos e periféricos para máxima eficiência.' }, 
    { icon: <ShieldAlert className="w-8 h-8 text-brand-accent group-hover:text-white transition-colors" />, title: 'Suporte Preventivo', desc: 'Visitas periódicas para evitar falhas críticas, garantindo que seu negócio funcione continuamente e sem problemas.' } 
  ]; 

  return ( 
    <section id="services" className="relative py-24 bg-slate-50 overflow-hidden"> 
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="text-center max-w-3xl mx-auto mb-16"> 
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-2">Nossas Soluções</h2> 
            <h3 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6"> A Cura Definitiva para a Dor de Cabeça com a TI da sua Empresa </h3> 
            <p className="text-slate-600 text-lg"> Realizamos uma análise completa do seu ambiente para fornecer soluções que unem qualidade, rapidez e baixo custo. </p> 
          </motion.div>
        </div> 
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> 
          {services.map((srv, idx) => ( 
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }} 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-brand-accent/50 hover:shadow-xl hover:shadow-brand-accent/10 transition-all duration-300 group cursor-default relative overflow-hidden" 
            > 
              {/* Card Hover Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="bg-brand-light group-hover:bg-brand-accent w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10"> 
                {srv.icon} 
              </div> 
              <h4 className="text-xl font-bold text-brand-blue mb-3 relative z-10">{srv.title}</h4> 
              <p className="text-slate-600 leading-relaxed relative z-10">{srv.desc}</p> 
            </motion.div> 
          ))} 
        </div> 
      </div> 
    </section> 
  ); 
}