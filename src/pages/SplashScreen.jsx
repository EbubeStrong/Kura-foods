import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {useNavigate} from 'react-router-dom'

const SplashScreen = () => {
  const [stage, setStage] = useState("start");
  const navigate = useNavigate()

  useEffect(() => {
    const timeline = [
     setTimeout(() => setStage("fill"), 2000),         // Start curve after 1.5s
    setTimeout(() => setStage("bounce"), 4000),       // Bounce at 4s
    setTimeout(() => setStage("welcome"), 5500),      // Welcome message at 5.5s
    setTimeout(() => setStage("hideWelcome"), 7500),  // Hide welcome at 7.5s
    setTimeout(() => setStage("centerLogo"), 8500),   // Center logo again at 8.5s
    setTimeout(() => setStage("final"), 10000),  // Show final screen at 10s
    ];
    return () => timeline.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white flex items-center justify-center">
      {/* Background Fill Shape */}
      <motion.div
        initial={{ scale: 0, x: 200, y: 200 }}
        animate={
          stage !== "start"
            ? {
                scale: 3,
                x: 0,
                y: 0,
                transition: {
                  duration: 1.5,
                  ease: [0.7, 0, 0.3, 1],
                },
              }
            : {}
        }
        className="absolute w-[150%] h-[150%] bg-[#022c14] rounded-full bottom-[-40%] right-[-40%] z-0"
      />

      {/* Logo and Welcome */}
      <div className="absolute z-10 top-1/3 left-1/2 transform -translate-x-1/2">
        <motion.div
          className="flex items-center"
          animate={
            stage === "bounce"
              ? { y: [0, -10, 0], transition: { duration: 0.6 } }
              : stage === "welcome" || stage === "hideWelcome"
              ? { x: -40 }
              : stage === "centerLogo"
              ? { x: 0 }
              : {}
          }
        >
          {/* Logo */}
          <div className="w-20 h-20 rounded-full border-4 border-green-400 flex items-center justify-center text-green-400 font-bold text-xl">
            LOGO
          </div>

          {/* Welcome Text */}
          <AnimatePresence>
            {stage === "welcome" && (
              <motion.div
                key="welcomeText"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.5 }}
                className="ml-4 text-white text-lg"
              >
                Welcome
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Final SplashScreen Screen */}
      <AnimatePresence>
        {stage === "final" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-0 left-0 w-full h-full bg-[#022c14] z-20 flex flex-col justify-center items-center px-6 space-y-6 text-center text-white"
          >
            <div>
              <h1 className="text-3xl font-bold">SAVE / SHARE / DONATE</h1>
              <p className="text-sm mt-2">
                Save the world from hunger and say no to food wastage
              </p>
            </div>

            <div className="w-full space-y-4">
              <button
                className="w-full py-3 border border-green-400 text-green-400 rounded-full font-medium"
                onCLick={() => navigate("/create-account")}
              >
                Create an account
              </button>
              <button
                className="w-full py-3 bg-green-500 text-black font-bold rounded-full"
                onClick={() => navigate("/login")}
              >
                Log in
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SplashScreen;
