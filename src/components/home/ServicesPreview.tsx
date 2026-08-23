import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Church,
  BookOpen,
  Flame,
  ArrowRight,
} from "lucide-react";

import worshipImage from "../../assets/images/service.jpg";

interface Service {
  title: string;
  time: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Sunday Worship Service",
    time: "09:00 AM - 12:00 PM",
    description: "Worship, Word, Prayer and Fellowship.",
  },
  {
    title: "Holy Communion Sunday",
    time: "08:00 AM - 12:00 PM",
    description: "Takes place every 1st Sunday of the month.",
  },
  {
    title: "Power Must Change Hands",
    time: "08:00 AM - 12:00 PM",
    description: "Happens every 1st Saturday of the month.",
  },
  {
    title: "Youth Fellowship",
    time: "06:00 PM - 08:00 PM",
    description: "Happens every Friday",
  },
];

function ServicesPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const [imageOffset, setImageOffset] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame: number | null = null;

    const updateOffset = () => {
      animationFrame = null;

      if (!mediaQuery.matches || reduceMotion.matches || !sectionRef.current) {
        setImageOffset(0);
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const travel = Math.min(96, window.innerHeight * 0.12);
      const progress = Math.max(
        0,
        Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height))
      );

      setImageOffset((progress - 0.5) * travel);
    };

    const onScroll = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateOffset);
      }
    };

    updateOffset();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    mediaQuery.addEventListener("change", onScroll);
    reduceMotion.addEventListener("change", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mediaQuery.removeEventListener("change", onScroll);
      reduceMotion.removeEventListener("change", onScroll);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-no-scroll-reveal
      className="grid md:grid-cols-2"
    >

      {/* =====================================
          LEFT — FIXED / PARALLAX IMAGE
      ====================================== */}

      <div
        className="
          relative
          h-[500px]
          overflow-hidden
          md:sticky
          md:top-0
          md:h-screen
          md:self-start
        "
      >

          {/* IMAGE */}

          <div
            className="
              absolute
              -inset-y-24
              inset-x-0
              bg-cover
              bg-center
              bg-no-repeat
              will-change-transform
            "
            style={{
              backgroundImage: `url(${worshipImage})`,
              transform: `translate3d(0, ${imageOffset}px, 0)`,
            }}
          />

          {/* DARK OVERLAY */}

          <div className="absolute inset-0 bg-black/20" />

          {/* IMAGE CONTENT */}

          <div
            className="
              relative
              z-10
              flex
              h-full
              items-center
              justify-center
              px-6
              text-center
            "
          >
            <div
              className="
                max-w-lg
                rounded-[2rem]
                border
                border-white/20
                bg-black/35
                px-7
                py-8
                text-white
                shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                backdrop-blur-[2px]
              "
            >
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.35em]
                  text-[#d4af37]
                "
              >
                Our Services
              </p>

              <h2
                className="
                  mt-5
                  text-4xl
                  font-bold
                  uppercase
                  md:text-5xl
                "
              >
                Experience Worship and Community
              </h2>

              <p
                className="
                  mt-6
                  leading-8
                  text-white/90
                "
              >
                Join us every week as we worship together,
                study God's Word, strengthen our faith, and
                experience His transforming presence.
              </p>
            </div>
          </div>

      </div>


      {/* =====================================
          RIGHT — SCROLLING CONTENT
      ====================================== */}

      <div
        className="
          bg-white
          px-6
          py-16
          md:px-12
          lg:px-20
          lg:py-24
        "
      >

        <div className="w-full">

          {/* HEADER */}

          <div
            className="
              mb-10
              text-center
            "
          >
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#d4af37]
              "
            >
              Weekly Schedule
            </p>

            <h3
              className="
                mt-3
                text-3xl
                font-bold
                text-[#7e099e]
                md:text-4xl
              "
            >
              Join Us This Week
            </h3>
          </div>


          {/* SERVICES */}

          <div className="space-y-6">

            {services.map((service) => {
              const Icon =
                service.title.includes("Sunday")
                  ? Church
                  : service.title.includes("Wednesday")
                    ? BookOpen
                    : Flame;

              return (
                <div
                  key={service.title}
                  className="
                    flex
                    flex-col
                    gap-5
                    rounded-2xl
                    border
                    border-gray-100
                    bg-white
                    p-6
                    text-left
                    shadow-[0_8px_25px_rgba(107,114,128,0.14)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#d4af37]
                    hover:shadow-[0_15px_35px_rgba(107,114,128,0.18)]

                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >

                  {/* SERVICE INFORMATION */}

                  <div
                    className="
                      flex
                      min-w-0
                      flex-1
                      flex-col
                      items-center
                      gap-4

                      sm:flex-row
                      sm:items-center
                    "
                  >

                    {/* ICON */}

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#7e099e]/10
                      "
                    >
                      <Icon
                        size={22}
                        className="text-[#7e099e]"
                      />
                    </div>


                    {/* TEXT */}

                    <div
                      className="
                        min-w-0
                        text-center
                        sm:text-left
                      "
                    >
                      <h4
                        className="
                          font-bold
                          text-[#7e099e]
                        "
                      >
                        {service.title}
                      </h4>

                      <p
                        className="
                          mt-1
                          text-sm
                          leading-6
                          text-gray-500
                        "
                      >
                        {service.description}
                      </p>
                    </div>

                  </div>


                  {/* TIME — RIGHT */}

                  <span
                    className="
                      mx-auto
                      w-fit
                      shrink-0
                      rounded-full
                      bg-[#7e099e]
                      px-4
                      py-2
                      text-center
                      text-sm
                      font-semibold
                      text-white

                      sm:mx-0
                    "
                  >
                    {service.time}
                  </span>

                </div>
              );
            })}

          </div>


          {/* BUTTON */}

          <div className="mt-10 text-center">

            <Link
              to="/services"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#d4af37]
                px-6
                py-3
                text-sm
                font-bold
                uppercase
                tracking-wider
                text-[#7e099e]
                transition
                hover:scale-105

                sm:w-auto
              "
            >
              View All Services

              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </div>

    </section>
  );
}

export default ServicesPreview;
