"use client"

import { Button } from "@/components/ui/button"
import { X, User, Coins } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

export default function LoanDetailsPage() {
    const repaymentData = [
        { name: "Paid", value: 48, color: "#65b947" },
        { name: "Remaining", value: 28, color: "#e8c37d" },
        { name: "Buffer", value: 24, color: "#d4e8d4" },
    ]

    const paymentHistory = [
        { id: 1, title: "Loan Request Submitted", time: "Today 1:53 PM", amount: "+R 5,000.00" },
        { id: 2, title: "Loan Request Submitted", time: "Today 1:53 PM", amount: "+R 5,000.00" },
    ]

    return (
        <div className="p-8">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-semibold">Loan Details</h1>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full bg-red-600 text-white hover:bg-red-700 hover:text-white"
                >
                    <X className="h-4 w-4" />
                </Button>
            </div>

            <div className="max-w-4xl">
                {/* Progress Chart */}
                <div className="flex justify-center mb-8">
                    <div className="relative w-64 h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={repaymentData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={120}
                                    paddingAngle={2}
                                    dataKey="value"
                                >
                                    {repaymentData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-5xl font-bold text-primary">48%</span>
                        </div>
                    </div>
                </div>

                {/* Customer Info */}
                <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                            <User className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-medium">Iradukunda Toussaint</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                            <Coins className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-medium">Student loan</span>
                        <span className="ml-auto px-4 py-1 bg-green-100 text-primary rounded-full text-sm font-medium border border-primary">
                            Approved
                        </span>
                    </div>

                    <p className="text-lg font-semibold">
                        R 5000 <span className="text-gray-500 font-normal">borrowed</span>
                    </p>
                </div>

                {/* Balance Cards */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 bg-card-bg rounded-lg border-l-4 border-primary">
                        <p className="text-sm text-gray-600 mb-1">Remaining Balance</p>
                        <p className="text-2xl font-bold">R 2,800</p>
                    </div>
                    <div className="p-4 bg-card-bg rounded-lg border-l-4 border-primary">
                        <p className="text-sm text-gray-600 mb-1">Next Payment</p>
                        <p className="text-2xl font-bold">R 800</p>
                    </div>
                </div>

                {/* Repayment Progress */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                        <p className="font-medium">Repayment Progress</p>
                        <p className="font-semibold">52%</p>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "52%" }} />
                    </div>
                </div>

                {/* Loan Details Table */}
                <div className="bg-white border rounded-lg p-6 mb-8">
                    <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b">
                            <span className="text-gray-600">Amount</span>
                            <span className="font-semibold">R 3620.00</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                            <span className="text-gray-600">Interest rate/month</span>
                            <span className="font-semibold">8%</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                            <span className="text-gray-600">Period</span>
                            <span className="font-semibold">12 Years</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                            <span className="text-gray-600">Agreement date</span>
                            <span className="font-semibold">08/01/2025</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                            <span className="text-gray-600">Monthly payment</span>
                            <span className="font-semibold">R 256.00</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-gray-600">Total</span>
                            <span className="font-semibold text-primary">R 3620.00</span>
                        </div>
                    </div>
                </div>

                {/* Payments History */}
                <div className="mb-8">
                    <h3 className="font-medium mb-4">Payments history</h3>
                    <div className="space-y-3">
                        {paymentHistory.map((payment) => (
                            <div key={payment.id} className="flex items-center justify-between p-4 bg-white border rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                                        <Coins className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium">{payment.title}</p>
                                        <p className="text-sm text-gray-500">{payment.time}</p>
                                    </div>
                                </div>
                                <span className="font-semibold text-primary">{payment.amount}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pay Off Button */}
                <Button className="w-full bg-primary hover:bg-primary/90 h-12 text-base">Pay off</Button>
            </div>
        </div>
    )
}
