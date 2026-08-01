import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div className="flex min-h-screen flex-col">

      {/* Global Navbar */}
      <Navbar />

      {/* 
        Navbar is transparent/overlaid on Home Hero.
        Other pages need space for the fixed Navbar.
      */}
      {!isHomePage && (
        <div className="h-[100px]" />
      )}

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}

export default MainLayout;