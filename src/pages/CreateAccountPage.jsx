"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { ArrowLeft } from "../components/Icons"
import { toast } from "sonner"
import { useAuth } from "../context/AuthContext"
import elipseLogo from "../assets/TopRightEllipse.png"

// Password validation
const passwordRegex = {
  minLength: /.{8,}/,
  hasUpperCase: /[A-Z]/,
  hasLowerCase: /[a-z]/,
  hasNumber: /[0-9]/,
  hasSpecial: /[!@#$%^&*(),.?":{}|<>]/,
}

const CreateAccountPage = () => {
  const navigate = useNavigate()
  const { signup } = useAuth()
  const [userType, setUserType] = useState("recipient")
  const [currentStep, setCurrentStep] = useState(1)
  const [progress, setProgress] = useState(20)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  })

  const [passwordErrors, setPasswordErrors] = useState({
    minLength: true,
    hasUpperCase: true,
    hasLowerCase: true,
    hasNumber: true,
    hasSpecial: true,
    passwordsMatch: true,
  })

  // Update progress based on current step
  useEffect(() => {
    const progressPercentage = Math.min(currentStep * 20, 100)
    setProgress(progressPercentage)
  }, [currentStep])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Validate password if password field is being updated
    if (name === "password") {
      validatePassword(value, formData.confirmPassword)
    }

    // Check if passwords match if confirmPassword field is being updated
    if (name === "confirmPassword") {
      validatePassword(formData.password, value)
    }
  }

  const validatePassword = (password, confirmPassword) => {
    setPasswordErrors({
      minLength: !passwordRegex.minLength.test(password),
      hasUpperCase: !passwordRegex.hasUpperCase.test(password),
      hasLowerCase: !passwordRegex.hasLowerCase.test(password),
      hasNumber: !passwordRegex.hasNumber.test(password),
      hasSpecial: !passwordRegex.hasSpecial.test(password),
      passwordsMatch: password !== confirmPassword,
    })
  }

  const handleUserTypeChange = (type) => {
    setUserType(type)
  }

  const isCurrentStepValid = () => {
    switch (currentStep) {
      case 1:
        return userType !== ""
      case 2:
        return formData.firstName.trim() !== ""
      case 3:
        return formData.lastName.trim() !== ""
      case 4:
        return formData.email.includes("@") && formData.email.includes(".")
      case 5:
        return formData.phoneNumber.trim() !== ""
      case 6:
        return (
          formData.password.trim() !== "" &&
          formData.confirmPassword.trim() !== "" &&
          !Object.values(passwordErrors).some((error) => error)
        )
      default:
        return false
    }
  }

  const nextStep = () => {
    if (isCurrentStepValid()) {
      if (currentStep < 6) {
        setCurrentStep(currentStep + 1)
      } else {
        handleSubmit()
      }
    } else {
      toast.error("Please complete the current step correctly")
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    } else {
      navigate("/onboarding")
    }
  }

  const handleSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match")
      return
    }

    try {
      const success = await signup({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        userType: userType,
      })

      if (success) {
        toast.success("Account created successfully!")
        navigate("/home")
      } else {
        toast.error("Failed to create account. Email might already be in use.")
      }
    } catch (error) {
      toast.error("An error occurred during signup")
      console.error(error)
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h2 className="text-lg font-medium mb-4">I am a...</h2>
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
          </>
        )
      case 2:
        return (
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              autoFocus
            />
          </div>
        )
      case 3:
        return (
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              autoFocus
            />
          </div>
        )
      case 4:
        return (
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
              autoFocus
            />
          </div>
        )
      case 5:
        return (
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              autoFocus
            />
          </div>
        )
      case 6:
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleInputChange}
                autoFocus
              />
            </div>
            <div className="space-y-2 mt-4">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>

            {formData.password && (
              <div className="mt-4 text-sm">
                <p className="font-medium mb-2">Password must have:</p>
                <ul className="space-y-1">
                  <li className={passwordErrors.minLength ? "text-red-500" : "text-green-500"}>
                    ✓ At least 8 characters
                  </li>
                  <li className={passwordErrors.hasUpperCase ? "text-red-500" : "text-green-500"}>
                    ✓ At least one uppercase letter
                  </li>
                  <li className={passwordErrors.hasLowerCase ? "text-red-500" : "text-green-500"}>
                    ✓ At least one lowercase letter
                  </li>
                  <li className={passwordErrors.hasNumber ? "text-red-500" : "text-green-500"}>
                    ✓ At least one number
                  </li>
                  <li className={passwordErrors.hasSpecial ? "text-red-500" : "text-green-500"}>
                    ✓ At least one special character
                  </li>
                </ul>
                {formData.confirmPassword && (
                  <p className={passwordErrors.passwordsMatch ? "text-red-500 mt-2" : "text-green-500 mt-2"}>
                    {passwordErrors.passwordsMatch ? "Passwords don't match" : "Passwords match"}
                  </p>
                )}
              </div>
            )}
          </>
        )
      default:
        return null
    }
  }

  return (
    <>
      <div className="relative w-full">
        <div className="absolute left-0 top-0">
          <img src={elipseLogo || "/placeholder.svg"} alt="" />
        </div>
      </div>

      <div className="w-full p-6 relative">
        <div className="flex flex-col gap-3 items-start mb-6">
          <button className="p-1" onClick={prevStep}>
            <ArrowLeft />
          </button>
          <div className="shadow w-full h-3 bg-white rounded-full overflow-hidden">
            <div
              className="h-full bg-[#34c759] rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <h1 className="text-2xl font-semibold mb-6">Create an account</h1>

        <form className="space-y-4">
          {renderStepContent()}

          <Button
            type="button"
            onClick={nextStep}
            className={`w-full mt-6 ${
              isCurrentStepValid() ? "bg-[#34c759] hover:bg-[#2eb350] cursor-pointer" : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isCurrentStepValid()}
          >
            {currentStep < 6 ? "Continue" : "Sign Up"}
          </Button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-[#34c759] underline">
            login instead
          </a>
        </p>
      </div>
    </>
  )
}

export default CreateAccountPage
