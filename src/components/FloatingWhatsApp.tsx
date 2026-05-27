"use client";
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  return (
    <motion.a 
      href="https://wa.me/5519992624338" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg shadow-green-500/40 hover:bg-green-600 transition-colors flex items-center justify-center" 
      aria-label="Falar no WhatsApp"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    > 
      <motion.div 
        animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.6, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-green-400 pointer-events-none"
      ></motion.div> 
      <MessageCircle className="w-7 h-7 relative z-10" /> 
    </motion.a> 
  );
}