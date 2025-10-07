"use client";
import { Customer } from "@/types/Customers";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";
import Image from "next/image";

function CustomerStep1({
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

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="md:max-w-5xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold mb-2">Choose how you’d like to register this Customer</DialogTitle>
                </DialogHeader>
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
                <DialogFooter>
                    <button
                        onClick={onClose}
                        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
                    >
                        Continue
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default CustomerStep1;
