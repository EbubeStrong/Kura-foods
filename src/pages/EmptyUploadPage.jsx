"use client"

import { useState } from "react"

import { useNavigate } from "react-router-dom"
import { Search, Home, Maximize2, FileText, User, Plus } from "lucide-react"
import { Avatar } from "../components/ui/avatar"
import { Input } from "../components/ui/input"

const EmptyUploadPage = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("tracking")

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Header */}
      <header className="bg-[#34c759] text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button className="p-1">📍</button>
            <span className="text-sm ml-1">Enter your location</span>
          </div>
          <div className="flex items-center">
            <span className="text-xs mr-1">Welcome</span>
            <Avatar className="h-6 w-6 border-2 border-white">
              <img src="/placeholder.svg?height=24&width=24" alt="User" />
            </Avatar>
          </div>
        </div>

        {/* Search */}
        <div className="mt-4 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search..." className="pl-10 bg-white text-black rounded-full" />
        </div>
      </header>

      {/* Empty State */}
      <main className="p-4 flex flex-col items-center justify-center h-[70vh]">
        <div className="bg-gray-100 rounded-lg p-8 w-full max-w-md text-center">
          <div className="mb-4">
            {/* Empty state illustration */}
            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-4xl text-gray-400">📦</span>
            </div>
          </div>
          <h2 className="text-lg font-semibold mb-2">No items uploaded</h2>
          <p className="text-gray-500 text-sm mb-4">Click on the plus button to upload new items</p>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center h-16">
        <button
          className={`flex flex-col items-center justify-center text-xs ${
            activeTab === "home" ? "text-[#34c759]" : "text-gray-500"
          }`}
          onClick={() => navigate("/dashboard")}
        >
          <Home size={20} />
          <span>Home</span>
        </button>
        <button
          className={`flex flex-col items-center justify-center text-xs ${
            activeTab === "tracking" ? "text-[#34c759]" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("tracking")}
        >
          <Maximize2 size={20} />
          <span>Tracking</span>
        </button>
        <button
          className={`flex flex-col items-center justify-center text-xs ${
            activeTab === "invoice" ? "text-[#34c759]" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("invoice")}
        >
          <FileText size={20} />
          <span>Invoice</span>
        </button>
        <button
          className={`flex flex-col items-center justify-center text-xs ${
            activeTab === "profile" ? "text-[#34c759]" : "text-gray-500"
          }`}
          onClick={() => navigate("/profile")}
        >
          <User size={20} />
          <span>Profile</span>
        </button>
      </nav>

      {/* Floating Action Button */}
      <button className="fixed right-4 bottom-20 bg-[#34c759] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
        <Plus size={24} />
      </button>
    </div>
  )
}

export default EmptyUploadPage
