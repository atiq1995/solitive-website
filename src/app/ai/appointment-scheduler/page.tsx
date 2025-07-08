'use client'

import { motion } from 'framer-motion'
import { Calendar, CheckCircle, ArrowRight, Clock, Users, DollarSign, Zap, Shield, Globe, Bell, MessageCircle, Smartphone } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function AppointmentSchedulerPage() {
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
                <div className="inline-flex p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 mb-6">
                  <Calendar className="h-8 w-8 text-blue-500" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  AI <span className="text-gradient">Appointment Scheduler</span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 mb-8">
                  Automatically book appointments based on availability and confirm via email, SMS, or WhatsApp with calendar integration and intelligent timezone handling.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/quote"
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
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
                <div className="bg-gradient-to-r from-blue-400 to-indigo-500 w-full h-64 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Calendar className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Scheduler Interface</p>
                    <p className="text-sm opacity-80">Visual placeholder for calendar</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scheduling Features</h3>
                <div className="space-y-3">
                  {[
                    "Auto-booking based on availability",
                    "Multi-channel confirmations",
                    "Calendar integration",
                    "Timezone handling",
                    "Cancellation management"
                  ].map((capability, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span className="text-white/80">{capability}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

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
                Ready to Automate <span className="text-gradient">Appointment Booking</span>?
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Streamline your scheduling process with intelligent automation and multi-channel confirmations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
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

 