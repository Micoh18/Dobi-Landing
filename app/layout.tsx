import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DOBI - AI Agent for Real World Assets on Blockchain',
  description: 'DOBI: La IA que valida y gestiona activos reales en blockchain. Transparencia, seguridad y automatización para tus inversiones en el nuevo mundo descentralizado.',
  keywords: 'DOBI, AI, blockchain, RWA, real world assets, IoT, DeFi, cryptocurrency',
  authors: [{ name: 'DOBI Protocol' }],
  openGraph: {
    title: 'DOBI - AI Agent for Real World Assets',
    description: 'Transparencia, seguridad y automatización para tus inversiones en blockchain',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased bg-dobi-dark`}>
        <div className="particles">
          {/* Floating particles for ambient effect */}
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        {children}
      </body>
    </html>
  )
}
