'use client'

import { motion } from 'framer-motion'
import { Code, ShoppingCart, Receipt, Database, Smartphone, Brain, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your unique business requirements and scale with your growth.",
      color: "neon-blue",
      slug: "custom-software"
    },
    {
      icon: ShoppingCart,
      title: "POS Systems", 
      description: "Advanced point-of-sale systems that streamline transactions and inventory management.",
      color: "neon-green",
      slug: "pos-systems"
    },
    {
      icon: Receipt,
      title: "E-Invoicing Solutions",
      description: "FBR-compliant e-invoicing systems that automate tax processes and ensure compliance.",
      color: "neon-purple",
      slug: "e-invoicing"
    },
    {
      icon: Database,
      title: "ERP Systems",
      description: "Comprehensive enterprise resource planning solutions to integrate all business processes.",
      color: "neon-pink",
      slug: "erp-systems"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users and drive growth.",
      color: "neon-cyan",
      slug: "mobile-app"
    },
    {
      icon: Brain,
      title: "IT Consulting",
      description: "Strategic technology consulting to optimize your IT infrastructure and digital transformation.",
      color: "neon-blue",
      slug: "it-consulting"
    }
  ]

  return (
    <section className="py-20 px-4 relative">
      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to transform your business operations 
            and drive digital innovation across all industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-strong p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-neon"
            >
              <div className="mb-6">
                <div className={`inline-flex p-3 rounded-lg bg-${service.color}/10 border border-${service.color}/20`}>
                  <service.icon className={`h-8 w-8 text-${service.color}`} />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-white/70 mb-6 leading-relaxed">
                {service.description}
              </p>

              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center space-x-2 text-white/80 hover:text-white group-hover:translate-x-1 transition-all duration-300"
              >
                <span className="text-sm font-medium">Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-${service.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our cutting-edge solutions can accelerate your digital transformation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300"
          >
            <span>Get Started Today</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection 