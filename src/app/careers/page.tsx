'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Users, DollarSign, ArrowRight, Send } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function CareersPage() {
  const openPositions = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Islamabad, Pakistan",
      type: "Full-time",
      experience: "3-5 years",
      salary: "PKR 150,000 - 300,000",
      description: "Join our engineering team to build cutting-edge web applications using modern technologies.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of experience with React.js and Node.js",
        "Experience with TypeScript and Next.js",
        "Knowledge of database design and management",
        "Strong problem-solving skills"
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Health insurance for you and family",
        "Flexible working hours",
        "Learning and development opportunities",
        "Modern office environment"
      ]
    },
    {
      id: 2,
      title: "Mobile App Developer",
      department: "Engineering",
      location: "Remote / Islamabad",
      type: "Full-time",
      experience: "2-4 years",
      salary: "PKR 120,000 - 250,000",
      description: "Develop innovative mobile applications for iOS and Android platforms.",
      requirements: [
        "Experience with React Native or Flutter",
        "Native iOS/Android development knowledge is a plus",
        "Understanding of mobile UI/UX principles",
        "Experience with REST APIs and third-party integrations",
        "Knowledge of app store submission process"
      ],
      benefits: [
        "Remote work flexibility",
        "Latest mobile devices for testing",
        "Professional development budget",
        "Health and wellness programs",
        "Team building activities"
      ]
    },
    {
      id: 3,
      title: "UI/UX Designer",
      department: "Design",
      location: "Islamabad, Pakistan",
      type: "Full-time",
      experience: "2-3 years",
      salary: "PKR 80,000 - 180,000",
      description: "Create beautiful and intuitive user interfaces for web and mobile applications.",
      requirements: [
        "Proficiency in Figma, Adobe Creative Suite",
        "Strong portfolio demonstrating UI/UX skills",
        "Understanding of design systems and principles",
        "Experience with prototyping tools",
        "Knowledge of HTML/CSS is a plus"
      ],
      benefits: [
        "Creative freedom and autonomy",
        "Latest design tools and software",
        "Conference and workshop attendance",
        "Collaborative work environment",
        "Design mentorship program"
      ]
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Islamabad, Pakistan",
      type: "Full-time",
      experience: "3-5 years",
      salary: "PKR 180,000 - 350,000",
      description: "Manage and optimize our cloud infrastructure and deployment processes.",
      requirements: [
        "Experience with AWS, Azure, or Google Cloud",
        "Proficiency in Docker and Kubernetes",
        "Knowledge of CI/CD pipelines",
        "Scripting skills (Python, Bash, etc.)",
        "Experience with monitoring and logging tools"
      ],
      benefits: [
        "Cloud platform certifications sponsored",
        "Latest infrastructure tools access",
        "Technical conference attendance",
        "On-call compensation",
        "Career advancement opportunities"
      ]
    },
    {
      id: 5,
      title: "Business Development Executive",
      department: "Sales",
      location: "Islamabad, Pakistan",
      type: "Full-time",
      experience: "1-3 years",
      salary: "PKR 60,000 - 120,000 + Commission",
      description: "Drive business growth by identifying and securing new client opportunities.",
      requirements: [
        "Bachelor's degree in Business or related field",
        "Excellent communication and presentation skills",
        "Experience in B2B sales is preferred",
        "Understanding of technology solutions",
        "Self-motivated and target-driven"
      ],
      benefits: [
        "Uncapped commission structure",
        "Sales training and development",
        "Travel allowances",
        "Performance bonuses",
        "Client relationship building"
      ]
    }
  ]

  const companyBenefits = [
    {
      icon: Users,
      title: "Great Team",
      description: "Work with talented individuals in a collaborative environment"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Flexible working hours to maintain work-life balance"
    },
    {
      icon: DollarSign,
      title: "Competitive Pay",
      description: "Competitive salaries with performance-based bonuses"
    }
  ]

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
              Join Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Be part of a dynamic team that's transforming businesses through innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Benefits */}
      <section className="py-12 px-4 relative">
        <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {companyBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-6 rounded-xl border border-white/10 text-center"
              >
                <benefit.icon className="h-12 w-12 text-neon-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Open <span className="text-gradient">Positions</span>
            </h2>
            <p className="text-lg text-white/70">
              Find your next career opportunity with us
            </p>
          </div>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-strong p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Job Details */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                      <span className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-sm rounded-full border border-neon-blue/20">
                        {position.department}
                      </span>
                    </div>

                    <p className="text-white/70 mb-6">{position.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-sm text-white/60">
                        <MapPin className="h-4 w-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-white/60">
                        <Clock className="h-4 w-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-white/60">
                        <Users className="h-4 w-4" />
                        <span>{position.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-white/60">
                        <DollarSign className="h-4 w-4" />
                        <span>{position.salary}</span>
                      </div>
                    </div>

                    {/* Requirements & Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.slice(0, 3).map((req, idx) => (
                            <li key={idx} className="text-white/70 text-sm">• {req}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                        <ul className="space-y-2">
                          {position.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="text-white/70 text-sm">• {benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Apply Section */}
                  <div className="lg:col-span-1">
                    <div className="glass p-6 rounded-lg border border-white/10 h-fit">
                      <h4 className="text-white font-semibold mb-4">Ready to Apply?</h4>
                      <p className="text-white/70 text-sm mb-6">
                        Send us your resume and let's discuss how you can contribute to our team.
                      </p>
                      <button className="w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2">
                        <span>Apply Now</span>
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact HR */}
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
              Don't See Your <span className="text-gradient">Dream Role</span>?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg text-white font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Send Your Resume</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="px-8 py-4 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/5 transition-all duration-300">
                Contact HR
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