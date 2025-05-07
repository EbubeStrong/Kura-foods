"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

// Create context
const AuthContext = createContext(undefined)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  // Login function
  const login = async (email, password) => {
    setLoading(true)
    try {
      // Get all users from storage
      const usersJson = localStorage.getItem("users")
      const users = usersJson ? JSON.parse(usersJson) : []

      // Find matching user
      const foundUser = users.find((u) => u.email === email && u.password === password)

      if (foundUser) {
        // Store in session storage
        sessionStorage.setItem("user", JSON.stringify(foundUser))
        setUser(foundUser)
        setLoading(false)
        return true
      }

      setLoading(false)
      return false
    } catch (error) {
      console.error("Login error:", error)
      setLoading(false)
      return false
    }
  }

  // Signup function
  const signup = async (userData) => {
    setLoading(true)
    try {
      // Get existing users
      const usersJson = localStorage.getItem("users")
      const users = usersJson ? JSON.parse(usersJson) : []

      // Check if email already exists
      if (users.some((u) => u.email === userData.email)) {
        setLoading(false)
        return false
      }

      // Add new user
      users.push(userData)

      // Save to localStorage
      localStorage.setItem("users", JSON.stringify(users))

      // Save to session
      sessionStorage.setItem("user", JSON.stringify(userData))
      setUser(userData)

      setLoading(false)
      return true
    } catch (error) {
      console.error("Signup error:", error)
      setLoading(false)
      return false
    }
  }

  // Logout function
  const logout = () => {
    sessionStorage.removeItem("user")
    setUser(null)
    navigate("/login")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
