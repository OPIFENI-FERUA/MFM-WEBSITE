import { Link } from "react-router-dom";
import event1 from "../../assets/images/medical camp.jpeg";
import event2 from "../../assets/images/worship evening.jpg";


interface EventItem {
  title: string;
  date: string;
  image: string;
  description: string;
  time?: string;
  link?: string;
  status?: "upcoming" | "past";
}

const events: EventItem[] = [
  {
    title: "MEDICAL CAMP",
    date: "Sat, 19 Sep 2026",
    time: "8:00 AM – 4:00 PM",
    image: event1,
    description:
      "Free health check-ups, counselling and medication for the community.",
    status: "upcoming",
  },
  {
    title: "WORSHIP EVENING",
    date: "Fri, 7 Aug 2025",
    time: "5:00 PM – 8:00 PM",
    image:
    event2,
    description:
      "An evening of praise, worship and encounter in God's presence.",
    status: "past",
  },
];

const parseDateBadge = (dateStr: string) => {
  const dayMatch = dateStr.match(/\b\d{1,2}\b/);

  const monthMatch = dateStr.match(
    /Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec/i
  );

  return {
    day: dayMatch ? dayMatch[0].padStart(2, "0") : "00",
    month: monthMatch ? monthMatch[0].toUpperCase() : "EVENT",
  };
};

interface EventsPreviewProps {
  title?: string;
  showViewAll?: boolean;
}

function EventsPreview({
  title = "UPCOMING EVENTS",
  showViewAll = true,
}: EventsPreviewProps) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">

        {/* =====================================
            SECTION HEADER
        ===================================== */}
        <div className="mb-12 flex flex-col items-center justify-center gap-5 text-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7e099e]">
              Don't Miss Out
            </span>

            <h2 className="mt-1 text-3xl font-black uppercase tracking-tight text-[#7e099e] sm:text-4xl">
              {title}
            </h2>

            <div className="mx-auto mt-2.5 h-1 w-14 rounded-full bg-[#f2a900]" />
          </div>

          {showViewAll && (
            <Link
              to="/events"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-xs
                font-bold
                uppercase
                tracking-widest
                text-[#7e099e]
                transition-all
                duration-300
                hover:text-[#d4af37]
              "
            >
              <span>View all events</span>

              <span
                className="
                  material-symbols-outlined
                  text-sm
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                arrow_forward
              </span>
            </Link>
          )}
        </div>

        {/* =====================================
            EVENTS GRID
        ===================================== */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => {
            const { day, month } = parseDateBadge(event.date);
            const isPast = event.status === "past";

            return (
              <div
                key={`${event.title}-${index}`}
                className="
                  group
                  flex
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-3xl
                  border
                  border-gray-100
                  bg-white
                  p-2.5
                  shadow-[0_10px_30px_rgba(107,114,128,0.16)]
                  ring-1
                  ring-gray-100/80
                  transition-all
                  duration-500
                  hover:-translate-y-1.5
                  hover:shadow-[0_16px_40px_rgba(107,114,128,0.2)]
                "
              >
                <div>

                  {/* =====================================
                      IMAGE
                  ===================================== */}
                  <div className="relative h-52 w-full overflow-hidden rounded-2xl bg-slate-100">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-105
                      "
                    />

                    {/* Dark overlay for past events */}
                    {isPast && (
                      <div className="absolute inset-0 bg-black/25" />
                    )}

                    {/* =====================================
                        DATE BADGE
                    ===================================== */}
                    <div
                      className="
                        absolute
                        left-4
                        top-4
                        flex
                        flex-col
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#7e099e]/95
                        px-4
                        py-2
                        text-white
                        shadow-xl
                        backdrop-blur-md
                        ring-1
                        ring-white/10
                      "
                    >
                      <span className="text-2xl font-black leading-none tracking-tight">
                        {day}
                      </span>

                      <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#ffd97a]">
                        {month}
                      </span>
                    </div>

                    {/* =====================================
                        PAST EVENT BADGE
                    ===================================== */}
                    {isPast && (
                      <div
                        className="
                          absolute
                          bottom-4
                          right-4
                          rounded-full
                          bg-black/70
                          px-3
                          py-1.5
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-widest
                          text-white
                          backdrop-blur-sm
                        "
                      >
                        Past Event
                      </div>
                    )}
                  </div>

                  {/* =====================================
                      BODY CONTENT
                  ===================================== */}
                  <div className="px-3 pb-2 pt-5 text-left">
                    <h3
                      className="
                        text-xl
                        font-bold
                        uppercase
                        tracking-wide
                        text-black
                      "
                    >
                      {event.title}
                    </h3>

                    {/* Meta Details */}
                    <div className="mt-4 space-y-2 text-xs font-semibold text-slate-500">

                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-base text-[#d4af37]">
                          calendar_today
                        </span>

                        <span>{event.date}</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-base text-[#d4af37]">
                          schedule
                        </span>

                        <span>
                          {event.time || "Check schedule"}
                        </span>
                      </div>

                    </div>

                    {/* Description */}
                    <p className="mt-4 line-clamp-2 text-xs leading-relaxed text-slate-600">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* =====================================
                    ACTION
                ===================================== */}
                <div className="p-2 pt-4">
                  {isPast ? (
                    <div
                      className="
                        flex
                        w-full
                        items-center
                        justify-center
                        rounded-xl
                        bg-slate-100
                        py-3.5
                        text-xs
                        font-bold
                        uppercase
                        tracking-widest
                        text-slate-400
                      "
                    >
                      <span className="material-symbols-outlined mr-2 text-sm">
                        event_busy
                      </span>

                      Event Ended
                    </div>
                  ) : (
                    <Link
                      to={event.link || "/events"}
                      className="
                        block
                        w-full
                        rounded-xl
                        bg-[#7e099e]
                        py-3.5
                        text-center
                        text-xs
                        font-bold
                        uppercase
                        tracking-widest
                        text-white
                        shadow-md
                        shadow-gray-200
                        transition-all
                        duration-300
                        hover:bg-[#d4af37]
                        hover:text-[#7e099e]
                        hover:shadow-lg
                        hover:shadow-gray-300
                        active:scale-[0.98]
                      "
                    >
                      View Event
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default EventsPreview;