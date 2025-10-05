"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ImagePlus } from "lucide-react"

export default function AdvancedSettingsPage() {
  const [activeTab, setActiveTab] = useState<"account" | "security" | "notifications">("account")

  return (
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

      {/* Other tabs placeholder */}
      {activeTab === "security" && (
        <div className="text-center py-12 text-muted-foreground">Login & Security settings coming soon...</div>
      )}
      {activeTab === "notifications" && (
        <div className="text-center py-12 text-muted-foreground">Notification settings coming soon...</div>
      )}
    </div>
  )
}
