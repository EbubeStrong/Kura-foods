import { House, Expand, ReceiptText, UserRound } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { path: "/", Icon: House, title: "Home", label: "View home page" },
  {
    path: "/tracking",
    Icon: Expand,
    title: "Tracking",
    label: "Track your orders",
  },
  {
    path: "/invoice",
    Icon: ReceiptText,
    title: "Invoice",
    label: "View receipts from recent orders",
  },
  {
    path: "/profile",
    Icon: UserRound,
    title: "Profile",
    label: "View your profile",
  },
];

function NavSection() {
  const location = useLocation().pathname;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white">
      <nav className="px-4">
        <div className="grid grid-cols-4 place-items-center">
          {navLinks.map((link) => (
            <div className="flex flex-col items-center gap-1 p-3 drop-shadow-md">
              <NavLink to={link.path}>
                {({ isActive }) => (
                  <link.Icon
                    aria-label={link.label}
                    className={`w-4 h-4 ${isActive ? "text-primary-200" : ""}`}
                  />
                )}
              </NavLink>
              <span
                aria-hidden="true"
                className={`${
                  location === link.path ? "text-primary-200" : ""
                }`}
              >
                {link.title}
              </span>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default NavSection;
