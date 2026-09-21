import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  image: string;
  label: string;
}

const projects: Project[] = [
  {
    title: "ELDERLY COMMUNITY SUPPORT",
    shortTitle: "Elderly Support",
    description:
      "We reach out to elderly people in our communities, sharing love, practical support, and essential items while reminding them that they are valued and not forgotten.",
    icon: "volunteer_activism",
    image:
      "https://images.unsplash.com/photo-1513159446162-54eb8bdaa79b?auto=format&fit=crop&w=1200&q=85",
    label: "Caring for Our Elders",
  },
  {
    title: "SKILLS TRAINING",
    shortTitle: "Skills Training",
    description:
      "Through a series of practical skills training sessions, we equip people with useful skills such as baking, candle making, and other activities that can create opportunities for income and self-reliance.",
    icon: "construction",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    label: "Equipping for Life",
  },
  {
    title: "COMMUNITY OUTREACH",
    shortTitle: "Community Outreach",
    description:
      "We take the Gospel beyond the church walls through community evangelism, preaching the Word, serving people, and providing clothing and other practical support to those in need.",
    icon: "public",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=85",
    label: "Serving Communities",
  },
  {
    title: "BUSINESS SKILLS TRAINING",
    shortTitle: "Business Training",
    description:
      "Our business skills training helps participants understand entrepreneurship, develop practical business skills, and discover ways to create sustainable opportunities for themselves and their families.",
    icon: "business_center",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85",
    label: "Building Entrepreneurs",
  },
  {
    title: "MFM FARM PROJECT",
    shortTitle: "Church Farm",
    description:
      "The church farm is part of our vision for practical development, productivity, and self-reliance while creating opportunities that can contribute to the wider ministry and community.",
    icon: "agriculture",
    image:
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=85",
    label: "Growing for Impact",
  },
  {
    title: "MULTI-PURPOSE COOPERATIVE",
    shortTitle: "Cooperative",
    description:
      "The church cooperative helps members save together, support one another, and build practical financial strength for families and ministry needs.",
    icon: "savings",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=85",
    label: "Building Financial Strength",
  },
];

