"use client"

import { useState } from "react"
import { Camera, FileText, Search, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image"

interface NewCustomerFormProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onSubmit?: (data: CustomerFormData) => void
}

interface CustomerFormData {
    // Step 1: Documents
    profileSelfie: File | null
    nationalId: File | null
    proofOfAddress: File | null
    address: string

    // Step 2: Contact Details
    email: string
    phoneNumber: string
    pin: string
    confirmPin: string
    country: string
    city: string
    province: string
    postalCode: string

    // Step 3: Additional Information
    education: string
    jobStatus: string
    salaryRange: string
    maritalStatus: string
    gender: string

    // Step 4: Payment Method
    paymentMethod: string
}

const RESIDENTS = [
    { id: 1, name: "John Doe", idNumber: "1234 5678 9012 345" },
    { id: 2, name: "Jane Smith", idNumber: "2345 6789 0123 456" },
    { id: 3, name: "Alice Johnson", idNumber: "3456 7890 1234 567" },
    { id: 4, name: "Bob Brown", idNumber: "4567 8901 2345 678" },
    { id: 5, name: "Charlie Davis", idNumber: "5678 9012 3456 789" },
    { id: 6, name: "Diana Evans", idNumber: "6789 0123 4567 890" },
    { id: 7, name: "Frank Green", idNumber: "7890 1234 5678 901" },
    { id: 8, name: "Grace Harris", idNumber: "8901 2345 6789 012" },
    { id: 9, name: "Hank Ingram", idNumber: "9012 3456 7890 123" },
    { id: 10, name: "Ivy Jackson", idNumber: "0123 4567 8901 234" },
];

