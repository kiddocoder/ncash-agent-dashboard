import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StatCard } from "@/components/stat-card"
import { Eye, Filter, Search } from "lucide-react"

export default function BlacklistPage() {
    const blacklistData = [
        {
            id: "01",
            customerName: "Jean Marie M.",
            demandDate: "Apr 30, 2025",
            dueDate: "Apr 28, 2029",
            loanType: "House",
            amount: "R 300,00",
            status: "Pending",
        },
        {
            id: "02",
            customerName: "Florian Jr Nke.",
            demandDate: "May 21, 2023",
            dueDate: "May 21, 2026",
            loanType: "School Fees",
            amount: "R 420,00",
            status: "Approved",
        },
    ]

    return (
        <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Blacklist & Checks</h1>
                <Button className="bg-primary hover:bg-primary/90">
                    <span className="mr-2">+</span>
                    New Blacklist
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard title="Total Blacklisted Customers" value="13" trend="vs last week +10.01%" />
                <StatCard title="Pending Customers(KYC)" value="8" trend="vs last week +10.01%" />
                <StatCard title="Created this month" value="122" trend="vs last week +10.01%" />
            </div>

            <div className="flex items-center gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search a customer" className="pl-10 bg-white" />
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                </Button>
            </div>

            <div className="bg-white rounded-lg border border-border overflow-hidden">
                <div className="p-4">
                    <h2 className="font-semibold mb-4">Today's Loans Overview</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-table-header">
                                    <th className="text-left p-3 font-semibold text-sm">#</th>
                                    <th className="text-left p-3 font-semibold text-sm">Customer Name</th>
                                    <th className="text-left p-3 font-semibold text-sm">Demand Date</th>
                                    <th className="text-left p-3 font-semibold text-sm">Due Date</th>
                                    <th className="text-left p-3 font-semibold text-sm">Loan Type</th>
                                    <th className="text-left p-3 font-semibold text-sm">Amount</th>
                                    <th className="text-left p-3 font-semibold text-sm">Amount</th>
                                    <th className="text-left p-3 font-semibold text-sm">Status</th>
                                    <th className="text-left p-3 font-semibold text-sm">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blacklistData.map((item, index) => (
                                    <tr key={item.id} className={index % 2 === 0 ? "bg-white" : "bg-table-row-alt"}>
                                        <td className="p-3 text-sm">{item.id}</td>
                                        <td className="p-3 text-sm">{item.customerName}</td>
                                        <td className="p-3 text-sm">{item.demandDate}</td>
                                        <td className="p-3 text-sm">{item.dueDate}</td>
                                        <td className="p-3 text-sm">{item.loanType}</td>
                                        <td className="p-3 text-sm">{item.amount}</td>
                                        <td className="p-3 text-sm">{item.amount}</td>
                                        <td className="p-3">
                                            <span
                                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.status === "Approved" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                                                    }`}
                                            >
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="p-3">
                                            <button className="text-primary hover:text-primary/80">
                                                <Eye className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-2 p-4 border-t border-border">
                    <button className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">
                        1
                    </button>
                    <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-sm font-medium">
                        2
                    </button>
                    <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-sm font-medium">
                        3
                    </button>
                    <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-sm font-medium">
                        4
                    </button>
                </div>
            </div>
        </div>
    )
}
