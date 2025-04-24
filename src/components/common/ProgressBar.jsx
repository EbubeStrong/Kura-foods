import React from "react";

const ProgressBar = ({ progress = 0, className = "" }) => {
  return (
    <div className={`w-full h-2 bg-green-100 rounded-full ${className}`}>
      <div
        className="h-full bg-[#21d406] rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
