"use client";

import { StatCard } from "@/components/stat-card"
import { ApprovalRateChart } from "@/components/charts/approval-rate-chart"
import { RecentNotifications } from "@/components/recent-notifications"
import { LoansTable } from "@/components/loans-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useState } from "react"
import CustomerStep1 from "@/components/forms/customers/CustomerStep1";
import ResidentChoice from "@/components/forms/customers/ResidentChoice";

export default function Page() {
  const statsData = [
    {
      title: "Budget",
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

  const [addCustomerModalOpen, setAddCustomerModalOpen] = useState(true);

  return (

    <div className="p-6">
      {/* Overview Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium text-[#0a1106]">Overview</h2>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="bg-white border-[#65b947] text-[#65b947] hover:bg-[#65b947] hover:text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Loan
          </Button>
          <Button
            onClick={() => {
              setAddCustomerModalOpen(true)
            }}
            className="bg-[#65b947] hover:bg-[#65b947]/90 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Create New Customer
          </Button>
        </div>
      </div>

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
      {/* <CustomerStep1 open={addCustomerModalOpen} onClose={() => setAddCustomerModalOpen(false)} /> */}
      <ResidentChoice open={addCustomerModalOpen} onClose={() => setAddCustomerModalOpen(false)} />
    </div>
  )
}
