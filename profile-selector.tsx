"use client"

import { motion } from "framer-motion"
import {
  Building2,
  Shield,
  User,
  ArrowRight,
  ChevronRight,
  Check,
  Zap,
  Lock,
  Globe,
  BarChart2,
  Wallet,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { Button } from "@/components/ui/button"

export default function ProfileSelector() {
  const router = useRouter()
  const [hoveredProfile, setHoveredProfile] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState("about")

  const handleProfileSelect = (profile: string) => {
    // In a real application, you might store this in localStorage or cookies
    if (profile === "institution") {
      router.push("/institutional")
    } else {
      router.push("/individual")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white flex flex-col">
      {/* Custom font import */}
      <style jsx global>{`
        @import url('https://fonts.cdnfonts.com/css/blauer-neue');
        
        h1, h2, h3, h4, h5, h6, .font-blauer {
          font-family: 'Blauer Neue', sans-serif;
        }
      `}</style>

      {/* Header */}
      <header className="w-full py-6 px-4 border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-blue-800" />
              <span className="text-2xl font-bold tracking-tight font-blauer text-gray-900">SIPRIFI</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#about" className="text-sm font-medium text-gray-600 hover:text-blue-800 transition-colors">
                About Us
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium text-gray-600 hover:text-blue-800 transition-colors"
              >
                How It Works
              </a>
              <a href="#benefits" className="text-sm font-medium text-gray-600 hover:text-blue-800 transition-colors">
                Benefits
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium text-gray-600 hover:text-blue-800 transition-colors"
              >
                Testimonials
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <motion.div
                className="inline-block mb-4"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Shield className="h-16 w-16 text-blue-800 mx-auto" />
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-blauer text-gray-900">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  Welcome to{" "}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="relative inline-block text-blue-800"
                >
                  SIPRIFI
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-blue-800"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1 }}
                  ></motion.span>
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-gray-600 max-w-2xl mx-auto"
              >
                <span className="font-semibold">Choose your experience</span> for a personalized journey with our
                revolutionary Credit Default Swap solutions
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Institutional Profile */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
                onMouseEnter={() => setHoveredProfile("institution")}
                onMouseLeave={() => setHoveredProfile(null)}
              >
                <motion.div
                  className={`
                    bg-white border rounded-xl p-8 shadow-md transition-all duration-300 h-full
                    ${hoveredProfile === "institution" ? "border-blue-800 shadow-lg" : "border-gray-200"}
                  `}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <motion.div
                      className={`
                        w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300
                        ${hoveredProfile === "institution" ? "bg-blue-100" : "bg-gray-100"}
                      `}
                      animate={
                        hoveredProfile === "institution"
                          ? {
                              scale: [1, 1.05, 1],
                              boxShadow: [
                                "0 0 0 rgba(30, 64, 175, 0)",
                                "0 0 20px rgba(30, 64, 175, 0.3)",
                                "0 0 0 rgba(30, 64, 175, 0)",
                              ],
                            }
                          : {}
                      }
                      transition={{
                        duration: 2,
                        repeat: hoveredProfile === "institution" ? Number.POSITIVE_INFINITY : 0,
                      }}
                    >
                      <Building2
                        className={`h-10 w-10 transition-all duration-300 ${hoveredProfile === "institution" ? "text-blue-800" : "text-gray-700"}`}
                      />
                    </motion.div>

                    <motion.h2
                      className="text-2xl font-bold mb-4 font-blauer text-gray-900"
                      animate={hoveredProfile === "institution" ? { scale: 1.05 } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      Institutional
                    </motion.h2>

                    <p className="text-gray-600 mb-8 flex-grow">
                      Professional solutions for financial institutions, investment funds, and corporate treasuries.
                    </p>

                    <Button
                      className={`w-full py-6 text-lg font-blauer transition-all duration-300 ${
                        hoveredProfile === "institution"
                          ? "bg-blue-800 hover:bg-blue-900 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                      }`}
                      onClick={() => handleProfileSelect("institution")}
                    >
                      <motion.span
                        className="flex items-center justify-center"
                        animate={hoveredProfile === "institution" ? { x: [0, 5, 0] } : {}}
                        transition={{
                          duration: 1.5,
                          repeat: hoveredProfile === "institution" ? Number.POSITIVE_INFINITY : 0,
                        }}
                      >
                        Access as Institution
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.span>
                    </Button>
                  </div>
                </motion.div>

                {/* Add subtle background effect */}
                {hoveredProfile === "institution" && (
                  <motion.div
                    className="absolute -inset-2 bg-blue-100 rounded-xl -z-10 opacity-30 blur-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                )}
              </motion.div>

              {/* Individual Investor Profile */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
                onMouseEnter={() => setHoveredProfile("individual")}
                onMouseLeave={() => setHoveredProfile(null)}
              >
                <motion.div
                  className={`
                    border rounded-xl p-8 shadow-md transition-all duration-300 h-full
                    ${
                      hoveredProfile === "individual"
                        ? "bg-gradient-to-b from-gray-900 to-blue-900 border-blue-500"
                        : "bg-white border-gray-200"
                    }
                  `}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <motion.div
                      className={`
                        w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300
                        ${hoveredProfile === "individual" ? "bg-blue-900/50" : "bg-gray-100"}
                      `}
                      animate={
                        hoveredProfile === "individual"
                          ? {
                              scale: [1, 1.05, 1],
                              boxShadow: [
                                "0 0 0 rgba(59, 130, 246, 0)",
                                "0 0 20px rgba(59, 130, 246, 0.5)",
                                "0 0 0 rgba(59, 130, 246, 0)",
                              ],
                            }
                          : {}
                      }
                      transition={{
                        duration: 2,
                        repeat: hoveredProfile === "individual" ? Number.POSITIVE_INFINITY : 0,
                      }}
                    >
                      <User
                        className={`h-10 w-10 transition-all duration-300 ${
                          hoveredProfile === "individual" ? "text-blue-300" : "text-gray-700"
                        }`}
                      />
                    </motion.div>

                    <motion.h2
                      className={`text-2xl font-bold mb-4 font-blauer transition-all duration-300 ${
                        hoveredProfile === "individual" ? "text-white" : "text-gray-900"
                      }`}
                      animate={hoveredProfile === "individual" ? { scale: 1.05 } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      Individual Investor
                    </motion.h2>

                    <p
                      className={`mb-8 flex-grow transition-all duration-300 ${
                        hoveredProfile === "individual" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Innovative platform for individual investors seeking access to credit risk hedging instruments.
                    </p>

                    <Button
                      className={`w-full py-6 text-lg font-blauer transition-all duration-300 ${
                        hoveredProfile === "individual"
                          ? "bg-blue-500 hover:bg-blue-600 text-white border border-blue-400"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                      }`}
                      onClick={() => handleProfileSelect("individual")}
                    >
                      <motion.span
                        className="flex items-center justify-center"
                        animate={hoveredProfile === "individual" ? { x: [0, 5, 0] } : {}}
                        transition={{
                          duration: 1.5,
                          repeat: hoveredProfile === "individual" ? Number.POSITIVE_INFINITY : 0,
                        }}
                      >
                        Access as Investor
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.span>
                    </Button>
                  </div>
                </motion.div>

                {/* Add subtle background effect */}
                {hoveredProfile === "individual" && (
                  <motion.div
                    className="absolute -inset-2 bg-blue-500 rounded-xl -z-10 opacity-20 blur-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                )}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <p className="text-gray-500 mb-4">Not sure which option to choose?</p>
              <a href="#about" className="text-blue-800 hover:underline font-medium group inline-flex items-center">
                Learn more about our solutions
                <motion.span
                  className="inline-block ml-1"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                >
                  <ChevronRight className="h-4 w-4" />
                </motion.span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="w-full py-16 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block bg-blue-50 text-blue-800 px-4 py-1 rounded-md text-sm font-medium mb-4">
                ABOUT US
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-blauer text-gray-900">
                Revolutionizing Financial Protection
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                SIPRIFI is a pioneering platform that brings the power of Credit Default Swaps to both institutional and
                individual investors through innovative blockchain technology.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 font-blauer text-gray-900">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  At SIPRIFI, we're on a mission to democratize access to sophisticated financial instruments that were
                  previously only available to large institutions. By leveraging blockchain technology, we've created a
                  secure, transparent, and efficient platform for trading Credit Default Swaps.
                </p>
                <p className="text-gray-600 mb-6">
                  Our platform bridges the gap between traditional finance and decentralized finance (DeFi), offering
                  the best of both worlds: institutional-grade security with the transparency and efficiency of
                  blockchain.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check className="w-3 h-3 text-blue-800" />
                      </div>
                    </div>
                    <p className="ml-3 text-gray-600">Founded by a team of financial and blockchain experts</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check className="w-3 h-3 text-blue-800" />
                      </div>
                    </div>
                    <p className="ml-3 text-gray-600">
                      Backed by leading venture capital firms and financial institutions
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check className="w-3 h-3 text-blue-800" />
                      </div>
                    </div>
                    <p className="ml-3 text-gray-600">Compliant with global financial regulations</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-md relative z-10">
                  <h3 className="text-xl font-bold mb-6 font-blauer text-gray-900 flex items-center">
                    <Shield className="w-5 h-5 text-blue-800 mr-2" />
                    What is SIPRIFI?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    <span className="font-semibold">SIPRIFI</span> (Secure Innovative Platform for Reliable Investment
                    in Financial Instruments) is a blockchain-based platform that enables the creation, trading, and
                    management of Credit Default Swaps (CDS) and Credit Default Swaps on Chain (CDSC).
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <Building2 className="w-4 h-4 text-blue-800" />
                        </div>
                        For Institutions
                      </h4>
                      <p className="text-gray-600 pl-11">
                        We provide enterprise-grade solutions with multi-signature security, regulatory compliance, and
                        seamless integration with existing systems.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <User className="w-4 h-4 text-blue-800" />
                        </div>
                        For Individual Investors
                      </h4>
                      <p className="text-gray-600 pl-11">
                        We offer a user-friendly platform that makes sophisticated financial instruments accessible,
                        with educational resources and transparent pricing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Background decoration */}
                <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-blue-50 rounded-full -z-10"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-50 rounded-full -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block bg-blue-50 text-blue-800 px-4 py-1 rounded-md text-sm font-medium mb-4">
                HOW IT WORKS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-blauer text-gray-900">
                Simple, Secure, and Transparent
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our platform simplifies the process of creating and managing Credit Default Swaps through blockchain
                technology, making it accessible to everyone.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    icon: <Wallet className="h-8 w-8 text-blue-800" />,
                    title: "Connect",
                    description: "Connect your wallet or create an account to access the SIPRIFI platform securely.",
                  },
                  {
                    icon: <Globe className="h-8 w-8 text-blue-800" />,
                    title: "Select",
                    description: "Choose from a variety of CDS contracts or create your own with customized terms.",
                  },
                  {
                    icon: <Lock className="h-8 w-8 text-blue-800" />,
                    title: "Secure",
                    description: "Sign the smart contract with your counterparty through blockchain technology.",
                  },
                  {
                    icon: <BarChart2 className="h-8 w-8 text-blue-800" />,
                    title: "Manage",
                    description: "Monitor your portfolio, receive automated payments, and manage your risk exposure.",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center relative"
                  >
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 font-blauer text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>

                    {/* Connector line */}
                    {index < 3 && (
                      <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-blue-100">
                        <motion.div
                          className="absolute top-0 left-0 h-full bg-blue-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                          viewport={{ once: true }}
                        ></motion.div>
                        <div className="absolute -right-1 -top-1.5 w-4 h-4 text-blue-500">
                          <ChevronRight />
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full py-16 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block bg-blue-50 text-blue-800 px-4 py-1 rounded-md text-sm font-medium mb-4">
                BENEFITS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-blauer text-gray-900">Why Choose SIPRIFI?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our platform offers unique advantages that make it the preferred choice for both institutional and
                individual investors.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <Shield className="h-10 w-10 text-blue-800" />,
                  title: "Security",
                  description: "Enterprise-grade security with multi-signature protection and smart contract audits.",
                },
                {
                  icon: <Zap className="h-10 w-10 text-blue-800" />,
                  title: "Efficiency",
                  description: "Automated processes reduce operational costs and settlement times.",
                },
                {
                  icon: <Globe className="h-10 w-10 text-blue-800" />,
                  title: "Transparency",
                  description: "Complete visibility into contract terms, payment schedules, and credit events.",
                },
                {
                  icon: <Lock className="h-10 w-10 text-blue-800" />,
                  title: "Compliance",
                  description: "Fully compliant with global financial regulations and standards.",
                },
                {
                  icon: <BarChart2 className="h-10 w-10 text-blue-800" />,
                  title: "Analytics",
                  description: "Advanced risk assessment tools and real-time market data integration.",
                },
                {
                  icon: <Building2 className="h-10 w-10 text-blue-800" />,
                  title: "Accessibility",
                  description: "Democratized access to sophisticated financial instruments for all investors.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-blauer text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block bg-blue-50 text-blue-800 px-4 py-1 rounded-md text-sm font-medium mb-4">
                TESTIMONIALS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-blauer text-gray-900">What Our Users Say</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Hear from the institutions and individuals who have transformed their risk management strategy with
                SIPRIFI.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200"
              >
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-blue-800" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 font-blauer">Global Investments Ltd.</h4>
                    <p className="text-gray-500 text-sm">Financial Institution</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "SIPRIFI has revolutionized how we manage credit risk. The platform's security, transparency, and
                  efficiency have significantly improved our operations, reducing settlement times and costs."
                </blockquote>
                <p className="text-gray-900 font-medium">Jane Smith, Risk Manager</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200"
              >
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-blue-800" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 font-blauer">Michael Johnson</h4>
                    <p className="text-gray-500 text-sm">Individual Investor</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "As an individual investor, I never thought I'd have access to sophisticated instruments like CDS.
                  SIPRIFI has made it possible with their user-friendly platform and educational resources."
                </blockquote>
                <p className="text-gray-900 font-medium">Michael Johnson, Portfolio Manager</p>
              </motion.div>
            </div>

            <div className="mt-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-8 font-blauer text-gray-900">Trusted by Leading Organizations</h3>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                  <div className="text-gray-400 font-bold text-xl">Goldman Sachs</div>
                  <div className="text-gray-400 font-bold text-xl">JP Morgan</div>
                  <div className="text-gray-400 font-bold text-xl">Morgan Stanley</div>
                  <div className="text-gray-400 font-bold text-xl">BlackRock</div>
                  <div className="text-gray-400 font-bold text-xl">Citigroup</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 bg-blue-50 border-t border-blue-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-blauer text-gray-900">
                  Ready to Transform Your Investment Strategy?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Choose your profile and start exploring the future of Credit Default Swaps today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="bg-blue-800 hover:bg-blue-900 text-white rounded-md px-8 py-4 font-blauer text-lg"
                    onClick={() => handleProfileSelect("institution")}
                  >
                    <Building2 className="mr-2 h-5 w-5" />
                    Institutional Access
                  </Button>
                  <Button
                    className="bg-gray-900 hover:bg-gray-800 text-white rounded-md px-8 py-4 font-blauer text-lg"
                    onClick={() => handleProfileSelect("individual")}
                  >
                    <User className="mr-2 h-5 w-5" />
                    Individual Access
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-blue-800" />
                <span className="text-xl font-bold tracking-tight font-blauer text-gray-900">SIPRIFI</span>
              </div>
              <p className="text-gray-600 mb-4">
                Secure Innovative Platform for Reliable Investment in Financial Instruments
              </p>
              <div className="text-sm text-gray-500">© 2025 SIPRIFI. All rights reserved.</div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-800">
                    Credit Default Swaps
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-800">
                    CDSC (On-Chain)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-800">
                    Enterprise Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-800">
                    Risk Management
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-600 hover:text-blue-800">
                    About Us
                  </a>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-800">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-800">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-800">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-800">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-800">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-800">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-800">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

