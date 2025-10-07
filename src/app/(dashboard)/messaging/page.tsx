"use client"

import { useState } from "react"
import { Search, Phone, Paperclip, ImageIcon, Mic, Download } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Mock data for chats
const chats = [
    {
        id: 1,
        name: "James Smith",
        avatar: "/profile.svg",
        lastMessage: "Last weekend's mountain",
        time: "20:14",
        unread: 1,
        online: false,
    },
    {
        id: 2,
        name: "Jerome Bell",
        avatar: "/profile.svg",
        lastMessage: "Let talk about it next frida",
        time: "03:15",
        unread: 4,
        online: true,
    },
    {
        id: 3,
        name: "Ralph Edwards",
        avatar: "/profile.svg",
        lastMessage: "Send your cv in pdf",
        time: "22:23",
        unread: 2,
        online: false,
    },
    {
        id: 4,
        name: "Jhon Doe",
        avatar: "/profile.svg",
        lastMessage: "Your visa will ready in 2weeks",
        time: "2d ago",
        unread: 0,
        online: true,
    },
    {
        id: 5,
        name: "Mr Brandon",
        avatar: "/profile.svg",
        lastMessage: "Let discuss about it",
        time: "Yesterday",
        unread: 0,
        online: false,
    },
    {
        id: 6,
        name: "Bon Tertius",
        avatar: "/profile.svg",
        lastMessage: "Last weekend's mountain",
        time: "4d ago",
        unread: 1,
        online: false,
    },
    {
        id: 7,
        name: "Shukrani B",
        avatar: "/profile.svg",
        lastMessage: "Last weekend's mountain",
        time: "4d ago",
        unread: 0,
        online: false,
    },
    {
        id: 8,
        name: "James Smith",
        avatar: "/profile.svg",
        lastMessage: "Last weekend's mountain",
        time: "20:14",
        unread: 1,
        online: false,
    },
]

// Mock messages for the active chat
const messages = [
    { id: 1, text: "Good morning! How did you sleep last night?", sent: false, time: "08:00" },
    {
        id: 2,
        text: "Good morning! I slept pretty well, thanks. How about you?",
        sent: true,
        time: "08:02",
    },
    { id: 3, text: "I had a decent sleep too. Any plans for today?", sent: false, time: "08:03" },
    { id: 4, text: "Good morning! Not yet, just about to. What about you?", sent: true, time: "08:05" },
    {
        id: 5,
        text: "I had some toast and coffee. Ready to tackle the day?",
        sent: false,
        time: "08:06",
    },
    { id: 6, text: "Good morning! How's the weather looking today?", sent: true, time: "08:08" },
    { id: 7, text: "Good morning! How did you sleep last night?", sent: false, time: "08:10" },
    { id: 8, type: "voice", duration: "0:20", sent: true, time: "08:12" },
    { id: 9, type: "file", fileName: "School_registration.pdf", sent: false, time: "08:15" },
]

export default function MessagingPage() {
    const [selectedChat, setSelectedChat] = useState(chats[3]) // Jhon Doe selected by default
    const [messageText, setMessageText] = useState("")

    return (
        <div className="h-[calc(100vh-96px)] bg-card-bg/30">
            {/* Page Header */}
            <div className="bg-card-bg px-8 py-4 border border-border rounded-lg m-6">
                <h1 className="text-2xl font-semibold text-foreground">Chats</h1>
            </div>

            <div className="flex h-[calc(100%-73px)] gap-4 mx-6">
                {/* Chat List - Left Column */}
                <div className="w-[400px]  bg-white rounded-lg  flex flex-col">
                    {/* Search */}
                    <div className="p-4 ">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input placeholder="Search a discussion" className="pl-10 bg-card-bg border-none" />
                        </div>
                    </div>

                    {/* Chat List */}
                    <div className="flex-1 overflow-y-auto">
                        {chats.map((chat, index) => (
                            <button
                                key={chat.id}
                                onClick={() => setSelectedChat(chat)}
                                className={cn(
                                    "w-full p-4 flex items-center gap-3 hover:bg-card-bg/50 transition-colors ",
                                    selectedChat.id === chat.id && "bg-card-bg/50",
                                    index % 2 === 0 && "bg-white",
                                )}
                            >
                                <div className="relative">
                                    <img
                                        src={chat.avatar || "/placeholder.svg"}
                                        alt={chat.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    {chat.online && (
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-white" />
                                    )}
                                </div>
                                <div className="flex-1 text-left min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="font-semibold text-sm text-foreground">{chat.name}</h3>
                                        <span
                                            className={cn("text-xs", chat.unread > 0 ? "text-primary font-medium" : "text-muted-foreground")}
                                        >
                                            {chat.time}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                                </div>
                                {chat.unread > 0 && (
                                    <div className="w-6 h-6 rounded-full bg-primary text-white text-xs font-semibold flex items-center justify-center flex-shrink-0">
                                        {chat.unread}
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Chat Conversation - Right Column */}
                <div className="flex-1 rounded-lg flex flex-col bg-white">
                    {/* Chat Header */}
                    <div className="px-8 py-4  flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <img
                                    src={"/profile.svg"}
                                    alt={selectedChat.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                {selectedChat.online && (
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-white" />
                                )}
                            </div>
                            <div>
                                <h2 className="font-semibold text-foreground">{selectedChat.name}</h2>
                                {selectedChat.online && <p className="text-sm text-primary">online</p>}
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <Phone className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-8 space-y-4">
                        {messages.map((message) => (
                            <div key={message.id} className={cn("flex", message.sent ? "justify-end" : "justify-start")}>
                                {message.type === "voice" ? (
                                    <div className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 max-w-xs">
                                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                                            <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-white border-b-4 border-b-transparent ml-0.5" />
                                        </div>
                                        <div className="flex-1 flex items-center gap-1">
                                            {Array.from({ length: 15 }).map((_, i) => (
                                                <div key={i} className="w-0.5 h-2 bg-white/60 rounded-full" />
                                            ))}
                                        </div>
                                        <span className="text-xs">{message.duration}</span>
                                    </div>
                                ) : message.type === "file" ? (
                                    <div className="bg-primary/10 px-4 py-3 rounded-lg flex items-center gap-3 max-w-xs">
                                        <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center">
                                            <Download className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-sm font-medium text-foreground">{message.fileName}</span>
                                    </div>
                                ) : (
                                    <div
                                        className={cn(
                                            "px-4 py-2 rounded-lg max-w-md",
                                            message.sent ? "bg-primary text-white" : "bg-muted text-foreground",
                                        )}
                                    >
                                        <p className="text-sm">{message.text}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Message Input */}
                    <div className="p-6 border-t border-border">
                        <div className="flex items-center gap-3">
                            <div className="flex-1 relative">
                                <Input
                                    placeholder="Message"
                                    value={messageText}
                                    onChange={(e) => setMessageText(e.target.value)}
                                    className="pr-20 bg-card-bg border-none"
                                />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <Paperclip className="w-4 h-4 text-primary" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <ImageIcon className="w-4 h-4 text-primary" />
                                    </Button>
                                </div>
                            </div>
                            <Button size="icon" className="bg-primary hover:bg-primary/90 h-10 w-10">
                                <Mic className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
