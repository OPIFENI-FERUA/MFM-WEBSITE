import { Link } from "react-router-dom";

const ministries = [
  {
    title: "EVANGELISM",
    description:
      "A place to pray, serve, learn and connect with the body.",
    icon: "campaign",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYEZ_WOW6SVK9OX1T_6TomNKTgUhntGlcrdwR_DWV0LteQikbQMwU2V_kx43FzQPiGZmBTWaodM5WT_2lAEVXLsUvxtWCbo7VYlQVvoiyhYptl2xjAopRZOBJsdkTbt1Kb_sAxGVNVcbDRuEei7L-bwFFOPv0fHTFyio8RePtKu7xSt_nnmr2EUMLU81E-7AKTxV4yhUUEQGvayeDMaixvCSpVEP2QhHJhWqMZrjD4DWsdxERiqcXi",
  },
  {
    title: "YOUTH",
    description:
      "A place to pray, serve, learn and connect with the body.",
    icon: "groups",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZhVUAjc4WKQW9aKT-caoPtd8BGsL4OpMS8DL12yZf8G4OTbFDJYHJAM0zBaGzoUHV_8xqn1IbODU6mPMb3Kj9vh-cFf4_Td48RWkD2m6SNvYN-F449FJoGauirnVWi7NASTPQ-vQIWBsTHfsjjiuFvx7RSWEd-xldAsRCWGmApxZoG_plRFNwBj-DIWmSRYmq6AYovGvqyTxJu2ZoIcRPxH1HeR4BU-vk63GAby2F4VDY0yhU1QlZ",
  },
  {
    title: "WOMEN",
    description:
      "A place to pray, serve, learn and connect with the body.",
    icon: "female",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqELdog7PlXRdcNc3MAkCUJK8YcLrQcLst7SbdSsZeXUxnuO5hQz1rA1xzKWuB7ot-fm3LQYTpOHJ-Yi1_bYeZAWmxzyPGxKGwlXAXqpZopvCl_y8PBVTRGe2soB0kWqpH204-w5G3uioajm5AvkzvjjgFV_5lPw8jLuJgiX8_3DxHk06TnCNPfgEi20mQenXkWrXqz4awHU7zAp6IMh-jSRwoV8Tm63CVPplVx6nYcxMF4DOHDqC7",
  },
  {
    title: "MEN",
    description:
      "A place to pray, serve, learn and connect with the body.",
    icon: "male",
    image:
      "https://images.unsplash.com/photo-1519915734606-32d972e3b9b7?auto=format&fit=crop&w=800&q=80",
  },
];

/*
  Duplicate the ministries once.
  This creates the second identical track
  needed for a seamless infinite animation.
*/
const marqueeItems = [...ministries, ...ministries];

