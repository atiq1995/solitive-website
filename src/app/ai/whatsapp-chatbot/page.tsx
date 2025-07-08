'use client'

import { motion } from 'framer-motion'
import { MessageSquare, CheckCircle, ArrowRight, Clock, Users, DollarSign, Bot, Zap, Shield, Globe, Smartphone, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function WhatsAppChatbotPage() {
  const features = [
    {
      title: "Natural Language Understanding",
      description: "Advanced NLP capabilities to understand customer queries in conversational language",
      icon: MessageCircle
    },
    {
      title: "24/7 Availability",
      description: "Provide round-the-clock customer support without human intervention",
      icon: Clock
    },
    {
      title: "Order Processing",
      description: "Take orders, process payments, and manage inventory directly through WhatsApp",
      icon: DollarSign
    },
    {
      title: "Multi-Language Support",
      description: "Communicate with customers in English, Urdu, Arabic, and other languages",
      icon: Globe
    },
    {
      title: "Integration Ready",
      description: "Seamlessly integrate with your existing CRM, ERP, and e-commerce systems",
      icon: Zap
    },
    {
      title: "Secure Communications",
      description: "End-to-end encryption and secure data handling for customer privacy",
      icon: Shield
    }
  ]

  const benefits = [
    "Reduce customer service costs by up to 70%",
    "Increase customer satisfaction with instant responses",
    "Handle unlimited simultaneous conversations",
    "Capture leads and qualify prospects automatically",
    "Provide consistent brand experience across all interactions",
    "Generate detailed analytics and conversation insights"
  ]

  const useCases = [
    {
      industry: "E-commerce",
      scenario: "Customer support, order tracking, product recommendations, and abandoned cart recovery"
    },
    {
      industry: "Healthcare",
      scenario: "Appointment scheduling, medication reminders, and basic health information"
    },
    {
      industry: "Banking & Finance",
      scenario: "Account inquiries, transaction history, loan applications, and fraud alerts"
    },
    {
      industry: "Education",
      scenario: "Student support, course information, admission queries, and fee payments"
    },
    {
      industry: "Real Estate",
      scenario: "Property inquiries, viewing appointments, and lead qualification"
    },
    {
      industry: "Food & Beverage",
      scenario: "Menu inquiries, order placement, delivery tracking, and customer feedback"
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
                <div className="inline-flex p-3 bg-green-500/10 rounded-lg border border-green-500/20 mb-6">
                  <MessageSquare className="h-8 w-8 text-green-500" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  AI <span className="text-gradient">WhatsApp Chatbot</span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 mb-8">
                  Transform your WhatsApp into a powerful customer service platform with our AI-powered chatbot that works directly within WhatsApp to answer FAQs, take orders, provide support, and operate 24/7 with natural language understanding.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/quote"
                    className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
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
                <div className="bg-gradient-to-r from-green-400 to-blue-500 w-full h-64 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Smartphone className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">WhatsApp Chatbot Interface</p>
                    <p className="text-sm opacity-80">Visual placeholder for chatbot demo</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Key Capabilities</h3>
                <div className="space-y-3">
                  {[
                    "Instant FAQ responses",
                    "Order placement & tracking",
                    "Customer support tickets",
                    "Lead qualification",
                    "Appointment scheduling"
                  ].map((capability, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
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
                Powerful <span className="text-gradient">Features</span>
              </h2>
              <p className="text-lg text-white/70">
                Everything you need to transform your WhatsApp into a customer service powerhouse
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
                  <div className="inline-flex p-3 bg-green-500/10 rounded-lg border border-green-500/20 mb-4">
                    <feature.icon className="h-6 w-6 text-green-500" />
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
                  Business <span className="text-gradient">Benefits</span>
                </h2>
                <p className="text-lg text-white/70 mb-8">
                  Discover how our AI WhatsApp Chatbot can transform your customer service operations and drive business growth.
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
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
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
                  <div className="inline-flex p-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Customer Satisfaction</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-500">99%</div>
                    <div className="text-white/70 text-sm">Uptime</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-500">24/7</div>
                    <div className="text-white/70 text-sm">Support</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-500">70%</div>
                    <div className="text-white/70 text-sm">Cost Reduction</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-500">∞</div>
                    <div className="text-white/70 text-sm">Conversations</div>
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
                Industry <span className="text-gradient">Use Cases</span>
              </h2>
              <p className="text-lg text-white/70">
                See how businesses across different industries leverage our WhatsApp AI Chatbot
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
                Ready to Transform Your <span className="text-gradient">WhatsApp Experience</span>?
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Join hundreds of businesses already using our AI WhatsApp Chatbot to provide exceptional customer service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
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

 