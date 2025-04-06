import { ArrowLeft, Calendar, Clock, Download, FileText, Info, Lock, Shield, Users } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ContractDetail() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/dashboard" className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
              <span className="font-medium">Back to Dashboard</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700">
              <Lock className="h-4 w-4" />
              Secure Contract
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="grid gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold tracking-tight">Contract CDS-1001</h1>
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                Active
              </span>
              <span>Created on April 1, 2025</span>
              <span>•</span>
              <span>Expires on December 31, 2026</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2 border-blue-100 dark:border-blue-900/50">
              <CardHeader>
                <CardTitle>Contract Details</CardTitle>
                <CardDescription>Credit Default Swap contract details and terms</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Reference Entity</div>
                    <div className="font-medium">Company A Corporation</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Notional Value</div>
                    <div className="font-medium">$125,000</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Premium</div>
                    <div className="font-medium">100 bps (1.00%)</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Payment Frequency</div>
                    <div className="font-medium">Quarterly</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Counterparty</div>
                    <div className="font-medium">Global Investments Ltd.</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Contract Type</div>
                    <div className="font-medium">CDSC (On-Chain)</div>
                  </div>
                </div>

                <div className="rounded-md border p-4">
                  <div className="mb-2 font-medium">Contract Timeline</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Contract Start</span>
                      <span>Contract End</span>
                    </div>
                    <Progress value={33} className="h-2 w-full bg-gray-200 dark:bg-gray-700" />
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>Apr 1, 2025</span>
                      <span>Dec 31, 2026</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-2 font-medium">Credit Events</div>
                  <div className="rounded-md border p-4 text-sm">
                    <ul className="list-inside list-disc space-y-1">
                      <li>Bankruptcy</li>
                      <li>Failure to Pay</li>
                      <li>Restructuring</li>
                      <li>Obligation Default</li>
                      <li>Repudiation/Moratorium</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" />
                  View Full Contract
                </Button>
                <Button variant="outline" className="gap-2">
                  <Info className="h-4 w-4" />
                  Contract History
                </Button>
              </CardFooter>
            </Card>

            <div className="space-y-6">
              <Card className="border-blue-100 dark:border-blue-900/50">
                <CardHeader>
                  <CardTitle>Blockchain Security</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-green-100 p-2 dark:bg-green-900/30">
                      <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Smart Contract Verified</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Apr 1, 2025</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-green-100 p-2 dark:bg-green-900/30">
                      <Lock className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Multi-sig Protection</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">2-of-3 signatures</div>
                    </div>
                  </div>
                  <div className="text-xs font-medium text-blue-600">
                    <Link href="#">View on Blockchain Explorer</Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100 dark:border-blue-900/50">
                <CardHeader>
                  <CardTitle>Payment Schedule</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <div>
                        <div className="text-sm font-medium">Q2 2025</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Jun 30, 2025</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      Paid
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <div>
                        <div className="text-sm font-medium">Q3 2025</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Sep 30, 2025</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                      Upcoming
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <div>
                        <div className="text-sm font-medium">Q4 2025</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Dec 31, 2025</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-400">
                      Pending
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Clock className="h-4 w-4" />
                    View All Payments
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          <Tabs defaultValue="activity" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:w-auto">
              <TabsTrigger value="activity">Activity Log</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="parties">Parties</TabsTrigger>
            </TabsList>
            <TabsContent value="activity" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Contract Activity</CardTitle>
                  <CardDescription>Recent activity and changes to this contract</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex gap-4 border-b pb-4 last:border-0 last:pb-0">
                        <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900/30">
                          {i === 1 ? (
                            <Lock className="h-4 w-4 text-blue-600" />
                          ) : i === 2 ? (
                            <FileText className="h-4 w-4 text-blue-600" />
                          ) : i === 3 ? (
                            <Users className="h-4 w-4 text-blue-600" />
                          ) : i === 4 ? (
                            <Calendar className="h-4 w-4 text-blue-600" />
                          ) : (
                            <Shield className="h-4 w-4 text-blue-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">
                            {i === 1
                              ? "Contract secured with multi-signature"
                              : i === 2
                                ? "Payment schedule updated"
                                : i === 3
                                  ? "Counterparty information verified"
                                  : i === 4
                                    ? "Quarterly payment processed"
                                    : "Smart contract audited and verified"}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {`April ${i}, 2025 at ${10 + i}:${i * 10}${i * 10 < 10 ? "0" : ""} ${i < 3 ? "AM" : "PM"}`}
                          </div>
                          <div className="mt-1 text-sm">
                            {i === 1
                              ? "Contract now requires 2-of-3 signatures for any modifications."
                              : i === 2
                                ? "Payment schedule adjusted to quarterly intervals."
                                : i === 3
                                  ? "Global Investments Ltd. identity verified through KYC process."
                                  : i === 4
                                    ? "Q2 2025 payment of $312.50 successfully processed."
                                    : "Smart contract code verified by ChainSecurity."}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Complete History
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="documents" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Contract Documents</CardTitle>
                  <CardDescription>All documents related to this contract</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-md border">
                      <div className="grid grid-cols-4 gap-4 p-4 font-medium">
                        <div>Document Name</div>
                        <div>Type</div>
                        <div>Date Added</div>
                        <div>Actions</div>
                      </div>
                      <div className="divide-y">
                        {[
                          "Master Agreement",
                          "Term Sheet",
                          "Credit Event Definitions",
                          "Payment Schedule",
                          "Risk Assessment",
                        ].map((doc, i) => (
                          <div key={i} className="grid grid-cols-4 gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <div className="font-medium text-blue-600">{doc}</div>
                            <div>
                              {i === 0 || i === 1 ? "Legal" : i === 2 ? "Reference" : i === 3 ? "Schedule" : "Analysis"}
                            </div>
                            <div>Apr {i + 1}, 2025</div>
                            <div>
                              <Button variant="ghost" size="sm" className="h-8 gap-1">
                                <Download className="h-4 w-4" />
                                Download
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="parties" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Contract Parties</CardTitle>
                  <CardDescription>All parties involved in this contract</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="rounded-md border p-4">
                      <div className="mb-2 font-medium">Protection Buyer</div>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Entity Name</div>
                          <div>SIPRIFI Holdings</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Wallet Address</div>
                          <div className="truncate">0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Contact</div>
                          <div>John Doe (john@siprifi.com)</div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-md border p-4">
                      <div className="mb-2 font-medium">Protection Seller</div>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Entity Name</div>
                          <div>Global Investments Ltd.</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Wallet Address</div>
                          <div className="truncate">0x9s8r7q6p5o4n3m2l1k0j9i8h7g6f5e4d3c2b1a</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Contact</div>
                          <div>Jane Smith (jane@globalinvest.com)</div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-md border p-4">
                      <div className="mb-2 font-medium">Reference Entity</div>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Entity Name</div>
                          <div>Company A Corporation</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Credit Rating</div>
                          <div>BBB+ (S&P)</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Industry</div>
                          <div>Technology</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

