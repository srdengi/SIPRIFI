import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CDS over Smart Contracts | SIPRIFI",
  description:
    "Smart contract protection with CDS. Audit and security for your smart contracts. Turning risk into opportunity.",
  keywords: "Smart Contracts, CDS, Contract Audit, Blockchain Security, Smart Contract Protection",
}

export default function SmartContractLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
