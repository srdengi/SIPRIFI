import {
  Bell,
  ChevronDown,
  CreditCard,
  FileText,
  Home,
  Lock,
  Menu,
  PieChart,
  Search,
  Settings,
  Shield,
  Users,
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <span>SIPRIFI</span>
                  </Link>
                  <Link href="#" className="flex items-center gap-3 text-muted-foreground">
                    <Home className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link href="#" className="flex items-center gap-3 text-muted-foreground">
                    <CreditCard className="h-5 w-5" />
                    Contracts
                  </Link>
                  <Link href="#" className="flex items-center gap-3 text-muted-foreground">
                    <FileText className="h-5 w-5" />
                    Transactions
                  </Link>
                  <Link href="#" className="flex items-center gap-3 text-muted-foreground">
                    <Users className="h-5 w-5" />
                    Counterparties
                  </Link>
                  <Link href="#" className="flex items-center gap-3 text-muted-foreground">
                    <PieChart className="h-5 w-5" />
                    Analytics
                  </Link>
                  <Link href="#" className="flex items-center gap-3 text-muted-foreground">
                    <Settings className="h-5 w-5" />
                    Settings
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
              <Shield className="h-6 w-6 text-blue-600" />
              <span className="hidden md:inline">SIPRIFI</span>
            </Link>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:gap-4">
            <form className="flex-1 md:max-w-sm lg:max-w-lg">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search contracts..."
                  className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
                />
              </div>
            </form>
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" className="gap-2">
              <span className="hidden lg:inline-flex">John Doe</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-gray-50 dark:bg-gray-900 md:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <nav className="grid gap-1 px-2 text-sm font-medium">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-blue-600 transition-all dark:bg-gray-800"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-blue-600 dark:text-gray-400"
              >
                <CreditCard className="h-4 w-4" />
                Contracts
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-blue-600 dark:text-gray-400"
              >
                <FileText className="h-4 w-4" />
                Transactions
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-blue-600 dark:text-gray-400"
              >
                <Users className="h-4 w-4" />
                Counterparties
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-blue-600 dark:text-gray-400"
              >
                <PieChart className="h-4 w-4" />
                Analytics
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-blue-600 dark:text-gray-400"
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
        </aside>
        <main className="flex-1 p-4 md:p-6">
          <div className="grid gap-4 md:gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Welcome back, John. Here's an overview of your CDS portfolio.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-blue-100 dark:border-blue-900/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Contracts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-green-500">+2.5% from last month</p>
                </CardContent>
              </Card>
              <Card className="border-blue-100 dark:border-blue-900/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Active Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$1.2M</div>
                  <p className="text-xs text-green-500">+4.3% from last month</p>
                </CardContent>
              </Card>
              <Card className="border-blue-100 dark:border-blue-900/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Risk Exposure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Low</div>
                  <p className="text-xs text-blue-500">Diversified portfolio</p>
                </CardContent>
              </Card>
              <Card className="border-blue-100 dark:border-blue-900/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Profit/Loss</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+$45.2K</div>
                  <p className="text-xs text-green-500">+12.3% from last month</p>
                </CardContent>
              </Card>
            </div>
            <Tabs defaultValue="active" className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:w-auto">
                <TabsTrigger value="active">Active Contracts</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="expired">Expired</TabsTrigger>
              </TabsList>
              <TabsContent value="active" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Active CDS Contracts</CardTitle>
                    <CardDescription>
                      You have 12 active contracts. Click on a contract to view details.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border">
                      <div className="grid grid-cols-5 gap-4 p-4 font-medium">
                        <div>Contract ID</div>
                        <div>Reference Entity</div>
                        <div>Notional Value</div>
                        <div>Expiry Date</div>
                        <div>Status</div>
                      </div>
                      <div className="divide-y">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="grid grid-cols-5 gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <div className="font-medium text-blue-600">CDS-{1000 + i}</div>
                            <div>Company {String.fromCharCode(64 + i)}</div>
                            <div>${(100 + i * 25).toLocaleString()},000</div>
                            <div>Dec 31, 202{i + 3}</div>
                            <div>
                              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                Active
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Contracts
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="pending" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Pending CDS Contracts</CardTitle>
                    <CardDescription>You have 3 pending contracts awaiting confirmation.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border">
                      <div className="grid grid-cols-5 gap-4 p-4 font-medium">
                        <div>Contract ID</div>
                        <div>Reference Entity</div>
                        <div>Notional Value</div>
                        <div>Created Date</div>
                        <div>Status</div>
                      </div>
                      <div className="divide-y">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="grid grid-cols-5 gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <div className="font-medium text-blue-600">CDS-{2000 + i}</div>
                            <div>Company {String.fromCharCode(70 + i)}</div>
                            <div>${(50 + i * 25).toLocaleString()},000</div>
                            <div>Apr {i}, 2025</div>
                            <div>
                              <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                                Pending
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Pending
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="expired" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Expired CDS Contracts</CardTitle>
                    <CardDescription>You have 9 expired contracts in your history.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border">
                      <div className="grid grid-cols-5 gap-4 p-4 font-medium">
                        <div>Contract ID</div>
                        <div>Reference Entity</div>
                        <div>Notional Value</div>
                        <div>Expiry Date</div>
                        <div>Status</div>
                      </div>
                      <div className="divide-y">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="grid grid-cols-5 gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <div className="font-medium text-blue-600">CDS-{3000 + i}</div>
                            <div>Company {String.fromCharCode(75 + i)}</div>
                            <div>${(75 + i * 15).toLocaleString()},000</div>
                            <div>Jan {i * 5}, 2025</div>
                            <div>
                              <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-400">
                                Expired
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View History
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-blue-100 dark:border-blue-900/50">
                <CardHeader>
                  <CardTitle>Security Status</CardTitle>
                  <CardDescription>Your account and contracts are secured by blockchain.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-green-100 p-2 dark:bg-green-900/30">
                      <Lock className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <div className="font-medium">Two-Factor Authentication</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Enabled</div>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      Configure
                    </Button>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-green-100 p-2 dark:bg-green-900/30">
                      <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <div className="font-medium">Smart Contract Audit</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Verified</div>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      View Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-blue-100 dark:border-blue-900/50">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks you can perform</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <Button className="h-auto flex-col items-start gap-1 bg-blue-600 hover:bg-blue-700 p-4">
                    <CreditCard className="h-5 w-5" />
                    <div className="font-medium">New Contract</div>
                  </Button>
                  <Button className="h-auto flex-col items-start gap-1 bg-blue-600 hover:bg-blue-700 p-4">
                    <Users className="h-5 w-5" />
                    <div className="font-medium">Add Counterparty</div>
                  </Button>
                  <Button variant="outline" className="h-auto flex-col items-start gap-1 p-4">
                    <FileText className="h-5 w-5" />
                    <div className="font-medium">Generate Report</div>
                  </Button>
                  <Button variant="outline" className="h-auto flex-col items-start gap-1 p-4">
                    <PieChart className="h-5 w-5" />
                    <div className="font-medium">Risk Analysis</div>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

