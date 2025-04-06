"use client"

import { ArrowLeft, ChevronDown, Filter, Search, Shield, Wallet } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UserContracts() {
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
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold tracking-tight font-blauer">SIPRIFI</span>
            </Link>
          </div>
          <div className="hidden md:flex flex-1 items-center justify-center px-2">
            <form className="w-full max-w-sm lg:max-w-lg">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search contracts..."
                  className="w-full bg-gray-900 border-gray-800 pl-8 text-white placeholder:text-gray-500 focus:border-blue-500"
                />
              </div>
            </form>
          </div>
          <div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white border border-blue-500 rounded-full px-6 font-blauer">
              <Wallet className="mr-2 h-4 w-4" />
              0x7a2b...9f4e
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-6">
        <div className="container">
          <div className="flex flex-col gap-2 mb-8">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold tracking-tight font-blauer">User Contracts</h1>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white border border-blue-500 rounded-full px-6 font-blauer">
                Create New Contract
              </Button>
            </div>
            <p className="text-gray-400">
              Browse and manage Credit Default Swap contracts created by users on the SIPRIFI platform.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters Sidebar */}
            <div className="w-full md:w-64 space-y-4">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-blauer flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Status</label>
                    <Select>
                      <SelectTrigger className="bg-gray-900 border-gray-800 text-white">
                        <SelectValue placeholder="All Statuses" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-800 text-white">
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="expired">Expired</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Notional Value</label>
                    <Select>
                      <SelectTrigger className="bg-gray-900 border-gray-800 text-white">
                        <SelectValue placeholder="Any Amount" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-800 text-white">
                        <SelectItem value="any">Any Amount</SelectItem>
                        <SelectItem value="0-100k">$0 - $100,000</SelectItem>
                        <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                        <SelectItem value="500k+">$500,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Expiry Date</label>
                    <Select>
                      <SelectTrigger className="bg-gray-900 border-gray-800 text-white">
                        <SelectValue placeholder="Any Date" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-800 text-white">
                        <SelectItem value="any">Any Date</SelectItem>
                        <SelectItem value="3m">Next 3 Months</SelectItem>
                        <SelectItem value="6m">Next 6 Months</SelectItem>
                        <SelectItem value="1y">Next Year</SelectItem>
                        <SelectItem value="1y+">Beyond 1 Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="pt-2">
                    <Button
                      variant="outline"
                      className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      Reset Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-blauer">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Contracts</span>
                    <span className="font-medium">247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Active Contracts</span>
                    <span className="font-medium">183</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Value</span>
                    <span className="font-medium">$24.7M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Avg. Premium</span>
                    <span className="font-medium">85 bps</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="bg-gray-900 border border-gray-800 p-1 rounded-lg">
                  <TabsTrigger
                    value="all"
                    className="font-blauer data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    All Contracts
                  </TabsTrigger>
                  <TabsTrigger
                    value="active"
                    className="font-blauer data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Active
                  </TabsTrigger>
                  <TabsTrigger
                    value="pending"
                    className="font-blauer data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Pending
                  </TabsTrigger>
                  <TabsTrigger
                    value="expired"
                    className="font-blauer data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Expired
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <Link href={`/contract-detail`} key={i}>
                        <Card className="bg-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-300 overflow-hidden group h-full">
                          <CardHeader className="pb-2 border-b border-gray-800">
                            <div className="flex justify-between items-center">
                              <CardTitle className="font-blauer text-white">CDS-{1000 + i}</CardTitle>
                              <span
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                  i % 3 === 0
                                    ? "bg-gray-800 text-gray-300"
                                    : i % 3 === 1
                                      ? "bg-green-900/30 text-green-400"
                                      : "bg-yellow-900/30 text-yellow-400"
                                }`}
                              >
                                {i % 3 === 0 ? "Expired" : i % 3 === 1 ? "Active" : "Pending"}
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
                              <ArrowLeft className="ml-2 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </CardFooter>
                        </Card>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-center">
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" className="h-8 w-8 p-0 border-gray-800">
                        <span className="sr-only">Go to previous page</span>
                        <ChevronDown className="h-4 w-4 rotate-90" />
                      </Button>
                      <Button variant="outline" className="h-8 w-8 p-0 bg-blue-600 border-blue-500 text-white">
                        1
                      </Button>
                      <Button variant="outline" className="h-8 w-8 p-0 border-gray-800">
                        2
                      </Button>
                      <Button variant="outline" className="h-8 w-8 p-0 border-gray-800">
                        3
                      </Button>
                      <Button variant="outline" className="h-8 w-8 p-0 border-gray-800">
                        <span className="sr-only">Go to next page</span>
                        <ChevronDown className="h-4 w-4 -rotate-90" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="active" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[1, 4].map((i) => (
                      <Link href={`/contract-detail`} key={i}>
                        <Card className="bg-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-300 overflow-hidden group h-full">
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
                              <ArrowLeft className="ml-2 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </CardFooter>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </TabsContent>

                {/* Other tab contents would follow the same pattern */}
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-950 border-t border-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-400" />
              <span className="text-lg font-bold tracking-tight font-blauer">SIPRIFI</span>
            </div>
            <p className="text-sm text-gray-500">© 2025 SIPRIFI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

