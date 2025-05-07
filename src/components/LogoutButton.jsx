"use client";

import { Button } from "./ui/button";
import { useAuth } from "../context/AuthContext";

const LogoutButton = ({ className = "" }) => {
  const { logout } = useAuth();

  return (
    <Button
      onClick={logout}
      variant="outline"
      className={`bg-red-50 text-red-600 hover:bg-red-100 border-red-200 ${className}`}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
