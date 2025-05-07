"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useMemo } from "react"
import { Search, Home, Maximize2, FileText, User, MessageCircle, Heart, Share2, Plus } from "lucide-react"
import { Avatar } from "../components/ui/avatar"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { useAuth } from "../context/AuthContext"

const DashboardPage = () => {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("home")
  const [showComments, setShowComments] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  // 👇 Added state for API posts
  const [apiPosts, setApiPosts] = useState([])
  const [loadingPosts, setLoadingPosts] = useState(true)

  const categories = ["All", "NGOs", "Individual", "Government"]

  const posts = [
    {
      id: 1,
      author: "John Carter",
      role: "NGO Activist",
      location: "London, UK",
      content:
        "Hey guys, I've just donated lot of goods to the people now and they were so happy, please share some good today and make the world better",
      likes: 24,
      comments: 8,
      shares: 3,
      timeAgo: "11 mins",
    },
    {
      id: 2,
      author: "Chicken Store",
      role: "Chicken Store",
      location: "Niger, Nigeria",
      content:
        "Wow, great app! I must say, I just donated items to the store in customview and it was such an amazing experience.",
      likes: 18,
      comments: 5,
      shares: 2,
      timeAgo: "15 mins",
    },
  ]

  const comments = [
    {
      id: 1,
      author: "Terry Johnson",
      rating: "★★★",
      content: "This is awesome, seeing people sharing",
    },
    {
      id: 2,
      author: "JohnDoeExample",
      rating: "★★★★",
      content: "I love this initiative!",
    },
    {
      id: 3,
      author: "SarahM",
      rating: "★★★★★",
      content: "This is so beautiful, seeing people sharing",
    },
    {
      id: 4,
      author: "James",
      rating: "★★★",
      content: "Hi guys, please how do I donate? I want to help too",
    },
    {
      id: 5,
      author: "MikeExample",
      rating: "★★★★",
      content: "Hi guys, please how do I donate? I want to help too",
    },
  ]

  const mockImages = useMemo(
    () => [
      "https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?b=1&s=612x612&w=0&k=20&c=9imIwWTJpXEQGM6sUie2zeO7sKBQiSvpmkopyjv3ZdM=",
      "https://media.istockphoto.com/id/1389857295/photo/african-american-woman-bakers-looking-at-camera-chef-baker-in-a-chef-dress-and-hat-cooking.jpg?b=1&s=612x612&w=0&k=20&c=ZyfplfqcLIawKpER1c2BSlq5KGDgUuAW7MPoq1Xl4oQ=",
    ],
    [],
  )

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const API_KEY = "51d2c44770324261bea5c11e65d42b3c"
        const response = await fetch(`https://api.spoonacular.com/recipes/random?number=5&apiKey=${API_KEY}`)
        const data = await response.json()

        const categories = ["ngo", "individual", "government"]

        const formattedPosts = data.recipes.map((recipe, idx) => ({
          id: recipe.id,
          author: recipe.creditsText || "Anonymous",
          role: "Recipe Donor",
          location: recipe.sourceName || "Unknown",
          content: recipe.summary?.replace(/<[^>]+>/g, "").slice(0, 100) + "...",
          image: recipe.image || mockImages[idx % mockImages.length],
          category: categories[Math.floor(Math.random() * categories.length)],
          likes: Math.floor(Math.random() * 50),
          comments: Math.floor(Math.random() * 10),
          shares: Math.floor(Math.random() * 5),
          timeAgo: `${10 + idx * 3} mins`,
        }))

        setApiPosts(formattedPosts)
      } catch (error) {
        console.error("Error fetching recipes:", error)
      } finally {
        setLoadingPosts(false)
      }
    }

    fetchPosts()
  }, [mockImages])

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <header className="bg-[#34c759] text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className="h-10 w-10 border-2 border-white">
              {user ? (
                <div className="flex items-center justify-center h-full w-full text-xl font-bold bg-[#34c759] text-white">
                  {user.firstName?.charAt(0)}
                </div>
              ) : (
                <img src="/placeholder.svg?height=40&width=40" alt="User" />
              )}
            </Avatar>
            <div className="ml-2">
              <p className="text-sm">Hi, {user?.firstName || "User"}</p>
              <p className="text-xs">Welcome to KSF</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-1">🔔</button>
            <button className="p-1">≡</button>
          </div>
        </div>

        {/* Search */}
        <div className="mt-4 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search for item..." className="pl-10 bg-white text-black rounded-full" />
        </div>

        {/* Categories */}
        <div className="mt-4">
          <p className="text-sm mb-2">Category</p>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-1 rounded-full text-sm whitespace-nowrap ${
                  selectedCategory.toLowerCase() === category.toLowerCase()
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setSelectedCategory(category.toLowerCase())}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="p-4">
        <h2 className="text-lg font-semibold mb-4">What do you want?</h2>

        <div className="flex space-x-2 mb-6">
          <Button
            variant="outline"
            className="flex-1 bg-[#f0fff0] border-[#34c759] text-black hover:bg-[#e0ffe0]"
            onClick={() => navigate("/donor-home")}
          >
            Donate Food <span className="ml-1">→</span>
          </Button>
          <Button
            variant="outline"
            className="flex-1 bg-[#f0fff0] border-[#34c759] text-black hover:bg-[#e0ffe0]"
            onClick={() => navigate("/home")}
          >
            Request Food <span className="ml-1">→</span>
          </Button>
        </div>

        <h3 className="text-lg font-semibold mb-4">Let's Spread the goodness</h3>

        <div className="space-y-4">
          {[...posts, ...apiPosts]
            .filter((post) => selectedCategory === "all" || post.category === selectedCategory)
            .map((post, index) => (
              <div key={post.id} className="bg-white rounded-lg p-4 shadow">
                <div className="flex items-center mb-3">
                  <Avatar className="h-10 w-10">
                    <img src={post.image || mockImages[index % mockImages.length]} alt={post.author} />
                  </Avatar>
                  <div className="ml-2">
                    <p className="font-semibold">{post.author}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>{post.role}</span>
                      <span className="mx-1">•</span>
                      <span>{post.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm mb-3">{post.content}</p>
                {post.image && (
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt="Recipe"
                    className="w-full h-40 object-cover rounded mb-3"
                  />
                )}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center">
                      <Heart size={14} className="mr-1" /> {post.likes}
                    </button>
                    <button className="flex items-center" onClick={() => setShowComments(true)}>
                      <MessageCircle size={14} className="mr-1" /> {post.comments}
                    </button>
                    <button className="flex items-center">
                      <Share2 size={14} className="mr-1" /> {post.shares}
                    </button>
                  </div>
                  <span>{post.timeAgo}</span>
                </div>
              </div>
            ))}
        </div>
      </main>

      {/* Comments Overlay */}
      {showComments && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md max-h-[80vh] overflow-hidden flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-semibold">Comments</h3>
              <button onClick={() => setShowComments(false)}>✕</button>
            </div>

            <div className="overflow-y-auto flex-1 p-4">
              {comments.length > 0 ? (
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="border-b pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8">
                            <img src="/placeholder.svg?height=32&width=32" alt={comment.author} />
                          </Avatar>
                          <div className="ml-2">
                            <p className="text-sm font-medium">{comment.author}</p>
                            <p className="text-xs text-yellow-500">{comment.rating}</p>
                          </div>
                        </div>
                        <button className="text-gray-400">♡</button>
                      </div>
                      <p className="text-sm">{comment.content}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-gray-500 mb-2">No Comment yet</p>
                  <p className="text-sm text-gray-400">Start new conversation</p>
                </div>
              )}
            </div>

            <div className="p-3 border-t flex items-center">
              <div className="flex space-x-2 overflow-x-auto py-2">
                {["😀", "😊", "❤️", "🍎", "🥦", "🍋", "👍", "🎉"].map((emoji) => (
                  <button key={emoji} className="w-8 h-8 flex items-center justify-center text-lg">
                    {emoji}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 border-t flex items-center">
              <Input placeholder="Add a comment for John..." className="flex-1 mr-2" />
              <button className="text-gray-400">GIF</button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center h-16">
        <button
          className={`flex flex-col items-center justify-center text-xs ${
            activeTab === "home" ? "text-[#34c759]" : "text-gray-500"
          }`}
          onClick={() => navigate("/home")}
        >
          <Home size={20} />
          <span>Home</span>
        </button>
        <button
          className={`flex flex-col items-center justify-center text-xs ${
            activeTab === "tracking" ? "text-[#34c759]" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("tracking")}
        >
          <Maximize2 size={20} />
          <span>Tracking</span>
        </button>
        <button
          className={`flex flex-col items-center justify-center text-xs ${
            activeTab === "invoice" ? "text-[#34c759]" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("invoice")}
        >
          <FileText size={20} />
          <span>Invoice</span>
        </button>
        <button
          className={`flex flex-col items-center justify-center text-xs ${
            activeTab === "profile" ? "text-[#34c759]" : "text-gray-500"
          }`}
          onClick={() => navigate("/profile")}
        >
          <User size={20} />
          <span>Profile</span>
        </button>
      </nav>

      {/* Floating Action Button */}
      <button className="fixed right-4 bottom-20 bg-[#34c759] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
        <Plus size={24} />
      </button>
    </div>
  )
}

export default DashboardPage
