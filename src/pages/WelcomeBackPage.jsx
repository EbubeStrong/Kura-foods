"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Eye, EyeOff, AlertTriangle } from "lucide-react"
import { KSFLogo } from "../components/Icons"

const WelcomeBackPage = () => {
  const navigate = useNavigate()
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [formState, setFormState] = useState("initial") // initial, filled, error
  const [errorMessage, setErrorMessage] = useState("")

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Reset error state when user types
    if (formState === "error") {
      setFormState("initial")
      setErrorMessage("")
    }
  }

  const isFormFilled = () => {
    return formData.email && formData.password
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isFormFilled()) {
      // Simulate login validation
      if (formData.email === "maryjane@gmail.com" && formData.password === "password123") {
        navigate("/dashboard")
      } else {
        setFormState("error")
        setErrorMessage("Error, you enter wrong password")
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e1ffe1] to-[#fafafa] p-6">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10">
          <KSFLogo color="#34c759" />
        </div>
        <div className="ml-2">
          <h2 className="text-[#34c759] font-semibold">Welcome</h2>
          <h2 className="text-[#34c759] font-semibold">Back</h2>
        </div>
      </div>

      <div className="mt-8 mb-6">
        <h1 className="text-2xl font-semibold">Welcome, let's get started</h1>
        <p className="text-gray-600 mt-1">To avoid traffic we make login easy for you</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              ✉
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="password" className={formState === "error" ? "text-red-500" : ""}>
              {formState === "error" ? (
                <span className="flex items-center">
                  Password <AlertTriangle size={14} className="ml-1" />
                </span>
              ) : (
                "Password"
              )}
            </Label>
          </div>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="Create a password"
              value={formData.password}
              onChange={handleInputChange}
              className={formState === "error" ? "border-red-500" : ""}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {formState === "error" && <p className="text-red-500 text-sm">{errorMessage}</p>}
        </div>

        <div className="text-right">
          <button type="button" className="text-sm text-gray-600" onClick={() => navigate("/forgot-password")}>
            Forgot password
          </button>
        </div>

        <Button
          type="submit"
          className={`w-full mt-6 ${
            isFormFilled() && formState !== "error" ? "bg-[#34c759] hover:bg-[#2eb350]" : "bg-gray-400"
          }`}
          disabled={!isFormFilled()}
        >
          Log In
        </Button>
      </form>

      <div className="absolute bottom-6 w-full left-0 flex justify-center">
        <div className="w-16 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  )
}

export default WelcomeBackPage
