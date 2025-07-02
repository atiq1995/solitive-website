'use client'

import { motion } from 'framer-motion'
import { Brain, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ITConsultingPage() {
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
                <div className="inline-flex p-3 bg-neon-blue/10 rounded-lg border border-neon-blue/20 mb-6">
                  <Brain className="h-8 w-8 text-neon-blue" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Strategic <span className="text-gradient">IT Consulting</span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 mb-8">
                  Optimize your IT infrastructure and accelerate digital transformation with our expert technology consulting services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/quote"
                    className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Get Free Consultation</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-8 py-4 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/5 transition-all duration-300 text-center"
                  >
                    Schedule Meeting
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-strong p-8 rounded-xl border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Consulting Services</h3>
                <div className="space-y-4">
                  {[
                    "Technology strategy planning",
                    "System architecture review",
                    "Digital transformation roadmap",
                    "Performance optimization",
                    "Security audits and compliance",
                    "Cloud migration strategy"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-neon-blue" />
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
              Consulting <span className="text-gradient">Rates</span>
            </h2>
            <div className="glass-strong p-8 rounded-xl border border-white/10 max-w-md mx-auto">
              <div className="text-4xl font-bold text-gradient mb-4">$150/hour</div>
              <p className="text-white/70 mb-6">Expert technology consulting</p>
              <div className="space-y-3 mb-6">
                {[
                  "Strategic planning sessions",
                  "Technical architecture review",
                  "Implementation roadmap",
                  "Ongoing support available"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-neon-blue" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Book Consultation</span>
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