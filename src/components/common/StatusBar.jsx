import React from "react";

const StatusBar = ({ dark = false }) => {
  return (
    <div
      className={`flex justify-between items-center p-2 ${
        dark ? "text-white" : "text-black"
      }`}
    >
      <div className="text-sm font-semibold">9:41</div>
      <div className="flex items-center space-x-1">
        <div className="w-4 h-4 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12"
              stroke={dark ? "white" : "black"}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="w-4 h-4 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path
              d="M6 9L12 15L18 9"
              stroke={dark ? "white" : "black"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="w-6 h-3 border border-current rounded-sm relative">
          <div className="absolute inset-0.5 bg-current right-[20%]"></div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
