'use client'

import { motion } from 'framer-motion'
import { Receipt, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function EInvoicingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex p-3 bg-neon-purple/10 rounded-lg border border-neon-purple/20 mb-6">
                  <Receipt className="h-8 w-8 text-neon-purple" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  FBR Compliant <span className="text-gradient">E-Invoicing</span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 mb-8">
                  Automate your tax processes and ensure complete compliance with FBR regulations through our comprehensive e-invoicing solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/quote"
                    className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-pink rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-8 py-4 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/5 transition-all duration-300 text-center"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-strong p-8 rounded-xl border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Compliance Features</h3>
                <div className="space-y-4">
                  {[
                    "FBR integration and compliance",
                    "Digital signature support",
                    "Automated tax calculations",
                    "Real-time invoice tracking",
                    "Secure data encryption",
                    "Audit trail maintenance"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-neon-purple" />
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Affordable <span className="text-gradient">Compliance</span>
            </h2>
            <div className="glass-strong p-8 rounded-xl border border-white/10 max-w-md mx-auto">
              <div className="text-4xl font-bold text-gradient mb-4">Starting from $1,500</div>
              <p className="text-white/70 mb-6">Complete FBR compliance solution</p>
              <div className="space-y-3 mb-6">
                {[
                  "FBR registration assistance",
                  "System setup & configuration",
                  "Staff training included",
                  "6 months free support"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-neon-purple" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/quote"
                className="w-full px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-pink rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Your Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
} 