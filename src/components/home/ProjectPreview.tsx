
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
    title: "COMMUNITY OUTREACH",
    shortTitle: "Community Outreach",
    description:
      "Reaching communities with practical support, hope, and the love of Christ.",
    icon: "volunteer_activism",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=85",
    label: "Serving Communities",
  },
  {
    title: "YOUTH DEVELOPMENT",
    shortTitle: "Youth Development",
    description:
      "Creating opportunities for young people to discover purpose, develop skills, and grow in faith.",
    icon: "groups",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=85",
    label: "Investing in the Next Generation",
  },
  {
    title: "EDUCATION PROJECT",
    shortTitle: "Education Project",
    description:
      "Supporting children and young people through education, mentorship, and meaningful opportunities.",
    icon: "school",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85",
    label: "Building Futures",
  },
  {
    title: "MISSIONS",
    shortTitle: "Missions",
    description:
      "Taking the Gospel beyond our walls and partnering with communities to bring lasting transformation.",
    icon: "public",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=85",
    label: "Taking Hope Further",
  },
];

function ProjectsPreview() {
  const [activeProject, setActiveProject] = useState<number>(0);
  const [isChanging, setIsChanging] = useState<boolean>(false);
  const [slideDirection, setSlideDirection] =
    useState<"left" | "right">("left");

  const project = projects[activeProject];

  /*
   * Automatically change projects.
   */
  useEffect(() => {
    const interval = window.setInterval(() => {
      setSlideDirection("left");
      setIsChanging(true);

      window.setTimeout(() => {
        setActiveProject((current) => (current + 1) % projects.length);
        setIsChanging(false);
      }, 650);
    }, 7000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  /*
   * Manually change projects.
   */
  const changeProject = (index: number) => {
    if (index === activeProject || isChanging) return;

    if (index > activeProject) {
      setSlideDirection("left");
    } else {
      setSlideDirection("right");
    }

    setIsChanging(true);

    window.setTimeout(() => {
      setActiveProject(index);
      setIsChanging(false);
    }, 650);
  };

  return (
    <section
      className="
        relative
        min-h-[700px]
        overflow-hidden
        bg-[#fce8df]
        py-16
        sm:py-20
        lg:min-h-[720px]
        lg:py-20
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
          This stays fixed while the project content slides.
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-[520px]
          w-[520px]
          rounded-full
          border
          border-white/40
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-20
          -top-20
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-white/30
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[-180px]
          h-[500px]
          w-[500px]
          rounded-full
          border
          border-white/30
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-250px]
          right-[-150px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-white/20
          blur-3xl
        "
      />

      {/* =====================================================
          MAIN VIEWPORT
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          px-6
          sm:px-8
          lg:px-12
        "
      >
        {/* ===================================================
            SLIDING PROJECT SCENE

            Everything inside this container moves together.
        =================================================== */}

        <div
          className={`
            relative
            flex
            min-h-[560px]
            w-full
            items-center
            transition-transform
            transition-opacity
            duration-[650ms]
            ease-in-out

            ${
              isChanging
                ? slideDirection === "left"
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
                : "translate-x-0 opacity-100"
            }
          `}
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-20
              w-full
              lg:w-[48%]
            "
          >
            {/* Small label */}

            <span
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#f0a51a]
              "
            >
              <span className="h-[2px] w-8 bg-[#f0a51a]" />

              Our Projects
            </span>

            {/* Main title */}

            <h2
              className="
                max-w-lg
                font-serif
                text-3xl
                font-bold
                leading-[0.95]
                tracking-tight
                text-[#5b2419]
                sm:text-4xl
                md:text-5xl
                lg:text-[3.75rem]
              "
            >
              {project.title}
            </h2>

            {/* Description */}

            <p
              className="
                mt-7
                max-w-lg
                text-sm
                leading-7
                text-[#6d514a]
                sm:text-base
                sm:leading-8
              "
            >
              {project.description}
            </p>

            {/* CTA */}

            <div className="mt-9">
              <Link
                to="/projects"
                className="
                  inline-flex
                  items-center
                  gap-3
                  bg-[#5b2419]
                  px-7
                  py-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#431a12]
                  hover:shadow-xl
                  active:scale-95
                "
              >
                Read More

                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </Link>
            </div>

            {/* Project navigation */}

            <div className="mt-12 flex items-center gap-3">
              {projects.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => changeProject(index)}
                  aria-label={`View ${item.shortTitle}`}
                  disabled={isChanging}
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-500
                    disabled:cursor-not-allowed

                    ${
                      index === activeProject
                        ? "w-12 bg-[#5b2419]"
                        : "w-5 bg-[#5b2419]/20 hover:bg-[#5b2419]/50"
                    }
                  `}
                />
              ))}

              <span
                className="
                  ml-2
                  text-[10px]
                  font-bold
                  tracking-[0.15em]
                  text-[#5b2419]/50
                "
              >
                0{activeProject + 1} / 0{projects.length}
              </span>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE - DESKTOP
          ================================================= */}

          <div
            className="
              absolute
              right-[-70px]
              top-1/2
              hidden
              h-[560px]
              w-[560px]
              -translate-y-1/2
              lg:block
              xl:right-[-20px]
            "
          >
            {/* =================================================
                LARGE CIRCULAR IMAGE
            ================================================= */}

            <div
              className="
                absolute
                inset-0
                animate-project-spin
                rounded-full
                bg-[#f6d5c8]
                p-[8px]
              "
            >
              <div className="h-full w-full overflow-hidden rounded-full">
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
              </div>
            </div>

            {/* Image overlay */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-full
                bg-gradient-to-tr
                from-black/10
                via-transparent
                to-white/10
              "
            />

            {/* =================================================
                CENTER PROJECT CIRCLE
            ================================================= */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                flex
                h-[270px]
                w-[270px]
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/70
                bg-white/75
                shadow-[0_20px_80px_rgba(91,36,25,0.12)]
                backdrop-blur-xl
              "
            >
              {/* Inner ring */}

              <div
                className="
                  absolute
                  inset-4
                  rounded-full
                  border
                  border-[#f0a51a]/30
                "
              />

              {/* Content */}

              <div
                className="
                  relative
                  z-10
                  flex
                  flex-col
                  items-center
                  text-center
                "
              >
                {/* Icon */}

                <div
                  className="
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-[#f0a51a]/10
                    text-[#f0a51a]
                  "
                >
                  <span className="material-symbols-outlined text-3xl">
                    {project.icon}
                  </span>
                </div>

                {/* Label */}

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#f0a51a]
                  "
                >
                  Project
                </span>

                {/* Title */}

                <h3
                  className="
                    mt-2
                    max-w-[190px]
                    text-lg
                    font-bold
                    leading-tight
                    text-[#5b2419]
                  "
                >
                  {project.shortTitle}
                </h3>

                {/* Tagline */}

                <p
                  className="
                    mt-3
                    max-w-[180px]
                    text-[11px]
                    leading-5
                    text-[#6d514a]
                  "
                >
                  {project.label}
                </p>
              </div>
            </div>

            {/* =================================================
                DECORATIVE DOT
            ================================================= */}

            <div
              className="
                absolute
                bottom-[80px]
                left-[60px]
                h-4
                w-4
                rounded-full
                bg-[#f0a51a]
                shadow-lg
              "
            />
          </div>

          {/* =================================================
              MOBILE IMAGE
          ================================================= */}

          <div
            className="
              mt-12
              flex
              w-full
              justify-center
              lg:hidden
            "
          >
            <div
              className="
                relative
                h-[82vw]
                w-[82vw]
                max-h-[380px]
                max-w-[380px]
                shrink-0
                sm:h-[380px]
                sm:w-[380px]
              "
            >
              {/* Circular image */}

              <div
                className="
                  absolute
                  inset-0
                  animate-project-spin
                  rounded-full
                  bg-[#f6d5c8]
                  p-2
                "
              >
                <div className="h-full w-full overflow-hidden rounded-full">
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
                </div>
              </div>

              {/* Mobile center circle */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  h-[170px]
                  w-[170px]
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/70
                  bg-white/75
                  text-center
                  shadow-xl
                  backdrop-blur-xl
                  sm:h-[200px]
                  sm:w-[200px]
                "
              >
                <div>
                  {/* Icon */}

                  <span
                    className="
                      material-symbols-outlined
                      text-3xl
                      text-[#f0a51a]
                    "
                  >
                    {project.icon}
                  </span>

                  {/* Label */}

                  <p
                    className="
                      mt-2
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#f0a51a]
                    "
                  >
                    Project
                  </p>

                  {/* Title */}

                  <h3
                    className="
                      mt-1
                      max-w-[130px]
                      text-sm
                      font-bold
                      text-[#5b2419]
                      sm:max-w-[160px]
                      sm:text-base
                    "
                  >
                    {project.shortTitle}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-24
          w-full
          bg-gradient-to-t
          from-black/[0.02]
          to-transparent
        "
      />
    </section>
  );
}

export default ProjectsPreview;
