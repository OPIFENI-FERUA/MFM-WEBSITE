import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Sprout, Wallet, X } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import {
  churchProjects,
  type ChurchProject,
  type ProjectPhoto,
} from "../data/projects";

type LightboxPhoto = ProjectPhoto & { title: string };

function ProjectGallery({
  project,
  onOpen,
}: {
  project: ChurchProject;
  onOpen: (photo: LightboxPhoto) => void;
}) {
  const [hero, ...rest] = project.photos;

  return (
    <div className="border-t border-gray-100 bg-[#FAF8F5] p-5 md:p-7">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#7e099e]">
        Photographs
      </p>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {[hero, ...rest].map((photo) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => onOpen({ ...photo, title: project.title })}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/25" />
          </button>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  const [lightbox, setLightbox] = useState<LightboxPhoto | null>(null);

  const completed = churchProjects.filter(
    (project) => project.status === "completed"
  );
  const ongoing = churchProjects.filter(
    (project) => project.status === "ongoing"
  );

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#000000]">
      <PageHero
        label="Our Work"
        title="Projects"
        description="Skills training, care for the elderly, and community outreach — with the church farm and multi-purpose cooperative still growing."
      />

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#7e099e]">
            MFM Kanyanya
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#7e099e] md:text-4xl">
            Ministry that reaches beyond the pulpit
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-600 md:text-lg">
            The main work we have done is training people with skills, honouring
            the elderly, and going out into the community. Two projects are
            still underway: the church farm and the church cooperative.
          </p>
        </div>
      </section>

      <section className="px-6 pb-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D9A441]">
              Completed work
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#7e099e] md:text-4xl">
              Main projects
            </h2>
          </div>

          <div className="space-y-12">
            {completed.map((project, index) => {
              const reverse = index % 2 === 1;
              const hero = project.photos[0];

              return (
                <article
                  key={project.id}
                  className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-[0_20px_50px_rgba(114,17,110,0.07)]"
                >
                  <div
                    className={`grid lg:grid-cols-2 ${
                      reverse ? "lg:[&>div:first-child]:order-2" : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setLightbox({ ...hero, title: project.title })
                      }
                      className="relative min-h-[260px] overflow-hidden lg:min-h-[460px]"
                    >
                      <img
                        src={hero.src}
                        alt={hero.alt}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </button>

                    <div className="flex flex-col justify-center p-8 md:p-12">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D9A441]">
                        {project.category}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold leading-tight text-[#7e099e] md:text-4xl">
                        {project.title}
                      </h3>
                      <p className="mt-3 flex items-center gap-2 text-sm font-medium text-gray-500">
                        <MapPin size={16} className="text-[#7e099e]" />
                        {project.location}
                      </p>
                      <p className="mt-5 text-base leading-8 text-gray-600">
                        {project.summary}
                      </p>
                      {project.story.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  <ProjectGallery project={project} onOpen={setLightbox} />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D9A441]">
              Still in progress
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#7e099e] md:text-4xl">
              Ongoing projects
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-gray-600">
              These two works are active now. Members can still pray, give, and
              serve as the farm and the cooperative take shape.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {ongoing.map((project) => {
              const Icon =
                project.category === "Multi-Purpose Cooperative"
                  ? Wallet
                  : Sprout;
              const hero = project.photos[0];

              return (
                <article
                  key={project.id}
                  className="flex flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-[0_20px_50px_rgba(114,17,110,0.07)]"
                >
                  <div className="relative min-h-[240px]">
                    <img
                      src={hero.src}
                      alt={hero.alt}
                      className="h-64 w-full object-cover md:h-72"
                    />
                    <span className="absolute left-5 top-5 rounded-full bg-[#7A1022] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                      Ongoing
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#7A1022]/10 text-[#7e099e]">
                      <Icon size={22} />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D9A441]">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-[#7e099e] md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex items-center gap-2 text-sm font-medium text-gray-500">
                      <MapPin size={16} className="text-[#7e099e]" />
                      {project.location}
                    </p>
                    <p className="mt-4 text-base leading-8 text-gray-600">
                      {project.summary}
                    </p>
                    {project.story.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="mt-4 text-sm leading-7 text-gray-600"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <ProjectGallery project={project} onOpen={setLightbox} />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[28px] bg-[#7A1022] px-8 py-14 text-center text-white md:px-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D9A441]">
            Partner with us
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Partner with the gospel mission
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/80">
            If you would like to support the church farm, strengthen the
            cooperative, or help with skills, elderly care, or outreach, the
            church office is ready to receive you. Partnership is stronger when
            it is rooted in the gospel and the mission of Christ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/giving"
              className="rounded-full bg-[#D9A441] px-7 py-3 text-sm font-bold uppercase tracking-wider text-[#7e099e] transition hover:bg-[#D9A441]"
            >
              Support the ministry
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white/10"
            >
              Contact the office
            </Link>
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 md:p-10"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 text-white/80 transition hover:text-white md:right-8 md:top-8"
            aria-label="Close photograph"
          >
            <X size={30} />
          </button>
          <div
            className="w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[75vh] w-full rounded-md object-contain"
            />
            <p className="mt-4 text-center text-sm text-white/80">
              {lightbox.alt}
            </p>
            <p className="mt-1 text-center text-base font-semibold text-[#D9A441]">
              {lightbox.title}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export default Projects;
