"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"

const EditAddressPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    state: "Lagos",
    lga: "Amuwo odofin",
    area: "Festac",
    address: "24 rd, opp Army Barracks",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Save address and navigate back
    navigate(-1)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="p-4 border-b flex items-center">
        <button className="p-1" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-semibold mx-auto">Edit Address</h1>
      </header>

      <div className="p-4">
        <p className="text-gray-600 mb-6">Please fill in your current Address</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input id="state" name="state" value={formData.state} onChange={handleInputChange} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lga">LGA</Label>
            <Input id="lga" name="lga" value={formData.lga} onChange={handleInputChange} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="area">Area</Label>
            <Input id="area" name="area" value={formData.area} onChange={handleInputChange} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" name="address" value={formData.address} onChange={handleInputChange} />
          </div>

          <Button type="submit" className="w-full bg-gray-400 hover:bg-gray-500">
            Save
          </Button>
        </form>
      </div>
    </div>
  )
}

export default EditAddressPage
