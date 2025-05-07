"use client"

import { Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import NavSection from "../components/navigation"
import LogoutButton from "../components/LogoutButton"

function DonorHomePage() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const isBaseDonorHome = location.pathname === "/donor-home"

  return (
    <div className="container bg-neutral-100 min-h-screen">
      {/* Header */}
      <header className="bg-white p-4 shadow-sm flex items-center justify-between">
        <div className="flex items-center">
          <div
            className="w-10 h-10 bg-[#34c759] rounded-full flex items-center justify-center text-white font-bold cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            {user?.firstName?.charAt(0) || "D"}
          </div>
          <div className="ml-3">
            <h2 className="font-semibold">Welcome, {user?.firstName || "Donor"}</h2>
            <p className="text-sm text-gray-500">Donor Dashboard</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <LogoutButton />
        </div>
      </header>

      {/* Main Content */}
      {isBaseDonorHome ? (
        <main className="p-4">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Donor Dashboard</h2>
            <p className="text-gray-600 mb-4">
              Thank you for joining as a donor! From here, you can manage your donations and see the impact you're
              making.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-green-800 mb-2">Your Impact</h3>
              <p className="text-green-700">You haven't made any donations yet. Start making a difference today!</p>
            </div>

            <button
              className="w-full py-3 bg-[#34c759] text-white font-semibold rounded-md"
              onClick={() => navigate("/donor-home/donation-category")}
            >
              Make Your First Donation
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-3">Your Account</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Name:</span>
                <span>
                  {user?.firstName} {user?.lastName}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Email:</span>
                <span>{user?.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Phone:</span>
                <span>{user?.phoneNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">User Type:</span>
                <span className="text-[#34c759] font-medium">Donor</span>
              </div>
            </div>

            <button
              className="w-full mt-4 py-2 border border-[#34c759] text-[#34c759] rounded-md"
              onClick={() => navigate("/profile")}
            >
              View Profile
            </button>
          </div>
        </main>
      ) : (
        <Outlet />
      )}

      <NavSection />
    </div>
  )
}

export default DonorHomePage
