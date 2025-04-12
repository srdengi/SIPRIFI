import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SIPRIFI | Turning risk into opportunity",
  description:
    "Secure and innovative platform for reliable investments in financial instruments. CDS solutions and smart contract protection.",
  keywords: "SIPRIFI, CDS, Credit Default Swaps, Smart Contracts, Blockchain, Risk Management, Financial Instruments",
  authors: [{ name: "SIPRIFI Team" }],
  openGraph: {
    title: "SIPRIFI | Turning risk into opportunity",
    description: "Secure and innovative platform for reliable investments in financial instruments.",
    url: "https://siprifi.com",
    siteName: "SIPRIFI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SIPRIFI - Turning risk into opportunity",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIPRIFI | Turning risk into opportunity",
    description: "Secure and innovative platform for reliable investments in financial instruments.",
    images: ["/twitter-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
