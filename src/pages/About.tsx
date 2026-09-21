import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import DrOlukoya from "../assets/images/Dr-DK-Olukoya.jpg";
import mfmKanyanyaImage from "../assets/images/hero3.jpg";
import mfmLogo from "../assets/images/mfm-logo.png";

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
  // ============================================================
  // MFM KANYANYA
  // ============================================================
  {
    id: "about",
    label: "MFM WORLDWIDE",
    title: "The Spark That Started a Global Fire",

    content:
      "MFM Ministries is a full gospel ministry devoted to the Revival of Apostolic Signs, Holy Ghost fireworks and the unlimited demonstration of the power of God to deliver to the uttermost. Absolute holiness within and without as the greatest spiritual insecticide and a pre-requisite for Heaven is taught openly. MFM is a do-it-yourself Gospel ministry where your hands are trained to wage war and your fingers to do battle. At MFM, aggressive prayer is considered as an aid to spiritual focus and a check against being overwhelmed by the flesh.",

    points: [
      "To propagate the gospel of our Lord Jesus Christ all over the world, promoting the revival of Apostolic signs, wonders, and miracles.",
      "To gather and restore children of God who are lost or stagnating in dead churches.",
      "To train believers in the art and science of spiritual warfare, forging them into an aggressive and victorious army for the Lord.",
      "To guide believers in receiving the baptism of the Holy Ghost and fire, cultivating deeper spiritual experiences.",
      "To build an aggressive end-time army for the Lord.",
      "To operate a relentless Deliverance Ministry, helping people experience freedom from spiritual bondage.",
      "To deliver those who have become spiritually enslaved to false pastors, prophets, and apostles.",
      "To build up heavenly-bound Christians, with making heaven as the ultimate priority.",
      "To purify the Pentecostal landscape of this age from spiritual pollution and compromise.",
      "To raise up a generation of Prayer Eagles who are disciplined, persistent and committed to prayer.",
    ],
  },

  // ============================================================
  // ABOUT US
  // ============================================================
  {
    id: "worldwide",
    label: "About Us",
    title: "Our Story",

    content:
      "MFM was registered with the Registrar of Companies, Kampala, Uganda on May 14, 2004 and as an international NGO on June 11, 2004.",

    points: [
      "To propagate the gospel of our Lord Jesus Christ all over the world.",
      "To promote the revival of Apostolic signs, wonders, and miracles.",
      "To bring together children of God who are lost in dead churches.",
      "To train believers in the art and science of spiritual warfare, thus making them an aggressive and victorious army for the Lord.",
      "To train believers to receive Holy Ghost baptism and fire as well as a daily walk and relationship with the Holy Spirit.",
      "To establish a deliverance ministry wherever we are, helping people experience freedom from spiritual bondage.",
      "To build an aggressive end-time army for the Lord.",
      "To encourage sinners to repent and turn fully to God.",
      "To deliver those who have become slaves to Pastors, Prophets, and Apostles.",
      "To build up heavenly-bound and aggressive Christians, with making heaven as the priority.",
      "To build up prayer eagles.",
      "To purify the Pentecostal landscape of this age from spiritual compromise and pollution.",
    ],
  },

  // ============================================================
  // LEADERSHIP
  // ============================================================
  {
    id: "leadership",
    label: "Our Leadership",
    title: "MFM Uganda Leadership Structure",

    content:
      "MFM Uganda operates through a structured leadership and administrative system designed to provide spiritual oversight, pastoral care and effective administration of the ministry.",

    points: [
      "General Overseer – Provides overall spiritual direction and leadership of the international ministry.",
      "Regional Overseer – Provides spiritual and administrative oversight of the ministry within the region.",
      "Assistant Pastors (APs) – Support pastoral leadership through spiritual care, teaching and supervision.",
      "Church Administration – Coordinates the day-to-day administrative activities of the church.",
      "Accounts & Finance – Responsible for financial records, accountability, budgeting and financial administration.",
      "Department Heads – Provide leadership and coordination within different departments and ministry units.",
      "Ministry Workers – Serve faithfully in various departments and support the work of the church.",
    ],
  },

  // ============================================================
  // LOCATIONS
  // ============================================================
  {
    id: "locations",
    label: "Other Locations",
    title: "MFM Locations in Uganda",

    content:
      "MFM Uganda has churches and branches in different parts of the country. These locations provide opportunities for people to worship, pray, receive biblical teaching, fellowship and participate in the work of the ministry.",

    points: [
      "MFM Regional Headquarters – Kanyanya, Kampala",
      "MFM branches in Kampala and surrounding areas",
      "MFM churches and branches in other regions of Uganda",
      "Prayer and fellowship centres",
      "Evangelism and outreach locations",
    ],
  },

  // ============================================================
  // MINISTRIES
  // ============================================================
  {
    id: "ministries",
    label: "Ministries",
    title: "Our Ministries",

    content:
      "MFM Kanyanya has different ministries and departments through which members can grow spiritually, serve God and participate in the mission of the church.",

    points: [
      "Evangelism & Outreach",
      "Deliverance Ministry",
      "Prayer Ministry",
      "Intercession",
      "Discipleship & Bible Teaching",
      "Youth Ministry",
      "Teenage Ministry",
      "Children's Ministry",
      "Men's Ministry",
      "Women's Ministry",
      "Ushers",
      "Visitation Group",
      "Choir & Music Ministry",
      "Welfare & Community Service",
    ],
  },
];

