"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { X, Plus } from "lucide-react"

interface NewLoanFormProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function NewLoanForm({ open, onOpenChange }: NewLoanFormProps) {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        paymentMethod: "",
        customer: "",
        loanName: "",
        period: "",
        amount: "",
        purpose: "",
        billingAddress: "",
    })

    const handleNext = () => {
        if (step < 3) setStep(step + 1)
    }

    const handleBack = () => {
        if (step > 1) setStep(step - 1)
    }

    const handleSubmit = () => {
        console.log("[v0] Submitting loan:", formData)
        onOpenChange(false)
        setStep(1)
    }

    const handleClose = () => {
        onOpenChange(false)
        setStep(1)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader className="flex flex-row items-center justify-between">
                    <DialogTitle className="text-2xl font-semibold">New Loan</DialogTitle>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleClose}
                        className="h-8 w-8 rounded-full bg-red-600 text-white hover:bg-red-700 hover:text-white"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </DialogHeader>

                <div className="mt-6">
                    {step === 1 && (
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-medium">Select Payment</h3>
                                <Button className="bg-primary hover:bg-primary/90">
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add Card
                                </Button>
                            </div>

                            <RadioGroup
                                value={formData.paymentMethod}
                                onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                                        <RadioGroupItem value="mastercard" />
                                        <div className="flex items-center gap-3 flex-1">
                                            <div className="flex items-center gap-1">
                                                <div className="w-8 h-8 rounded-full bg-red-600" />
                                                <div className="w-8 h-8 rounded-full bg-orange-500 -ml-4" />
                                            </div>
                                            <div>
                                                <p className="font-medium">MasterCard</p>
                                                <p className="text-sm text-gray-500">**** **** 2530</p>
                                            </div>
                                        </div>
                                    </label>

                                    <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                                        <RadioGroupItem value="creditcard" />
                                        <div className="flex items-center gap-3 flex-1">
                                            <div className="w-10 h-8 bg-yellow-400 rounded" />
                                            <div>
                                                <p className="font-medium">Credit Card</p>
                                                <p className="text-sm text-gray-500">**** **** 2530</p>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </RadioGroup>

                            <div>
                                <h3 className="text-base font-medium mb-4">Use Locals</h3>
                                <RadioGroup
                                    value={formData.paymentMethod}
                                    onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
                                >
                                    <div className="grid grid-cols-2 gap-4">
                                        <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                                            <RadioGroupItem value="fnb" />
                                            <img src="/fnb-bank-logo.png" alt="FNB" className="h-8" />
                                        </label>

                                        <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                                            <RadioGroupItem value="standard" />
                                            <img src="/standard-bank-logo.png" alt="Standard Bank" className="h-8" />
                                        </label>

                                        <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 col-span-2">
                                            <RadioGroupItem value="absa" />
                                            <img src="/generic-bank-logo.png" alt="ABSA" className="h-8" />
                                        </label>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="flex-1">
                                    <Label>Select customer</Label>
                                    <Select
                                        value={formData.customer}
                                        onValueChange={(value) => setFormData({ ...formData, customer: value })}
                                    >
                                        <SelectTrigger className="mt-2">
                                            <SelectValue placeholder="Enter the loan name" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="customer1">John Mokoena</SelectItem>
                                            <SelectItem value="customer2">Jane Smith</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button className="bg-primary hover:bg-primary/90 mt-8">New</Button>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label>Loan Name</Label>
                                    <Input
                                        placeholder="Enter the loan name"
                                        value={formData.loanName}
                                        onChange={(e) => setFormData({ ...formData, loanName: e.target.value })}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <Label>Period</Label>
                                    <Select
                                        value={formData.period}
                                        onValueChange={(value) => setFormData({ ...formData, period: value })}
                                    >
                                        <SelectTrigger className="mt-2">
                                            <SelectValue placeholder="5 months" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="3">3 months</SelectItem>
                                            <SelectItem value="5">5 months</SelectItem>
                                            <SelectItem value="12">12 months</SelectItem>
                                            <SelectItem value="24">24 months</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label>Amount</Label>
                                    <Input
                                        type="number"
                                        placeholder="4500"
                                        value={formData.amount}
                                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <Label>Purpose Of Loan</Label>
                                    <Textarea
                                        placeholder="I want to pay the school for my child"
                                        value={formData.purpose}
                                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div>
                                <Label>Billing Address</Label>
                                <Select
                                    value={formData.billingAddress}
                                    onValueChange={(value) => setFormData({ ...formData, billingAddress: value })}
                                >
                                    <SelectTrigger className="mt-2">
                                        <SelectValue placeholder="South Africa" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="za">South Africa</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-6">
                            <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                                <div className="w-10 h-8 bg-yellow-400 rounded" />
                                <div>
                                    <p className="font-medium">Credit Card</p>
                                    <p className="text-sm text-gray-500">**** **** 2530</p>
                                </div>
                            </div>

                            <div className="border-t pt-6">
                                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                    <div>
                                        <p className="text-sm text-gray-600">Amount</p>
                                        <p className="font-semibold">R 3620.00</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Interest rate/month</p>
                                        <p className="font-semibold">12%</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Period</p>
                                        <p className="font-semibold">10 Years and 2 months</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Agreement date</p>
                                        <p className="font-semibold">08/01/2025</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Monthly payment</p>
                                        <p className="font-semibold">R 256.00</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">First Payment Date</p>
                                        <p className="font-semibold">08/02/2025</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-between mt-8 pt-6 border-t">
                    {step > 1 && (
                        <Button variant="outline" onClick={handleBack} className="px-8 bg-transparent">
                            Back
                        </Button>
                    )}
                    {step < 3 ? (
                        <Button onClick={handleNext} className="bg-primary hover:bg-primary/90 px-8 ml-auto">
                            Continue
                        </Button>
                    ) : (
                        <Button onClick={handleSubmit} className="bg-primary hover:bg-primary/90 px-8 ml-auto">
                            Submit Loan
                        </Button>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}
