import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

import mfmLogo from "../../assets/images/mfm-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/ministries", label: "Ministries" },
  { to: "/Projects", label: "Projects" },
  { to: "/events", label: "Events" },
  { to: "/prayer-points", label: "Prayer Points" },
  { to: "/gallery", label: "Gallery" },
  { to: "/giving", label: "Give Online" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isTransparent = isHomePage && !scrolled;

  return (
    <>
      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}
      <header
        className={`
          navbar-font
          fixed
          left-0
          right-0
          top-0
          z-50
          transition-all
          duration-300

          ${
            isTransparent
              ? "border-transparent bg-transparent shadow-none"
              : "border-transparent bg-[#7e099e] shadow-md"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1450px]
            items-center
            justify-between

            px-4
            py-3

            sm:px-5
            sm:py-4

            md:px-6
            md:py-4

            lg:px-7
            lg:py-4

            xl:px-10
            xl:py-5
          "
        >
          {/* =================================================
              LOGO
          ================================================= */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="
              flex
              shrink-0
              items-center
              gap-2

              sm:gap-2.5
              lg:gap-2.5
              xl:gap-3
            "
          >
            <img
              src={mfmLogo}
              alt="MFM Kanyanya logo"
              className="
                h-8
                w-8

                sm:h-9
                sm:w-9

                lg:h-9
                lg:w-9

                xl:h-11
                xl:w-11

                object-contain
              "
            />

            <div className="leading-tight">
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-white

                  sm:text-xs
                  sm:tracking-[0.13em]

                  lg:text-xs

                  xl:text-sm
                  xl:tracking-[0.14em]
                "
              >
                MFM KANYANYA
              </p>

              <p
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.06em]
                  text-white

                  sm:text-[9px]

                  lg:text-[10px]

                  xl:text-xs
                  xl:tracking-[0.08em]
                "
              >
                Citadel of Solution and Power
              </p>
            </div>
          </Link>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}
          <nav
            className="
              hidden
              flex-1
              items-center
              justify-center

              gap-2
              px-3

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
                    whitespace-nowrap
                    rounded-full
                    border
                    border-transparent

                    px-3
                    py-2

                    text-sm
                    font-bold

                    transition-all
                    duration-200

                    xl:px-3.5
                    xl:py-2
                    xl:text-[15px]

                    2xl:px-4
                    2xl:text-[15px]

                    ${
                      isActive
                        ? "border-white/40 bg-white/10 text-white"
                        : "text-white hover:border-white/40 hover:bg-white/10 hover:text-white"
                    }
                  `
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}
          <div
            className="
              flex
              shrink-0
              items-center

              gap-2

              sm:gap-3

              xl:gap-4
            "
          >
            {/* =================================================
                CONTACT US
            ================================================= */}
            <Link
              to="/contact"
              className="
                hidden
                rounded-full
                border
                border-white
                bg-white

                px-4
                py-2

                text-sm
                font-bold
                text-[#000000]

                shadow-md
                transition-all
                duration-200

                hover:scale-105
                hover:bg-white/90

                sm:inline-flex

                lg:px-4
                lg:py-2
                lg:text-xs

                xl:px-4
                xl:py-2
                xl:text-sm
              "
            >
              Contact Us
            </Link>


            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
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


      {/* =====================================================
          MOBILE BACKDROP
      ===================================================== */}
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


      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}
      <div
        id="mobile-navigation"
        className={`
          navbar-font
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

        {/* =================================================
            MOBILE HEADER
        ================================================= */}
        <div
          className="
            mb-7
            flex
            items-center
            justify-between
          "
        >

          {/* MOBILE LOGO */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="
              flex
              items-center
              gap-2
            "
          >
            <img
              src={mfmLogo}
              alt="MFM Kanyanya logo"
              className="
                h-9
                w-9
                object-contain
              "
            />

            <div>
              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-wider
                  text-[#7e099e]
                "
              >
                MFM KANYANYA
              </p>

              <p
                className="
                  text-xs
                  font-bold
                  text-gray-500
                "
              >
                Citadel of Solution and Power
              </p>
            </div>
          </Link>


          {/* CLOSE BUTTON */}
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
              text-[#7e099e]
              transition-colors
              hover:bg-[#f3ebfa]
            "
          >
            ×
          </button>

        </div>


        {/* =================================================
            MOBILE LINKS
        ================================================= */}
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
                  py-3.5

                  text-lg
                  font-bold

                  transition-all

                  ${
                    isActive
                      ? "border-l-4 border-l-[#7e099e] bg-[#f3ebfa] text-[#7e099e]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#7e099e]"
                  }
                `
              }
            >
              {link.label}
            </NavLink>
          ))}


          {/* =================================================
              MOBILE CONTACT BUTTON
          ================================================= */}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="
              mt-6
              rounded-full
              bg-[#7e099e]
              px-5
              py-3
              text-center
              text-base
              font-semibold
              text-white
              transition
              hover:bg-[#43076f]
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
