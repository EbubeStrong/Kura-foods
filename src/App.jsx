import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "./components/ThemeProvider"
import "./App.css"

// Pages
import SplashScreen from "./pages/SplashScreen"
import LoadingScreen from "./pages/LoadingScreen"
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

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <div className="app block md:hidden sm:block">
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/loading" element={<LoadingScreen />} />
            <Route path="/onboarding" element={<OnboardingScreen />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="/login" element={<LoginPage />} />
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
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

