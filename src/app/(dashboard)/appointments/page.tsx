"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight, Search, Plus } from "lucide-react"

const calendarEvents = [
  {
    id: 1,
    date: "2024-04-01",
    title: "5-Minute Workouts for Busy People",
    author: "Robert Fox",
    color: "bg-green-100",
  },
  {
    id: 2,
    date: "2024-04-04",
    title: "How to Start Exercising as a Beginner",
    author: "Annette Black",
    color: "bg-pink-100",
  },
  {
    id: 3,
    date: "2024-04-06",
    title: "Best Stretches to Improve Flexibility",
    author: "Dianne Russell",
    color: "bg-gray-100",
  },
  {
    id: 4,
    date: "2024-04-08",
    title: "Bodyweight Exercises You Can Do at Home",
    author: "Darrell Steward",
    color: "bg-yellow-100",
  },
  {
    id: 5,
    date: "2024-04-14",
    title: "How to Stay Motivated to Work Out",
    author: "Kristin Watson",
    color: "bg-pink-100",
  },
  { id: 6, date: "2024-04-18", title: "The Benefits of Walking Every Day", author: "Devon Lane", color: "bg-pink-100" },
  {
    id: 7,
    date: "2024-04-20",
    title: "Strength Training vs. Cardio: Which Is Better?",
    author: "Eleanor Pena",
    color: "bg-gray-100",
  },
  {
    id: 8,
    date: "2024-04-23",
    title: "Simple Exercises to Reduce Back Pain",
    author: "Jane Cooper",
    color: "bg-green-100",
  },
  {
    id: 9,
    date: "2024-04-26",
    title: "How to Create a Workout Routine That Works for You",
    author: "Wade Warren",
    color: "bg-pink-100",
  },
]

export default function AppointmentsPage() {
  const [currentMonth] = useState("September 2024")
  const [viewMode, setViewMode] = useState<"daily" | "weekly" | "monthly">("daily")

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"]
  const calendarDays = [
    { day: 30, month: "prev" },
    { day: 31, month: "prev" },
    { day: 1, month: "current", date: "2024-04-01" },
    { day: 2, month: "current" },
    { day: 3, month: "current" },
    { day: 4, month: "current", date: "2024-04-04" },
    { day: 5, month: "current" },
    { day: 6, month: "current", date: "2024-04-06" },
    { day: 7, month: "current" },
    { day: 8, month: "current", date: "2024-04-08" },
    { day: 9, month: "current" },
    { day: 10, month: "current" },
    { day: 11, month: "current" },
    { day: 12, month: "current" },
    { day: 13, month: "current" },
    { day: 14, month: "current", date: "2024-04-14" },
    { day: 15, month: "current" },
    { day: 16, month: "current" },
    { day: 17, month: "current" },
    { day: 18, month: "current", date: "2024-04-18" },
    { day: 19, month: "current" },
    { day: 20, month: "current", date: "2024-04-20" },
    { day: 21, month: "current" },
    { day: 22, month: "current" },
    { day: 23, month: "current", date: "2024-04-23" },
    { day: 24, month: "current" },
    { day: 25, month: "current" },
    { day: 26, month: "current", date: "2024-04-26" },
    { day: 27, month: "current" },
    { day: 28, month: "current" },
    { day: 30, month: "current" },
    { day: 31, month: "current" },
    { day: 1, month: "next", label: "May 1" },
    { day: 2, month: "next", label: "May 2" },
    { day: 29, month: "current" },
  ]

  const getEventsForDate = (date?: string) => {
    if (!date) return []
    return calendarEvents.filter((event) => event.date === date)
  }

  return (
    <div className="p-6">

      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold mb-6">Schedule</h2>
        <div className="flex gap-3">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <Plus className="w-4 h-4 mr-2" />
            New Schedule
          </Button>
        </div>
      </div>
      {/* Calendar Controls */}
      <div className="bg-white rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" className="text-sm bg-transparent">
              Today
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
            <span className="text-lg font-semibold">{currentMonth}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search a Schedule" className="pl-10 w-64" />
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "daily" ? "default" : "outline"}
                onClick={() => setViewMode("daily")}
                className={viewMode === "daily" ? "bg-primary text-white" : ""}
              >
                Daily
              </Button>
              <Button variant={viewMode === "weekly" ? "default" : "outline"} onClick={() => setViewMode("weekly")}>
                Weekly
              </Button>
              <Button variant={viewMode === "monthly" ? "default" : "outline"} onClick={() => setViewMode("monthly")}>
                Daily
              </Button>
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="border border-border rounded-lg overflow-hidden">
          {/* Days of Week Header */}
          <div className="grid grid-cols-7 bg-muted/30">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="p-3 text-center text-sm font-medium text-muted-foreground border-r border-border last:border-r-0"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7">
            {calendarDays.map((day, index) => {
              const events = getEventsForDate(day.date)
              const event = events[0]

              return (
                <div
                  key={index}
                  className={`min-h-[120px] p-3 border-r border-b border-border last:border-r-0 ${day.month !== "current" ? "bg-muted/10" : "bg-white"
                    } ${event ? event.color : ""}`}
                >
                  <div
                    className={`text-sm font-medium mb-2 ${day.month !== "current" ? "text-muted-foreground" : ""}`}
                  >
                    {day.label || (day.month === "current" ? `April ${day.day}` : day.day)}
                  </div>
                  {event && (
                    <div className="space-y-1">
                      <p className="text-xs font-semibold line-clamp-2">{event.title}</p>
                      <p className="text-xs text-muted-foreground">{event.author}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
