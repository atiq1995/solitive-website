'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowRight, Tag, Search } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Custom Software Development in 2024",
      excerpt: "Exploring the latest trends, technologies, and methodologies shaping the custom software development landscape.",
      author: "Ahmad Hassan",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Technology",
      tags: ["Software Development", "AI", "Trends"],
      featured: true,
      image: "/api/placeholder/800/400"
    },
    {
      id: 2,
      title: "FBR E-Invoicing: Complete Guide for Pakistani Businesses",
      excerpt: "Everything you need to know about FBR's e-invoicing requirements and how to ensure compliance.",
      author: "Sarah Ahmed",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Compliance",
      tags: ["FBR", "E-Invoicing", "Compliance", "Pakistan"],
      featured: false,
      image: "/api/placeholder/600/300"
    },
    {
      id: 3,
      title: "ERP Implementation: Best Practices for Success",
      excerpt: "Key strategies and considerations for successful ERP system implementation in medium to large enterprises.",
      author: "Muhammad Ali",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "ERP",
      tags: ["ERP", "Implementation", "Best Practices"],
      featured: false,
      image: "/api/placeholder/600/300"
    },
    {
      id: 4,
      title: "Mobile App Development: Native vs Cross-Platform",
      excerpt: "Comprehensive comparison of native and cross-platform development approaches for mobile applications.",
      author: "Fatima Khan",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "Mobile Development",
      tags: ["Mobile Apps", "React Native", "Flutter"],
      featured: false,
      image: "/api/placeholder/600/300"
    },
    {
      id: 5,
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential cybersecurity measures every small business should implement to protect their digital assets.",
      author: "Omar Sheikh",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "Security",
      tags: ["Cybersecurity", "Small Business", "Protection"],
      featured: false,
      image: "/api/placeholder/600/300"
    },
    {
      id: 6,
      title: "Cloud Migration: A Strategic Approach",
      excerpt: "Step-by-step guide to successful cloud migration for businesses looking to modernize their infrastructure.",
      author: "Aisha Malik",
      date: "2023-12-25",
      readTime: "9 min read",
      category: "Cloud Computing",
      tags: ["Cloud Migration", "AWS", "Digital Transformation"],
      featured: false,
      image: "/api/placeholder/600/300"
    }
  ]

  const categories = ["All", "Technology", "Compliance", "ERP", "Mobile Development", "Security", "Cloud Computing"]

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

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
              Tech <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Stay updated with the latest trends, insights, and best practices in technology and software development.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-3 pl-12 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-neon-blue focus:outline-none transition-colors"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 px-4 relative">
          <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Featured Article</h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-strong p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-sm rounded-full border border-neon-blue/20">
                      {featuredPost.category}
                    </span>
                    <span className="px-3 py-1 bg-neon-green/10 text-neon-green text-sm rounded-full border border-neon-green/20">
                      Featured
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center space-x-6 text-sm text-white/60 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center space-x-2 text-neon-blue hover:text-neon-green transition-colors group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <span className="font-medium">Read Full Article</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="text-center text-white/60">Featured Article Image</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-8 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 relative">
        <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-strong p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                {/* Post Image Placeholder */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10 mb-6">
                  <div className="text-center text-white/60 text-sm">Article Image</div>
                </div>

                {/* Category & Tags */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-neon-purple/10 text-neon-purple text-xs rounded-full border border-neon-purple/20">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    {post.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="text-xs text-white/60">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title & Excerpt */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                  {post.title}
                </h3>
                
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-white/60 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More */}
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center space-x-2 text-neon-blue hover:text-neon-green transition-colors group-hover:translate-x-1 transition-transform duration-300"
                >
                  <span className="text-sm font-medium">Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
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
              Stay Updated with <span className="text-gradient">Tech Insights</span>
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Subscribe to our newsletter and get the latest articles delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-neon-blue focus:outline-none transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  )
} 