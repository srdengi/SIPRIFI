"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, CheckCircle, AlertTriangle, FileText, Search } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function SmartContractProtection() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Custom font import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        
        h1, h2, h3, h4, h5, h6, .font-space {
          font-family: 'Space Grotesk', sans-serif;
        }
      `}</style>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block bg-blue-50 text-blue-800 px-4 py-1 rounded-md text-sm font-space">
                Turning risk into opportunity
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 font-space text-gray-900"
            >
              CDS over Smart Contracts
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
            >
              Protect your smart contracts against vulnerabilities and failures with our specialized audit and CDS
              solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button className="bg-blue-800 hover:bg-blue-900 text-white rounded-md px-8 py-4 font-space text-lg">
                Request Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-blue-800 text-blue-800 hover:bg-blue-50 rounded-md px-8 py-4 font-space text-lg"
              >
                Explore Plans
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto space-x-8 py-4">
            <button
              onClick={() => setActiveTab("overview")}
              className={`text-sm font-medium whitespace-nowrap pb-4 border-b-2 transition-colors ${
                activeTab === "overview"
                  ? "border-blue-800 text-blue-800"
                  : "border-transparent text-gray-600 hover:text-blue-800"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("audit")}
              className={`text-sm font-medium whitespace-nowrap pb-4 border-b-2 transition-colors ${
                activeTab === "audit"
                  ? "border-blue-800 text-blue-800"
                  : "border-transparent text-gray-600 hover:text-blue-800"
              }`}
            >
              Audit
            </button>
            <button
              onClick={() => setActiveTab("pricing")}
              className={`text-sm font-medium whitespace-nowrap pb-4 border-b-2 transition-colors ${
                activeTab === "pricing"
                  ? "border-blue-800 text-blue-800"
                  : "border-transparent text-gray-600 hover:text-blue-800"
              }`}
            >
              Plans & Pricing
            </button>
            <button
              onClick={() => setActiveTab("faq")}
              className={`text-sm font-medium whitespace-nowrap pb-4 border-b-2 transition-colors ${
                activeTab === "faq"
                  ? "border-blue-800 text-blue-800"
                  : "border-transparent text-gray-600 hover:text-blue-800"
              }`}
            >
              FAQ
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {activeTab === "overview" && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 font-space text-gray-900">
                Comprehensive Smart Contract Protection
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Smart contracts are the foundation of decentralized applications, but they can contain vulnerabilities
                that put millions of dollars at risk. SIPRIFI offers a complete solution that combines security audits
                with financial protection instruments.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-800" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-space text-gray-900">CDS for Smart Contracts</h3>
                  <p className="text-gray-600">
                    Our Credit Default Swaps specifically for smart contracts provide financial protection against
                    failures, vulnerabilities, and exploits, ensuring that your investment is protected.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center mb-4">
                    <Search className="h-6 w-6 text-blue-800" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-space text-gray-900">Professional Audit</h3>
                  <p className="text-gray-600">
                    Our team of blockchain security experts conducts comprehensive audits to identify vulnerabilities
                    before they can be exploited, improving the security of your contracts.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 font-space text-gray-900">How It Works</h3>
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-blue-800 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Initial Assessment</h4>
                    <p className="text-gray-600">
                      We analyze your smart contract to determine its complexity, functionality, and potential risk
                      vectors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-blue-800 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Security Audit</h4>
                    <p className="text-gray-600">
                      We conduct a comprehensive code audit, identifying vulnerabilities and recommending improvements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-blue-800 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">CDS Protection</h4>
                    <p className="text-gray-600">
                      We design a customized Credit Default Swap that covers the specific risks of your contract.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-blue-800 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Continuous Monitoring</h4>
                    <p className="text-gray-600">
                      We constantly monitor your contract and the blockchain ecosystem to detect new threats.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-blue-800 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Why is Smart Contract protection essential?</h4>
                    <p className="text-gray-600">
                      In 2022, more than $3.8 billion were lost due to hacks and vulnerabilities in smart contracts. The
                      combination of audits and financial protection is the most comprehensive way to mitigate these
                      risks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "audit" && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 font-space text-gray-900">Smart Contract Audit</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our audit process is designed to identify vulnerabilities, optimize code, and ensure that your smart
                contracts function as intended, protecting your assets and users.
              </p>

              <div className="space-y-8 mb-12">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 font-space text-gray-900">Audit Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-gray-900">Static Code Analysis</h4>
                        <p className="text-gray-600 text-sm">
                          Comprehensive review of the source code to identify known vulnerability patterns.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-gray-900">Dynamic Analysis</h4>
                        <p className="text-gray-600 text-sm">
                          Execution tests in simulated environments to detect unexpected behaviors.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-gray-900">Formal Verification</h4>
                        <p className="text-gray-600 text-sm">
                          Application of mathematical methods to prove the correctness of the contract.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-gray-900">Manual Expert Review</h4>
                        <p className="text-gray-600 text-sm">
                          Detailed analysis by blockchain security specialists with experience in complex attacks.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-gray-900">Detailed Report and Recommendations</h4>
                        <p className="text-gray-600 text-sm">
                          Complete documentation of findings with practical solutions for each vulnerability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 font-space text-gray-900">Types of Vulnerabilities Detected</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Reentrancy</span>
                    </div>
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Integer Overflow/Underflow</span>
                    </div>
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Front-Running</span>
                    </div>
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Access Control Issues</span>
                    </div>
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Oracle Manipulation</span>
                    </div>
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Flash Loan Attacks</span>
                    </div>
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Logic Errors</span>
                    </div>
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Gas Optimization Issues</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button className="bg-blue-800 hover:bg-blue-900 text-white rounded-md px-8 py-4 font-space text-lg">
                  Request Audit
                  <FileText className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {activeTab === "pricing" && (
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 font-space text-gray-900 text-center">Plans & Pricing</h2>
              <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                We offer different protection plans tailored to your needs, from individual developers to large
                enterprise projects.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="p-6 border-b border-gray-200 bg-gray-50">
                    <h3 className="text-2xl font-bold font-space text-gray-900 mb-2">Standard</h3>
                    <p className="text-gray-600 mb-4">For individual developers and small projects</p>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">$2,500</span>
                      <span className="text-gray-600 ml-2">/ contract</span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Basic security audit</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">CDS protection up to $100,000</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Vulnerability report</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Email support</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Audit certificate</span>
                    </div>
                    <div className="pt-4">
                      <Button className="w-full bg-blue-800 hover:bg-blue-900 text-white rounded-md py-2">
                        Select Plan
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-blue-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 relative">
                  <div className="absolute top-0 right-0 bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    RECOMMENDED
                  </div>
                  <div className="p-6 border-b border-blue-200 bg-blue-50">
                    <h3 className="text-2xl font-bold font-space text-gray-900 mb-2">Professional</h3>
                    <p className="text-gray-600 mb-4">For businesses and enterprise applications</p>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">$7,500</span>
                      <span className="text-gray-600 ml-2">/ contract</span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Advanced security audit</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">CDS protection up to $1,000,000</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Formal verification</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Priority 24/7 support</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Continuous monitoring</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Premium audit certificate</span>
                    </div>
                    <div className="pt-4">
                      <Button className="w-full bg-blue-800 hover:bg-blue-900 text-white rounded-md py-2">
                        Select Plan
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
                <h3 className="text-xl font-bold mb-2 font-space text-gray-900">Need a custom solution?</h3>
                <p className="text-gray-600 mb-4">
                  Contact our team to design a plan that perfectly fits your specific needs.
                </p>
                <Button
                  variant="outline"
                  className="border-blue-800 text-blue-800 hover:bg-blue-50 rounded-md px-6 py-2"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          )}

          {activeTab === "faq" && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 font-space text-gray-900 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold mb-2 font-space text-gray-900">
                    What is a CDS for Smart Contracts?
                  </h3>
                  <p className="text-gray-600">
                    A Credit Default Swap (CDS) for Smart Contracts is a financial instrument that provides protection
                    against failures or vulnerabilities in smart contracts. It works like insurance: you pay a premium
                    and, in the event of a credit event (such as a hack or exploit), you receive compensation.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold mb-2 font-space text-gray-900">
                    How is the price of protection determined?
                  </h3>
                  <p className="text-gray-600">
                    The price is based on several factors, including the complexity of the contract, the total insured
                    value, the security history of the development team, and the results of our audit. More complex
                    contracts or those with higher insured value generally have higher premiums.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold mb-2 font-space text-gray-900">
                    What events are covered by the protection?
                  </h3>
                  <p className="text-gray-600">
                    Our protection covers a wide range of events, including undetected security vulnerabilities,
                    reentrancy attacks, oracle manipulation, flash loan attacks, and other technical failures that
                    result in loss of funds. The specific conditions are detailed in each protection contract.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold mb-2 font-space text-gray-900">
                    How long does the audit process take?
                  </h3>
                  <p className="text-gray-600">
                    The audit time varies depending on the complexity of the contract. A basic audit can be completed in
                    1-2 weeks, while more comprehensive audits for complex contracts can take 3-4 weeks. We offer
                    expedited options for projects with tight deadlines.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold mb-2 font-space text-gray-900">
                    How is payment made in the event of a covered event?
                  </h3>
                  <p className="text-gray-600">
                    Payments are processed automatically through smart contracts when a covered event is verified. Our
                    system uses decentralized oracles to confirm events and ensure that payments are made quickly and
                    transparently.
                  </p>
                </div>
              </div>
            </div>
          )}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-space text-gray-900">
                Ready to protect your Smart Contracts?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Start today with an audit and CDS protection for your smart contracts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-800 hover:bg-blue-900 text-white rounded-md px-8 py-4 font-space text-lg">
                  Request Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-800 text-blue-800 hover:bg-blue-50 rounded-md px-8 py-4 font-space text-lg"
                >
                  Talk to an Expert
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
