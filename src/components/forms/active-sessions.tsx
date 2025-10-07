"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Session {
    id: string
    device: string
    loginTime: string
}

interface ActiveSessionsDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    sessions?: Session[]
}

const defaultSessions: Session[] = [
    {
        id: "1",
        device: "Samsung Galaxy A13",
        loginTime: "Login attempt on 16/03/2025 at 15:13",
    },
    {
        id: "2",
        device: "Windows 10, Google Chrome",
        loginTime: "Login attempt on 16/03/2025 at 15:13",
    },
]

export function ActiveSessionsDialog({ open, onOpenChange, sessions = defaultSessions }: ActiveSessionsDialogProps) {
    const handleLogout = (sessionId: string) => {
        console.log("[v0] Logging out session:", sessionId)
        // Handle single session logout
    }

    const handleLogoutAll = () => {
        console.log("[v0] Logging out all sessions")
        // Handle logout all sessions
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold">Active Sessions</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    {/* Session Cards */}
                    {sessions.map((session) => (
                        <div key={session.id} className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                            <div>
                                <p className="font-medium text-gray-900">{session.device}</p>
                                <p className="text-sm text-gray-500 mt-1">{session.loginTime}</p>
                            </div>
                            <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => handleLogout(session.id)}
                                className="bg-[#dc2626] hover:bg-[#b91c1c]"
                            >
                                Logout
                            </Button>
                        </div>
                    ))}

                    {/* Logout All Button */}
                    <div className="flex justify-end pt-4">
                        <Button onClick={handleLogoutAll} className="bg-[#dc2626] hover:bg-[#b91c1c] text-white px-6">
                            Logout on both Devices
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
