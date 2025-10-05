import type React from "react"
import type { Metadata } from "next"
import { Sidebar } from "@/src/components/sidebar"
import { Header } from "@/src/components/header"

export const metadata: Metadata = {
  title: "NCash - Loan Management System",
  description: "Loan management dashboard",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="min-h-screen">
          <Header />
          {children}
        </div>
      </main>
    </div>
  )
}
