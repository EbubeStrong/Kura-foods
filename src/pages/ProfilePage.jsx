"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Home, Maximize2, FileText, User, ArrowLeft, Edit, Bell } from "lucide-react"
import { Avatar } from "../components/ui/avatar"

const ProfilePage = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("profile")

  const profileData = {
    name: "Mcjohn philip",
    profession: "Student",
    businessId: "11111111",
    contact: "22222222222",
    location: "Lagos, Nigeria",
    fullName: "Mcjohn philip Tj",
    gender: "Male",
    dateOfBirth: "22/02/2022",
    email: "mcjohnphilip@gmail.com",
  }

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Header */}
      <header className="p-4 border-b flex items-center">
        <button className="p-1" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-semibold mx-auto">Profile</h1>
      </header>

      {/* Profile Info */}
      <div className="p-4 flex flex-col items-center border-b">
        <Avatar className="h-20 w-20 mb-2">
          <img src="/placeholder.svg?height=80&width=80" alt="Profile" />
        </Avatar>
        <h2 className="text-lg font-semibold">{profileData.name}</h2>
        <p className="text-gray-500">{profileData.profession}</p>
        <div className="flex mt-2">
          <button className="p-2">
            <Edit size={18} />
          </button>
          <button className="p-2">
            <Bell size={18} />
          </button>
        </div>
      </div>

      {/* Profile Details */}
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Profession</span>
          <span>{profileData.profession}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Business ID</span>
          <span>{profileData.businessId}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Contact</span>
          <span>{profileData.contact}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Location</span>
          <span>{profileData.location}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Full Name</span>
          <span>{profileData.fullName}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Gender</span>
          <span>{profileData.gender}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Date of Bith</span>
          <span>{profileData.dateOfBirth}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Email</span>
          <span>{profileData.email}</span>
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

export default ProfilePage
