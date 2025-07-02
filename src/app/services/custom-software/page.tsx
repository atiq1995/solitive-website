'use client'

import { motion } from 'framer-motion'
import { Code, CheckCircle, ArrowRight, Clock, Users, DollarSign } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function CustomSoftwarePage() {
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
                <Code className="h-8 w-8 text-neon-blue" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Custom <span className="text-gradient">Software Development</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 mb-8">
                Transform your business with tailored software solutions designed specifically for your unique requirements and growth objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Free Quote</span>
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
              <h3 className="text-2xl font-bold text-white mb-6">Service Highlights</h3>
              <div className="space-y-4">
                {[
                  "Full-stack web development",
                  "API development and integration",
                  "Database design and optimization",
                  "Cloud-native architecture",
                  "Legacy system modernization",
                  "Scalable and secure solutions"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-neon-green" />
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Development <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-white/70">
              We follow a proven methodology to deliver exceptional software solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "Understanding your requirements, goals, and technical specifications"
              },
              {
                step: "02", 
                title: "Design & Architecture",
                description: "Creating wireframes, UI/UX designs, and system architecture"
              },
              {
                step: "03",
                title: "Development & Testing", 
                description: "Agile development with continuous testing and quality assurance"
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "Seamless deployment with ongoing maintenance and support"
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-6 rounded-xl border border-white/10 text-center"
              >
                <div className="text-3xl font-bold text-gradient mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{process.title}</h3>
                <p className="text-white/70 text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Technologies We <span className="text-gradient">Master</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend",
                technologies: ["React.js", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"]
              },
              {
                category: "Backend", 
                technologies: ["Node.js", "Python", "PHP", "Java", "C#", ".NET"]
              },
              {
                category: "Database & Cloud",
                technologies: ["PostgreSQL", "MongoDB", "MySQL", "AWS", "Azure", "Docker"]
              }
            ].map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-strong p-6 rounded-xl border border-white/10"
              >
                <h3 className="text-xl font-bold text-white mb-4">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.technologies.map((technology, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/5 text-white/80 text-sm rounded border border-white/10"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transparent <span className="text-gradient">Pricing</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$5,000",
                description: "Perfect for small applications",
                features: ["Simple web application", "Basic functionality", "1 month support", "Source code included"],
                icon: Clock
              },
              {
                name: "Professional", 
                price: "$15,000",
                description: "Ideal for medium-sized projects",
                features: ["Complex web application", "Advanced features", "3 months support", "API integration", "Database optimization"],
                icon: Users,
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large-scale solutions",
                features: ["Enterprise-grade application", "Custom integrations", "6+ months support", "Scalable architecture", "24/7 monitoring"],
                icon: DollarSign
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-strong p-8 rounded-xl border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-neon-blue shadow-neon' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-sm rounded-full border border-neon-blue/20">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <plan.icon className="h-12 w-12 text-neon-blue mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-gradient mb-2">{plan.price}</div>
                  <p className="text-white/70 text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-neon-green" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/quote"
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-neon-blue to-neon-green text-white hover:shadow-neon'
                      : 'border border-white/20 text-white hover:bg-white/5'
                  }`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  )
} 