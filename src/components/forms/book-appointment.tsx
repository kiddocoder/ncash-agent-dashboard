"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface BookAppointmentFormProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function BookAppointmentForm({ open, onOpenChange }: BookAppointmentFormProps) {
    const [customer, setCustomer] = useState("")
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [countryCode, setCountryCode] = useState("+971")
    const [phone, setPhone] = useState("")
    const [date, setDate] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("[v0] Appointment booked:", {
            customer,
            fullName,
            email,
            phone: `${countryCode}${phone}`,
            date,
            message,
        })
        // Handle form submission
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold">Book appointment now</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Select Customer */}
                    <div className="space-y-2">
                        <Label htmlFor="customer">Select Customer</Label>
                        <Input
                            id="customer"
                            placeholder="eg: John Doe"
                            value={customer}
                            onChange={(e) => setCustomer(e.target.value)}
                            className="bg-[#f5f5f5]"
                        />
                    </div>

                    {/* Full Name */}
                    <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                            id="fullName"
                            placeholder="eg: John Doe"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="bg-[#f5f5f5]"
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="eg: john@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-[#f5f5f5]"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="flex gap-2">
                            <Select value={countryCode} onValueChange={setCountryCode}>
                                <SelectTrigger className="w-[100px] bg-[#f5f5f5]">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="+971">+971</SelectItem>
                                    <SelectItem value="+27">+27</SelectItem>
                                    <SelectItem value="+1">+1</SelectItem>
                                    <SelectItem value="+44">+44</SelectItem>
                                </SelectContent>
                            </Select>
                            <Input
                                id="phone"
                                placeholder="543210987"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="bg-[#f5f5f5] flex-1"
                            />
                        </div>
                    </div>

                    {/* Available Date */}
                    <div className="space-y-2">
                        <Label htmlFor="date">Available Date</Label>
                        <Select value={date} onValueChange={setDate}>
                            <SelectTrigger className="bg-[#f5f5f5]">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="2025-01-15">January 15, 2025</SelectItem>
                                <SelectItem value="2025-01-16">January 16, 2025</SelectItem>
                                <SelectItem value="2025-01-17">January 17, 2025</SelectItem>
                                <SelectItem value="2025-01-18">January 18, 2025</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                        <Label htmlFor="appointmentMessage">Share Your Message</Label>
                        <Textarea
                            id="appointmentMessage"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="bg-[#f5f5f5] min-h-[120px] resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-2">
                        <Button type="submit" className="bg-[#65b947] hover:bg-[#5aa83d] text-white px-8">
                            Save Appointment
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
