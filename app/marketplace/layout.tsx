import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CDS Marketplace | SIPRIFI",
  description:
    "Explore our marketplace of Credit Default Swaps. Protect your investments and turn risk into opportunity with SIPRIFI.",
  keywords: "CDS Marketplace, Credit Default Swaps, Investment Protection, Financial Market, SIPRIFI",
}

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
