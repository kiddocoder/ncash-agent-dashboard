import { TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

interface StatCardProps {
  title: string
  value: string
  trend: string
  isPositive?: boolean
}

export function StatCard({ title, value, trend, isPositive = true }: StatCardProps) {
  return (
    <Card className="p-5 bg-card-bg border-none">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">{title}</p>
        <div className="flex items-end justify-between">
          <h3 className="text-2xl font-bold">{value}</h3>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <span>{trend}</span>
            <TrendingUp className="w-3 h-3" />
          </div>
        </div>
      </div>
    </Card>
  )
}
