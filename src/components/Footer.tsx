import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-600 py-3 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="flex justify-center md:justify-start">
          <Image
            src="/logo_ggo_vert.png"
            alt="GGO Informática"
            width={120}
            height={120}
            className="w-auto h-12 object-contain"
          />
        </div>
        <div className="text-sm text-center">
          <p>&copy; {new Date().getFullYear()} GGO Informática. Todos os direitos reservados.</p>
        </div>
        <div className="text-sm text-slate-400 text-center md:text-right">
          Desenvolvido por <a href="https://relvidigital.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors font-medium">Relvi Digital</a>
        </div>
      </div>
    </footer>
  );
}