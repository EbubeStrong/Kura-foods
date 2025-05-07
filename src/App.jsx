import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "./components/ThemeProvider"
import { Toaster } from "sonner"
import { AuthProvider } from "./context/AuthContext"
import ProtectedRoute from "./components/ProtectedRoute"
import "./App.css"

// Pages
import SplashScreen from "./pages/SplashScreen"
import OnboardingScreen from "./pages/OnboardingScreen"
import CreateAccountPage from "./pages/CreateAccountPage"
import LoginPage from "./pages/LoginPage"
import CreatePasswordPage from "./pages/CreatePasswordPage"
import DonationCategoryPage from "./pages/DonationCategoryPage"
import CongratulationsPage from "./pages/CongratulationsPage"
import WelcomeBackPage from "./pages/WelcomeBackPage"
import DashboardPage from "./pages/DashboardPage"
import EmptyUploadPage from "./pages/EmptyUploadPage"
import ProfilePage from "./pages/ProfilePage"
import EditAddressPage from "./pages/EditAddressPage"
import SupermarketProfilePage from "./pages/SupermarketProfilePage"
import GovernmentProfilePage from "./pages/GovernmentProfilePage"
import HomePage from "./pages/home"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <AuthProvider>
          <Toaster position="top-center" richColors />
          <div className="app block md:hidden sm:block font-poppins">
            <Routes>
              <Route path="/" element={<SplashScreen />} />
              <Route path="/onboarding" element={<OnboardingScreen />} />
              <Route path="/create-account" element={<CreateAccountPage />} />
              <Route path="/login" element={<LoginPage />} />

              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/home" element={<HomePage />} />
                <Route path="/create-password" element={<CreatePasswordPage />} />
                <Route path="/donation-category" element={<DonationCategoryPage />} />
                <Route path="/congratulations" element={<CongratulationsPage />} />
                <Route path="/welcome-back" element={<WelcomeBackPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/empty-upload" element={<EmptyUploadPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/edit-address" element={<EditAddressPage />} />
                <Route path="/supermarket-profile" element={<SupermarketProfilePage />} />
                <Route path="/government-profile" element={<GovernmentProfilePage />} />
              </Route>

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  )
}

export default App
