import { notFound } from 'next/navigation';
import { servicesData } from '../../../src/data/services';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Obter outros serviços para a navegação de rodapé (remover o serviço atual)
  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[450px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={service.heroImage} 
            alt={service.title} 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-brand-blue/80 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <Link href="/#services" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors font-medium bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full backdrop-blur-md border border-white/20 w-fit mx-auto">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Serviços
          </Link>
          
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="bg-brand-accent p-4 rounded-2xl text-white [&>svg]:w-10 [&>svg]:h-10 shadow-xl shadow-brand-accent/20">
              {service.icon}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section - Descrição */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              Por que escolher nossa solução?
            </h2>
            <div className="w-20 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed font-light text-center md:text-left">
            {service.longDesc.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">O que está incluído</h2>
            <p className="text-slate-600">Confira as entregas principais deste serviço.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start hover:shadow-md transition-shadow">
                <ChevronRight className="w-6 h-6 text-brand-accent mr-4 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Principais Benefícios</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">Resultados reais que a sua empresa alcança ao contratar este serviço.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors h-full flex flex-col">
                <CheckCircle2 className="w-10 h-10 text-brand-accent mb-6 shrink-0" />
                <p className="text-blue-50 text-lg font-medium leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Pronto para otimizar sua TI?
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Fale com um especialista agora mesmo e descubra como o serviço de <strong>{service.title}</strong> pode transformar a sua operação.
          </p>
          <Link 
            href="/#contact"
            className="inline-flex items-center justify-center bg-brand-accent hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-xl shadow-brand-accent/30 hover:-translate-y-1 text-lg"
          >
            Solicitar Orçamento Gratuito
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Outros Serviços Navegação */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-2">Explore Mais Soluções</h2>
              <p className="text-slate-600">Conheça todos os nossos outros serviços especializados em TI.</p>
            </div>
            <Link href="/#services" className="hidden md:inline-flex items-center text-brand-accent font-medium hover:underline">
              Ver todos na página inicial <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((srv, idx) => (
              <Link href={`/servicos/${srv.slug}`} key={srv.slug}>
                <div className="bg-white h-full p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-accent/50 hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col">
                  <div className="bg-slate-50 group-hover:bg-brand-accent w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-3 transition-all duration-300 text-brand-accent group-hover:text-white [&>svg]:w-6 [&>svg]:h-6 shrink-0">
                    {srv.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-brand-blue transition-colors">{srv.title}</h4>
                  <p className="text-sm text-slate-500 line-clamp-2">{srv.shortDesc}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/#services" className="inline-flex items-center text-brand-accent font-medium hover:underline">
              Ver todos na página inicial <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
