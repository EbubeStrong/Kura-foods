"use client"

import { useNavigate } from "react-router-dom"
import Logo from "../assets/images/logo.png";
import pineImg from "../assets/images/pine.png"
import appleImg from "../assets/images/apple.png"

const OnboardingScreen = () => {
  const navigate = useNavigate()

  return (
    <div
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
               </div>
  )
}

export default OnboardingScreen