function ProjectsPreview() {
  const [activeProject, setActiveProject] = useState<number>(0);
  const [isChanging, setIsChanging] = useState<boolean>(false);

  const project = projects[activeProject];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsChanging(true);

      window.setTimeout(() => {
        setActiveProject((current) => (current + 1) % projects.length);
        setIsChanging(false);
      }, 600);
    }, 7000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const changeProject = (index: number) => {
    if (index === activeProject || isChanging) return;

    setIsChanging(true);

    window.setTimeout(() => {
      setActiveProject(index);
      setIsChanging(false);
    }, 600);
  };

  return (
    <section
      className="
        relative
        min-h-[650px]
        overflow-hidden
        bg-[#7e099e]
        py-16
        sm:py-20
        lg:min-h-[760px]
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-white/[0.035]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#eb3492]/10
          blur-3xl
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          sm:px-6
          lg:px-10
          xl:px-12
        "
      >
        <div
          className={`
            relative
            flex
            min-h-[520px]
            w-full
            flex-row
            items-center
            gap-5
            transition-all
            duration-[600ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            sm:gap-8
            lg:min-h-[580px]
            lg:gap-0
            ${
              isChanging
                ? "scale-[0.97] opacity-0 blur-[2px]"
                : "scale-100 opacity-100 blur-0"
            }
          `}
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-30
              min-w-0
              flex-1
              lg:w-[52%]
              lg:flex-none
            "
          >
            {/* Small heading */}

            <span
              className="
                mb-4
                inline-flex
                items-center
                gap-2
                text-[8px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#f0a51a]
                sm:mb-6
                sm:text-[10px]
                lg:mb-7
                lg:text-xs
                lg:tracking-[0.22em]
              "
            >
              <span className="h-[2px] w-6 bg-[#f0a51a] sm:w-8 lg:w-10" />

              Our Projects
            </span>

            {/* Main heading */}

            <h2
              className="
                max-w-[310px]
                font-serif
                text-[clamp(2.1rem,4vw,5rem)]
                font-bold
                leading-[0.94]
                tracking-tight
                text-white
                sm:max-w-[420px]
                md:text-[clamp(2.8rem,3.8vw,4.6rem)]
                lg:max-w-[600px]
              "
            >
              Making an
              <br />
              <span className="text-[#f0a51a]">Impact</span>
              <br />
              Beyond the Church
            </h2>

            {/* Project title */}

            <div className="mt-7 lg:mt-9">
              <h3
                className="
                  max-w-[380px]
                  text-[clamp(1.05rem,2vw,2rem)]
                  font-bold
                  uppercase
                  leading-tight
                  tracking-wide
                  text-white
                  sm:text-xl
                  lg:max-w-[480px]
                "
              >
                {project.title}
              </h3>
            </div>

            {/* Description */}

            <p
              className="
                mt-4
                max-w-[380px]
                text-[11px]
                leading-5
                text-white/75
                sm:mt-5
                sm:max-w-[450px]
                sm:text-sm
                sm:leading-7
                lg:mt-5
                lg:max-w-[510px]
                lg:text-base
                lg:leading-8
              "
            >
              {project.description}
            </p>

            {/* CTA */}

            <div className="mt-6 sm:mt-7 lg:mt-8">
              <Link
                to="/projects"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  bg-[#f0a51a]
                  px-5
                  py-3
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-[#4a1b08]
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#d89408]
                  hover:shadow-2xl
                  active:scale-95
                  sm:px-6
                  sm:py-3.5
                  sm:text-[9px]
                  lg:px-7
                  lg:py-4
                  lg:text-[10px]
                "
              >
                Explore Our Projects

                <span
                  className="
                    material-symbols-outlined
                    text-sm
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    sm:text-base
                  "
                >
                  arrow_forward
                </span>
              </Link>
            </div>

            {/* Navigation */}

            <div
              className="
                mt-8
                flex
                items-center
                gap-2
                sm:mt-10
                sm:gap-3
                lg:mt-12
              "
            >
              {projects.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => changeProject(index)}
                  aria-label={`View ${item.shortTitle}`}
                  disabled={isChanging}
                  className={`
                    h-1
                    rounded-full
                    transition-all
                    duration-500
                    sm:h-1.5
                    disabled:cursor-not-allowed

                    ${
                      index === activeProject
                        ? "w-8 bg-[#f0a51a] sm:w-10 lg:w-12"
                        : "w-3 bg-white/30 hover:bg-white/60 sm:w-4 lg:w-5"
                    }
                  `}
                />
              ))}

              <span
                className="
                  ml-1
                  text-[8px]
                  font-bold
                  tracking-[0.12em]
                  text-white/50
                  sm:ml-2
                  sm:text-[9px]
                  lg:text-[10px]
                "
              >
                {String(activeProject + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* =================================================
              MOBILE / TABLET IMAGE
          ================================================= */}

          <div
            className="
              relative
              flex
              w-[clamp(210px,43vw,300px)]
              shrink-0
              items-center
              justify-center
              lg:hidden
            "
          >
            <div
              className="
                relative
                aspect-square
                w-full
              "
            >
              {/* Main spinning image */}

              <div
                className="
                  absolute
                  inset-0
                  animate-project-spin
                  overflow-hidden
                  rounded-full
                  shadow-[0_25px_70px_rgba(0,0,0,0.3)]
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  draggable={false}
                  loading="eager"
                  decoding="async"
                  className="
                    block
                    h-full
                    w-full
                    object-cover
                  "
                />

                {/* Image overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-full
                    bg-gradient-to-tr
                    from-black/40
                    via-transparent
                    to-white/10
                  "
                />
              </div>

              {/* =================================================
                  CENTER BLURRED CIRCLE
              ================================================= */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  h-[42%]
                  w-[42%]
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-black/25
                  p-3
                  text-center
                  shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                  backdrop-blur-md
                "
              >
                <div>
                  <span
                    className="
                      material-symbols-outlined
                      mb-1
                      text-xl
                      text-[#f0a51a]
                      sm:text-2xl
                    "
                  >
                    {project.icon}
                  </span>

                  <p
                    className="
                      text-[7px]
                      font-bold
                      uppercase
                      leading-tight
                      tracking-[0.12em]
                      text-white
                      sm:text-[9px]
                    "
                  >
                    {project.label}
                  </p>
                </div>
              </div>

              {/* Gold accent */}

              <div
                className="
                  absolute
                  bottom-1
                  left-1
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f0a51a]
                  text-[#4a1b08]
                  shadow-lg
                  sm:bottom-2
                  sm:left-2
                  sm:h-11
                  sm:w-11
                "
              >
                <span className="material-symbols-outlined text-base sm:text-lg">
                  arrow_forward
                </span>
              </div>

              {/* Pink accent */}

              <div
                className="
                  absolute
                  right-2
                  top-2
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-[#eb3492]
                  shadow-lg
                  sm:right-4
                  sm:top-4
                  sm:h-3
                  sm:w-3
                "
              />
            </div>
          </div>

          {/* =================================================
              DESKTOP IMAGE
          ================================================= */}

          <div
            className="
              absolute
              right-[-6vw]
              top-1/2
              hidden
              h-[min(52vw,620px)]
              w-[min(52vw,620px)]
              -translate-y-1/2
              lg:block
              xl:right-[-2vw]
            "
          >
            {/* Outer decorative ring */}

            <div
              className="
                absolute
                inset-[-15px]
                rounded-full
                border
                border-white/10
              "
            />

            {/* Main spinning image */}

            <div
              className="
                absolute
                inset-0
                animate-project-spin
                overflow-hidden
                rounded-full
                shadow-[0_35px_110px_rgba(0,0,0,0.3)]
              "
            >
              <img
                src={project.image}
                alt={project.title}
                draggable={false}
                loading="eager"
                decoding="async"
                className="
                  block
                  h-full
                  w-full
                  object-cover
                "
              />

              {/* Dark image overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-full
                  bg-gradient-to-tr
                  from-black/40
                  via-transparent
                  to-white/10
                "
              />
            </div>

            {/* =================================================
                CENTER BLURRED GLASS CIRCLE
            ================================================= */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                flex
                h-[clamp(180px,22vw,260px)]
                w-[clamp(180px,22vw,260px)]
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-black/25
                text-center
                shadow-[0_20px_70px_rgba(0,0,0,0.4)]
                backdrop-blur-xl
              "
            >
              <div className="max-w-[170px]">
                <span
                  className="
                    material-symbols-outlined
                    mb-3
                    text-4xl
                    text-[#f0a51a]
                  "
                >
                  {project.icon}
                </span>

                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    leading-relaxed
                    tracking-[0.18em]
                    text-white
                  "
                >
                  {project.label}
                </p>

                <div className="mx-auto mt-4 h-[2px] w-8 bg-[#f0a51a]" />

                <p
                  className="
                    mt-3
                    text-[9px]
                    uppercase
                    tracking-[0.12em]
                    text-white/60
                  "
                >
                  MFM KANYANYA
                </p>
              </div>
            </div>

            {/* Gold accent */}

            <div
              className="
                absolute
                bottom-[65px]
                left-[40px]
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-[#f0a51a]
                text-[#4a1b08]
                shadow-[0_10px_35px_rgba(0,0,0,0.3)]
                transition-transform
                duration-300
                hover:scale-110
              "
            >
              <span className="material-symbols-outlined text-2xl">
                arrow_forward
              </span>
            </div>

            {/* Pink decorative dot */}

            <div
              className="
                absolute
                right-[60px]
                top-[55px]
                h-5
                w-5
                rounded-full
                bg-[#eb3492]
                shadow-[0_0_25px_rgba(235,52,146,0.5)]
              "
            />
          </div>
        </div>
      </div>

      {/* Bottom fade */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-28
          w-full
          bg-gradient-to-t
          from-black/[0.06]
          to-transparent
        "
      />
    </section>
  );
}

export default ProjectsPreview;