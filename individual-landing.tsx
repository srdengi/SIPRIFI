"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Zap, Wallet, ChevronRight, Lock, FileText, CheckCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function IndividualLanding() {
  const [scrollY, setScrollY] = useState(0)
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [showWalletOptions, setShowWalletOptions] = useState(false)
  const [showContractDetails, setShowContractDetails] = useState(false)
  const [selectedContract, setSelectedContract] = useState(null)
  const [activeInsuranceStep, setActiveInsuranceStep] = useState(0)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Simular conexión de wallet
  const connectWallet = (type) => {
    setShowWalletOptions(false)
    // Simular tiempo de conexión
    setTimeout(() => {
      setWalletConnected(true)
      setWalletAddress("0x7F5Ec...3D9f")
    }, 1000)
  }

  // Simular proceso de aseguramiento
  const proceedToNextStep = () => {
    if (activeInsuranceStep < 4) {
      setActiveInsuranceStep(activeInsuranceStep + 1)
    } else {
      setShowSuccessMessage(true)
    }
  }

  // Reiniciar proceso
  const resetProcess = () => {
    setActiveInsuranceStep(0)
    setShowSuccessMessage(false)
  }

  // Simular selección de contrato
  const viewContractDetails = (contract) => {
    setSelectedContract(contract)
    setShowContractDetails(true)
  }

  // Datos de ejemplo para contratos CDS
  const cdsContracts = [
    {
      id: "CDS-1001",
      entity: "Company A",
      value: "$125,000",
      premium: "85 bps",
      expiry: "Dec 31, 2026",
      risk: "Low",
      status: "Available",
    },
    {
      id: "CDS-1002",
      entity: "Company B",
      value: "$200,000",
      premium: "110 bps",
      expiry: "Jun 30, 2026",
      risk: "Medium",
      status: "Available",
    },
    {
      id: "CDS-1003",
      entity: "Company C",
      value: "$150,000",
      premium: "95 bps",
      expiry: "Mar 15, 2026",
      risk: "Low",
      status: "Available",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white overflow-hidden">
      {/* Custom font import */}
      <style jsx global>{`
      @import url('https://fonts.cdnfonts.com/css/blauer-neue');
      
      h1, h2, h3, h4, h5, h6, .font-blauer {
        font-family: 'Blauer Neue', sans-serif;
      }
    `}</style>

      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-sm bg-gray-950/30">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold tracking-tight font-blauer">SIPRIFI</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="#" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
              Product
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
              Features
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
              Resources
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
              Company
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {!walletConnected ? (
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white border border-blue-500 rounded-full px-4 font-blauer"
                onClick={() => setShowWalletOptions(true)}
              >
                <Wallet className="mr-2 h-4 w-4" />
                Connect Wallet
              </Button>
            ) : (
              <Button
                variant="outline"
                className="border-blue-400 text-blue-300 hover:bg-blue-900/30 rounded-full px-4 font-blauer"
              >
                <Wallet className="mr-2 h-4 w-4" />
                {walletAddress}
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 md:pt-40 md:pb-64">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <motion.span
                className="inline-block bg-blue-900/40 text-blue-300 px-4 py-1 rounded-full text-sm font-blauer"
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(59, 130, 246, 0)",
                    "0 0 15px rgba(59, 130, 246, 0.5)",
                    "0 0 0 rgba(59, 130, 246, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <motion.span
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="inline-block mr-1"
                >
                  ⚡
                </motion.span>
                NEXT-GEN FINANCIAL PROTECTION
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-blauer mb-6 leading-tight"
            >
              <motion.span
                className="text-blue-400 inline-block"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(96, 165, 250, 0)",
                    "0 0 10px rgba(96, 165, 250, 0.5)",
                    "0 0 0px rgba(96, 165, 250, 0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                UNLEASH
              </motion.span>{" "}
              <span className="text-white">THE POWER OF</span>
              <br />
              <span className="relative">
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                  style={{ backgroundSize: "200% auto" }}
                >
                  DECENTRALIZED FINANCE
                </motion.span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                ></motion.span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
            >
              <span className="font-semibold text-blue-300">SIPRIFI revolutionizes risk management</span> by bringing
              institutional-grade Credit Default Swaps to everyone through cutting-edge blockchain technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {!walletConnected ? (
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white border border-blue-500 rounded-full px-8 py-6 font-blauer text-lg group relative overflow-hidden"
                  onClick={() => setShowWalletOptions(true)}
                >
                  <span className="relative z-10 flex items-center">
                    Connect Wallet to Explore
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.span>
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 z-0"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    style={{ backgroundSize: "200% auto" }}
                  ></motion.span>
                </Button>
              ) : (
                <Link href="/marketplace">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white border border-blue-500 rounded-full px-8 py-6 font-blauer text-lg group relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      Explore Marketplace
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.span>
                    </span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 z-0"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                      style={{ backgroundSize: "200% auto" }}
                    ></motion.span>
                  </Button>
                </Link>
              )}
              <Button
                variant="outline"
                className="border-blue-400 text-blue-300 hover:bg-blue-900/30 rounded-full px-8 py-6 font-blauer text-lg group relative overflow-hidden"
              >
                <span className="relative z-10">Learn More</span>
                <motion.span
                  className="absolute inset-0 border border-blue-400 rounded-full z-0"
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(96, 165, 250, 0)",
                      "0 0 10px rgba(96, 165, 250, 0.5)",
                      "0 0 0 rgba(96, 165, 250, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                ></motion.span>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Glowing orb with pulsating effect */}
          <motion.div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[100px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              transform: `translate(-50%, -50%) translateY(${scrollY * 0.2}px)`,
            }}
          ></motion.div>

          {/* Animated grid with more pronounced effect */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]">
            <motion.div
              className="absolute inset-0 bg-blue-500/5"
              animate={{ opacity: [0, 0.05, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            ></motion.div>
          </div>

          {/* Enhanced floating elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-blue-500/20"
            animate={{
              y: [0, 30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          ></motion.div>

          <motion.div
            className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-blue-400/10"
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          ></motion.div>

          {/* Add more floating elements */}
          <motion.div
            className="absolute bottom-1/4 right-1/3 w-8 h-8 rounded-full bg-purple-500/20"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          ></motion.div>

          <motion.div
            className="absolute top-2/3 left-1/3 w-10 h-10 rounded-full bg-cyan-500/15"
            animate={{
              y: [0, 15, 0],
              x: [0, -10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1.5,
            }}
          ></motion.div>

          {/* Add animated lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.2 }}>
            <motion.path
              d="M0,300 C100,200 200,400 300,300 C400,200 500,400 600,300 C700,200 800,400 900,300"
              fill="none"
              stroke="rgba(96, 165, 250, 0.5)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,500 C150,400 300,600 450,500 C600,400 750,600 900,500"
              fill="none"
              stroke="rgba(96, 165, 250, 0.3)"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
            />
          </svg>
        </div>

        {/* Add floating crypto-style icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-[15%] text-4xl"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="rgba(96, 165, 250, 0.7)" strokeWidth="1.5" />
              <path d="M2 17L12 22L22 17" stroke="rgba(96, 165, 250, 0.7)" strokeWidth="1.5" />
              <path d="M2 12L12 17L22 12" stroke="rgba(96, 165, 250, 0.7)" strokeWidth="1.5" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-1/3 left-[20%] text-4xl"
            animate={{
              y: [0, 20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="rgba(96, 165, 250, 0.7)"
                strokeWidth="1.5"
              />
              <path d="M12 8V16" stroke="rgba(96, 165, 250, 0.7)" strokeWidth="1.5" />
              <path d="M8 12H16" stroke="rgba(96, 165, 250, 0.7)" strokeWidth="1.5" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-blauer">Why Choose SIPRIFI?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our platform leverages blockchain technology to revolutionize how credit risk management and hedging are
                handled globally.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-blauer">Security</h3>
                <p className="text-gray-400">
                  Smart contracts ensure agreements between parties are kept intact and automated, eliminating
                  intermediaries.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-blue-400"
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
                <h3 className="text-xl font-bold mb-2 font-blauer">Transparency</h3>
                <p className="text-gray-400">
                  Complete visibility into contract terms, payment schedules, and credit events through blockchain
                  verification.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-blauer">Innovation</h3>
                <p className="text-gray-400">
                  The CDSC product integrates traditional CDS contracts with blockchain infrastructure, providing
                  complete payment automation and total transparency.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CDSC Marketplace Section */}
      <section id="marketplace" className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                className="inline-block bg-blue-900/40 text-blue-300 px-4 py-1 rounded-full text-sm font-blauer mb-4"
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(59, 130, 246, 0)",
                    "0 0 10px rgba(59, 130, 246, 0.3)",
                    "0 0 0 rgba(59, 130, 246, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                CDSC MARKETPLACE
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-blauer">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Browse Available Contracts
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore our marketplace of Credit Default Swap Contracts (CDSC) and secure your investments against
                potential risks.
              </p>
            </motion.div>

            {!walletConnected ? (
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center mx-auto mb-6">
                  <Wallet className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-blauer text-white">Connect Your Wallet</h3>
                <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                  Connect your wallet to browse available CDSC contracts and start protecting your investments.
                </p>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white border border-blue-500 rounded-full px-6 py-3 font-blauer"
                  onClick={() => setShowWalletOptions(true)}
                >
                  <Wallet className="mr-2 h-5 w-5" />
                  Connect Wallet
                </Button>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold font-blauer text-white">Available CDSC Contracts</h3>
                      <p className="text-gray-400">Select a contract to view details and secure protection</p>
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                        Filter
                      </Button>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">Create Custom Contract</Button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Contract ID</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Reference Entity</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Notional Value</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Premium</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Expiry</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Risk Level</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cdsContracts.map((contract, index) => (
                          <tr key={index} className="border-b border-gray-700 hover:bg-gray-800/50">
                            <td className="py-4 px-4 text-blue-400 font-medium">{contract.id}</td>
                            <td className="py-4 px-4 text-white">{contract.entity}</td>
                            <td className="py-4 px-4 text-white">{contract.value}</td>
                            <td className="py-4 px-4 text-white">{contract.premium}</td>
                            <td className="py-4 px-4 text-white">{contract.expiry}</td>
                            <td className="py-4 px-4">
                              <span
                                className={`px-2 py-1 rounded-full text-xs ${
                                  contract.risk === "Low"
                                    ? "bg-green-900/30 text-green-400"
                                    : contract.risk === "Medium"
                                      ? "bg-yellow-900/30 text-yellow-400"
                                      : "bg-red-900/30 text-red-400"
                                }`}
                              >
                                {contract.risk}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              <Button
                                size="sm"
                                className="bg-blue-600 hover:bg-blue-700 text-white"
                                onClick={() => viewContractDetails(contract)}
                              >
                                View Details
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/50 border border-gray-700 rounded-xl p-6"
                  >
                    <h3 className="text-xl font-bold mb-4 font-blauer text-white">How CDSC Works</h3>
                    <p className="text-gray-300 mb-6">
                      Credit Default Swap Contracts (CDSC) provide protection against default events of reference
                      entities. Here's how they work:
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center mr-4 mt-0.5">
                          <span className="text-blue-300 font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-1">Select a Contract</h4>
                          <p className="text-gray-400">
                            Choose a CDSC that matches your investment portfolio's risk exposure.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center mr-4 mt-0.5">
                          <span className="text-blue-300 font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-1">Pay Premium</h4>
                          <p className="text-gray-400">
                            Pay the premium (in basis points) to secure protection for the specified period.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center mr-4 mt-0.5">
                          <span className="text-blue-300 font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-1">Receive Protection</h4>
                          <p className="text-gray-400">
                            If a credit event occurs, you'll receive automatic compensation based on the contract terms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/50 border border-gray-700 rounded-xl p-6"
                  >
                    <h3 className="text-xl font-bold mb-4 font-blauer text-white">Benefits of SIPRIFI CDSC</h3>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center mr-4">
                          <CheckCircle className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-1">Automated Execution</h4>
                          <p className="text-gray-400">
                            Smart contracts automatically execute payouts when credit events occur, eliminating
                            counterparty risk.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center mr-4">
                          <CheckCircle className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-1">Transparent Terms</h4>
                          <p className="text-gray-400">
                            All contract terms are stored on the blockchain, providing complete transparency and
                            immutability.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center mr-4">
                          <CheckCircle className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-1">Lower Costs</h4>
                          <p className="text-gray-400">
                            Elimination of intermediaries and automated processes result in lower fees compared to
                            traditional CDS.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center mr-4">
                          <CheckCircle className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-1">Accessible to All</h4>
                          <p className="text-gray-400">
                            Unlike traditional CDS, SIPRIFI CDSC is accessible to individual investors, not just
                            institutions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="relative py-24 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                className="inline-block bg-blue-900/40 text-blue-300 px-4 py-1 rounded-full text-sm font-blauer mb-4"
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(59, 130, 246, 0)",
                    "0 0 10px rgba(59, 130, 246, 0.3)",
                    "0 0 0 rgba(59, 130, 246, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                REVOLUTIONARY PLATFORM
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-blauer">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Cutting-Edge Features
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Experience the future of decentralized finance with our innovative platform designed for the modern
                investor.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 relative z-10 h-full">
                  <div className="absolute -top-5 -left-5 w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center">
                    <Wallet className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-blauer text-white">Smart Contract Automation</h3>
                  <p className="text-gray-300 mb-6">
                    Our platform automatically executes contract terms, eliminating counterparty risk and ensuring
                    timely payments without intermediaries.
                  </p>
                  <ul className="space-y-3">
                    <motion.li
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300">Automated premium payments</span>
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300">Instant credit event settlement</span>
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300">Immutable contract terms</span>
                    </motion.li>
                  </ul>

                  {/* Animated button */}
                  <motion.div
                    className="mt-8"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button className="bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 border border-blue-500/30 rounded-lg w-full group">
                      Explore Smart Contracts
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <ChevronRight className="ml-2 h-5 w-5 group-hover:text-blue-400" />
                      </motion.span>
                    </Button>
                  </motion.div>
                </div>

                {/* Background glow effect */}
                <motion.div
                  className="absolute -inset-4 bg-blue-600/5 rounded-xl blur-xl z-0"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                ></motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 relative z-10 h-full">
                  <div className="absolute -top-5 -left-5 w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center">
                    <Shield className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-blauer text-white">Real-Time Risk Analytics</h3>
                  <p className="text-gray-300 mb-6">
                    Monitor your portfolio's exposure with advanced analytics and real-time market data to make informed
                    decisions.
                  </p>

                  {/* Animated chart */}
                  <div className="bg-gray-900/50 rounded-lg p-4 mb-6 h-32 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 flex items-end px-4 pb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-full h-full flex items-end"
                          initial={{ height: 0 }}
                          whileInView={{ height: `${20 + Math.sin(i * 0.8) * 50}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                        >
                          <div
                            className="w-2/3 mx-auto rounded-sm bg-gradient-to-t from-blue-600 to-blue-400"
                            style={{ height: "100%" }}
                          ></div>
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.5 }}
                    ></motion.div>
                  </div>

                  <ul className="space-y-3">
                    <motion.li
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300">Portfolio risk assessment</span>
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300">Market trend indicators</span>
                    </motion.li>
                  </ul>

                  {/* Animated button */}
                  <motion.div
                    className="mt-8"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button className="bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 border border-blue-500/30 rounded-lg w-full group">
                      View Analytics Demo
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <ChevronRight className="ml-2 h-5 w-5 group-hover:text-blue-400" />
                      </motion.span>
                    </Button>
                  </motion.div>
                </div>

                {/* Background glow effect */}
                <motion.div
                  className="absolute -inset-4 bg-blue-600/5 rounded-xl blur-xl z-0"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1/3"
            style={{
              background: "linear-gradient(to top, rgba(37, 99, 235, 0.1), transparent)",
              maskImage: "linear-gradient(to top, rgba(0,0,0,1), transparent)",
            }}
          ></motion.div>

          <motion.div
            className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-blue-600/5 blur-[100px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          ></motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-950 to-blue-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 md:p-12 backdrop-blur-sm"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-blauer">
                Ready to transform your investment strategy?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join SIPRIFI today and experience the future of decentralized Credit Default Swaps.
              </p>
              {!walletConnected ? (
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white border border-blue-500 rounded-full px-8 py-6 font-blauer text-lg"
                  onClick={() => setShowWalletOptions(true)}
                >
                  <Wallet className="mr-2 h-5 w-5" />
                  Connect Wallet to Start
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              ) : (
                <Link href="/marketplace">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white border border-blue-500 rounded-full px-8 py-6 font-blauer text-lg">
                    Enter Marketplace
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              )}
            </motion.div>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-blue-600/10 blur-[100px]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          ></motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Shield className="h-5 w-5 text-blue-400" />
              <span className="text-lg font-bold tracking-tight font-blauer">SIPRIFI</span>
            </div>

            <div className="flex gap-6 mb-4 md:mb-0">
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>

            <div className="text-sm text-gray-500">© 2025 SIPRIFI. All rights reserved.</div>
          </div>
        </div>
      </footer>

      {/* Wallet Connection Dialog */}
      <Dialog open={showWalletOptions} onOpenChange={setShowWalletOptions}>
        <DialogContent className="sm:max-w-md bg-gray-900 border border-gray-800 text-white">
          <DialogHeader>
            <DialogTitle className="font-blauer text-xl">Connect Your Wallet</DialogTitle>
            <DialogDescription className="text-gray-400">
              Connect your wallet to start using SIPRIFI's decentralized finance tools.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Button
              variant="outline"
              className="flex justify-between items-center border-gray-700 hover:bg-gray-800 hover:text-white"
              onClick={() => connectWallet("metamask")}
            >
              <div className="flex items-center">
                <img src="/placeholder.svg?height=24&width=24" alt="MetaMask" className="mr-2 h-6 w-6" />
                <span>MetaMask</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="flex justify-between items-center border-gray-700 hover:bg-gray-800 hover:text-white"
              onClick={() => connectWallet("walletconnect")}
            >
              <div className="flex items-center">
                <img src="/placeholder.svg?height=24&width=24" alt="WalletConnect" className="mr-2 h-6 w-6" />
                <span>WalletConnect</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="flex justify-between items-center border-gray-700 hover:bg-gray-800 hover:text-white"
              onClick={() => connectWallet("coinbase")}
            >
              <div className="flex items-center">
                <img src="/placeholder.svg?height=24&width=24" alt="Coinbase Wallet" className="mr-2 h-6 w-6" />
                <span>Coinbase Wallet</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <div className="text-xs text-gray-500">
              By connecting your wallet, you agree to our Terms of Service and Privacy Policy.
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Contract Details Dialog */}
      <Dialog open={showContractDetails} onOpenChange={setShowContractDetails}>
        <DialogContent className="sm:max-w-3xl bg-gray-900 border border-gray-800 text-white">
          <DialogHeader>
            <DialogTitle className="font-blauer text-xl">Contract Details</DialogTitle>
            <DialogDescription className="text-gray-400">
              Review contract details and secure protection
            </DialogDescription>
          </DialogHeader>

          {selectedContract && (
            <div className="py-4">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Contract ID</h4>
                    <p className="text-white font-medium">{selectedContract.id}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Reference Entity</h4>
                    <p className="text-white font-medium">{selectedContract.entity}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Notional Value</h4>
                    <p className="text-white font-medium">{selectedContract.value}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Premium</h4>
                    <p className="text-white font-medium">{selectedContract.premium}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Expiry Date</h4>
                    <p className="text-white font-medium">{selectedContract.expiry}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Risk Level</h4>
                    <p
                      className={`font-medium ${
                        selectedContract.risk === "Low"
                          ? "text-green-400"
                          : selectedContract.risk === "Medium"
                            ? "text-yellow-400"
                            : "text-red-400"
                      }`}
                    >
                      {selectedContract.risk}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Status</h4>
                    <p className="text-white font-medium">{selectedContract.status}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Protection Coverage</h4>
                    <p className="text-white font-medium">100% of Notional Value</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 mb-6">
                <h4 className="font-medium text-white mb-2">Credit Events Covered</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    <span className="text-gray-300 text-sm">Bankruptcy</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    <span className="text-gray-300 text-sm">Failure to Pay</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    <span className="text-gray-300 text-sm">Restructuring</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    <span className="text-gray-300 text-sm">Obligation Default</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    <span className="text-gray-300 text-sm">Repudiation/Moratorium</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 mb-6">
                <h4 className="font-medium text-white mb-2">Contract Terms</h4>
                <p className="text-gray-300 text-sm mb-4">
                  This Credit Default Swap Contract (CDSC) provides protection against credit events related to{" "}
                  {selectedContract.entity}. The protection buyer pays a premium of {selectedContract.premium} on the
                  notional value of {selectedContract.value} until the expiry date or until a credit event occurs.
                </p>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-yellow-300 text-sm">
                    Always review the full contract terms before purchasing protection. Smart contract execution is
                    automatic and irreversible.
                  </p>
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-white">Total Cost</h4>
                  <div className="text-xl font-bold text-white">0.25 ETH</div>
                </div>
                <p className="text-gray-300 text-sm">
                  This is the total premium cost for the entire contract period, payable upfront.
                </p>
              </div>
            </div>
          )}

          <DialogFooter className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
              <FileText className="mr-2 h-4 w-4" />
              View Full Contract
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Lock className="mr-2 h-4 w-4" />
              Secure This Contract
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

