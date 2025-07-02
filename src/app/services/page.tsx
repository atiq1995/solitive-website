'use client'

import { motion } from 'framer-motion'
import { Code, ShoppingCart, Receipt, Database, Smartphone, Brain, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      slug: "custom-software",
      description: "Tailored software solutions built to meet your unique business requirements and scale with your growth.",
      features: [
        "Full-stack web development",
        "API development and integration",
        "Legacy system modernization",
        "Scalable architecture design"
      ],
      color: "neon-blue",
      price: "Starting from $5,000"
    },
    {
      icon: ShoppingCart,
      title: "POS Systems",
      slug: "pos-systems",
      description: "Advanced point-of-sale systems that streamline transactions and inventory management.",
      features: [
        "Multi-location support",
        "Real-time inventory tracking",
        "Payment gateway integration",
        "Sales analytics and reporting"
      ],
      color: "neon-green",
      price: "Starting from $2,500"
    },
    {
      icon: Receipt,
      title: "E-Invoicing Solutions",
      slug: "e-invoicing",
      description: "FBR-compliant e-invoicing systems that automate tax processes and ensure compliance.",
      features: [
        "FBR integration and compliance",
        "Digital signature support",
        "Automated tax calculations",
        "Real-time invoice tracking"
      ],
      color: "neon-purple",
      price: "Starting from $1,500"
    },
    {
      icon: Database,
      title: "ERP Systems",
      slug: "erp-systems",
      description: "Comprehensive enterprise resource planning solutions to integrate all business processes.",
      features: [
        "Financial management",
        "Supply chain optimization",
        "Human resource management",
        "Business intelligence dashboard"
      ],
      color: "neon-pink",
      price: "Starting from $10,000"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      slug: "mobile-app",
      description: "Native and cross-platform mobile applications that engage users and drive growth.",
      features: [
        "iOS and Android development",
        "Cross-platform solutions",
        "App store optimization",
        "Push notifications and analytics"
      ],
      color: "neon-cyan",
      price: "Starting from $3,000"
    },
    {
      icon: Brain,
      title: "IT Consulting",
      slug: "it-consulting",
      description: "Strategic technology consulting to optimize your IT infrastructure and digital transformation.",
      features: [
        "Technology strategy planning",
        "System architecture review",
        "Digital transformation roadmap",
        "Performance optimization"
      ],
      color: "neon-blue",
      price: "Starting from $150/hour"
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to transform your business operations 
              and drive digital innovation across all industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-strong p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                {/* Icon & Title */}
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-lg bg-${service.color}/10 border border-${service.color}/20 mb-4`}>
                    <service.icon className={`h-8 w-8 text-${service.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-white/70 text-sm">
                        <CheckCircle className="h-4 w-4 text-neon-green" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className={`inline-block px-3 py-1 bg-${service.color}/10 text-${service.color} text-sm rounded-full border border-${service.color}/20`}>
                    {service.price}
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/quote"
                    className="w-full px-6 py-3 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/5 transition-all duration-300 text-center block"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose <span className="text-gradient">Solitive Technologies</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Delivered", description: "Successfully completed projects across various industries" },
              { number: "50+", label: "Happy Clients", description: "Satisfied clients who trust our expertise" },
              { number: "5+", label: "Years Experience", description: "Years of experience in IT solutions" },
              { number: "24/7", label: "Support", description: "Round-the-clock technical support" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-6 rounded-xl border border-white/10 text-center"
              >
                <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-white font-semibold mb-2">{stat.label}</div>
                <div className="text-white/60 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-strong p-12 rounded-xl border border-white/10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your <span className="text-gradient">Business</span>?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Let&apos;s discuss how our cutting-edge solutions can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/quote"
                className="px-8 py-4 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/5 transition-all duration-300"
              >
                Request Quote
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