import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = ({ className = "", color = "black" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`p-2 rounded-full ${className}`}
    >
      <ArrowLeft size={24} color={color} />
    </button>
  );
};

export default BackButton;
