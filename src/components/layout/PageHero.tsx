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
    <section className="relative flex items-center justify-center overflow-hidden px-6 pt-16 pb-16 text-white md:pt-20 md:pb-24 min-h-[460px] md:min-h-[520px]">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${churchImage})` }}
        />
        <div className="absolute inset-0 bg-[#310065]/45" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-transparent to-black/10" />
      </div>
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div
        className="relative mx-auto flex w-full max-w-[1080px] flex-col items-center justify-center text-center px-4"
        style={{ textShadow: "0px 10px 28px rgba(0,0,0,0.35)" }}
      >
        <p className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/90">
          {label}
        </p>

        <h1 className="mt-6 text-5xl font-bold uppercase tracking-[-0.03em] text-white md:text-6xl lg:text-7xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
          {description}
        </p>

        {children}
      </div>
    </section>
  );
}

export default PageHero;
