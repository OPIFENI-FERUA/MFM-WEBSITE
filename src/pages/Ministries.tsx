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
    verse: "The effectual fervent prayer of a righteous man availeth much.",
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
    verse: "Go ye into all the world, and preach the gospel to every creature.",
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
    verse: "Let your light so shine before men, that they may see your good works.",
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
    verse: "Bear ye one another's burdens, and so fulfil the law of Christ.",
    scripture: "Galatians 6:2",
  },
];

function Ministries() {
  const [selectedGroup, setSelectedGroup] = useState(ministryGroups[0]);

  return (
    <main className="min-h-screen bg-white text-[#000000]">
      <PageHero
        label="Ministries"
        title="Ministries"
        description="Discover the ministries where you can grow in faith and serve with purpose."
      />

      <section
        className="bg-white px-4 py-20 sm:px-6 lg:px-8"
        data-no-scroll-reveal
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[320px_1fr]">
            <aside>
              <div className="lg:sticky lg:top-28">
                <div className="mb-7">
                  <p className="mb-3 text-base font-semibold uppercase tracking-[0.2em] text-[#540a8c]">
                    Church Life
                  </p>

                  <h2 className="text-3xl font-bold text-[#000000] sm:text-4xl">
                    Our Ministries
                  </h2>
                </div>

                <div className="border-l-2 border-gray-200">
                  {ministryGroups.map((group) => {
                    const isSelected = selectedGroup.id === group.id;

                    return (
                      <button
                        key={group.id}
                        onClick={() => setSelectedGroup(group)}
                        className={`relative w-full px-6 py-5 text-left transition-all duration-200 ${
                          isSelected
                            ? "bg-[#540a8c]/5 font-semibold text-[#540a8c]"
                            : "text-gray-600 hover:bg-gray-50 hover:text-[#540a8c]"
                        }`}
                      >
                        {isSelected && (
                          <>
                            <span className="absolute left-[-2px] top-0 h-full w-[4px] bg-[#540a8c]" />
                            <span className="absolute left-[-10px] top-1/2 h-5 w-5 -translate-y-1/2 rotate-45 rounded-[2px] bg-[#540a8c]" />
                          </>
                        )}

                        <div className="flex items-start gap-4">
                          <span
                            className={`text-lg font-bold ${
                              isSelected ? "text-[#540a8c]" : "text-gray-400"
                            }`}
                          >
                            {String(group.id).padStart(2, "0")}
                          </span>

                          <span className="text-lg leading-7 sm:text-xl">
                            {group.title}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            <div>
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md">
                <div className="h-2 bg-[#540a8c]" />

                <div className="p-8 sm:p-10 lg:p-12">
                  <div className="mb-10">
                    <p className="mb-3 text-base font-semibold uppercase tracking-[0.18em] text-[#540a8c] sm:text-lg">
                      Ministry {selectedGroup.id}
                    </p>

                    <h1 className="text-3xl font-bold leading-tight text-[#000000] sm:text-4xl lg:text-5xl">
                      {selectedGroup.title}
                    </h1>

                    <p className="mt-4 text-lg leading-8 text-gray-500 sm:text-xl">
                      {selectedGroup.subtitle}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-100 bg-gray-50 p-7 sm:p-9">
                    <h2 className="mb-7 text-2xl font-bold text-[#000000] sm:text-3xl">
                      About This Ministry
                    </h2>

                    <p className="text-lg leading-9 text-gray-700 sm:text-xl">
                      {selectedGroup.summary}
                    </p>

                    <div className="mt-8 space-y-5">
                      {selectedGroup.focus.map((item, index) => (
                        <div key={index} className="flex gap-5">
                          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#540a8c] text-lg font-bold text-white">
                            {index + 1}
                          </span>

                          <p className="text-lg leading-9 text-gray-700 sm:text-xl">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-9 rounded-2xl border-l-4 border-[#540a8c] bg-[#540a8c]/5 px-7 py-6 sm:px-8 sm:py-7">
                    <p className="text-lg italic leading-8 text-gray-700 sm:text-xl">
                      "{selectedGroup.verse}"
                    </p>

                    <p className="mt-3 text-lg font-semibold text-[#540a8c]">
                      {selectedGroup.scripture}
                    </p>
                  </div>

                  <div className="mt-9 flex flex-wrap items-center justify-between gap-5 border-t border-gray-100 pt-7">
                    <div>
                      <p className="text-base uppercase tracking-wider text-gray-400">
                        Ministry Area
                      </p>

                      <p className="mt-2 text-lg font-medium text-gray-700">
                        {selectedGroup.title}
                      </p>
                    </div>

                    <span className="inline-flex items-center rounded-full bg-[#540a8c]/10 px-5 py-2.5 text-base font-semibold text-[#540a8c]">
                      Active Ministry
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
