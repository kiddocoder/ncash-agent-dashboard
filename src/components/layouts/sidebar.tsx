"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  Shield,
  FileCheck,
  MessageSquare,
  BarChart3,
  Calendar,
  Settings,
  SlidersHorizontal,
  LogOut,
} from "lucide-react"
const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Users, label: "Customer Management", href: "/customers" },
  { icon: Shield, label: "Blacklist & Checks", href: "/blacklist" },
  { icon: FileCheck, label: "Loan Requests & Approvals", href: "/loan-requests" },
  { icon: MessageSquare, label: "Messaging & Tracking", href: "/messaging", badge: "2+" },
  { icon: BarChart3, label: "Reports", href: "/reports" },
  { icon: Calendar, label: "Appointments", href: "/appointments" },
]

const settingsItems = [
  { icon: Settings, label: "Budget Settings", href: "/settings/budget" },
  { icon: SlidersHorizontal, label: "Advanced Settings", href: "/settings/advanced" },
]

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter();

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      // Clear any authentication tokens or user data here if needed
      router.push('/login'); // Redirect to login page
    }
  }

  return (
    <aside className="w-[290px] bg-primary text-white flex flex-col">
      {/* Logo */}
      <div className="h-24 flex items-center justify-center border-b border-white/10">
        <div className="text-3xl font-bold">
          <span className="inline-block border-4 border-white px-3 py-1 rounded">
            NC<span className="text-2xl">A</span>SH
          </span>
        </div>
      </div>

      {/* Main Menu */}
      <div className="flex-1 overflow-y-auto py-6">
        <div className="px-6 mb-4">
          <h2 className="text-sm font-semibold opacity-90">Main Menu</h2>
        </div>
        <nav className="space-y-1 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors relative",
                  isActive ? "bg-white/10" : "hover:bg-white/5",
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-white text-primary text-xs font-semibold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        {/* System Settings */}
        <div className="mt-8">
          <div className="px-6 mb-4">
            <h2 className="text-sm font-semibold opacity-90">System Settings</h2>
          </div>
          <nav className="space-y-1 px-3">
            {settingsItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                    isActive ? "bg-white/10" : "hover:bg-white/5",
                  )}
                >
                  <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <span className="text-sm">{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Logout */}
      <div className="p-3 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="cursor-pointer flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors w-full">
          <LogOut className="w-5 h-5" />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </aside>
  )
}
