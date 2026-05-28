"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    
    if (pathname !== '/') {
      router.push(`/#${id}`);
      return;
    }

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 50);
  };

  const navLinks = [
    { name: 'Início', id: 'home' },
    { name: 'Serviços', id: 'services' },
    { name: 'Sobre', id: 'about' },
    { name: 'Contato', id: 'contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white shadow-sm py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="p-1">
              <Image
                src="/logo_ggo_horiz.png"
                alt="GGO Informática"
                width={200}
                height={80}
                className="w-auto h-12 md:h-16 object-contain"
                priority
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="font-medium text-slate-700 hover:text-brand-accent transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-brand-accent hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/30"
            >
              Fale Conosco
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-blue"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-slate-800 font-medium py-2 border-b border-slate-50"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-brand-accent text-white px-4 py-3 rounded-lg font-medium mt-2"
          >
            Fale Conosco
          </button>
        </div>
      )}
    </nav>
  );
}