'use client'

import { motion } from 'framer-motion'
import { Headphones, CheckCircle, ArrowRight, Clock, Users, DollarSign, Zap, Shield, Globe, Mic, Volume2, Smartphone } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function VoiceAssistantPage() {
  const features = [
    {
      title: "Voice Command Recognition",
      description: "Advanced speech recognition technology that understands natural voice commands",
      icon: Mic
    },
    {
      title: "Multi-Platform Support",
      description: "Works on websites, mobile apps, kiosks, and IoT devices",
      icon: Smartphone
    },
    {
      title: "Natural Voice Synthesis",
      description: "Human-like voice responses with customizable accents and tones",
      icon: Volume2
    },
    {
      title: "Accessibility Features",
      description: "Designed for users with visual impairments and mobility limitations",
      icon: Shield
    },
    {
      title: "Multi-Language Support",
      description: "Supports multiple languages including English, Urdu, Arabic, and more",
      icon: Globe
    },
    {
      title: "Real-time Processing",
      description: "Instant voice processing with minimal latency for smooth conversations",
      icon: Zap
    }
  ]

  const benefits = [
    "Improve accessibility for users with disabilities",
    "Provide hands-free interaction for busy environments",
    "Increase user engagement with natural voice interactions",
    "Reduce time to complete tasks with voice commands",
    "Support multiple languages for global audiences",
    "Enable voice-first experiences for modern devices"
  ]

  const useCases = [
    {
      industry: "Healthcare",
      scenario: "Patient check-ins, appointment scheduling, and hands-free medical record access"
    },
    {
      industry: "Retail & E-commerce",
      scenario: "Product search, order placement, and customer service through voice commands"
    },
    {
      industry: "Smart Buildings",
      scenario: "Building automation, visitor assistance, and facility information kiosks"
    },
    {
      industry: "Automotive",
      scenario: "In-car assistance, navigation, and hands-free communication"
    },
    {
      industry: "Education",
      scenario: "Interactive learning, accessibility support, and language practice"
    },
    {
      industry: "Banking",
      scenario: "Account inquiries, transaction processing, and secure voice authentication"
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
                <div className="inline-flex p-3 bg-pink-500/10 rounded-lg border border-pink-500/20 mb-6">
                  <Headphones className="h-8 w-8 text-pink-500" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Voice-Enabled <span className="text-gradient">AI Assistant</span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 mb-8">
                  Create natural, hands-free interactions with our advanced voice-enabled AI assistant. Perfect for websites, mobile apps, kiosks, and IoT devices with full accessibility support and multi-language capabilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/quote"
                    className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
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
                <div className="bg-gradient-to-r from-pink-400 to-red-500 w-full h-64 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Volume2 className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Voice Assistant Interface</p>
                    <p className="text-sm opacity-80">Visual placeholder for voice demo</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Voice Commands</h3>
                <div className="space-y-3">
                  {[
                    "\"Tell me about your services\"",
                    "\"Book an appointment\"",
                    "\"What are your business hours?\"",
                    "\"Show me product catalog\"",
                    "\"Connect me to support\""
                  ].map((command, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Mic className="h-4 w-4 text-pink-500" />
                      <span className="text-white/80 text-sm">{command}</span>
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
                Advanced <span className="text-gradient">Voice Features</span>
              </h2>
              <p className="text-lg text-white/70">
                Cutting-edge voice technology that enables natural, intuitive interactions
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
                  <div className="inline-flex p-3 bg-pink-500/10 rounded-lg border border-pink-500/20 mb-4">
                    <feature.icon className="h-6 w-6 text-pink-500" />
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
                  Voice-First <span className="text-gradient">Experiences</span>
                </h2>
                <p className="text-lg text-white/70 mb-8">
                  Discover how voice-enabled AI can transform user interactions and create more accessible, engaging experiences.
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
                      <CheckCircle className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
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
                  <div className="inline-flex p-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mb-4">
                    <Headphones className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Voice Performance</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-pink-500">{'<'} 200ms</div>
                    <div className="text-white/70 text-sm">Response Time</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-red-500">98%</div>
                    <div className="text-white/70 text-sm">Accuracy</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-500">20+</div>
                    <div className="text-white/70 text-sm">Languages</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-500">100%</div>
                    <div className="text-white/70 text-sm">Accessible</div>
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
                See how voice-enabled AI transforms user experiences across different industries
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
                Ready to Enable <span className="text-gradient">Voice Interactions</span>?
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Transform your digital experiences with natural voice interactions and accessibility features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
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

 