function About() {
  const [activeBranch, setActiveBranch] =
    useState<BranchId>("about");

  const activeContent = branches.find(
    (branch) => branch.id === activeBranch
  );

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#7e099e]">

      {/* ==================================================
          HERO
      ================================================== */}

      <PageHero
        label="About Us"
        title="About MFM Kanyanya"
        description="Discover our story, leadership, locations and the ministries through which we serve."
      />

      {/* ==================================================
          MAIN SECTION
      ================================================== */}

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">

          {/* ==================================================
              HEADER
          ================================================== */}

          <div className="mb-14 text-center">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9A441]">
              Discover MFM Kanyanya
            </span>

            <h2 className="mt-3 text-4xl font-bold text-[#7e099e] md:text-5xl">
              Our Ministry
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-black">
              Learn about our history, mission, leadership, locations and
              the different ministries through which we serve God and our
              community.
            </p>

          </div>

          {/* ==================================================
              ROOT
          ================================================== */}

          <div className="flex flex-col items-center">

            <div className="relative z-20 flex h-28 w-28 items-center justify-center rounded-full border-[5px] border-white bg-white p-1 shadow-[0_10px_35px_rgba(126,9,158,0.3)] ring-2 ring-[#D9A441]">
              <img
                src={mfmLogo}
                alt="MFM logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="h-14 w-[2px] bg-[#7e099e]" />

            {/* ==================================================
                FIVE BRANCHES
            ================================================== */}

            <div className="relative w-full max-w-7xl">

              <div className="absolute left-[10%] right-[10%] top-0 hidden h-[2px] bg-[#7e099e] lg:block" />

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">

                {branches.map((branch, index) => {

                  const isActive =
                    activeBranch === branch.id;

                  return (
                    <button
                      key={branch.id}
                      type="button"
                      onClick={() =>
                        setActiveBranch(branch.id)
                      }
                      className="group relative flex flex-col items-center focus:outline-none"
                    >

                      <div className="hidden h-10 w-[2px] bg-[#7e099e] lg:block" />

                      <span
                        className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white text-xs font-bold shadow-lg transition-all duration-300 ${
                          isActive
                            ? "scale-110 bg-[#7e099e] text-white ring-2 ring-[#D9A441]"
                            : "bg-[#FAF8F5] text-[#7e099e] ring-1 ring-[#7e099e]/20 group-hover:scale-110 group-hover:bg-[#7e099e] group-hover:text-white"
                        }`}
                      >
                        {index + 1}
                      </span>

                      <span
                        className={`mt-4 flex min-h-[52px] w-full items-center justify-center rounded-full px-3 py-3 text-center text-[10px] font-bold uppercase leading-4 tracking-[0.06em] transition-all duration-300 sm:text-xs ${
                          isActive
                            ? "bg-[#7e099e] text-white shadow-lg"
                            : "bg-[#FAF8F5] text-[#7e099e] group-hover:bg-[#7e099e]/10"
                        }`}
                      >
                        {branch.label}
                      </span>

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
                className="relative mt-14 w-full max-w-6xl overflow-hidden rounded-[28px] border border-[#7e099e]/10 bg-[#FAF8F5] p-6 shadow-[0_25px_60px_-30px_rgba(126,9,158,0.4)] md:p-14"
              >

                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border-[18px] border-[#D9A441]/10" />

                <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full border-[18px] border-[#7e099e]/5" />

                <div className="relative">

                  {/* ==================================================
                      MFM KANYANYA
                  ================================================== */}

                  {activeContent.id === "about" ? (

                    <div>

                      <div className="text-center">

                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9A441]">
                          MFM Kanyanya
                        </p>

                        <h3 className="mt-3 text-3xl font-bold text-[#7e099e] md:text-4xl">
                          The Spark That Started a Global Fire
                        </h3>

                        <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[#D9A441]" />

                      </div>

                      <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">

                        <div className="group relative overflow-hidden rounded-[24px] bg-[#171717] shadow-[0_20px_50px_-25px_rgba(0,0,0,0.35)]">

                          <img
                            src={DrOlukoya}
                            alt="Dr. D.K. Olukoya, General Overseer of MFM Worldwide"
                            className="h-[420px] w-full object-contain transition duration-700"
                          />

                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 pb-7 pt-20 text-white">
                            <p className="text-2xl font-bold md:text-3xl">
                              Dr. D.K. Olukoya
                            </p>
                            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-[#D9A441]">
                              General Overseer
                            </p>
                            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                              MFM Worldwide
                            </p>
                          </div>

                        </div>

                        <div>

                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9A441]">
                            Mountain of Fire and Miracles Ministries
                          </p>

                          <h4 className="mt-3 text-3xl font-bold leading-tight text-[#7e099e] md:text-4xl">
                            The Fire That Started a Global Movement
                          </h4>

                          <div className="mt-5 h-1 w-14 rounded-full bg-[#D9A441]" />

                          <div className="mt-6 space-y-5 text-base leading-8 text-black">

                            <p>
                              MFM Ministries is a full gospel ministry
                              devoted to the Revival of Apostolic Signs,
                              Holy Ghost fireworks and the unlimited
                              demonstration of the power of God to deliver
                              to the uttermost.
                            </p>

                            <p>
                              Absolute holiness within and without as the
                              greatest spiritual insecticide and a
                              pre-requisite for Heaven is taught openly.
                            </p>

                            <p>
                              MFM is a do-it-yourself Gospel ministry where
                              your hands are trained to wage war and your
                              fingers to do battle.
                            </p>

                            <p>
                              At MFM, aggressive prayer is considered as an
                              aid to spiritual focus and a check against
                              being overwhelmed by the flesh.
                            </p>

                          </div>

                        </div>

                      </div>

                      <div className="mt-12 flex justify-center">
                        <a
                          href="https://www.mountainoffire.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-[#7e099e] bg-[#7e099e] px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg transition duration-200 hover:bg-[#65077e]"
                        >
                          Visit Headquarters
                          <ArrowUpRight size={15} strokeWidth={2.5} />
                        </a>
                      </div>

                      {/* ==================================================
                          MFM OBJECTIVES
                      ================================================== */}

                      <div className="mt-16">

                        <div className="text-center">

                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9A441]">
                            Our Mandate
                          </p>

                          <h4 className="mt-3 text-3xl font-bold text-[#7e099e] md:text-4xl">
                            Objectives of MFM Ministries
                          </h4>

                          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-black">
                            The ministry is committed to spreading the
                            Gospel, raising spiritually empowered believers
                            and advancing the Kingdom of God.
                          </p>

                          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[#D9A441]" />

                        </div>

                        {/* NUMBERED LIST - NO CARDS */}

                        <ol className="mx-auto mt-8 max-w-4xl space-y-4">

                          {activeContent.points?.map(
                            (point, index) => (

                              <li
                                key={index}
                                className="flex gap-5 border-b border-[#7e099e]/10 pb-4 last:border-b-0"
                              >

                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7e099e] text-xs font-bold text-white ring-4 ring-[#D9A441]/10">
                                  {index + 1}
                                </span>

                                <p className="pt-1 text-base leading-7 text-black md:text-lg">
                                  {point}
                                </p>

                              </li>

                            )
                          )}

                        </ol>

                      </div>

                    </div>

                  ) : activeContent.id === "worldwide" ? (

                    /* ==================================================
                       ABOUT US — SHORT STORY
                    ================================================== */

                    <div>

                      {/* HEADER */}

                      <div className="text-center">

                        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#7e099e] text-xl text-white shadow-lg ring-4 ring-[#D9A441]/20">
                          ✦
                        </span>

                        <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#D9A441]">
                          About Us
                        </p>

                        <h3 className="mt-3 text-3xl font-bold text-[#7e099e] md:text-4xl">
                          Our Story
                        </h3>

                        <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[#D9A441]" />

                      </div>

                      {/* IMAGE */}

                      <div className="mt-10 overflow-hidden rounded-[28px] shadow-[0_25px_60px_-30px_rgba(126,9,158,0.5)]">

                        <img
                          src={mfmKanyanyaImage}
                          alt="Mountain of Fire and Miracles Ministries"
                          className="h-[300px] w-full object-cover md:h-[450px]"
                        />

                      </div>

                      {/* ==================================================
                          SHORT STORY
                      ================================================== */}

                      <div className="mx-auto mt-12 max-w-4xl">

                        <div className="space-y-4 text-base leading-7 text-black md:text-lg md:leading-8">

                          <p>
                            MFM was registered with the Registrar of
                            Companies, Kampala, Uganda on{" "}
                            <strong className="text-[#7e099e]">
                              May 14, 2004
                            </strong>{" "}
                            and as an international NGO on{" "}
                            <strong className="text-[#7e099e]">
                              June 11, 2004
                            </strong>.
                          </p>

                          <p>
                            The church is also registered with the National
                            Fellowship of Born Again Pentecostal Churches,
                            Uganda.
                          </p>

                          <p>
                            On Saturday,{" "}
                            <strong className="text-[#7e099e]">
                              June 12, 2004
                            </strong>
                            , the first service was held at Buganga Road
                            Primary School, Kampala. In October of the same
                            year, the church moved to Kampala Nursery &
                            Daycare Centre, Rashid Khamis, Kampala.
                          </p>

                          <p>
                            On{" "}
                            <strong className="text-[#7e099e]">
                              January 2, 2006
                            </strong>
                            , the church relocated to 14 Old Kampala,
                            opposite International Hospital.
                          </p>

                          <p>
                            In{" "}
                            <strong className="text-[#7e099e]">
                              July 2006
                            </strong>
                            , the church acquired a plot of land in
                            Kanyanya where the Regional Headquarters is
                            presently located.
                          </p>

                        </div>

                      </div>

                      {/* ==================================================
                          GOALS AND AIMS
                      ================================================== */}

                      <div className="mx-auto mt-16 max-w-5xl">

                        <div className="text-center">

                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9A441]">
                            Our Mandate
                          </p>

                          <h4 className="mt-3 text-2xl font-bold text-[#7e099e] md:text-3xl">
                            Goals and Aims
                          </h4>

                          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-black">
                            The following are the goals and aims of the
                            Mountain of Fire and Miracles Ministries, as
                            handed to the General Overseer.
                          </p>

                          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#D9A441]" />

                        </div>

                        {/* NUMBERED GOALS — NO CARDS */}

                        <ol className="mt-8 space-y-4">

                          {activeContent.points?.map(
                            (goal, index) => (

                              <li
                                key={index}
                                className="flex gap-5 border-b border-[#7e099e]/10 pb-4 last:border-b-0"
                              >

                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7e099e] text-sm font-bold text-white ring-4 ring-[#D9A441]/10">
                                  {index + 1}
                                </span>

                                <p className="pt-1 text-base leading-7 text-black md:text-lg">
                                  {goal}
                                </p>

                              </li>

                            )
                          )}

                        </ol>

                      </div>

                    </div>

                  ) : (

                    /* ==================================================
                       OTHER BRANCHES
                    ================================================== */

                    <div>

                      <div className="flex justify-center">

                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#7e099e] text-xl text-white shadow-lg ring-4 ring-[#D9A441]/20">
                          ✦
                        </span>

                      </div>

                      <p className="mt-5 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#D9A441]">
                        {activeContent.label}
                      </p>

                      <h3 className="mt-3 text-center text-3xl font-bold text-[#7e099e] md:text-4xl">
                        {activeContent.title}
                      </h3>

                      <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[#D9A441]" />

                      {activeContent.content && (
                        <p className="mx-auto mt-7 max-w-3xl text-center text-base leading-8 text-black">
                          {activeContent.content}
                        </p>
                      )}

                      {activeContent.points && (
                        <div className="mx-auto mt-10 max-w-5xl">

                          <div className="space-y-6">

                            {activeContent.points.map(
                              (point, index) => (

                                <div
                                  key={index}
                                  className="flex gap-5 border-b border-[#7e099e]/10 pb-6 last:border-b-0"
                                >

                                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7e099e] text-xs font-bold text-white ring-4 ring-[#D9A441]/10">
                                    {index + 1}
                                  </span>

                                  <p className="pt-1 text-base leading-7 text-black">
                                    {point}
                                  </p>

                                </div>

                              )
                            )}

                          </div>

                        </div>
                      )}

                      <div className="mt-10 text-center">

                        <button
                          type="button"
                          onClick={() =>
                            setActiveBranch("about")
                          }
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#7e099e]/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#7e099e] transition duration-200 hover:bg-[#7e099e] hover:text-white"
                        >
                          ← Back to MFM Kanyanya
                        </button>

                      </div>

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