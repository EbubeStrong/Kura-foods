import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, BarChart2, FileText, User } from "lucide-react";

const BottomNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => {
    return currentPath === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-[390px] mx-auto bg-white border-t flex justify-between items-center px-4 py-2">
      <Link to="/home" className="flex flex-col items-center">
        <Home size={24} color={isActive("/home") ? "#21d406" : "#666"} />
        <span
          className={`text-xs ${
            isActive("/home") ? "text-[#21d406]" : "text-gray-500"
          }`}
        >
          Home
        </span>
      </Link>

      <Link to="/tracking" className="flex flex-col items-center">
        <BarChart2
          size={24}
          color={isActive("/tracking") ? "#21d406" : "#666"}
        />
        <span
          className={`text-xs ${
            isActive("/tracking") ? "text-[#21d406]" : "text-gray-500"
          }`}
        >
          Tracking
        </span>
      </Link>

      <Link to="/invoice" className="flex flex-col items-center">
        <FileText size={24} color={isActive("/invoice") ? "#21d406" : "#666"} />
        <span
          className={`text-xs ${
            isActive("/invoice") ? "text-[#21d406]" : "text-gray-500"
          }`}
        >
          Invoice
        </span>
      </Link>

      <Link to="/profile" className="flex flex-col items-center">
        <User size={24} color={isActive("/profile") ? "#21d406" : "#666"} />
        <span
          className={`text-xs ${
            isActive("/profile") ? "text-[#21d406]" : "text-gray-500"
          }`}
        >
          Profile
        </span>
      </Link>
    </div>
  );
};

export default BottomNavigation;
