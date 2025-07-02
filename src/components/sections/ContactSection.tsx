'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const ContactSection = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-white/70">
            Ready to transform your business? Let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-strong p-6 rounded-xl border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-neon-blue/10 rounded-lg border border-neon-blue/20">
                    <Mail className="h-6 w-6 text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-white/70">info@solitive.net</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-neon-green/10 rounded-lg border border-neon-green/20">
                    <Phone className="h-6 w-6 text-neon-green" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <p className="text-white/70">+923343196739</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-neon-purple/10 rounded-lg border border-neon-purple/20">
                    <MapPin className="h-6 w-6 text-neon-purple" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Office</h4>
                    <p className="text-white/70">F-11/3, Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-strong p-6 rounded-xl border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-neon-blue focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-neon-blue focus:outline-none transition-colors"
                />
              </div>
              
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-neon-blue focus:outline-none transition-colors"
              />
              
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-neon-blue focus:outline-none transition-colors resize-none"
              />
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection 