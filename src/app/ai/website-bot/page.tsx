'use client'

import { motion } from 'framer-motion'
import { Bot, CheckCircle, ArrowRight, Clock, Users, DollarSign, Zap, Shield, Globe, Monitor, MessageCircle, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function WebsiteBotPage() {
  const features = [
    {
      title: "Smart Navigation Assistant",
      description: "Help visitors find what they're looking for with intelligent page recommendations",
      icon: Monitor
    },
    {
      title: "Conversion Optimization",
      description: "Increase sales and leads with strategic conversation flows and CTAs",
      icon: BarChart3
    },
    {
      title: "Customizable Appearance",
      description: "Match your brand with custom colors, fonts, and chat widget designs",
      icon: Globe
    },
    {
      title: "Analytics & Insights",
      description: "Track performance with detailed conversation analytics and user behavior data",
      icon: BarChart3
    },
    {
      title: "Multi-Language Support",
      description: "Serve global customers with automatic language detection and translation",
      icon: Globe
    },
    {
      title: "Easy Integration",
      description: "One-click integration with popular CMS platforms and e-commerce systems",
      icon: Zap
    }
  ]

  const benefits = [
    "Increase website conversion rates by up to 40%",
    "Reduce bounce rates with engaging user interactions",
    "Capture leads even when sales team is offline",
    "Provide instant answers to common questions",
    "Guide users through complex purchase processes",
    "Collect valuable customer feedback and insights"
  ]

  const useCases = [
    {
      industry: "E-commerce",
      scenario: "Product recommendations, cart abandonment recovery, and checkout assistance"
    },
    {
      industry: "SaaS Companies",
      scenario: "Feature explanations, pricing inquiries, and trial sign-up assistance"
    },
    {
      industry: "Healthcare",
      scenario: "Appointment booking, service information, and patient support"
    },
    {
      industry: "Financial Services",
      scenario: "Service explanations, application assistance, and compliance information"
    },
    {
      industry: "Education",
      scenario: "Course information, enrollment assistance, and student support"
    },
    {
      industry: "Real Estate",
      scenario: "Property search, viewing bookings, and mortgage information"
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
                <div className="inline-flex p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 mb-6">
                  <Bot className="h-8 w-8 text-blue-500" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  AI <span className="text-gradient">Website Bot</span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 mb-8">
                  Transform your website into a conversion powerhouse with our intelligent chatbot that answers questions, assists with navigation, and increases conversions through personalized user interactions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/quote"
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
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
                <div className="bg-gradient-to-r from-blue-400 to-purple-500 w-full h-64 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Monitor className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Website Bot Interface</p>
                    <p className="text-sm opacity-80">Visual placeholder for bot demo</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Key Capabilities</h3>
                <div className="space-y-3">
                  {[
                    "Intelligent page recommendations",
                    "Lead capture & qualification",
                    "Product/service explanations",
                    "Conversion optimization",
                    "Real-time analytics"
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

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced <span className="text-gradient">Features</span>
              </h2>
              <p className="text-lg text-white/70">
                Everything you need to create an engaging and conversion-focused website experience
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
                  <div className="inline-flex p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 mb-4">
                    <feature.icon className="h-6 w-6 text-blue-500" />
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
                  Discover how our AI Website Bot can transform your online presence and drive significant business growth.
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
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
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
                  <div className="inline-flex p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Performance Metrics</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-500">40%</div>
                    <div className="text-white/70 text-sm">Conversion Increase</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-500">65%</div>
                    <div className="text-white/70 text-sm">Lead Capture</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-500">80%</div>
                    <div className="text-white/70 text-sm">User Engagement</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-500">24/7</div>
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
                Industry <span className="text-gradient">Use Cases</span>
              </h2>
              <p className="text-lg text-white/70">
                See how businesses across different industries leverage our AI Website Bot
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
                Ready to Boost Your <span className="text-gradient">Website Conversions</span>?
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Join thousands of businesses already using our AI Website Bot to increase engagement and drive sales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
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

 