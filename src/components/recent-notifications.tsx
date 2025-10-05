import { Bell, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"

export function RecentNotifications() {
  const notifications = [
    {
      title: "New Loan Request",
      description: "New loan request from John Mokoena (R 5,000). Awaiting review.",
      time: "08:00",
    },
    {
      title: "New Application",
      description: "Customer Thandi Ndlovu just submitted a loan application — pending your action.",
      time: "08:00",
    },
  ]

  return (
    <Card className="p-5 bg-card-bg shadow-none border-none h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Recent Notification</h3>
        <button className="flex gap-1 items-center text-sm text-primary hover:underline">View more <ChevronRight className="w-4 h-4" /></button>
      </div>

      <div className="space-y-3">
        {notifications.map((notification, index) => (
          <div key={index} className="bg-notification-bg p-4 rounded-lg space-y-2">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-2">
                <Bell className="w-4 h-4 text-yellow-500 mt-0.5" />
                <h4 className="font-medium text-sm">{notification.title}</h4>
              </div>
              <span className="text-xs text-muted-foreground">{notification.time}</span>
            </div>
            <p className="text-sm text-muted-foreground pl-6">{notification.description}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}
