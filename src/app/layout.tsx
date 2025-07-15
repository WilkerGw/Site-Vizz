// vizz-novo/src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css' // Importação essencial

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Teste de Estilo - Óticas Vizz',
  description: 'Teste para verificar a estilização do Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}