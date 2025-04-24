"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { ArrowLeft } from "../components/Icons"

const CreateAccountPage = () => {
  const navigate = useNavigate()
  const [userType, setUserType] = useState("recipient")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleUserTypeChange = (type) => {
    setUserType(type)
  }

  const isFormFilled = () => {
    return formData.firstName && formData.lastName && formData.email && formData.phoneNumber
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isFormFilled()) {
      console.log("Form submitted:", { userType, ...formData })
      // Add your form submission logic here
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

      <h1 className="text-2xl font-semibold mb-6">Create an account</h1>

      <div className="flex gap-2 mb-6">
        <Button
          variant={userType === "recipient" ? "default" : "outline"}
          className={
            userType === "recipient"
              ? "flex-1 bg-[#34c759] hover:bg-[#2eb350]"
              : "flex-1 bg-[#e1ffe1] text-black hover:bg-[#d0f8d0]"
          }
          onClick={() => handleUserTypeChange("recipient")}
        >
          Recipient
        </Button>
        <Button
          variant={userType === "donor" ? "default" : "outline"}
          className={
            userType === "donor"
              ? "flex-1 bg-[#34c759] hover:bg-[#2eb350]"
              : "flex-1 bg-[#e1ffe1] text-black hover:bg-[#d0f8d0]"
          }
          onClick={() => handleUserTypeChange("donor")}
        >
          Donor
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>

        <Button
          type="submit"
          className={`w-full mt-6 ${isFormFilled() ? "bg-[#34c759] hover:bg-[#2eb350]" : "bg-gray-400"}`}
          disabled={!isFormFilled()}
        >
          Sign Up
        </Button>
      </form>

      <p className="text-center mt-6 text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="text-[#34c759] underline">
          login instead
        </a>
      </p>
    </div>
  )
}

export default CreateAccountPage
