"use client"

import type React from "react"

import { useState } from "react"
import { TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface SetBudgetAlertFormProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    initialAmount?: string
    trend?: string
}

export function SetBudgetAlertForm({
    open,
    onOpenChange,
    initialAmount = "R 10,000,000.00",
    trend = "vs last week +10.01%",
}: SetBudgetAlertFormProps) {
    const [alertAmount, setAlertAmount] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("[v0] Budget alert set:", { alertAmount })
        // Handle form submission
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold">Request a new top-up</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Initial Alert Amount Card */}
                    <div className="bg-[#f5f1e8] rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-2">Initial Alert Amount</p>
                        <div className="flex items-center justify-between">
                            <p className="text-2xl font-semibold">{initialAmount}</p>
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                                <span>{trend}</span>
                                <TrendingUp className="h-4 w-4" />
                            </div>
                        </div>
                    </div>

                    {/* Set Budget Alert Amount Field */}
                    <div className="space-y-2">
                        <Label htmlFor="alertAmount">Set Budget Alert Amount</Label>
                        <Input
                            id="alertAmount"
                            placeholder="eg:R 250,000"
                            value={alertAmount}
                            onChange={(e) => setAlertAmount(e.target.value)}
                            className="bg-[#f5f5f5]"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <Button type="submit" className="bg-[#65b947] hover:bg-[#5aa83d] text-white px-8">
                            Save
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
