'use client'

import { motion } from 'framer-motion'
import { Receipt, CheckCircle, ArrowRight, MessageCircle, Shield, Zap, Users, Award, Phone, Globe, Mail, Star, Clock, Database, Settings, FileText, BarChart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
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
                  <span className="text-gradient">FBR</span> Digital Invoicing System
                </h1>
                <p className="text-2xl text-red-400 font-bold mb-4">
                  Now Mandatory for all businesses
                </p>
                <p className="text-lg md:text-xl text-white/70 mb-8">
                  Secure, PRAL-Integrated Billing for Every Business. Complete FBR compliance with our fully integrated digital invoicing solution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/923343196739"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp: 0334 3196739</span>
                  </a>
                  <Link
                    href="/quote"
                    className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-pink rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-strong p-8 rounded-xl border border-white/10"
              >
                <div className="text-center mb-6">
                  <Image src="/fbr-logo.png" alt="FBR Digital Invoicing System" width={128} height={80} className="w-32 h-20 object-contain mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white">Official FBR Integration</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "API integration with FBR",
                    "PRAL Integration via APIs", 
                    "Sandbox Token Generation & Testing",
                    "ERP Setup & Training",
                    "Real-time tax reporting",
                    "Digital signature compliance"
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

        {/* Attention Notice */}
        <section className="py-12 px-4 relative">
          <div className="absolute inset-0 bg-red-500/10 backdrop-blur-sm" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-strong p-8 rounded-xl border border-red-500/30 bg-red-500/5"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-red-500 text-white p-3 rounded-full">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-red-400 mb-4">🚨 Attention Business Owners</h2>
                  <p className="text-lg text-white/90 leading-relaxed">
                    All corporate and non-corporate sales tax registered persons <strong className="text-red-300">must</strong> integrate their 
                    invoicing systems with FBR&apos;s new platform for real-time tax reporting. Compliance is mandatory - don&apos;t get left behind!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Software Features */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-gradient">FBR INTEGRATED</span> INVOICING SOFTWARE
              </h2>
              <p className="text-xl text-white/70 mb-4">Fast | Secure | Reliable</p>
              <p className="text-lg text-white/60">Retailers, Wholesalers & Manufacturers – For all Businesses</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "FBR Compliance",
                  description: "Complete integration with FBR systems ensuring 100% compliance with government regulations.",
                  color: "neon-purple"
                },
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Process invoices in real-time with optimized performance and minimal loading times.",
                  color: "neon-blue"
                },
                {
                  icon: Database,
                  title: "PRAL Integration",
                  description: "Seamless integration with PRAL systems via secure APIs for automated tax reporting.",
                  color: "neon-green"
                },
                {
                  icon: Settings,
                  title: "ERP Integration",
                  description: "Full integration with your existing ERP systems for streamlined business operations.",
                  color: "neon-pink"
                },
                {
                  icon: FileText,
                  title: "Digital Signatures",
                  description: "Built-in digital signature support for legally compliant electronic invoicing.",
                  color: "neon-cyan"
                },
                {
                  icon: BarChart,
                  title: "Advanced Analytics",
                  description: "Comprehensive reporting and analytics to track your invoicing performance.",
                  color: "neon-purple"
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="glass-strong p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`inline-flex p-3 bg-${feature.color}/10 rounded-lg border border-${feature.color}/20 mb-4`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Affordable <span className="text-gradient">Pricing</span>
              </h2>
              <p className="text-xl text-white/70">Choose the plan that fits your business needs</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Per Invoice Plan */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-strong p-8 rounded-xl border border-white/10 relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-neon-blue to-neon-cyan px-4 py-2 rounded-full text-white font-semibold text-sm">
                    MOST POPULAR
                  </span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Pay Per Invoice</h3>
                  <div className="text-5xl font-bold text-gradient mb-4">RS. 10</div>
                  <p className="text-white/70">per invoice processed</p>
                </div>
                <div className="space-y-4 mb-8">
                  {[
                    "FBR API integration",
                    "PRAL compliance",
                    "Real-time processing",
                    "Digital signatures",
                    "24/7 support",
                    "No setup fees"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-neon-blue" />
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/quote"
                  className="w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Start Now</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              {/* Enterprise Plan */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-strong p-8 rounded-xl border border-white/10"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise Setup</h3>
                  <div className="text-5xl font-bold text-gradient mb-4">Custom</div>
                  <p className="text-white/70">Complete implementation solution</p>
                </div>
                <div className="space-y-4 mb-8">
                  {[
                    "Full system setup & configuration",
                    "ERP integration & training",
                    "Sandbox token generation",
                    "Staff training included",
                    "6 months premium support",
                    "Custom feature development"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-neon-purple" />
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="w-full px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-pink rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Contact Sales</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust & Testimonials */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by <span className="text-gradient">Industry Leaders</span>
              </h2>
              <p className="text-xl text-white/70">Join hundreds of businesses already using our FBR Digital Invoicing System</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-strong p-8 rounded-xl border border-white/10"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-lg flex items-center justify-center">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Jadeed Group</h3>
                    <div className="flex text-neon-cyan">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white/80 italic">
                  &ldquo;Companies like Jadeed Group trust our invoicing solution for reliable and compliant ERP integration. 
                  The seamless FBR integration has streamlined our entire invoicing process.&rdquo;
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-strong p-8 rounded-xl border border-white/10"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">500+</div>
                  <p className="text-white/70 mb-4">Businesses Successfully Implemented</p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-neon-blue">99.9%</div>
                      <p className="text-xs text-white/60">Uptime</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-neon-green">24/7</div>
                      <p className="text-xs text-white/60">Support</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-neon-purple">100%</div>
                      <p className="text-xs text-white/60">FBR Compliant</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span className="text-gradient">Implementation</span>
              </h2>
              <p className="text-xl text-white/70">Get up and running in just a few simple steps</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  description: "Free consultation to assess your business needs",
                  icon: Users
                },
                {
                  step: "02", 
                  title: "Setup & Integration",
                  description: "We handle all FBR API and PRAL integration",
                  icon: Settings
                },
                {
                  step: "03",
                  title: "Training",
                  description: "Comprehensive training for your staff",
                  icon: Award
                },
                {
                  step: "04",
                  title: "Go Live",
                  description: "Start processing FBR compliant invoices",
                  icon: Zap
                }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="text-center relative"
                >
                  <div className="glass-strong p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="text-4xl font-bold text-gradient mb-4">{step.step}</div>
                    <div className="inline-flex p-3 bg-neon-purple/10 rounded-lg border border-neon-purple/20 mb-4">
                      <step.icon className="h-6 w-6 text-neon-purple" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white/70 text-sm">{step.description}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-neon-purple to-neon-pink transform -translate-y-1/2" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get <span className="text-gradient">FBR Compliant?</span>
              </h2>
              <p className="text-xl text-white/70 mb-12">
                Contact us today for a free consultation and quote
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="glass-strong p-6 rounded-xl border border-white/10">
                  <Phone className="h-8 w-8 text-neon-blue mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
                  <p className="text-neon-blue font-semibold">0334 3196739</p>
                </div>
                <div className="glass-strong p-6 rounded-xl border border-white/10">
                  <MessageCircle className="h-8 w-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">WhatsApp</h3>
                  <a 
                    href="https://wa.me/923343196739" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-400 font-semibold hover:underline"
                  >
                    0334 3196739
                  </a>
                </div>
                <div className="glass-strong p-6 rounded-xl border border-white/10">
                  <Mail className="h-8 w-8 text-neon-purple mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                  <p className="text-neon-purple font-semibold">info@solitive.net</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/923343196739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Start WhatsApp Chat</span>
                </a>
                <Link
                  href="/quote"
                  className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-pink rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="h-5 w-5" />
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