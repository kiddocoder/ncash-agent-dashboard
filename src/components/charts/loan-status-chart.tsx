"use client"

import { Card } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"

const data = [
  { name: "Approved Loans", value: 56, color: "#65b947" },
  { name: "Pending Loans", value: 28, color: "#f59e0b" },
  { name: "Declined Loans", value: 16, color: "#ef4444" },
]

export function LoanStatusChart() {
  return (
    <Card className="p-6 bg-chart-bg border-none shadow-none">
      <h3 className="font-semibold mb-6">Loan Status Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend
            verticalAlign="middle"
            align="right"
            layout="vertical"
            iconType="circle"
            formatter={(value, entry: any) => (
              <span className="text-sm">
                {value} <span className="text-muted-foreground">({entry.payload.value}%)</span>
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  )
}
