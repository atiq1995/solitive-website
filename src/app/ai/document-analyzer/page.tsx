'use client'

import { motion } from 'framer-motion'
import { FileText, CheckCircle, ArrowRight, Clock, Users, DollarSign, Zap, Shield, Globe, Brain, AlertTriangle, Search } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function DocumentAnalyzerPage() {
  const features = [
    {
      title: "Intelligent Document Summaries",
      description: "Generate concise summaries of lengthy documents using advanced NLP technology",
      icon: FileText
    },
    {
      title: "Risk Flag Detection",
      description: "Automatically identify potential risks, compliance issues, and red flags in documents",
      icon: AlertTriangle
    },
    {
      title: "Key Insights Extraction",
      description: "Extract important information, dates, names, and critical data points",
      icon: Brain
    },
    {
      title: "Multi-Format Support",
      description: "Process PDFs, Word documents, Excel sheets, and various text formats",
      icon: Globe
    },
    {
      title: "Advanced Search",
      description: "Search through document content with semantic understanding and context",
      icon: Search
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with encryption, access controls, and audit trails",
      icon: Shield
    }
  ]

  const benefits = [
    "Reduce document review time by up to 90%",
    "Identify critical information instantly",
    "Ensure compliance with automated risk detection",
    "Process thousands of documents simultaneously",
    "Maintain document confidentiality and security",
    "Generate actionable insights from unstructured data"
  ]

  const useCases = [
    {
      industry: "Legal Services",
      scenario: "Contract analysis, legal research, due diligence, and case document review"
    },
    {
      industry: "Financial Services",
      scenario: "Loan application processing, compliance checking, and financial report analysis"
    },
    {
      industry: "Healthcare",
      scenario: "Medical record analysis, research paper review, and clinical documentation"
    },
    {
      industry: "Real Estate",
      scenario: "Property document analysis, lease agreement review, and title document processing"
    },
    {
      industry: "Government",
      scenario: "Policy document analysis, regulation compliance, and public record processing"
    },
    {
      industry: "Insurance",
      scenario: "Claims processing, policy analysis, and risk assessment documentation"
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        
        {/* Hero Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20 mb-6">
                  <FileText className="h-8 w-8 text-cyan-500" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  AI <span className="text-gradient">Document Analyzer</span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 mb-8">
                  Transform your document processing with our AI-powered analyzer that extracts key insights, generates summaries, identifies risks, and processes PDFs and Word files using advanced natural language processing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/quote"
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Request Demo</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-8 py-4 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/5 transition-all duration-300 text-center"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-strong p-8 rounded-xl border border-white/10"
              >
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 w-full h-64 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Brain className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Document Analysis</p>
                    <p className="text-sm opacity-80">Visual placeholder for analyzer</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Supported Formats</h3>
                <div className="space-y-3">
                  {[
                    "PDF documents",
                    "Word files (.docx, .doc)",
                    "Excel spreadsheets",
                    "Text files (.txt, .rtf)",
                    "PowerPoint presentations"
                  ].map((format, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-500" />
                      <span className="text-white/80">{format}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced <span className="text-gradient">Analysis Features</span>
              </h2>
              <p className="text-lg text-white/70">
                Powerful AI capabilities that transform how you process and understand documents
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass p-6 rounded-xl border border-white/10"
                >
                  <div className="inline-flex p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20 mb-4">
                    <feature.icon className="h-6 w-6 text-cyan-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Revolutionize <span className="text-gradient">Document Processing</span>
                </h2>
                <p className="text-lg text-white/70 mb-8">
                  Discover how our AI Document Analyzer can transform your document workflows and unlock valuable insights from your data.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-cyan-500 mt-1 flex-shrink-0" />
                      <span className="text-white/80">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-strong p-8 rounded-xl border border-white/10"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Processing Power</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-500">90%</div>
                    <div className="text-white/70 text-sm">Time Reduction</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-500">1000+</div>
                    <div className="text-white/70 text-sm">Docs/Hour</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-500">99%</div>
                    <div className="text-white/70 text-sm">Accuracy</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-500">100%</div>
                    <div className="text-white/70 text-sm">Secure</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-black/25 backdrop-blur-sm" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industry <span className="text-gradient">Use Cases</span>
              </h2>
              <p className="text-lg text-white/70">
                See how professionals across industries use our AI Document Analyzer
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.industry}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass p-6 rounded-xl border border-white/10"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.industry}</h3>
                  <p className="text-white/70">{useCase.scenario}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Unlock <span className="text-gradient">Document Intelligence</span>?
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Transform your document processing workflow with AI-powered analysis and insights extraction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/5 transition-all duration-300 text-center"
                >
                  Book Demo
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

 