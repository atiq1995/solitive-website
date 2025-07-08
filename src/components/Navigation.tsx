'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Zap } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Custom Software', href: '/services/custom-software' },
        { name: 'POS Systems', href: '/services/pos-systems' },
        { name: 'E-Invoicing', href: '/services/e-invoicing' },
        { name: 'ERP Solutions', href: '/services/erp' },
        { name: 'Mobile Apps', href: '/services/mobile-apps' },
        { name: 'IT Consulting', href: '/services/consulting' },
      ]
    },
    { 
      name: 'AI Solutions', 
      href: '/ai',
      dropdown: [
        { name: 'WhatsApp Chatbot', href: '/ai/whatsapp-chatbot' },
        { name: 'Website Bot', href: '/ai/website-bot' },
        { name: 'Email Assistant', href: '/ai/email-assistant' },
        { name: 'Voice Assistant', href: '/ai/voice-assistant' },
        { name: 'Customer Support', href: '/ai/customer-support' },
        { name: 'Lead Qualification', href: '/ai/lead-qualification' },
        { name: 'Social Media Bot', href: '/ai/social-media-bot' },
        { name: 'Survey & Feedback', href: '/ai/survey-feedback' },
        { name: 'Document Analyzer', href: '/ai/document-analyzer' },
        { name: 'Appointment Scheduler', href: '/ai/appointment-scheduler' },
        { name: 'Multilingual Bots', href: '/ai/multilingual-bots' },
        { name: 'Team Assistant', href: '/ai/team-assistant' },
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image 
              src="/logo.png" 
              alt="Solitive Logo" 
              width={192}
              height={192}
              className="h-48 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors duration-300 py-2"
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className="h-4 w-4 transition-transform duration-300" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 glass rounded-lg border border-white/10 overflow-hidden"
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              href="/quote"
              className="relative px-6 py-2 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass border-t border-white/10 mt-1"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block text-white/80 hover:text-white transition-colors duration-300 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block text-white/60 hover:text-white transition-colors duration-300 py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="/quote"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg text-white font-semibold mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation 