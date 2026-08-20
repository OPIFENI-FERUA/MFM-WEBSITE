import { Link } from "react-router-dom";
import {
  Church,
  BookOpen,
  Flame,
  ArrowRight,
} from "lucide-react";

import worshipImage from "../../assets/images/worship.jpg";

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
  return (
    <section className="grid min-h-screen md:grid-cols-2">

      {/* =====================================
          LEFT IMAGE
      ====================================== */}

      <div
        className="
          relative
          min-h-[500px]
          overflow-hidden
          md:sticky
          md:top-0
          md:h-screen
          md:self-start
        "
      >

        {/* NORMAL IMAGE */}
        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
          "
          style={{
            backgroundImage: `url(${worshipImage})`,
          }}
        />

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-black/10" />

        {/* LEFT CONTENT */}
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
              backdrop-blur-sm
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
              experience worship and community
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
          RIGHT CONTENT
      ====================================== */}

      <div
        className="
          flex
          items-center
          bg-white
          px-6
          py-20
          text-center
          md:px-12
          lg:px-20
        "
      >
        <div className="w-full">

          <div
            className="
              rounded-[2rem]
              bg-white
              p-8
              shadow-[0_12px_35px_rgba(15,23,42,0.08)]
            "
          >

            {/* HEADER */}

            <div
              className="
                mb-8
                flex
                items-center
                justify-center
              "
            >
              <div>
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
                    text-[#540a8c]
                  "
                >
                  Join Us This Week
                </h3>
              </div>
            </div>

            {/* SERVICES */}

            <div className="space-y-5">

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
                      gap-4
                      rounded-2xl
                      border
                      border-gray-100
                      bg-white
                      p-5
                      text-left
                      shadow-[0_8px_25px_rgba(107,114,128,0.16)]
                      transition
                      hover:border-[#d4af37]
                      hover:shadow-[0_10px_28px_rgba(107,114,128,0.2)]

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
                        flex-col
                        items-center
                        gap-4

                        sm:flex-row
                      "
                    >
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#540a8c]/10
                        "
                      >
                        <Icon
                          size={22}
                          className="text-[#540a8c]"
                        />
                      </div>

                      <div className="min-w-0">
                        <h4
                          className="
                            font-bold
                            text-[#540a8c]
                          "
                        >
                          {service.title}
                        </h4>

                        <p
                          className="
                            mt-1
                            text-sm
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
                        rounded-full
                        bg-[#540a8c]
                        px-4
                        py-2
                        text-center
                        text-sm
                        font-semibold
                        text-white
                      "
                    >
                      {service.time}
                    </span>

                  </div>
                );
              })}

            </div>

            {/* BUTTON */}

            <div
              className="
                mt-10
                rounded-2xl
                p-6
                text-center
                text-white
              "
            >
              <Link
                to="/services"
                className="
                  mt-6
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
                  text-[#540a8c]
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
      </div>

    </section>
  );
}

export default ServicesPreview;