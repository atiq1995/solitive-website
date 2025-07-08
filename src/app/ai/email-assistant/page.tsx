'use client'

import { motion } from 'framer-motion'
import { Mail, CheckCircle, ArrowRight, Clock, Users, DollarSign, Zap, Shield, Globe, MessageCircle, Brain, Settings } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function EmailAssistantPage() {
  const features = [
    {
      title: "Context-Aware Responses",
      description: "Analyze email content and respond with relevant, personalized replies",
      icon: Brain
    },
    {
      title: "Multi-Language Support",
      description: "Handle emails in English, Urdu, Arabic, and other languages automatically",
      icon: Globe
    },
    {
      title: "Tone Control",
      description: "Maintain consistent brand voice with customizable response tones",
      icon: Settings
    },
    {
      title: "Lead Management",
      description: "Automatically categorize and prioritize leads based on email content",
      icon: Users
    },
    {
      title: "Integration Ready",
      description: "Seamlessly connect with Gmail, Outlook, and other email platforms",
      icon: Zap
    },
    {
      title: "Secure Processing",
      description: "Enterprise-grade security with end-to-end encryption",
      icon: Shield
    }
  ]

  const benefits = [
    "Respond to emails 24/7 without human intervention",
    "Reduce email response time from hours to seconds",
    "Increase customer satisfaction with instant replies",
    "Automatically qualify and route leads to sales team",
    "Maintain consistent brand communication",
    "Scale email operations without hiring more staff"
  ]

  const useCases = [
    {
      industry: "Customer Support",
      scenario: "Handle common inquiries, troubleshooting, and ticket routing automatically"
    },
    {
      industry: "Sales & Marketing",
      scenario: "Qualify leads, schedule demos, and provide product information"
    },
    {
      industry: "HR & Recruitment",
      scenario: "Screen applications, schedule interviews, and answer candidate questions"
    },
    {
      industry: "E-commerce",
      scenario: "Handle order inquiries, shipping updates, and return requests"
    },
    {
      industry: "Healthcare",
      scenario: "Appointment confirmations, patient inquiries, and basic health information"
    },
    {
      industry: "Education",
      scenario: "Student inquiries, course information, and administrative support"
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
                <div className="inline-flex p-3 bg-purple-500/10 rounded-lg border border-purple-500/20 mb-6">
                  <Mail className="h-8 w-8 text-purple-500" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  AI <span className="text-gradient">Email Assistant</span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 mb-8">
                  Revolutionize your email management with our AI-powered assistant that automatically replies to incoming emails based on context. Perfect for customer support, lead management, and business communications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/quote"
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
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
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 w-full h-64 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Mail className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Email Assistant Interface</p>
                    <p className="text-sm opacity-80">Visual placeholder for email demo</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Key Capabilities</h3>
                <div className="space-y-3">
                  {[
                    "Smart auto-replies",
                    "Context understanding",
                    "Lead qualification",
                    "Email categorization",
                    "Multi-language support"
                  ].map((capability, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-500" />
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
                Intelligent <span className="text-gradient">Features</span>
              </h2>
              <p className="text-lg text-white/70">
                Advanced AI capabilities that understand context and provide meaningful responses
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
                  <div className="inline-flex p-3 bg-purple-500/10 rounded-lg border border-purple-500/20 mb-4">
                    <feature.icon className="h-6 w-6 text-purple-500" />
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
                  Transform Your <span className="text-gradient">Email Operations</span>
                </h2>
                <p className="text-lg text-white/70 mb-8">
                  Discover how our AI Email Assistant can revolutionize your communication workflow and improve customer experience.
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
                      <CheckCircle className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
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
                  <div className="inline-flex p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Email Performance</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-500">{'<'} 1min</div>
                    <div className="text-white/70 text-sm">Response Time</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-pink-500">95%</div>
                    <div className="text-white/70 text-sm">Accuracy</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-500">24/7</div>
                    <div className="text-white/70 text-sm">Availability</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-500">∞</div>
                    <div className="text-white/70 text-sm">Emails/Day</div>
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
                See how different industries leverage our AI Email Assistant for better communication
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
                Ready to Automate Your <span className="text-gradient">Email Workflow</span>?
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Join businesses worldwide that have transformed their email operations with our AI Email Assistant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
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

 