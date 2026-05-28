import { notFound } from 'next/navigation';
import { servicesData } from '../../../src/data/services';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';

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

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={service.heroImage} 
            alt={service.title} 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 to-brand-blue/70 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Link href="/#services" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Serviços
          </Link>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-brand-accent p-3 rounded-xl text-white [&>svg]:w-8 [&>svg]:h-8">
              {service.icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {service.title}
            </h1>
          </div>
          <p className="text-xl text-blue-100 max-w-2xl mt-4">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Content */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-brand-blue mb-8">
                Por que escolher nosso serviço de {service.title}?
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-12">
                {service.longDesc.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 mb-12">
                <h3 className="text-2xl font-bold text-brand-blue mb-6">O que está incluído?</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-brand-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-brand-blue rounded-2xl p-8 text-white sticky top-28 shadow-xl">
                <h3 className="text-xl font-bold mb-6">Principais Benefícios</h3>
                <ul className="space-y-4 mb-8">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0" />
                      <span className="text-blue-100">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-white/20 pt-8 mt-8">
                  <p className="text-sm text-blue-200 mb-4">
                    Pronto para otimizar sua TI? Fale com um especialista agora mesmo.
                  </p>
                  <Link 
                    href="/#contact"
                    className="block w-full text-center bg-brand-accent hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-colors"
                  >
                    Solicitar Orçamento
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
