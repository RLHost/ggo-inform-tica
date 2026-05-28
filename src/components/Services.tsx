"use client";
import { motion } from 'motion/react'; 
import Link from 'next/link';
import { servicesData, categories } from '../data/services';

export default function Services() { 
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
        
        <div className="space-y-20">
          {categories.map((category, catIdx) => (
            <motion.div 
              key={category.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="mb-10 flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-brand-blue mb-3">{category.name}</h3>
                <p className="text-slate-600 max-w-2xl">{category.description}</p>
                <div className="w-16 h-1 bg-brand-accent mt-4 rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
                {servicesData.filter(s => s.categoryId === category.id).map((srv, idx) => ( 
                  <Link href={`/servicos/${srv.slug}`} key={srv.slug}>
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      viewport={{ once: true, margin: "-50px" }} 
                      transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }} 
                      whileHover={{ y: -10 }}
                      className="bg-white h-full p-8 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-brand-accent/50 hover:shadow-xl hover:shadow-brand-accent/10 transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col" 
                    > 
                      {/* Card Hover Glow Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                      <div className="bg-brand-light group-hover:bg-brand-accent w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10 text-brand-accent group-hover:text-white [&>svg]:w-8 [&>svg]:h-8 [&>svg]:transition-colors"> 
                        {srv.icon} 
                      </div> 
                      <h4 className="text-xl font-bold text-brand-blue mb-3 relative z-10">{srv.title}</h4> 
                      <p className="text-slate-600 leading-relaxed relative z-10 flex-grow">{srv.shortDesc}</p> 
                      <div className="mt-6 text-brand-accent font-semibold flex items-center relative z-10 group-hover:underline">
                        Saber mais
                      </div>
                    </motion.div> 
                  </Link>
                ))} 
              </div> 
            </motion.div>
          ))}
        </div>
      </div> 
    </section> 
  ); 
}