import { Header } from "@/components/header"
import { StatCard } from "@/components/stat-card"
import { Button } from "@/components/ui/button"
import { ApprovalRateChart } from "@/components/charts/approval-rate-chart"
import { RecentNotifications } from "@/components/recent-notifications"
import { LoansTable } from "@/components/loans-table"
import { Plus } from "lucide-react"

export default function Page() {
  const statsData = [
    {
      title: "budget",
      value: "R 1,240,000",
      trend: "vs last week +10.01%",
      isPositive: true,
    },
    {
      title: "Today's Loan Requests",
      value: "8",
      trend: "vs last week +10.01%",
      isPositive: true,
    },
    {
      title: "Today's Approvals",
      value: "122",
      trend: "vs last week +10.01%",
      isPositive: true,
    },
    {
      title: "Today's Declines",
      value: "3",
      trend: "vs last week +10.01%",
      isPositive: true,
    },
  ]

  const loansData = [
    {
      id: "01",
      clientName: "Jean Marie M.",
      demandDate: "Apr 30, 2025",
      loanType: "House",
      amount: "R 300,00",
      status: "Pending" as const,
    },
    {
      id: "02",
      clientName: "Florian Jr Nke.",
      demandDate: "May 21, 2023",
      loanType: "School Fees",
      amount: "R 420,00",
      status: "Approved" as const,
    },
    {
      id: "03",
      clientName: "Bon Tertius T.",
      demandDate: "Apr 14, 2025",
      loanType: "Car",
      amount: "R 133,00",
      status: "Approved" as const,
    },
  ]

  return (
    <div className="min-h-screen">
      <Header
        actions={
          <div className="flex gap-3">
            <Button size="sm" variant="outline" className="text-primary border-primary bg-transparent">
              <Plus className="w-4 h-4 mr-2" />
              New Loan
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Create New Customer
            </Button>
          </div>
        }
      />

      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Overview</h2>

        <div className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {statsData.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          {/* Chart and Notifications */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ApprovalRateChart />
            </div>
            <div>
              <RecentNotifications />
            </div>
          </div>

          {/* Loans Table */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Today's Loans Overview</h2>
            <LoansTable data={loansData} />
          </div>
        </div>
      </div>
    </div>
  )
}
