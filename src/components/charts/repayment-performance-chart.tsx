"use client"

import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts"

const data = [
  { month: "Jan", onTime: 5, late: 2, missed: 1 },
  { month: "Feb", onTime: 6, late: 3, missed: 2 },
  { month: "Mar", onTime: 4, late: 2, missed: 1 },
  { month: "Apr", onTime: 7, late: 4, missed: 1 },
  { month: "May", onTime: 6, late: 3, missed: 2 },
  { month: "Jun", onTime: 5, late: 4, missed: 1 },
  { month: "Jul", onTime: 8, late: 2, missed: 1 },
  { month: "Aug", onTime: 7, late: 3, missed: 2 },
  { month: "Sep", onTime: 9, late: 2, missed: 1 },
  { month: "Oct", onTime: 8, late: 4, missed: 2 },
]

export function RepaymentPerformanceChart() {
  return (
    <Card className="p-6 bg-chart-bg border-none shadow-none">
      <h3 className="font-semibold mb-6">Repayments Performance</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} tickLine={false} />
          <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} label={{ value: "%", angle: 0, position: "top" }} />
          <Legend
            iconType="circle"
            formatter={(value) => {
              const labels: Record<string, string> = {
                onTime: "On Time",
                late: "Late",
                missed: "Missed",
              }
              return labels[value] || value
            }}
          />
          <Bar dataKey="onTime" fill="#65b947" radius={[4, 4, 0, 0]} />
          <Bar dataKey="late" fill="#f59e0b" radius={[4, 4, 0, 0]} />
          <Bar dataKey="missed" fill="#ef4444" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}
