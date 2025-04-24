"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  Home,
  Maximize2,
  FileText,
  User,
  ArrowLeft,
  UserCircle,
  Lock,
  Database,
  HelpCircle,
  Share2,
  LogOut,
} from "lucide-react"
import { Avatar } from "../components/ui/avatar"

const GovernmentProfilePage = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("profile")

  const profileData = {
    name: "Government",
    profession: "Politics",
    email: "******",
  }

  const menuItems = [
    { icon: <UserCircle size={20} />, label: "Edit Profile" },
    { icon: <Lock size={20} />, label: "Privacy" },
    { icon: <Database size={20} />, label: "Data and Storage" },
    { icon: <HelpCircle size={20} />, label: "Theme" },
    { icon: <HelpCircle size={20} />, label: "Support" },
    { icon: <Share2 size={20} />, label: "Invite Friends" },
    { icon: <LogOut size={20} />, label: "Sign Out" },
  ]

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Header */}
      <header className="p-4 border-b flex items-center">
        <button className="p-1" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-semibold mx-auto">Government Agency</h1>
      </header>

      {/* Profile Info */}
      <div className="p-4 flex flex-col items-center border-b">
        <Avatar className="h-20 w-20 mb-4">
          <img src="/placeholder.svg?height=80&width=80" alt="Profile" />
        </Avatar>
      </div>

      {/* Profile Details */}
      <div className="p-4 space-y-4 border-b">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Name</span>
          <span>{profileData.name}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Profession</span>
          <span>{profileData.profession}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Email</span>
          <span>{profileData.email}</span>
        </div>
      </div>

      {/* Menu Items */}
      <div className="p-4 space-y-6">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="flex items-center w-full"
            onClick={() => (item.label === "Edit Profile" ? navigate("/edit-address") : null)}
          >
            <span className="mr-3 text-gray-600">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

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
    </div>
  )
}

export default GovernmentProfilePage
