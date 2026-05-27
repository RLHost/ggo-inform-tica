"use client";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-2">Fale Conosco</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Acelerar a TI da sua Empresa?</h3>
          <p className="text-blue-100 text-lg">
            Entre em contato hoje mesmo para agendarmos uma visita ou realizarmos um diagnóstico completo da sua infraestrutura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
            <Phone className="w-8 h-8 text-blue-400 mb-4" />
            <h4 className="text-lg font-bold mb-2">Telefone / WhatsApp</h4>
            <p className="text-blue-100 mb-2">Fale direto com nossos especialistas.</p>
            <a href="https://wa.me/5519992624338" className="text-xl font-bold text-white hover:text-blue-300 transition-colors">(19) 9.9262.4338</a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
            <Mail className="w-8 h-8 text-blue-400 mb-4" />
            <h4 className="text-lg font-bold mb-2">E-mail</h4>
            <p className="text-blue-100 mb-2">Envie sua solicitação para cotações.</p>
            <a href="mailto:contato@ggoinformatica.com.br" className="text-base font-bold text-white hover:text-blue-300 transition-colors break-all">contato@ggoinformatica.com.br</a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
            <Clock className="w-8 h-8 text-blue-400 mb-4" />
            <h4 className="text-lg font-bold mb-2">Horário de Atendimento</h4>
            <p className="text-blue-100">Segunda à Sexta: 8h - 18h</p>
            <p className="text-blue-100">Sábados: 8h - 12h</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
            <MapPin className="w-8 h-8 text-blue-400 mb-4" />
            <h4 className="text-lg font-bold mb-2">Localização</h4>
            <p className="text-blue-100">Campinas - SP</p>
            <p className="text-blue-100 text-sm mt-2">Atendemos toda a cidade de Campinas e municípios vizinhos com agilidade.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}