import { HomeHeader } from "../components/home-page/home-header";
import { HomeMain } from "../components/home-page/home-main";
import NavSection from "../components/navigation";

function HomePage() {
  return (
    <div className="container bg-neutral-100">
      <HomeHeader />
      <HomeMain />
      <NavSection />
    </div>
  );
}

export default HomePage;
