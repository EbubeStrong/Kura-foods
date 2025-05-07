"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { toast } from "sonner"
import { useAuth } from "../context/AuthContext"
import elipseLogo from "../assets/TopRightEllipse.png"
import Logo from "../assets/images/logo.png"

const LoginPage = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const isFormFilled = () => {
    return formData.email && formData.password
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isFormFilled()) {
      setIsLoading(true)
      try {
        const success = await login(formData.email, formData.password)

        if (success) {
          // Get the user type from session storage to determine where to navigate
          const userJson = sessionStorage.getItem("user")
          const user = userJson ? JSON.parse(userJson) : null

          toast.success("Login successful!")

          // Navigate based on user type
          if (user && user.userType === "donor") {
            navigate("/donor-home")
          } else {
            navigate("/home")
          }
        } else {
          toast.error("Invalid email or password")
        }
      } catch (error) {
        toast.error("An error occurred during login")
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <>
      <div className="relative w-full">
        {/* Layer 1: Background glow / curve */}
        <div className="absolute z-0 top-[-80px] left-[-100px] w-[420px] h-[260px] rounded-[30%_10%_60%_10%] animate-gradient-move shadow-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-30"></div>

        {/* Layer 2: Ellipse logo */}
        <div className="absolute left-0 top-0 z-10">
          <img src={elipseLogo || "/placeholder.svg"} alt="" className="z-[100] w-[350px]" />

          {/* Layer 3: Center logo */}
          <div className="absolute left-0 z-20 ml-[-4rem] mt-[-10px] top-4 flex flex-col gap-5 justify-center items-center w-full">
            <img src={Logo || "/placeholder.svg"} alt="Logo" className="w-16 h-16" />

            <h1 className="text-3xl font-bold text-gray-800 mb-8">
              Welcome <br /> Back
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full px-6 max-w-md mx-auto absolute top-[12rem] flex items-center flex-col justify-center z-50 rounded-xl">
        <form onSubmit={handleSubmit} className="space-y-6 shadow-lg p-4 w-full mx-auto ml-[30px]">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-medium">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className="border border-gray-300 focus:ring-2 focus:ring-[#34c759] focus:border-[#34c759] rounded-md px-4 py-2"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700 font-medium">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              className="border border-gray-300 focus:ring-2 focus:ring-[#34c759] focus:border-[#34c759] rounded-md px-4 py-2"
            />
          </div>

          <Button
            type="submit"
            className={`w-full py-3 text-white text-lg font-semibold rounded-md transition ${
              isFormFilled() ? "bg-[#34c759] hover:bg-[#2eb350]" : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isFormFilled() || isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>

        <p className="text-center mt-8 text-gray-600 text-sm">
          Don't have an account?{" "}
          <a href="/create-account" className="text-[#34c759] font-medium hover:underline">
            Create an account
          </a>
        </p>
      </div>
    </>
  )
}

export default LoginPage
