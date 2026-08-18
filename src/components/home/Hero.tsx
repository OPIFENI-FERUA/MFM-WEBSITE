import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import worshipBg from "../../assets/images/worship.jpg";
import worshipBg2 from "../../assets/images/worship-2.jpg";
import worshipBg3 from "../../assets/images/worship-3.jpg";

const slides = [worshipBg, worshipBg2, worshipBg3];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[110vh] overflow-hidden">
      {/* =====================================
          BACKGROUND IMAGE SLIDER
      ===================================== */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            inset-0
            flex
            h-full
            transition-transform
            duration-[1200ms]
            ease-in-out
          "
          style={{
            transform: `translateX(-${activeSlide * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide}
              className="
                relative
                h-full
                w-full
                flex-shrink-0
                bg-cover
                bg-center
              "
              style={{
                backgroundImage: `
                  linear-gradient(
                    to top right,
                    rgba(84, 20, 130, 0.95),
                    rgba(84, 20, 130, 0.82) 40%,
                    rgba(84, 20, 130, 0.55) 70%,
                    rgba(84, 20, 130, 0.25)
                  ),
                  url(${slide})
                `,
              }}
            />
          ))}
        </div>

        {/* Soft vertical overlay for a balanced look */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />
      </div>

      {/* =====================================
          SLIDER DOTS
      ===================================== */}
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

      {/* =====================================
          HERO CONTENT
      ===================================== */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
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
          {/* =====================================
              LEFT CONTENT
          ===================================== */}
          <div className="space-y-6 text-white">
            {/* Welcome Text */}
            <p
              className="
                font-heading
                text-3xl
                italic
                text-[#ffd97a]
                md:text-4xl
              "
            >
              Welcome to
            </p>

            {/* Main Heading */}
            <h1
              className="
                text-4xl
                font-extrabold
                leading-tight
                md:text-6xl
              "
            >
              Mountain of Fire &amp;
              <br />
              Miracles Ministries

              <span className="block text-[#ffd97a]">
                Kanyanya
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                max-w-2xl
                text-lg
                leading-8
                text-[#fff9f2]
              "
            >
              A house of prayer for all people.
              Experience the power of God, find purpose,
              and grow in your faith with us.
            </p>

            {/* =====================================
                ACTION BUTTONS
            ===================================== */}
            <div className="mt-8 flex flex-wrap gap-4">
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
                <span className="material-symbols-outlined">
                  play_circle
                </span>

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
                <span className="material-symbols-outlined">
                  place
                </span>

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
                <span className="material-symbols-outlined">
                  mail_outline
                </span>

                CONTACT US
              </Link>
            </div>
          </div>

          {/* =====================================
              RIGHT SIDE - THEME CARD
          ===================================== */}
          <div
            className="
              hidden
              items-end
              justify-end
              lg:flex
            "
          >
            <div
              className="
                mb-0
                w-full
                max-w-[360px]
                translate-y-[90px]
                rounded-3xl
                border
                border-white/20
                bg-white/[0.08]
                p-7
                text-white
                shadow-2xl
                backdrop-blur-md
              "
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ffd97a]/90">
                Theme of the Year 2026
              </p>

              <h3 className="mt-4 text-3xl font-extrabold leading-tight text-white">
                My Year of

                <span className="block text-[#ffd97a]">
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