"use client"

import { ArrowRight, ChevronRight, Lock, Shield, Wallet, Zap } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function MainPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      {/* Custom font import */}
      <style jsx global>{`
        @import url('https://fonts.cdnfonts.com/css/blauer-neue');
        
        h1, h2, h3, h4, h5, h6, .font-blauer {
          font-family: 'Blauer Neue', sans-serif;
        }
      `}</style>

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold tracking-tight font-blauer">SIPRIFI</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="#about" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
              About
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
              How It Works
            </Link>
            <Link href="#benefits" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
              Benefits
            </Link>
            <Link href="#contracts" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
              Contracts
            </Link>
          </nav>
          <div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white border border-blue-500 rounded-full px-6 font-blauer">
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-blue-900/30 px-3 py-1 text-sm text-blue-400 font-blauer">
                Secure • Innovative • Reliable
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-blauer">
                  Keeping you safe in an investment world
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl">
                  SIPRIFI is a decentralized platform for Credit Default Swaps (CDS) and CDSC (Credit Default Swap on
                  Chain) based on blockchain technology.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white border border-blue-500 rounded-full px-8 py-6 font-blauer text-lg">
                  Enter App
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-400 hover:bg-blue-900/30 rounded-full px-8 py-6 font-blauer text-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-[400px]">
                <div
                  className="absolute inset-0 rounded-full bg-blue-600/10 animate-pulse"
                  style={{ animationDuration: "4s" }}
                ></div>
                <div
                  className="absolute inset-8 rounded-full bg-blue-600/20 animate-pulse"
                  style={{ animationDuration: "5s" }}
                ></div>
                <div
                  className="absolute inset-16 rounded-full bg-blue-600/30 animate-pulse"
                  style={{ animationDuration: "6s" }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="h-32 w-32 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-blauer">What is SIPRIFI?</h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                SIPRIFI (Secure Innovative Platform for Reliable Investment) operates in the financial technology
                sector, offering a blockchain-based platform for Credit Default Swaps (CDS) and CDSC (Credit Default
                Swap on Chain).
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
            <Card className="bg-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-300">
              <CardHeader className="pb-2">
                <Shield className="h-12 w-12 text-blue-400 mb-2" />
                <CardTitle className="font-blauer text-white">Decentralized Finance</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400">
                <CardDescription className="text-gray-400">
                  Our platform leverages DeFi principles, eliminating intermediaries and allowing users to participate
                  in risk management activities in a fully decentralized manner.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-300">
              <CardHeader className="pb-2">
                <Lock className="h-12 w-12 text-blue-400 mb-2" />
                <CardTitle className="font-blauer text-white">Blockchain Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Thanks to blockchain technology, both CDS and CDSC facilitate real-time, peer-to-peer transactions
                  with a high level of trust and automation through smart contracts.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-300">
              <CardHeader className="pb-2">
                <Zap className="h-12 w-12 text-blue-400 mb-2" />
                <CardTitle className="font-blauer text-white">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  The CDSC product integrates traditional CDS contracts with blockchain infrastructure, providing
                  complete payment automation, removal of intermediaries, and total transparency.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-blauer">How SIPRIFI Works</h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed">
                Our platform simplifies the process of creating, trading, and managing Credit Default Swaps through
                blockchain technology.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-900/30 mb-4">
                <Wallet className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-blauer">Connect Wallet</h3>
              <p className="text-gray-400">Connect your Web3 wallet to access the SIPRIFI platform securely.</p>
              <div className="mt-4 flex items-center text-blue-400">
                <span className="text-sm font-medium">Step 1</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-900/30 mb-4">
                <svg
                  className="h-8 w-8 text-blue-400"
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
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 font-blauer">Create Contract</h3>
              <p className="text-gray-400">
                Define your CDS terms, including reference entity, notional value, and premium.
              </p>
              <div className="mt-4 flex items-center text-blue-400">
                <span className="text-sm font-medium">Step 2</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-900/30 mb-4">
                <svg
                  className="h-8 w-8 text-blue-400"
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
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 font-blauer">Sign Agreement</h3>
              <p className="text-gray-400">
                Securely sign the smart contract with your counterparty through blockchain.
              </p>
              <div className="mt-4 flex items-center text-blue-400">
                <span className="text-sm font-medium">Step 3</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-900/30 mb-4">
                <svg
                  className="h-8 w-8 text-blue-400"
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
              <h3 className="text-xl font-bold mb-2 font-blauer">Manage Risk</h3>
              <p className="text-gray-400">
                Monitor your contract, receive automated payments, and manage your credit risk.
              </p>
              <div className="mt-4 flex items-center text-blue-400">
                <span className="text-sm font-medium">Step 4</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Contracts Preview Section */}
      <section id="contracts" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-blauer">
                Explore User Contracts
              </h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed">
                Browse through active CDS contracts created by users on our platform.
                <span className="block mt-2 text-blue-400">
                  Connect your wallet to view more details and create your own.
                </span>
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="bg-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-300 overflow-hidden group"
              >
                <CardHeader className="pb-2 border-b border-gray-800">
                  <div className="flex justify-between items-center">
                    <CardTitle className="font-blauer text-white">CDS-{1000 + i}</CardTitle>
                    <span className="inline-flex items-center rounded-full bg-green-900/30 px-2.5 py-0.5 text-xs font-medium text-green-400">
                      Active
                    </span>
                  </div>
                  <CardDescription className="text-gray-400">
                    Created by 0x{i}a2b...{i}f9
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Reference Entity</span>
                      <span className="font-medium">Company {String.fromCharCode(64 + i)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Notional Value</span>
                      <span className="font-medium">${(100 + i * 25).toLocaleString()},000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Premium</span>
                      <span className="font-medium">{50 + i * 10} bps</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Expiry</span>
                      <span className="font-medium">Dec 31, 202{i + 3}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button
                    variant="ghost"
                    className="w-full text-blue-400 hover:text-blue-300 hover:bg-blue-900/20 font-blauer"
                  >
                    View Details
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white border border-blue-500 rounded-full px-8 py-6 font-blauer text-lg">
              <Wallet className="mr-2 h-5 w-5" />
              Connect Wallet to View All Contracts
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-900/20 border-t border-blue-900/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-blauer">
                Ready to transform your investment strategy?
              </h2>
              <p className="max-w-[600px] text-blue-300 md:text-xl/relaxed">
                Join SIPRIFI today and experience the future of decentralized Credit Default Swaps.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-white text-blue-900 hover:bg-blue-50 border-0 rounded-full px-8 py-6 font-blauer text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-blue-400 text-blue-300 hover:bg-blue-800/30 rounded-full px-8 py-6 font-blauer text-lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 md:py-12 bg-gray-950 border-t border-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold tracking-tight font-blauer">SIPRIFI</span>
            </div>
            <p className="text-gray-400">Secure Innovative Platform for Reliable Investment</p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </div>
            <p className="text-sm text-gray-500">© 2025 SIPRIFI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

