'use client'

import { motion } from 'framer-motion'
import { Smartphone, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function MobileAppPage() {
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
                <div className="inline-flex p-3 bg-neon-cyan/10 rounded-lg border border-neon-cyan/20 mb-6">
                  <Smartphone className="h-8 w-8 text-neon-cyan" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Mobile App <span className="text-gradient">Development</span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 mb-8">
                  Create engaging mobile experiences with our native and cross-platform app development services that drive user engagement and business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/quote"
                    className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
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
                <h3 className="text-2xl font-bold text-white mb-6">Development Services</h3>
                <div className="space-y-4">
                  {[
                    "iOS and Android development",
                    "Cross-platform solutions",
                    "App store optimization",
                    "Push notifications and analytics",
                    "Backend API integration",
                    "UI/UX design services"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-neon-cyan" />
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
              App Development <span className="text-gradient">Packages</span>
            </h2>
            <div className="glass-strong p-8 rounded-xl border border-white/10 max-w-md mx-auto">
              <div className="text-4xl font-bold text-gradient mb-4">Starting from $3,000</div>
              <p className="text-white/70 mb-6">Complete mobile app solution</p>
              <div className="space-y-3 mb-6">
                {[
                  "iOS and Android apps",
                  "App store submission",
                  "3 months free updates",
                  "Analytics integration"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-neon-cyan" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/quote"
                className="w-full px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
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