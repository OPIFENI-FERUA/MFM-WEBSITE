import { type ReactNode } from "react";

import churchImage from "../../assets/images/churchimage.jpg";

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
  children?: ReactNode;
}

function PageHero({ label, title, description, children }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[260px] items-end justify-center overflow-hidden px-6 pb-8 pt-16 text-white md:min-h-[320px] md:pb-10 md:pt-20">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${churchImage})` }}
        />

        <div className="absolute inset-0 bg-[#540a8c]/45" />

        <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-transparent to-black/10" />
      </div>

      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div
        className="relative mx-auto flex w-full max-w-[900px] flex-col items-center justify-center px-8 text-center"
        style={{ textShadow: "0px 8px 20px rgba(0,0,0,0.35)" }}
      >
        <p className="mb-2 inline-flex rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/90 md:text-xs">
          {label}
        </p>

        <h1 className="mt-2 text-3xl font-bold uppercase tracking-[-0.03em] text-white md:text-4xl lg:text-5xl">
          {title}
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/85 md:text-base md:leading-7">
          {description}
        </p>

        {children}
      </div>
    </section>
  );
}

export default PageHero;