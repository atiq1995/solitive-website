import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import DISPopup from '../components/DISPopup'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Solitive Technologies - Cutting-Edge IT Solutions for Modern Businesses',
  description: 'Transform your business with our comprehensive IT services including custom software, POS systems, ERP solutions, mobile apps, and IT consulting. From startups to enterprises.',
  keywords: 'IT solutions, custom software, POS systems, ERP, mobile app development, IT consulting, e-invoicing, FBR compliance, Islamabad, Pakistan',
  authors: [{ name: 'Solitive Technologies Pvt Ltd' }],
  openGraph: {
    title: 'Solitive Technologies - Cutting-Edge IT Solutions',
    description: 'Transform your business with our comprehensive IT services including custom software, POS systems, ERP solutions, mobile apps, and IT consulting.',
    url: 'https://solitive.net',
    siteName: 'Solitive Technologies',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Solitive Technologies - IT Company',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solitive Technologies - Cutting-Edge IT Solutions',
    description: 'Transform your business with our comprehensive IT services including custom software, POS systems, ERP solutions, mobile apps, and IT consulting.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={`${inter.className} bg-dark-100 text-white overflow-x-hidden`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        <div id="root" className="min-h-screen relative">
          {children}
          <DISPopup />
        </div>
      </body>
    </html>
  )
} 