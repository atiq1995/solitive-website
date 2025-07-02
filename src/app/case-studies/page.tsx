'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Calendar, Users, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Revolution",
      client: "TechMart Pakistan",
      category: "Custom Software Development",
      image: "/api/placeholder/600/400",
      challenge: "Legacy system couldn't handle growing customer base and modern payment methods.",
      solution: "Built scalable e-commerce platform with modern architecture, payment integrations, and mobile responsiveness.",
      results: [
        "300% increase in online sales",
        "50% reduction in cart abandonment",
        "99.9% uptime achievement"
      ],
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      duration: "6 months",
      teamSize: "8 developers"
    },
    {
      id: 2,
      title: "Restaurant Chain POS System",
      client: "Foodie's Paradise",
      category: "POS Systems",
      image: "/api/placeholder/600/400",
      challenge: "Multiple locations with different systems causing inventory and sales tracking issues.",
      solution: "Unified POS system with real-time inventory, sales analytics, and centralized management.",
      results: [
        "70% faster order processing",
        "Real-time inventory across 15 locations",
        "40% reduction in food waste"
      ],
      technologies: ["React", "Express.js", "MongoDB", "Socket.io", "Electron"],
      duration: "4 months",
      teamSize: "6 developers"
    },
    {
      id: 3,
      title: "Healthcare Management System",
      client: "City General Hospital",
      category: "ERP Systems",
      image: "/api/placeholder/600/400",
      challenge: "Paper-based patient records and inefficient appointment scheduling.",
      solution: "Complete digital transformation with patient management, appointment system, and billing integration.",
      results: [
        "80% reduction in paperwork",
        "50% faster patient processing",
        "Complete audit trail compliance"
      ],
      technologies: ["React", "Django", "PostgreSQL", "Redis", "Docker"],
      duration: "8 months",
      teamSize: "10 developers"
    },
    {
      id: 4,
      title: "Manufacturing ERP Solution",
      client: "Steel Works Industries",
      category: "ERP Systems",
      image: "/api/placeholder/600/400",
      challenge: "Disconnected departments and manual inventory tracking causing production delays.",
      solution: "Integrated ERP system connecting production, inventory, sales, and finance departments.",
      results: [
        "45% reduction in production time",
        "90% inventory accuracy",
        "Real-time production monitoring"
      ],
      technologies: ["Angular", "Spring Boot", "Oracle", "Kafka", "Kubernetes"],
      duration: "12 months",
      teamSize: "12 developers"
    },
    {
      id: 5,
      title: "Mobile Banking App",
      client: "QuickPay Financial",
      category: "Mobile App Development",
      image: "/api/placeholder/600/400",
      challenge: "Traditional banking customers needed modern mobile banking experience.",
      solution: "Secure, user-friendly mobile banking app with biometric authentication and instant transfers.",
      results: [
        "500K+ app downloads",
        "95% user satisfaction rate",
        "60% increase in digital transactions"
      ],
      technologies: ["React Native", "Node.js", "MongoDB", "JWT", "Firebase"],
      duration: "5 months",
      teamSize: "7 developers"
    },
    {
      id: 6,
      title: "E-Invoicing Compliance System",
      client: "Multi-Corp Enterprises",
      category: "E-Invoicing Solutions",
      image: "/api/placeholder/600/400",
      challenge: "Manual invoicing process and FBR compliance requirements.",
      solution: "Automated e-invoicing system with FBR integration and digital signature capabilities.",
      results: [
        "100% FBR compliance achieved",
        "75% reduction in invoicing time",
        "Zero compliance penalties"
      ],
      technologies: ["Vue.js", "Laravel", "MySQL", "XML", "Digital Signatures"],
      duration: "3 months",
      teamSize: "5 developers"
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
              Success <span className="text-gradient">Stories</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Discover how we've transformed businesses across industries with innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-strong p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-sm rounded-full border border-neon-blue/20">
                      {study.category}
                    </span>
                    <ExternalLink className="h-5 w-5 text-white/60 group-hover:text-neon-blue transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                    {study.title}
                  </h3>
                  <p className="text-white/70 font-medium">{study.client}</p>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                    <p className="text-white/70 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Solution:</h4>
                    <p className="text-white/70 text-sm">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                  <div className="space-y-2">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-neon-green" />
                        <span className="text-white/70 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/5 text-white/80 text-xs rounded border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-white/60 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{study.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>{study.teamSize}</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={`/case-studies/${study.id}`}
                  className="inline-flex items-center space-x-2 text-neon-blue hover:text-neon-green transition-colors group-hover:translate-x-1 transition-transform duration-300"
                >
                  <span className="text-sm font-medium">Read Full Case Study</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
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
              Ready to Be Our Next <span className="text-gradient">Success Story</span>?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Let&apos;s discuss how we can transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/quote"
                className="px-8 py-4 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/5 transition-all duration-300"
              >
                Get Free Quote
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