'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc",
      role: "CEO",
      content: "Solitive Technologies transformed our business with their innovative ERP system. The efficiency gains have been remarkable.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Retail Plus",
      role: "Operations Manager", 
      content: "Their POS system revolutionized our retail operations. The real-time analytics and inventory management are game-changers.",
      rating: 5
    },
    {
      name: "Ahmed Ali",
      company: "Global Enterprises",
      role: "IT Director",
      content: "The custom software solution they built for us exceeded all expectations. Professional team with excellent delivery.",
      rating: 5
    }
  ]

  return (
    <section className="py-20 px-4 bg-dark-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-white/70">
            Hear from businesses that have transformed with our solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="glass p-6 rounded-xl border border-white/10">
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-neon-blue mr-2" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-white/70 mb-6 italic">&quot;{testimonial.content}&quot;</p>
              
              <div>
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-white/60 text-sm">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 