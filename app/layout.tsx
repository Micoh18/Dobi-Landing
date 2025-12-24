import type { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
  title: 'DOBI: Onchain AI Agent for IoT and DePIN',
  description: 'Verifies device data and distributes RWA payouts onchain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

