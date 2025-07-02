'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Clock, Users, MessageSquare } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ContactPage() {
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
              Let&apos;s Build Something <span className="text-gradient">Amazing</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? 
              Get in touch and let&apos;s discuss your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="glass-strong p-8 rounded-xl border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-neon-blue/10 rounded-lg border border-neon-blue/20 mt-1">
                      <Mail className="h-6 w-6 text-neon-blue" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email Us</h3>
                      <p className="text-white/70">info@solitive.net</p>
                      <p className="text-white/70">contact@solitive.net</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-neon-green/10 rounded-lg border border-neon-green/20 mt-1">
                      <Phone className="h-6 w-6 text-neon-green" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Call Us</h3>
                      <p className="text-white/70">+923343196739</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-neon-purple/10 rounded-lg border border-neon-purple/20 mt-1">
                      <MapPin className="h-6 w-6 text-neon-purple" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Visit Us</h3>
                      <p className="text-white/70">Solitive Technologies Pvt Ltd</p>
                      <p className="text-white/70">F-11/3, Islamabad, Pakistan</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-neon-pink/10 rounded-lg border border-neon-pink/20 mt-1">
                      <Clock className="h-6 w-6 text-neon-pink" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Business Hours</h3>
                      <p className="text-white/70">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p className="text-white/70">Sat: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass p-6 rounded-xl border border-white/10 text-center">
                  <Users className="h-8 w-8 text-neon-blue mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gradient">24hrs</div>
                  <div className="text-sm text-white/70">Response Time</div>
                </div>
                <div className="glass p-6 rounded-xl border border-white/10 text-center">
                  <MessageSquare className="h-8 w-8 text-neon-green mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gradient">Free</div>
                  <div className="text-sm text-white/70">Consultation</div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="glass-strong p-8 rounded-xl border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">Start Your Project</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-neon-blue focus:outline-none transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-neon-blue focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-neon-blue focus:outline-none transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-neon-blue focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-neon-blue focus:outline-none transition-colors">
                      <option value="" className="bg-dark-200">Select Service</option>
                      <option value="custom-software" className="bg-dark-200">Custom Software Development</option>
                      <option value="pos-systems" className="bg-dark-200">POS Systems</option>
                      <option value="e-invoicing" className="bg-dark-200">E-Invoicing Solutions</option>
                      <option value="erp" className="bg-dark-200">ERP Systems</option>
                      <option value="mobile-app" className="bg-dark-200">Mobile App Development</option>
                      <option value="consulting" className="bg-dark-200">IT Consulting</option>
                    </select>
                    
                    <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-neon-blue focus:outline-none transition-colors">
                      <option value="" className="bg-dark-200">Budget Range</option>
                      <option value="under-5k" className="bg-dark-200">Under $5,000</option>
                      <option value="5k-15k" className="bg-dark-200">$5,000 - $15,000</option>
                      <option value="15k-50k" className="bg-dark-200">$15,000 - $50,000</option>
                      <option value="50k-100k" className="bg-dark-200">$50,000 - $100,000</option>
                      <option value="100k-plus" className="bg-dark-200">$100,000+</option>
                    </select>
                  </div>
                  
                  <textarea
                    rows={6}
                    placeholder="Tell us about your project *"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-neon-blue focus:outline-none transition-colors resize-none"
                  />
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  )
} 