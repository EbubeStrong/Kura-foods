/* eslint-disable */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {useNavigate} from 'react-router-dom'
// import {default as Logo} from ../assets/images/logo.png
import Logo from "../assets/images/logo.png";
import pineImg from "../assets/images/pine.png"
import appleImg from "../assets/images/apple.png"


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
      {/* Background Fill Shape */}
      <motion.div
        initial={{ scale: 0 }}
        animate={
          stage !== "start"
            ? {
                scale: [0, 1.2, 2, 2.6, 3.2],
                transition: {
                  duration: 3.5,
                  ease: "easeInOut",
                  times: [0, 0.3, 0.5, 0.8, 1],
                },
              }
            : {}
        }
        className="absolute bg-[#022c14] rounded-full z-0"
        style={{
          width: "150vmax",
          height: "150vmax",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
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
          <div className="w-20 h-20 flex items-center justify-center">
            <img src={Logo} alt="Logo" className="w-20 h-20 " />
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
                className="ml-4 text-white "
                style={{fontSize: "34px"}}
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
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-0 left-0 w-full h-full bg-[#022c14] z-20 flex flex-col justify-center items-center px-6 space-y-6 text-center text-white"
            >
              <div className="absolute top-0 right-[7rem] mt-[-30px]">
                <img
                  src={pineImg}
                  alt="pine"
                  className="blur-[3px] h-34 w-54"
                />
              </div>

              <div className="absolute top-[7rem] left-0 ml-[-7rem]">
                <img
                  src={appleImg}
                  alt="apple"
                  className="blur-[3px] h-34 w-54"
                />
              </div>

              <div className="absolute top-[5rem] right-5">
                <img
                  src={pineImg}
                  alt="pine"
                  className="blur-[3px] h-34 w-54"
                />
              </div>

              <div className="absolute flex items-center justify-center ml-[-4rem] z-0">
                <img
                  src={appleImg}
                  alt="apple"
                  className="blur-[3px] h-34 w-54"
                />
              </div>

              <div className="absolute bottom-[3rem] right-25">
                <img
                  src={pineImg}
                  alt="pine"
                  className="blur-[3px] h-34 w-54"
                />
              </div>

              <div className="absolute bottom-0 left-0 ml-[-8rem]">
                <img
                  src={pineImg}
                  alt="pine"
                  className="blur-[3px] h-34 w-54"
                />
              </div>

              <div className="z-9 mt-[4rem]">
                <h1 className="text-3xl font-bold flex-wrap">SAVE / SHARE / DONATE</h1>
                <p className="text-xl mt-5">
                  Save the world from hunger and say no to food wastage
                </p>
              </div>

              <div className="w-full space-y-4 z-9 pt-[5rem]">
                <button
                  className="w-full py-3 border border-green-400 text-green-400 rounded-full font-medium z-2  hover:text-white transition"
                  onClick={() => navigate("/create-account")}
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
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SplashScreen;
