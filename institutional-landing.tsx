"use client"

import { motion } from "framer-motion"
import { ArrowRight, LineChart, Shield } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

export default function InstitutionalLanding() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Custom font import */}
      <style jsx global>{`
      @import url('https://fonts.cdnfonts.com/css/blauer-neue');
      
      h1, h2, h3, h4, h5, h6, .font-blauer {
        font-family: 'Blauer Neue', sans-serif;
      }
    `}</style>

      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-blue-800" />
            <span className="text-xl font-bold tracking-tight font-blauer text-gray-900">SIPRIFI</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="#" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-800">
              Solutions
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-800">
              Products
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-800">
              Resources
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-800">
              About Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium text-gray-600 hover:text-blue-800">
              Sign In
            </Link>
            <Button className="bg-blue-800 hover:bg-blue-900 text-white rounded-md px-4 font-blauer">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block bg-blue-50 text-blue-800 px-4 py-1 rounded-md text-sm font-blauer">
                PREMIUM INSTITUTIONAL SOLUTIONS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-blauer mb-6 leading-tight text-gray-900"
            >
              <span className="relative inline-block">
                <span className="relative z-10">REDEFINE</span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-4 bg-blue-200 opacity-50 z-0"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                ></motion.span>
              </span>{" "}
              <span className="text-blue-800">RISK MANAGEMENT</span>
              <br />
              <span className="text-3xl md:text-5xl">with institutional-grade security</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 mb-10 max-w-2xl"
            >
              <span className="font-semibold">SIPRIFI delivers what traditional CDS platforms can't:</span>{" "}
              blockchain-powered security, regulatory compliance, and unmatched transparency for institutional
              investors.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/solutions/smart-contract" passHref>
                <Button className="bg-blue-800 hover:bg-blue-900 text-white rounded-md px-8 py-4 font-blauer text-lg">
                  <span className="flex items-center">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-blue-800 text-blue-800 hover:bg-blue-50 rounded-md px-8 py-4 font-blauer text-lg"
              >
                Schedule a Demo
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-[400px] overflow-hidden opacity-30 pointer-events-none">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
            <svg viewBox="0 0 800 500" className="w-full h-full">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Stock chart lines */}
              <motion.path
                d="M0,250 L50,230 L100,260 L150,240 L200,270 L250,220 L300,240 L350,210 L400,250 L450,230 L500,260 L550,220 L600,250 L650,230 L700,260 L750,240 L800,270"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              <motion.path
                d="M0,300 L50,320 L100,290 L150,310 L200,280 L250,330 L300,310 L350,340 L400,300 L450,320 L500,290 L550,330 L600,300 L650,320 L700,290 L750,310 L800,280"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              />

              <motion.path
                d="M0,350 L50,330 L100,360 L150,340 L200,370 L250,320 L300,340 L350,310 L400,350 L450,330 L500,360 L550,320 L600,350 L650,330 L700,360 L750,340 L800,370"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
              />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-lg font-medium text-gray-600">Trusted by leading financial institutions</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-gray-400 font-bold text-xl">Goldman Sachs</div>
            <div className="text-gray-400 font-bold text-xl">JP Morgan</div>
            <div className="text-gray-400 font-bold text-xl">Morgan Stanley</div>
            <div className="text-gray-400 font-bold text-xl">BlackRock</div>
            <div className="text-gray-400 font-bold text-xl">Citigroup</div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-blue-800 font-blauer text-5xl font-bold mb-2">$1.2B</div>
                <p className="text-gray-600">Total Volume Secured</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-blue-800 font-blauer text-5xl font-bold mb-2">45+</div>
                <p className="text-gray-600">Financial Institutions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-blue-800 font-blauer text-5xl font-bold mb-2">99.9%</div>
                <p className="text-gray-600">Uptime Reliability</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-blue-800 font-blauer text-5xl font-bold mb-2">100%</div>
                <p className="text-gray-600">Regulatory Compliance</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-blauer text-gray-900">
                Institutional-Grade Solutions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our platform combines traditional financial expertise with cutting-edge technology to revolutionize
                credit risk management and hedging.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-800 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-md flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-blauer text-gray-900">Security & Compliance</h3>
                <p className="text-gray-600">
                  Enterprise-grade security with multi-signature authorization, audit trails, and full regulatory
                  compliance.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-800 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-md flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-blauer text-gray-900">Advanced Analytics</h3>
                <p className="text-gray-600">
                  Comprehensive risk assessment tools, portfolio analysis, and real-time market data integration.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-800 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-md flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-blue-800"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 font-blauer text-gray-900">Seamless Integration</h3>
                <p className="text-gray-600">
                  API-first architecture allows for easy integration with existing risk management systems and
                  workflows.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-lg p-8 md:p-12 shadow-md"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-blauer text-gray-900">
                Ready to enhance your risk management strategy?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Schedule a consultation with our institutional solutions team today.
              </p>
              <Link href="/contact" passHref>
                <Button className="bg-blue-800 hover:bg-blue-900 text-white rounded-md px-8 py-4 font-blauer text-lg">
                  Request a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-5 w-5 text-blue-800" />
                <span className="text-lg font-bold tracking-tight font-blauer text-gray-900">SIPRIFI</span>
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
                  <Link href="#" className="text-gray-600 hover:text-blue-800">
                    About Us
                  </Link>
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

