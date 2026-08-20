import { useState } from "react";
import PageHero from "../components/layout/PageHero";

const ministryGroups = [
  {
    id: 1,
    title: "Prayer & Deliverance",
    subtitle: "A ministry of spiritual warfare and revival",
    summary:
      "We are committed to building a praying church that stands in faith, contends in prayer, and carries the power of God into every area of life.",
    focus: [
      "Weekly prayer meetings and fasting sessions",
      "Deliverance counselling and spiritual guidance",
      "Intercessory support for families, churches, and communities",
    ],
    verse:
      "The effectual fervent prayer of a righteous man availeth much.",
    scripture: "James 5:16",
  },
  {
    id: 2,
    title: "Evangelism & Outreach",
    subtitle: "Reaching the unsaved with the gospel",
    summary:
      "Through open-air evangelism, neighborhood outreach, and compassionate service, we carry the good news of salvation to people in every sphere of life.",
    focus: [
      "Street evangelism and crusade programmes",
      "Community outreach and social care",
      "Tracts, testimonies, and gospel partnerships",
    ],
    verse:
      "Go ye into all the world, and preach the gospel to every creature.",
    scripture: "Mark 16:15",
  },
  {
    id: 3,
    title: "Youth & Children",
    subtitle: "Building the next generation in faith",
    summary:
      "We nurture children and young people with biblical teaching, mentorship, and activities that help them grow in character, courage, and Christlikeness.",
    focus: [
      "Children church and Bible study classes",
      "Youth fellowships and mentorship programmes",
      "Leadership development for young believers",
    ],
    verse: "Train up a child in the way he should go.",
    scripture: "Proverbs 22:6",
  },
  {
    id: 4,
    title: "Women & Men Fellowship",
    subtitle: "Strengthening godly living and service",
    summary:
      "Our fellowship groups provide spiritual accountability, discipleship, and practical support for men and women who desire to grow in holiness and purpose.",
    focus: [
      "Biblical teaching and discipleship",
      "Practical support for families and homes",
      "Encouragement and accountability in daily living",
    ],
    verse:
      "Let your light so shine before men, that they may see your good works.",
    scripture: "Matthew 5:16",
  },
  {
    id: 5,
    title: "Care & Welfare",
    subtitle: "Meeting needs with compassion",
    summary:
      "The care ministry reaches the vulnerable with food, prayer, visits, and practical support, demonstrating the tangible love of Christ in difficult seasons.",
    focus: [
      "Hospital visitation and pastoral care",
      "Support for widows, the elderly, and vulnerable families",
      "Community help and intentional acts of kindness",
    ],
    verse:
      "Bear ye one another's burdens, and so fulfil the law of Christ.",
    scripture: "Galatians 6:2",
  },
];

