
import { Link } from "react-router-dom";
import {
  Calendar,
  User,
  PlayCircle,
  ArrowUpRight,
  Loader2,
} from "lucide-react";
import { useSermons } from "../../hooks/useSermons";

interface SermonsPreviewProps {
  limit?: number;
  title?: string;
  showViewAll?: boolean;
}

const MIXLR_CHANNEL_URL = import.meta.env.VITE_MIXLR_CHANNEL_URL;

function SermonsPreview({
  limit = 3,
  title = "Latest Sermons",
  showViewAll = true,
}: SermonsPreviewProps) {
  const { sermons, loading, error } = useSermons(limit);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 text-center">

        {/* HEADER */}
        <div className="mb-14 flex flex-col items-center justify-center gap-6">
          <div>
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#d4af37]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7e099e]">
                Word &amp; Worship
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#7e099e] md:text-4xl">
              {title}
            </h2>
          </div>

          {showViewAll && (
            <Link
              to="/sermons"
              className="
                group
                flex
                items-center
                gap-2
                text-sm
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#7e099e]
                transition-colors
                duration-200
                hover:text-[#d4af37]
              "
            >
              View All Sermons

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>
          )}
        </div>

        {/* LOADING */}
        {loading && (
          <div className="flex justify-center py-20">
            <Loader2
              size={32}
              className="animate-spin text-[#7e099e]"
            />
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="py-10">
            <p className="text-sm text-gray-500">
              Unable to load sermons at the moment.
            </p>
          </div>
        )}

        {/* SERMON CARDS */}
        {!loading && !error && sermons.length > 0 && (
          <div className="grid gap-8 md:grid-cols-3">
            {sermons.map((sermon) => (
              <article
                key={sermon.id}
                className="
                  group
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-100
                  bg-white
                  text-left
                  shadow-[0_10px_30px_rgba(107,114,128,0.16)]
                  ring-1
                  ring-gray-100/80
                  transition-all
                  duration-300
                  hover:-translate-y-1.5
                  hover:shadow-[0_16px_40px_rgba(107,114,128,0.2)]
                "
              >
                {/* IMAGE */}
                <div className="relative aspect-video shrink-0 overflow-hidden bg-gray-100">
                  <img
                    src={sermon.image}
                    alt={sermon.title}
                    className="
                      block
                      h-full
                      w-full
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* IMAGE OVERLAY */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/60
                      via-black/10
                      to-transparent
                    "
                  />

                  {/* LABEL */}
                  <span
                    className="
                      absolute
                      left-4
                      top-4
                      rounded-full
                      bg-[#d4af37]
                      px-3
                      py-1
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#7e099e]
                    "
                  >
                    Latest Sermon
                  </span>

                  {/* PLAY ICON */}
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  >
                    <PlayCircle
                      size={56}
                      className="text-white drop-shadow-lg"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-6">

                  {/* TITLE */}
                  <div className="min-h-[64px]">
                    <h3
                      className="
                        text-lg
                        font-bold
                        leading-snug
                        text-[#000000]
                      "
                    >
                      {sermon.title}
                    </h3>
                  </div>

                  {/* META */}
                  <div
                    className="
                      mt-4
                      flex
                      min-h-[40px]
                      flex-wrap
                      items-start
                      gap-4
                      text-xs
                      text-gray-500
                    "
                  >
                    <span className="flex items-center gap-1.5">
                      <Calendar
                        size={14}
                        className="shrink-0 text-[#d4af37]"
                      />

                      {sermon.date}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <User
                        size={14}
                        className="shrink-0 text-[#d4af37]"
                      />

                      {sermon.pastor}
                    </span>
                  </div>

                  {/* BUTTONS */}
                  <div className="mt-auto flex gap-2.5 pt-6">

                    {/* WATCH */}
                    <a
                      href={sermon.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        flex-1
                        items-center
                        justify-center
                        rounded-lg
                        bg-[#7e099e]
                        px-4
                        py-2.5
                        text-center
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider
                        text-white
                        transition-colors
                        duration-200
                        hover:bg-[#d4af37]
                        hover:text-[#7e099e]
                      "
                    >
                      Watch
                    </a>

                    {/* LISTEN */}
                    <a
                      href={MIXLR_CHANNEL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        flex-1
                        items-center
                        justify-center
                        rounded-lg
                        bg-[#8b1e3f]
                        px-4
                        py-2.5
                        text-center
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider
                        text-white
                        transition-all
                        duration-200
                        hover:bg-[#d4af37]
                        hover:text-[#7e099e]
                      "
                    >
                      Listen
                    </a>

                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* EMPTY STATE */}
        {!loading && !error && sermons.length === 0 && (
          <p className="py-10 text-gray-500">
            No sermons available at the moment.
          </p>
        )}
      </div>
    </section>
  );
}

export default SermonsPreview;
