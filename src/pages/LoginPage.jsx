"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { ArrowLeft } from "../components/Icons"

const LoginPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isFormFilled()) {
      console.log("Login submitted:", formData)
      // Add your login logic here
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e1ffe1] to-[#fafafa] p-6">
      <div className="flex items-center mb-6">
        <button className="p-1" onClick={() => navigate("/onboarding")}>
          <ArrowLeft />
        </button>
        <div className="ml-4 flex-1 h-1 bg-white rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-[#34c759] rounded-full"></div>
        </div>
      </div>

      <h1 className="text-2xl font-semibold mb-6">Login</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <Button
          type="submit"
          className={`w-full mt-6 ${isFormFilled() ? "bg-[#34c759] hover:bg-[#2eb350]" : "bg-gray-400"}`}
          disabled={!isFormFilled()}
        >
          Login
        </Button>
      </form>

      <p className="text-center mt-6 text-gray-600">
        Don't have an account?{" "}
        <a href="/create-account" className="text-[#34c759] underline">
          create an account
        </a>
      </p>
    </div>
  )
}

export default LoginPage
