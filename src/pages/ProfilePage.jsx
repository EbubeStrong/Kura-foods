"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Home, Maximize2, FileText, User, ArrowLeft, Edit, Bell } from "lucide-react"
import { Avatar } from "../components/ui/avatar"
import { useAuth } from "../context/AuthContext"
import LogoutButton from "../components/LogoutButton"

const ProfilePage = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("profile")
  const { user } = useAuth()

  // If user is not available, use placeholder data
  const profileData = user || {
    firstName: "User",
    lastName: "Name",
    email: "user@example.com",
    phoneNumber: "N/A",
    userType: "recipient",
  }

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Header */}
      <header className="p-4 border-b flex items-center justify-between">
        <button className="p-1" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-semibold">Profile</h1>
        <LogoutButton className="text-sm py-1 px-2" />
      </header>

      {/* Profile Info */}
      <div className="p-4 flex flex-col items-center border-b">
        <Avatar className="h-20 w-20 mb-2 bg-[#34c759] text-white">
          {user ? (
            <div className="flex items-center justify-center h-full w-full text-2xl font-bold">
              {user.firstName?.charAt(0)}
            </div>
          ) : (
            <img src="/placeholder.svg?height=80&width=80" alt="Profile" />
          )}
        </Avatar>
        <h2 className="text-lg font-semibold">
          {profileData.firstName} {profileData.lastName}
        </h2>
        <p className="text-gray-500 capitalize">{profileData.userType}</p>
        <div className="flex mt-2">
          <button className="p-2" onClick={() => navigate("/edit-profile")}>
            <Edit size={18} />
          </button>
          <button className="p-2" onClick={() => navigate("/notifications")}>
            <Bell size={18} />
          </button>
        </div>
      </div>

      {/* Profile Details */}
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">User Type</span>
          <span className="capitalize">{profileData.userType}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">First Name</span>
          <span>{profileData.firstName}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Last Name</span>
          <span>{profileData.lastName}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Email</span>
          <span>{profileData.email}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Phone Number</span>
          <span>{profileData.phoneNumber}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Address</span>
          <button className="text-gray-400" onClick={() => navigate("/edit-address")}>
            <ArrowLeft size={16} className="rotate-180" />
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center h-16">
        <button
          className={`flex flex-col items-center justify-center text-xs ${
            activeTab === "home" ? "text-[#34c759]" : "text-gray-500"
          }`}
          onClick={() => navigate("/home")}
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

export default ProfilePage
