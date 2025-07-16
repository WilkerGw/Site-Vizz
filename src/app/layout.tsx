import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Óticas Vizz - Sua Visão em Primeiro Lugar',
  description: 'Encontre as melhores armações, óculos de sol e lentes de grau. Agende seu exame de vista conosco.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className={`${inter.className} bg-gray-50 flex flex-col min-h-full`}>
        {/* Removido o 'overflow-x-hidden' daqui para permitir que o carrossel funcione */}
        <div className="flex flex-col flex-grow">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}