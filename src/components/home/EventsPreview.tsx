import { Link } from "react-router-dom";

const events = [
  {
    title: "MEDICAL CAMP",
    date: "Sat, 15 Jun 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtOq2B1aqLQ1X2CvcWb3cpDp5zOIkJ1q_SJQHXLWNl6Fu_ZSXZzfyaJ9_SsiEd_1L8cb0gRMCErk0Nfbq7kE0hxVy0kq-hYDQ0-I_iG2cVIKJO2lKceHAb7uUnaRxIK8roZIkuSuO1e5_2DScCM1fEH4GO1DTuUtGnC3FvYthEFTHkt6AV3VNAuyTX_FEDEPYR9_h5KES0cGOLU9C9TeDzADM8PY4U0JWpFfIVfd36Gs-fq8znsPfx",
    description: "Free health check-ups, counselling and medication for the community.",
  },
  {
    title: "WORSHIP EVENING",
    date: "Fri, 21 Jun 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCitBdOWdD8VaqWbrGi4ykjGSyAcdy7UsrWsYMKjoz6NtMBuTgqcNbCHEZmL7bTE08cL0VUMk5U_EjoX8fiArZ8zBz1AjYuwnxPPK6Cq8kQjd677ohDt6QIjX4wCi0FcYh3HSOy-tyg_Zo_BeJODlj5-OQR9hvco5NzaatRK5sxHDVRVnt_JVwNVhvJNjnCS2B6JN3UoCEiIaSPn2Zo7hsFQmAxVSlD4fhPbIqLbOiqUQ7AgvJRd8Hl",
    description: "An evening of praise, worship and encounter in God's presence.",
  },
  {
    title: "YOUTH CONFERENCE",
    date: "Sun, 30 Jun - Wed, 03 Jul",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKVfQbsW4qDO84a_T-Ri7pOXKw86HfWvI0Az5Pv5DSn3qDupXD_KqSjd4P_ven6NLohni4pwCwPFjr1XFGW1Zxn3ShvEk5tcTHqEVeSAiWJREvtFrdOTLrNurgku3rw7u0qbkt0gnVRxmV2KIYP5YhnDi8muqbRk6x1EFN5SLM232JBFUulBB9637o-w-5EScWmVTBQAhJnzYXYYNAblNGmAxXFsNX-CwVmJkusgu7HNyacbQ6j4Dc",
    description: "Three days of teaching, mentorship and fellowship for young people.",
  },
  {
    title: "PRAYER MEETING",
    date: "Every Friday, 06:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYyYn7n686lKpZZ6nWxbuhsdGfeeq6GDWwF9EIsJ5wjkE80ltVJIg9AeozofCBUFVjKAdgXvW9XWFAyuFmGGpK711M7Gp3jsy0vF8bYAplYyOwclQTC1ATGmp3DzyuIxEF74vW8BRyMkw27CDYA_Gzoeshj0RDt_Rz5-5Xp80ilISm62lg6V0VcO29d-NNWc5zc7KlorT3ZRtnjur90bTn3LM0DPIb8oU-bEJSLrhUStDSW6N1erWn",
    description: "Corporate intercession for families, the church and the nation.",
  },
];

interface EventsPreviewProps {
  title?: string;
  showViewAll?: boolean;
}

function EventsPreview({
  title = "UPCOMING EVENTS",
  showViewAll = true,
}: EventsPreviewProps) {
  return (
    <section className="bg-[#eeeef0] py-[120px]">
      <div className="mx-auto max-w-[1280px] px-5 md:px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-[32px] font-bold uppercase tracking-tight text-[#310065]">{title}</h2>
          {showViewAll ? (
            <Link className="flex items-center gap-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#ba002c] hover:underline" to="/events">
              View all events <span className="material-symbols-outlined text-sm">arrow_outward</span>
            </Link>
          ) : null}
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {events.map((event) => (
            <div key={event.title} className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-lg">
              <div className="h-40 overflow-hidden">
                <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
              </div>
              <div className="flex-grow p-6">
                <p className="mb-2 flex items-center gap-1 text-[12px] font-bold uppercase tracking-[0.2em] text-[#ba002c]">
                  <span className="material-symbols-outlined text-sm">calendar_month</span> {event.date}
                </p>
                <h3 className="mb-2 text-[24px] font-semibold text-[#310065]">{event.title}</h3>
                <p className="text-sm leading-7 text-[#4a4452]">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventsPreview;
