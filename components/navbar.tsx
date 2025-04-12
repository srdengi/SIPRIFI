"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Shield, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-blue-800" />
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">SIPRIFI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link
            href="/solutions/smart-contract"
            className={`text-sm font-medium transition-colors hover:text-blue-800 ${
              pathname.includes("/solutions") ? "text-blue-800" : "text-gray-600"
            }`}
          >
            Solutions
          </Link>
          <Link
            href="/marketplace"
            className={`text-sm font-medium transition-colors hover:text-blue-800 ${
              pathname.includes("/marketplace") ? "text-blue-800" : "text-gray-600"
            }`}
          >
            Marketplace
          </Link>
          <Link
            href="/resources"
            className={`text-sm font-medium transition-colors hover:text-blue-800 ${
              pathname.includes("/resources") ? "text-blue-800" : "text-gray-600"
            }`}
          >
            Resources
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-blue-800 ${
              pathname.includes("/about") ? "text-blue-800" : "text-gray-600"
            }`}
          >
            About Us
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-blue-800 transition-colors">
            Sign In
          </Link>
          <Button className="bg-blue-800 hover:bg-blue-900 text-white rounded-md px-4">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/solutions/smart-contract"
              className={`text-sm font-medium py-2 transition-colors hover:text-blue-800 ${
                pathname.includes("/solutions") ? "text-blue-800" : "text-gray-600"
              }`}
            >
              Solutions
            </Link>
            <Link
              href="/marketplace"
              className={`text-sm font-medium py-2 transition-colors hover:text-blue-800 ${
                pathname.includes("/marketplace") ? "text-blue-800" : "text-gray-600"
              }`}
            >
              Marketplace
            </Link>
            <Link
              href="/resources"
              className={`text-sm font-medium py-2 transition-colors hover:text-blue-800 ${
                pathname.includes("/resources") ? "text-blue-800" : "text-gray-600"
              }`}
            >
              Resources
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium py-2 transition-colors hover:text-blue-800 ${
                pathname.includes("/about") ? "text-blue-800" : "text-gray-600"
              }`}
            >
              About Us
            </Link>
            <div className="pt-2 border-t border-gray-200 flex flex-col space-y-3">
              <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-blue-800 py-2">
                Sign In
              </Link>
              <Button className="bg-blue-800 hover:bg-blue-900 text-white rounded-md w-full">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
