"use client"
import {
  Shield,
  Wallet,
  ChevronRight,
  Lock,
  FileText,
  CheckCircle,
  AlertTriangle,
  Plus,
  Search,
  RefreshCw,
  Clock,
  Download,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CDSMarketplace() {
  const [walletConnected, setWalletConnected] = useState(true)
  const [walletAddress, setWalletAddress] = useState("0x7F5Ec...3D9f")
  const [showWalletOptions, setShowWalletOptions] = useState(false)
  const [showContractDetails, setShowContractDetails] = useState(false)
  const [selectedContract, setSelectedContract] = useState(null)
  const [showCreateCDS, setShowCreateCDS] = useState(false)
  const [activeTab, setActiveTab] = useState("available")
  const [searchQuery, setSearchQuery] = useState("")
  const [filterRisk, setFilterRisk] = useState("all")
  const [filterValue, setFilterValue] = useState("all")

  // Simular conexión de wallet
  const connectWallet = (type) => {
    setShowWalletOptions(false)
    // Simular tiempo de conexión
    setTimeout(() => {
      setWalletConnected(true)
      setWalletAddress("0x7F5Ec...3D9f")
    }, 1000)
  }

  // Simular selección de contrato
  const viewContractDetails = (contract) => {
    setSelectedContract(contract)
    setShowContractDetails(true)
  }

  // Datos de ejemplo para contratos CDS
  const cdsContracts = [
    {
      id: "CDS-1001",
      entity: "Company A",
      value: "$125,000",
      premium: "85 bps",
      expiry: "Dec 31, 2026",
      risk: "Low",
      status: "Available",
    },
    {
      id: "CDS-1002",
      entity: "Company B",
      value: "$200,000",
      premium: "110 bps",
      expiry: "Jun 30, 2026",
      risk: "Medium",
      status: "Available",
    },
    {
      id: "CDS-1003",
      entity: "Company C",
      value: "$150,000",
      premium: "95 bps",
      expiry: "Mar 15, 2026",
      risk: "Low",
      status: "Available",
    },
    {
      id: "CDS-1004",
      entity: "Company D",
      value: "$300,000",
      premium: "130 bps",
      expiry: "Sep 30, 2026",
      risk: "High",
      status: "Available",
    },
    {
      id: "CDS-1005",
      entity: "Company E",
      value: "$175,000",
      premium: "100 bps",
      expiry: "Apr 15, 2026",
      risk: "Medium",
      status: "Available",
    },
  ]

  // Contratos del usuario
  const userContracts = [
    {
      id: "CDS-0987",
      entity: "Company X",
      value: "$100,000",
      premium: "75 bps",
      expiry: "Oct 15, 2026",
      risk: "Low",
      status: "Active",
    },
    {
      id: "CDS-0988",
      entity: "Company Y",
      value: "$250,000",
      premium: "120 bps",
      expiry: "Aug 22, 2026",
      risk: "Medium",
      status: "Active",
    },
  ]

  // Filtrar contratos
  const filteredContracts = cdsContracts.filter((contract) => {
    // Filtrar por búsqueda
    const matchesSearch =
      searchQuery === "" ||
      contract.entity.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contract.id.toLowerCase().includes(searchQuery.toLowerCase())

    // Filtrar por riesgo
    const matchesRisk = filterRisk === "all" || contract.risk.toLowerCase() === filterRisk.toLowerCase()

    // Filtrar por valor
    let matchesValue = true
    if (filterValue === "low") {
      matchesValue = Number.parseInt(contract.value.replace(/\D/g, "")) < 150000
    } else if (filterValue === "medium") {
      const val = Number.parseInt(contract.value.replace(/\D/g, ""))
      matchesValue = val >= 150000 && val < 250000
    } else if (filterValue === "high") {
      matchesValue = Number.parseInt(contract.value.replace(/\D/g, "")) >= 250000
    }

    return matchesSearch && matchesRisk && matchesValue
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      {/* Custom font import */}
      <style jsx global>{`
        @import url('https://fonts.cdnfonts.com/css/blauer-neue');
        
        h1, h2, h3, h4, h5, h6, .font-blauer {
          font-family: 'Blauer Neue', sans-serif;
        }
      `}</style>

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-gray-950/30 border-b border-gray-800">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold tracking-tight font-blauer">SIPRIFI</span>
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="#" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
              Dashboard
            </Link>
            <Link href="#" className="text-sm font-medium text-blue-400 transition-colors hover:text-white">
              Marketplace
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
              Portfolio
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
              Analytics
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {!walletConnected ? (
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white border border-blue-500 rounded-full px-4 font-blauer"
                onClick={() => setShowWalletOptions(true)}
              >
                <Wallet className="mr-2 h-4 w-4" />
                Connect Wallet
              </Button>
            ) : (
              <Button
                variant="outline"
                className="border-blue-400 text-blue-300 hover:bg-blue-900/30 rounded-full px-4 font-blauer"
              >
                <Wallet className="mr-2 h-4 w-4" />
                {walletAddress}
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold font-blauer mb-2">CDS Marketplace</h1>
            <p className="text-gray-400">Browse, create, and secure Credit Default Swap Contracts</p>
          </div>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white border border-blue-500 rounded-lg px-4 py-2 font-blauer"
            onClick={() => setShowCreateCDS(true)}
          >
            <Plus className="mr-2 h-4 w-4" />
            Create New CDS
          </Button>
        </div>

        <Tabs defaultValue="available" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 bg-gray-800 rounded-lg p-1">
            <TabsTrigger
              value="available"
              className="rounded-md data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Available Contracts
            </TabsTrigger>
            <TabsTrigger
              value="my-contracts"
              className="rounded-md data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              My Contracts
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="rounded-md data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Transaction History
            </TabsTrigger>
          </TabsList>

          {/* Available Contracts Tab */}
          <TabsContent value="available" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Filters Sidebar */}
              <div className="md:col-span-1">
                <Card className="bg-gray-800/50 border border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg font-blauer">Filters</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Search</label>
                      <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                        <Input
                          placeholder="Search by entity or ID"
                          className="pl-8 bg-gray-900 border-gray-700 text-white"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Risk Level</label>
                      <Select value={filterRisk} onValueChange={setFilterRisk}>
                        <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                          <SelectValue placeholder="All Risk Levels" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-gray-700 text-white">
                          <SelectItem value="all">All Risk Levels</SelectItem>
                          <SelectItem value="low">Low Risk</SelectItem>
                          <SelectItem value="medium">Medium Risk</SelectItem>
                          <SelectItem value="high">High Risk</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Contract Value</label>
                      <Select value={filterValue} onValueChange={setFilterValue}>
                        <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                          <SelectValue placeholder="All Values" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-gray-700 text-white">
                          <SelectItem value="all">All Values</SelectItem>
                          <SelectItem value="low">Under $150,000</SelectItem>
                          <SelectItem value="medium">$150,000 - $250,000</SelectItem>
                          <SelectItem value="high">Over $250,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white"
                      onClick={() => {
                        setSearchQuery("")
                        setFilterRisk("all")
                        setFilterValue("all")
                      }}
                    >
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Reset Filters
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border border-gray-700 mt-6">
                  <CardHeader>
                    <CardTitle className="text-lg font-blauer">Market Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total Contracts</span>
                      <span className="font-medium">{cdsContracts.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Avg. Premium</span>
                      <span className="font-medium">104 bps</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total Value</span>
                      <span className="font-medium">$950,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Last Updated</span>
                      <span className="font-medium">5 min ago</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contracts List */}
              <div className="md:col-span-3">
                <Card className="bg-gray-800/50 border border-gray-700">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg font-blauer">Available CDS Contracts</CardTitle>
                      <div className="text-sm text-gray-400">{filteredContracts.length} contracts found</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {filteredContracts.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-gray-700">
                              <th className="text-left py-3 px-4 text-gray-400 font-medium">Contract ID</th>
                              <th className="text-left py-3 px-4 text-gray-400 font-medium">Reference Entity</th>
                              <th className="text-left py-3 px-4 text-gray-400 font-medium">Notional Value</th>
                              <th className="text-left py-3 px-4 text-gray-400 font-medium">Premium</th>
                              <th className="text-left py-3 px-4 text-gray-400 font-medium">Expiry</th>
                              <th className="text-left py-3 px-4 text-gray-400 font-medium">Risk Level</th>
                              <th className="text-left py-3 px-4 text-gray-400 font-medium">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredContracts.map((contract, index) => (
                              <tr key={index} className="border-b border-gray-700 hover:bg-gray-800/50">
                                <td className="py-4 px-4 text-blue-400 font-medium">{contract.id}</td>
                                <td className="py-4 px-4 text-white">{contract.entity}</td>
                                <td className="py-4 px-4 text-white">{contract.value}</td>
                                <td className="py-4 px-4 text-white">{contract.premium}</td>
                                <td className="py-4 px-4 text-white">{contract.expiry}</td>
                                <td className="py-4 px-4">
                                  <span
                                    className={`px-2 py-1 rounded-full text-xs ${
                                      contract.risk === "Low"
                                        ? "bg-green-900/30 text-green-400"
                                        : contract.risk === "Medium"
                                          ? "bg-yellow-900/30 text-yellow-400"
                                          : "bg-red-900/30 text-red-400"
                                    }`}
                                  >
                                    {contract.risk}
                                  </span>
                                </td>
                                <td className="py-4 px-4">
                                  <Button
                                    size="sm"
                                    className="bg-blue-600 hover:bg-blue-700 text-white"
                                    onClick={() => viewContractDetails(contract)}
                                  >
                                    View Details
                                  </Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center mx-auto mb-4">
                          <Search className="h-8 w-8 text-gray-500" />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">No contracts found</h3>
                        <p className="text-gray-400 mb-4">Try adjusting your filters or search criteria</p>
                        <Button
                          variant="outline"
                          className="border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white"
                          onClick={() => {
                            setSearchQuery("")
                            setFilterRisk("all")
                            setFilterValue("all")
                          }}
                        >
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Reset Filters
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <Card className="bg-gray-800/50 border border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-lg font-blauer">How to Secure a Contract</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center mr-4 mt-0.5">
                          <span className="text-blue-300 font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-1">Browse Available Contracts</h4>
                          <p className="text-gray-400">Find a contract that matches your risk management needs</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center mr-4 mt-0.5">
                          <span className="text-blue-300 font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-1">Review Contract Details</h4>
                          <p className="text-gray-400">Carefully examine the terms, premium, and coverage</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center mr-4 mt-0.5">
                          <span className="text-blue-300 font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-1">Pay Premium & Secure</h4>
                          <p className="text-gray-400">Complete the transaction to activate your protection</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/50 border border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-lg font-blauer">Create Your Own Contract</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-300">
                        Don't see what you're looking for? Create a custom CDS contract tailored to your specific needs.
                      </p>
                      <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4">
                        <h4 className="font-medium text-white mb-2 flex items-center">
                          <CheckCircle className="h-5 w-5 text-blue-400 mr-2" />
                          Benefits of Custom Contracts
                        </h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li className="flex items-start">
                            <div className="w-1 h-1 rounded-full bg-blue-400 mt-2 mr-2"></div>
                            <span>Choose your own reference entity</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1 h-1 rounded-full bg-blue-400 mt-2 mr-2"></div>
                            <span>Set custom notional value and premium</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1 h-1 rounded-full bg-blue-400 mt-2 mr-2"></div>
                            <span>Define specific credit events</span>
                          </li>
                        </ul>
                      </div>
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => setShowCreateCDS(true)}
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Create Custom Contract
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* My Contracts Tab */}
          <TabsContent value="my-contracts" className="mt-6">
            <Card className="bg-gray-800/50 border border-gray-700">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-blauer">My Active Contracts</CardTitle>
                  <div className="text-sm text-gray-400">{userContracts.length} active contracts</div>
                </div>
              </CardHeader>
              <CardContent>
                {userContracts.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Contract ID</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Reference Entity</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Notional Value</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Premium</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Expiry</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Risk Level</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userContracts.map((contract, index) => (
                          <tr key={index} className="border-b border-gray-700 hover:bg-gray-800/50">
                            <td className="py-4 px-4 text-blue-400 font-medium">{contract.id}</td>
                            <td className="py-4 px-4 text-white">{contract.entity}</td>
                            <td className="py-4 px-4 text-white">{contract.value}</td>
                            <td className="py-4 px-4 text-white">{contract.premium}</td>
                            <td className="py-4 px-4 text-white">{contract.expiry}</td>
                            <td className="py-4 px-4">
                              <span
                                className={`px-2 py-1 rounded-full text-xs ${
                                  contract.risk === "Low"
                                    ? "bg-green-900/30 text-green-400"
                                    : contract.risk === "Medium"
                                      ? "bg-yellow-900/30 text-yellow-400"
                                      : "bg-red-900/30 text-red-400"
                                }`}
                              >
                                {contract.risk}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              <span className="px-2 py-1 rounded-full text-xs bg-blue-900/30 text-blue-400">
                                {contract.status}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              <Button size="sm" className="bg-gray-700 hover:bg-gray-600 text-white">
                                View Details
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center mx-auto mb-4">
                      <Wallet className="h-8 w-8 text-gray-500" />
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">No active contracts</h3>
                    <p className="text-gray-400 mb-4">You haven't secured any CDS contracts yet</p>
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => setActiveTab("available")}
                    >
                      Browse Available Contracts
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <Card className="bg-gray-800/50 border border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg font-blauer">Portfolio Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-white">Total Protection</h4>
                      <div className="text-xl font-bold text-white">$350,000</div>
                    </div>
                    <p className="text-gray-400 text-sm">Combined notional value of all your active contracts</p>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-white">Premium Paid</h4>
                      <div className="text-xl font-bold text-white">0.85 ETH</div>
                    </div>
                    <p className="text-gray-400 text-sm">Total premium paid for all active contracts</p>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-white">Risk Exposure</h4>
                      <div className="text-xl font-bold text-yellow-400">Medium</div>
                    </div>
                    <p className="text-gray-400 text-sm">Overall risk level of your contract portfolio</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg font-blauer">Contract Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">
                    Manage your active contracts and explore additional protection options.
                  </p>

                  <div className="space-y-3">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white flex justify-between items-center">
                      <span className="flex items-center">
                        <Plus className="mr-2 h-4 w-4" />
                        Create New Contract
                      </span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white flex justify-between items-center"
                    >
                      <span className="flex items-center">
                        <Download className="mr-2 h-4 w-4" />
                        Export Contract Data
                      </span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white flex justify-between items-center"
                    >
                      <span className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        View Expiring Contracts
                      </span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Transaction History Tab */}
          <TabsContent value="history" className="mt-6">
            <Card className="bg-gray-800/50 border border-gray-700">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-blauer">Transaction History</CardTitle>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-b border-gray-700 pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center mr-3">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Contract Secured</h4>
                          <p className="text-sm text-gray-400">CDS-0988 - Company Y</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-white">0.65 ETH</div>
                        <p className="text-sm text-gray-400">Apr 2, 2025</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gray-700 pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center mr-3">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Contract Secured</h4>
                          <p className="text-sm text-gray-400">CDS-0987 - Company X</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-white">0.20 ETH</div>
                        <p className="text-sm text-gray-400">Mar 15, 2025</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gray-700 pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center mr-3">
                          <Wallet className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Wallet Connected</h4>
                          <p className="text-sm text-gray-400">First connection to SIPRIFI</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-white">-</div>
                        <p className="text-sm text-gray-400">Mar 10, 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Shield className="h-5 w-5 text-blue-400" />
              <span className="text-lg font-bold tracking-tight font-blauer">SIPRIFI</span>
            </div>

            <div className="flex gap-6 mb-4 md:mb-0">
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>

            <div className="text-sm text-gray-500">© 2025 SIPRIFI. All rights reserved.</div>
          </div>
        </div>
      </footer>

      {/* Contract Details Dialog */}
      <Dialog open={showContractDetails} onOpenChange={setShowContractDetails}>
        <DialogContent className="sm:max-w-3xl bg-gray-900 border border-gray-800 text-white">
          <DialogHeader>
            <DialogTitle className="font-blauer text-xl">Contract Details</DialogTitle>
            <DialogDescription className="text-gray-400">
              Review contract details and secure protection
            </DialogDescription>
          </DialogHeader>

          {selectedContract && (
            <div className="py-4">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Contract ID</h4>
                    <p className="text-white font-medium">{selectedContract.id}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Reference Entity</h4>
                    <p className="text-white font-medium">{selectedContract.entity}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Notional Value</h4>
                    <p className="text-white font-medium">{selectedContract.value}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Premium</h4>
                    <p className="text-white font-medium">{selectedContract.premium}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Expiry Date</h4>
                    <p className="text-white font-medium">{selectedContract.expiry}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Risk Level</h4>
                    <p
                      className={`font-medium ${
                        selectedContract.risk === "Low"
                          ? "text-green-400"
                          : selectedContract.risk === "Medium"
                            ? "text-yellow-400"
                            : "text-red-400"
                      }`}
                    >
                      {selectedContract.risk}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Status</h4>
                    <p className="text-white font-medium">{selectedContract.status}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Protection Coverage</h4>
                    <p className="text-white font-medium">100% of Notional Value</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 mb-6">
                <h4 className="font-medium text-white mb-2">Credit Events Covered</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    <span className="text-gray-300 text-sm">Bankruptcy</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    <span className="text-gray-300 text-sm">Failure to Pay</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    <span className="text-gray-300 text-sm">Restructuring</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    <span className="text-gray-300 text-sm">Obligation Default</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    <span className="text-gray-300 text-sm">Repudiation/Moratorium</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 mb-6">
                <h4 className="font-medium text-white mb-2">Contract Terms</h4>
                <p className="text-gray-300 text-sm mb-4">
                  This Credit Default Swap Contract (CDSC) provides protection against credit events related to{" "}
                  {selectedContract.entity}. The protection buyer pays a premium of {selectedContract.premium} on the
                  notional value of {selectedContract.value} until the expiry date or until a credit event occurs.
                </p>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-yellow-300 text-sm">
                    Always review the full contract terms before purchasing protection. Smart contract execution is
                    automatic and irreversible.
                  </p>
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-white">Total Cost</h4>
                  <div className="text-xl font-bold text-white">0.25 ETH</div>
                </div>
                <p className="text-gray-300 text-sm">
                  This is the total premium cost for the entire contract period, payable upfront.
                </p>
              </div>
            </div>
          )}

          <DialogFooter className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
              <FileText className="mr-2 h-4 w-4" />
              View Full Contract
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Lock className="mr-2 h-4 w-4" />
              Secure This Contract
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Create CDS Dialog */}
      <Dialog open={showCreateCDS} onOpenChange={setShowCreateCDS}>
        <DialogContent className="sm:max-w-3xl bg-gray-900 border border-gray-800 text-white">
          <DialogHeader>
            <DialogTitle className="font-blauer text-xl">Create Custom CDS Contract</DialogTitle>
            <DialogDescription className="text-gray-400">
              Design a Credit Default Swap Contract tailored to your needs
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-300 block mb-1">Reference Entity</label>
                    <Input placeholder="Enter company name" className="bg-gray-800 border-gray-700 text-white" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-300 block mb-1">Notional Value</label>
                    <Input placeholder="e.g. $100,000" className="bg-gray-800 border-gray-700 text-white" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-300 block mb-1">Premium (basis points)</label>
                    <Input placeholder="e.g. 85" className="bg-gray-800 border-gray-700 text-white" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-300 block mb-1">Contract Duration</label>
                    <Select>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-700 text-white">
                        <SelectItem value="3m">3 Months</SelectItem>
                        <SelectItem value="6m">6 Months</SelectItem>
                        <SelectItem value="1y">1 Year</SelectItem>
                        <SelectItem value="2y">2 Years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-300 block mb-1">Payment Frequency</label>
                    <Select>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-700 text-white">
                        <SelectItem value="upfront">Upfront</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-300 block mb-1">Settlement Currency</label>
                    <Select>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-700 text-white">
                        <SelectItem value="eth">ETH</SelectItem>
                        <SelectItem value="usdc">USDC</SelectItem>
                        <SelectItem value="dai">DAI</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300 block mb-1">Credit Events to Cover</label>
                <div className="grid grid-cols-2 gap-3 bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center">
                    <input type="checkbox" id="bankruptcy" className="h-4 w-4 text-blue-600 rounded" defaultChecked />
                    <label htmlFor="bankruptcy" className="ml-2 text-white">
                      Bankruptcy
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="failure" className="h-4 w-4 text-blue-600 rounded" defaultChecked />
                    <label htmlFor="failure" className="ml-2 text-white">
                      Failure to Pay
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="restructuring"
                      className="h-4 w-4 text-blue-600 rounded"
                      defaultChecked
                    />
                    <label htmlFor="restructuring" className="ml-2 text-white">
                      Restructuring
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="default" className="h-4 w-4 text-blue-600 rounded" defaultChecked />
                    <label htmlFor="default" className="ml-2 text-white">
                      Obligation Default
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="repudiation" className="h-4 w-4 text-blue-600 rounded" defaultChecked />
                    <label htmlFor="repudiation" className="ml-2 text-white">
                      Repudiation/Moratorium
                    </label>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4">
                <h4 className="font-medium text-white mb-2">Estimated Premium</h4>
                <div className="text-2xl font-bold text-white mb-2">0.30 ETH</div>
                <p className="text-gray-300 text-sm">
                  This is an estimate based on the parameters you've selected. The final premium may vary based on risk
                  assessment.
                </p>
              </div>
            </div>
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
              Cancel
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Create Contract</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

