import Link from "next/link"
import { Shield } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-12 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-blue-800" />
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
                SIPRIFI
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Secure Innovative Platform for Reliable Investment in Financial Instruments
            </p>
            <div className="text-sm text-gray-500">© {currentYear} SIPRIFI. All rights reserved.</div>
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
                <Link href="/terms" className="text-gray-600 hover:text-blue-800">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-800">
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

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            SIPRIFI is protected by copyright and intellectual property laws. All content, features, and functionality
            are proprietary. Unauthorized use, reproduction, or distribution is strictly prohibited.
          </p>
        </div>
      </div>
    </footer>
  )
}
