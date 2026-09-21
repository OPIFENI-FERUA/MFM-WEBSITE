import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, PlayCircle } from "lucide-react";

import worshipBg from "../../assets/images/hero3.jpg";
import worshipBg2 from "../../assets/images/hero4.jpg";
import worshipBg3 from "../../assets/images/hero6.webp";
import worshipBg4 from "../../assets/images/hero2.jpg";
import worshipBg5 from "../../assets/images/hero.jpg";
import worshipBg6 from "../../assets/images/hero5.webp";

const slides = [
  worshipBg,
  worshipBg2,
  worshipBg3,
  worshipBg4,
  worshipBg5,
  worshipBg6,
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[110vh] overflow-hidden bg-[#541482] font-sans">
      {/* =====================================================
          BACKGROUND IMAGE SLIDER
      ===================================================== */}
      <div className="absolute inset-0 overflow-hidden bg-[#541482]">
        {slides.map((slide, index) => (
          <div
            key={slide}
            aria-hidden={index !== activeSlide}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1600ms] ease-in-out motion-reduce:transition-none ${
              index === activeSlide
                ? "z-10 opacity-100"
                : "z-0 opacity-0"
            }`}
            style={{
              backgroundImage: `
                linear-gradient(
                  to right,
                  rgba(84, 20, 130, 0.95) 0%,
                  rgba(84, 20, 130, 0.82) 40%,
                  rgba(84, 20, 130, 0.55) 70%,
                  rgba(84, 20, 130, 0.25) 100%
                ),
                url(${slide})
              `,
            }}
          />
        ))}

        {/* Soft vertical overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />
      </div>

      {/* =====================================================
          SLIDER DOTS
      ===================================================== */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`
              h-2
              rounded-full
              transition-all
              duration-300
              ${
                index === activeSlide
                  ? "w-6 bg-[#ffd97a]"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }
            `}
          />
        ))}
      </div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-10">
        <div
          className="
            grid
            min-h-screen
            items-center
            gap-16
            pb-24
            pt-32
            lg:grid-cols-[1.1fr_0.9fr]
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}
          <div className="min-w-0 space-y-6 text-center text-white lg:text-left">
            {/* Welcome */}
            <p
              className="
                whitespace-normal
                text-3xl
                font-semibold
                italic
                leading-tight
                text-[#ffd97a]
                md:text-4xl
              "
            >
              Welcome to
            </p>

            {/* Location / Tagline */}
            <p
              className="
                mx-auto
                max-w-xl
                whitespace-normal
                break-words
                text-xs
                font-bold
                uppercase
                tracking-[0.32em]
                leading-6
                text-white/80
                md:text-sm
                lg:mx-0
              "
            >
              MFM Kanyanya · Citadel of Solution and Power
            </p>

            {/* =================================================
                MAIN HEADING
            ================================================= */}
<h1
  className="
    mx-auto
    max-w-[760px]
    whitespace-normal
    break-words
    text-[clamp(2rem,4.5vw,5rem)]
    font-extrabold
    leading-[0.95]
    tracking-tight
    lg:mx-0
  "
>
  Mountain of Fire &amp;
  <br />
  Miracles Ministries

  <span className="block whitespace-normal text-[#ffd97a]">
    Kanyanya
  </span>
</h1>
            {/* Description */}
            <p
              className="
                mx-auto
                max-w-[760px]
                whitespace-normal
                break-words
                text-base
                leading-8
                text-[#fff9f2]
                md:text-lg
                lg:mx-0
              "
            >
              A house of prayer for all people. MFM Kanyanya is a citadel of
              solution and power where you can experience God, find purpose,
              and grow in faith.
            </p>

            {/* =================================================
                ACTION BUTTONS
            ================================================= */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              {/* SERMONS */}
              <Link
                to="/sermons"
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#8b1e3f]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-black/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#a5244b]
                  hover:shadow-xl
                "
              >
                <PlayCircle size={19} aria-hidden="true" />
                SERMONS
              </Link>

              {/* PLAN YOUR VISIT */}
              <Link
                to="/about"
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#d39d00]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-black/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#e8b200]
                  hover:shadow-xl
                "
              >
                <MapPin size={19} aria-hidden="true" />
                PLAN YOUR VISIT
              </Link>

              {/* CONTACT US */}
              <Link
                to="/contact"
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/30
                  bg-white/[0.06]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-black/20
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/50
                  hover:bg-white/[0.12]
                  hover:shadow-xl
                "
              >
                <Mail size={19} aria-hidden="true" />
                CONTACT US
              </Link>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE — THEME CARD
          ================================================= */}
          <div
            className="
              hidden
              items-end
              justify-center
              lg:flex
            "
          >
            <div
              className="
                mb-0
                w-full
                max-w-[360px]
                translate-y-[70px]
                rounded-3xl
                border
                border-white/20
                bg-white/[0.08]
                p-7
                text-center
                text-white
                shadow-2xl
                backdrop-blur-md
                xl:max-w-[420px]
              "
            >
              {/* Theme label */}
              <p
                className="
                  whitespace-normal
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  leading-5
                  text-[#ffd97a]/90
                "
              >
                Theme of the Year 2026
              </p>

              {/* Theme subtitle */}
              <p
                className="
                  mt-3
                  whitespace-normal
                  break-words
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  leading-6
                  text-white/80
                "
              >
                Citadel of Solution and Power
              </p>

              {/* Main Theme */}
              <h3
                className="
                  mt-4
                  whitespace-normal
                  break-words
                  text-3xl
                  font-extrabold
                  leading-tight
                  text-white
                "
              >
                My Year of

                <span className="block whitespace-normal text-[#ffd97a]">
                  Great Deliverance &amp; Fresh Glory
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;