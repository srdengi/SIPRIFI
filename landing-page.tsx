"use client"

import { motion } from "framer-motion"
import { ArrowRight, BarChart2, LineChart, Shield } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

export default function LandingPage() {
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
                Secure • Innovative • Reliable
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-blauer mb-6 leading-tight text-gray-900"
            >
              Secure <span className="text-blue-800">Credit Default Swaps</span>
              <br />
              for the modern market
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 mb-10 max-w-2xl"
            >
              SIPRIFI brings traditional OTC derivatives to institutional and retail investors through blockchain,
              providing a secure, transparent, and efficient platform for CDS and CDSC trading.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/user-contracts" passHref legacyBehavior>
                <Button
                  className="bg-blue-800 hover:bg-blue-900 text-white rounded-md px-8 py-4 font-blauer text-lg"
                  as="a"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
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
        <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-[400px] overflow-hidden opacity-20 pointer-events-none">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
            <svg viewBox="0 0 800 500" className="w-full h-full">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.3" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-blauer text-gray-900">Why Choose SIPRIFI?</h2>
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
                <h3 className="text-xl font-bold mb-2 font-blauer text-gray-900">Security</h3>
                <p className="text-gray-600">
                  Smart contracts ensure agreements between parties are kept intact and automated, eliminating
                  intermediaries and reducing counterparty risk.
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 font-blauer text-gray-900">Transparency</h3>
                <p className="text-gray-600">
                  Complete visibility into contract terms, payment schedules, and credit events through immutable
                  blockchain verification and audit trails.
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
                <h3 className="text-xl font-bold mb-2 font-blauer text-gray-900">Efficiency</h3>
                <p className="text-gray-600">
                  Streamlined processes reduce operational costs and settlement times, while maintaining the
                  sophisticated risk management capabilities required by financial institutions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <div className="inline-block bg-blue-50 px-3 py-1 rounded-md text-sm text-blue-800 font-blauer mb-4">
                  Enterprise Solutions
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-blauer text-gray-900">
                  Institutional Grade Solutions
                </h2>
                <p className="text-gray-600 mb-6">
                  SIPRIFI offers tailored enterprise solutions for financial institutions, hedge funds, and corporate
                  treasuries looking to manage credit risk exposure with institutional-grade security and compliance.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-blue-800 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Custom smart contract development for specific risk profiles</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-blue-800 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Multi-signature enterprise wallets with advanced security</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-blue-800 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">API integration with existing risk management systems</span>
                  </li>
                </ul>
                <Link href="/enterprise">
                  <Button
                    variant="outline"
                    className="border-blue-800 text-blue-800 hover:bg-blue-50 rounded-md px-6 py-2 font-blauer"
                  >
                    Learn About Enterprise Solutions
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-800/5 to-transparent rounded-lg"></div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6 relative shadow-md">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-md p-4">
                        <div className="text-sm text-gray-500 mb-1">Total Volume</div>
                        <div className="text-2xl font-bold font-blauer text-gray-900">$1.2B</div>
                      </div>
                      <div className="bg-gray-50 rounded-md p-4">
                        <div className="text-sm text-gray-500 mb-1">Institutions</div>
                        <div className="text-2xl font-bold font-blauer text-gray-900">45+</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Goldman Sachs</span>
                        <span className="text-blue-800 font-medium">$245M</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className="bg-blue-800 h-2 rounded-full" style={{ width: "80%" }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">JP Morgan</span>
                        <span className="text-blue-800 font-medium">$180M</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className="bg-blue-800 h-2 rounded-full" style={{ width: "65%" }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">BlackRock</span>
                        <span className="text-blue-800 font-medium">$156M</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className="bg-blue-800 h-2 rounded-full" style={{ width: "55%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2008 Crisis & Michael Burry Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-blauer text-gray-900">Learning from History</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Credit Default Swaps gained notoriety during the 2008 financial crisis, but they remain powerful tools
                for risk management when used properly and transparently.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Market crash visualization */}
                <div className="relative h-[400px] border border-gray-200 rounded-lg bg-white overflow-hidden shadow-md">
                  <div className="absolute top-0 left-0 w-full p-4 bg-white border-b border-gray-200 z-10 flex items-center justify-between">
                    <div className="font-medium text-gray-900">S&P 500 Index (2007-2009)</div>
                    <div className="flex space-x-2">
                      <LineChart className="h-5 w-5 text-gray-500" />
                      <BarChart2 className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Chart visualization */}
                  <div className="absolute inset-0 pt-14 pb-10 px-4">
                    <svg className="w-full h-full" viewBox="0 0 800 300" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#1e40af" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#1e40af" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      {/* Grid lines */}
                      {[...Array(6)].map((_, i) => (
                        <line key={i} x1="0" y1={i * 60} x2="800" y2={i * 60} stroke="#e5e7eb" strokeWidth="1" />
                      ))}

                      {/* Market crash line */}
                      <motion.path
                        d="M0,100 L100,90 L200,110 L300,80 L400,120 L500,60 L600,180 L700,280 L800,240"
                        fill="none"
                        stroke="#1e40af"
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        viewport={{ once: true }}
                      />

                      {/* Area under the line */}
                      <motion.path
                        d="M0,100 L100,90 L200,110 L300,80 L400,120 L500,60 L600,180 L700,280 L800,240 L800,300 L0,300 Z"
                        fill="url(#areaGradient)"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        viewport={{ once: true }}
                      />

                      {/* 2008 crash marker */}
                      <motion.g
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        viewport={{ once: true }}
                      >
                        <line x1="600" y1="0" x2="600" y2="300" stroke="#ef4444" strokeWidth="1" strokeDasharray="4" />
                        <circle cx="600" cy="180" r="6" fill="#ef4444" />
                      </motion.g>
                    </svg>

                    {/* Time labels */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-4">
                      <div>2007</div>
                      <div>2008</div>
                      <div>2009</div>
                    </div>

                    {/* Crash label */}
                    <motion.div
                      className="absolute top-1/3 right-1/4 bg-red-50 border border-red-200 px-3 py-1 rounded text-sm font-medium text-red-700"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 2 }}
                      viewport={{ once: true }}
                    >
                      2008 Financial Crisis
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-md flex items-center justify-center mr-4">
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
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold font-blauer text-gray-900">The Michael Burry Strategy</h3>
                  </div>

                  <p className="text-gray-600 mb-4">
                    During the 2008 financial crisis, Michael Burry famously used Credit Default Swaps to bet against
                    the housing market, recognizing the fundamental flaws in mortgage-backed securities.
                  </p>

                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4 mb-6">
                    <blockquote className="text-gray-700 italic">
                      "I found myself in a position to make a fortune from others' misfortunes. I'm not proud of that,
                      but it happened."
                      <div className="mt-2 text-sm text-gray-500">— Michael Burry (portrayed in "The Big Short")</div>
                    </blockquote>
                  </div>

                  <h4 className="font-bold mb-2 font-blauer text-gray-900">How SIPRIFI Transforms CDS Trading:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-800 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">
                        Complete transparency in contract terms and counterparty exposure
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-800 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">
                        Automated settlement through smart contracts eliminates counterparty risk
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-800 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">
                        Democratized access allows retail investors to use the same tools as institutions
                      </span>
                    </li>
                  </ul>

                  <Link href="/learn-more">
                    <Button
                      variant="outline"
                      className="border-blue-800 text-blue-800 hover:bg-blue-50 rounded-md px-6 py-2 font-blauer"
                    >
                      Learn More About CDS History
                    </Button>
                  </Link>
                </div>
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
                Ready to transform your investment strategy?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join SIPRIFI today and experience the future of secure, transparent Credit Default Swaps.
              </p>
              <Link href="/user-contracts" passHref legacyBehavior>
                <Button
                  className="bg-blue-800 hover:bg-blue-900 text-white rounded-md px-8 py-4 font-blauer text-lg"
                  as="a"
                >
                  Explore Our Platform
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

