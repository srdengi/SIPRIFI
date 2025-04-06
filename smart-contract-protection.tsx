"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  Shield,
  FileText,
  CheckCircle,
  AlertTriangle,
  Lock,
  Code,
  Search,
  Zap,
  Download,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SmartContractProtection() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-white text-gray-900">
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
            <Link href="/institutional" className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-800" />
              <span className="text-xl font-bold tracking-tight font-blauer text-gray-900">SIPRIFI</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="#" className="text-sm font-medium text-blue-800 transition-colors hover:text-blue-900">
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
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/institutional" className="text-sm text-gray-500 hover:text-blue-800">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="#" className="text-sm text-gray-500 hover:text-blue-800">
                Solutions
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-sm text-blue-800">Smart Contract Protection</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block bg-blue-50 text-blue-800 px-4 py-1 rounded-md text-sm font-medium">
                ENTERPRISE SOLUTION
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold tracking-tight font-blauer mb-6 text-gray-900"
            >
              Smart Contract Protection & Insurance
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 mb-10 max-w-3xl"
            >
              Comprehensive protection against smart contract vulnerabilities, failures, and exploits with
              industry-leading auditing and insurance coverage for institutional clients.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
              <div className="border-b border-gray-200">
                <TabsList className="bg-transparent h-auto p-0 w-full flex justify-start space-x-8">
                  <TabsTrigger
                    value="overview"
                    className={`pb-4 text-base font-medium border-b-2 rounded-none ${
                      activeTab === "overview"
                        ? "border-blue-800 text-blue-800"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="audit"
                    className={`pb-4 text-base font-medium border-b-2 rounded-none ${
                      activeTab === "audit"
                        ? "border-blue-800 text-blue-800"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Audit Process
                  </TabsTrigger>
                  <TabsTrigger
                    value="insurance"
                    className={`pb-4 text-base font-medium border-b-2 rounded-none ${
                      activeTab === "insurance"
                        ? "border-blue-800 text-blue-800"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Insurance Coverage
                  </TabsTrigger>
                  <TabsTrigger
                    value="pricing"
                    className={`pb-4 text-base font-medium border-b-2 rounded-none ${
                      activeTab === "pricing"
                        ? "border-blue-800 text-blue-800"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Pricing
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="overview" className="pt-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold mb-6 font-blauer text-gray-900">
                      Comprehensive Protection for Smart Contracts
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Smart contracts are the backbone of blockchain-based financial instruments, but they can contain
                      vulnerabilities that pose significant risks to your institution. Our comprehensive protection
                      solution addresses these risks through rigorous auditing, continuous monitoring, and insurance
                      coverage.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <CheckCircle className="h-5 w-5 text-blue-800" />
                        </div>
                        <p className="ml-3 text-gray-600">
                          <span className="font-medium text-gray-900">Thorough Code Auditing:</span> Multi-layered
                          review process by security experts and automated tools
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <CheckCircle className="h-5 w-5 text-blue-800" />
                        </div>
                        <p className="ml-3 text-gray-600">
                          <span className="font-medium text-gray-900">Comprehensive Risk Assessment:</span> Detailed
                          analysis of potential vulnerabilities and attack vectors
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <CheckCircle className="h-5 w-5 text-blue-800" />
                        </div>
                        <p className="ml-3 text-gray-600">
                          <span className="font-medium text-gray-900">Insurance Coverage:</span> Financial protection
                          against smart contract failures and exploits
                        </p>
                      </div>
                    </div>
                    <Link href="#" className="text-blue-800 font-medium hover:text-blue-900 inline-flex items-center">
                      Download our Smart Contract Security Whitepaper
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
                      <h3 className="text-xl font-bold mb-4 font-blauer text-gray-900">Key Protection Features</h3>
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Search className="h-5 w-5 text-blue-800" />
                          </div>
                          <div className="ml-4">
                            <h4 className="font-medium text-gray-900">Vulnerability Detection</h4>
                            <p className="text-gray-600 text-sm">
                              Advanced static and dynamic analysis to identify potential vulnerabilities before
                              deployment
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="h-5 w-5 text-blue-800" />
                          </div>
                          <div className="ml-4">
                            <h4 className="font-medium text-gray-900">Risk Assessment</h4>
                            <p className="text-gray-600 text-sm">
                              Comprehensive evaluation of potential financial impact and probability of exploits
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Lock className="h-5 w-5 text-blue-800" />
                          </div>
                          <div className="ml-4">
                            <h4 className="font-medium text-gray-900">Insurance Coverage</h4>
                            <p className="text-gray-600 text-sm">
                              Financial protection against losses due to smart contract failures or exploits
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Zap className="h-5 w-5 text-blue-800" />
                          </div>
                          <div className="ml-4">
                            <h4 className="font-medium text-gray-900">Continuous Monitoring</h4>
                            <p className="text-gray-600 text-sm">
                              Real-time surveillance of deployed contracts to detect and respond to potential threats
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-16">
                  <h2 className="text-3xl font-bold mb-8 font-blauer text-gray-900 text-center">How It Works</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <Card className="border-gray-200">
                      <CardHeader>
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                          <Code className="h-6 w-6 text-blue-800" />
                        </div>
                        <CardTitle className="font-blauer">1. Submit Your Smart Contract</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          Provide your smart contract code for review through our secure portal. Our team will begin the
                          comprehensive audit process.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-gray-200">
                      <CardHeader>
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                          <FileText className="h-6 w-6 text-blue-800" />
                        </div>
                        <CardTitle className="font-blauer">2. Receive Detailed Analysis</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          Our experts provide a comprehensive report detailing potential vulnerabilities, risk
                          assessment, and recommended improvements.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-gray-200">
                      <CardHeader>
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                          <Shield className="h-6 w-6 text-blue-800" />
                        </div>
                        <CardTitle className="font-blauer">3. Secure Insurance Coverage</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          Based on the audit results, we provide tailored insurance coverage options to protect against
                          potential financial losses.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="audit" className="pt-8">
                <div className="max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold mb-6 font-blauer text-gray-900">Our Rigorous Audit Process</h2>
                    <p className="text-gray-600 mb-8">
                      SIPRIFI employs a multi-layered audit methodology that combines automated tools, manual code
                      review, and formal verification to ensure the highest level of security for your smart contracts.
                    </p>

                    <div className="space-y-8 mb-12">
                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 font-blauer text-gray-900 flex items-center">
                          <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mr-3 text-sm font-bold">
                            1
                          </span>
                          Static Analysis
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Our automated tools scan your code to identify common vulnerabilities, coding errors, and
                          security issues. This includes:
                        </p>
                        <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                          <li>Reentrancy vulnerabilities</li>
                          <li>Integer overflow and underflow</li>
                          <li>Access control issues</li>
                          <li>Gas optimization problems</li>
                          <li>Logic errors and edge cases</li>
                        </ul>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 font-blauer text-gray-900 flex items-center">
                          <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mr-3 text-sm font-bold">
                            2
                          </span>
                          Manual Code Review
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Our team of security experts manually reviews your code to identify vulnerabilities that
                          automated tools might miss:
                        </p>
                        <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                          <li>Business logic flaws</li>
                          <li>Complex attack vectors</li>
                          <li>Protocol-specific vulnerabilities</li>
                          <li>Integration risks with external systems</li>
                          <li>Compliance with best practices</li>
                        </ul>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 font-blauer text-gray-900 flex items-center">
                          <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mr-3 text-sm font-bold">
                            3
                          </span>
                          Formal Verification
                        </h3>
                        <p className="text-gray-600 mb-4">
                          For critical contracts, we employ formal verification techniques to mathematically prove the
                          correctness of your code:
                        </p>
                        <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                          <li>Mathematical proof of contract behavior</li>
                          <li>Verification of critical security properties</li>
                          <li>Exhaustive analysis of all possible execution paths</li>
                          <li>Validation of contract invariants</li>
                        </ul>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 font-blauer text-gray-900 flex items-center">
                          <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mr-3 text-sm font-bold">
                            4
                          </span>
                          Dynamic Analysis & Testing
                        </h3>
                        <p className="text-gray-600 mb-4">
                          We perform extensive testing to validate the behavior of your smart contracts:
                        </p>
                        <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                          <li>Fuzz testing to identify unexpected behaviors</li>
                          <li>Simulation of attack scenarios</li>
                          <li>Stress testing under various conditions</li>
                          <li>Integration testing with external contracts</li>
                          <li>Gas optimization analysis</li>
                        </ul>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 font-blauer text-gray-900 flex items-center">
                          <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mr-3 text-sm font-bold">
                            5
                          </span>
                          Comprehensive Reporting
                        </h3>
                        <p className="text-gray-600 mb-4">We deliver a detailed report that includes:</p>
                        <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                          <li>Identified vulnerabilities with severity ratings</li>
                          <li>Detailed explanations of each issue</li>
                          <li>Recommended remediation steps</li>
                          <li>Risk assessment for insurance purposes</li>
                          <li>Certification of audited contracts</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Shield className="h-6 w-6 text-blue-800" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-gray-900 mb-2">Our Security Guarantee</h3>
                        <p className="text-gray-600">
                          After completing our audit process, we provide a security certification for your smart
                          contract. This certification is a prerequisite for our insurance coverage and demonstrates to
                          your stakeholders that your contracts meet the highest security standards.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </TabsContent>

              <TabsContent value="insurance" className="pt-8">
                <div className="max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold mb-6 font-blauer text-gray-900">
                      Smart Contract Insurance Coverage
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Our insurance coverage provides financial protection against losses resulting from smart contract
                      vulnerabilities, failures, or exploits. This coverage is available exclusively for contracts that
                      have undergone our comprehensive audit process.
                    </p>

                    <div className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
                      <h3 className="text-xl font-bold mb-6 font-blauer text-gray-900">What's Covered</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-gray-900">Smart Contract Bugs</h4>
                            <p className="text-gray-600 text-sm">
                              Coverage for losses due to coding errors or logical flaws in audited contracts
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-gray-900">Economic Attacks</h4>
                            <p className="text-gray-600 text-sm">
                              Protection against flash loan attacks, price manipulation, and other economic exploits
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-gray-900">Oracle Failures</h4>
                            <p className="text-gray-600 text-sm">
                              Coverage for losses resulting from oracle malfunctions or manipulations
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-gray-900">Admin Key Compromises</h4>
                            <p className="text-gray-600 text-sm">
                              Protection against unauthorized access to administrative functions
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 border-t border-gray-200 pt-6">
                        <h3 className="text-xl font-bold mb-6 font-blauer text-gray-900">What's Not Covered</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              <AlertTriangle className="h-5 w-5 text-red-600" />
                            </div>
                            <div className="ml-3">
                              <h4 className="font-medium text-gray-900">Unaudited Code</h4>
                              <p className="text-gray-600 text-sm">
                                Contracts or modifications that haven't undergone our audit process
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              <AlertTriangle className="h-5 w-5 text-red-600" />
                            </div>
                            <div className="ml-3">
                              <h4 className="font-medium text-gray-900">Blockchain Infrastructure Failures</h4>
                              <p className="text-gray-600 text-sm">
                                Issues with the underlying blockchain network not related to the contract
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              <AlertTriangle className="h-5 w-5 text-red-600" />
                            </div>
                            <div className="ml-3">
                              <h4 className="font-medium text-gray-900">Regulatory Changes</h4>
                              <p className="text-gray-600 text-sm">
                                Losses due to changes in regulatory environment or legal status
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              <AlertTriangle className="h-5 w-5 text-red-600" />
                            </div>
                            <div className="ml-3">
                              <h4 className="font-medium text-gray-900">Intentional Misuse</h4>
                              <p className="text-gray-600 text-sm">
                                Losses resulting from intentional misuse by contract owners or administrators
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-8">
                      <h3 className="text-xl font-bold mb-4 font-blauer text-gray-900">Insurance Process</h3>
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                            1
                          </div>
                          <div className="ml-4">
                            <h4 className="font-medium text-gray-900">Risk Assessment</h4>
                            <p className="text-gray-600">
                              Based on our audit findings, we assess the risk level of your smart contract and determine
                              appropriate coverage limits and premiums.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                            2
                          </div>
                          <div className="ml-4">
                            <h4 className="font-medium text-gray-900">Coverage Selection</h4>
                            <p className="text-gray-600">
                              Choose from different coverage options based on your specific needs, including coverage
                              amount, deductible, and term length.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                            3
                          </div>
                          <div className="ml-4">
                            <h4 className="font-medium text-gray-900">Policy Issuance</h4>
                            <p className="text-gray-600">
                              Once terms are agreed upon, we issue a formal insurance policy that details coverage,
                              exclusions, and claim procedures.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                            4
                          </div>
                          <div className="ml-4">
                            <h4 className="font-medium text-gray-900">Continuous Monitoring</h4>
                            <p className="text-gray-600">
                              Throughout the coverage period, we continuously monitor your smart contracts for potential
                              issues or emerging threats.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                            5
                          </div>
                          <div className="ml-4">
                            <h4 className="font-medium text-gray-900">Claims Processing</h4>
                            <p className="text-gray-600">
                              In the event of a covered incident, our streamlined claims process ensures prompt
                              investigation and payment.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </TabsContent>

              <TabsContent value="pricing" className="pt-8">
                <div className="max-w-5xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold mb-6 font-blauer text-gray-900 text-center">
                      Transparent Pricing
                    </h2>
                    <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                      Our pricing is based on the complexity of your smart contracts, the level of coverage required,
                      and the assessed risk level. We offer flexible plans to meet the needs of different institutions.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                      <Card className="border-gray-200 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gray-100 rounded-bl-full"></div>
                        <CardHeader>
                          <CardTitle className="font-blauer text-2xl">Standard</CardTitle>
                          <CardDescription>For smaller institutions with basic needs</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-4xl font-bold font-blauer text-gray-900 mb-6">$25,000</div>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="ml-3 text-gray-600">Basic smart contract audit</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="ml-3 text-gray-600">Up to $1M insurance coverage</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="ml-3 text-gray-600">Quarterly security reviews</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="ml-3 text-gray-600">Email support</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full bg-gray-900 hover:bg-gray-800">Contact Sales</Button>
                        </CardFooter>
                      </Card>

                      <Card className="border-blue-200 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full"></div>
                        <div className="absolute top-5 right-5 bg-blue-800 text-white text-xs px-2 py-1 rounded-full">
                          Popular
                        </div>
                        <CardHeader>
                          <CardTitle className="font-blauer text-2xl">Professional</CardTitle>
                          <CardDescription>For mid-sized financial institutions</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-4xl font-bold font-blauer text-gray-900 mb-6">$75,000</div>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="ml-3 text-gray-600">Comprehensive smart contract audit</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="ml-3 text-gray-600">Up to $5M insurance coverage</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="ml-3 text-gray-600">Monthly security reviews</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="ml-3 text-gray-600">Priority support with 24-hour response</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="ml-3 text-gray-600">Continuous monitoring</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full bg-blue-800 hover:bg-blue-900">Contact Sales</Button>
                        </CardFooter>
                      </Card>

                      <Card className="border-gray-200 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gray-100 rounded-bl-full"></div>
                        <CardHeader>
                          <CardTitle className="font-blauer text-2xl">Enterprise</CardTitle>
                          <CardDescription>For large financial institutions</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-4xl font-bold font-blauer text-gray-900 mb-6">Custom</div>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="ml-3 text-gray-600">Advanced audit with formal verification</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="ml-3 text-gray-600">Custom insurance coverage limits</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="ml-3 text-gray-600">Weekly security reviews</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="ml-3 text-gray-600">Dedicated account manager</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="ml-3 text-gray-600">24/7 emergency support</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="ml-3 text-gray-600">Real-time threat intelligence</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full bg-gray-900 hover:bg-gray-800">Contact Sales</Button>
                        </CardFooter>
                      </Card>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
                      <h3 className="text-xl font-bold mb-6 font-blauer text-gray-900">Frequently Asked Questions</h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">How are premiums calculated?</h4>
                          <p className="text-gray-600">
                            Premiums are calculated based on several factors including contract complexity, total value
                            secured, risk assessment results, and coverage limits. Our underwriting team performs a
                            detailed analysis to provide fair and transparent pricing.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Can coverage be adjusted over time?</h4>
                          <p className="text-gray-600">
                            Yes, coverage can be adjusted as your needs change. We recommend quarterly reviews to ensure
                            your coverage remains aligned with your current risk profile and contract value.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">How quickly are claims processed?</h4>
                          <p className="text-gray-600">
                            Our claims process is designed for efficiency. Initial assessment begins within 24 hours of
                            claim submission, and straightforward claims are typically resolved within 7-14 business
                            days.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Do you offer multi-contract discounts?</h4>
                          <p className="text-gray-600">
                            Yes, we offer volume discounts for institutions with multiple smart contracts. Our
                            enterprise plans include customized pricing structures for large-scale deployments.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 font-blauer text-gray-900">
                Ready to secure your smart contracts?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact our team to discuss your specific needs and receive a customized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-800 hover:bg-blue-900 text-white rounded-md px-8 py-4 font-blauer text-lg">
                  Schedule a Consultation
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-800 text-blue-800 hover:bg-blue-50 rounded-md px-8 py-4 font-blauer text-lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Brochure
                </Button>
              </div>
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

