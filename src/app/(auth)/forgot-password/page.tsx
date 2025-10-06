"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const handleEmailCheck = (e: React.FormEvent) => {
        e.preventDefault()
        // Simple auth check (not secure, just for demo)
        if (email === "admin@gmail.com") {
            router.push("/login")
        } else {
            alert("Invalid email. Use admin@gmail.com")
        }
    }

    return (
        <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <div className="w-24 h-24 relative">
                        <Image src="/ncash-logo.jpg" alt="NCash" fill className="object-contain" />
                    </div>
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password</h1>
                    <p className="text-gray-600">Enter the email current connect on your account</p>
                </div>

                {/* email check Form */}
                <form onSubmit={handleEmailCheck} className="space-y-6">
                    <div>
                        <Label htmlFor="email" className="text-gray-700 mb-2 block">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="balamia@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-12 border-2 border-gray-200 focus:border-primary rounded-lg"
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-lg text-base font-medium"
                    >
                        Send
                    </Button>
                </form>
            </div>
        </div>
    )
}
