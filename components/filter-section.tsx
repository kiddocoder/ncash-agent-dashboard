"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function FilterSection() {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className="bg-white border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Filter</h3>
        <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Collapse" : "Expand"}
        </Button>
      </div>

      {isExpanded && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Loan Status</label>
              <Select defaultValue="active">
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="declined">Declined</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Start Date</label>
              <Input type="text" placeholder="YYYY-MM-DD" />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">End Date</label>
              <Input type="text" placeholder="YYYY-MM-DD" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Min Amount</label>
              <Input type="number" placeholder="0.00" />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Max Amount</label>
              <Input type="number" placeholder="0.00" />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Min Loans</label>
              <Input type="number" placeholder="0.00" />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Max Loans</label>
              <Input type="number" placeholder="0.00" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
