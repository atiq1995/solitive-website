'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap, Code, Smartphone, Database } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'
import FloatingElements from '@/components/3D/FloatingElements'

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support" }
  ]

  const techIcons = [
    { Icon: Code, label: "Custom Development", color: "text-neon-blue" },
    { Icon: Smartphone, label: "Mobile Apps", color: "text-neon-green" },
    { Icon: Database, label: "Data Solutions", color: "text-neon-purple" },
    { Icon: Zap, label: "Fast Performance", color: "text-neon-pink" }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Static background grid for better performance */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* 3D Floating Elements - Temporarily disabled for troubleshooting */}
      {/* <Suspense fallback={null}>
        <FloatingElements />
      </Suspense> */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <Zap className="h-4 w-4 text-neon-blue mr-2" />
              <span className="text-sm text-white/80">Next-Generation IT Solutions</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-white">Transform Your</span>
              <span className="block text-gradient glow-text" style={{
                background: 'linear-gradient(45deg, #00D4FF 0%, #39FF14 50%, #00FFFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Business Future</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge IT solutions that propel your business into the digital age. 
              From custom software to AI-powered systems, we build technology that works for you.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center space-x-2 overflow-hidden"
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <button className="group flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <Play className="h-5 w-5 ml-1" />
              </div>
              <span className="font-medium">Watch Demo</span>
            </button>
          </motion.div>

          {/* Tech Icons */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto pt-8">
            {techIcons.map(({ Icon, label, color }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="group flex flex-col items-center space-y-2 p-4 rounded-lg glass hover:bg-white/5 transition-all duration-300"
              >
                <Icon className={`h-8 w-8 ${color} group-hover:scale-110 transition-transform duration-300`} />
                <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {stats.map(({ number, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                  {number}
                </div>
                <div className="text-sm text-white/60">
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <motion.div
              className="w-1 h-3 bg-neon-blue rounded-full mx-auto"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>


    </section>
  )
}

export default HeroSection 