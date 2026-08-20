import { useState } from "react";
import PageHero from "../components/layout/PageHero";

type BranchId =
  | "about"
  | "worldwide"
  | "leadership"
  | "locations"
  | "ministries";

type Branch = {
  id: BranchId;
  label: string;
  title: string;
  content?: string;
  points?: string[];
};

const branches: Branch[] = [
  {
    id: "about",
    label: "About Us",
    title: "About Mountain of Fire and Miracles Ministries",
    content:
      "Mountain of Fire and Miracles Ministries is a full Gospel Christian ministry devoted to the revival of Apostolic signs, wonders and miracles and the demonstration of the power of God to deliver, transform and restore lives. The ministry places strong emphasis on prayer, holiness, evangelism, spiritual warfare, discipleship and a personal relationship with the Holy Spirit.",
    points: [
      "Vision: To raise a people of prayer who live in holiness, walk in victory and impact their communities for Christ.",
      "Mission: To proclaim the full Gospel, equip believers for spiritual warfare and demonstrate God's love through service.",
      "MFM was registered with the Registrar of Companies, Kampala, Uganda on May 14, 2004.",
      "The first service in Uganda was held on June 12, 2004 at Buganga Road Primary School, Kampala.",
      "In July 2006, the church acquired land in Kanyanya where the Regional Headquarters is presently located.",
    ],
  },

  {
    id: "worldwide",
    label: "MFM Worldwide",
    title: "MFM Around the World",
    content:
      "Mountain of Fire and Miracles Ministries is an international Christian ministry with its headquarters in Lagos, Nigeria. The ministry has a worldwide presence and continues to pursue its mandate of preaching the Gospel, raising prayer warriors, teaching believers spiritual warfare and proclaiming the power of God.",
    points: [
      "International Headquarters – Lagos, Nigeria",
      "MFM churches and branches in different parts of the world",
      "Strong emphasis on prayer, holiness and spiritual warfare",
      "Evangelism and the propagation of the Gospel",
      "Raising an aggressive and spiritually equipped end-time army for the Lord",
    ],
  },

  {
    id: "leadership",
    label: "Our Leadership",
    title: "MFM Uganda Leadership Structure",
    content:
      "MFM Uganda operates through a structured leadership and administrative system designed to provide spiritual oversight, pastoral care and effective administration of the ministry.",
    points: [
      "General Overseer – Provides overall spiritual direction and leadership of the international ministry.",
      "Regional Overseer – Provides spiritual and administrative oversight of the ministry within the region.",
      "Assistant Pastors (APs) – Support the pastoral leadership and provide spiritual care, teaching and supervision.",
      "Church Administration – Coordinates the day-to-day administrative activities of the church and supports ministry operations.",
      "Accounts & Finance – Responsible for financial records, accountability, budgeting and financial administration.",
      "Department Heads – Provide leadership and coordination within the different departments and ministry units.",
      "Ministry Workers – Serve in various departments and support the work of the church.",
    ],
  },

  {
    id: "locations",
    label: "Other Locations",
    title: "MFM Locations in Uganda",
    content:
      "MFM Uganda has churches and branches in different parts of the country. These locations enable the ministry to reach more communities with the Gospel and provide places where believers can worship, pray, receive teaching and fellowship.",
    points: [
      "MFM Regional Headquarters – Kanyanya, Kampala",
      "MFM branches in Kampala and surrounding areas",
      "MFM churches and branches in other regions of Uganda",
      "Prayer and fellowship centres",
      "Evangelism and outreach locations",
    ],
  },

  {
    id: "ministries",
    label: "Ministries",
    title: "Our Ministries",
    content:
      "MFM Kanyanya provides different ministries and departments designed to help people grow spiritually, serve God and participate in the work of the church.",
    points: [
      "Evangelism & Outreach",
      "Deliverance Ministry",
      "Prayer Ministry",
      "Discipleship & Bible Teaching",
      "Youth Ministry",
      "Children's Ministry",
      "Men's Ministry",
      "Women's Ministry",
      "Choir & Music Ministry",
      "Welfare & Community Service",
    ],
  },
];

