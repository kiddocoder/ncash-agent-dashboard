"use client";
import { Customer } from "@/types/Customers";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";


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

function ResidentChoice({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void
}) {

    const [formData, setFormData] = useState<Customer>({
        accountType: "RESIDENT",
        refererResidentId: null,
        email: "",
        phone: "",
        pin: "",
        postalCode: "",
        city: "",
        profileSelfie: "",
    });
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
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="md:max-w-5xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold mb-2">Select an SA resident assigned to this client </DialogTitle>
                </DialogHeader>

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

                <DialogFooter>
                    <div className="flex justify-between items-center w-full">
                        <button
                            onClick={onClose}
                            className="border border-border text-black px-4 py-2 rounded-md hover:bg-primary/90"
                        >
                            Back
                        </button>
                        <button
                            onClick={onClose}
                            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
                        >
                            Continue
                        </button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default ResidentChoice;
