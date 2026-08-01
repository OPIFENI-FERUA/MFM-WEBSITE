import { useEffect, useState } from "react";
import {
  NavLink,
  Link,
  useLocation,
} from "react-router-dom";

import mfmLogo from "../../assets/images/mfm-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/ministries", label: "Ministries" },
  { to: "/sermons", label: "Sermons" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/giving", label: "Give Online" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  // Check if the current page is Home
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /*
    HOME PAGE
    - At top: transparent Navbar over Hero
    - On scroll: purple Navbar

    OTHER PAGES
    - Always purple Navbar
  */

  const isTransparent =
    isHomePage && !scrolled;

  return (
    <>
      {/* =========================================
          MAIN NAVBAR
      ========================================= */}
      <header
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50
          border-b
          transition-all
          duration-300

          ${
            isTransparent
              ? "border-transparent bg-transparent"
              : "border-white/10 bg-[#310065]/95 shadow-lg backdrop-blur-md"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            max-w-[1280px]
            items-center
            justify-between
            px-5
            py-2
            md:px-6
          "
        >

          {/* =====================================
              LOGO
          ===================================== */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2"
          >
            <img
              src={mfmLogo}
              alt="MFM Greatlakes logo"
              className="h-9 w-9 object-contain"
            />

            <div className="leading-tight">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-white">
                MFM Greatlakes Mega
              </p>

              <p className="text-xs font-bold uppercase tracking-[0.1em] text-white/70">
                Regional Headquarters
              </p>
            </div>
          </Link>


          {/* =====================================
              DESKTOP NAVIGATION
          ===================================== */}
          <nav
            className="
              hidden
              items-center
              gap-4
              lg:flex
            "
            aria-label="Primary navigation"
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `
                  relative
                  py-3
                  text-sm
                  font-bold
                  transition-colors
                  duration-200

                  ${
                    isActive
                      ? "text-[#ffdf9e]"
                      : "text-white/80 hover:text-white"
                  }

                  after:absolute
                  after:bottom-1
                  after:left-0
                  after:h-[2px]
                  after:bg-[#ffdf9e]
                  after:transition-all
                  after:duration-300

                  ${
                    isActive
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }
                  `
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>


          {/* =====================================
              RIGHT SIDE
          ===================================== */}
          <div className="flex items-center gap-3">

            {/* Contact Us Button */}
            <Link
              to="/contact"
              className="
                hidden
                rounded-full
                bg-[#ffdf9e]
                px-4
                py-1.5
                text-sm
                font-bold
                text-[#261a00]
                shadow-md
                transition-all
                duration-200
                hover:scale-105
                hover:bg-[#ffe9bd]
                sm:inline-flex
              "
            >
              Contact Us
            </Link>


            {/* =================================
                MOBILE MENU BUTTON
            ================================= */}
            <button
              type="button"
              onClick={() =>
                setIsOpen((prev) => !prev)
              }
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={
                isOpen
                  ? "Close menu"
                  : "Open menu"
              }
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                text-lg
                text-white
                transition-colors
                hover:bg-white/10
                lg:hidden
              "
            >
              {isOpen ? "×" : "☰"}
            </button>

          </div>

        </div>
      </header>


      {/* =========================================
          MOBILE BACKDROP
      ========================================= */}
      {isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close mobile menu"
          className="
            fixed
            inset-0
            z-[55]
            bg-black/50
            lg:hidden
          "
        />
      )}


      {/* =========================================
          MOBILE NAVIGATION
      ========================================= */}
      <div
        id="mobile-navigation"
        className={`
          fixed
          inset-y-0
          right-0
          z-[60]
          h-screen
          w-[85%]
          max-w-[340px]
          bg-white
          px-5
          py-5
          shadow-2xl
          transition-transform
          duration-300
          lg:hidden

          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* Mobile Header */}
        <div
          className="
            mb-8
            flex
            items-center
            justify-between
          "
        >

          {/* Mobile Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2"
          >
            <img
              src={mfmLogo}
              alt="MFM Greatlakes"
              className="h-9 w-9 object-contain"
            />

            <div>
              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-wider
                  text-[#310065]
                "
              >
                MFM Greatlakes Mega
              </p>

              <p className="text-xs font-bold text-gray-500">
                Regional Headquarters
              </p>
            </div>
          </Link>


          {/* Close Button */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-gray-300
              text-lg
              text-[#310065]
              transition-colors
              hover:bg-[#f5f3ff]
            "
          >
            ×
          </button>

        </div>


        {/* =====================================
            MOBILE LINKS
        ===================================== */}
        <nav
          className="flex flex-col"
          aria-label="Mobile navigation"
        >

          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `
                border-b
                border-gray-100
                px-3
                py-3
                text-sm
                font-bold

                transition-all

                ${
                  isActive
                    ? "border-l-4 border-l-[#310065] bg-[#f7f3ff] text-[#310065]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#310065]"
                }
                `
              }
            >
              {link.label}
            </NavLink>
          ))}


          {/* ===================================
              MOBILE CONTACT BUTTON
          =================================== */}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="
              mt-6
              rounded-full
              bg-[#310065]
              px-5
              py-2.5
              text-center
              text-sm
              font-bold
              text-white
              transition
              hover:bg-[#45098a]
            "
          >
            Contact Us
          </Link>

        </nav>

      </div>
    </>
  );
}

export default Navbar;