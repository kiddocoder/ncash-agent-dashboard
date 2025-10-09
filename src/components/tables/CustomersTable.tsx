"use client"

import React from "react";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";

const customerData = [
    {
        id: "01",
        name: "Jean Marie M.",
        phone: "+27 71 423 9581",
        email: "mashaba.lerato92@gmail.com",
        totalLoans: 12,
        totalAmount: "R 300,00",
        status: "active",
    },
    {
        id: "02",
        name: "Florian Jr Nke.",
        phone: "+27 72 806 3147",
        email: "thabo.mokoena87@yahoo.com",
        totalLoans: 10,
        totalAmount: "R 420,00",
        status: "offline",
    },
    {
        id: "03",
        name: "Bon Tertius T.",
        phone: "+27 73 159 6402",
        email: "sibongile.ndlovu24@gmail.com",
        totalLoans: 9,
        totalAmount: "R 133,00",
        status: "active",
    },
    {
        id: "04",
        name: "Lerato M.",
        phone: "+27 71 423 9581",
        email: "mashaba.lerato92@gmail.com",
        totalLoans: 12,
        totalAmount: "R 300,00",
        status: "active",
    },
    {
        id: "05",
        name: "Thabo M.",
        phone: "+27 72 806 3147",
        email: "thabo.mokoena87@yahoo.com",
        totalLoans: 10,
        totalAmount: "R 420,00",
        status: "offline",
    },
]


function CustomersTable({ title = "All Customers" }: { title?: string }) {
    const router = useRouter();
    return (
        <div className="bg-white rounded-lg border border-border overflow-hidden">
            <div className="p-4">
                <h2 className="font-semibold mb-4">{title}</h2>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-table-header">
                                <th className="text-left p-3 font-semibold text-sm">#</th>
                                <th className="text-left p-3 font-semibold text-sm">Name</th>
                                <th className="text-left p-3 font-semibold text-sm">Contact</th>
                                <th className="text-left p-3 font-semibold text-sm">Total Loans</th>
                                <th className="text-left p-3 font-semibold text-sm">Total Loan Amount</th>
                                <th className="text-left p-3 font-semibold text-sm">Account Status</th>
                                <th className="text-left p-3 font-semibold text-sm">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customerData.map((customer, index) => (
                                <tr key={customer.id} className={index % 2 === 0 ? "bg-white" : "bg-table-row-alt"}>
                                    <td className="p-3 text-sm">{customer.id}</td>
                                    <td className="p-3 text-sm">{customer.name}</td>
                                    <td className="p-3">
                                        <div className="text-sm">
                                            <div className="font-medium">{customer.phone}</div>
                                            <div className="text-muted-foreground text-xs">{customer.email}</div>
                                        </div>
                                    </td>
                                    <td className="p-3 text-sm">{customer.totalLoans}</td>
                                    <td className="p-3 text-sm">{customer.totalAmount}</td>
                                    <td className="p-3">
                                        <span
                                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${customer.status === "active" ? "bg-green-100 text-green-800" : "bg-pink-100 text-pink-800"
                                                }`}
                                        >
                                            {customer.status}
                                        </span>
                                    </td>
                                    <td className="p-3">
                                        <button
                                            onClick={() => router.push(`/customers/${customer.id}`)}
                                            className="cursor-pointer text-primary hover:text-primary/80">
                                            <Eye className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex items-center justify-center gap-2 p-4 border-t border-border">
                <button className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">
                    1
                </button>
                <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-sm font-medium">
                    2
                </button>
                <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-sm font-medium">
                    3
                </button>
                <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-sm font-medium">
                    4
                </button>
            </div>
        </div>
    )
}

export default CustomersTable;
