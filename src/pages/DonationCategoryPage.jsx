"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { ArrowLeft } from "lucide-react"

const DonationCategoryPage = () => {
  const navigate = useNavigate()
  const [selectedCategories, setSelectedCategories] = useState([])

  const categories = ["Vegetable", "Fruit", "Groceries", "Protein", "Carbohydrates", "Cereals"]

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  const handleContinue = () => {
    if (selectedCategories.length > 0) {
      navigate("/congratulations")
    }
  }

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="flex items-center mb-6">
        <button className="p-1" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </button>
      </div>

      <h1 className="text-2xl font-semibold mb-6">Choose your donation Category</h1>

      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full border ${
              selectedCategories.includes(category)
                ? "bg-[#34c759] text-white border-[#34c759]"
                : "bg-white text-black border-gray-300"
            }`}
            onClick={() => toggleCategory(category)}
          >
            {category}
          </button>
        ))}
        {/* Duplicate some categories to match the design */}
        {categories.slice(0, 3).map((category, index) => (
          <button
            key={`${category}-${index}`}
            className={`px-4 py-2 rounded-full border ${
              selectedCategories.includes(category)
                ? "bg-[#34c759] text-white border-[#34c759]"
                : "bg-white text-black border-gray-300"
            }`}
            onClick={() => toggleCategory(category)}
          >
            {category}
          </button>
        ))}
        {categories.slice(0, 5).map((category, index) => (
          <button
            key={`${category}-extra-${index}`}
            className={`px-4 py-2 rounded-full border ${
              selectedCategories.includes(category)
                ? "bg-[#34c759] text-white border-[#34c759]"
                : "bg-white text-black border-gray-300"
            }`}
            onClick={() => toggleCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <Button
        className={`w-full ${selectedCategories.length > 0 ? "bg-[#34c759] hover:bg-[#2eb350]" : "bg-gray-400"}`}
        onClick={handleContinue}
        disabled={selectedCategories.length === 0}
      >
        Continue
      </Button>

      <div className="absolute bottom-6 w-full left-0 flex justify-center">
        <div className="w-16 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  )
}

export default DonationCategoryPage
