"use client"

import { useState } from "react"
import "./CreateAccountForm.css"
import { ArrowLeft } from "./Icons"

const CreateAccountForm = () => {
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
    <div className="create-account-container">
      <div className="header">
        <button className="back-button">
          <ArrowLeft />
        </button>
        <div className="progress-bar">
          <div className="progress-indicator"></div>
        </div>
      </div>

      <h1 className="title">Create an account</h1>

      <div className="user-type-toggle">
        <button
          className={`toggle-button ${userType === "recipient" ? "active" : ""}`}
          onClick={() => handleUserTypeChange("recipient")}
        >
          Recipient
        </button>
        <button
          className={`toggle-button ${userType === "donor" ? "active" : ""}`}
          onClick={() => handleUserTypeChange("donor")}
        >
          Donor
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className={`signup-button ${isFormFilled() ? "active" : ""}`} disabled={!isFormFilled()}>
          Sign Up
        </button>
      </form>

      <p className="login-link">
        Already have an account? <a href="#">login instead</a>
      </p>
    </div>
  )
}

export default CreateAccountForm
