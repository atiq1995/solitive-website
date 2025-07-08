'use client'

import { motion } from 'framer-motion'
import { Users, CheckCircle, ArrowRight, Clock, Ticket, DollarSign, Zap, Shield, Globe, BarChart3, Settings, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function CustomerSupportPage() {
  const features = [
    {
      title: "Intelligent Ticket Creation",
      description: "Automatically generate support tickets with proper categorization and priority levels",
      icon: Ticket
    },
    {
      title: "Issue Resolution Engine",
      description: "Resolve common issues instantly using our knowledge base and AI reasoning",
      icon: Zap
    },
    {
      title: "Smart Escalation",
      description: "Automatically escalate complex issues to the right human agents",
      icon: AlertCircle
    },
    {
      title: "CRM Integration",
      description: "Seamlessly integrate with your existing CRM and helpdesk systems",
      icon: Settings
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive reporting on support metrics and performance analytics",
      icon: BarChart3
    },
    {
      title: "Multi-Channel Support",
      description: "Handle support across email, chat, phone, and social media platforms",
      icon: Globe
    }
  ]

  const benefits = [
    "Reduce first-response time from hours to seconds",
    "Resolve 80% of common issues automatically",
    "Decrease support costs by up to 60%",
    "Improve customer satisfaction scores",
    "Provide 24/7 support coverage",
    "Scale support operations without adding staff"
  ]

  const useCases = [
    {
      industry: "SaaS Companies",
      scenario: "Technical support, billing inquiries, feature requests, and user onboarding"
    },
    {
      industry: "E-commerce",
      scenario: "Order status, returns, product questions, and payment issues"
    },
    {
      industry: "Financial Services",
      scenario: "Account inquiries, transaction disputes, and compliance information"
    },
    {
      industry: "Healthcare",
      scenario: "Appointment scheduling, insurance questions, and patient support"
    },
    {
      industry: "Telecommunications",
      scenario: "Service outages, billing support, and plan modifications"
    },
    {
      industry: "Education",
      scenario: "Student support, course information, and technical assistance"
    }
  ]

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
                <div className="inline-flex p-3 bg-red-500/10 rounded-lg border border-red-500/20 mb-6">
                  <Users className="h-8 w-8 text-red-500" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  AI <span className="text-gradient">Customer Support Desk</span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 mb-8">
                  Transform your customer support with our AI-powered first-level support system that creates tickets, resolves common issues, and escalates complex problems to human agents when needed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/quote"
                    className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
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
                <div className="bg-gradient-to-r from-red-400 to-orange-500 w-full h-64 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-white text-center">
                    <BarChart3 className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Support Dashboard</p>
                    <p className="text-sm opacity-80">Visual placeholder for analytics</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Support Capabilities</h3>
                <div className="space-y-3">
                  {[
                    "Auto-ticket generation",
                    "Issue classification",
                    "Knowledge base search",
                    "Escalation management",
                    "Performance analytics"
                  ].map((capability, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-red-500" />
                      <span className="text-white/80">{capability}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive <span className="text-gradient">Support Features</span>
              </h2>
              <p className="text-lg text-white/70">
                Everything you need to provide exceptional customer support at scale
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass p-6 rounded-xl border border-white/10"
                >
                  <div className="inline-flex p-3 bg-red-500/10 rounded-lg border border-red-500/20 mb-4">
                    <feature.icon className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Transform Your <span className="text-gradient">Support Operations</span>
                </h2>
                <p className="text-lg text-white/70 mb-8">
                  Discover how our AI Customer Support Desk can revolutionize your customer service and reduce operational costs.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-white/80">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-strong p-8 rounded-xl border border-white/10"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Support Metrics</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-red-500">{'<'} 30s</div>
                    <div className="text-white/70 text-sm">First Response</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-500">80%</div>
                    <div className="text-white/70 text-sm">Auto-Resolution</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-500">60%</div>
                    <div className="text-white/70 text-sm">Cost Reduction</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-500">24/7</div>
                    <div className="text-white/70 text-sm">Availability</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-black/25 backdrop-blur-sm" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industry <span className="text-gradient">Applications</span>
              </h2>
              <p className="text-lg text-white/70">
                See how different industries leverage our AI Customer Support Desk for better service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.industry}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass p-6 rounded-xl border border-white/10"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.industry}</h3>
                  <p className="text-white/70">{useCase.scenario}</p>
                </motion.div>
              ))}
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
                Ready to Revolutionize Your <span className="text-gradient">Customer Support</span>?
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Join leading companies that have transformed their support operations with our AI Customer Support Desk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
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

 