
import { Link } from "react-router-dom";
import {
  Church,
  BookOpen,
  Flame,
  ArrowRight,
} from "lucide-react";

import worshipImage from "../../assets/images/service.webp";

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
    description: "Happens every Friday.",
  },
];

function ServicesPreview() {
  return (
    <section className="grid bg-white md:grid-cols-2">

      {/* =====================================
          LEFT — IMAGE SECTION
      ====================================== */}

      <div
        className="
          bg-white
          px-4
          py-4
          sm:px-6
          sm:py-6
          md:pl-10
          md:pr-6
          md:py-10
          lg:pl-16
          lg:pr-8
          lg:py-16
          xl:pl-20
          xl:pr-10
        "
      >
        {/* IMAGE CONTAINER */}

        <div
          className="
            relative
            aspect-[4/5]
            w-full
            max-h-[620px]
            rounded-3xl
            overflow-hidden
            bg-gray-200
            shadow-[0_25px_70px_rgba(114,17,110,0.18)]
          "
        >
          {/* IMAGE */}

          <img
            src={worshipImage}
            alt="MFM worship service"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />

          {/* DARK OVERLAY */}

          <div className="absolute inset-0 bg-black/30" />

          {/* IMAGE CONTENT */}

          <div
            className="
              relative
              z-10
              flex
              h-full
              items-center
              justify-center
              px-4
              text-center
              sm:px-6
            "
          >
            <div
              className="
                w-full
                max-w-lg
                border
                border-white/20
                bg-black/35
                px-5
                py-7
                text-white
                shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                backdrop-blur-[2px]
                sm:px-8
                sm:py-9
              "
            >
              {/* LABEL */}

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#d4af37]
                "
              >
                Our Services
              </p>

              {/* TITLE */}

              <h2
                className="
                  mt-4
                  text-2xl
                  font-bold
                  uppercase
                  leading-tight
                  sm:text-3xl
                  md:text-4xl
                  lg:text-5xl
                "
              >
                Experience Worship and Community
              </h2>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-5
                  text-sm
                  leading-6
                  text-white/90
                  sm:text-base
                  sm:leading-8
                "
              >
                Join us every week as we worship together,
                study God's Word, strengthen our faith, and
                experience His transforming presence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================
          RIGHT — SERVICES CONTENT
      ====================================== */}

      <div
        className="
          bg-white
          px-4
          py-14
          sm:px-6
          sm:py-16
          md:px-10
          md:py-20
          lg:px-16
          lg:py-24
          xl:px-20
        "
      >
        <div className="w-full">

          {/* HEADER */}

          <div className="mb-10 text-center">
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
                text-2xl
                font-bold
                text-[#7e099e]
                sm:text-3xl
                md:text-4xl
              "
            >
              Join Us This Week
            </h3>
          </div>

          {/* SERVICES */}

          <div className="space-y-5 sm:space-y-6">
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
                    border
                    border-gray-100
                    bg-white
                    p-5
                    text-left
                    shadow-[0_8px_25px_rgba(107,114,128,0.14)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#d4af37]
                    hover:shadow-[0_15px_35px_rgba(107,114,128,0.18)]
                    sm:p-6
                    md:flex-row
                    md:items-center
                    md:justify-between
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
                          leading-snug
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

                  {/* TIME */}

                  <span
                    className="
                      mx-auto
                      w-fit
                      shrink-0
                      bg-[#7e099e]
                      px-4
                      py-2
                      text-center
                      text-xs
                      font-semibold
                      text-white
                      sm:text-sm
                      md:mx-0
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
                bg-[#d4af37]
                px-6
                py-3
                text-sm
                font-bold
                uppercase
                tracking-wider
                text-[#7e099e]
                transition
                duration-300
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
