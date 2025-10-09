"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { StatCard } from "@/components/stat-card"
import { Eye, Filter, Search } from "lucide-react"
import { useRouter } from "next/navigation"
import CustomersTable from "@/components/tables/CustomersTable"

export default function CustomerManagementPage() {
    const [showFilters, setShowFilters] = useState(false)
    const router = useRouter()

    // const customerData = [
    //     {
    //         id: "01",
    //         name: "Jean Marie M.",
    //         phone: "+27 71 423 9581",
    //         email: "mashaba.lerato92@gmail.com",
    //         totalLoans: 12,
    //         totalAmount: "R 300,00",
    //         status: "active",
    //     },
    //     {
    //         id: "02",
    //         name: "Florian Jr Nke.",
    //         phone: "+27 72 806 3147",
    //         email: "thabo.mokoena87@yahoo.com",
    //         totalLoans: 10,
    //         totalAmount: "R 420,00",
    //         status: "offline",
    //     },
    //     {
    //         id: "03",
    //         name: "Bon Tertius T.",
    //         phone: "+27 73 159 6402",
    //         email: "sibongile.ndlovu24@gmail.com",
    //         totalLoans: 9,
    //         totalAmount: "R 133,00",
    //         status: "active",
    //     },
    //     {
    //         id: "04",
    //         name: "Lerato M.",
    //         phone: "+27 71 423 9581",
    //         email: "mashaba.lerato92@gmail.com",
    //         totalLoans: 12,
    //         totalAmount: "R 300,00",
    //         status: "active",
    //     },
    //     {
    //         id: "05",
    //         name: "Thabo M.",
    //         phone: "+27 72 806 3147",
    //         email: "thabo.mokoena87@yahoo.com",
    //         totalLoans: 10,
    //         totalAmount: "R 420,00",
    //         status: "offline",
    //     },
    // ]

    return (
        <div className="space-y-6 p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Customer Management</h1>
                <Button className="bg-primary hover:bg-primary/90">
                    <span className="mr-2">+</span>
                    Create New Customer
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard title="Created Today" value="13" trend="vs last week +10.01%" />
                <StatCard title="Created this week" value="8" trend="vs last week +10.01%" />
                <StatCard title="Active Customers" value="122" trend="vs last week +10.01%" />
            </div>

            <div className="flex items-center gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search a customer" className="pl-10 bg-white" />
                </div>
                <Button className="bg-primary hover:bg-primary/90" onClick={() => setShowFilters(!showFilters)}>
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                </Button>
            </div>

            {showFilters && (
                <div className="bg-white border border-border rounded-lg p-6">
                    <h3 className="font-semibold mb-4">Filter</h3>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label className="text-sm font-medium mb-2 block">Customer Status</label>
                                <Select defaultValue="active">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="active">Active</SelectItem>
                                        <SelectItem value="inactive">Inactive</SelectItem>
                                        <SelectItem value="pending">Pending</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <label className="text-sm font-medium mb-2 block">Account Type</label>
                                <Select defaultValue="foreigner">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="foreigner">Foreigner</SelectItem>
                                        <SelectItem value="local">Local</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <label className="text-sm font-medium mb-2 block">From</label>
                                <Input type="text" placeholder="YYYY-MM-DD" />
                            </div>

                            <div>
                                <label className="text-sm font-medium mb-2 block">To</label>
                                <Input type="text" placeholder="YYYY-MM-DD" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label className="text-sm font-medium mb-2 block">Min Amount</label>
                                <Input type="number" placeholder="0.00" />
                            </div>

                            <div>
                                <label className="text-sm font-medium mb-2 block">Max Amount</label>
                                <Input type="number" placeholder="0.00" />
                            </div>

                            <div>
                                <label className="text-sm font-medium mb-2 block">Min Loans</label>
                                <Input type="number" placeholder="0.00" />
                            </div>

                            <div>
                                <label className="text-sm font-medium mb-2 block">Max Loans</label>
                                <Input type="number" placeholder="0.00" />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <CustomersTable title="All Customers" />
        </div>
    )
}
