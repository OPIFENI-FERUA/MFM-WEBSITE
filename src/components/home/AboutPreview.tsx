import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  HeartHandshake,
} from "lucide-react";

import pastorImage from "../../assets/images/pastor Benita.jpg";

function AboutPreview() {
  return (
    <section className="relative bg-white py-20 md:py-28">

      {/* =========================================
          BACKGROUND DECORATION
          (clipped to this wrapper only, not the whole section,
          so the badge above can overflow upward freely)
      ========================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-40 h-72 w-72 rounded-full bg-[#540a8c]/5 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#d4af37]/15 blur-3xl" />
      </div>





      {/* =========================================
          ABOUT CONTENT
      ========================================= */}
      <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20">

 {/* =======================================
    LEFT - PASTOR IMAGE
======================================= */}
<div className="relative">

  {/* Decorative Shapes */}
  <div className="absolute -left-6 -top-6 h-28 w-28 rounded-3xl bg-[#d4af37]/20" />

  <div className="absolute -right-8 -bottom-8 h-44 w-44 rounded-full bg-[#540a8c]/10 blur-3xl" />

  <div className="relative overflow-hidden rounded-3xl shadow-[0_25px_70px_rgba(114,17,110,0.18)]">

    {/* Image Container */}
    <div className="group relative overflow-hidden">

      {/* Pastor Image */}
      <img
        src={pastorImage}
        alt="Mega Regional Overseer"
        className="
          aspect-[4/5]
          h-full
          w-full
          max-h-[620px]
          object-cover
          object-center
          transition-transform
          duration-700
          ease-out
          group-hover:scale-105
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#540a8c]/95
          via-[#540a8c]/30
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Pastor Details */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          translate-y-full
          px-8
          pb-8
          pt-20
          text-white
          transition-all
          duration-500
          ease-out
          group-hover:translate-y-0
        "
      >
        <span className="inline-block rounded-full bg-[#d4af37] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#540a8c]">
          Mega Regional Overseer
        </span>

        <h3 className="mt-4 text-3xl font-bold">
          Pastor Benita
        </h3>

        <p className="mt-2 text-sm leading-7 text-white">
          Mountain of Fire & Miracles Ministries
          <br />
          Kanyanya Mega Regional Headquarters
        </p>


      </div>

    </div>

  </div>

</div>


        {/* =======================================
            RIGHT - ABOUT CONTENT
        ======================================= */}
        <div className="flex flex-col text-center">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-[#d4af37]" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#540a8c]">
              Who We Are
            </span>
          </div>

          <h2 className="mx-auto max-w-xl text-3xl font-bold leading-tight text-[#540a8c] md:text-4xl lg:text-5xl">
            A Family of Faith,
            <span className="block text-[#d4af37]">
              Prayer &amp; Purpose
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
            MFM Kanyanya Mega Regional HQ is a growing family of believers
            passionate about worship, the Word, and prayer. We welcome
            everyone — whether you are exploring faith for the first time
            or looking for a church family where you can serve, grow, and
            belong.
          </p>

          <div className="mt-8 space-y-4">

            {/* <div className="flex items-start gap-3">
              <CheckCircle2
                size={20}
                className="mt-1 shrink-0 text-[#d4af37]"
              />

              <p className="text-sm leading-6 text-gray-600">
                A welcoming community built on faith and fellowship.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2
                size={20}
                className="mt-1 shrink-0 text-[#d4af37]"
              />

              <p className="text-sm leading-6 text-gray-600">
                A place to grow through prayer, worship, and God's Word.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2
                size={20}
                className="mt-1 shrink-0 text-[#d4af37]"
              />

              <p className="text-sm leading-6 text-gray-600">
                A family committed to serving God and impacting our community.
              </p>
            </div> */}

          </div>

          <div className="-mt-1 grid gap-4 sm:grid-cols-2">

            <div
              className="
                group
                rounded-2xl
                border
                border-[#8b1e3f]/40
                bg-[#8b1e3f]
                p-6
                shadow-[0_12px_30px_rgba(139,30,63,0.28)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#540a8c]/20
                hover:shadow-[0_16px_40px_rgba(139,30,63,0.35)]
                text-left
              "
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/30 text-white transition-colors group-hover:bg-white/40 group-hover:text-[#540a8c]">
                <Target size={22} />
              </div>

              <h4 className="text-lg font-bold text-white">
                Our Vision
              </h4>

              <p className="mt-2 text-sm leading-6 text-white/90">
                To be a centre of victory where lives are empowered
                and kingdom impact is built in every sphere of society.
              </p>
            </div>

            <div
              className="
                group
                rounded-2xl
                border
                border-[#d39d00]/40
                bg-[#d39d00]
                p-6
                shadow-[0_12px_30px_rgba(211,157,0,0.28)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#540a8c]/20
                hover:shadow-[0_16px_40px_rgba(211,157,0,0.35)]
                text-left
              "
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/30 text-white transition-colors group-hover:bg-white/40 group-hover:text-[#540a8c]">
                <HeartHandshake size={22} />
              </div>

              <h4 className="text-lg font-bold text-white">
                Our Mission
              </h4>

              <p className="mt-2 text-sm leading-6 text-white/90">
                To win souls, disciple believers through sound teaching
                and prayer, and serve our community with the love of Christ.
              </p>
            </div>

          </div>

          <Link
            to="/about"
            className="
              mt-8
              
              mx-auto
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#540a8c]
              px-7
              py-3.5
              text-xs
              font-bold
              uppercase
              tracking-[0.15em]
              text-white
              shadow-lg
              shadow-[#540a8c]/20
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#540a8c]
              hover:shadow-xl
            "
          >
            Learn More

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>

      </div>
    </section>
  );
}

export default AboutPreview;
