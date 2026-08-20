import { type ReactNode } from "react";

import churchImage from "../../assets/images/churchimage.jpg";

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
  children?: ReactNode;
}

function PageHero({
  label,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section
      className="
        relative
        flex
        min-h-[260px]
        items-end
        justify-center
        overflow-hidden
        px-6
        pb-8
        pt-16
        text-white

        sm:min-h-[280px]

        md:min-h-[320px]
        md:pb-10
        md:pt-20

        lg:min-h-[340px]
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}
      <div className="absolute inset-0">
        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
          "
          style={{
            backgroundImage: `url(${churchImage})`,
          }}
        />
      </div>

      {/* =====================================================
          SUBTLE LIGHT EFFECTS
      ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          -left-20
          -top-20
          h-64
          w-64
          rounded-full
          bg-white/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          -right-20
          h-72
          w-72
          rounded-full
          bg-white/10
          blur-3xl
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div
        className="
          relative
          mx-auto
          flex
          w-full
          max-w-[900px]
          flex-col
          items-center
          justify-center
          px-4
          text-center

          sm:px-6

          md:px-8
        "
        style={{
          textShadow: "0px 8px 20px rgba(0,0,0,0.45)",
        }}
      >
        {/* =================================================
            LABEL
        ================================================= */}
        <p
          className="
            mb-2
            inline-flex
            rounded-full
            bg-black/20
            px-3
            py-1.5
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.25em]
            text-white
            backdrop-blur-sm

            md:text-xs
          "
        >
          {label}
        </p>

        {/* =================================================
            TITLE
        ================================================= */}
        <h1
          className="
            mt-2
            text-3xl
            font-bold
            uppercase
            leading-tight
            tracking-[-0.03em]
            text-white

            sm:text-4xl

            md:text-4xl

            lg:text-5xl
          "
        >
          {title}
        </h1>

        {/* =================================================
            DESCRIPTION
        ================================================= */}
        <p
          className="
            mx-auto
            mt-3
            max-w-xl
            text-sm
            leading-6
            text-white

            sm:text-base

            md:leading-7
          "
        >
          {description}
        </p>

        {/* =================================================
            OPTIONAL CONTENT
        ================================================= */}
        {children}
      </div>
    </section>
  );
}

export default PageHero;