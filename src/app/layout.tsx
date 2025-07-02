import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
              ga('create', 'UA-XXXXXXXXX-X', 'auto');
              ga('send', 'pageview');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-dark-100 text-white overflow-x-hidden`}>
        <div id="root" className="min-h-screen relative">
          {children}
        </div>
      </body>
    </html>
  )
} 