import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SIPRIFI Individual | Personal financial protection",
  description:
    "SIPRIFI individual solutions for retail investors. Turning risk into opportunity for your personal investments.",
  keywords: "SIPRIFI Individual, Retail Investors, Personal CDS, Investment Protection",
}

export default function IndividualLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
