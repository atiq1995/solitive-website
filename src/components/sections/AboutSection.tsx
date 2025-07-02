'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, Users } from 'lucide-react'

const AboutSection = () => {
  const values = [
    { icon: Target, title: "Innovation", description: "Cutting-edge technologies" },
    { icon: Heart, title: "Quality", description: "Excellence in every project" },
    { icon: Users, title: "Partnership", description: "True collaboration" },
    { icon: Eye, title: "Vision", description: "Future-focused solutions" }
  ]

  return (
    <section className="py-20 px-4 relative">
      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            About <span className="text-gradient">Solitive Technologies</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            We are a forward-thinking IT company dedicated to transforming businesses through innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="glass-strong p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
            <p className="text-white/70">
              To empower businesses with cutting-edge technology solutions that drive growth and innovation.
            </p>
          </div>
          <div className="glass-strong p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
            <p className="text-white/70">
              To be the leading catalyst for digital transformation in the modern business landscape.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="inline-flex p-4 bg-white/5 rounded-full border border-white/10 mb-4">
                <value.icon className="h-8 w-8 text-neon-blue" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{value.title}</h4>
              <p className="text-white/70 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection 