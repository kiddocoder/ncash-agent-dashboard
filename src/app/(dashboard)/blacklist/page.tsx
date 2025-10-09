import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StatCard } from "@/components/stat-card"
import { Eye, Filter, Search } from "lucide-react"
import CustomersTable from "@/components/tables/CustomersTable"

export default function BlacklistPage() {

    // const blacklistData = [
    //     {
    //         id: "01",
    //         customerName: "Jean Marie M.",
    //         demandDate: "Apr 30, 2025",
    //         dueDate: "Apr 28, 2029",
    //         loanType: "House",
    //         amount: "R 300,00",
    //         status: "Pending",
    //     },
    //     {
    //         id: "02",
    //         customerName: "Florian Jr Nke.",
    //         demandDate: "May 21, 2023",
    //         dueDate: "May 21, 2026",
    //         loanType: "School Fees",
    //         amount: "R 420,00",
    //         status: "Approved",
    //     },
    // ]

    return (
        <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Blacklist & Checks</h1>
                {/* <Button className="bg-primary hover:bg-primary/90">
                    <span className="mr-2">+</span>
                    New Blacklist
                </Button> */}
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

            <CustomersTable title="All Blacklisted Customers" />
        </div>
    )
}
