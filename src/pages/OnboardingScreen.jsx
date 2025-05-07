"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Search, Bell, Menu } from "lucide-react"
import Logo from "../assets/images/logo.png"
import pineImg from "../assets/images/pine.png"
import appleImg from "../assets/images/apple.png"

const OnboardingScreen = () => {
  const navigate = useNavigate()
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showMenu, setShowMenu] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
    setShowSearch(false)
    // You could navigate to search results or filter content
  }

  return (
    <div className="relative min-h-screen">
      {/* Functional Header */}
      <header className="bg-white p-4 shadow-sm fixed top-0 left-0 right-0 z-30">
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
              <img src={Logo || "/placeholder.svg"} alt="Logo" className="w-10 h-10" />
              <h1 className="ml-2 font-bold text-lg">FoodShare</h1>
            </div>

            <div className="flex items-center space-x-3">
              <button className="p-2 rounded-full hover:bg-gray-100" onClick={() => setShowSearch(true)}>
                <Search size={20} />
              </button>
              <button
                className="p-2 rounded-full hover:bg-gray-100"
                onClick={() => alert("Notifications feature coming soon!")}
              >
                <Bell size={20} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100" onClick={() => setShowMenu(!showMenu)}>
                <Menu size={20} />
              </button>

              {showMenu && (
                <div className="absolute top-16 right-4 bg-white shadow-lg rounded-md p-2 z-50">
                  <button className="w-full text-left p-2 hover:bg-gray-100 rounded" onClick={() => navigate("/login")}>
                    Login
                  </button>
                  <button
                    className="w-full text-left p-2 hover:bg-gray-100 rounded"
                    onClick={() => navigate("/create-account")}
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#022c14] z-20 flex flex-col justify-center items-center px-6 space-y-6 text-center text-white">
        <div className="absolute top-0 right-[7rem] mt-[-30px]">
          <img src={pineImg || "/placeholder.svg"} alt="pine" className="blur-[3px] h-34 w-54" />
        </div>

        <div className="absolute top-[7rem] left-0 ml-[-7rem]">
          <img src={appleImg || "/placeholder.svg"} alt="apple" className="blur-[3px] h-34 w-54" />
        </div>

        <div className="absolute top-[5rem] right-5">
          <img src={pineImg || "/placeholder.svg"} alt="pine" className="blur-[3px] h-34 w-54" />
        </div>

        <div className="absolute flex items-center justify-center ml-[-4rem] z-0">
          <img src={appleImg || "/placeholder.svg"} alt="apple" className="blur-[3px] h-34 w-54" />
        </div>

        <div className="absolute bottom-[3rem] right-25">
          <img src={pineImg || "/placeholder.svg"} alt="pine" className="blur-[3px] h-34 w-54" />
        </div>

        <div className="absolute bottom-0 left-0 ml-[-8rem]">
          <img src={pineImg || "/placeholder.svg"} alt="pine" className="blur-[3px] h-34 w-54" />
        </div>

        <div className="z-9 mt-[4rem]">
          <h1 className="text-3xl font-bold flex-wrap">SAVE / SHARE / DONATE</h1>
          <p className="text-xl mt-5">Save the world from hunger and say no to food wastage</p>
        </div>

        <div className="w-full space-y-4 z-9 pt-[5rem]">
          <button
            className="w-full py-3 border border-green-400 text-green-400 rounded-full font-medium z-2 hover:text-white transition"
            onClick={() => navigate("/create-account")}
          >
            Create an account
          </button>
          <button
            className="w-full py-3 bg-green-500 text-black font-bold rounded-full"
            onClick={() => navigate("/login")}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  )
}

export default OnboardingScreen
