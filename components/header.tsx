import type React from "react"
import { Search, Bell, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"

interface HeaderProps {
  title?: string
  actions?: React.ReactNode
}

export function Header({ title, actions }: HeaderProps) {
  return (
    <header className="bg-white border-b border-border">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-xl font-semibold">Welcome Back, Toussaint</h1>
          {title && <p className="text-sm text-muted-foreground mt-1">{title}</p>}
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search Anything" className="pl-10 bg-background" />
          </div>

          {actions}

          {/* UK Flag */}
          <div className="w-6 h-6 relative">
            <Image src="/uk-flag.png" alt="UK" fill className="object-contain" />
          </div>

          {/* Notification Bell */}
          <button className="relative">
            <Bell className="w-5 h-5 text-yellow-500" />
          </button>

          {/* User Profile */}
          <button className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
              <Image src="/diverse-user-avatars.png" alt="User" width={32} height={32} />
            </div>
            <span className="text-sm font-medium">Toussaint ir.</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  )
}
