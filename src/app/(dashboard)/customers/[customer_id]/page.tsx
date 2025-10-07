"use client"

import { Button } from "@/components/ui/button"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { Trash2, Printer, Download } from "lucide-react"
import Image from "next/image"

export default function CustomerProfilePage() {
    // Mock customer data - in real app, fetch based on params.customer_id
    const customer = {
        fullName: "John Mokoena",
        customerId: "CUST-004582",
        residencyStatus: "SA Resident",
        phone: "+27 72 806 3147",
        email: "thabo.mokoena87@yahoo.com",
        gender: "Male",
        nationality: "South African",
        address: "Johannesburg CBD, 2001",
        saIdNumber: "890314-5432-08-4",
        saIdFile: "My_ID.jpeg",
        proofOfAddressFile: "proof_photo.jpeg",
        currentLoanBalance: 8450,
        totalLoansTaken: 8,
        totalRepaid: 24000,
        outstandingAmount: 8450,
        repaymentPercentage: 52,
        profilePhoto: "/diverse-user-avatars.png",
    }

    // Data for the circular progress chart
    const chartData = [
        { name: "Repaid", value: customer.repaymentPercentage },
        { name: "Outstanding", value: 100 - customer.repaymentPercentage },
    ]

    const COLORS = ["#65b947", "#f3f6f9"]

    return (
        <div className="min-h-screen bg-background">

            <div className="p-8">
                <h1 className="text-2xl font-semibold mb-6">Customer Profile</h1>

                {/* Green Header Banner with Profile Photo */}
                <div className="relative bg-primary h-44 rounded-t-lg">
                    <div className="absolute -bottom-16 left-8">
                        <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white">
                            <Image
                                src={customer.profilePhoto || "/placeholder.svg"}
                                alt={customer.fullName}
                                width={128}
                                height={128}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-b-lg shadow-sm p-8 pt-20">
                    {/* Profile Overview and Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Left Column - Profile Overview */}
                        <div>
                            <h2 className="text-lg font-semibold mb-6">Profile Overview</h2>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Full Name</p>
                                    <p className="text-base font-medium">{customer.fullName}</p>
                                </div>

                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Customer ID</p>
                                    <p className="text-base font-medium">{customer.customerId}</p>
                                </div>

                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Residency Status</p>
                                    <p className="text-base font-medium">{customer.residencyStatus}</p>
                                </div>

                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Contact Info</p>
                                    <p className="text-base font-medium">{customer.phone}</p>
                                    <p className="text-sm text-muted-foreground">{customer.email}</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Personal Information */}
                        <div>
                            <h2 className="text-lg font-semibold mb-6">Personal Information</h2>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Gender</p>
                                    <p className="text-base font-medium">{customer.gender}</p>
                                </div>

                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Nationality</p>
                                    <p className="text-base font-medium">{customer.nationality}</p>
                                </div>

                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Address</p>
                                    <p className="text-base font-medium">{customer.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-border my-8" />

                    {/* Identity & Documents */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-6">Identity & Documents</h2>

                        <div className="space-y-6">
                            <div>
                                <p className="text-sm text-muted-foreground mb-1">SA ID Number</p>
                                <p className="text-base font-medium">{customer.saIdNumber}</p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground mb-1">SA ID</p>
                                <a href="#" className="text-primary hover:underline inline-flex items-center gap-2">
                                    {customer.saIdFile}
                                    <Download className="w-4 h-4" />
                                </a>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground mb-1">Proof of Address</p>
                                <a href="#" className="text-primary hover:underline inline-flex items-center gap-2">
                                    {customer.proofOfAddressFile}
                                    <Download className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-border my-8" />

                    {/* Financial Overview */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-6">Financial Overview</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Left Column - Financial Metrics */}
                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Current Loan Balance</p>
                                    <p className="text-base font-medium">R {customer.currentLoanBalance.toLocaleString()}</p>
                                </div>

                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Total Loans Taken</p>
                                    <p className="text-base font-medium">{customer.totalLoansTaken}</p>
                                </div>

                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Total Repaid</p>
                                    <p className="text-base font-medium">R {customer.totalRepaid.toLocaleString()}</p>
                                </div>

                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Outstanding Amount</p>
                                    <p className="text-base font-medium">R {customer.outstandingAmount.toLocaleString()}</p>
                                </div>
                            </div>

                            {/* Right Column - Circular Progress Chart */}
                            <div className="flex items-center justify-center">
                                <div className="relative w-64 h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={chartData}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={70}
                                                outerRadius={100}
                                                startAngle={90}
                                                endAngle={-270}
                                                dataKey="value"
                                            >
                                                {chartData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-5xl font-bold text-primary">{customer.repaymentPercentage}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center mt-12">
                        <Button variant="destructive" size="lg" className="bg-red-600 hover:bg-red-700">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Blacklist This Customer
                        </Button>
                        <Button size="lg" className="bg-primary hover:bg-primary/90">
                            <Printer className="w-4 h-4 mr-2" />
                            Print Customer Profile
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
