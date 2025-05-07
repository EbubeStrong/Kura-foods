// import { ChooseLocation } from "./header-ui/choose-location";
// import { UserActions } from "./header-ui/user-actions";
// import { DonationCategories } from "./header-ui/donation-categories";

// export function HomeHeader() {
//   return (
//     <section className="bg-primary-200 px-2 py-4 space-y-4 rounded-b-2xl">
//       <ChooseLocation />
//       <UserActions />
//       <DonationCategories />
//     </section>
//   );
// }




"use client"

import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { Bell, Search, MapPin, Menu } from "lucide-react"
import LogoutButton from "../LogoutButton"

export function HomeHeader() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showMenu, setShowMenu] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    // Implement search functionality
    console.log("Searching for:", searchQuery)
    setShowSearch(false)
    // You could navigate to search results or filter content
  }

  return (
    <header className="bg-white p-4 shadow-sm">
      {showSearch ? (
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#34c759]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          <button type="submit" className="bg-[#34c759] text-white p-2 rounded-r-md">
            <Search size={20} />
          </button>
          <button type="button" className="ml-2 text-gray-500" onClick={() => setShowSearch(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div
              className="w-10 h-10 bg-[#34c759] rounded-full flex items-center justify-center text-white font-bold cursor-pointer"
              onClick={() => navigate("/profile")}
            >
              {user?.firstName?.charAt(0) || "U"}
            </div>
            <div className="ml-3">
              <h2 className="font-semibold">Welcome, {user?.firstName || "User"}</h2>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin size={14} className="mr-1" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full hover:bg-gray-100" onClick={() => setShowSearch(true)}>
              <Search size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100" onClick={() => navigate("/dashboard")}>
              <Bell size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100" onClick={() => setShowMenu(!showMenu)}>
              <Menu size={20} />
            </button>

            {showMenu && (
              <div className="absolute top-16 right-4 bg-white shadow-lg rounded-md p-2 z-50">
                <button
                  className="w-full text-left p-2 hover:bg-gray-100 rounded mb-1"
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </button>
                <LogoutButton className="w-full justify-start" />
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
