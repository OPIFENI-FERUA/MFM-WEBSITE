import {
  Church,
  Flame,
  Users,
  HeartHandshake,
  Shield,
  CalendarDays,
} from "lucide-react";
import PageHero from "../components/layout/PageHero";

interface Service {
  title: string;
  schedule: string;
  description: string;
  icon: React.ElementType;
  category: string;
}

const services: Service[] = [
  {
    title: "Sunday Worship Service",
    schedule: "Every Sunday | 09:00 AM - 12:00 PM",
    description:
      "Join us for a powerful time of worship, prayer, the Word of God, and fellowship.",
    icon: Church,
    category: "Weekly Service",
  },
  {
    title: "Holy Communion Sunday",
    schedule: "Every 1st Sunday | 08:00 AM - 12:00 PM",
    description:
      "A special time of worship, prayer, and participation in Holy Communion.",
    icon: HeartHandshake,
    category: "Monthly Service",
  },
  {
    title: "Power Must Change Hands",
    schedule: "Every 1st Saturday | 08:00 AM - 12:00 PM",
    description:
      "A powerful monthly prayer program focused on spiritual breakthrough and transformation.",
    icon: Flame,
    category: "Monthly Program",
  },
  {
    title: "Youth Fellowship",
    schedule: "Every Friday | 06:00 PM - 08:00 PM",
    description:
      "A time for young people to grow in faith, fellowship, prayer, and God's Word.",
    icon: Users,
    category: "Weekly Fellowship",
  },
  {
    title: "Weekly Deliverance Service",
    schedule: "1st & 2nd Week of Every Month",
    description:
      "A special time of intensive prayer, deliverance, spiritual warfare, and breakthrough.",
    icon: Shield,
    category: "Deliverance Service",
  },
  {
    title: "Men of Valor Fellowship",
    schedule: "Last Thursday of Every Month",
    description:
      "A fellowship for men to grow spiritually, build godly character, and strengthen one another.",
    icon: Users,
    category: "Monthly Fellowship",
  },
];

function Services() {
  return (
    <main className="min-h-screen bg-white text-black">
      <PageHero
        label="Services"
        title="Services"
        description="Explore our worship services, prayer meetings, and spiritual support programs."
      />

      {/* SERVICES INTRO */}
      <section className="px-6 pb-10 pt-16 md:px-10 md:pt-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D9A441]">
            Join Our Community
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#540a8c] md:text-5xl">
            Our Church Services
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-700">
            There is a place for you to worship, pray, grow in God's Word,
            and experience fellowship with the family of Christ.
          </p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-gray-100
                    bg-white
                    p-7
                    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-[#D9A441]/50
                    hover:shadow-[0_20px_45px_rgba(84,10,140,0.15)]
                  "
                >
                  {/* TOP ACCENT */}
                  <div className="absolute left-0 top-0 h-1 w-full bg-[#7A1022]" />

                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#7A1022]/10
                      text-[#540a8c]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <Icon size={27} />
                  </div>

                  {/* CATEGORY */}
                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#D9A441]">
                    {service.category}
                  </p>

                  {/* TITLE */}
                  <h3 className="mt-3 text-2xl font-bold leading-tight text-black">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-4 min-h-[72px] text-sm leading-7 text-gray-700">
                    {service.description}
                  </p>

                  {/* SCHEDULE */}
                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      bg-[#7A1022]
                      px-4
                      py-3
                      text-white
                    "
                  >
                    <CalendarDays
                      size={19}
                      className="shrink-0 text-[#D9A441]"
                    />

                    <span className="text-sm font-semibold leading-5">
                      {service.schedule}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* BOTTOM INVITATION */}
      <section className="bg-[#7A1022] px-6 py-16 text-center md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D9A441]">
            You Are Welcome
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Come and Worship With Us
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/80">
            Whether you are joining us for worship, prayer, fellowship, or a
            special program, we look forward to welcoming you into our church
            family.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Services;