function Ministries() {
  const [selectedGroup, setSelectedGroup] = useState(ministryGroups[0]);
  const [mobileViewing, setMobileViewing] = useState(false);

  const handleSelectMinistry = (group: (typeof ministryGroups)[number]) => {
    setSelectedGroup(group);
    setMobileViewing(true);
  };

  const handleBackToList = () => {
    setMobileViewing(false);
  };

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      <PageHero
        label="Ministries"
        title="Our Ministries"
        description="Discover the ministries where you can grow in faith and serve with purpose."
      />

      <section
        className="bg-[#FAF8F5] px-4 py-10 sm:px-6 md:py-20 lg:px-8"
        data-no-scroll-reveal
      >
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)]">

            {/* =========================================================
                MOBILE VERSION
                ========================================================= */}

            <div className="lg:hidden">

              {/* =====================================================
                  MOBILE MINISTRY LIST
                  ===================================================== */}

              {!mobileViewing && (
                <div className="bg-white">

                  {/* HEADER */}
                  <div className="border-b border-black/10 bg-[#F7F5F1] p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9A441]">
                      Explore
                    </p>

                    <h2 className="mt-3 text-2xl font-bold text-[#111111]">
                      Our Ministries
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-[#666666]">
                      Select a ministry to learn more about its purpose and
                      activities.
                    </p>
                  </div>

                  {/* MINISTRY LIST */}
                  <div className="p-4">
                    {ministryGroups.map((group, index) => (
                      <button
                        key={group.id}
                        type="button"
                        onClick={() => handleSelectMinistry(group)}
                        className="group mb-3 flex w-full items-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-4 text-left transition-all duration-200 hover:border-[#D9A441] hover:bg-[#FAF8F5]"
                      >
                        {/* NUMBER */}
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D9A441]/15 text-sm font-bold text-[#7A1022] transition-colors group-hover:bg-[#D9A441] group-hover:text-[#111111]">
                          {index + 1}
                        </span>

                        {/* TITLE */}
                        <span className="flex-1 text-sm font-semibold text-[#333333]">
                          {group.title}
                        </span>

                        {/* ARROW */}
                        <span className="text-lg font-semibold text-[#7A1022] transition-transform duration-200 group-hover:translate-x-1">
                          →
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* =====================================================
                  MOBILE MINISTRY DETAILS
                  ===================================================== */}

              {mobileViewing && (
                <div className="bg-white">

                  {/* BACK HEADER */}
                  <div className="border-b border-black/10 bg-[#F7F5F1] px-5 py-4">
                    <button
                      type="button"
                      onClick={handleBackToList}
                      className="flex items-center gap-2 text-sm font-bold text-[#7A1022] transition-colors hover:text-[#D9A441]"
                    >
                      <span className="text-xl leading-none">←</span>
                      Back to Ministries
                    </button>
                  </div>

                  {/* MINISTRY HEADER */}
                  <div className="border-b border-black/10 px-6 py-8">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9A441]">
                      {selectedGroup.subtitle}
                    </p>

                    <h1 className="mt-3 text-3xl font-bold leading-tight text-[#111111]">
                      {selectedGroup.title}
                    </h1>

                    <div className="mt-5 flex items-center gap-3">
                      <div className="h-1 w-14 bg-[#7A1022]" />
                      <div className="h-1 w-8 bg-[#D9A441]" />
                    </div>
                  </div>

                  {/* MAIN CONTENT */}
                  <div className="p-6">

                    {/* OVERVIEW */}
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7A1022]">
                        Ministry Overview
                      </p>

                      <p className="mt-5 text-base leading-8 text-[#666666]">
                        {selectedGroup.summary}
                      </p>
                    </div>

                    {/* FOCUS */}
                    <div className="mt-10">

                      <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-black/10" />

                        <h2 className="whitespace-nowrap text-lg font-bold text-[#111111]">
                          Our Focus
                        </h2>

                        <div className="h-px flex-1 bg-black/10" />
                      </div>

                      <div className="mt-7 space-y-4">
                        {selectedGroup.focus.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-4 border border-black/10 bg-[#FAF8F5] p-4 transition-all duration-200 hover:border-[#D9A441] hover:bg-white"
                          >
                            {/* NUMBER */}
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7A1022] text-sm font-bold text-white">
                              {index + 1}
                            </span>

                            {/* TEXT */}
                            <p className="pt-1 text-sm leading-7 text-[#555555]">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SCRIPTURE */}
                    <div className="mt-10 border-l-4 border-[#D9A441] bg-[#FAF8F5] px-5 py-6">
                      <p className="text-base italic leading-8 text-[#444444]">
                        "{selectedGroup.verse}"
                      </p>

                      <p className="mt-4 font-bold text-[#7A1022]">
                        — {selectedGroup.scripture}
                      </p>
                    </div>

                    {/* MINISTRY AREA */}
                    <div className="mt-8 border-t border-black/10 pt-6">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                        Ministry Area
                      </p>

                      <p className="mt-2 text-lg font-semibold text-[#111111]">
                        {selectedGroup.title}
                      </p>

                      <span className="mt-4 inline-flex items-center rounded-full border border-[#D9A441]/40 bg-[#D9A441]/10 px-5 py-2.5 text-sm font-bold text-[#7A1022]">
                        MFM Kanyanya
                      </span>
                    </div>

                    {/* BOTTOM BACK BUTTON */}
                    <button
                      type="button"
                      onClick={handleBackToList}
                      className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#7A1022] px-5 py-4 text-sm font-bold text-white transition-all duration-200 hover:bg-[#5f0c1b]"
                    >
                      <span className="text-lg">←</span>
                      Back to Ministries
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* =========================================================
                DESKTOP VERSION
                ========================================================= */}

            <div className="hidden lg:grid lg:grid-cols-[300px_1fr]">

              {/* =====================================================
                  LEFT MENU
                  ===================================================== */}

              <aside className="border-r border-black/10 bg-[#F7F5F1] lg:min-h-[700px]">

                {/* MENU HEADER */}
                <div className="border-b border-black/10 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9A441]">
                    Explore
                  </p>

                  <h2 className="mt-3 text-2xl font-bold text-[#111111]">
                    Our Ministries
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-[#666666]">
                    Select a ministry to learn more about its purpose and
                    activities.
                  </p>
                </div>

                {/* MENU ITEMS */}
                <div className="p-4">
                  {ministryGroups.map((group, index) => {
                    const isSelected = selectedGroup.id === group.id;

                    return (
                      <button
                        key={group.id}
                        type="button"
                        onClick={() => setSelectedGroup(group)}
                        className={`relative mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-4 text-left transition-all duration-200 ${
                          isSelected
                            ? "bg-[#7A1022] text-white shadow-lg"
                            : "text-[#444444] hover:bg-white hover:text-[#7A1022]"
                        }`}
                      >
                        {/* NUMBER */}
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                            isSelected
                              ? "bg-[#D9A441] text-[#111111]"
                              : "bg-[#D9A441]/15 text-[#7A1022]"
                          }`}
                        >
                          {index + 1}
                        </span>

                        {/* TITLE */}
                        <span className="flex-1 text-sm font-semibold">
                          {group.title}
                        </span>

                        {/* ARROW */}
                        <span
                          className={`text-lg transition-transform ${
                            isSelected
                              ? "translate-x-1 text-[#D9A441]"
                              : "text-[#7A1022]"
                          }`}
                        >
                          →
                        </span>
                      </button>
                    );
                  })}
                </div>
              </aside>

              {/* =====================================================
                  RIGHT CONTENT
                  ===================================================== */}

              <div className="min-w-0 bg-white">

                {/* HEADER */}
                <div className="border-b border-black/10 px-6 py-8 sm:px-10 lg:px-14 lg:py-10">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9A441]">
                    {selectedGroup.subtitle}
                  </p>

                  <h1 className="mt-3 text-3xl font-bold leading-tight text-[#111111] sm:text-4xl lg:text-5xl">
                    {selectedGroup.title}
                  </h1>

                  <div className="mt-5 flex items-center gap-3">
                    <div className="h-1 w-14 bg-[#7A1022]" />
                    <div className="h-1 w-8 bg-[#D9A441]" />
                  </div>
                </div>

                {/* MAIN CONTENT */}
                <div className="p-6 sm:p-10 lg:p-14">

                  {/* OVERVIEW */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7A1022]">
                      Ministry Overview
                    </p>

                    <p className="mt-5 max-w-3xl text-base leading-8 text-[#666666] sm:text-lg">
                      {selectedGroup.summary}
                    </p>
                  </div>

                  {/* FOCUS */}
                  <div className="mt-12">

                    <div className="flex items-center gap-4">
                      <div className="h-px flex-1 bg-black/10" />

                      <h2 className="text-lg font-bold text-[#111111]">
                        Our Focus
                      </h2>

                      <div className="h-px flex-1 bg-black/10" />
                    </div>

                    <div className="mt-8 space-y-4">
                      {selectedGroup.focus.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-5 border border-black/10 bg-[#FAF8F5] p-5 transition-all duration-200 hover:border-[#D9A441] hover:bg-white hover:shadow-md"
                        >
                          {/* NUMBER */}
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7A1022] text-sm font-bold text-white">
                            {index + 1}
                          </span>

                          {/* TEXT */}
                          <div className="pt-1">
                            <p className="text-base leading-7 text-[#555555]">
                              {item}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SCRIPTURE */}
                  <div className="mt-12 border-l-4 border-[#D9A441] bg-[#FAF8F5] px-7 py-7">
                    <p className="max-w-3xl text-lg italic leading-8 text-[#444444]">
                      "{selectedGroup.verse}"
                    </p>

                    <p className="mt-4 font-bold text-[#7A1022]">
                      — {selectedGroup.scripture}
                    </p>
                  </div>

                  {/* BOTTOM */}
                  <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                        Ministry Area
                      </p>

                      <p className="mt-2 text-lg font-semibold text-[#111111]">
                        {selectedGroup.title}
                      </p>
                    </div>

                    <span className="inline-flex w-fit items-center rounded-full border border-[#D9A441]/40 bg-[#D9A441]/10 px-5 py-2.5 text-sm font-bold text-[#7A1022]">
                      MFM Kanyanya
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default Ministries;