function About() {
  const [activeBranch, setActiveBranch] = useState<BranchId>("about");

  const activeContent = branches.find(
    (branch) => branch.id === activeBranch
  );

  return (
    <main className="bg-[#FAF8F5] text-[#540a8c]">
      {/* ==================================================
          HERO
      ================================================== */}
      <PageHero
        label="About Us"
        title="About MFM Kanyanya"
        description="Discover our ministry, leadership, worldwide presence, locations and the ministries through which we serve."
      />

      {/* ==================================================
          MAIN SECTION
      ================================================== */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">

          {/* HEADER */}
          <div className="mb-14 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9A441]">
              Discover MFM Kanyanya
            </span>

            <h2 className="mt-3 text-4xl font-bold text-[#540a8c] md:text-5xl">
              Our Ministry
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#666666]">
              Learn more about who we are, our leadership, our worldwide
              ministry and the work we do across Uganda.
            </p>
          </div>

          {/* ==================================================
              ROOT
          ================================================== */}
          <div className="flex flex-col items-center">

            {/* MFM KANYANYA */}
            <div className="relative z-20 flex h-28 w-28 items-center justify-center rounded-full border-[5px] border-white bg-[#7A1022] text-center text-sm font-bold uppercase leading-tight tracking-[0.12em] text-white shadow-[0_10px_35px_rgba(84,10,140,0.3)] ring-2 ring-[#D9A441]">
              MFM
              <br />
              Kanyanya
            </div>

            {/* ROOT LINE */}
            <div className="h-14 w-[2px] bg-[#7A1022]" />

            {/* ==================================================
                FIVE BRANCHES
            ================================================== */}
            <div className="relative w-full max-w-7xl">

              {/* HORIZONTAL LINE */}
              <div className="absolute left-[10%] right-[10%] top-0 hidden h-[2px] bg-[#7A1022] lg:block" />

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">

                {branches.map((branch, index) => {
                  const isActive = activeBranch === branch.id;

                  return (
                    <button
                      key={branch.id}
                      type="button"
                      onClick={() => setActiveBranch(branch.id)}
                      className="group relative flex flex-col items-center focus:outline-none"
                    >
                      {/* VERTICAL CONNECTION */}
                      <div className="hidden h-10 w-[2px] bg-[#7A1022] lg:block" />

                      {/* NODE */}
                      <span
                        className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white text-xs font-bold shadow-lg transition-all duration-300 ${
                          isActive
                            ? "scale-110 bg-[#7A1022] text-white ring-2 ring-[#D9A441]"
                            : "bg-[#FAF8F5] text-[#540a8c] ring-1 ring-[#7A1022]/20 group-hover:scale-110 group-hover:bg-[#5F0C1B] group-hover:text-white"
                        }`}
                      >
                        {index + 1}
                      </span>

                      {/* LABEL */}
                      <span
                        className={`mt-4 flex min-h-[52px] w-full items-center justify-center rounded-full px-3 py-3 text-center text-[10px] font-bold uppercase leading-4 tracking-[0.06em] transition-all duration-300 sm:text-xs ${
                          isActive
                            ? "bg-[#7A1022] text-white shadow-lg"
                            : "bg-[#FAF8F5] text-[#540a8c] group-hover:bg-[#5F0C1B]/10"
                        }`}
                      >
                        {branch.label}
                      </span>

                      {/* GOLD UNDERLINE */}
                      <span
                        className={`mt-3 h-1 rounded-full transition-all duration-300 ${
                          isActive
                            ? "w-10 bg-[#D9A441]"
                            : "w-5 bg-[#D9A441]/30 group-hover:w-10"
                        }`}
                      />
                    </button>
                  );
                })}

              </div>
            </div>

            {/* ==================================================
                CONTENT PANEL
            ================================================== */}
            {activeContent && (
              <div
                key={activeContent.id}
                className="relative mt-14 w-full max-w-5xl overflow-hidden rounded-[24px] border border-[#7A1022]/10 bg-[#FAF8F5] p-8 shadow-[0_25px_60px_-30px_rgba(84,10,140,0.4)] md:p-14"
              >
                {/* DECORATION */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border-[18px] border-[#D9A441]/10" />

                <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full border-[18px] border-[#7A1022]/5" />

                <div className="relative">

                  {/* ICON */}
                  <div className="flex justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#7A1022] text-xl text-white shadow-lg ring-4 ring-[#D9A441]/20">
                      ✦
                    </span>
                  </div>

                  {/* LABEL */}
                  <p className="mt-5 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#D9A441]">
                    {activeContent.label}
                  </p>

                  {/* TITLE */}
                  <h3 className="mt-3 text-center text-3xl font-bold text-[#540a8c] md:text-4xl">
                    {activeContent.title}
                  </h3>

                  {/* DIVIDER */}
                  <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[#D9A441]" />

                  {/* INTRO */}
                  {activeContent.content && (
                    <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#666666]">
                      {activeContent.content}
                    </p>
                  )}

                  {/* CONTENT ITEMS */}
                  {activeContent.points && (
                    <div className="mx-auto mt-9 max-w-4xl">
                      <div className="grid gap-4 md:grid-cols-2">
                        {activeContent.points.map((point, index) => (
                          <div
                            key={index}
                            className="flex gap-4 rounded-2xl border border-[#7A1022]/10 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#7A1022] text-xs font-bold text-white ring-4 ring-[#D9A441]/10">
                              {index + 1}
                            </span>

                            <p className="text-sm leading-7 text-[#666666]">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* BACK */}
                  {activeContent.id !== "about" && (
                    <div className="mt-10 text-center">
                      <button
                        type="button"
                        onClick={() => setActiveBranch("about")}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#7A1022]/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#540a8c] transition duration-200 hover:bg-[#5F0C1B] hover:text-white"
                      >
                        ← Back to About Us
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;