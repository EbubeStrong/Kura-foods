"use client"

import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"

const CongratulationsPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#34c759] text-white p-6 flex flex-col items-center justify-between">
      <div className="w-full flex justify-between items-center py-2">
        <span className="text-sm">9:41</span>
        <div className="flex items-center space-x-1">
          <div className="h-3 w-3 rounded-full bg-white"></div>
          <div className="h-3 w-3 rounded-full bg-white"></div>
          <div className="h-3 w-3 rounded-full bg-white"></div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="mb-6">
          {/* Celebration illustration */}
          <div className="w-64 h-64 relative">
            <div className="absolute top-0 left-1/4 w-12 h-12 rounded-full bg-yellow-200 opacity-70"></div>
            <div className="absolute top-1/4 right-1/4 w-10 h-10 rounded-full bg-blue-300 opacity-70"></div>
            <div className="absolute bottom-1/4 left-1/3 w-8 h-8 rounded-full bg-pink-300 opacity-70"></div>

            {/* Simple people illustration */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-end">
              <div className="flex flex-col items-center mx-2">
                <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                <div className="w-6 h-16 bg-blue-600 mt-1"></div>
                <div className="w-10 h-6 flex">
                  <div className="w-1/2 h-full bg-blue-700"></div>
                  <div className="w-1/2 h-full bg-blue-700"></div>
                </div>
              </div>
              <div className="flex flex-col items-center mx-2">
                <div className="w-10 h-10 rounded-full bg-purple-500"></div>
                <div className="w-6 h-16 bg-purple-600 mt-1"></div>
                <div className="w-10 h-6 flex">
                  <div className="w-1/2 h-full bg-purple-700"></div>
                  <div className="w-1/2 h-full bg-purple-700"></div>
                </div>
              </div>
              <div className="flex flex-col items-center mx-2">
                <div className="w-10 h-10 rounded-full bg-red-500"></div>
                <div className="w-6 h-16 bg-red-600 mt-1"></div>
                <div className="w-10 h-6 flex">
                  <div className="w-1/2 h-full bg-red-700"></div>
                  <div className="w-1/2 h-full bg-red-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4">Congratulations</h1>
        <p className="text-lg">You've successfully completed your process...</p>
      </div>

      <Button className="w-full bg-black hover:bg-gray-800 text-white py-6" onClick={() => navigate("/dashboard")}>
        Sign In
      </Button>

      <div className="w-16 h-1 bg-white rounded-full mb-6"></div>
    </div>
  )
}

export default CongratulationsPage
