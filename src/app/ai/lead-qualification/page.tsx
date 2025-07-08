'use client'

import { motion } from 'framer-motion'
import { Target, CheckCircle, ArrowRight, Clock, Users, DollarSign, Zap, Shield, Globe, BarChart3, Bell, Filter } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function LeadQualificationPage() {
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
                <div className="inline-flex p-3 bg-orange-500/10 rounded-lg border border-orange-500/20 mb-6">
                  <Target className="h-8 w-8 text-orange-500" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  AI <span className="text-gradient">Lead Qualification Bot</span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 mb-8">
                  Instantly qualify leads through intelligent conversation, scoring them based on answers with automatic CRM sync and notification triggers for your sales team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/quote"
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Request Demo</span>
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
                <div className="bg-gradient-to-r from-orange-400 to-yellow-500 w-full h-64 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Filter className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Lead Scoring Interface</p>
                    <p className="text-sm opacity-80">Visual placeholder for qualification</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Qualification Process</h3>
                <div className="space-y-3">
                  {[
                    "Intelligent conversation flow",
                    "Real-time lead scoring",
                    "CRM integration",
                    "Instant notifications",
                    "Detailed lead reports"
                  ].map((capability, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-500" />
                      <span className="text-white/80">{capability}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features and other sections would follow the same pattern */}
        
        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Qualify <span className="text-gradient">Better Leads</span>?
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Transform your lead qualification process with intelligent conversation and automated scoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/5 transition-all duration-300 text-center"
                >
                  Book Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  )
}

 