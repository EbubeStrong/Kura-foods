"use client"

import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"

const OnboardingScreen = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-[#0e2909] bg-opacity-95 text-white p-6 relative overflow-hidden">
      {/* Food images as background decorations */}
      <div className="absolute top-20 right-0 w-16 h-16 rounded-full bg-yellow-200 opacity-70"></div>
      <div className="absolute top-40 left-10 w-10 h-10 rounded-sm bg-red-400 rotate-45 opacity-70"></div>
      <div className="absolute bottom-40 right-5 w-14 h-14 rounded-full bg-yellow-200 opacity-70"></div>
      <div className="absolute bottom-60 left-0 w-12 h-12 rounded-full bg-yellow-200 opacity-70"></div>

      {/* Status bar */}
      <div className="w-full flex justify-between items-center py-2">
        <span className="text-sm">9:41</span>
        <div className="flex items-center space-x-1">
          <div className="h-3 w-3 rounded-full bg-white"></div>
          <div className="h-3 w-3 rounded-full bg-white"></div>
          <div className="h-3 w-3 rounded-full bg-white"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center text-center mt-20">
        <h1 className="text-3xl font-bold mb-2">SAVE / SHARE / DONATE</h1>
        <p className="text-lg">Save the world from hunger and say no to food wastage</p>
      </div>

      {/* Buttons */}
      <div className="w-full space-y-4 mb-10">
        <Button
          variant="outline"
          className="w-full py-6 text-white border-white hover:bg-white/10"
          onClick={() => navigate("/create-account")}
        >
          Create an account
        </Button>
        <Button className="w-full py-6 bg-[#34c759] hover:bg-[#2eb350] text-white" onClick={() => navigate("/login")}>
          Login
        </Button>
      </div>

      {/* Bottom indicator */}
      <div className="w-16 h-1 bg-white rounded-full mb-6"></div>
    </div>
  )
}

export default OnboardingScreen
