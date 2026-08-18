import { Link } from "react-router-dom";

interface EventItem {
  title: string;
  date: string;
  image: string;
  description: string;
  time?: string;
  link?: string;
}

const events: EventItem[] = [
  {
    title: "MEDICAL CAMP",
    date: "Sat, 15 Jun 2024",
    time: "8:00 AM – 4:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtOq2B1aqLQ1X2CvcWb3cpDp5zOIkJ1q_SJQHXLWNl6Fu_ZSXZzfyaJ9_SsiEd_1L8cb0gRMCErk0Nfbq7kE0hxVy0kq-hYDQ0-I_iG2cVIKJO2lKceHAb7uUnaRxIK8roZIkuSuO1e5_2DScCM1fEH4GO1DTuUtGnC3FvYthEFTHkt6AV3VNAuyTX_FEDEPYR9_h5KES0cGOLU9C9TeDzADM8PY4U0JWpFfIVfd36Gs-fq8znsPfx",
    description: "Free health check-ups, counselling and medication for the community.",
  },
  {
    title: "WORSHIP EVENING",
    date: "Fri, 21 Jun 2024",
    time: "6:00 PM – 9:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCitBdOWdD8VaqWbrGi4ykjGSyAcdy7UsrWsYMKjoz6NtMBuTgqcNbCHEZmL7bTE08cL0VUMk5U_EjoX8fiArZ8zBz1AjYuwnxPPK6Cq8kQjd677ohDt6QIjX4wCi0FcYh3HSOy-tyg_Zo_BeJODlj5-OQR9hvco5NzaatRK5sxHDVRVnt_JVwNVhvJNjnCS2B6JN3UoCEiIaSPn2Zo7hsFQmAxVSlD4fhPbIqLbOiqUQ7AgvJRd8Hl",
    description: "An evening of praise, worship and encounter in God's presence.",
  },
  {
    title: "YOUTH CONFERENCE",
    date: "Sun, 30 Jun - Wed, 03 Jul",
    time: "All Day Event",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKVfQbsW4qDO84a_T-Ri7pOXKw86HfWvI0Az5Pv5DSn3qDupXD_KqSjd4P_ven6NLohni4pwCwPFjr1XFGW1Zxn3ShvEk5tcTHqEVeSAiWJREvtFrdOTLrNurgku3rw7u0qbkt0gnVRxmV2KIYP5YhnDi8muqbRk6x1EFN5SLM232JBFUulBB9637o-w-5EScWmVTBQAhJnzYXYYNAblNGmAxXFsNX-CwVmJkusgu7HNyacbQ6j4Dc",
    description: "Three days of teaching, mentorship and fellowship for young people.",
  },
];

// Helper to extract day & month dynamically from date strings
const parseDateBadge = (dateStr: string) => {
  const dayMatch = dateStr.match(/\b\d{1,2}\b/);
  const monthMatch = dateStr.match(/Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec/i);

  return {
    day: dayMatch ? dayMatch[0].padStart(2, "0") : "15",
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
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#540a8c]">
              Don't Miss Out
            </span>
            <h2 className="mt-1 text-3xl font-black uppercase tracking-tight text-[#540a8c] sm:text-4xl">
              {title}
            </h2>
            <div className="mt-2.5 h-1 w-14 rounded-full bg-[#f2a900]" />
          </div>

          {showViewAll && (
            <Link
              to="/events"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#540a8c] transition-all hover:text-[#540a8c]"
            >
              <span>View all events</span>
              <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          )}
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.slice(0, 3).map((event, index) => {
            const { day, month } = parseDateBadge(event.date);

            return (
              <div
                key={`${event.title}-${index}`}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-100 bg-white p-2.5 shadow-[0_10px_30px_rgba(107,114,128,0.16)] ring-1 ring-gray-100/80 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(107,114,128,0.2)]"
              >
                <div>
                  {/* Image Container with Floating Badge */}
                  <div className="relative h-52 w-full overflow-hidden rounded-2xl bg-slate-100">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Floating Glassmorphic Date Badge */}
                    <div className="absolute left-4 top-4 flex flex-col items-center justify-center rounded-2xl bg-[#540a8c]/90 px-4 py-2 text-white shadow-xl backdrop-blur-md ring-1 ring-white/10">
                      <span className="text-2xl font-black leading-none tracking-tight">
                        {day}
                      </span>
                      <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#540a8c]">
                        {month}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="px-3 pt-5 pb-2">
                    <h3 className="text-xl font-bold uppercase tracking-wide text-[#000000]">
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
                        <span>{event.time || "Check schedule"}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-xs leading-relaxed text-slate-600 line-clamp-2">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="p-2 pt-4">
                  <Link
                    to={event.link || "/register"}
                    className="block w-full rounded-xl bg-[#540a8c] py-3.5 text-center text-xs font-bold uppercase tracking-widest text-white shadow-md shadow-gray-200 transition-all duration-300 hover:bg-[#d4af37] hover:text-[#540a8c] hover:shadow-lg hover:shadow-gray-300 active:scale-[0.98]"
                  >
                    REGISTER NOW
                  </Link>
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