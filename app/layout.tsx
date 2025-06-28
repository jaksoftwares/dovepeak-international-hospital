import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dovepeak International Hospital - Excellence in Healthcare',
  description: 'Dovepeak International Hospital provides world-class medical care with state-of-the-art facilities, expert physicians, and compassionate service. Your health is our priority.',
  keywords: 'hospital, healthcare, medical care, doctors, emergency, surgery, cardiology, pediatrics, oncology, dovepeak',
  authors: [{ name: 'Dovepeak International Hospital' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Dovepeak International Hospital - Excellence in Healthcare',
    description: 'World-class medical care with expert physicians and state-of-the-art facilities.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dovepeak International Hospital',
    description: 'Excellence in Healthcare - Your health is our priority.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0066cc" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}