'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-dark-100">
      <Navigation />
      
      <section className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get Your <span className="text-gradient">Custom Quote</span>
            </h1>
            <p className="text-lg text-white/70">
              Tell us about your project and get a personalized quote.
            </p>
          </div>

          <div className="glass p-8 rounded-xl border border-white/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-neon-blue focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-neon-blue focus:outline-none"
                />
              </div>
              
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-neon-blue focus:outline-none"
              />
              
              <textarea
                placeholder="Project Description"
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-neon-blue focus:outline-none resize-none"
              />
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300"
              >
                Get Custom Quote
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 