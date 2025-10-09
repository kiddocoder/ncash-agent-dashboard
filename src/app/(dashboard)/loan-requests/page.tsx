"use client"
import { StatCard } from "@/components/stat-card"
import { Button } from "@/components/ui/button"
import { FilterSection } from "@/components/filter-section"
import { LoansTable } from "@/components/loans-table"
import { Plus, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { NewLoanForm } from "@/components/forms/new-loan-form"
import { useState } from "react"

export default function LoanRequestsPage() {
  const statsData = [
    {
      title: "Total Loans Amount",
      value: "R 120,758,700.00",
      trend: "vs last week +10.01%",
      isPositive: true,
    },
    {
      title: "Total Loans",
      value: "62",
      trend: "vs last week +10.01%",
      isPositive: true,
    },
    {
      title: "Remaining Loans Amount",
      value: "R 42,845,00.00",
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
  const [newLoank, setNewLoan] = useState(false)

  return (
    <div className="p-6">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold mb-6">Schedule</h2>
        <div className="flex gap-3">
          <Button
            onClick={() => setNewLoan(true)}
            size="sm" className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Create New Loan
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {statsData.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Search and Filter */}
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search a customer, loan ID" className="pl-10" />
          </div>
          <Button size="default" className="bg-primary hover:bg-primary/90">
            Filter
          </Button>
        </div>

        {/* Filter Section */}
        <FilterSection />

        {/* Loans Table */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Today's Loans Overview</h2>
          <LoansTable data={loansData} showDueDate />
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center p-4 ">
          <div className="flex justify-center rounded-full border border-border gap-2 p-2 ">
            <Button size="sm" className="w-8 h-8 rounded-full bg-primary text-white">
              1
            </Button>
            <Button size="sm" variant="ghost" className="w-8 h-8 rounded-full">
              2
            </Button>
            <Button size="sm" variant="ghost" className="w-8 h-8 rounded-full">
              3
            </Button>
            <Button size="sm" variant="ghost" className="w-8 h-8 rounded-full">
              4
            </Button>
          </div>
        </div>

      </div>
      <NewLoanForm open={newLoank} onOpenChange={() => setNewLoan(false)} />
    </div>
  )
}