function MinistriesPreview() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-slate-50
        via-white
        to-slate-50
        py-16
        sm:py-20
        md:py-24
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-10
          h-[400px]
          w-[650px]
          -translate-x-1/2
          rounded-full
          bg-[#540a8c]/10
          blur-[120px]
          sm:h-[500px]
          sm:w-[800px]
        "
      />

      {/* =====================================================
          HEADER
      ===================================================== */}
      <div
        className="
          mx-auto
          mb-10
          max-w-3xl
          px-5
          text-center
          sm:mb-12
          sm:px-6
        "
      >
        <span
          className="
            mb-4
            inline-flex
            rounded-full
            bg-[#540a8c]/5
            px-4
            py-1.5
            text-[10px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-[#540a8c]
            sm:text-xs
          "
        >
          Get Connected
        </span>

        <div className="mx-auto flex max-w-[520px] flex-col items-center">
          <h2
            className="
              text-3xl
              font-black
              uppercase
              tracking-tight
              text-[#540a8c]
              sm:text-4xl
              lg:text-5xl
            "
          >
            MINISTRIES
          </h2>

          <span
            className="
              mt-2.5
              block
              h-1
              w-14
              rounded-full
              bg-[#f2a900]
            "
          />
        </div>

        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-sm
            leading-relaxed
            text-slate-600
            sm:text-base
            lg:text-lg
          "
        >
          Discover a place to serve, grow, and build meaningful
          community within our dedicated church departments.
        </p>
      </div>

      {/* =====================================================
          MARQUEE
      ===================================================== */}
      <div className="w-full overflow-hidden">
        <div className="group overflow-hidden py-4">
          <div
            className="
              ministry-marquee
              flex
              w-max
              items-center
              gap-5

              sm:gap-6

              lg:gap-8

              group-hover:[animation-play-state:paused]
            "
          >
            {marqueeItems.map((ministry, index) => (
              <div
                key={`${ministry.title}-${index}`}
                className="
                  group/card
                  relative
                  h-[350px]
                  w-[265px]
                  flex-shrink-0
                  overflow-hidden
                  rounded-3xl
                  bg-white
                  shadow-sm
                  ring-1
                  ring-slate-900/5
                  transition-all
                  duration-500

                  sm:h-[370px]
                  sm:w-[300px]

                  lg:h-[390px]
                  lg:w-[320px]

                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:ring-[#540a8c]/20
                "
              >
                {/* =================================================
                    IMAGE
                ================================================= */}
                <img
                  src={ministry.image}
                  alt={ministry.title}
                  draggable={false}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover/card:scale-110
                  "
                />

                {/* =================================================
                    DARK GRADIENT
                ================================================= */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950/95
                    via-slate-950/35
                    to-transparent
                  "
                />

                {/* =================================================
                    PURPLE HOVER
                ================================================= */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#540a8c]/95
                    via-[#540a8c]/55
                    to-black/20
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover/card:opacity-100
                  "
                />

                {/* =================================================
                    ICON
                ================================================= */}
                <div
                  className="
                    absolute
                    left-5
                    top-5
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white/90
                    text-[#540a8c]
                    shadow-lg
                    backdrop-blur-md
                    transition-transform
                    duration-500

                    sm:h-12
                    sm:w-12

                    group-hover/card:scale-110
                  "
                >
                  <span
                    className="
                      material-symbols-outlined
                      text-xl
                      sm:text-2xl
                    "
                  >
                    {ministry.icon}
                  </span>
                </div>

                {/* =================================================
                    EXPLORE
                ================================================= */}
                <div
                  className="
                    absolute
                    right-5
                    top-5
                    rounded-full
                    bg-white/20
                    px-3
                    py-1
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-white
                    opacity-0
                    backdrop-blur-md
                    transition-all
                    duration-500
                    group-hover/card:opacity-100
                  "
                >
                  Explore
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    p-5
                    sm:p-6
                  "
                >
                  <span
                    className="
                      inline-flex
                      rounded-full
                      bg-white/15
                      px-3
                      py-1
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-white
                      backdrop-blur-md
                      sm:text-[10px]
                    "
                  >
                    Ministry
                  </span>

                  <h3
                    className="
                      mt-2
                      text-xl
                      font-bold
                      tracking-wide
                      text-white
                      sm:text-2xl
                    "
                  >
                    {ministry.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-h-0
                      overflow-hidden
                      text-sm
                      leading-relaxed
                      text-white/90
                      opacity-0
                      transition-all
                      duration-500
                      ease-out

                      group-hover/card:max-h-24
                      group-hover/card:opacity-100
                    "
                  >
                    {ministry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          CTA
      ===================================================== */}
      <div
        className="
          mt-12
          px-5
          text-center
          sm:mt-14
          sm:px-6
          lg:mt-16
        "
      >
        <Link
          to="/ministries"
          className="
            inline-flex
            items-center
            gap-2.5
            rounded-full
            bg-[#540a8c]
            px-6
            py-3.5
            text-[10px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-white
            shadow-lg
            transition-all
            duration-300

            sm:gap-3
            sm:px-8
            sm:py-4
            sm:text-xs

            hover:bg-[#43076f]
            hover:shadow-[#540a8c]/20
            active:scale-95
          "
        >
          Explore All Ministries

          <span className="material-symbols-outlined text-lg">
            arrow_forward
          </span>
        </Link>
      </div>
    </section>
  );
}

export default MinistriesPreview;