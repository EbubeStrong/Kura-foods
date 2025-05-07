import { Outlet, useLocation } from "react-router-dom";
import { HomeHeader } from "../components/home-page/home-header";
import { HomeMain } from "../components/home-page/home-main";
import NavSection from "../components/navigation";

function HomePage() {
  const location = useLocation();
  const isBaseHome = location.pathname === "/home";

  return (
    <div className="container bg-neutral-100">
      <HomeHeader />
      {isBaseHome && <HomeMain />}
      <Outlet />
      <NavSection />
    </div>
  );
}

export default HomePage;
