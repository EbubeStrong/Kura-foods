"use client"

// import { useEffect } from "react"
// import { useNavigate } from "react-router-dom"
import { KSFLogo } from "../components/Icons"

const SplashScreen = () => {
  // const navigate = useNavigate()

  // useEffect(() => {
  //   // Automatically navigate to loading screen after 2 seconds
  //   const timer = setTimeout(() => {
  //     navigate("/loading")
  //   }, 2000)

  //   return () => clearTimeout(timer)
  // }, [navigate])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white relative">
      
      <div className="w-64 h-64">
        <KSFLogo />
      </div>
    </div>
  )
}

export default SplashScreen




// "use client"

// import { useEffect, useState } from "react"
// import { KSFLogo } from "../components/Icons"


// export default function SplashScreen() {
//   const [currentTime, setCurrentTime] = useState("9:41")

//   useEffect(() => {
//     // Update time every minute
//     const interval = setInterval(() => {
//       const now = new Date()
//       const hours = now.getHours()
//       const minutes = now.getMinutes()
//       const formattedTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes}`
//       setCurrentTime(formattedTime)
//     }, 60000)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="flex flex-col h-screen bg-[#fafafa] relative">
//       {/* iPhone Status Bar */}
//       <div className="px-5 py-2 flex justify-between items-center">
//         <div className="font-semibold text-[#000000]">{currentTime}</div>
//         <div className="flex items-center gap-1">
//           <div className="w-5 h-3">
//             <svg viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M1 1H19" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
//               <path d="M3 5H17" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
//               <path d="M6 9H14" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
//             </svg>
//           </div>
//           <div className="w-5 h-3">
//             <svg viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path
//                 d="M1 1C1 0.447715 1.44772 0 2 0H18C18.5523 0 19 0.447715 19 1V11C19 11.5523 18.5523 12 18 12H2C1.44772 12 1 11.5523 1 11V1Z"
//                 stroke="#000000"
//               />
//               <path
//                 d="M20 4V8C20.8047 7.66122 21.328 6.87313 21.328 6C21.328 5.12687 20.8047 4.33878 20 4Z"
//                 fill="#000000"
//               />
//             </svg>
//           </div>
//           <div className="relative w-5 h-3">
//             <svg viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path
//                 d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H1C0.447715 12 0 11.5523 0 11V1Z"
//                 fill="#000000"
//               />
//             </svg>
//             <div className="absolute top-0 right-0.5 w-2 h-2 rounded-full bg-[#34c759]"></div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content with Blob and Logo */}
//       <div className="flex-1 flex items-center justify-center">
//         <div className="relative w-64 h-64">
//           {/* Blob Shape */}
//           <div className="absolute inset-0 bg-[#0e2909] rounded-[50%] transform scale-[1.2] skew-y-6"></div>

//           {/* ICSF Logo */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-32 h-32 rounded-full bg-[#0e2909] border-2 border-[#34c759] flex items-center justify-center relative">
//               <div className="text-[#34c759] text-3xl font-bold">{ KSFLogo} </div>
//               {/* Leaf elements */}
//               <div className="absolute w-full h-full">
//                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 rotate-180">
//                   <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M20 0C13 0 0 10 0 20H40C40 10 27 0 20 0Z" fill="#34c759" />
//                   </svg>
//                 </div>
//                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4">
//                   <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M20 0C13 0 0 10 0 20H40C40 10 27 0 20 0Z" fill="#34c759" />
//                   </svg>
//                 </div>
//                 <div className="absolute left-0 top-1/2 transform -translate-x-1/4 -translate-y-1/2 rotate-90">
//                   <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M20 0C13 0 0 10 0 20H40C40 10 27 0 20 0Z" fill="#34c759" />
//                   </svg>
//                 </div>
//                 <div className="absolute right-0 top-1/2 transform translate-x-1/4 -translate-y-1/2 -rotate-90">
//                   <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M20 0C13 0 0 10 0 20H40C40 10 27 0 20 0Z" fill="#34c759" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* iPhone Home Indicator */}
//       <div className="h-8 flex items-center justify-center pb-2">
//         <div className="w-32 h-1 bg-black rounded-full"></div>
//       </div>
//     </div>
//   )
// }




// "use client";

// import { useEffect, useState } from "react";

// export default function SplashScreen() {
//   const [expanded, setExpanded] = useState(false);

//   useEffect(() => {
//     // Trigger the expansion animation after a short delay
//     const timer = setTimeout(() => {
//       setExpanded(true);
//     }, 300);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="flex flex-col h-screen bg-[#fafafa] relative overflow-hidden">
//       {/* Main Content with Animated Blob and Logo */}
//       <div className="flex-1 flex items-center justify-center">
//         <div
//           className={`relative transition-all duration-1500 ease-in-out ${
//             expanded ? "scale-y-100" : "scale-y-50"
//           }`}
//           style={{
//             width: "100%",
//             height: "100%",
//             transition: "transform 1.5s ease-in-out",
//           }}
//         >
//           {/* Blob Shape - Animated to expand */}
//           <div
//             className={`absolute inset-0 bg-[#0e2909] rounded-[50%] transition-all duration-1500 ease-in-out ${
//               expanded ? "scale-[2.5]" : "scale-[1.2]"
//             }`}
//             style={{
//               borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
//               transform: `scale(${expanded ? 2.5 : 1.2}) skewY(6deg)`,
//               transition: "transform 1.5s ease-in-out",
//             }}
//           ></div>

//           {/* ICSF Logo - Centered in the blob */}
//           <div className="absolute inset-0 flex items-center justify-center z-10">
//             <div className="w-32 h-32 rounded-full bg-[#0e2909] border-2 border-[#34c759] flex items-center justify-center relative">
//               <div className="text-[#34c759] text-3xl font-bold">ICSF</div>
//               {/* Leaf elements */}
//               <div className="absolute w-full h-full">
//                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 rotate-180">
//                   <svg
//                     width="40"
//                     height="20"
//                     viewBox="0 0 40 20"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M20 0C13 0 0 10 0 20H40C40 10 27 0 20 0Z"
//                       fill="#34c759"
//                     />
//                   </svg>
//                 </div>
//                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4">
//                   <svg
//                     width="40"
//                     height="20"
//                     viewBox="0 0 40 20"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M20 0C13 0 0 10 0 20H40C40 10 27 0 20 0Z"
//                       fill="#34c759"
//                     />
//                   </svg>
//                 </div>
//                 <div className="absolute left-0 top-1/2 transform -translate-x-1/4 -translate-y-1/2 rotate-90">
//                   <svg
//                     width="40"
//                     height="20"
//                     viewBox="0 0 40 20"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M20 0C13 0 0 10 0 20H40C40 10 27 0 20 0Z"
//                       fill="#34c759"
//                     />
//                   </svg>
//                 </div>
//                 <div className="absolute right-0 top-1/2 transform translate-x-1/4 -translate-y-1/2 -rotate-90">
//                   <svg
//                     width="40"
//                     height="20"
//                     viewBox="0 0 40 20"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M20 0C13 0 0 10 0 20H40C40 10 27 0 20 0Z"
//                       fill="#34c759"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* iPhone Home Indicator */}
//       <div className="h-8 flex items-center justify-center pb-2 z-10">
//         <div className="w-32 h-1 bg-black rounded-full"></div>
//       </div>
//     </div>
//   );
// }
