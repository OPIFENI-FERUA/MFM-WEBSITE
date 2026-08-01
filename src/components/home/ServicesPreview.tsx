import { Link } from "react-router-dom";
import {
  Church,
  BookOpen,
  Flame,
  ArrowRight,
} from "lucide-react";

import worshipImage from "../../assets/images/worship.jpg";

interface Service {
  title: string;
  time: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Sunday Worship Service",
    time: "09:00 AM",
    description: "Worship, Word, Prayer and Fellowship.",
  },
  {
    title: "Wednesday Bible Study",
    time: "06:00 PM",
    description: "Learning and growing deeper in God's Word.",
  },
  {
    title: "Friday Prayer Service",
    time: "06:00 PM",
    description: "Prayer, revival and spiritual renewal.",
  },
];

function ServicesPreview() {
  return (
    <section className="grid min-h-screen md:grid-cols-2">
      {/* LEFT IMAGE */}
      <div
        className="relative min-h-[500px] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${worshipImage})`,
        }}
      >
        <div className="absolute inset-0" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div className="max-w-lg text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
              Our Services
            </p>

            <h2 className="mt-5 text-4xl font-bold uppercase md:text-5xl">
              Experience Worship & Community
            </h2>

            <p className="mt-6 leading-8 text-white/80">
              Join us every week as we worship together, study God's Word,
              strengthen our faith, and experience His transforming presence.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex items-center bg-[#faf9fc] px-6 py-20 md:px-12 lg:px-20">
        <div className="w-full">

          <div className="rounded-[2rem] bg-white p-8 shadow-[0_25px_70px_rgba(49,0,101,0.08)]">

            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d4af37]">
                  Weekly Schedule
                </p>

                <h3 className="mt-3 text-3xl font-bold text-[#310065]">
                  Join Us This Week
                </h3>
              </div>
            </div>

            <div className="space-y-5">

              {services.map((service) => {
                const Icon =
                  service.title.includes("Sunday")
                    ? Church
                    : service.title.includes("Wednesday")
                    ? BookOpen
                    : Flame;

                return (
                  <div
                    key={service.title}
                    className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-5 transition hover:border-[#d4af37] hover:shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#310065]/10">
                        <Icon
                          size={22}
                          className="text-[#310065]"
                        />
                      </div>

                      <div>
                        <h4 className="font-bold text-[#310065]">
                          {service.title}
                        </h4>

                        <p className="mt-1 text-sm text-gray-500">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <span className="rounded-full bg-[#310065] px-4 py-2 text-sm font-semibold text-white">
                      {service.time}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-2xl  p-6 text-white">

              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#310065] transition hover:scale-105"
              >
                View All Services
                <ArrowRight size={18} />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;