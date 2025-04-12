import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SIPRIFI Institutional | Financial solutions for businesses",
  description:
    "SIPRIFI institutional solutions for financial risk management. Turning risk into opportunity for businesses and institutions.",
  keywords: "SIPRIFI Institutional, Business Solutions, Institutional CDS, Corporate Risk Management",
}

export default function InstitutionalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
