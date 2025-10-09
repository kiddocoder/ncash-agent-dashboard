"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { ImagePlus } from "lucide-react"
import { UpdatePasswordForm } from "../_components/update-password"
import { ActiveSessionsDialog } from "../_components/active-sessions"

export default function AdvancedSettingsPage() {
  const [activeTab, setActiveTab] = useState<"account" | "security" | "notifications">("account")
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true)
  const [securityAlertsEnabled, setSecurityAlertsEnabled] = useState(true)
  const [recoveryEnabled, setRecoveryEnabled] = useState(true)
  const [updatePasswordOpen, setUpdatePasswordOpen] = useState(false)
  const [activeSessionsOpen, setActiveSessionsOpen] = useState(false)

  // Notification toggles
  const [newLoanAppEnabled, setNewLoanAppEnabled] = useState(true)
  const [docVerificationEnabled, setDocVerificationEnabled] = useState(true)
  const [pendingApprovalEnabled, setPendingApprovalEnabled] = useState(true)
  const [clientMessagesEnabled, setClientMessagesEnabled] = useState(true)
  const [paymentIssuesEnabled, setPaymentIssuesEnabled] = useState(true)
  const [systemUpdatesEnabled, setSystemUpdatesEnabled] = useState(true)

  return (
    <div className="min-h-screen bg-background">

      <div className="p-6">
        {/* Tabs */}
        <div className="flex gap-8 border-b border-border mb-8">
          <button
            onClick={() => setActiveTab("account")}
            className={`pb-3 text-sm font-medium transition-colors relative ${activeTab === "account" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
          >
            Account Setting
            {activeTab === "account" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
          </button>
          <button
            onClick={() => setActiveTab("security")}
            className={`pb-3 text-sm font-medium transition-colors relative ${activeTab === "security" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
          >
            Login & Security
            {activeTab === "security" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
          </button>
          <button
            onClick={() => setActiveTab("notifications")}
            className={`pb-3 text-sm font-medium transition-colors relative ${activeTab === "notifications" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
          >
            Notifications
            {activeTab === "notifications" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
          </button>
        </div>

        {/* Account Settings Tab */}
        {activeTab === "account" && (
          <div className="max-w-4xl">
            {/* Profile Picture */}
            <div className="mb-8">
              <Label className="text-sm font-medium mb-3 block">Your Profile Picture</Label>
              <div className="w-32 h-32 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors">
                <ImagePlus className="w-8 h-8 text-muted-foreground mb-2" />
                <span className="text-xs text-muted-foreground">Upload your</span>
                <span className="text-xs text-muted-foreground">photo</span>
              </div>
            </div>

            <div className="h-px bg-border mb-8" />

            {/* Form Fields */}
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullname" className="text-sm font-medium mb-2 block">
                    Full name
                  </Label>
                  <Input id="fullname" placeholder="Please enter your full name" className="h-12" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email
                  </Label>
                  <Input id="email" type="email" placeholder="Please enter your email" className="h-12" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="username" className="text-sm font-medium mb-2 block">
                    Username
                  </Label>
                  <Input id="username" placeholder="Please enter your username" className="h-12" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium mb-2 block">
                    Phone number
                  </Label>
                  <div className="flex gap-2">
                    <Input value="+1" readOnly className="w-16 h-12" />
                    <Input id="phone" placeholder="Please enter your phone number" className="flex-1 h-12" />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="bio" className="text-sm font-medium mb-2 block">
                  Bio
                </Label>
                <Textarea
                  id="bio"
                  placeholder="Write your Bio here e.g your hobbies, interests ETC"
                  className="min-h-[150px] resize-none"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-8">
                  Update Profile
                </Button>
                <Button type="button" variant="outline">
                  Reset
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Login & Security Tab */}
        {activeTab === "security" && (
          <div className="max-w-5xl space-y-4">
            {/* Change Password */}
            <div className="bg-white border border-border rounded-lg p-6 flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-base font-semibold mb-2">Change Password</h3>
                <p className="text-sm text-muted-foreground">
                  Update your account password to keep your information secure. You'll need to enter your current
                  password to confirm the change.
                </p>
              </div>
              <Button
                onClick={() => setUpdatePasswordOpen(true)}
                className="bg-primary cursor-pointer hover:bg-primary/90 text-white ml-6">Update Password</Button>
            </div>

            {/* Active Sessions */}
            <div className="bg-white border border-border rounded-lg p-6 flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-base font-semibold mb-2">Active Sessions</h3>
                <p className="text-sm text-muted-foreground">
                  View all devices and browsers currently logged into your account. You can sign out of any session
                  remotely.
                </p>
              </div>
              <Button
                onClick={() => setActiveSessionsOpen(true)}
                className="cursor-pointer bg-primary hover:bg-primary/90 text-white ml-6">View Devices</Button>
            </div>

            {/* Two-Factor Authentication */}
            <div className="bg-white border border-border rounded-lg p-6 flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-base font-semibold mb-2">Activate Two-Factor Authentication (2FA)</h3>
                <p className="text-sm text-muted-foreground">
                  Add an extra layer of security by requiring a second verification step (like a code from an app or
                  SMS) when you log in.
                </p>
              </div>
              <Switch checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} className="ml-6" />
            </div>

            {/* Security Alerts */}
            <div className="bg-white border border-border rounded-lg p-6 flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-base font-semibold mb-2">Security Alerts</h3>
                <p className="text-sm text-muted-foreground">
                  Get instant email or SMS notifications for important security events like new logins or password
                  changes.
                </p>
              </div>
              <Switch checked={securityAlertsEnabled} onCheckedChange={setSecurityAlertsEnabled} className="ml-6" />
            </div>

            {/* Recovery Email / Phone */}
            <div className="bg-white border border-border rounded-lg p-6 flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-base font-semibold mb-2">Recovery Email / Phone</h3>
                <p className="text-sm text-muted-foreground">
                  Set or update your backup contact info to regain access if you ever lose your password or 2FA device.
                </p>
              </div>
              <Switch checked={recoveryEnabled} onCheckedChange={setRecoveryEnabled} className="ml-6" />
            </div>

            {/* Logout */}
            <div className="bg-white border border-border rounded-lg p-6 flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-base font-semibold mb-2">Logout</h3>
                <p className="text-sm text-muted-foreground">Logout from this account</p>
              </div>
              <Button variant="destructive" className="ml-6">
                Logout
              </Button>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === "notifications" && (
          <div className="max-w-5xl space-y-4">
            {/* New Loan Application */}
            <div className="bg-white border border-border rounded-lg p-6 flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-base font-semibold mb-2">New Loan Application</h3>
                <p className="text-sm text-muted-foreground">
                  Get notified when a new borrower submits a loan application assigned to you.
                </p>
              </div>
              <Switch checked={newLoanAppEnabled} onCheckedChange={setNewLoanAppEnabled} className="ml-6" />
            </div>

            {/* Document Verification Required */}
            <div className="bg-white border border-border rounded-lg p-6 flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-base font-semibold mb-2">Document Verification Required</h3>
                <p className="text-sm text-muted-foreground">
                  Alert when a client uploads documents that need your review or approval.
                </p>
              </div>
              <Switch checked={docVerificationEnabled} onCheckedChange={setDocVerificationEnabled} className="ml-6" />
            </div>

            {/* Pending Approval Tasks */}
            <div className="bg-white border border-border rounded-lg p-6 flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-base font-semibold mb-2">Pending Approval Tasks</h3>
                <p className="text-sm text-muted-foreground">
                  Reminders for loans waiting on your approval or underwriting decision.
                </p>
              </div>
              <Switch checked={pendingApprovalEnabled} onCheckedChange={setPendingApprovalEnabled} className="ml-6" />
            </div>

            {/* Client Messages / Inquiries */}
            <div className="bg-white border border-border rounded-lg p-6 flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-base font-semibold mb-2">Client Messages / Inquiries</h3>
                <p className="text-sm text-muted-foreground">
                  Instant alerts when a borrower sends a message through the portal or support channel.
                </p>
              </div>
              <Switch checked={clientMessagesEnabled} onCheckedChange={setClientMessagesEnabled} className="ml-6" />
            </div>

            {/* Payment Processing Issues */}
            <div className="bg-white border border-border rounded-lg p-6 flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-base font-semibold mb-2">Payment Processing Issues</h3>
                <p className="text-sm text-muted-foreground">
                  Instant alerts when a borrower sends a message through the portal or support channel.
                </p>
              </div>
              <Switch checked={paymentIssuesEnabled} onCheckedChange={setPaymentIssuesEnabled} className="ml-6" />
            </div>

            {/* System & Policy Updates */}
            <div className="bg-white border border-border rounded-lg p-6 flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-base font-semibold mb-2">System & Policy Updates</h3>
                <p className="text-sm text-muted-foreground">
                  Important announcements about platform changes, rate updates, or new compliance rules.
                </p>
              </div>
              <Switch checked={systemUpdatesEnabled} onCheckedChange={setSystemUpdatesEnabled} className="ml-6" />
            </div>
          </div>
        )}
      </div>
      <UpdatePasswordForm open={updatePasswordOpen} onOpenChange={setUpdatePasswordOpen} />
      <ActiveSessionsDialog open={activeSessionsOpen} onOpenChange={setActiveSessionsOpen} />
    </div>
  )
}
