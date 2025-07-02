'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-dark-100">
      <Navigation />
      
      <section className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-gradient">Solitive Technologies</span>
            </h1>
            <p className="text-lg text-white/70 max-w-4xl mx-auto">
              We are a forward-thinking IT company dedicated to transforming businesses through innovative technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="glass p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-white/70">
                To empower businesses with cutting-edge technology solutions that drive growth and innovation.
              </p>
            </div>
            <div className="glass p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
              <p className="text-white/70">
                To be the leading catalyst for digital transformation in the modern business landscape.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-12">
              Why Choose <span className="text-gradient">Us?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass p-6 rounded-xl border border-white/10">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-semibold text-white mb-2">Fast Delivery</h4>
                <p className="text-white/70">Quick turnaround times without compromising quality</p>
              </div>
              <div className="glass p-6 rounded-xl border border-white/10">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-xl font-semibold text-white mb-2">Expert Team</h4>
                <p className="text-white/70">Skilled professionals with years of experience</p>
              </div>
              <div className="glass p-6 rounded-xl border border-white/10">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-xl font-semibold text-white mb-2">Innovation</h4>
                <p className="text-white/70">Cutting-edge solutions using latest technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 