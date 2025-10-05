import { Header } from "@/components/header"
import { StatCard } from "@/components/stat-card"
import { Button } from "@/components/ui/button"
import { FilterSection } from "@/components/filter-section"
import { LoanDisbursementChart } from "@/components/charts/loan-disbursement-chart"
import { LoanStatusChart } from "@/components/charts/loan-status-chart"
import { RepaymentPerformanceChart } from "@/components/charts/repayment-performance-chart"
import { LoansTable } from "@/components/loans-table"

export default function ReportsPage() {
  const statsData = [
    {
      title: "Total Disbursed Loans",
      value: "R 1,240,000",
      trend: "vs last week +10.01%",
      isPositive: true,
    },
    {
      title: "Total Repaid",
      value: "R 985,000",
      trend: "vs last week +10.01%",
      isPositive: true,
    },
    {
      title: "Outstanding Balance",
      value: "R 255,000",
      trend: "vs last week +10.01%",
      isPositive: true,
    },
    {
      title: "Active Customers",
      value: "325",
      trend: "vs last week +10.01%",
      isPositive: true,
    },
  ]

  const loansData = [
    {
      id: "01",
      clientName: "Jean Marie M.",
      demandDate: "Apr 30, 2025",
      dueDate: "Apr 28, 2029",
      loanType: "House",
      amount: "R 300,00",
      status: "Pending" as const,
    },
    {
      id: "02",
      clientName: "Florian Jr Nke.",
      demandDate: "May 21, 2023",
      dueDate: "May 21, 2026",
      loanType: "School Fees",
      amount: "R 420,00",
      status: "Approved" as const,
    },
  ]

  return (
    <div className="min-h-screen">
      <Header
        title="Reports"
        actions={
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              Export PDF
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Export CSV
            </Button>
          </div>
        }
      />

      <div className="p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsData.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Loans
          </Button>
          <Button size="sm" variant="ghost">
            Customers
          </Button>
        </div>

        {/* Filter Section */}
        <FilterSection />

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LoanDisbursementChart />
          <LoanStatusChart />
        </div>

        <div>
          <RepaymentPerformanceChart />
        </div>

        {/* Loans Table */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Today's Loans Overview</h2>
          <LoansTable data={loansData} showDueDate />
        </div>
      </div>
    </div>
  )
}