export function NewCustomerForm({ open, onOpenChange, onSubmit }: NewCustomerFormProps) {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState<CustomerFormData>({
        profileSelfie: null,
        nationalId: null,
        proofOfAddress: null,
        address: "",
        email: "",
        phoneNumber: "",
        pin: "",
        confirmPin: "",
        country: "South Africa",
        city: "Johannesburg",
        province: "Johannesburg",
        postalCode: "",
        education: "",
        jobStatus: "",
        salaryRange: "",
        maritalStatus: "",
        gender: "male",
        paymentMethod: "mastercard",
    })

    const handleFileUpload = (field: keyof CustomerFormData, file: File | null) => {
        setFormData((prev) => ({ ...prev, [field]: file }))
    }

    const handleInputChange = (field: keyof CustomerFormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleNext = () => {
        if (step < 6) {
            setStep(step + 1)
        } else {
            onSubmit?.(formData)
            onOpenChange(false)
        }
    }

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1)
        }
    }

    const [residents, setResidents] = useState(RESIDENTS);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase();

        const filteredResidents = RESIDENTS.filter(resident =>
            resident.name.toLowerCase().includes(query) ||
            resident.idNumber.includes(query)
        );
        setResidents(filteredResidents);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="md:max-w-5xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold">
                        {step <= 2 ? "Client's Personal information" : "Additional information"}
                    </DialogTitle>
                    <button
                        onClick={() => onOpenChange(false)}
                        className="absolute right-4 top-4 rounded-full bg-[#dc2626] p-2 text-white hover:bg-[#b91c1c] transition-colors"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </DialogHeader>

                <div className="space-y-6 py-4">

                    {/** step = 1 : Choose how you’d like to register this Customer*/}
                    {step === 1 && (
                        <div className="space-y-6">
                            <div className="cursor-pointer hover:bg-primary/10 p-4 border border-border rounded-lg grid grid-cols-2 gap-2">
                                <Image
                                    src="/undraw_quiet-street_v45k.svg"
                                    alt="Customer Registration"
                                    width={272}
                                    height={129}
                                    className="mx-auto mb-4"
                                />
                                <div>
                                    <p className="text-lg font-bold mb-2">As SA Resident</p>
                                    <p>By choosing SA Resident, your account will be created using a South African ID and local documents. You’ll follow the standard KYC process and access loans available to South African citizens and permanent residents.</p>
                                </div>
                            </div>

                            <div className="cursor-pointer hover:bg-primary/10 p-4 border border-border rounded-lg grid grid-cols-2 gap-2">
                                <Image
                                    src="/undraw_travel-mode_ydxo.svg"
                                    alt="Customer Registration"
                                    width={243}
                                    height={157}
                                    className="mx-auto mb-4"
                                />
                                <div>
                                    <p className="text-lg font-bold mb-2">As a Foreigner</p>
                                    <p>By choosing Foreigner, your account will be created using a South African ID and local documents. You’ll follow the standard KYC process and access loans available to South African citizens and permanent residents.</p>
                                </div>
                            </div>

                        </div>
                    )}

                    {/** step 2 = : Select an SA resident assigned to this client*/}
                    {step === 2 && (
                        <div className="space-y-6">
                            <div className="relative w-full">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input
                                    onChange={handleSearchChange}
                                    placeholder="Enter the resident name" className="pl-10 py-4 bg-input" />
                            </div>

                            {/* find profile results*/}
                            <div className="flex flex-col gap-2 max-h-96 overflow-y-auto border border-border rounded-md p-4 mt-4 ">
                                {
                                    residents.map((resident) => (
                                        <div key={resident.id} className="flex items-center  p-4 bg-white">
                                            <Image
                                                src="/profile.svg"
                                                alt="Customer Registration"
                                                width={50}
                                                height={50}
                                                className="rounded-full bg-gray-200 p-[2px] object-cover"
                                            />
                                            <div className="ml-4">
                                                <p className="text-lg font-bold mb-1">{resident.name}</p>
                                                <p className="text-sm text-muted-foreground">
                                                    ID: <span className="font-semibold">{resident.idNumber}</span>
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    )}

                    {/* Step 3: Document Upload */}
                    {step === 3 && (
                        <div className="space-y-6">
                            {/* Profile Selfie */}
                            <div className="space-y-2">
                                <Label>Profile selfie</Label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center hover:border-[#65b947] transition-colors cursor-pointer">
                                    <Camera className="h-12 w-12 text-[#65b947] mb-2" />
                                    <span className="text-gray-500">capture</span>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => handleFileUpload("profileSelfie", e.target.files?.[0] || null)}
                                    />
                                </div>
                            </div>

                            {/* SA National ID */}
                            <div className="space-y-2">
                                <Label>SA National ID</Label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center hover:border-[#65b947] transition-colors cursor-pointer">
                                    <FileText className="h-12 w-12 text-[#65b947] mb-2" />
                                    <span className="text-gray-500">click to upload your ID</span>
                                    <input
                                        type="file"
                                        accept="image/*,.pdf"
                                        className="hidden"
                                        onChange={(e) => handleFileUpload("nationalId", e.target.files?.[0] || null)}
                                    />
                                </div>
                            </div>

                            {/* Proof of Address */}
                            <div className="space-y-2">
                                <Label>Proof of Address</Label>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center hover:border-[#65b947] transition-colors cursor-pointer">
                                        <Camera className="h-10 w-10 text-[#65b947] mb-2" />
                                        <span className="text-gray-500 text-sm">capture</span>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => handleFileUpload("proofOfAddress", e.target.files?.[0] || null)}
                                        />
                                    </div>
                                    <Input
                                        placeholder="Type your address"
                                        value={formData.address}
                                        onChange={(e) => handleInputChange("address", e.target.value)}
                                        className="h-full"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Contact Details */}
                    {step === 4 && (
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label>Email address</Label>
                                <Input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Phone Number</Label>
                                <Input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    value={formData.phoneNumber}
                                    onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>PIN</Label>
                                <Input
                                    type="password"
                                    placeholder="Enter the client's PIN"
                                    value={formData.pin}
                                    onChange={(e) => handleInputChange("pin", e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Confirm PIN</Label>
                                <Input
                                    type="password"
                                    placeholder="Confirm PIN"
                                    value={formData.confirmPin}
                                    onChange={(e) => handleInputChange("confirmPin", e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Select country</Label>
                                <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="South Africa">South Africa</SelectItem>
                                        <SelectItem value="Nigeria">Nigeria</SelectItem>
                                        <SelectItem value="Kenya">Kenya</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label>Select city</Label>
                                <Select value={formData.city} onValueChange={(value) => handleInputChange("city", value)}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Johannesburg">Johannesburg</SelectItem>
                                        <SelectItem value="Cape Town">Cape Town</SelectItem>
                                        <SelectItem value="Durban">Durban</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label>Select Province</Label>
                                <Select value={formData.province} onValueChange={(value) => handleInputChange("province", value)}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Johannesburg">Johannesburg</SelectItem>
                                        <SelectItem value="Gauteng">Gauteng</SelectItem>
                                        <SelectItem value="Western Cape">Western Cape</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label>Postal Code</Label>
                                <Input
                                    placeholder="0000"
                                    value={formData.postalCode}
                                    onChange={(e) => handleInputChange("postalCode", e.target.value)}
                                />
                            </div>
                        </div>
                    )}

                    {/* Step 5: Additional Information */}
                    {step === 5 && (
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label>Education</Label>
                                    <Select value={formData.education} onValueChange={(value) => handleInputChange("education", value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Please select your highest degree" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="high-school">High School</SelectItem>
                                            <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                                            <SelectItem value="masters">Master's Degree</SelectItem>
                                            <SelectItem value="phd">PhD</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label>Job Status</Label>
                                    <Select value={formData.jobStatus} onValueChange={(value) => handleInputChange("jobStatus", value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Please select your profession" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="employed">Employed</SelectItem>
                                            <SelectItem value="self-employed">Self-Employed</SelectItem>
                                            <SelectItem value="unemployed">Unemployed</SelectItem>
                                            <SelectItem value="student">Student</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label>Salary Range</Label>
                                    <Select
                                        value={formData.salaryRange}
                                        onValueChange={(value) => handleInputChange("salaryRange", value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select your salary range" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="0-10000">R 0 - R 10,000</SelectItem>
                                            <SelectItem value="10000-25000">R 10,000 - R 25,000</SelectItem>
                                            <SelectItem value="25000-50000">R 25,000 - R 50,000</SelectItem>
                                            <SelectItem value="50000+">R 50,000+</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label>Material Status</Label>
                                    <Select
                                        value={formData.maritalStatus}
                                        onValueChange={(value) => handleInputChange("maritalStatus", value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select your material status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="single">Single</SelectItem>
                                            <SelectItem value="married">Married</SelectItem>
                                            <SelectItem value="divorced">Divorced</SelectItem>
                                            <SelectItem value="widowed">Widowed</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Gender</Label>
                                <RadioGroup
                                    value={formData.gender}
                                    onValueChange={(value) => handleInputChange("gender", value)}
                                    className="grid grid-cols-2 gap-4"
                                >
                                    <div className="flex items-center space-x-3 border border-gray-200 rounded-lg p-4 hover:border-[#65b947] transition-colors">
                                        <RadioGroupItem value="male" id="male" className="border-[#65b947] text-[#65b947]" />
                                        <Label htmlFor="male" className="cursor-pointer flex-1">
                                            Male
                                        </Label>
                                    </div>
                                    <div className="flex items-center space-x-3 border border-gray-200 rounded-lg p-4 hover:border-[#65b947] transition-colors">
                                        <RadioGroupItem value="female" id="female" className="border-[#65b947] text-[#65b947]" />
                                        <Label htmlFor="female" className="cursor-pointer flex-1">
                                            Female
                                        </Label>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>
                    )}

                    {/* Step 6: Payment Method */}
                    {step === 6 && (
                        <div className="space-y-6">
                            {/* Info Banner */}
                            <div className="bg-[#fef3c7] border border-[#fbbf24] rounded-lg p-4 flex items-start gap-3">
                                <div className="bg-[#fbbf24] rounded-full p-1 mt-0.5">
                                    <span className="text-white text-xs font-bold">i</span>
                                </div>
                                <p className="text-sm text-gray-700">
                                    Repayment will be automatically collected from debit card linked to your account
                                </p>
                            </div>

                            {/* Select Payment */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <Label className="text-base">Select Payment</Label>
                                    <Button variant="default" size="sm" className="bg-[#65b947] hover:bg-[#549639]">
                                        Add Card
                                        <span className="ml-2">+</span>
                                    </Button>
                                </div>

                                <RadioGroup
                                    value={formData.paymentMethod}
                                    onValueChange={(value) => handleInputChange("paymentMethod", value)}
                                    className="grid grid-cols-2 gap-4"
                                >
                                    <div className="flex items-center space-x-3 border border-gray-200 rounded-lg p-4 hover:border-[#65b947] transition-colors">
                                        <RadioGroupItem value="mastercard" id="mastercard" className="border-[#65b947] text-[#65b947]" />
                                        <div className="flex items-center gap-3 flex-1">
                                            <div className="flex items-center gap-1">
                                                <div className="w-6 h-6 rounded-full bg-[#eb001b]" />
                                                <div className="w-6 h-6 rounded-full bg-[#f79e1b] -ml-3" />
                                            </div>
                                            <div>
                                                <p className="font-medium">MasterCard</p>
                                                <p className="text-sm text-gray-500">**** **** 2530</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3 border border-gray-200 rounded-lg p-4 hover:border-[#65b947] transition-colors">
                                        <RadioGroupItem value="credit-card" id="credit-card" className="border-[#65b947] text-[#65b947]" />
                                        <div className="flex items-center gap-3 flex-1">
                                            <div className="w-8 h-8 bg-[#fbbf24] rounded flex items-center justify-center">
                                                <span className="text-white text-xs">💳</span>
                                            </div>
                                            <div>
                                                <p className="font-medium">Credit Card</p>
                                                <p className="text-sm text-gray-500">**** **** 2530</p>
                                            </div>
                                        </div>
                                    </div>
                                </RadioGroup>
                            </div>

                            {/* Use Locals */}
                            <div className="space-y-4">
                                <Label className="text-base">Use Locals</Label>
                                <RadioGroup
                                    value={formData.paymentMethod}
                                    onValueChange={(value) => handleInputChange("paymentMethod", value)}
                                    className="space-y-3"
                                >
                                    <div className="flex items-center space-x-3 border border-gray-200 rounded-lg p-4 hover:border-[#65b947] transition-colors">
                                        <RadioGroupItem value="fnb" id="fnb" className="border-[#65b947] text-[#65b947]" />
                                        <img src="/fnb-bank-logo.png" alt="FNB" className="h-8 object-contain" />
                                    </div>

                                    <div className="flex items-center space-x-3 border border-gray-200 rounded-lg p-4 hover:border-[#65b947] transition-colors">
                                        <RadioGroupItem
                                            value="standard-bank"
                                            id="standard-bank"
                                            className="border-[#65b947] text-[#65b947]"
                                        />
                                        <img src="/standard-bank-logo.png" alt="Standard Bank" className="h-8 object-contain" />
                                    </div>

                                    <div className="flex items-center space-x-3 border border-gray-200 rounded-lg p-4 hover:border-[#65b947] transition-colors">
                                        <RadioGroupItem value="absa" id="absa" className="border-[#65b947] text-[#65b947]" />
                                        <img src="/generic-bank-logo.png" alt="ABSA" className="h-8 object-contain" />
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>
                    )}
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-4 border-t">
                    <Button
                        variant="outline"
                        onClick={handleBack}
                        disabled={step === 1}
                        className="border-[#65b947] text-[#65b947] hover:bg-[#65b947] hover:text-white px-8 bg-transparent"
                    >
                        Back
                    </Button>
                    <Button onClick={handleNext} className="bg-[#65b947] hover:bg-[#549639] text-white px-8">
                        {step === 6 ? "Submit" : "Continue"}
                    </Button>
                </div>
            </DialogContent>
        </Dialog >
    )
}
