"use client"

import type React from "react"

import { useState } from "react"
import { TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface RequestTopupFormProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    remainingBudget?: string
    trend?: string
}

export function RequestTopupForm({
    open,
    onOpenChange,
    remainingBudget = "R 60,000,000.00",
    trend = "vs last week +10.01%",
}: RequestTopupFormProps) {
    const [amount, setAmount] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("[v0] Top-up request submitted:", { amount, message })
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
                    {/* Remaining Budget Card */}
                    <div className="bg-[#f5f1e8] rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-2">Remaining Budget</p>
                        <div className="flex items-center justify-between">
                            <p className="text-2xl font-semibold">{remainingBudget}</p>
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                                <span>{trend}</span>
                                <TrendingUp className="h-4 w-4" />
                            </div>
                        </div>
                    </div>

                    {/* Amount Field */}
                    <div className="space-y-2">
                        <Label htmlFor="amount">Amount</Label>
                        <Input
                            id="amount"
                            placeholder="eg:R 250,000"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="bg-[#f5f5f5]"
                        />
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                        <Label htmlFor="message">Share Your Message</Label>
                        <Textarea
                            id="message"
                            placeholder="Enter your message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="bg-[#f5f5f5] min-h-[120px] resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <Button type="submit" className="bg-[#65b947] hover:bg-[#5aa83d] text-white px-8">
                            Send Request
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
