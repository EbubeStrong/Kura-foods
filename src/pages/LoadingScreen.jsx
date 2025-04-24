"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { KSFLogo } from "../components/Icons"

const LoadingScreen = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Automatically navigate to onboarding screen after 2 seconds
    const timer = setTimeout(() => {
      navigate("/onboarding")
    }, 2000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0e2909]">
      <div className="w-32 h-32">
        <KSFLogo color="#34c759" />
      </div>
      <div className="absolute bottom-6 w-16 h-1 bg-white rounded-full"></div>
    </div>
  )
}

export default LoadingScreen
