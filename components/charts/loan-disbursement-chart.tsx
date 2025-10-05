"use client"

import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", value: 15000 },
  { month: "Feb", value: 18000 },
  { month: "Mar", value: 22000 },
  { month: "Apr", value: 28000 },
  { month: "May", value: 26000 },
  { month: "Jun", value: 24000 },
  { month: "Jul", value: 25000 },
]

export function LoanDisbursementChart() {
  return (
    <Card className="p-6 bg-chart-bg border-none">
      <h3 className="font-semibold mb-6">Loan Disbursement</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} tickLine={false} />
          <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} tickFormatter={(value) => `${value / 1000}K`} />
          <Line type="monotone" dataKey="value" stroke="#65b947" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}
