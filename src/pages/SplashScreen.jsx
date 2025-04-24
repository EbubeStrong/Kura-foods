"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { KSFLogo } from "../components/Icons"

const SplashScreen = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Automatically navigate to loading screen after 2 seconds
    const timer = setTimeout(() => {
      navigate("/loading")
    }, 2000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-64 h-64">
        <KSFLogo />
      </div>
      <div className="absolute bottom-6 w-16 h-1 bg-black rounded-full"></div>
    </div>
  )
}

export default SplashScreen
