import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import FloatingWhatsApp from '../src/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'GGO Informática | Suporte de Excelência em TI',
  description: 'Soluções em TI, manutenção de computadores, montagem de PCs gamer, servidores, PABX Virtual, backup em nuvem e redes para a sua empresa em Campinas e região.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'msapplication-TileImage',
        url: '/ms-tile.png',
      },
    ],
  },
  openGraph: {
    title: 'GGO Informática | Suporte de Excelência em TI',
    description: 'Soluções avançadas em TI, manutenção preventiva, servidores, PABX e proteção de dados em Campinas.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'GGO Informática',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'GGO Informática',
              description: 'Suporte de Excelência em TI, Manutenção de Computadores, Servidores e Redes.',
              image: 'https://ggoinformatica.com.br/logo_ggo_horiz.png',
              telephone: '+5519992624338',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Campinas',
                addressRegion: 'SP',
                addressCountry: 'BR'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '-22.9099',
                longitude: '-47.0626'
              }
            })
          }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
