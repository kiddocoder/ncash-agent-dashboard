"use client"

import { Card } from "@/src/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const data = [
  { time: "08:00", value: 10000 },
  { time: "09:00", value: 15000 },
  { time: "10:00", value: 18000 },
  { time: "11:00", value: 22000 },
  { time: "12:00", value: 28000 },
  { time: "13:00", value: 25000 },
  { time: "14:00", value: 23000 },
  { time: "15:00", value: 26000 },
]

export function ApprovalRateChart() {
  return (
    <Card className="p-6 bg-chart-bg border-none">
      <h3 className="font-semibold mb-6">Today's Approval Rate</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="time" stroke="#9ca3af" fontSize={12} tickLine={false} />
          <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} tickFormatter={(value) => `${value / 1000}K`} />
          <Line type="monotone" dataKey="value" stroke="#65b947" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}
