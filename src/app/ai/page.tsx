'use client'

import { motion } from 'framer-motion'
import { Bot, Brain, MessageSquare, Headphones, Users, Target, Share2, BarChart3, FileText, Calendar, Globe, Shield, ArrowRight, CheckCircle, Zap, Clock, DollarSign } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function AIOverviewPage() {
  const aiProducts = [
    {
      id: 'whatsapp-chatbot',
      name: 'AI WhatsApp Chatbot',
      description: 'A chatbot that works directly within WhatsApp. It can answer FAQs, take orders, provide support, and operate 24/7 with natural language understanding.',
      icon: MessageSquare,
      gradient: 'from-green-400 to-blue-500',
      highlights: ['24/7 Support', 'Natural Language', 'Order Processing']
    },
    {
      id: 'website-bot',
      name: 'AI Website Bot',
      description: 'Smart chatbot for websites that can answer questions, assist with navigation, and increase conversions.',
      icon: Bot,
      gradient: 'from-blue-400 to-purple-500',
      highlights: ['Increase Conversions', 'Smart Navigation', 'Customizable']
    },
    {
      id: 'email-assistant',
      name: 'AI Email Assistant',
      description: 'Automatically replies to incoming emails based on context. Perfect for customer support and lead management.',
      icon: MessageSquare,
      gradient: 'from-purple-400 to-pink-500',
      highlights: ['Auto-Reply', 'Context Aware', 'Lead Management']
    },
    {
      id: 'voice-assistant',
      name: 'Voice-Enabled AI Assistant',
      description: 'A voice-interactive AI bot for websites, mobile apps, or kiosks.',
      icon: Headphones,
      gradient: 'from-pink-400 to-red-500',
      highlights: ['Voice Commands', 'Multi-Platform', 'Accessibility']
    },
    {
      id: 'customer-support',
      name: 'AI Customer Support Desk',
      description: 'AI-powered first-level support that can create tickets, resolve common issues, and escalate when needed.',
      icon: Users,
      gradient: 'from-red-400 to-orange-500',
      highlights: ['Ticket Creation', 'Issue Resolution', 'Auto-Escalation']
    },
    {
      id: 'lead-qualification',
      name: 'AI Lead Qualification Bot',
      description: 'Instantly qualifies leads through conversation, scoring them based on answers.',
      icon: Target,
      gradient: 'from-orange-400 to-yellow-500',
      highlights: ['Lead Scoring', 'Instant Qualification', 'CRM Integration']
    },
    {
      id: 'social-media-bot',
      name: 'AI Social Media Bot',
      description: 'Auto-replies to DMs and comments on platforms like Instagram, Facebook, and Twitter/X.',
      icon: Share2,
      gradient: 'from-yellow-400 to-green-500',
      highlights: ['Multi-Platform', 'Auto-Reply', 'Brand Consistency']
    },
    {
      id: 'survey-feedback',
      name: 'AI Survey & Feedback Bot',
      description: 'Collects customer opinions conversationally and analyzes sentiment.',
      icon: BarChart3,
      gradient: 'from-green-400 to-cyan-500',
      highlights: ['Sentiment Analysis', 'Conversational', 'Analytics Dashboard']
    },
    {
      id: 'document-analyzer',
      name: 'AI Document Analyzer',
      description: 'Upload PDFs or Word files and get summaries, risk flags, and key insights using NLP.',
      icon: FileText,
      gradient: 'from-cyan-400 to-blue-500',
      highlights: ['Document Summaries', 'Risk Analysis', 'Key Insights']
    },
    {
      id: 'appointment-scheduler',
      name: 'AI Appointment Scheduler',
      description: 'Automatically books appointments based on availability, confirms via email/SMS/WhatsApp.',
      icon: Calendar,
      gradient: 'from-blue-400 to-indigo-500',
      highlights: ['Auto-Booking', 'Multi-Channel', 'Availability Sync']
    },
    {
      id: 'multilingual-bots',
      name: 'Multilingual AI Chatbots',
      description: 'Bots that support multiple languages like English, Urdu, Arabic, etc.',
      icon: Globe,
      gradient: 'from-indigo-400 to-purple-500',
      highlights: ['Multi-Language', 'Auto-Detection', 'Cultural Adaptation']
    },
    {
      id: 'team-assistant',
      name: 'AI Internal Team Assistant',
      description: 'Private AI bot for internal use—helps teams find documents, answer policy questions, and summarize reports.',
      icon: Shield,
      gradient: 'from-purple-400 to-pink-500',
      highlights: ['Document Search', 'Policy Q&A', 'Report Summaries']
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
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex p-3 bg-neon-blue/10 rounded-lg border border-neon-blue/20 mb-6">
                  <Brain className="h-8 w-8 text-neon-blue" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  AI <span className="text-gradient">Solutions</span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 mb-8 max-w-4xl mx-auto">
                  Transform your business operations with Solitive Technologies' comprehensive suite of AI-powered solutions. 
                  From intelligent chatbots to advanced document analysis, our AI products are designed to automate processes, 
                  enhance customer experiences, and drive business growth through cutting-edge artificial intelligence technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/quote"
                    className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Get AI Quote</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-8 py-4 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/5 transition-all duration-300 text-center"
                  >
                    Schedule AI Consultation
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Products Grid */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our AI <span className="text-gradient">Product Suite</span>
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                Discover our comprehensive range of AI-powered solutions designed to revolutionize your business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={`/ai/${product.id}`}>
                    <div className="glass-strong p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full hover:shadow-neon group-hover:scale-[1.02]">
                      <div className={`inline-flex p-3 bg-gradient-to-r ${product.gradient} rounded-lg mb-4 opacity-90`}>
                        <product.icon className="h-6 w-6 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                        {product.name}
                      </h3>
                      
                      <p className="text-white/70 mb-4 text-sm leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-white/5 text-white/80 text-xs rounded border border-white/10"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-neon-blue group-hover:text-neon-green transition-colors duration-300">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Benefits Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our <span className="text-gradient">AI Solutions</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "24/7 Availability",
                  description: "AI never sleeps - provide round-the-clock service to your customers",
                  icon: Clock
                },
                {
                  title: "Cost Efficient",
                  description: "Reduce operational costs while improving service quality",
                  icon: DollarSign
                },
                {
                  title: "Scalable Solutions",
                  description: "Handle unlimited conversations and grow with your business",
                  icon: Zap
                },
                {
                  title: "Easy Integration",
                  description: "Seamlessly integrate with your existing systems and workflows",
                  icon: CheckCircle
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass p-6 rounded-xl border border-white/10 text-center"
                >
                  <div className="inline-flex p-3 bg-neon-blue/10 rounded-lg border border-neon-blue/20 mb-4">
                    <benefit.icon className="h-6 w-6 text-neon-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-white/70 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-black/25 backdrop-blur-sm" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with <span className="text-gradient">AI</span>?
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Let's discuss how our AI solutions can automate your processes, improve customer experience, and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Start Your AI Journey</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/5 transition-all duration-300 text-center"
                >
                  Talk to AI Expert
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