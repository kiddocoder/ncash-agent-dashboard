"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { StatCard } from "@/components/stat-card"
import { Eye, Plus } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const budgetData = [
  { month: "Jan", usage: 15000, target: 10000 },
  { month: "Feb", usage: 18000, target: 12000 },
  { month: "Mar", usage: 22000, target: 15000 },
  { month: "Apr", usage: 28000, target: 18000 },
  { month: "Apr", usage: 25000, target: 20000 },
  { month: "May", usage: 26000, target: 22000 },
  { month: "Jun", usage: 27000, target: 25000 },
]

const topUpsHistory = [
  { id: "01", type: "Top-up", amount: "R 12,475,000", date: "08/10/2023" },
  { id: "01", type: "Top-up", amount: "R 12,475,000", date: "08/10/2023" },
  { id: "01", type: "Top-up", amount: "R 12,475,000", date: "08/10/2023" },
]

export default function BudgetSettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header
        actions={
          <div className="flex gap-3">
            <Button variant="outline" className="text-primary border-primary hover:bg-primary/10 bg-transparent">
              Set Budget Alert
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Request a top-up
            </Button>
          </div>
        }
      />

      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Budget Settings</h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <StatCard title="Budget" value="R 120,758,700.00" trend="+10.01%" trendLabel="vs last week" />
          <StatCard title="Used Budget" value="R 60,758,700.00" trend="+10.01%" trendLabel="vs last week" />
          <StatCard title="Remaining Budget" value="R 60,000,000.00" trend="+10.01%" trendLabel="vs last week" />
        </div>

        {/* Budget Usage Chart */}
        <div className="bg-chart-bg rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Budget Usage</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={budgetData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" tickFormatter={(value) => `${value / 1000}K`} />
              <Line type="monotone" dataKey="usage" stroke="#65b947" strokeWidth={2} dot={false} />
              <Line
                type="monotone"
                dataKey="target"
                stroke="#9ca3af"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top-ups History Table */}
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Top-ups History</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-table-header">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">#</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Type</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Request Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {topUpsHistory.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-table-row"}>
                    <td className="px-6 py-4 text-sm">{item.id}</td>
                    <td className="px-6 py-4 text-sm">{item.type}</td>
                    <td className="px-6 py-4 text-sm font-medium">{item.amount}</td>
                    <td className="px-6 py-4 text-sm">{item.date}</td>
                    <td className="px-6 py-4">
                      <button className="text-primary hover:text-primary/80">
                        <Eye className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center gap-2 p-4 border-t">
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
    </div>
  )
}
