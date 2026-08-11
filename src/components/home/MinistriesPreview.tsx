import { Link } from "react-router-dom";

const ministries = [
  {
    title: "EVANGELISM",
    description: "A place to pray, serve, learn and connect with the body.",
    icon: "campaign",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYEZ_WOW6SVK9OX1T_6TomNKTgUhntGlcrdwR_DWV0LteQikbQMwU2V_kx43FzQPiGZmBTWaodM5WT_2lAEVXLsUvxtWCbo7VYlQVvoiyhYptl2xjAopRZOBJsdkTbt1Kb_sAxGVNVcbDRuEei7L-bwFFOPv0fHTFyio8RePtKu7xSt_nnmr2EUMLU81E-7AKTxV4yhUUEQGvayeDMaixvCSpVEP2QhHJhWqMZrjD4DWsdxERiqcXi",
  },
  {
    title: "YOUTH",
    description: "A place to pray, serve, learn and connect with the body.",
    icon: "groups",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZhVUAjc4WKQW9aKT-caoPtd8BGsL4OpMS8DL12yZf8G4OTbFDJYHJAM0zBaGzoUHV_8xqn1IbODU6mPMb3Kj9vh-cFf4_Td48RWkD2m6SNvYN-F449FJoGauirnVWi7NASTPQ-vQIWBsTHfsjjiuFvx7RSWEd-xldAsRCWGmApxZoG_plRFNwBj-DIWmSRYmq6AYovGvqyTxJu2ZoIcRPxH1HeR4BU-vk63GAby2F4VDY0yhU1QlZ",
  },
  {
    title: "WOMEN",
    description: "A place to pray, serve, learn and connect with the body.",
    icon: "female",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqELdog7PlXRdcNc3MAkCUJK8YcLrQcLst7SbdSsZeXUxnuO5hQz1rA1xzKWuB7ot-fm3LQYTpOHJ-Yi1_bYeZAWmxzyPGxKGwlXAXqpZopvCl_y8PBVTRGe2soB0kWqpH204-w5G3uioajm5AvkzvjjgFV_5lPw8jLuJgiX8_3DxHk06TnCNPfgEi20mQenXkWrXqz4awHU7zAp6IMh-jSRwoV8Tm63CVPplVx6nYcxMF4DOHDqC7",
  },
  {
    title: "MEN",
    description: "A place to pray, serve, learn and connect with the body.",
    icon: "male",
    image:
      "https://images.unsplash.com/photo-1519915734606-32d972e3b9b7?auto=format&fit=crop&w=800&q=80",
  },
];

// Duplicating array for seamless infinite looping
const marqueeItems = [...ministries, ...ministries, ...ministries, ...ministries];

function MinistriesPreview() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24 md:py-10 overflow-hidden">
      {/* Background Subtle Accent Glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-purple-100/50 blur-[120px]" />

      {/* Header Section */}
      <div className="mx-auto mb-12 max-w-3xl px-6 text-center">
        <span className="inline-block rounded-full bg-[#310065]/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#310065] uppercase mb-4">
          Get Connected
        </span>
        <div className="mx-auto flex max-w-[520px] flex-col items-center justify-center">
          <h2 className="mt-1 text-3xl font-black uppercase tracking-tight text-[#2b1055] sm:text-4xl lg:text-5xl">
            MINISTRIES
          </h2>
          <span className="mt-2.5 block h-1 w-14 rounded-full bg-[#f2a900]" />
        </div>
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          Discover a place to serve, grow, and build meaningful community within our dedicated church departments.
        </p>
      </div>

      {/* Carousel Outer Wrapper */}
      <div className="relative w-full">
        {/* Left & Right Fade Gradients for Modern Seamless Look */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-16 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-16 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent" />

        {/* Continuous Infinite Marquee Track (Pauses on Hover automatically) */}
        <div className="group flex overflow-hidden py-4 select-none">
          <div className="flex min-w-full shrink-0 items-center gap-8 animate-marquee group-hover:[animation-play-state:paused]">
            {marqueeItems.map((ministry, index) => (
              <div
                key={`${ministry.title}-${index}`}
                className="group/card relative h-[380px] w-[290px] sm:w-[320px] flex-shrink-0 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:ring-purple-200"
              >
                {/* Background Image */}
                <img
                  src={ministry.image}
                  alt={ministry.title}
                  draggable={false}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
                />

                {/* Base Gradient Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent transition-opacity duration-500" />

                {/* Hover Gradient Focus */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#310065]/95 via-[#310065]/60 to-black/30 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />

                {/* Icon Badge */}
                <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-[#310065] shadow-lg backdrop-blur-md transition-transform duration-500 group-hover/card:scale-110">
                  <span className="material-symbols-outlined text-2xl">
                    {ministry.icon}
                  </span>
                </div>

                {/* "Explore" Floating Pill */}
                <div className="absolute right-5 top-5 rounded-full bg-white/20 px-3.5 py-1 text-[11px] font-bold tracking-wider text-white backdrop-blur-md opacity-0 transition-all duration-500 group-hover/card:opacity-100">
                  EXPLORE
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-[11px] font-bold tracking-widest text-purple-200 uppercase">
                    Ministry
                  </span>
                  <h3 className="mt-1 text-2xl font-bold tracking-wide text-white">
                    {ministry.title}
                  </h3>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-slate-200 opacity-0 transition-all duration-500 ease-out group-hover/card:max-h-24 group-hover/card:opacity-100">
                    {ministry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA Button */}
      <div className="mt-16 text-center px-6">
        <Link
          to="/ministries"
          className="inline-flex items-center gap-3 rounded-full bg-[#310065] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:bg-[#4a148c] hover:shadow-purple-900/20 active:scale-95"
        >
          EXPLORE ALL MINISTRIES
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </Link>
      </div>
    </section>
  );
}

export default MinistriesPreview;