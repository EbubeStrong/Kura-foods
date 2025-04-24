"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { ArrowLeft, Eye, EyeOff, AlertTriangle } from "lucide-react"

const CreatePasswordPage = () => {
  const navigate = useNavigate()
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordsMatch, setPasswordsMatch] = useState(true)
  const [formState, setFormState] = useState("initial") // initial, filled, error

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    if (formState === "error" && e.target.value === confirmPassword) {
      setPasswordsMatch(true)
    }
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
    if (formState === "error" && e.target.value === password) {
      setPasswordsMatch(true)
    }
  }

  const handleContinue = () => {
    if (password && confirmPassword) {
      if (password === confirmPassword) {
        // Passwords match, proceed to next step
        setFormState("filled")
        // In a real app, you would save the password and navigate to the next page
        navigate("/dashboard")
      } else {
        // Passwords don't match
        setPasswordsMatch(false)
        setFormState("error")
      }
    }
  }

  const handleVerify = () => {
    if (password === confirmPassword) {
      // Passwords verified, proceed to next step
      navigate("/dashboard")
    } else {
      setPasswordsMatch(false)
      setFormState("error")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e1ffe1] to-[#fafafa] p-6">
      <div className="flex items-center mb-6">
        <button className="p-1" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </button>
        <div className="ml-4 flex-1 h-1 bg-white rounded-full overflow-hidden">
          <div className="h-full w-2/3 bg-[#34c759] rounded-full"></div>
        </div>
      </div>

      <h1 className="text-2xl font-semibold mb-2">Create a Secure Password</h1>
      <p className="text-gray-600 mb-6">Create a secure password for you account</p>

      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
              className={formState === "error" && !passwordsMatch ? "border-red-500" : ""}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Enter password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className={formState === "error" && !passwordsMatch ? "border-red-500" : ""}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={toggleConfirmPasswordVisibility}
            >
              {confirmPasswordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {formState === "error" && !passwordsMatch && (
            <div className="flex items-center text-red-500 text-sm mt-1">
              <AlertTriangle size={14} className="mr-1" />
              Password do not match
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <span className="bg-[#e1ffe1] text-black text-xs px-3 py-1 rounded-full">Use alphabet and number</span>
          <span className="bg-[#e1ffe1] text-black text-xs px-3 py-1 rounded-full">Use lower & upper case letter</span>
          <span className="bg-[#e1ffe1] text-black text-xs px-3 py-1 rounded-full">Use Symbol</span>
        </div>

        <Button
          type="button"
          className={`w-full mt-6 ${formState === "filled" ? "bg-[#34c759] hover:bg-[#2eb350]" : "bg-gray-400"}`}
          onClick={formState === "filled" ? handleVerify : handleContinue}
        >
          {formState === "filled" ? "Verify password" : "Continue"}
        </Button>
      </form>

      <div className="absolute bottom-6 w-full left-0 flex justify-center">
        <div className="w-16 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  )
}

export default CreatePasswordPage
